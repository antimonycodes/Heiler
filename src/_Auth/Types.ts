// types.ts

export type DoctorFormData = {
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
  };
  
  export type PatientFormData = {
    firstName: string;
    lastName: string;
    mail: string;
    dob: string;
    phone: string;
    gender: string;
    // occupation?: string;  // Optional for Patient
    nationality: string;
    home_address: string;
    pword: string;
    cpword: string;
    terms: boolean;
  };
  
  // Union type for form data
  export type FormData = DoctorFormData | PatientFormData;
  