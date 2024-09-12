import { useState, useEffect } from "react";
import ChatList from "@/components/chat/ChatList";
import ChatScreen from "@/components/chat/ChatScreen";

const Chat = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeChat, setActiveChat] = useState(null); // Track active chat

  // Update isMobile based on window size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Update isMobile if width is less than 768px
    };

    // Set initial state
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex h-full">
      {isMobile ? (
        activeChat ? (
          <div className="w-full h-full">
            <ChatScreen
              doctor={activeChat}
              onBack={() => setActiveChat(null)}
            />
          </div>
        ) : (
          <div className="w-full h-full">
            <ChatList onChatSelect={(chat) => setActiveChat(chat)} />
          </div>
        )
      ) : (
        <div className="flex w-full h-full">
          <div className="w-full md:basis-[40%] h-full">
            <ChatList onChatSelect={(chat) => setActiveChat(chat)} />
          </div>
          <div className="hidden md:block md:basis-[60%] h-full">
            <ChatScreen doctor={activeChat} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;
