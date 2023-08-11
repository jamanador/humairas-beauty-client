import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { authContext } from "../../../Context/AuthProvider";
import OrderTableData from "./OrderTableData/OrderTableData";

const MyOrders = () => {
  const { user } = useContext(authContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/bookings?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
      });
  }, [user?.email, orders]);

  const handleDelete = (id) => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/bookings/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success("Successfully Deleted");
        }
        console.log(data);
      });
  };
  return (
    <>
      {orders.length ? (
        <div className="container mx-auto">
          <h3 className="text-center font-bold py-6 dark:text-white">
            You're already {orders.length} Service Added in Cart
          </h3>
          <div className="px-12 ">
            <table className="table w-full bg-base-100">
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Info</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {orders?.map((order, index) => (
                  <OrderTableData
                    key={order._id}
                    index={index}
                    order={order}
                    handleDelete={handleDelete}
                  ></OrderTableData>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="p-4 text-center flex items-center h-60 justify-center">
          <div>
            <p className="text-4xl text-gray-500">😔</p>
            <h3 className="text-red-500 font-bold py-1 text-xl">
              Your Cart is empty
            </h3>
            <p>Looks like you have not added anything to you cart.</p>
            <small>
              Goo ahead & Explore our{" "}
              <Link className="text-purple-600 font-medium" to="/">
                {" "}
                Services
              </Link>
            </small>
          </div>
        </div>
      )}
    </>
  );
};

export default MyOrders;
