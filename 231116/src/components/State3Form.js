import React, { useState } from "react";

const State3Form = () => {
  const [isChk, setisChk] = useState(false);
  const onCheck = (evt) => {
    const { checked } = evt.target;
    setisChk(checked);
  };
  return (
    <section className="borderTop">
      <h2>오늘의 할 일</h2>
      <p
        style={{
          fontWeight: "bold",
          textDecoration: isChk ? "line-through" : "none",
          backgroundColor: isChk ? "#ddd" : "orange",
        }}>
        <lable>
          <input type="checkbox" onChange={onCheck} checked={isChk} />
          우산 챙기기
        </lable>
      </p>
    </section>
  );
};

export default State3Form;
