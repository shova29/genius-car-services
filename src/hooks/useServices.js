import { useEffect, useState } from "react";

const useServices = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://floating-depths-55387.herokuapp.com/service")
      .then((response) => response.json())
      .then((data) => setServices(data));
  }, []);
  return [services, setServices];
};

export default useServices;
