import { useState, useMemo } from "react";

const Average = () => {
  const [averageDic, setAverageDic] = useState({
    number: "",
    numList: []
  });

  const handleOnChange = (input) => {
    setAverageDic({ ...averageDic, number: input.target.value });
  };

  const handleOnClick = () => {
    setAverageDic({
      number: "",
      numList: averageDic.numList.concat(Number(averageDic.number))
    });
  };

  const handleOnClickNum = (index) => {
    const numList = averageDic.numList;
    numList.splice(index, 1);
    setAverageDic({ ...averageDic, numList });
  };

  const getAverage = (numList) => {
    console.log("평균값 계산중");
    console.log(numList);
    if (numList.length === 0) return 0;
    const numSum = numList.reduce((a, b) => a + b);
    console.log(numSum);
    return numSum / numList.length;
  };

  const avg = useMemo(() => getAverage(averageDic.numList), [
    averageDic.numList
  ]);

  return (
    <div>
      <input
        placeholder="숫자를 입력하세요."
        type="number"
        value={averageDic.number}
        onChange={handleOnChange}
      ></input>
      <button onClick={handleOnClick}>평균구하기</button>
      <div>
        <ul>
          {averageDic.numList.map((num, index) => (
            <li key={index} onDoubleClick={() => handleOnClickNum(index)}>
              {index}번째 값: {num}
            </li>
          ))}
        </ul>
        <h1>평균값 : {avg}</h1>
      </div>
    </div>
  );
};

export default Average;
