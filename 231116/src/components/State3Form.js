import React, { useState } from "react";

const State3Form = () => {
<<<<<<< HEAD
  const [isChk, setisChk] = useState(false);
  const onCheck = (evt) => {
    const { checked } = evt.target;
    setisChk(checked);
  };
=======
  const [isChk, setIsChk] = useState(false);
  const onCheck = (evt) => {
    const { checked } = evt.target;
    setIsChk(checked);
  };

>>>>>>> aa5ddec0e5f134ba35f8dcda6e7fb0c87f4653f0
  return (
    <section className="borderTop">
      <h2>오늘의 할 일</h2>
      <p
        style={{
          fontWeight: "bold",
          textDecoration: isChk ? "line-through" : "none",
          backgroundColor: isChk ? "#ddd" : "orange",
<<<<<<< HEAD
        }}>
        <lable>
          <input type="checkbox" onChange={onCheck} checked={isChk} />
          우산 챙기기
        </lable>
=======
        }}
      >
        <label>
          <input type="checkbox" onChange={onCheck} checked={isChk} /> 우산
          챙기기
        </label>
>>>>>>> aa5ddec0e5f134ba35f8dcda6e7fb0c87f4653f0
      </p>
    </section>
  );
};

export default State3Form;
