import React, { useState } from "react";

const State2 = () => {
  // 상태 값을 각각 사용시 따로 작성
<<<<<<< HEAD

  const [isShow, setIsShow] = useState(false);

  const [isHide, setIsHide] = useState(true);

  const [isToggle, setIsToggle] = useState(true);
=======
  const [isShow, setIsShow] = useState(false);
  const [isHide, setIsHide] = useState(true);
  const [isToggle, setIsToggle] = useState(false);
>>>>>>> aa5ddec0e5f134ba35f8dcda6e7fb0c87f4653f0

  const handleShow = () => {
    setIsShow(true);
  };
<<<<<<< HEAD

  const handleHide = () => {
    setIsHide(false);
  };

=======
  const handleHide = () => {
    setIsHide(false);
  };
>>>>>>> aa5ddec0e5f134ba35f8dcda6e7fb0c87f4653f0
  const handleToggle = () => {
    setIsToggle(!isToggle); // !부정연산자, !(false) -> true, !(true) -> false
  };

  return (
    <div className="borderTop">
      <h2>state2</h2>
      <p>
        <button onClick={handleShow}>{isShow ? "show" : "hide"}</button>
<<<<<<< HEAD

        <button onClick={handleHide}>{isHide ? "show" : "hide"}</button>

        {/* 토글버튼 첫번째 클릭하면 show, 두번째 클릭 hide */}

        <button onClick={handleToggle}>{isToggle ? "hide" : "show"}</button>
      </p>
      {/* 삼항연산자를 이용해 handleShow 함수가 실행되어 참인 경우 박스 보임.
      조건식 ? true : false */}
      {isShow ? (
        <div
          style={{
            width: 150,
            height: 150,
=======
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
>>>>>>> aa5ddec0e5f134ba35f8dcda6e7fb0c87f4653f0
            backgroundColor: "orange",
            margin: 10,
          }}>
          box1
        </div>
      ) : null}
<<<<<<< HEAD

      {isHide ? null : (
        <div
          style={{
            width: 150,
            height: 150,
=======
      <hr />
      {/* hide 버튼 클릭하면 div.box2가 보임 */}
      {isHide ? null : (
        <div
          style={{
            width: 100,
            height: 100,
>>>>>>> aa5ddec0e5f134ba35f8dcda6e7fb0c87f4653f0
            backgroundColor: "tomato",
            margin: 10,
          }}>
          box2
        </div>
      )}
      <hr />
<<<<<<< HEAD
      {isToggle && (
        <div
          style={{
            width: 100,
            height: 100,
=======
      {/* AND 연산자: 앞의 값이 참이어야만 뒤의 값을 출력 */}
      {isToggle && (
        <div
          style={{
            width: 50,
            height: 50,
>>>>>>> aa5ddec0e5f134ba35f8dcda6e7fb0c87f4653f0
            backgroundColor: "lightblue",
            margin: 10,
          }}>
          box3
        </div>
      )}
<<<<<<< HEAD
      {/* OR 연산자: 앞의 갑이 참인 상황이면 뒤의 값을 출력하지 않음 */}
      {isToggle || (
        <div
          style={{
            width: 100,
            height: 100,
            backgroundColor: "blue",
=======
      {/* OR 연산자: 앞의 값이 참인 상황이면 뒤의 값을 출력하지 않음. 앞의 값이 거짓이어야만 뒤의 값 출력
       */}
      {isToggle || (
        <div
          style={{
            width: 50,
            height: 50,
            backgroundColor: "teal",
>>>>>>> aa5ddec0e5f134ba35f8dcda6e7fb0c87f4653f0
            margin: 10,
          }}>
          box4
        </div>
      )}
    </div>
  );
};

export default State2;
