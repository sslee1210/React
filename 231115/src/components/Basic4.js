import React from "react";
import "./Basic4.css";

const Basic4 = () => {
  const title = "menu";
  const latte = "라떼";
  const size = "tall";
  const price = 4000;
  return (
    <>
      <h2 className="title">{title}</h2>
      <ul className="ul">
        <li className="li1">주문 커피: {latte}</li>
        <li className="li2">가격 : {price}</li>
        <li className="li3">사이즈 : {size}</li>
      </ul>
    </>
  );
};

export default Basic4;
