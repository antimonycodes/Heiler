import { FormLayout } from "./FormLayout";

type StepOneData = {
    firstName: string;
    lastName: string;
    mail: string;
    dob: string;
};

type StepOneProps = StepOneData & {
    updateFields: (fields: Partial<StepOneData>) => void;
};

export function StepForm1({ firstName, lastName, mail, dob, updateFields }: StepOneProps) {
    return (
        <div className="flex justify-center items-center py-12">
            <FormLayout>
                {/* First Name Input */}
                <div className="relative bg-[#F2FFF9] mb-4">
                    <label className='cursor-pointer'>
                        <input
                            id="firstName"
                            type="text"
                            value={firstName}
                            onChange={(e) => updateFields({ firstName: e.target.value })}
                            className='w-full px-4 py-4 text-md text-black bg-[#F2FFF9] border-white border-2 rounded-lg border-opacity-50 outline-none focus:border-blue-500 placeholder-gray-300 placeholder-opacity-0 transition duration-200'
                            placeholder=" "
                        />
                        <span className='text-xl text-black text-opacity-80 bg-[#F2FFF9] absolute left-6 top-1/2 transform -translate-y-1/2 px-1 transition duration-200 input-text'>
                            First Name
                        </span>
                    </label>
                </div>

                {/* Last Name Input */}
                <div className="relative bg-[#F2FFF9] mb-4">
                    <label className='relative cursor-pointer'>
                        <input
                            id="lastName"
                            type="text"
                            value={lastName}
                            onChange={(e) => updateFields({ lastName: e.target.value })}
                            className='w-full px-4 py-4 text-md text-black bg-[#F2FFF9] border-white border-2 rounded-lg border-opacity-50 outline-none focus:border-blue-500 placeholder-gray-300 placeholder-opacity-0 transition duration-200'
                            placeholder=" "
                        />
                        <span className='text-xl text-black text-opacity-80 bg-[#F2FFF9] absolute left-6 top-1/3 transform -translate-y-1/2 px-1 transition duration-200 input-text'>
                            Last Name
                        </span>
                    </label>
                </div>

                {/* Email Address Input */}
                <div className="relative bg-[#F2FFF9] mb-4">
                    <label className='relative cursor-pointer'>
                        <input
                            id="mail"
                            type="email"
                            value={mail}
                            onChange={(e) => updateFields({ mail: e.target.value })}
                            className='w-full px-4 py-4 text-md text-black bg-[#F2FFF9] border-white border-2 rounded-lg border-opacity-50 outline-none focus:border-blue-500 placeholder-gray-300 placeholder-opacity-0 transition duration-200'
                            placeholder=" "
                        />
                        {/* <span className='text-xl text-black text-opacity-80 bg-[#F2FFF9] absolute left-6 top-1/3 transform -translate-y-1/2 px-1 transition duration-200 input-text'>
                            Email Address
                        </span> */}
                    </label>
                </div>

                {/* Date of Birth Input */}
                <div className="relative bg-[#F2FFF9] mb-4">
                    <label className='relative cursor-pointer'>
                        <input
                            id="dob"
                            type="date"
                            value={dob}
                            onChange={(e) => updateFields({ dob: e.target.value })}
                            className='w-full px-4 py-4 text-md text-black bg-[#F2FFF9] border-white border-2 rounded-lg border-opacity-50 outline-none focus:border-blue-500 placeholder-gray-300 placeholder-opacity-0 transition duration-200'
                            placeholder=" "
                        />
                    </label>
                </div>
            </FormLayout>
        </div>
    );
}
