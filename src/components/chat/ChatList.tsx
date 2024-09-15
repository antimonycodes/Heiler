import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import chatplus from "../../assets/chatplus.svg";
import axios from "axios";

const ChatList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [response, setResponse] = useState<any[]>([]);
  const navigate = useNavigate();
  const intervalRef = useRef(null);

  const getChat = async () => {
    try {
      const baseURL = import.meta.env.VITE_APP_BASE_URL;
      const endpoint = "/chat/get";
      const url = `${baseURL}${endpoint}`;
      const apiKey = import.meta.env.VITE_APP_API_KEY;
      const token = localStorage.getItem("token");

      const response = await axios.post(
        url,
        { usertoken: token },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );
      setResponse(response.data.data);
      console.log("GET CHATS", response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // Initial fetch
    getChat();

    // Set up the interval to fetch data every 3 seconds
    // const intervalId = setInterval(getChat, 3000);
    // intervalRef.current = intervalId;

    // Clean up the interval on component unmount
    // return () => clearInterval(intervalRef.current);
  }, []);

  const handleChatSelect = (chat) => {
    // Navigate to the chat screen with the selected chat data
    navigate("/chat", { state: { doctor: chat.recipientData } });
  };

  return (
    <div className="p-4 shadow-md h-full">
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

      <div>
        {response && response.length > 0 ? (
          response
            .filter((chat) => {
              const fullName =
                `${chat.recipientData?.firstName} ${chat.recipientData?.lastName}`.toLowerCase();
              return fullName.includes(searchQuery.toLowerCase());
            })
            .map((chat, index) => (
              <div
                key={index}
                className="p-2 border-b cursor-pointer"
                onClick={() => handleChatSelect(chat)}
              >
                <h2 className="text-lg font-semibold">
                  {chat.recipientData?.firstName} {chat.recipientData?.lastName}
                </h2>
                <p className="text-sm text-gray-500">
                  {chat.lastMessage?.message || "No message"}
                </p>
              </div>
            ))
        ) : (
          <p>No chats available</p>
        )}
      </div>
    </div>
  );
};

export default ChatList;
