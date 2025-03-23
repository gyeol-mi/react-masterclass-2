import React from "react";
import styled from "styled-components";

interface CircleProp {
  bgColor: string;
}

const Container = styled.div<CircleProp>`
  width: 100px;
  height: 100px;
  background-color: ${(props) => props.bgColor};
`;

function Circle({ bgColor }: CircleProp) {
  return <Container bgColor={bgColor} />;
}

export default Circle;
