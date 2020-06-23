import React from "react";
import "./App.css";
import Title from "./components/Title";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Garage from "./components/Garage";
import { Router } from "@reach/router";

function App() {
  return (
    <>
      <Title />
      <Nav />
      <Router>
        <Home path="/" />
        <Garage path="/cars" />
      </Router>
    </>
  );
}

export default App;
