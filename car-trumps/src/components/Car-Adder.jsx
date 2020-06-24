import React, { Component } from "react";

class CarAdder extends Component {
  state = {
    cost: { appeal: 3, power: 3, quickness: 3, top_speed: 3, weight: 3 },
    TotalCost: 15,
    Name: "",
    Appeal_slug: "Banger",
    Power_slug: "Puny",
    Quickness_slug: "Slug like",
    Top_speed_slug: "Pathetic",
    Weight_slug: "Feather",
  };
  handleInput = (event) => {
    const { name, value, cost } = event.target;
    this.setState((currentState) => {
      // we get the name of the stat we're changing, then we pull up the current cost in an object
      //we assign the cost stored in the option node and return that to our new state
      return { [name]: value, cost: { ...currentState.cost, name: +cost } };
    });
  };
  render() {
    return (
      <form>
        <label>
          Name:
          <input type="text" />
        </label>
        <br />
        <label>
          Appeal:
          <select onChange={this.handleInput} name="appeal">
            <option value="Banger" cost="1">
              Banger (£1)
            </option>
            <option value="Normal" cost="2">
              Normal (£2)
            </option>
            <option value="Sporty" cost="3">
              Sporty (£3)
            </option>
            <option value="Fancy" cost="4">
              Fancy (£4)
            </option>
            <option value="Luxuriou$" cost="5">
              Luxuriou$ (£5)
            </option>
          </select>
        </label>
        <br />
        <label>
          Power:
          <select onChange={this.handleInput} name="power">
            <option value="Puny" cost="1">
              Puny (£1)
            </option>
            <option value="Weak" cost="2">
              Weak (£2)
            </option>
            <option value="normal" cost="3">
              normal (£3)
            </option>
            <option value="Punchy" cost="4">
              Punchy (£4)
            </option>
            <option value="Brutal" cost="5">
              Brutal (£5)
            </option>
          </select>
        </label>
        <br />
        <label>
          Quickness:
          <select onChange={this.handleInput} name="quickness">
            <option value="Slug like" cost="1">
              Slug like (£1)
            </option>
            <option value="Slow" cost="2">
              Slow (£2)
            </option>
            <option value="Average" cost="3">
              Average (£3)
            </option>
            <option value="Zippy" cost="4">
              Zippy (£4)
            </option>
            <option value="Lightning" cost="5">
              Lightning (£5)
            </option>
          </select>
        </label>
        <br />
        <label>
          Top Speed:
          <select onChange={this.handleInput} name="top_speed">
            <option value="Pathetic" cost="1">
              Pathetic (£1)
            </option>
            <option value="Comfortable" cost="2">
              Comfortable (£2)
            </option>
            <option value="Average" cost="3">
              Average (£3)
            </option>
            <option value="White_knuckle" cost="4">
              White knuckle (£4)
            </option>
            <option value="Warp Speed" cost="5">
              Warp Speed (£5)
            </option>
          </select>
        </label>
        <br />
        <label>
          Weight:
          <select onChange={this.handleInput} name="Weight">
            <option value="Feather" cost="1">
              Feather (£1)
            </option>
            <option value="Lightweight" cost="2">
              Lightweight (£2)
            </option>
            <option value="Average" cost="3">
              Average (£3)
            </option>
            <option value="Hefty" cost="4">
              Hefty (£4)
            </option>
            <option value="Tank" cost="5">
              Tank (£5)
            </option>
          </select>
        </label>
        <br />
        <button type="submit">Add car to garage</button>
      </form>
    );
  }
}

export default CarAdder;
