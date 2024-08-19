import { StepForm1 } from './StepForm1';
import { StepForm2 } from './StepForm2';
import { StepForm3 } from './StepForm3';
import { UseStepForm } from './UseStepForm';
import logo from '/logo.png';
import backArrow from "/larrow.png";
import success from "/Success.png";
import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

type FormData = {
    firstName: string;
    lastName: string;
    mail: string;
    dob: string;
    phone: string;
    gender: string;
    occupation: string;
    nationality: string;
    home_address: string;
    pword: string;
    cpword: string;
};

const INITIAL_DATA: FormData = {
    firstName: "",
    lastName: "",
    mail: "",
    dob: "",
    phone: "",
    gender: "",
    occupation: "",
    nationality: "",
    home_address: "",
    pword: "",
    cpword: ""
};

const SignUp = () => {
    const [data, setData] = useState<FormData>(INITIAL_DATA);
    const [isSuccess, setIsSuccess] = useState(false);
    const navigate = useNavigate(); // Initialize navigate

    function updateFields(fields: Partial<FormData>) {
        setData((prev) => ({
            ...prev,
            ...fields
        }));
    }

    const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } = UseStepForm([
        <StepForm1 key="stepOne" {...data} updateFields={updateFields} />,
        <StepForm2 key="stepTwo" {...data} updateFields={updateFields} />,
        <StepForm3 key="stepThree" {...data} updateFields={updateFields} />
    ]);

    function onSubmit(e: FormEvent) {
        e.preventDefault();
        if (isLastStep) {
            // Handle form submission here
            console.log("Form Submitted!", data);
            setIsSuccess(true);
        } else {
            next();
        }
    }

    function handleOkayClick() {
        // Redirect to SignIn page
        navigate('/signin'); // Ensure this matches your route path
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
                    onClick={handleOkayClick} // Use the handleOkayClick function
                >
                    Okay
                </button>
            </div>
        )
    );
};

export default SignUp;
