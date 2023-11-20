import React from "react";

const Ex1Map = () => {
  const colors = [
    { no: 1, bg: "tomato" },
    { no: 2, bg: "orange" },
    { no: 3, bg: "salmon" },
    { no: 4, bg: "lightblue" },
  ];

  return (
    <div className="borderTop">
      <h2 className="margin-10">.map() 연습</h2>
      <ul style={{ margin: 0, fontSize: "1.3rem", listStyle: "none" }}>
        {colors.map((color) => {
          const { no, bg } = color;
          return (
            // <li key={color.no} style={{ backgroundColor: color.bg }}>
            //   {color.bg}
            // </li>
            <li key={no} style={{ backgroundColor: bg }}>
              {bg}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Ex1Map;
