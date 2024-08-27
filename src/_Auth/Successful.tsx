import {  useNavigate } from "react-router-dom";
import success from "/Success.png";

const Successful = () => {
    const navigate = useNavigate();
    function handleOkayClick() {
        navigate('/signin'); 
        // setIsAuthenticated(true)
      }
  return (
    <div>
          <div className="w-full gap-3 flex flex-col items-center text-center justify-center px-4 py-8 rounded-md bg-white shadow-[#2A2A2A33]">
        <img src={success} alt="Success" width={150} />
        <h1 className='text-lg font-bold'>You have successfully created your account.</h1>
        <p className='text-customGray'>You can now have access to your dashboard to find and chat with a doctor of your choice.</p>
        <button 
          className="bg-customGreen text-white py-2 px-4 rounded mt-4 w-full"
          onClick={handleOkayClick}
        >
          Okay
        </button>
      </div>
    </div>
  )
}

export default Successful