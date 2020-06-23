import React, { Component } from "react";
import axios from "axios";
import Loader from "./Loader";
import CarCard from "./Car-card";

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
        this.setState({ cars: data.cars, isLoading: false });
      });
  };

  render() {
    if (this.state.isLoading) return <Loader />;
    return this.state.cars.map((car) => {
      return <CarCard key={car.id} {...car} />;
    });
  }
}

export default Garage;
