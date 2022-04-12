import React from "react";
import Image from "react-bootstrap/Image";
import sleeping from "../../../images/sleeping.jpg";
const NotFound = () => {
  return (
    <div className="container">
      <h2 className="mt-5 text-primary text-center">Mechanic is sleeping</h2>
      <img
        className="mt-3 fluid rounded w-50 mx-auto mx-auto d-block"
        src={sleeping}
        alt=""
        srcset=""
      />
    </div>
  );
};

export default NotFound;
