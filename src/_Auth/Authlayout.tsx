import { Navigate, Outlet } from "react-router-dom";
import banner from "/banner.jpg";

const Authlayout = () => {
  // const isAuthenticated = false;

  // if (isAuthenticated) {
  //   return <Navigate to="/" />;
  // }

  return (
    <div
      className="px- py-12 sm:flex sm:items-center sm:justify-center h-screen"
      style={{
        backgroundImage: `url(${banner})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <main className="mx-8">
        <Outlet />
        {/* <SignUp /> */}
      </main>
    </div>
  );
};

export default Authlayout;
