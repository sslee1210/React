<<<<<<< HEAD
const BusinessItem = () => {
  return (
    <li>
      <a href="#">
        <img src="" alt="" />
        <h3>소제목</h3>
        <p>설명</p>
=======
const BusinessItem = ({ item }) => {
  // 구조분해할당, 비구조할당
  const { imgUrl, title, subTitle, des } = item;
  const path = process.env.PUBLIC_URL;

  return (
    <li>
      <a href="#">
        <img src={path + imgUrl} alt={title} />
        <h3>
          <strong>{title}</strong>
          {subTitle}
        </h3>
        <p>{des}</p>
>>>>>>> aa5ddec0e5f134ba35f8dcda6e7fb0c87f4653f0
      </a>
    </li>
  );
};

export default BusinessItem;
