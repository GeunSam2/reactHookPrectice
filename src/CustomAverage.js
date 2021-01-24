import { useMemo, useRef, useReducer } from "react";

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

  // eslint-disable-next-line no-sequences
  return [state, handleOnChangeCust, handleOnClickCust, handleOnClickNumCust];
};

const getAverage = (numList) => {
  console.log("평균값 계산중");
  console.log("받은 평균값 : ", String(numList));
  if (numList.length === 0) return 0;
  const numSum = numList.reduce((a, b) => a + b);
  console.log("계산한 합계 : ", String(numSum));
  return numSum / numList.length;
};

const Average = () => {
  const [
    states,
    handleOnChangeCust,
    handleOnClickCust,
    handleOnClickNumCust
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
        ref={refVar}
      ></input>
      <button onClick={handleOnClickCust}>평균구하기</button>
      <div>
        <ul>
          {states.numList.map((num, index) => (
            <li
              key={index}
              onDoubleClick={() => handleOnClickNumCust(index, refVar)}
            >
              {index}번째 값: {num}
            </li>
          ))}
        </ul>
        <h1>평균값 : {avg}</h1>
        {/* <h1>평균값2 : {getAverage(states.numList)}</h1> */}
      </div>
    </div>
  );
};

export default Average;
