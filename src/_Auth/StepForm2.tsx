import { useState, useEffect } from 'react';
import PhoneInput, { E164Number } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import femaleIcon from '/female.png'; 
import { FormLayout } from './FormLayout';
import { useUser } from '@/contexts/UserContext';

interface DoctorFormData {
    phone: string;
    gender: string;
}

interface PatientFormData {
    // occupation?: string;
}

type StepTwoData = DoctorFormData & PatientFormData & {
    nationality: string;
    home_address: string;
};

interface StepTwoProps extends StepTwoData {
    updateFields: (fields: Partial<StepTwoData>) => void;
    isDoctor: boolean;
}

export function StepForm2({
    // occupation = '',
    nationality,
    home_address,
    phone,
    gender,
    updateFields,
    // isDoctor
}: StepTwoProps) {
    const { userType } = useUser();

    const [value, setValue] = useState<E164Number | undefined>(phone);

    useEffect(() => {
        setValue(phone);
    }, [phone]);

    const handleGenderChange = (value: string) => {
        if (gender === value) {
            updateFields({ gender: '' });
        } else {
            updateFields({ gender: value });
        }
    };

    const handlePhoneChange = (newPhone: E164Number | undefined) => {
        setValue(newPhone);
        updateFields({ phone: newPhone || '' });
    };

    return (
        <FormLayout>
            {/* Phone selection */}
            <div className="mb-4">
                <PhoneInput
                    defaultCountry="NG"
                    placeholder="Enter phone number"
                    value={value}
                    onChange={handlePhoneChange}
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

            {/* Conditional Fields */}
            {/* {!isDoctor && userType === 'patient' && (
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Occupation"
                        className="bg-[#F2FFF9] outline-none border border-customGray w-full px-4 py-4 rounded-md"
                        value={occupation}
                        onChange={(e) => updateFields({ occupation: e.target.value })}
                    />
                </div>
            )} */}

            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Nationality"
                    className="bg-[#F2FFF9] outline-none border border-customGray w-full px-4 py-4 rounded-md"
                    value={nationality}
                    onChange={(e) => updateFields({ nationality: e.target.value })}
                />
            </div>

            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Home Address"
                    className="bg-[#F2FFF9] outline-none border border-customGray w-full px-4 py-4 rounded-md"
                    value={home_address}
                    onChange={(e) => updateFields({ home_address: e.target.value })}
                />
            </div>
        </FormLayout>
    );
}
