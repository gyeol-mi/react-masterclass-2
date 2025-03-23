import React from "react";
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
  border-radius: 50px;
  background-color: ${(props) => props.bgColor};
  border: 5px solid ${(props) => props.borderColor};
`;

//optional prop에 정보를 선택적으로 보내는 방법 1
function Circle({ bgColor, borderColor, text = "default text" }: CircleProp) {
  return (
    //optional prop에 정보를 선택적으로 보내는 방법 2
    <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
      {text}
    </Container>
  );
}

export default Circle;
