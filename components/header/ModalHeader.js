import React from "react";
import Modal from "../Modal";
import LoginForm from "../LoginForm";
import SignUpForm from "../SignUpForm";

const ModalHeader = ({
  isModalOpen,
  closeModal,
  handleLogin,
  handleSignUp,
  successMessage,
  isLogin,
}) => {
  const onClose = () => {
    console.log("first");
    closeModal();
  };
  return (
    <Modal isOpen={isModalOpen} onClose={onClose}>
      {isLogin ? (
        <LoginForm onLogin={handleLogin} />
      ) : (
        <SignUpForm onSignUp={handleSignUp} />
      )}
      {successMessage && (
        <p className="text-green-500 mt-4">{successMessage}</p>
      )}
    </Modal>
  );
};

export default ModalHeader;
