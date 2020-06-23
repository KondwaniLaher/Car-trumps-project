import React, { Component } from "react";
import axios from "axios";
import SingleCar from "./Single-Car";
import Loader from "./Loader";

class Garage extends Component {
  state = {
    Cars: [],
    isLoading: true,
  };
  componentDidMount() {
    this.getCars();
  }
  getCars = () => {
    axios
      .get("https://kondwani-project1.herokuapp.com/cars")
      .then(({ data }) => {
        this.setState({ cars: data.cars, isLoading: false });
      });
  };

  render() {
    if (this.state.isLoading) return <Loader />;
    return this.state.cars.map((car) => {
      return <SingleCar key={car.id} {...car} />;
    });
  }
}

export default Garage;
