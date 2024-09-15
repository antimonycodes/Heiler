import { useState } from "react";
import bell from "../../assets/bell.svg";
import profilePicture from "../../assets/profilepic.png";
import downArrow from "../../assets/downArrow.svg";
import SignOut from "@/_Auth/SignOut";

const TopSection = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const d = new Date();

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const monthsOfYear = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const dayName = daysOfWeek[d.getDay()];
  const dayOfMonth = d.getDate();
  const monthName = monthsOfYear[d.getMonth()];

  const name = "Oluwadara";

  return (
    <div className="py-4 px-4 md:px-16 shadow">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-customGray text-sm">{`${dayName}, ${dayOfMonth} ${monthName}`}</p>
          <h1 className="text-xl font-bold">Hi, {name}</h1>
        </div>
        <div className="relative flex items-center gap-4">
          <img src={bell} alt="Notification Bell" />
          <h1>{name}</h1>
          <img src={profilePicture} alt="Profile" />
          <img
            src={downArrow}
            alt="Dropdown Arrow"
            onClick={() => setShowDropdown(!showDropdown)}
            className="cursor-pointer"
          />
          {/* Dropdown menu */}
          {showDropdown && (
            <div className="absolute top-12 right-0 bg-white border shadow rounded-md p-2">
              <SignOut />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopSection;
