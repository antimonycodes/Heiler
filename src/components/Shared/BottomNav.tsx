import { FaHome, FaUserMd, FaComments, FaWallet, FaCog } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const BottomNav = () => {
  const BottomNavs = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "Doctor", path: "/doctor", icon: <FaUserMd /> },
    { name: "Chat", path: "/chat", icon: <FaComments /> },
    { name: "Wallet", path: "/wallet", icon: <FaWallet /> },
    { name: "More", path: "/settings", icon: <FaCog /> },
  ];

  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="bg-white shadow  w-full flex justify-between items-center px-4 py-2">
      {BottomNavs.map((navItem, index) => (
        <Link to={navItem.path} key={index}>
          <div
            className={`flex-1 flex flex-col items-center py-2 transition-all duration-700 ${
              isActive(navItem.path) ? " text-customGreen" : " text-customGray"
            }`}
          >
            <span className="text-xl">{navItem.icon}</span>
            <span
              className={`text-xs ${
                isActive(navItem.path) ? "block text-customGreen" : "hidden"
              }`}
            >
              {navItem.name}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BottomNav;
