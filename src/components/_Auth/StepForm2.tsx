import { FormLayout } from "./FormLayout";
// import maleIcon from "/male.png"; // Make sure this is the correct path to your male icon
import femaleIcon from "/female.png"; // Make sure this is the correct path to your female icon
import 'react-phone-number-input/style.css';
import PhoneInput, { E164Number } from 'react-phone-number-input';
import { useState } from "react";

type StepTwoData = {
    phone: string;
    gender: string;
    occupation: string;
    nationality: string;
    home_address: string;
};

type StepTwoProps = StepTwoData & {
    updateFields: (fields: Partial<StepTwoData>) => void;
};

export function StepForm2({ phone, gender, occupation, nationality, home_address, updateFields }: StepTwoProps) {
    const [value, setValue] = useState<E164Number | undefined>(undefined);

    // Handler to toggle gender selection
    const handleGenderChange = (value: string) => {
        // Ensure only one gender is selected
        if (gender === value) {
            updateFields({ gender: '' }); // Deselect if the same checkbox is clicked again
        } else {
            updateFields({ gender: value });
        }
    };

    return (
        <FormLayout>
            {/* phone selection */}
            <div>
                <PhoneInput
                defaultCountry="NG"
                    placeholder="Enter phone number"
                    value={value}
                    onChange={setValue}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white"
                />
            </div>
            {/* Gender Selection */}
            <div className="flex gap-6 mb-4">
                <div className="flex gap-2 items-center">
                    <input
                        type="checkbox"
                        id="male"
                        checked={gender === 'male'}
                        onChange={() => handleGenderChange('male')}
                        className="mr-2"
                    />
                    <label htmlFor="male" className="flex items-center cursor-pointer">
                        <img src={femaleIcon} alt="Male Icon" className="w-8 h-8 mr-2" />
                        Male
                    </label>
                </div>
                <div className="flex gap-2 items-center">
                    <input
                        type="checkbox"
                        id="female"
                        checked={gender === 'female'}
                        onChange={() => handleGenderChange('female')}
                        className="mr-2"
                    />
                    <label htmlFor="female" className="flex items-center cursor-pointer">
                        <img src={femaleIcon} alt="Female Icon" className="w-8 h-8 mr-2" />
                        Female
                    </label>
                </div>
            </div>
            {/* Occupation */}
            <input
                type="text"
                placeholder="Occupation"
                className="bg-[#F2FFF9] outline-none border border-customGray w-full px-4 py-4"
                value={occupation}
                onChange={(e) => updateFields({ occupation: e.target.value })}
            />
            {/* Nationality */}
            <input
                type="text"
                placeholder="Nationality"
                className="bg-[#F2FFF9] outline-none border border-customGray w-full px-4 py-4"
                value={nationality}
                onChange={(e) => updateFields({ nationality: e.target.value })}
            />
            {/* Home Address */}
            <input
                type="text"
                placeholder="Home Address"
                className="bg-[#F2FFF9] outline-none border border-customGray w-full px-4 py-4"
                value={home_address}
                onChange={(e) => updateFields({ home_address: e.target.value })}
            />
        </FormLayout>
    );
}
