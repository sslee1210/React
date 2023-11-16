import React from "react";

function Ex5Box({ width, height, bgColor, border, title }) {
  const borderStyle = border || ["3px", "dotted", "red"];
  const boxStyle = {
    width: width || 150,
    height: height || 50,
    backgroundColor: bgColor || "#ddd",
    borderWidth: borderStyle[0],
    borderWidth: borderStyle[1],
    borderWidth: borderStyle[2],
    margin: "20px auto",
    padding: "10px",
  };
  return <div style={boxStyle}>{title}</div>;
}

const Ex5 = () => {
  return (
    <div className="borderTop">
      <h2>스타일 속성(props) 넘기기</h2>
      <Ex5Box width={500} height={500} bgColor={"tomato"} title="box1" />
      <Ex5Box border={["6px", "solid", "red"]} title="box2" />
    </div>
  );
};

export default Ex5;
