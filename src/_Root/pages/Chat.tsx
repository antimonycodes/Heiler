import ChatList from "@/components/chat/ChatList";
import ChatScreen from "@/components/chat/ChatScreen";

const Chat = () => {
  return (
    <div className=" flex  h-full">
      <div className=" w-full md:basis-[40%]">
        <ChatList />
      </div>
      {/*  */}
      <div className=" hidden md:block basis-[60%]">
        <ChatScreen />
      </div>
    </div>
  );
};

export default Chat;
