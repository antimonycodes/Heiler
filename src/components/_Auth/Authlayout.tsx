import { Outlet } from "react-router-dom";
// import SignUp from "./SignUp";
import banner from "/banner.jpg";

const Authlayout = () => {
  return (
    <div
      className="px-4 py-12 flex items-center justify-center h-screen"
      style={{
        backgroundImage: `url(${banner})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      }}
    >
      <main className="mx-8">
        <Outlet /> 
        {/* <SignUp/> */}
      </main>
    </div>
  );
};

export default Authlayout;