import React, { useState } from "react";
import "./FoodMenuRecommendation.css";
import back from "./Images/mr.back.png";

const FoodMenuRecommendation = () => {
  const [category, setCategory] = useState("");
  const [recommendedMenu, setRecommendedMenu] = useState("");

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const generateRecommendation = () => {
    // 각 카테고리에 따른 메뉴 목록을 정의합니다.
    const koreanMenu = [
      "비빔밥",
      "된장찌개",
      "김치찌개",
      "불고기",
      "잡채",
      "불고기비빔밥",
      "삼계탕",
      "물냉면",
      "냉모밀",
      "해물파전",
      "순두부찌개",
      "감자탕",
      "물회",
      "콩나물국밥",
      "미역국",
      "돌솥비빔밥",
      "삼겹살보쌈",
      "닭갈비",
      "돼지갈비찜",
      "쭈꾸미볶음",
      "동태찌개",
      "간장게장",
      "갈비찜",
      "떡갈비",
      "누룽지탕",
      "미역냉채",
      "임연수전",
      "오징어볶음",
      "꽃게탕",
    ];

    const chineseMenu = [
      "짜장면",
      "짬뽕",
      "탕수육",
      "볶음밥",
      "양장피",
      "마파두부",
      "깐풍기",
      "군만두",
      "새우튀김",
      "깐풍새우",
      "오징어볶음",
      "소고기 레드커리",
      "양고기 볶음밥",
      "찹쌀탕수육",
      "소불고기",
      "고추잡채",
      "해물찹쌀죽",
      "닭고기 레몬 소스",
      "삼선볶음밥",
      "고추새우볶음",
      "굴소스해물볶음밥",
      "새우깡풍기",
      "새우야채볶음밥",
      "양장피볶음밥",
      "김치볶음밥",
      "해물짜장면",
      "탕수소",
      "쇠고기 브로콜리 볶음",
      "야채만두국",
      "소고기 마파두부덮밥",
    ];

    const japaneseMenu = [
      "초밥",
      "사시미",
      "돈부리",
      "우동",
      "라멘",
      "가츠동",
      "삼계탕",
      "참치회덮밥",
      "규동",
      "텐동",
      "새우튀김우동",
      "회덮밥",
      "오코노미야끼",
      "히레카츠",
      "나베",
      "미소라멘",
      "캘리포니아롤",
      "텐동",
      "히라메초밥",
      "가라아게",
      "장어덮밥",
      "튀김우동",
      "덴뿌라",
      "콘니차바오",
      "덴뿌라",
      "쿠시카츠",
      "메밀소바",
      "불초밥",
      "참치마요덮밥",
      "스시세트",
    ];

    const westernMenu = [
      "스파게티 볼로네제",
      "치킨 알프레도",
      "미트로볼",
      "라자냐",
      "토마토 바질 파스타",
      "그릴드 치즈 샌드위치",
      "피쉬 앤 칩스",
      "바게트 피자",
      "그릴드 치킨 샐러드",
      "새우 크림 파스타",
      "토마토 모짜렐라 카프레제",
      "케이준 치킨 버거",
      "파르마햄 포카치아",
      "페퍼로니 피자",
      "쇠고기 스테이크",
      "레몬 버터 연어",
      "로제 크림 파스타",
      "샐러드 닭 가슴살 샌드위치",
      "살몬 그릴",
      "새우 스크램블 에그 베네딕트",
      "카프레제 치킨 샐러드",
      "마르게리타 피자",
      "바질 페스토 크림 파스타",
      "그릴드 베이컨 버거",
      "바게트 샌드위치",
      "새우 스테이크",
      "토마토 브리 스프레드 샌드위치",
      "레몬 허니 그릴드 치킨",
      "삼겹살 카르보나라",
      "그릴드 베이컨 앤 치즈 피자",
    ];

    // 선택된 카테고리에 따라 메뉴를 추천합니다.
    switch (category) {
      case "한식":
        setRecommendedMenu(getRandomMenu(koreanMenu));
        break;
      case "중식":
        setRecommendedMenu(getRandomMenu(chineseMenu));
        break;
      case "일식":
        setRecommendedMenu(getRandomMenu(japaneseMenu));
        break;
      case "양식":
        setRecommendedMenu(getRandomMenu(westernMenu));
        break;
      default:
        setRecommendedMenu("");
        break;
    }
  };

  const getRandomMenu = (menuArray) => {
    // 랜덤으로 메뉴를 선택합니다.
    const randomIndex = Math.floor(Math.random() * menuArray.length);
    return menuArray[randomIndex];
  };

  return (
    <div className="food-menu-container">
      <label>카테고리 선택:</label>
      <select value={category} onChange={handleCategoryChange}>
        <option value="">카테고리를 선택하세요</option>
        <option value="한식">한식</option>
        <option value="중식">중식</option>
        <option value="일식">일식</option>
        <option value="양식">양식</option>
      </select>

      <button className="made" onClick={generateRecommendation}>
        추천 만들기
      </button>

      {recommendedMenu && (
        <div className="recommended-menu">
          <h2>추천된 메뉴:</h2>
          <p>{recommendedMenu}</p>
        </div>
      )}
      <div className="ani">
        <h3>👈</h3>
        <h3 className="backtxt">그래도 못 찾겠어유? 날 눌러봐유!</h3>
        <a href="https://map.naver.com/p/search/%EC%88%98%EC%9B%90%EC%97%AD%20%EB%A7%9B%EC%A7%91">
          <img src={back} alt="" />
        </a>
      </div>
      <div className="foodprovider1"></div>
      <h4 className="mov1">🍗🍖🍚🍛🍜🍣🥩🍔🍕🍢</h4>
      <div className="foodprovider2"></div>
      <h4 className="mov2">🍗🍖🍚🍛🍜🍣🥩🍔🍕🍢</h4>
    </div>
  );
};

export default FoodMenuRecommendation;
