import "./App.css";
import Map from "./components/Map";
import Ex1Map from "./ex/Ex1Map";
import State1 from "./components/State1";
import State2 from "./components/State2";
import Ex2State from "./ex/Ex2State";
import Ex3State from "./ex/Ex3State";
import Ex4State from "./ex/Ex4State";
import State3Form from "./components/State3Form";
import Ex5Form from "./ex/Ex5Form";

const App = () => {
  return (
    <>
      <h1>리액트</h1>
      <Map />
      <Ex1Map />
      <State1 />
      <State2 />
      <Ex2State />
      <Ex3State />
      <Ex4State />
      <State3Form />
      <Ex5Form />
    </>
  );
};

export default App;
