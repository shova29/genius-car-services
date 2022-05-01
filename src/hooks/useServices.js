import { useEffect, useState } from "react";

const useServices = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/service")
      .then((response) => response.json())
      .then((data) => setServices(data));
  }, []);
  return [services, setServices];
};

export default useServices;
