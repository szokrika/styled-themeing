import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import styled, { ThemeProvider } from "styled-components";
import theme from "styled-theming";
import { darken } from "polished";

import { bgrModes, colorModes, radiuses } from "./design-system";

const boxBackgroundColor = theme("mode", bgrModes);
const boxColor = theme("mode", colorModes);
const boxRadius = theme("mode", radiuses);
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Box = styled.div`
  font-family: sans-serif;
  transition: all 1s ease;
  border: 3px solid ${darken(0.333, "#fff")};
  border-radius: ${boxRadius};
  padding: 3rem;
  color: ${boxColor};
  background-color: ${boxBackgroundColor};
`;

export default function App() {
  const [mode, setMode] = useState("light");
  const handleMode = value => {
    setMode(value);
  };
  const getRandomInt = max => {
    return Math.floor(Math.random() * Math.floor(max));
  };
  useEffect(() => {
    const themes = Object.keys(bgrModes);
    setInterval(() => {
      handleMode(themes[getRandomInt(themes.length)]);
    }, 1000);
  }, []);
  return (
    <ThemeProvider theme={{ mode }}>
      <Container>
        <Box>Hello World</Box>
      </Container>
    </ThemeProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
