import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import styled, { ThemeProvider } from "styled-components";
import theme from "styled-theming";
import { darken } from "polished";

const bgrModes = {
  light: "#fff",
  medium: "#ccc",
  dark: "#000",
  red: "#f00",
  green: "#0f0",
  blue: "#00f"
};

const colorModes = {
  light: "#000",
  medium: "#333",
  dark: "#fff",
  red: "#fff",
  green: "#000",
  blue: "#fff"
};

const radiuses = {
  light: "2%",
  medium: "10px",
  dark: "200px",
  red: "50%",
  green: "15%",
  blue: "30px"
};

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
