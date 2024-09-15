import { useEffect } from "react";
import { FormLayout } from "./FormLayout";
import { motion } from "framer-motion";

type StepThreeData = {
  pword: string;
  cpword: string;
  terms: boolean;
};

type StepThreeProps = StepThreeData & {
  errors: {
    pword?: string;
    cpword?: string;
    terms?: string;
  };
  updateFields: (fields: Partial<StepThreeData>) => void;
};

export function StepForm3({
  pword,
  cpword,
  terms,
  errors,
  updateFields,
}: StepThreeProps) {
  const handleTermsChange = () => {
    updateFields({ terms: !terms });
  };

  useEffect(() => {
    console.log("Errors in StepForm3:", errors); // Debugging
  }, [errors]);

  return (
    <FormLayout>
      <div className="w-full flex flex-col gap-8 items-center">
        {/* Password Input */}
        <div className="w-full relative">
          <div className="relative w-full bg-[#F2FFF9]">
            <label className="cursor-pointer">
              <input
                id="pword"
                type="password"
                value={pword}
                onChange={(e) => updateFields({ pword: e.target.value })}
                className="w-full px-4 py-4 text-md text-black bg-[#F2FFF9] border-[#C2C8D099] border rounded-lg outline-none focus:border-blue-500 placeholder-gray-300 placeholder-opacity-0 transition duration-200"
                placeholder=" "
              />
              <span className="text-customGray bg-[#F2FFF9] absolute left-6 top-1/2 transform -translate-y-1/2 px-1 transition duration-200 input-text">
                Password
              </span>
            </label>
            {errors.pword && (
              <motion.span
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-red-500 text-sm absolute -bottom-5 left-0"
              >
                *{errors.pword}
              </motion.span>
            )}
          </div>
        </div>

        {/* Confirm Password Input */}
        <div className="w-full relative bg-[#F2FFF9]">
          <label className="relative cursor-pointer">
            <input
              id="cpword"
              type="password"
              value={cpword}
              onChange={(e) => updateFields({ cpword: e.target.value })}
              className="w-full px-4 py-4 text-md text-black bg-[#F2FFF9] border-[#C2C8D099] border rounded-lg outline-none focus:border-blue-500 placeholder-gray-300 placeholder-opacity-0 transition duration-200"
              placeholder=" "
            />
            <span className="text-customGray bg-[#F2FFF9] absolute left-6 top-1/2 transform -translate-y-1/2 px-1 transition duration-200 input-text">
              Confirm Password
            </span>
          </label>
          {errors.cpword && (
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="text-red-500 text-sm absolute -bottom-5 left-0"
            >
              *{errors.cpword}
            </motion.span>
          )}
        </div>

        {/* Terms and Conditions Checkbox */}
        <div className=" w-full flex flex-col mb-4 relative">
          <div className=" w-full text-left">
            <label
              htmlFor="terms"
              className="flex gap-2 items-center   cursor-pointer"
            >
              <div>
                <input
                  type="checkbox"
                  id="terms"
                  checked={terms}
                  onChange={handleTermsChange}
                  className="hidden"
                />
                <span className="w-4 h-4 bg-white border-2 border-[#B0CAD9] rounded-sm flex items-center justify-center">
                  {terms && (
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
              </div>
              <div className=" w-full">
                <p className=" leading-4 text-customGray">
                  I hereby accept the{" "}
                  <span className=" text-black">terms and conditions</span> of
                  Healing Race
                </p>
              </div>
            </label>
          </div>
          {errors.terms && (
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="text-red-500 text-sm absolute -bottom-5 left-0"
            >
              *{errors.terms}
            </motion.span>
          )}
        </div>
      </div>
    </FormLayout>
  );
}
