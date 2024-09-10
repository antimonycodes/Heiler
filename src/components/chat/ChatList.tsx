import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import chatplus from "../../assets/chatplus.svg";

const ChatList = () => {
  const [doctorsList, setDoctorsList] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedDoctors = localStorage.getItem("chatDoctors");
    if (storedDoctors) {
      setDoctorsList(JSON.parse(storedDoctors));
    }
  }, []);

  const filteredDoctors = doctorsList.filter((doctor) => {
    const fullName = `${doctor.firstName} ${doctor.lastName}`;
    return fullName.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const handleChatOpen = (doctor: any) => {
    navigate("/chat", { state: { doctor } }); // Pass doctor data to ChatScreen
  };

  return (
    <div className="p-4 shadow-md h-full">
      {/* Top bar */}
      <div className="flex justify-between items-center mb-4">
        <div className="bg-customGreen p-2 rounded-full">
          <img src={chatplus} alt="Chat" className="w-6 h-6" />
        </div>
        <div>
          <input
            type="text"
            id="searchInput"
            placeholder="Search anything ..."
            className="border p-2 rounded-md w-full shadow-md"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div>
          <h1 className="text-black cursor-pointer">Edit</h1>
        </div>
      </div>

      {/* Doctor List */}
      {filteredDoctors.length > 0 ? (
        <div className=" flex  flex-col gap-2">
          {filteredDoctors.map((doctor, index) => (
            <div
              key={index}
              className="flex items-center bg-white  rounded-lg cursor-pointer"
              onClick={() => handleChatOpen(doctor)}
            >
              {/* Placeholder profile image */}
              <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center text-white font-bold mr-4">
                {doctor.firstName.charAt(0).toUpperCase()}
              </div>
              {/* Doctor details */}
              <div>
                <h1 className="font-bold text-lg">{`Dr. ${doctor.lastName} ${doctor.firstName}`}</h1>
                <p className="text-sm text-gray-500">{doctor.specialty}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No doctors found matching your search</p>
      )}
    </div>
  );
};

export default ChatList;
