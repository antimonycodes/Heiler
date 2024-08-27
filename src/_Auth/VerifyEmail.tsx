import { FormEvent, useEffect, useState } from 'react';
import axios from 'axios';
import logo from '/logo.png';
import { FormLayout } from './FormLayout';
import { Navigate, useNavigate } from 'react-router-dom';


const VerifyEmail = () => {
  const [code, setCode] = useState('');
  const [mail, setMail] = useState('');
  const navigate = useNavigate();


  // Retrieve email from local storage
  useEffect(() => {
    const storedEmail = localStorage.getItem('email');
    if (storedEmail) {
      setMail(storedEmail);
    }
  }, []);

  const handleVerify = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const baseURL = import.meta.env.VITE_APP_BASE_URL;
      const endpoint = '/auth/verify.email'; // Adjust the endpoint as needed
      const url = `${baseURL}${endpoint}`;

      // Retrieve API key or token
      const apiKey = import.meta.env.VITE_APP_API_KEY; // or retrieve from context or another secure source

      // Send the verification request using axios
      const response = await axios.post(url, { mail, code }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`, // Add Authorization header if needed
        }
      });

      console.log("Verification successful!", response.data);
      // Handle success (e.g., navigate to another page)
      navigate("/successful")
      
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Axios error verifying the email:', error.response?.data || error.message);
      } else {
        console.error('Unexpected error:', error);
      }
      // Handle error (e.g., show an error message to the user)
    }
  };

  return (
    <form onSubmit={handleVerify}  className="w-full gap-3 flex flex-col text-center justify-center px-4 py-8 rounded-md bg-white shadow-[#2A2A2A33]">
          <div className="flex justify-center items-center mb-4">
            <img src={logo} alt="logo" width={100} height={100} />
          </div>
        <div>
      <h2 className="font-bold text-xl mb-2">Verify Your Email</h2>
      <p className="text-[#A3B1AA] mb-4">Email: {mail}</p>
      </div>
      <FormLayout>
      <input
        type="text"
        value={code}
         className="bg-[#F2FFF9] outline-none border border-customGray w-full px-4 py-4 rounded-md"
        onChange={(e) => setCode(e.target.value)}
        placeholder="Enter your verification code"
        required
      />
      </FormLayout>
      <button type="submit"  className="bg-customGreen text-white py-2 px-4 rounded mt-4 w-full">Verify</button>
    </form>
  );
};

export default VerifyEmail;
