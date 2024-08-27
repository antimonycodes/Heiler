import { Link } from "react-router-dom"
import { FormLayout } from "./FormLayout"
import logo from '/logo.png';
import forgetPIcon from "/forgotpassword.png"



const ForgotPassword = () => {
    return (
        <div>
          <form  className="w-full gap-3 flex flex-col text-center items-center justify-center px-4 py-8 rounded-md bg-white shadow-[#2A2A2A33]">
          <div className="flex justify-center items-center mb-4">
              <img src={logo} alt="logo" width={100} height={100} />
            </div>
                <div className="item-center">
                   <h1 className="font-bold text-xl mb-2">Welcome Back</h1>
                    <p className="text-[#A3B1AA] mb-4">You need the details of your email address.</p>
                    <div className=" w-fit items-center mx-auto my-8 ">
                        <img src={forgetPIcon} alt="" width={150} />
                    </div>
                    <FormLayout>
                        <input type="text" placeholder="Email Address" className="bg-[#F2FFF9] outline-none border border-customGray w-full px-4 py-4"/>
                        <button
                                type="submit"
                                className="bg-customGreen text-white py-2 px-4 rounded mt-4 w-full"
                            >
                                Submit
                            </button>
                            <p>Don't have an account? <Link to="/signup"> <span className=' text-customGreen font-bold'>SignUp</span></Link></p>
                    </FormLayout>
                 </div>
          </form>
        </div>
      )
}

export default ForgotPassword