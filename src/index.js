import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import styled, { ThemeProvider } from "styled-components";
import theme from "styled-theming";

const bgrModes = {
  light: "#fff",
  medium: "#ccc",
  dark: "#000"
};

const colorModes = {
  light: "#000",
  medium: "#333",
  dark: "#fff"
};

const boxBackgroundColor = theme("mode", bgrModes);
const boxColor = theme("mode", colorModes);
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Box = styled.div`
  border: 2px solid #ccc;
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
