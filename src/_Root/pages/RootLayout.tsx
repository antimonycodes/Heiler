import TopSection from "@/components/Home/TopSection";
import BottomNav from "../../components/Shared/BottomNav";
import SideNav from "../../components/Shared/SideNav";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="flex h-screen">
      {/* SideNav for larger screens */}
      <div className="hidden md:block">
        <SideNav />
      </div>

      {/* Main content area */}
      <div className="flex flex-col w-full">
        {/* TopSection */}
        <div>
          <TopSection />
        </div>

        {/* Outlet should take up the remaining space */}
        <div className="flex-1 overflow-auto">
          <Outlet />
        </div>

        {/* BottomNav for smaller screens */}
        <div className="md:hidden">
          <BottomNav />
        </div>
      </div>
    </div>
  );
};

export default RootLayout;
