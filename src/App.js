import logo from "./logo.svg";
import { Component } from "react";
import LifeCycleSample from "./LifeCycleSample";
// import LiterationSample from "./LiterationSample";
// import ScrollBox from "./scrollBox";
// import EventPractice from "./EventPractice";
// import EventPracticeHook from "./EventPracticeHook";
// import Say from "./hookSample";
// import MyComponent, { triple } from "./MyComponent";
// import Counter from "./Counter";
import "./App.css";

const getRandomColor = () => {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
};

class App extends Component {
  state = {
    color: "#000000"
  };

  handleClick = () => {
    this.setState({
      color: getRandomColor()
    });
  };

  render() {
    return (
      <>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <button onClick={this.handleClick}>랜덤 색상</button>
          <LifeCycleSample color={this.state.color}></LifeCycleSample>
          {/* <LiterationSample></LiterationSample> */}
          {/* <ScrollBox ref={(r) => (this.scrollBox = r)}></ScrollBox>
          <button
            onClick={() => {
              this.scrollBox.scrollToBottom();
            }}
          >
            맨 밑으로
          </button>
          <button
            onClick={() => {
              this.scrollBox.scrollToTop();
            }}
          >
            맨 위로
          </button> */}
          {/* <EventPractice></EventPractice> */}
          {/* <EventPracticeHook></EventPracticeHook> */}
          {/* <Say></Say> */}
          {/* triple(3) : {triple(3)}
          <MyComponent name="string" flavor={43}>
            니냐뇨
          </MyComponent> */}
          {/* <Counter></Counter> */}
        </div>
      </>
    );
  }
}

export default App;
