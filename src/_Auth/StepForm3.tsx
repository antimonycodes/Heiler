import { FormLayout } from "./FormLayout";

type StepThreeData = {
    pword: string;
    cpword: string;
    terms: boolean;
};

type StepThreeProps = StepThreeData & {
    updateFields: (fields: Partial<StepThreeData>) => void;
};

export function StepForm3({ pword, cpword, terms, updateFields }: StepThreeProps) {
    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        updateFields({ terms: e.target.checked });
    };

    return (
        <FormLayout>
            <input
                type="password"
                placeholder="Password"
                className="bg-[#F2FFF9] outline-none border border-customGray w-full px-4 py-4 rounded-md"
                value={pword}
                onChange={(e) => updateFields({ pword: e.target.value })}
            />
            <input
                type="password"
                placeholder="Confirm Password"
                className="bg-[#F2FFF9] outline-none border border-customGray w-full px-4 py-4 rounded-md"
                value={cpword}
                onChange={(e) => updateFields({ cpword: e.target.value })}
            />
            <div className="flex items-center gap-2">
                <input
                    type="checkbox"
                    checked={terms}
                    onChange={handleCheckboxChange}
                />
                <p className="text-left">
                    I hereby accept the <span>terms and conditions</span> <br /> of Healing Race
                </p>
            </div>
        </FormLayout>
    );
}
