import React, { useState, useEffect } from "react";
import { FormLayout } from "./FormLayout";
import arrow from "/rarrow.png";
import axios from "axios";
import { motion } from "framer-motion";

type StepFourData = {
  specialty: number;
  induction_year: string;
  place_of_practice: string;
};

type StepFourProps = StepFourData & {
  updateFields: (fields: Partial<StepFourData>) => void;
  errors?: {
    specialty?: string;
    induction_year?: string;
    place_of_practice?: string;
  };
};

interface Specialty {
  id: number;
  name: string;
}

interface SpecialtyResponse {
  success: boolean;
  message: string;
  data: Specialty[];
}

const StepForm4 = ({
  specialty,
  induction_year,
  place_of_practice,
  updateFields,
  errors = {},
}: StepFourProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [specialties, setSpecialties] = useState<Specialty[]>([]); // State to hold fetched specialties
  const [loading, setLoading] = useState(true); // State to handle loading
  const [error, setError] = useState<string | null>(null); // State to handle errors
  const [selectedSpecialty, setSelectedSpecialty] = useState<Specialty | null>(
    null
  ); // Track the selected specialty

  useEffect(() => {
    const fetchSpecialties = async () => {
      try {
        const baseURL = import.meta.env.VITE_APP_BASE_URL; // Fetch base URL from env variables
        const endpoint = "/general/getSpecialties"; // Replace with the actual endpoint
        const url = `${baseURL}${endpoint}`;
        const apiKey = import.meta.env.VITE_APP_API_KEY; // Retrieve API key from env variables or another secure source

        const response = await axios.get<SpecialtyResponse>(url, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`, // Add Authorization header if needed
          },
        });

        if (response.data.success) {
          setSpecialties(response.data.data); // Update state with fetched specialties
        } else {
          setError("Failed to load specialties");
        }
      } catch (err) {
        console.error("Error fetching specialties:", err);
        setError("Failed to load specialties");
      } finally {
        setLoading(false);
      }
    };

    fetchSpecialties();
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleSelectSpecialty = (selected: Specialty) => {
    setSelectedSpecialty(selected);
    updateFields({ specialty: selected.id }); // Update the ID as a string
    setIsDropdownOpen(false); // Close dropdown after selection
  };

  return (
    <div className="flex w-full items-center py-">
      <FormLayout>
        {/* Specialty Input with Dropdown */}
        <div className="w-full relative bg-[#F2FFF9] mb-4">
          <label className="relative cursor-pointer">
            <input
              id="specialty"
              type="text"
              value={selectedSpecialty ? selectedSpecialty.name : ""} // Display name of the selected specialty
              readOnly // Make input read-only to only use it for displaying selected value
              className="w-full px-4 py-4 text-md text-black bg-[#F2FFF9] border-[#C2C8D099] border rounded-lg outline-none focus:border-blue-500 placeholder-gray-300 placeholder-opacity-0 transition duration-200"
              placeholder=" "
            />
            <span className="text-customGray bg-[#F2FFF9] absolute left-6 top-1/2 transform -translate-y-1/2 px-1 transition duration-200 input-text">
              Specialty
            </span>
            <img
              src={arrow}
              width={20}
              alt="Dropdown arrow"
              className="absolute right-4 top-[10%] cursor-pointer"
              onClick={toggleDropdown}
            />
          </label>
          {isDropdownOpen && (
            <div className="absolute bg-white border border-gray-300 rounded-lg mt-2 w-full z-10">
              {loading && <div className="px-4 py-2">Loading...</div>}
              {error && <div className="px-4 py-2 text-red-500">{error}</div>}
              {!loading &&
                !error &&
                Array.isArray(specialties) &&
                specialties.map((spec) => (
                  <div
                    key={spec.id}
                    onClick={() => handleSelectSpecialty(spec)}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                  >
                    {spec.name}
                  </div>
                ))}
            </div>
          )}
          {errors.specialty && (
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="text-red-500 text-sm absolute -bottom-5 left-0"
            >
              *{errors.specialty}
            </motion.span>
          )}
        </div>

        {/* Induction Year Input */}
        <div className="relative bg-[#F2FFF9] mb-4">
          <label className="relative cursor-pointer">
            <input
              id="induction_year"
              type="text"
              value={induction_year}
              onChange={(e) => updateFields({ induction_year: e.target.value })}
              className="w-full px-4 py-4 text-md text-black bg-[#F2FFF9] border-[#C2C8D099] border rounded-lg outline-none focus:border-blue-500 placeholder-gray-300 placeholder-opacity-0 transition duration-200"
              placeholder=" "
            />
            <span className="text-customGray bg-[#F2FFF9] absolute left-6 top-1/2 transform -translate-y-1/2 px-1 transition duration-200 input-text">
              Induction Year
            </span>
          </label>
          {errors.induction_year && (
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="text-red-500 text-sm absolute -bottom-5 left-0"
            >
              *{errors.induction_year}
            </motion.span>
          )}
        </div>

        {/* Place of Practice Input */}
        <div className="relative bg-[#F2FFF9] mb-4">
          <label className="relative cursor-pointer">
            <input
              id="place_of_practice"
              type="text"
              value={place_of_practice}
              onChange={(e) =>
                updateFields({ place_of_practice: e.target.value })
              }
              className="w-full px-4 py-4 text-md text-black bg-[#F2FFF9] border-[#C2C8D099] border rounded-lg outline-none focus:border-blue-500 placeholder-gray-300 placeholder-opacity-0 transition duration-200"
              placeholder=" "
            />
            <span className="text-customGray bg-[#F2FFF9] absolute left-6 top-1/2 transform -translate-y-1/2 px-1 transition duration-200 input-text">
              Place of Practice
            </span>
          </label>
          {errors.place_of_practice && (
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="text-red-500 text-sm absolute -bottom-5 left-0"
            >
              *{errors.place_of_practice}
            </motion.span>
          )}
        </div>
      </FormLayout>
    </div>
  );
};

export default StepForm4;
