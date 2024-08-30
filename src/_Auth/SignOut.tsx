import React from 'react';
import { useAuth } from '@/contexts/AuthContext'; // Adjust the import path as needed
import { useNavigate } from 'react-router-dom';

const SignOut = () => {
  const { logout } = useAuth(); // Get the logout function from context
  const navigate = useNavigate();

  const handleSignOut = () => {
    logout(); // Call the logout function to update state and remove user data
    localStorage.removeItem('token'); // Optionally remove token from local storage
    navigate('/signin'); // Redirect to login or another page after sign-out
  };

  return (
    <button 
      onClick={handleSignOut}
      className="bg-red-500 text-white py-2 px-4 rounded"
    >
      Sign Out
    </button>
  );
};

export default SignOut;
