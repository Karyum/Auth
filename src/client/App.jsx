import React from "react";
import { render } from "react-dom";
import styled from "styled-components";

const Title = styled.h1`
  display: block;
  color: blue;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const App = () => (
  <Wrapper>
    <Title>Hello</Title>
  </Wrapper>
);

render(<App />, document.getElementById("root"));
