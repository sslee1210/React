import React from "react";

function Ex2sub({ name, price }) {
  return (
    <>
      <h3>Ex2sub 하위 컴포넌트</h3>
      <p>
        커피: {name}({typeof name}), 가격: {price} ({typeof price})
      </p>
    </>
  );
}

export default Ex2sub;
