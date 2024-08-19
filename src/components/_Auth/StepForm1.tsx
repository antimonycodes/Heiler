import { FormLayout } from "./FormLayout";

type StepOneData ={
    firstName: string,
    lastName: string,
    mail: string,
    dob: string
}

type StepOneProps = StepOneData &{
    updateFields: (fields: Partial<StepOneData>) => void
}
export function StepForm1 ({firstName, lastName, mail, dob, updateFields}:StepOneProps){
    return(
        <>
        <div >
            <FormLayout>
        <input type="text" placeholder="First name" className="bg-[#F2FFF9] outline-none border border-customGray w-full px-4 py-4"
        value={firstName} onChange={(e)=> updateFields({firstName:e.target.value})} />
      <input type="text" placeholder="Last name" className="bg-[#F2FFF9] outline-none border border-customGray w-full px-4 py-4" 
        value={lastName} onChange={(e)=> updateFields({lastName:e.target.value})}/>
      <input type="email" placeholder="Email Address" className="bg-[#F2FFF9] outline-none border border-customGray w-full px-4 py-4" 
      value={mail} onChange={(e)=> updateFields({mail:e.target.value})}/>
      <input type="date" placeholder="Date of Birth" className="bg-[#F2FFF9] outline-none border border-customGray w-full px-4 py-4" 
      value={dob} onChange={(e)=> updateFields({dob:e.target.value})}/>
      {/* <button type="button" className="bg-customGreen text-white py-4">Next</button> */}
      {/* <p className="text-customGray">Already have an account? <span className="font-bold cursor-pointer text-customGreen">Login</span></p> */}
      </FormLayout>
       </div>
        </>
    )
}