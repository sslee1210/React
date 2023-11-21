import React, { useState } from "react";

const Ex6Form = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const changePw = (evt) => {
    const { value } = evt.target;
    setPw(value);
  };

  return (
    <section className="borderTop">
      <p>
        비밀번호의 수가 8자 이하면 버튼 비활성화(disabled), 9자 이상이면 활성화
      </p>
      아이디 : <input type="text" />
      <br />
      비밀번호: <input type="password" value={pw} onChange={changePw} />
      <br />
      {/* {pw.length >= 9 ? (
        <button>로그인</button>
      ) : (
        <button disabled>로그인</button>
      )} */}
      <button disabled={pw.length < 9}>로그인</button>
    </section>
  );
};

export default Ex6Form;
