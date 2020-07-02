import React from "react";
import { Link } from "@reach/router";

const Nav = () => {
  return (
    <section class="navBar">
      <nav>
        <button>
          <Link to="/">Home</Link>
        </button>
        <button>
          <Link to="/rules">Rules</Link>
        </button>
        <button>
          <Link to="/cars">View Garage</Link>
        </button>
        <button>
          <Link to="/car-adder">Create a car</Link>
        </button>
      </nav>
    </section>
  );
};

export default Nav;
