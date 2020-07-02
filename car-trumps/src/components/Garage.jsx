import React, { Component } from "react";
import axios from "axios";
import Loader from "./Loader";
import CarCard from "./Car-card";
import { Router } from "@reach/router";
import CarAdder from "./Car-Adder";

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
        console.log(data);
        this.setState({ cars: data, isLoading: false });
      });
  };
  addCar = (newCar) => {
    this.setStata((currentState) => {
      return { cars: [newCar, ...currentState.cars] };
    });
  };

  render() {
    const { isLoading, cars } = this.state;
    if (isLoading) return <Loader />;
    return (
      <main class="garage">
        <Router>
          <CarAdder path="add-car" addCar={this.addCar} />
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
