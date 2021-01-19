import { useState, useEffect } from "react";

const Info = () => {
  const [arrays, setArrays] = useState({ name: "염근철", nickName: "근삼이" });

  useEffect(() => {
    console.log("컴포넌트 생성시에만 실행!");
    const { name, nickName } = arrays;
    console.log({ name, nickName });
    return () => {
      console.log("cleanup");
      console.log(name);
    };
  }, []);

  const handleOnChange = (input) => {
    setArrays({ ...arrays, [input.target.name]: input.target.value });
  };

  const handleOnKeyPress = (input) => {
    if (input.key === "Enter") {
      handleOnClick();
    }
  };

  const handleOnClick = () => {
    setArrays({ name: "", nickName: "" });
  };

  return (
    <div>
      <div>
        <p>
          <b>이름 : </b>
          {arrays.name}
        </p>
        <p>
          <b>닉네임 : </b>
          {arrays.nickName}
        </p>
      </div>
      <input
        type="text"
        placeholder="이름"
        name="name"
        value={arrays.name}
        onChange={handleOnChange}
      ></input>
      <input
        type="text"
        placeholder="닉네임"
        name="nickName"
        value={arrays.nickName}
        onChange={handleOnChange}
        onKeyPress={handleOnKeyPress}
      ></input>
      <button onClick={handleOnClick}>초기화</button>
    </div>
  );
};

export default Info;
