import React, { useState } from "react";

const State1 = () => {
  const [name, setName] = useState("메뉴");
  const [price, setPrice] = useState(0);
  const [color, setColor] = useState("#eee");
<<<<<<< HEAD
  const onCoffee1 = () => setName("아메리카노");
  const onCoffee2 = () => setName("라떼");
  const onCoffee3 = () => setName("카페라떼");
=======

  const onCoffee1 = () => setName("아메리카노");
  const onCoffee2 = () => setName("라떼");
  const onCoffee3 = () => setName("바닐라라떼");

>>>>>>> aa5ddec0e5f134ba35f8dcda6e7fb0c87f4653f0
  const onColor1 = () => setColor("orange");
  const onColor2 = () => setColor("tomato");
  const onColor3 = () => setColor("lightblue");

  return (
    <div className="borderTop">
      <h2>state1 - 상태</h2>
<<<<<<< HEAD
      <h3
        style={{
          border: "5px solid #000",
          padding: "30px",
          textAlign: "center",
        }}>
=======
      <h3 style={{ border: "1px solid #000", color: color }}>
>>>>>>> aa5ddec0e5f134ba35f8dcda6e7fb0c87f4653f0
        커피: {name} / 가격: {price}원 / 색상: {color}
      </h3>
      <p>
        <button onClick={onCoffee1}>아메리카노</button>
        <button onClick={onCoffee2}>라떼</button>
<<<<<<< HEAD
        <button onClick={onCoffee3}>카페라떼</button>
=======
        <button onClick={onCoffee3}>바닐라라떼</button>
>>>>>>> aa5ddec0e5f134ba35f8dcda6e7fb0c87f4653f0
      </p>
      <p>
        <button onClick={() => setPrice(4500)}>4500</button>
        <button onClick={() => setPrice(5000)}>5000</button>
        <button onClick={() => setPrice(6000)}>6000</button>
      </p>
      <p>
        <button onClick={onColor1}>orange</button>
<<<<<<< HEAD

        <button onClick={onColor2}>tomato</button>

=======
        <button onClick={onColor2}>tomato</button>
>>>>>>> aa5ddec0e5f134ba35f8dcda6e7fb0c87f4653f0
        <button onClick={onColor3}>lightblue</button>
      </p>
    </div>
  );
};

export default State1;

/* 
<<<<<<< HEAD

state

  상태. 상태 변화를 위해 사용하는 hook 

  랜더링이 될때마다 화면에 새롭게 그려내는 방식이므로 상태

  유지를 하지 못함

  새롭게 재랜더링되어 함수, 변수 등 다시 초기화 됨

  그래서 값을 유지하기 위해 hook을 사용

  상태 값이 변경되는 경우 useState()

​

  const [state, setState] = useState(초기값);

  const [상태데이터(변수), 상태값을 변경하기 위한 함수] =

  useState(초기값);

  초기값: 숫자, 문자, 논리, 배열, 객체 등등

=======
state 
 상태. 상태 변화를 위해 사용하는 hook
 랜더링이 될때마다 화면에 새롭게 그려내는 방식이므로 상태 유지를 하지 못함
 새롭게 재랜더링되어 함수, 변수 등 다시 초기화 됨
 그래서 값을 유지하기 위해 hook을 사용
 상태 값이 변경되는 경우 useState()

 const [state, setState] = useState(초기값);
 const [상태데이터(변수), 상태값을 변경하기 위한 함수] = useState(초기값);
 초기값: 숫자, 문자, 논리, 배열, 객체 등등
>>>>>>> aa5ddec0e5f134ba35f8dcda6e7fb0c87f4653f0
*/
