import React, { useState } from "react";

const Ex5form = () => {
  const [isChk, setIsChk] = useState(false);
  const onCheck = (e) => {
    const { checked } = e.target;
    setIsChk(checked);
  };

  return (
    <section className="borderTop">
      {/* 체크 박스를 체크하면 '박스 보임', 해제하면 '박스 숨김' */}
      <p>
        <input type="checkbox" checked={isChk} onChange={onCheck} />
        {isChk ? "박스 보임" : "박스 숨김"}
      </p>
      {/* 위의 체크박스 체크하면 div보임. 해제하면 안보임 */}
      {isChk && (
        <div style={{ width: 100, height: 100, backgroundColor: "orange" }}>
          box
        </div>
      )}
    </section>
  );
};

export default Ex5form;
