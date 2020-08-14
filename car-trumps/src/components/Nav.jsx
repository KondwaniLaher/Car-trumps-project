import React from "react";
import { Link } from "@reach/router";

const Nav = () => {
  return (
    <section className="navBar">
      <nav>
        <button className="btn">
          <Link to="/">Home</Link>
        </button>
        <button className="btn">
          <Link to="/cars">View Garage</Link>
        </button>
        <button className="btn">
          <Link to="/car-adder">Create a car</Link>
        </button>
      </nav>
    </section>
  );
};

export default Nav;
