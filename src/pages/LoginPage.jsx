import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { ShieldCheck } from 'lucide-react';

function LoginPage() {
  const [error, setError] = useState('');
  const { loginWithGoogle } = useAuth();

  const handleGoogleLogin = async () => {
    setError('');
    try {
      const successUrl = `${window.location.origin}/`;
      const failureUrl = `${window.location.origin}/login`;

      await loginWithGoogle(successUrl, failureUrl);
    } catch (err) {
      console.error('Google login initiation failed:', err);
      setError(err.message || 'Could not initiate Google login. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md text-center border border-gray-200  transition-all">
        <div className="flex flex-col items-center mb-6">
          <ShieldCheck className="text-blue-600 w-10 h-10 mb-2" />
          <h1 className="text-3xl font-bold text-gray-800">PassOP</h1>
          <p className="text-sm text-gray-600 mt-1">
            Your secure, AI-assisted password manager
          </p>
        </div>

        <h2 className="text-lg font-medium text-gray-700 mb-4">
          Log in to your account
        </h2>

        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <img src="https://www.google.com/favicon.ico" alt="Google icon" className="w-5 h-5 mr-2" />
          Continue with Google
        </button>

        {error && (
          <p className="mt-4 text-sm text-red-600">
            {error}
          </p>
        )}
      </div>
    </div>
  );
}

export default LoginPage;