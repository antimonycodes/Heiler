import { FormLayout } from "./FormLayout";

type StepThreeData ={
    pword: string,
    cpword: string,
    
}

type StepThreeProps = StepThreeData &{
    updateFields: (fields: Partial<StepThreeData>) => void
}

export function StepForm3({pword,cpword,updateFields}:StepThreeProps){
    return(
        <div>
            <FormLayout>
               <input type="text" placeholder="Password" className="bg-[#F2FFF9] outline-none border border-customGray w-full px-4 py-4" 
               value={pword} onChange={(e)=> updateFields({pword: e.target.value})}/>
               <input type="text" placeholder="Current Password" className="bg-[#F2FFF9] outline-none border border-customGray w-full px-4 py-4" 
               value={cpword} onChange={(e)=> updateFields({cpword: e.target.value})}/>
        <div className=" flex items-center gap-2">
           {/* <input type=" checkbox"  /> */}
        <input type="checkbox"  />
        <p className=" text-left">I hereby accept the <span> terms and conditions </span> <br />of Healing Race</p>
        </div>
        </FormLayout>
        </div>
    )
}