import { useMemo, useRef, useReducer } from "react";
import classNames from "classnames/bind";
import styles from "./styles/sassComponent.module.scss";
// import styles from "./css/sassComponent.module.css";

const cx = classNames.bind(styles);

const reducer = (state, action) => {
  switch (action.funcName) {
    case "CHANGE":
      return { ...state, number: action.input.target.value };
    case "CLICK":
      console.log("CLICK");
      return {
        number: "",
        numList: state.numList.concat(Number(state.number))
      };
    case "CLICKNUM":
      console.log("CLICKNUM");
      const numList = [...state.numList];
      console.log("지우기 전 : ", String(numList));
      numList.splice(action.index, 1);
      console.log("지운 후 : ", String(numList));
      action.refVar.current.focus();
      const returnValue = { ...state, numList };
      console.log("리턴 값 : ", JSON.stringify(returnValue));
      return returnValue;
    default:
      console.log("이상하군... 에러란다.");
      break;
  }
  return state;
};

const GetAverage = (initalForm) => {
  const [state, dispatch] = useReducer(reducer, initalForm);

  const handleOnChangeCust = (input) => {
    dispatch({ funcName: "CHANGE", input });
  };

  const handleOnClickCust = () => {
    dispatch({ funcName: "CLICK" });
  };

  const handleOnClickNumCust = (index, refVar) => {
    dispatch({ funcName: "CLICKNUM", index, refVar });
  };

  const handleOnKeyPressCust = (input) => {
    if (input.key === "Enter") {
      dispatch({ funcName: "CLICK" });
    }
  };

  // eslint-disable-next-line no-sequences
  return [
    state,
    handleOnChangeCust,
    handleOnClickCust,
    handleOnClickNumCust,
    handleOnKeyPressCust
  ];
};

const getAverage = (numList) => {
  console.log("평균값 계산중");
  console.log("받은 평균값 : ", String(numList));
  if (numList.length === 0) return 0;
  const numSum = numList.reduce((a, b) => a + b);
  console.log("계산한 합계 : ", String(numSum));
  return numSum / numList.length;
};

const returnColor = (num) => {
  let color = "";
  if (num <= 30) {
    color = color + "red";
  } else if (num <= 70) {
    color = color + "orange";
  } else if (num <= 150) {
    color = color + "yellow";
  } else if (num <= 300) {
    color = color + "green";
  } else if (num <= 500) {
    color = color + "blue";
  } else if (num <= 1000) {
    color = color + "indigo";
  } else {
    color = color + "violet";
  }
  return color;
};

const Average = () => {
  const [
    states,
    handleOnChangeCust,
    handleOnClickCust,
    handleOnClickNumCust,
    handleOnKeyPressCust
  ] = GetAverage({
    number: "",
    numList: []
  });

  const refVar = useRef(null);

  const avg = useMemo(() => getAverage(states.numList), [states.numList]);

  return (
    <div>
      <input
        placeholder="숫자를 입력하세요."
        type="number"
        value={states.number}
        onChange={handleOnChangeCust}
        onKeyPress={handleOnKeyPressCust}
        ref={refVar}
      ></input>
      <button onClick={handleOnClickCust}>평균구하기</button>
      <div className={cx("numList")}>
        <ul>
          {states.numList.map((num, index) => (
            <div className={cx("SassComponent")} key={index}>
              <li onDoubleClick={() => handleOnClickNumCust(index, refVar)}>
                {index}번째 값: {num}
              </li>
              <div className={cx("box", returnColor(num))}></div>
            </div>
          ))}
        </ul>
      </div>
      <h1>평균값 : {avg}</h1>
    </div>
  );
};

export default Average;
