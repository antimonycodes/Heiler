import { useLocation } from "react-router-dom";
import { useState } from "react";
import chatgif from "../../assets/ZAbi.gif";
import cameraicon from "../../assets/cameraicon.svg";
import emojiicon from "../../assets/emojiicon.svg";
import fileicon from "../../assets/fileicon.svg";
import micicon from "../../assets/micicon.svg";
import { Picker } from "emoji-mart";

const ChatScreen = () => {
  const location = useLocation();
  const doctor = location.state?.doctor; // Access the passed doctor data

  const [showFileModal, setShowFileModal] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [message, setMessage] = useState("");

  const handleEmojiSelect = (emoji: any) => {
    setMessage(message + emoji.native);
    setShowEmojiPicker(false);
  };

  const handleCameraOpen = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      console.log("Camera opened", stream);
    } catch (err) {
      console.error("Error accessing the camera", err);
    }
  };

  const handleAudioRecord = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      console.log("Audio recording started", stream);
    } catch (err) {
      console.error("Error accessing the microphone", err);
    }
  };

  return (
    <div className="flex flex-col justify-between h-full">
      {/* Top section */}
      <div className=" bg-customGreen py-4 px-8">
        <div className=" flex items-center gap-2 text-white">
          <div>BACK</div>
          <div>
            <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center text-white font-bold mr-4"></div>
          </div>
          <div className=" flex flex-col justify-center">
            <h1>{`Dr. ${doctor?.lastName} ${doctor?.firstName}`}</h1>
            <p>online</p>
          </div>
        </div>
      </div>

      {/* Chat section */}
      <div className="basis-[80%] flex-1 h-full flex justify-center items-center">
        <div className=" flex flex-col items-center gap-4">
          <img src={chatgif} alt="Chat GIF" width={150} />
          <p className=" text-customGray italic">No messages yet ...</p>
          <h1 className=" text-lg font-bold">Start by sending a message.</h1>
        </div>
      </div>

      {/* Bottom section */}
      <div className=" mb-4 basis-[10%] flex items-center bg-[#F2FFF9] py-3 px-4 rounded-full mx-8 relative">
        {/* Emoji Picker */}
        {showEmojiPicker && (
          <div className="absolute bottom-12 left-0">
            <Picker onSelect={handleEmojiSelect} />
          </div>
        )}

        {/* Input field with icons */}
        <div className="flex-1 mx-3 relative">
          {/* Emoji icon (left side inside input) */}
          <img
            src={emojiicon}
            alt="Emoji"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 cursor-pointer"
            onClick={() => setShowEmojiPicker(!showEmojiPicker)}
          />

          {/* Camera and File icons (right side inside input) */}
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex gap-3">
            <img
              src={fileicon}
              alt="File"
              className="w-5 h-5 cursor-pointer"
              onClick={() => setShowFileModal(true)}
            />
            <img
              src={cameraicon}
              alt="Camera"
              className="w-5 h-5 cursor-pointer"
              onClick={handleCameraOpen}
            />
          </div>

          <input
            type="text"
            className=" placeholder:text-customGray placeholder:italic w-full py-2 px-12 pr-20 rounded-full border-none outline-none bg-white"
            placeholder="Type a message ..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        {/* Mic icon (outside the input on the right) */}
        <div className=" bg-customGreen py-2 px-2 rounded-full">
          <img
            src={micicon}
            alt="Mic"
            className="w-6 h-6 cursor-pointer"
            onClick={handleAudioRecord}
          />
        </div>
      </div>

      {/* File Modal */}
      {showFileModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg">
            <h2 className="text-lg mb-4">Upload Options</h2>
            <ul>
              <li className="mb-2 cursor-pointer">Upload Contact</li>
              <li className="mb-2 cursor-pointer">Gallery</li>
              <li className="mb-2 cursor-pointer">Camera</li>
              <li className="mb-2 cursor-pointer">Document</li>
            </ul>
            <button
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
              onClick={() => setShowFileModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatScreen;
