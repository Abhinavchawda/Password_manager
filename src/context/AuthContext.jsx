import { createContext, useContext, useState, useEffect } from 'react';
import { account } from '../appwrite/config';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const currentUser = await account.get();
                setUser(currentUser);                
            } catch (error) {
                // User is not logged in or session expired
                console.warn('No active session found.');
                setUser(null);
            } finally {
                setLoading(false);
            }
        };
        fetchUser();
    }, []);

    const value = {
        user,
        setUser,
        loading,
        logout: async () => {
            await account.deleteSession('current');
            setUser(null);
        },
        loginWithGoogle: async (successUrl, failureUrl) => {
            // This call redirects the browser to Google for authentication
            await account.createOAuth2Session('google', successUrl, failureUrl);
            // Appwrite will handle the redirect, so subsequent user state update is handled by the useEffect on successful redirect
        }
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children} {/* Only render children once loading is complete */}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};