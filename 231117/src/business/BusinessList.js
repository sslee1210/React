import BusinessItem from "./BusinessItem";

<<<<<<< HEAD
const BusinessList = () => {
  return (
    <ul>
      <BusinessItem />
=======
const BusinessList = ({ data }) => {
  return (
    <ul>
      {data.map((item) => (
        <BusinessItem key={item.id} item={item} />
      ))}
>>>>>>> aa5ddec0e5f134ba35f8dcda6e7fb0c87f4653f0
    </ul>
  );
};

export default BusinessList;
