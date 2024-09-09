import { FaHome, FaUserMd, FaComments, FaWallet, FaCog, FaRegCreditCard, FaBell } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import heilerLogo from "../../assets/heilerLogo.png"

const SideNav = () => {
  const SideNavs = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "Doctor", path: "/doctor", icon: <FaUserMd /> },
    { name: "Chat", path: "/chat", icon: <FaComments /> },
    { name: "Wallet", path: "/wallet", icon: <FaWallet /> },
    { name: "Notifications", path: "/notifications", icon: <FaBell /> },
    { name: "Cards", path: "/cards", icon: <FaRegCreditCard /> },
    { name: "Settings", path: "/settings", icon: <FaCog /> },
  ];

  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="bg-white shadow h-screen flex flex-col items-start gap-4 px-4 py-2">
      <Link to="/">
      <img src={heilerLogo} alt="" width={100} />
      </Link>
      {SideNavs.map((navItem, index) => (
        <Link to={navItem.path} key={index}>
          <div className={`flex-1 flex items-center transition-all duration-500  gap-3 text-center py-2 ${isActive(navItem.path) ? " text-customGreen" : ' text-customGray'}`}>
            <span className="text-xl">{navItem.icon}</span>
            <span className=" text-base font-semibold text-customGreen">{navItem.name}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SideNav;
