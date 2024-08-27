import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define the form data types directly here
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
  specialty: string;
  induction_year: string;
  place_of_practice: string;
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
  specialty?: string;
  induction_year?: string;
  place_of_practice?: string;
};

// Union type for form data
type FormData = DoctorFormData | PatientFormData;

interface UserContextType {
  userType: 'doctor' | 'patient' | null;
  setUserType: (type: 'doctor' | 'patient') => void;
  formData: Partial<FormData>;
  updateFormData: (fields: Partial<FormData>) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [userType, setUserType] = useState<'doctor' | 'patient' | null>(null);
  const [formData, setFormData] = useState<Partial<FormData>>({});

  const updateFormData = (fields: Partial<FormData>) => {
    setFormData(prev => ({ ...prev, ...fields }));
  };

  return (
    <UserContext.Provider value={{ userType, setUserType, formData, updateFormData }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
