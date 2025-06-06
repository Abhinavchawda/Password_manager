import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { account } from '../appwrite/config';
import { useNavigate } from 'react-router-dom';
import { Calendar, LogOutIcon, Mail, User } from 'lucide-react';

const ProfilePage = () => {
    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);
    const [profileData, setProfileData] = useState(null);

    const { user: loggedInUser, logout } = useAuth();

    useEffect(() => {
        const fetchProfile = async () => {
            if (!loggedInUser) {
                setLoading(false);
                navigate('/login');
                return;
            }
            try {
                const user = await account.get();
                setProfileData(user);
            } catch (error) {
                console.error("Error fetching profile data:", error);
                setProfileData(null);
            } finally {
                setLoading(false);
            }
        };

        fetchProfile();
    }, [loggedInUser]); // Re-run if loggedInUser changes

    const handleLogout = async () => {
        try {
            await logout(); // Call the logout function from AuthContext
            navigate('/login');
        } catch (error) {
            console.error("Error during logout:", error);
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-50">
                <p className="text-gray-600 text-lg">Loading profile...</p>
            </div>
        );
    }

    if (!profileData) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-8">
                <h2 className="text-2xl font-bold text-red-600 mb-4">You are not logged in.</h2>
                <button
                    onClick={() => navigate('/login')}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md transition-colors duration-200"
                >
                    Go to Login
                </button>
            </div>
        );
    }

    // Format creation date for better readability
    const creationDate = new Date(profileData.$createdAt).toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });

    return (
        <div className="min-h-[calc(100vh-8rem)] flex items-center justify-center p-8 font-inter">
            <div className="bg-white shadow-xl rounded-xl p-8 md:p-12 w-full max-w-lg text-center transform transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl border border-gray-200">
                <h2 className="text-4xl font-extrabold text-indigo-800 mb-8 tracking-tight">
                    Your Profile
                </h2>

                <div className="space-y-6 text-left mb-8">
                    {/* Name Field */}
                    <div className="flex items-center p-3 bg-gray-100 rounded-lg shadow-sm">
                        <User className="text-indigo-600 mr-3" size={20} />
                        <p className="text-gray-800 flex-1">
                            <span className="font-semibold text-gray-900 block text-sm">Name:</span>
                            <span className="text-lg">{profileData.name || 'Not set'}</span>
                        </p>
                    </div>

                    {/* Email Field */}
                    <div className="flex items-center p-3 bg-gray-100 rounded-lg shadow-sm">
                        <Mail className="text-indigo-600 mr-3" size={20} />
                        <p className="text-gray-800 flex-1">
                            <span className="font-semibold text-gray-900 block text-sm">Email:</span>
                            <span className="text-lg">{profileData.email}</span>
                        </p>
                    </div>

                    {/* Account Created Field */}
                    <div className="flex items-center p-3 bg-gray-100 rounded-lg shadow-sm">
                        <Calendar className="text-indigo-600 mr-3" size={20} />
                        <p className="text-gray-800 flex-1">
                            <span className="font-semibold text-gray-900 block text-sm">Account Created:</span>
                            <span className="text-lg">{creationDate}</span>
                        </p>
                    </div>
                </div>

                <button
                    onClick={handleLogout}
                    className="flex items-center justify-center gap-2 mt-8 w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transform hover:scale-105"
                >
                    <LogOutIcon size={20} /> Logout
                </button>
            </div>
        </div>
    );
};

export default ProfilePage;