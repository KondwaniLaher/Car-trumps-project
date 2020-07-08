import React from "react";
import { Link } from "@reach/router";

const CarCard = (props) => {
  const { Name, id } = props;
  return (
    <main className="car-card">
      <Link to={`/cars/${id}`}>
        <h2>{Name}</h2>
        <h4>{"Click for stats"}</h4>
      </Link>
    </main>
  );
};

export default CarCard;
