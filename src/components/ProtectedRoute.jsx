import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center text-xl text-gray-700">Loading application...</div>;
  }

  if (!user) {
    // User is not authenticated, redirect to the login page
    return <Navigate to="/login" replace />;
  }

  // User is authenticated, render the children (the protected component)
  return children ? children : <Outlet />;
};

export default ProtectedRoute;