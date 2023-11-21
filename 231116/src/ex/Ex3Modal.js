import React from "react";

const Ex3Modal = ({ onClose }) => {
  const modalStyle = {
    border: "1px solid #000",
<<<<<<< HEAD
    width: 150,
=======
    width: 200,
>>>>>>> aa5ddec0e5f134ba35f8dcda6e7fb0c87f4653f0
    position: "fixed",
    top: 10,
    right: 10,
    padding: 10,
    backgroundColor: "#fff",
  };

  return (
    <div style={modalStyle}>
      <h2>모달창 띄우기</h2>
      <p onClick={onClose}>닫기</p>
    </div>
  );
};

export default Ex3Modal;
