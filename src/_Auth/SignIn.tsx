import { Link, useNavigate } from 'react-router-dom';
import { FormLayout } from './FormLayout'; // Ensure this is correctly implemented
import logo from '/logo.png';
import { FormEvent, useState } from 'react';
import axios from 'axios';
import { useAuth } from '@/contexts/AuthContext';
import { useUser } from '@/contexts/UserContext';

const SignIn = () => {
  const [mail, setMail] = useState('');
  const [pword, setPword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { userType } = useUser();
  const { isAuthenticated, login } = useAuth();
  const isDoctor = userType === 'doctor';

  const handleSignIn = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const baseURL = import.meta.env.VITE_APP_BASE_URL;
      const endpoint = isDoctor ? '/auth/doctor.login' : '/auth/user.login'; // Fixed endpoint for login
      const url = `${baseURL}${endpoint}`;

      // Retrieve API key or token (if needed)
      const apiKey = import.meta.env.VITE_APP_API_KEY; // or retrieve from context or another secure source

      // Send the sign-in request using axios
      const response = await axios.post(url, { mail, pword }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`, // Add Authorization header if needed
        }
      });

      console.log("Sign-in successful!", response.data);
      
      // Handle success (e.g., store token, navigate to dashboard)
      localStorage.setItem('token', response.data.data.token); // Adjust based on your backend response
      
      // Call the login function from AuthContext
      await login({ email: mail, password: pword });

      navigate('/'); // Navigate to the appropriate page after sign-in

    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Axios error:', error.response?.data); // Log full error response
        setError(error.response?.data.message || 'Sign-in failed. Please try again.');
      } else {
        console.error('Unexpected error:', error); // Log unexpected error
        setError('Unexpected error occurred. Please try again.');
      }
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center px-4 py-8 rounded-md bg-white shadow-[#2A2A2A33]">
      <form onSubmit={handleSignIn} className="w-full max-w-sm">
        <div className="flex justify-center items-center mb-4">
          <img src={logo} alt="logo" width={100} height={100} />
        </div>
        <h1 className="font-bold text-center text-xl mb-2">Welcome Back</h1>
        <p className="text-[#A3B1AA] mb-4">Log in to continue to your Dashboard.</p>
        <FormLayout>
          <input
            type="email"
            placeholder="Email Address"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
            className="bg-[#F2FFF9] outline-none border border-customGray w-full px-4 py-4 mb-4"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={pword}
            onChange={(e) => setPword(e.target.value)}
            className="bg-[#F2FFF9] outline-none border border-customGray w-full px-4 py-4 mb-4"
            required
          />
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <Link to="/forgotPassword">
            <h6 className='text-customGray text-right mb-4'>Forgot password?</h6>
          </Link>
          <button
            type="submit"
            className="bg-customGreen text-white py-2 px-4 rounded mt-4 w-full"
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
          <p className="mt-4">
            Don't have an account? <Link to="/signup"><span className='text-customGreen font-bold'>SignUp</span></Link>
          </p>
        </FormLayout>
      </form>
    </div>
  );
};

export default SignIn;
