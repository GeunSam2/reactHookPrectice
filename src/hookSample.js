import { useState } from "react";

const Say = () => {
  const [message, setMessage] = useState("요요");
  const inMessage = () => setMessage("안녕하세요");
  const outMessage = () => setMessage("안녕히가세요");

  const [color, setColor] = useState("black");

  return (
    <>
      <button onClick={inMessage}>입장</button>
      <button onClick={outMessage}>퇴장</button>
      <h1 style={{ color }}>{message}</h1>
      <button style={{ color: "red" }} onClick={() => setColor("red")}>
        빨강
      </button>
      <button style={{ color: "green" }} onClick={() => setColor("green")}>
        초록
      </button>
      <button style={{ color: "blue" }} onClick={() => setColor("blue")}>
        파랑
      </button>
    </>
  );
};

export default Say;
