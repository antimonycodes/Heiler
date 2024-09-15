import React, { FormEvent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { StepForm1 } from "./StepForm1";
import { StepForm2 } from "./StepForm2";
import { StepForm3 } from "./StepForm3";
import { UseStepForm } from "./UseStepForm";
import backArrow from "/larrow.png";
import success from "/Success.png";
import axios from "axios";
import StepForm4 from "./StepForm4";
import { toast } from "react-toastify";

const SignUp = () => {
  const navigate = useNavigate();
  const [isDoctor, setIsDoctor] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Load user type from localStorage
  useEffect(() => {
    const userType = localStorage.getItem("selectedUserType");
    setIsDoctor(userType === "doctor");
  }, []);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mail: "",
    dob: "",
    phone: "",
    gender: "",
    nationality: "",
    home_address: "",
    pword: "",
    cpword: "",
    terms: false,
    specialty: 0,
    induction_year: "",
    place_of_practice: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    mail: "",
    dob: "",
    phone: "",
    pword: "",
    cpword: "",
    terms: "",
    specialty: "",
    induction_year: "",
    place_of_practice: "",
  });

  const updateFormData = (fields: Partial<typeof formData>) => {
    setFormData((prev) => ({ ...prev, ...fields }));
  };

  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    UseStepForm([
      <StepForm1
        key="stepOne"
        {...formData}
        errors={errors}
        updateFields={updateFormData}
      />,
      <StepForm2
        key="stepTwo"
        {...formData}
        errors={errors}
        isDoctor={isDoctor}
        updateFields={updateFormData}
      />,
      ...(isDoctor
        ? [
            <StepForm4
              key="stepFour"
              {...formData}
              errors={errors}
              updateFields={updateFormData}
            />,
          ]
        : []),
      <StepForm3
        key="stepThree"
        {...formData}
        errors={errors}
        updateFields={updateFormData}
      />,
    ]);

  // Validation function for doctors
  const validateDoctorSteps = () => {
    let requiredFields: string[] = [];
    if (currentStepIndex === 0) {
      requiredFields = ["firstName", "lastName", "mail", "dob"];
    } else if (currentStepIndex === 1) {
      requiredFields = ["phone", "gender", "nationality", "home_address"];
    } else if (currentStepIndex === 2) {
      requiredFields = ["specialty", "induction_year", "place_of_practice"];
    } else if (currentStepIndex === 3) {
      requiredFields = ["pword", "cpword", "terms"];
    }

    // Check for empty fields and update the errors state
    let valid = true;
    const newErrors: Record<string, string> = {};

    requiredFields.forEach((field) => {
      if (field === "terms" && !formData.terms) {
        valid = false;
        newErrors[field] = "You must accept the terms and conditions";
      } else if (!formData[field as keyof typeof formData]) {
        valid = false;
        newErrors[field] = `${field} is required`;
      }
    });

    // Specific validation for password fields
    if (currentStepIndex === 3) {
      if (formData.pword !== formData.cpword) {
        valid = false;
        newErrors.cpword = "Passwords do not match";
      }
    }

    setErrors(newErrors);
    return valid;
  };

  // Validation function for patients
  const validatePatientSteps = () => {
    let requiredFields: string[] = [];
    if (currentStepIndex === 0) {
      requiredFields = ["firstName", "lastName", "mail", "dob"];
    } else if (currentStepIndex === 1) {
      requiredFields = ["phone", "nationality", "home_address"];
    } else if (currentStepIndex === 2) {
      requiredFields = ["pword", "cpword", "terms"];
    }

    // Check for empty fields and update the errors state
    let valid = true;
    const newErrors: Record<string, string> = {};

    requiredFields.forEach((field) => {
      if (field === "terms" && !formData.terms) {
        valid = false;
        newErrors[field] = "You must accept the terms and conditions";
      } else if (!formData[field as keyof typeof formData]) {
        valid = false;
        newErrors[field] = `${field} is required`;
      }
    });

    // Specific validation for password fields
    if (currentStepIndex === 2) {
      if (formData.pword !== formData.cpword) {
        valid = false;
        newErrors.cpword = "Passwords do not match";
      }
    }

    setErrors(newErrors);
    return valid;
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Validate the current step
    const isValid = isDoctor ? validateDoctorSteps() : validatePatientSteps();

    if (isValid) {
      if (isLastStep) {
        // Handle final submission
        try {
          const baseURL = import.meta.env.VITE_APP_BASE_URL;
          const endpoint = isDoctor
            ? "/auth/doctor.register"
            : "/auth/user.register";
          const url = `${baseURL}${endpoint}`;

          const response = await axios.post(url, formData, {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${import.meta.env.VITE_APP_API_KEY}`,
            },
          });

          localStorage.setItem("email", formData.mail);
          navigate("/verifyEmail");
        } catch (error: any) {
          // Set backend errors if they exist
          if (error.response && error.response.data.errors) {
            const backendErrors = error.response.data.errors;
            setErrors((prevErrors) => ({ ...prevErrors, ...backendErrors }));
          } else {
            toast.error("Error submitting the form.");
          }
        }
      } else {
        // Move to the next step if validation passes
        next();
      }
    } else {
      toast.error("Please fill out all required fields.");
    }
  };

  return !isSuccess ? (
    <div>
      {!isFirstStep && (
        <div
          className=" absolute top-2 border rounded-full bg-white p-2 w-fit mb-2 cursor-pointer"
          onClick={back}
        >
          <img src={backArrow} alt="back" width={20} />
        </div>
      )}
      <form
        onSubmit={onSubmit}
        className=" gap-3 flex flex-col text-center justify-center px-4 py-4 rounded-md bg-white shadow-md"
      >
        <div className="flex justify-center items-center ">
          <img src="/logo.png" alt="logo" width={100} height={100} />
        </div>
        <div className="item-center">
          <h1 className="font-bold text-xl mb-">Create an Account</h1>
          <p className="text-gray-500 mb-8">
            Register to have access to the Dashboard.
          </p>
          {step}
          <button
            type="submit"
            className="bg-customGreen text-white py-2 px-4 rounded mt-4 w-full"
          >
            {isLastStep ? "Create Account" : "Next"}
          </button>
          <p className=" mt-4 text-customGray">
            Already have an account?{" "}
            <Link to="/signin">
              <span className=" text-customGreen font-semibold">Log in</span>
            </Link>
          </p>
        </div>
      </form>
    </div>
  ) : (
    <div className="w-full flex flex-col items-center text-center justify-center px-4 py-8 bg-white shadow-md rounded-md">
      <img src={success} alt="Success" width={150} />
      <h1 className="text-lg font-bold">
        You have successfully created your account.
      </h1>
      <p className="text-gray-500">You can now access your dashboard.</p>
      <button
        className="bg-customGreen text-white py-2 px-4 rounded mt-4 w-full cursor-pointer"
        onClick={() => navigate("/signin")}
      >
        Okay
      </button>
    </div>
  );
};

export default SignUp;
