import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import SmallSpinner from "../../../../Components/Shared/Spinner/SmallSpinner/SmallSpinner";
import { authContext } from "../../../../Context/AuthProvider";

const ModalData = ({ serviceData, setServiceData }) => {
  const { user } = useContext(authContext);
  const [loading, setLoading] = useState(false);
  const handleBooking = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const price = serviceData.price;
    const location = form.location.value;
    const servicename = serviceData.servicename;
    const booking = {
      name,
      email,
      phone,
      price,
      location,
      servicename,
    };
    setLoading(true);
    fetch(`${process.env.REACT_APP_SERVER_URL}/bookings`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Successfully Booked");
        setServiceData(null);
        setLoading(false);
      });
  };

  return (
    <>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="bg-orange btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">
            Service : {serviceData?.servicename}
          </h3>
          <form onSubmit={handleBooking}>
            <input
              type="text"
              name="name"
              defaultValue={user?.displayName}
              readOnly
              placeholder="Full Name"
              className="input border border-gray-300 w-full my-2"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="input border border-gray-300 w-full my-2"
            />
            <input
              type="text"
              name="location"
              placeholder="type your location"
              className="input border border-gray-300 w-full my-2"
            />
            <input
              type="email"
              name="email"
              defaultValue={user?.email}
              placeholder="Email"
              disabled
              className="input border border-gray-300 w-full my-2"
            />

            <p className="py-2 text-sm">
              <span className="font-bold">Detail</span> :{" "}
              {serviceData?.description}
            </p>
            <p className="text-black">Price : {serviceData?.price}$</p>
            <button
              type="submit"
              className="py-1 mt-2 text-sm text-white text-center rounded-md px-6 bg-gradient-to-r from-second to-main"
            >
              {loading ? <SmallSpinner /> : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ModalData;
