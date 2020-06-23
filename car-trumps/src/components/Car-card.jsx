import React from "react";
import { Link } from "@reach/router";

const CarCard = (props) => {
  console.log(props);
  const { name, id } = props;
  return (
    <div>
      <Link to={`/cars/${id}`}>
        <h2>{name}</h2>
      </Link>
    </div>
  );
};

export default CarCard;
