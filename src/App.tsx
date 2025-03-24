import React, { useState } from "react";
function App() {
  const [value, setValue] = useState("");
  //////////////////////////////event의 타입
  //////////1. 이벤트의 타입: formEvent
  //////////2. 어떤 요소에서 발생? formElement에서 발생
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    // console.log(event.currentTarget.value)
    // 다음 코드는 js의 구조 분해 할당을 사용한 코드
    // const value = event.currentTarget.value; 와 같은 역할을 함
    const {
      currentTarget: { value },
    } = event;
    setValue(value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("hello", value);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={value}
          onChange={onChange}
          type="text"
          placeholder="username"
        />
      </form>
    </div>
  );
}

export default App;
