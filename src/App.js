import logo from "./logo.svg";
// import { useState } from "react";
import ErrorBoundary from "./ErrorBoundary";
import Average from "./CustomAverage";
// import Info from "./info";
// import LifeCycleSample from "./LifeCycleSample";
// import LiterationSample from "./LiterationSample";
// import ScrollBox from "./scrollBox";
// import EventPractice from "./EventPractice";
// import EventPracticeHook from "./EventPracticeHook";
// import Say from "./hookSample";
// import MyComponent, { triple } from "./MyComponent";
// import Counter from "./Counter";
import "./App.css";

const App = () => {
  // const [visible, setVisible] = useState({
  //   bool: false,
  //   buttonValue: "보이기"
  // });

  // const handleOnClick = () => {
  //   const bool = !visible.bool;
  //   const buttonValue = bool ? "숨기기" : "보이기";
  //   setVisible({ buttonValue, bool });
  // };
  return (
    <>
      <ErrorBoundary>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Average></Average>
        </div>
      </ErrorBoundary>
    </>
  );
};

export default App;
