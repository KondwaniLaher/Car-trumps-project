import React from "react";
import "./App.css";
import Title from "./components/Title";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Garage from "./components/Garage";
import { Router } from "@reach/router";
import SingleCar from "./components/Single-Car";
import Rules from "./components/Rules";
import CarAdder from "./components/Car-Adder";
import Game from "./components/Game";

function App() {
  return (
    <>
      <div className="bg">
        <Title />
        <Nav />
        <Router>
          <Home path="/" />
          <Rules path="/rules" />
          <Garage path="/cars/*" />
          <SingleCar path="cars/:id" />
          <CarAdder path="/car-adder" />
          <Game path="/game" />
        </Router>
      </div>
    </>
  );
}

export default App;
