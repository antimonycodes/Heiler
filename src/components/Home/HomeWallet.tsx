import React, { useState } from "react";
import { motion } from "framer-motion";
import balanceEye from "../../assets/eye.svg";
import sendMoneyIcon from "../../assets/sendMoneyIcon.svg";
import addMoneyIcon from "../../assets/addMoneyIcon.svg";
import mastercard from "../../assets/mastercard.svg";
import visa from "../../assets/visa.svg";
import { MdOutlineArrowBackIos } from "react-icons/md";
import checked from "../../assets/checked.svg";

// Modal Component with Framer Motion animation
const Modal = ({ isVisible, onClose, children }) => {
  if (!isVisible) return null;
  return (
    <div className="absolute top-[100%] inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      {/* Motion div for animating modal */}
      <motion.div
        initial={{ y: "-100vh", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "-100vh", opacity: 0 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        className="bg-white p-6 rounded-lg shadow-lg "
      >
        {children}
        {/* <button onClick={onClose} className="text-red-500 mt-4">Close</button> */}
      </motion.div>
    </div>
  );
};

const HomeWallet = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [step, setStep] = useState(1); // Track the current step
  const [activeCard, setActiveCard] = useState<number>(1);

  const bankCards = [
    {
      img: mastercard,
      bankName: "First Bank Nigeria",
      cardNumber: "1234 5678 6543 2384",
    },
    {
      img: visa,
      bankName: "Access Bank Nigeria",
      cardNumber: "1234 5678 6543 2384",
    },
    {
      img: mastercard,
      bankName: "First Bank Nigeria",
      cardNumber: "1234 5678 6543 2384",
    },
  ];

  // Functions to handle the modal flow
  const openModal = () => setModalOpen(true);
  const closeModal = () => {
    setModalOpen(false);
    setStep(1); // Reset to the first step when closed
  };

  const nextStep = () => setStep((prevStep) => prevStep + 1);
  const prevStep = () => setStep((prevStep) => prevStep - 1);

  return (
    <div className="relative flex flex-col gap-4">
      {/* Balance Display */}
      <div className="bg-customGreen text-white flex flex-col gap-4 px-4 py-4 rounded-xl">
        <h2 className="text-white">My Balance</h2>
        <div className="flex justify-between items-center">
          <h1>NGN 4,562.52</h1>
          <img src={balanceEye} alt="Show Balance" />
        </div>
      </div>
      {/* Add Money and Send Money Buttons */}
      <div className="flex gap-4">
        <button className="w-full flex items-center gap-2 justify-center border border-customGreen px-4 py-3 rounded">
          <img src={addMoneyIcon} alt="Add Money" />
          <p className="text-customGreen">Add Money</p>
        </button>
        <button
          className="w-full flex items-center justify-center gap-2 border bg-customGreen px-4 py-3 rounded"
          onClick={openModal}
        >
          <img src={sendMoneyIcon} alt="Send Money" />
          <p>Send Money</p>
        </button>
      </div>

      {/* Modal for Sending Money */}
      <Modal isVisible={isModalOpen} onClose={closeModal}>
        {/* Step 1: Enter Amount */}
        {step === 1 && (
          <div className=" flex flex-col gap-6">
            <div className=" flex justify-between">
              <h2 className=" font-semibold">Add money to wallet</h2>
              <h1 onClick={closeModal} className=" cursor-pointer">
                X
              </h1>
            </div>
            <input
              type="text"
              placeholder="# Enter a specific amount"
              className="bg-[#F2FFF9] outline-none border rounded-md border-customGray w-full px-4 py-4 mb-4"
            />
            <button
              onClick={nextStep}
              className="w-full bg-customGreen text-white px-4 py-2 rounded"
            >
              Continue
            </button>
          </div>
        )}

        {/* Step 2: Enter Recipient */}
        {step === 2 && (
          <div>
            <div className=" flex gap-4">
              <h1 onClick={prevStep} className="cursor-pointer">
                <MdOutlineArrowBackIos />
              </h1>
              <h2 className="font-semibold text-customGreen">
                Choose a payment method
              </h2>
            </div>
            <div className="flex flex-col gap-4 mt-8">
              {bankCards.map((bankCard, index) => (
                <div
                  key={index}
                  className={`flex gap-6 py-2 px-4 items-center cursor-pointer ${
                    activeCard === index ? "bg-[#F2FFF9]" : ""
                  }`}
                  onClick={() => {
                    setActiveCard(index);
                    nextStep();
                  }} // Set active card on click
                >
                  <div>
                    <img src={bankCard.img} alt="Card" />
                  </div>
                  <div>
                    <h1 className="font-semibold">{bankCard.bankName}</h1>
                    <p className="text-customGray">{bankCard.cardNumber}</p>
                  </div>
                  {/* Show the checked icon only for the active card */}
                  {activeCard === index && (
                    <div>
                      <img src={checked} alt="Checked" />
                    </div>
                  )}
                </div>
              ))}
            </div>
            <button className="w-full bg-[#f2fff9] mt-4 py-3">New Card</button>
          </div>
        )}

        {/* Step 3: Confirm Transaction */}
        {step === 3 && (
          <div className=" py-16 px-4 flex flex-col gap-8 relative">
            <h1
              className=" absolute top-4 right-4 cursor-pointer"
              onClick={closeModal}
            >
              X
            </h1>
            <div>
              <h2 className=" max-w-[18rem] text-center">
                A sum of two thousand naira will be debited from your account.
              </h2>
            </div>
            {/*  */}
            <div>
              <button className="w-full flex items-center justify-center gap-2 border bg-customGreen px-4 py-3 rounded">
                Proceed
              </button>
              <button className="w-full flex items-center justify-center gap-2 border bg-white border-none px-4 py-3 rounded">
                Cancel
              </button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default HomeWallet;
