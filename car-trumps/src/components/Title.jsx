import React from "react";
import { Link } from "@reach/router";

const Nav = () => {
  return (
    <nav className="Nav">
      <button>
        <Link to="/">Home</Link>
      </button>
      <button>
        <Link to="/Welcome">Welcome</Link>
      </button>
      <button>
        <Link to="/Garage">View Garage</Link>
      </button>
    </nav>
  );
};

export default Nav;
