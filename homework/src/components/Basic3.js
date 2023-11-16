import React from "react";
import "./Basic3.css";

const Basic3 = () => {
  const listStyle1 = {
    backgroundColor: "lightblue",
    fontweight: "bold",
    padding: 10,
  };

  return (
    <>
      <h2>스타일 적용</h2>
      <ul>
        <li
          style={{
            color: "tomato",
            fontSize: 18,
            textDecoration: "underline",
          }}>
          스타일 직접 적용
        </li>
        <li style={listStyle1}>스타일 변수로 적용</li>
        <li className="listStyle2">스타일 외부 문서로 적용</li>
        <li>스타일 프레임워크로 적용</li>
      </ul>
    </>
  );
};

export default Basic3;
