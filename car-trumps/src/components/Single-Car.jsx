import React, { Component } from "react";
import axios from "axios";
import Loader from "./Loader";

class SingleCar extends Component {
  state = {
    car: {},
    isLoading: true,
  };
  componentDidMount() {
    console.log("component mounted!");
    this.getCar();
  }
  componentDidUpdate(previousProps, previousState) {
    console.log("component updated!");
    if (this.props.id !== previousProps.id) {
      this.getCar();
    }
  }
  getCar = () => {
    axios
      .get(`https://kondwani-project1.herokuapp.com/cars/${this.props.id}`)
      .then(({ data }) => {
        this.setState({ car: data, isLoading: false });
      });
  };

  render() {
    if (this.state.isLoading) return <Loader />;
    const {
      Name,
      appeal,
      power,
      quickness,
      top_speed,
      weight,
    } = this.state.car;
    return (
      <main className="SingleCar">
        <section>
          <h3>{Name}</h3>
          <p>
            Appeal: {[appeal.Appeal_slug]} Cost: ${[appeal.Appeal]}
          </p>
          <p>
            Power: {[power.Power_slug]} Cost: ${[power.cost]}
          </p>
          <p>
            Quickness:{[quickness.Quickness_slug]} Cost: ${[quickness.cost]}
          </p>
          <p>
            Top Speed:{[top_speed.Top_speed_slug]} Cost: ${[top_speed.cost]}
          </p>
          <p>
            Weight: {[weight.Weight_slug]} Cost: ${[weight.cost]}
          </p>
        </section>
      </main>
    );
  }
}

export default SingleCar;
