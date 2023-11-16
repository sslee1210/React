import React from "react";

const Ex3 = () => {
  return (
    <div className="borderTop">
      <h2>현재시간</h2>
      <p>{new Date().toLocaleString()}</p>
    </div>
  );
};

export default Ex3;
