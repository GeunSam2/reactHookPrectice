import { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0
    };
  }

  render() {
    const { children } = this.props;
    const { number } = this.state;
    return (
      <>
        Counter 컴포넌트 테스트 입니다. Counter : {number}, children :{children}
      </>
    );
  }
}

export default Counter;
