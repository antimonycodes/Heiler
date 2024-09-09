import React, { useState } from 'react';

const AddMoney = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1); // initial step

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  return (
    <div>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            {step === 1 && (
              <Step1
                onNextStep={handleNextStep}
                onPreviousStep={handlePreviousStep}
              />
            )}
            {step === 2 && (
              <Step2
                onNextStep={handleNextStep}
                onPreviousStep={handlePreviousStep}
              />
            )}
            {/* Add more steps as needed */}
            <button onClick={handleCloseModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

const Step1 = ({ onNextStep, onPreviousStep }) => {
  return (
    <div>
      {/* Step 1 content */}
      <button onClick={onNextStep}>Next</button>
    </div>
  );
};

const Step2 = ({ onNextStep, onPreviousStep }) => {
  return (
    <div>
      {/* Step 2 content */}
      <button onClick={onNextStep}>Next</button>
      <button onClick={onPreviousStep}>Previous</button>
    </div>
  );
};