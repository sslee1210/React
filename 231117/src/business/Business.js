import BusinessList from "./BusinessList";
<<<<<<< HEAD

// 최상위 컴포넌트: section
const Business = () => {
=======
import businessDB from "../assets/DB/businessDB";
import { useState } from "react";

// 최상위 컴포넌트: section
const Business = () => {
  const [data, setData] = useState(businessDB);

>>>>>>> aa5ddec0e5f134ba35f8dcda6e7fb0c87f4653f0
  return (
    <section>
      <h2>BUSINESS</h2>
      <p>고객이 신뢰하는 글로벌 에너지 자원 선도 기업</p>
<<<<<<< HEAD
      <BusinessList />
=======
      {/* 
        data={data} -> 자식 컴포넌트에 businessDB 전달
        data={data} 동일하게 이름을 작성하는 것은 props라는 것을 헷갈리지 않게 하기 위해 관용적, 관습적으로 사용
       */}
      <BusinessList data={data} />
>>>>>>> aa5ddec0e5f134ba35f8dcda6e7fb0c87f4653f0
      <a href="#">view more</a>
    </section>
  );
};

export default Business;
