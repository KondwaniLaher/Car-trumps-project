import React from "react";
import { Link } from "@reach/router";

const SingleCar = (props) => {
  const { name, id } = props;
  return (
    <div>
      <Link to={`/Garage/${id}`}>
        <h2>{name}</h2>
      </Link>
    </div>
  );
};

export default SingleCar;
