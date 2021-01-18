import { Component } from "react";

class EventPractice extends Component {
  state = {
    message: "",
    name: ""
  };

  handleChange = (input) => {
    this.setState({ [input.target.name]: input.target.value });

    console.log("타겟이름 : " + input.target.name);
    console.log("타겟값 : " + input.target.value);
  };

  handleClick = (input) => {
    this.setState({ message: "", name: "" });
  };

  handleKeyPress = (key) => {
    if (key.key === "Enter") {
      this.handleClick();
    }
  };

  render() {
    const { name, message } = this.state;
    return (
      <>
        <div>
          <h1>이벤트 연습</h1>
          <p>이름 : {name}</p>
          <p>메시지 : {message}</p>
          <input
            type="text"
            name="name"
            placeholder="이름입력"
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="message"
            placeholder="메시지입력"
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress}
          />
          <button onClick={this.handleClick}>확인</button>
        </div>
      </>
    );
  }
}

export default EventPractice;
