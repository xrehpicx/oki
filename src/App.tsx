import React, { useState } from "react";

import { HashRouter as Router } from "react-router-dom";
//components
import Home from "./components/Home/Home";

// external components
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import "./App.css";
import { PeerContextProvider } from "./components/PeerContext";

function App() {
  const [themetype, setThemetype] = useState<"dark" | "light">("light");

  const theme = createMuiTheme({
    palette: {
      type: themetype,
      primary: {
        main: "#517DFF",
        light: "#517DFF",
        dark: "#517DFF",
      },
      common: { white: "white" },
      background: {
        default: themetype === "dark" ? "#12192F" : "white",
      },
    },
  });

  return (
    <Router basename="/">
      <PeerContextProvider>
        <ThemeProvider {...{ theme }}>
          <Home />
        </ThemeProvider>
      </PeerContextProvider>
    </Router>
  );
}

export default App;
