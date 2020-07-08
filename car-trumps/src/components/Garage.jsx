import React, { Component } from "react";
import axios from "axios";
import Loader from "./Loader";
import CarCard from "./Car-card";
import { Router } from "@reach/router";
import CarAdder from "./Car-Adder";
import SingleCar from "./Single-Car";

class Garage extends Component {
  state = {
    cars: [],
    isLoading: true,
  };
  componentDidMount() {
    this.getCars();
  }
  getCars = () => {
    axios
      .get("https://kondwani-project1.herokuapp.com/cars")
      .then(({ data }) => {
        this.setState({ cars: data, isLoading: false });
      });
  };
  addCar = (newCar) => {
    this.setState((currentState) => {
      return { cars: [newCar, ...currentState.cars] };
    });
  };

  render() {
    const { isLoading, cars } = this.state;
    if (isLoading) return <Loader />;
    return (
      <main className="garage">
        <Router>
          <CarAdder path="add-car" addCar={this.addCar} />
          <SingleCar path=":id" />
        </Router>
        <ul>
          {cars.map((car) => {
            return <CarCard key={car.id} {...car} />;
          })}
        </ul>
      </main>
    );
  }
}

export default Garage;
