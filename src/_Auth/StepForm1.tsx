import { FormLayout } from "./FormLayout";
import { motion } from "framer-motion";

type StepOneData = {
  firstName: string;
  lastName: string;
  mail: string;
  dob: string;
};

type StepOneProps = StepOneData & {
  updateFields: (fields: Partial<StepOneData>) => void;
};

export function StepForm1({
  firstName,
  lastName,
  mail,
  dob,
  errors,
  updateFields,
}: StepOneProps) {
  return (
    <div className="flex w-full items-center">
      <FormLayout>
        <div
          className={`w-full flex flex-col ${
            errors ? "gap-8" : "gap-8"
          } items-center`}
        >
          {/* First Name Input */}
          <div className="w-full relative">
            <div className="relative w-full bg-[#F2FFF9]">
              <label className="cursor-pointer">
                <input
                  id="firstName"
                  type="text"
                  value={firstName}
                  onChange={(e) => updateFields({ firstName: e.target.value })}
                  className="w-full px-4 py-4 text-md text-black bg-[#F2FFF9] border-[#C2C8D099] border rounded-lg outline-none focus:border-blue-500 placeholder-gray-300 placeholder-opacity-0 transition duration-200"
                  placeholder=" "
                />
                <span className="text-customGray bg-[#F2FFF9] absolute left-6 top-1/2 transform -translate-y-1/2 px-1 transition duration-200 input-text">
                  First Name
                </span>
              </label>
              {errors.firstName && (
                <motion.span
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="text-red-500 text-sm absolute -bottom-5 left-0"
                >
                  *{errors.firstName}
                </motion.span>
              )}
            </div>
          </div>

          {/* Last Name Input */}
          <div className="w-full relative bg-[#F2FFF9]">
            <label className="cursor-pointer">
              <input
                id="lastName"
                type="text"
                value={lastName}
                onChange={(e) => updateFields({ lastName: e.target.value })}
                className="w-full px-4 py-4 text-md text-black bg-[#F2FFF9] border-[#C2C8D099] border rounded-lg outline-none focus:border-blue-500 placeholder-gray-300 placeholder-opacity-0 transition duration-200"
                placeholder=" "
              />
              <span className="text-customGray bg-[#F2FFF9] absolute left-6 top-1/2 transform -translate-y-1/2 px-1 transition duration-200 input-text">
                Last Name
              </span>
            </label>
            {errors.lastName && (
              <motion.span
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-red-500 text-sm absolute -bottom-5 left-0"
              >
                *{errors.lastName}
              </motion.span>
            )}
          </div>

          {/* Email Address Input */}
          <div className="w-full relative bg-[#F2FFF9]">
            <label className="cursor-pointer">
              <input
                id="mail"
                type="email"
                value={mail}
                onChange={(e) => updateFields({ mail: e.target.value })}
                className="w-full px-4 py-4 text-md text-black bg-[#F2FFF9] border-[#C2C8D099] border rounded-lg outline-none focus:border-blue-500 placeholder-gray-300 placeholder-opacity-0 transition duration-200"
                placeholder=" "
              />
              <span className="text-customGray bg-[#F2FFF9] absolute left-6 top-1/2 transform -translate-y-1/2 px-1 transition duration-200 input-text">
                Email Address
              </span>
            </label>
            {errors.mail && (
              <motion.span
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-red-500 text-sm absolute -bottom-5 left-0"
              >
                *{errors.mail}
              </motion.span>
            )}
          </div>

          {/* Date of Birth Input */}
          <div className="w-full relative bg-[#F2FFF9]">
            <label className="cursor-pointer">
              <input
                id="dob"
                type="text"
                value={dob}
                onChange={(e) => updateFields({ dob: e.target.value })}
                className="w-full px-4 py-4 text-md text-black bg-[#F2FFF9] border-[#C2C8D099] border rounded-lg outline-none focus:border-blue-500 placeholder-gray-300 placeholder-opacity-0 transition duration-200"
                placeholder=" "
              />
              <span className="text-customGray bg-[#F2FFF9] absolute left-6 top-1/2 transform -translate-y-1/2 px-1 transition duration-200 input-text">
                Date of Birth
              </span>
            </label>
            {errors.dob && (
              <motion.span
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-red-500 text-sm absolute -bottom-5 left-0"
              >
                *{errors.dob}
              </motion.span>
            )}
          </div>
        </div>
      </FormLayout>
    </div>
  );
}
