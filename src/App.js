import logo from "./logo.svg";
import { Component } from "react";
import ErrorBoundary from "./ErrorBoundary";
// import LifeCycleSample from "./LifeCycleSample";
// import LiterationSample from "./LiterationSample";
// import ScrollBox from "./scrollBox";
// import EventPractice from "./EventPractice";
// import EventPracticeHook from "./EventPracticeHook";
// import Say from "./hookSample";
// import MyComponent, { triple } from "./MyComponent";
import Counter from "./Counter";
import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <ErrorBoundary>
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Counter></Counter>
          </div>
        </ErrorBoundary>
      </>
    );
  }
}

export default App;
