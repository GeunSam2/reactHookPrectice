import { useState } from "react";

const EventPracticeHook = () => {
  const blankForm = {
    name: "",
    message: ""
  };
  const [form, setForm] = useState(blankForm);
  const { name, message } = form;

  const handleChange = (input) => {
    const nextForm = {
      ...form,
      [input.target.name]: input.target.value
    };
    setForm(nextForm);
  };

  const handleKeyPress = (input) => {
    if (input.key === "Enter") {
      handleOnClick();
    }
  };

  const handleOnClick = () => {
    setForm(blankForm);
  };

  return (
    <>
      <div>
        <h1>이벤트 연습 Hook</h1>
        <p>이름 : {name}</p>
        <p>메시지 : {message}</p>
        <input
          type="text"
          name="name"
          placeholder="이름입력"
          value={name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="message"
          placeholder="메시지입력"
          value={message}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        />
        <button onClick={handleOnClick}>확인</button>
      </div>
    </>
  );
};

export default EventPracticeHook;
