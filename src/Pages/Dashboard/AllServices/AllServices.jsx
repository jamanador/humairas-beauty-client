import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import ServiceTableData from "./ServiceTableData";

const AllServices = () => {
  const [services, setServices] = useState();
  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/services`)
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, [services]);

  const handleDeleteService = (id) => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/services/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success("Service Deleted Successfully");
        }
      });
  };

  return (
    <div>
      <h3 className="font-bold py-3">All Services Here : </h3>
      <div className="px-12 ">
        <table className="table w-full bg-base-100">
          <thead>
            <tr>
              <th>SL</th>
              <th>Profile</th>
              <th>Service Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {services?.map((service, index) => (
              <ServiceTableData
                key={service._id}
                service={service}
                index={index}
                handleDeleteService={handleDeleteService}
              ></ServiceTableData>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllServices;
