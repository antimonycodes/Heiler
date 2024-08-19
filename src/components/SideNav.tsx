import homeIcon from "/home.svg";
import doctorIcon from "/doctor.svg";  
import chatIcon from "/chat.svg";
import walletIcon from "/wallet.svg";
import settingsIcon from "/settings.svg";  
import { Link, useLocation } from "react-router-dom";

const SideNav = () => {
  const SideNavs = [
    { name: "Home", path: "/Homepage", img: homeIcon },
    { name: "Doctor", path: "/doctor", img: doctorIcon },
    { name: "Chat", path: "/chat", img: chatIcon },
    { name: "Wallet", path: "/wallet", img: walletIcon },
    { name: "Settings", path: "/setting", img: settingsIcon },
  ];
  // const isActive = location.pathname === navItem.path;
  const location = useLocation();


  return (
    <div className="bg-white shadow-lg fixed left-0 h-full flex flex-col gap-4 px-4 py-2">
      {SideNavs.map((navItem, index) => (
        <Link to={navItem.path}>
        <div key={index}className="flex-1 text-center py-2">
          <img src={navItem.img} alt={navItem.name} className="mx-auto" />
          <span className="text-xs">{navItem.name}</span>
        </div>
        </Link>
      ))}
    </div>
  );
};

export default SideNav;
