import HomeIcon from "../Svgs/HomeIcon"; // Ensure correct path
import doctorIcon from "/doctor.svg";  
import chatIcon from "/chat.svg";
import walletIcon from "/wallet.svg";
import settingsIcon from "/settings.svg";
import { Link, useLocation } from "react-router-dom";

const BottomNav = () => {
  const BottomNavs = [
    { name: "Home", path: "/", Icon: HomeIcon },
    // Add other items here with Icon components for custom SVGs
    { name: "Doctor", path: "/doctor", Icon: () => <img src={doctorIcon} alt="Doctor" className="nav-icon" /> },
    { name: "Chat", path: "/chat", Icon: () => <img src={chatIcon} alt="Chat" className="nav-icon" /> },
    { name: "Wallet", path: "/wallet", Icon: () => <img src={walletIcon} alt="Wallet" className="nav-icon" /> },
    { name: "Settings", path: "/setting", Icon: () => <img src={settingsIcon} alt="Settings" className="nav-icon" /> },
  ];

  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="bg-white shadow  w-full flex justify-between items-center px-4 py-2">
      {BottomNavs.map((navItem, index) => (
        <Link to={navItem.path} key={index}>
          <div className="flex-1  item-center py-2 transition-all duration-700">
            <navItem.Icon isActive={isActive(navItem.path)} className="nav-icon text-center w-full mx-auto" />
            <span className={`text-xs ${isActive(navItem.path) ? "block text-customGreen" : "hidden"}`}>{navItem.name}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BottomNav;
