import { useState, useEffect } from "react";
import PhoneInput, { E164Number } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import maleIcon from "../assets/Mgender.svg";
import femaleIcon from "../assets/Fgender.svg";
import { FormLayout } from "./FormLayout";
import { motion } from "framer-motion";

interface DoctorFormData {
  phone: string;
  gender: string;
}

interface PatientFormData {
  // occupation?: string;
}

type StepTwoData = DoctorFormData &
  PatientFormData & {
    nationality: string;
    home_address: string;
  };

interface StepTwoProps extends StepTwoData {
  updateFields: (fields: Partial<StepTwoData>) => void;
  isDoctor: boolean;
  errors?: {
    phone?: string;
    gender?: string;
    nationality?: string;
    home_address?: string;
    // Add additional fields if necessary
  };
}

export function StepForm2({
  nationality,
  home_address,
  phone,
  gender,
  updateFields,
  errors = {},
  isDoctor,
}: StepTwoProps) {
  const [value, setValue] = useState<E164Number | undefined>(phone);

  useEffect(() => {
    setValue(phone);
  }, [phone]);

  useEffect(() => {
    console.log("Errors in StepForm2:", errors); // Debugging
  }, [errors]);

  const handleGenderChange = (value: string) => {
    if (gender === value) {
      updateFields({ gender: "" });
    } else {
      updateFields({ gender: value });
    }
  };

  const handlePhoneChange = (newPhone: E164Number | undefined) => {
    setValue(newPhone);
    updateFields({ phone: newPhone || "" });
  };

  return (
    <FormLayout>
      {/* Phone Selection */}
      <div className="mb-4 relative">
        <PhoneInput
          defaultCountry="NG"
          placeholder="Enter phone number"
          value={value}
          onChange={handlePhoneChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white"
        />
        {errors.phone && (
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="text-red-500 text-sm absolute -bottom-5 left-0"
          >
            *{errors.phone}
          </motion.span>
        )}
      </div>

      {/* Gender Selection */}
      <div className="flex gap-6 mb-4">
        <div className="flex gap-2 items-center">
          <label htmlFor="male" className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              id="male"
              checked={gender === "male"}
              onChange={() => handleGenderChange("male")}
              className="hidden"
            />
            <span className="w-4 h-4 mr-2 bg-white border-2 border-[#B0CAD9] rounded-sm flex items-center justify-center">
              {gender === "male" && (
                <svg
                  className="w-3 h-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.75 16.75L4.75 11.75 6.25 10.25 9.75 13.75 17.75 5.75 19.25 7.25z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </span>
            Male
            <img src={maleIcon} alt="Male Icon" className="ml-2" />
          </label>
        </div>

        <div className="flex gap-2 items-center">
          <label htmlFor="female" className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              id="female"
              checked={gender === "female"}
              onChange={() => handleGenderChange("female")}
              className="hidden"
            />
            <span className="w-4 h-4 mr-2 bg-white border-2 border-[#B0CAD9] rounded-sm flex items-center justify-center">
              {gender === "female" && (
                <svg
                  className="w-3 h-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 16a4 4 0 0 0-4-4H4a4 4 0 0 0 4 4h4zM4 16a8 8 0 0 1 8 8 8 8 0 0 1 8-8H4zm12 0h4a4 4 0 0 0-4-4h-4a4 4 0 0 0 4 4zm-8 0h4v4H8v-4z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </span>
            Female
            <img src={femaleIcon} alt="Female Icon" className="ml-2" />
          </label>
        </div>
        {errors.gender && (
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="text-red-500 text-sm absolute -bottom-5 left-0"
          >
            *{errors.gender}
          </motion.span>
        )}
      </div>

      {/* Nationality */}
      <div className="mb-4 relative">
        <input
          type="text"
          placeholder="Nationality"
          className="bg-[#F2FFF9] outline-none border border-customGray w-full px-4 py-4 rounded-md"
          value={nationality}
          onChange={(e) => updateFields({ nationality: e.target.value })}
        />
        {errors.nationality && (
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="text-red-500 text-sm absolute -bottom-5 left-0"
          >
            *{errors.nationality}
          </motion.span>
        )}
      </div>

      {/* Home Address */}
      <div className="mb-4 relative">
        <input
          type="text"
          placeholder="Home Address"
          className="bg-[#F2FFF9] outline-none border border-customGray w-full px-4 py-4 rounded-md"
          value={home_address}
          onChange={(e) => updateFields({ home_address: e.target.value })}
        />
        {errors.home_address && (
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="text-red-500 text-sm absolute -bottom-5 left-0"
          >
            *{errors.home_address}
          </motion.span>
        )}
      </div>
    </FormLayout>
  );
}
