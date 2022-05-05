import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import axiosPrivate from "../../api/axiosPrivate";

const Orders = () => {
  const [user] = useAuthState(auth);
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const getOrders = async () => {
      const email = user?.email;
      const url = `https://floating-depths-55387.herokuapp.com/order?email=${email}`;
      try {
        const { data } = await axiosPrivate.get(url);
        setOrders(data);
      } catch (error) {
        console.log(error.message);
        if (error.respnse.status === 401 || error.respnse.status === 403) {
          signOut(auth);
          navigate("/login");
        }
      }
    };
    getOrders();
  }, [user]);
  return (
    <div className="w-50 mx-auto">
      <h2>This is Orders: {orders.length}</h2>
      {orders.map((order) => (
        <div key={order._id}>
          <p>
            {order.email}: {order.service}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Orders;
