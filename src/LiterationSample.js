import { useState } from "react";

const LiterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: "눈사람" },
    { id: 2, text: "코끼리" },
    { id: 3, text: "근삼이" },
    { id: 4, text: "큰삼이" }
  ]);
  const [text, setText] = useState("");
  const [id, setId] = useState(5);

  const handleOnChange = (input) => {
    const value = input.target.value;
    setText(value);
  };
  const handleOnClick = () => {
    const nextName = names.concat({ id: id, text: text });
    setNames(nextName);
    setId(id + 1);
    setText("");
  };
  const handleDoubleClick = (id) => {
    const filteredText = names.filter((item) => item.id !== id);
    setNames(filteredText);
  };

  const contents = names.map((item) => (
    <li key={item.id} onDoubleClick={() => handleDoubleClick(item.id)}>
      {item.text}
    </li>
  ));

  return (
    <>
      <div>
        <input
          onChange={handleOnChange}
          placeholder="항목 입력"
          value={text}
        ></input>
        <button onClick={handleOnClick}>추가</button>
      </div>
      <ul>{contents}</ul>
    </>
  );
};

export default LiterationSample;
