import React, { useEffect, useState } from "react";
import Service from "../Service/Service";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://floating-depths-55387.herokuapp.com/service")
      .then((response) => response.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div id="services" className="container">
      <div className="row">
        <h2 className="services-title text-center text-primary mt-5">
          Our Services
        </h2>
        <div className="services-container mt-5">
          {services.map((service) => (
            <Service key={service._id} service={service}></Service>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
