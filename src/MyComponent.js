import { Component } from "react";
import PropTypes from "prop-types";

// const MyComponent = ({ children, name, flavor }) => {
//   return (
//     <>
//       <div>나만의 새로운 컴포넌트 이름은 {name} 입니다. </div>
//       <div>컴포넌트의 children 값은 {children} 입니다. </div>
//       <div>프롭타입 테스트를 위한 값은 {flavor} 입니다. </div>
//     </>
//   );
// };

class MyComponent extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     number: 0,
  //     fixedNumber: 10
  //   };
  // }
  state = {
    number: 0,
    fixedNumber: 10
  };

  render() {
    const { children, name, flavor } = this.props;
    const { number, fixedNumber } = this.state;

    const addNum = () => {
      this.setState({ number: number + 1 });
      this.setState(
        (prevState) => {
          return { number: prevState.number + 1 };
        },
        () => {
          console.log("상태업데이트 완료!" + this.state.number);
        }
      );
    };

    return (
      <>
        <div>name : {name} </div>
        <div>children : {children}</div>
        <div>flavor : {flavor}</div>
        <div>number : {number}</div>
        <div>fixedNumber : {fixedNumber}</div>
        <button onClick={addNum}>add</button>
      </>
    );
  }
}

const triple = (value) => value * 3;

MyComponent.defaultProps = {
  name: "Reacts",
  flavor: 3
};

MyComponent.propTypes = {
  name: PropTypes.string,
  children: PropTypes.string,
  flavor: PropTypes.number.isRequired
};

export { triple };
export default MyComponent;
