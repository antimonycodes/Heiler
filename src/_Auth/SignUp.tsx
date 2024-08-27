import React, { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { StepForm1 } from './StepForm1';
import { StepForm2 } from './StepForm2';
import { StepForm3 } from './StepForm3';
import { UseStepForm } from './UseStepForm';
import logo from '/logo.png';
import backArrow from "/larrow.png";
import success from "/Success.png";
import { useUser } from '@/contexts/UserContext';
import axios from 'axios';
import StepForm4 from './StepForm4';

const SignUp = () => {
  const { userType, formData, updateFormData } = useUser();
  const [isSuccess, setIsSuccess] = React.useState(false);
  const navigate = useNavigate();

  const isDoctor = userType === 'doctor';
//   const isPatient = userType === 'patient';

  // Define the form data types directly in this file
  type DoctorFormData = {
    firstName: string;
    lastName: string;
    mail: string;
    dob: string;
    phone: string;
    gender: string;
    nationality: string;
    home_address: string;
    pword: string;
    cpword: string;
    terms: boolean;
    specialty?: string;
    induction_year?: string;
    place_of_practice?: string;
  };

  type PatientFormData = {
    firstName: string;
    lastName: string;
    mail: string;
    dob: string;
    phone: string;
    gender: string;
    // occupation?: string; // Optional for Patient
    nationality: string;
    home_address: string;
    pword: string;
    cpword: string;
    terms: boolean;
  };

  type FormData = DoctorFormData | PatientFormData;

  // Define exact types for each step's props
  interface StepOneData {
    firstName: string;
    lastName: string;
    mail: string;
    dob: string;
    updateFields: (fields: Partial<StepOneData>) => void;
  }

  interface StepTwoData {
    phone: string;
    gender: string;
    // occupation: string;
    nationality: string;
    home_address: string;
    updateFields: (fields: Partial<StepTwoData>) => void;
    isDoctor: boolean;
  }

  interface StepThreeData {
    pword: string;
    cpword: string;
    terms: boolean;
    updateFields: (fields: Partial<StepThreeData>) => void;
  }

  interface StepFourData {
    specialty: string;
    induction_year: string;
    place_of_practice: string;
    updateFields: (fields: Partial<StepFourData>) => void;
  }

  // Create props based on the current form data and requirements
  const stepForm1Props: StepOneData = {
    firstName: formData.firstName || '',
    lastName: formData.lastName || '',
    mail: formData.mail || '',
    dob: formData.dob || '',
    updateFields: (fields) => updateFormData(fields),
  };

  // Check if userType is 'patient'
  const isPatient = userType === 'patient';

  const stepForm2Props: StepTwoData = {
    phone: formData.phone || '',
    gender: formData.gender || '',
    // Conditionally assign occupation if userType is 'patient'
    // occupation: isPatient ? (formData as PatientFormData).occupation || '' : '',
    nationality: formData.nationality || '',
    home_address: formData.home_address || '',
    updateFields: (fields) => updateFormData(fields),
    isDoctor: isDoctor,
  };

  const stepForm3Props: StepThreeData = {
    pword: formData.pword || '',
    cpword: formData.cpword || '',
    terms: formData.terms || false,
    updateFields: (fields) => updateFormData(fields),
  };

  const stepForm4Props: StepFourData = {
    specialty: formData.specialty || '',
    induction_year: formData.induction_year || '',
    place_of_practice: formData.place_of_practice || "",
    updateFields: (fields) => updateFormData(fields),
  };

  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } = UseStepForm([
    <StepForm1 key="stepOne" {...stepForm1Props} />,
    <StepForm2 key="stepTwo" {...stepForm2Props} />,
    ...(isDoctor ? [<StepForm4 key="stepFour" {...stepForm4Props} />] : []), // Conditionally add Step 4
    <StepForm3 key="stepThree" {...stepForm3Props} />,
  ]);
  


//   function onSubmit(e: FormEvent) {
//     e.preventDefault();
//     if (isLastStep) {
//       console.log("Form Submitted!", formData);
//       setIsSuccess(true);
//     //   navigate('/main'); // Adjust navigation as needed
//     } else {
//       next();
//     }
//   }


const onSubmit = async (e: FormEvent) => {
  e.preventDefault();
  
  if (isLastStep) {
    try {
      // Construct the URL based on userType
      const baseURL = import.meta.env.VITE_APP_BASE_URL;
      const endpoint = isDoctor ? '/auth/doctor.register' : '/auth/user.register';
      const url = `${baseURL}${endpoint}`;
      console.log(endpoint)
      
      // Retrieve API key or token (for demonstration, replace with actual method of retrieval)
      const apiKey = import.meta.env.VITE_APP_API_KEY; // or retrieve from context or another secure source

      // Send the API request using axios
      const response = await axios.post(url, formData, {
        
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`, // Add Authorization header if needed
        }
      });

      // Handle the response
      console.log("Form Submitted!", response.data);
        localStorage.setItem('email', formData.mail ?? ""); // Store email in local storage
      // setIsSuccess(true);
      navigate("/verifyEmail")

      // Navigate to the appropriate page
      // navigate('/main'); // Adjust navigation as needed
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Axios error submitting the form:', error.response?.data || error.message);
      } else {
        console.error('Unexpected error:', error);
      }
      // Handle the error (e.g., show an error message to the user)
    }
  } else {
    next();
  }
};

  function handleOkayClick() {
    navigate('/signin'); 
  }

  const buttonText = isLastStep ? "Create Account" : "Next";

  return (
    !isSuccess ? (
      <div>
        {!isFirstStep && (
          <div 
            className='border rounded-full bg-white p-2 w-fit mb-2 cursor-pointer' 
            onClick={back}
            aria-label="Go back"
          >
            <img src={backArrow} alt="back" width={20} />
          </div>
        )}
        <form 
          onSubmit={onSubmit} 
          className="w-full gap-3 flex flex-col text-center justify-center px-4 py-8 rounded-md bg-white shadow-[#2A2A2A33]"
        >
          <div className="flex justify-center items-center mb-4">
            <img src={logo} alt="logo" width={100} height={100} />
          </div>
          <div className="item-center">
            <h1 className="font-bold text-xl mb-2">Create an Account</h1>
            <p className="text-[#A3B1AA] mb-4">Register to have access to the Dashboard.</p>
            {step}
            <button
              type="submit"
              className="bg-customGreen text-white py-2 px-4 rounded mt-4 w-full"
            >
              {buttonText}
            </button>
          </div>
        </form>
      </div>
    ) : (
      <div className="w-full gap-3 flex flex-col items-center text-center justify-center px-4 py-8 rounded-md bg-white shadow-[#2A2A2A33]">
        <img src={success} alt="Success" width={150} />
        <h1 className='text-lg font-bold'>You have successfully created your account.</h1>
        <p className='text-customGray'>You can now have access to your dashboard to find and chat with a doctor of your choice.</p>
        <button 
          className="bg-customGreen text-white py-2 px-4 rounded mt-4 w-full"
          onClick={handleOkayClick}
        >
          Okay
        </button>
      </div>
    )
  );
};

export default SignUp;
