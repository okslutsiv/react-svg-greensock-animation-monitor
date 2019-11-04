import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

import Responsive from "./responsive";

function App() {
  return (
    <Main>
      <h1>Hello CodeSandbox</h1>
      <Responsive />
    </Main>
  );
}
const Main = styled.div`
  display: flex;
  flex-flow: column;
  min-height: 100vh;
  font-family: sans-serif;
  justify-content: center;
  align-items: center;
`;
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
