'use client'
import React, { useState } from 'react';
import { ref, query, orderByChild, equalTo, get } from 'firebase/database';
import { db } from '../../lib/firebase'
import { useCookies } from 'next-client-cookies';
import { useRouter } from 'next/navigation';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const cookies = useCookies();
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const usersRef = query(ref(db, 'users'), orderByChild('email'), equalTo(email));
      const snapshot = await get(usersRef);

      if (snapshot.exists()) {
        const userData = Object.values(snapshot.val())[0] as { password: string; isActive: boolean; email: string };

        // Compare password as string (remove parseInt)
        if (userData.password === password) {
          if (userData.isActive) {
            // Set cookie with key 'auth_token' to match middleware
            cookies.set('token', 'lksadjlkasdjlaksdnakldnkladioandlasdaokxaksdnalsdjosdkasldmnaslkdjoaidnniaomsdmandiowqmdomdasnd');
            router.push('/dashboard');
            alert('Login successful!');
          } else {
            setError('Account is not active');
          }
        } else {
          setError('Invalid email or password');
        }
      } else {
        setError('Invalid email or password');
      }
    } catch (err) {
      console.error(err);
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="bg-gray-900 p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-purple-400">Login</h2>
        
        {error && (
          <div className="mb-4 p-3 bg-red-900 text-red-300 rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-purple-200">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-purple-600 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 bg-gray-800 text-purple-100"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-purple-200">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-purple-600 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 bg-gray-800 text-purple-100"
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
              >
                {showPassword ? (
                  <svg className="h-5 w-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                  </svg>
                ) : (
                  <svg className="h-5 w-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 px-4 bg-purple-600 text-white font-semibold rounded-md shadow hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 ${
              loading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;