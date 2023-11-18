import React, { useState } from "react";

const State2 = () => {
  // 상태 값을 각각 사용시 따로 작성
  const [isShow, setIsShow] = useState(false);
  const [isHide, setIsHide] = useState(true);
  const [isToggle, setIsToggle] = useState(false);

  const handleShow = () => {
    setIsShow(true);
  };
  const handleHide = () => {
    setIsHide(false);
  };
  const handleToggle = () => {
    setIsToggle(!isToggle); // !부정연산자, !(false) -> true, !(true) -> false
  };

  return (
    <div className="borderTop">
      <h2>state2</h2>
      <p>
        <button onClick={handleShow}>{isShow ? "show" : "hide"}</button>
        <button onClick={handleHide}>{isHide ? "show" : "hide"}</button>
        {/* 토글버튼 첫번째 클릭하면 hide, 두번째 클릭 show */}
        <button onClick={handleToggle}>{isToggle ? "hide" : "show"}</button>
      </p>
      {/* 삼항연산자를 이용해 handleShow 함수가 실행되어 참인 경우 박스 보임. 조건식 ? true : false */}
      {isShow ? (
        <div
          style={{
            width: 100,
            height: 100,
            backgroundColor: "orange",
            margin: 10,
          }}>
          box1
        </div>
      ) : null}
      <hr />
      {/* hide 버튼 클릭하면 div.box2가 보임 */}
      {isHide ? null : (
        <div
          style={{
            width: 100,
            height: 100,
            backgroundColor: "tomato",
            margin: 10,
          }}>
          box2
        </div>
      )}
      <hr />
      {/* AND 연산자: 앞의 값이 참이어야만 뒤의 값을 출력 */}
      {isToggle && (
        <div
          style={{
            width: 50,
            height: 50,
            backgroundColor: "lightblue",
            margin: 10,
          }}>
          box3
        </div>
      )}
      {/* OR 연산자: 앞의 값이 참인 상황이면 뒤의 값을 출력하지 않음. 앞의 값이 거짓이어야만 뒤의 값 출력
       */}
      {isToggle || (
        <div
          style={{
            width: 50,
            height: 50,
            backgroundColor: "teal",
            margin: 10,
          }}>
          box4
        </div>
      )}
    </div>
  );
};

export default State2;
