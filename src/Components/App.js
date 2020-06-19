import React from 'react';
import Router from './Router';
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
  }
`;

function App() {
  return (
    <>
    <GlobalStyle />
    <Router />
    </>
  );
}

export default App;
