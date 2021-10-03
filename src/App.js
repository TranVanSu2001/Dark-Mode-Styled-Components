import React, { useState } from "react";
import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyled } from "./theme.js";

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

function App() {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyled></GlobalStyled>
      <StyledApp>
        Hello World!
        <button onClick={() => themeToggler()}>ChangeTheme</button>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
