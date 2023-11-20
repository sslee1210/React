import React from "react";

const Ex5Form = () => {
  return (
    <section className="borderTop">
      <p>
        <input type="checkbox" />
        {/* 체크 박스를 체크하면 '박스 보임', 해제하면 '박스 숨김' */}
      </p>
      {/* 위의 체크박스 체크하면 div 보임. 해제하면 안보임 */}
    </section>
  );
};

export default Ex5Form;
