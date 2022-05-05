import { useEffect, useState } from "react";

const useServiceDetail = (serviceId) => {
  const [service, setService] = useState({});
  useEffect(() => {
    const url = `https://floating-depths-55387.herokuapp.com/service/${serviceId}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => setService(data));
  }, [serviceId]);
  return [service];
};

export default useServiceDetail;
