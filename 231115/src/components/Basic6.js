import React from "react";

/*
  props
  컴포넌트에 전달할 정보를 담고 있는 자바스크립트 객체이자
  리액트 컴포넌트 속성
  부모 -> 자식 컴포넌트로 전달
  객체형으로 속성을 key로 인식

  <자식 컴포넌트 props=전달값 />
  전달값: {숫자}, '문자', {논리연산}, {state}, {function} ...

*/

// 하위 컴포넌트 생성
const Coffee = (props) => {
  return (
    <>
      {/* props = {name: '아메리카노'} 객체 형태로 받아오기 때문에 객체 방식으로 읽음 */}
      <h3>하위 컴포넌트1 : {props.name}</h3>
    </>
  );
};

const Tea = (props) => {
  return (
    <>
      <h3>하위 컴포넌트2: {props.name}</h3>
    </>
  );
};

const Drink = ({ name, type }) => {
  return (
    <>
      <h3>
        하위 컴포넌트3: {name}, {type}
      </h3>
    </>
  );
};

const Basic6 = () => {
  return (
    <div className="borderTop">
      {/* 자식 컴포넌트 */}
      {/* Coffee 컴포넌트에 내가 만든 속성 name의 값 아메리카노를 전달 */}
      <Coffee name="아메리카노" />
      <Tea name="녹차" />
      <Drink name="탄산수" type="물" />
    </div>
  );
};

export default Basic6;
