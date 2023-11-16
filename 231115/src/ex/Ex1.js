import React from "react";

const Coffee = ({ Name, Price }) => {
  return (
    <>
      <li>
        주문한 커피는{Name}이며 가격은 {Price}원입니다
      </li>
    </>
  );
};

const Ex1 = () => {
  return (
    <div className="borderTop">
      <h2>props 연습 1</h2>
      <Coffee Name="아메리카노" Price="4000" />
      <Coffee Name="카페라떼" Price="4500" />
      <Coffee Name="바닐라라떼" Price="5000" />
    </div>
  );
};

export default Ex1;

/* 
  출력값
  '주문한 커피는 {}이며 가격은 {}원입니다'

  아메리카노
  카페라떼
  바닐라라떼
*/
