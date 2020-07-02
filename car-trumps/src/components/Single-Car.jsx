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
          <img
            src="https://banner2.cleanpng.com/20180221/vgw/kisspng-sports-car-luxury-vehicle-royalty-free-vector-realistic-red-sports-car-5a8df1289503b3.0708040015192517526104.jpg"
            alt="Car"
          />
          <p class="stat">
            Appeal: {[appeal.Appeal_slug]} <br /> Cost: ${[appeal.Appeal]}
          </p>
          <p class="stat">
            Power: {[power.Power_slug]} <br /> Cost: ${[power.cost]}
          </p>
          <p class="stat">
            Quickness:{[quickness.Quickness_slug]} <br /> Cost: $
            {[quickness.cost]}
          </p>
          <p class="stat">
            Top Speed:{[top_speed.Top_speed_slug]} <br /> Cost: $
            {[top_speed.cost]}
          </p>
          <p class="stat">
            Weight: {[weight.Weight_slug]} <br /> Cost: ${[weight.cost]}
          </p>
        </section>
      </main>
    );
  }
}

export default SingleCar;

// https://ibb.co/yRW6JDW
// https://ibb.co/5GKQ2D7
// https://ibb.co/n7GRdZH
// https://ibb.co/zhxrkYt
// https://ibb.co/F3vPhSk
// https://ibb.co/c2vPVq6
// https://ibb.co/CwdsgJB
// https://ibb.co/9ZyhT0G
// https://ibb.co/WkNmnyL
