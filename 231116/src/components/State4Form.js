import React, { useState } from "react";

const State4Form = () => {
  const [message, setMessage] = useState("");

  return (
    <section className="borderTop">
      <h2>input value</h2>
      <input
        type="text"
        name=""
        placeholder="이 곳에 입력하세요"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        onClick={() => {
          alert(message);
          setMessage("");
        }}>
        확인
      </button>
    </section>
  );
};

export default State4Form;
