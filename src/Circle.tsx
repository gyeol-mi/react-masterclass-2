import React, { useState } from "react";
import styled from "styled-components";

interface CircleProp {
  bgColor: string;
  //선택적인 props임을 나타내주는 ts문법
  borderColor?: string;
  text?: string;
}

interface ContainerProp {
  bgColor: string;
  borderColor: string;
}

const Container = styled.div<ContainerProp>`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: ${(props) => props.bgColor};
  border: 5px solid ${(props) => props.borderColor};
`;

function Circle({ bgColor, borderColor, text = "default text" }: CircleProp) {
  //state의 default값의 타입에 따라, 자동으로 ts가 타입을 유추함
  //state의 type값이 여러개인 경우에는 명시적으로 작성할 수도 있음
  const [counter, setCounter] = useState<number | string>(1);
  setCounter("hello");
  return (
    <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
      {text}
    </Container>
  );
}

export default Circle;
