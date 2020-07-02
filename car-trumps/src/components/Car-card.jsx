import React from "react";
import { Link } from "@reach/router";

const CarCard = (props) => {
  const { Name, id, appeal } = props;
  console.log([appeal.Appeal_slug] + "hello");
  return (
    <main class="car-card">
      <Link to={`/cars/${id}`}>
        <h2>{Name}</h2>
        <h4>{"Click for stats"}</h4>
      </Link>
    </main>
  );
};

export default CarCard;
