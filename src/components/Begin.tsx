import { useNavigate } from "react-router-dom";

const Begin = () => {
  const navigate = useNavigate();

  const handleSelect = (type: "doctor" | "patient") => {
    localStorage.setItem("selectedUserType", type);
    console.log(type);
    navigate("/signup");
  };

  return (
    <div className="h-screen px-6 sm:px-8 md:px-[35%] w-full flex justify-center items-center">
      <div className="w-full flex flex-col gap-4">
        <h1 className="text-center font-bold text-xl">Who Are You?</h1>
        <button
          className="py-4 text-customGreen border border-customGreen w-full"
          onClick={() => handleSelect("doctor")}
        >
          Doctor
        </button>
        <button
          className="py-4 bg-customGreen border text-white w-full"
          onClick={() => handleSelect("patient")}
        >
          Patient
        </button>
      </div>
    </div>
  );
};

export default Begin;
