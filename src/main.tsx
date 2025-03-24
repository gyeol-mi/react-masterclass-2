import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme.ts";

ReactDOM.render(
  <StrictMode>
    <ThemeProvider theme={darkTheme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
  document.getElementById("root")
);
