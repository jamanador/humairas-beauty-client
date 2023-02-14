import React from "react";

const SingleServiceCard = ({ service, setServiceData }) => {
  return (
    <div className="p-4 w-12/12 text-center mx-2">
      <img src={service.photo} alt="" className="w-16 mx-auto" />
      <h2 className="font-bold pt-1">{service?.servicename}</h2>
      <h5 className="text-second font-semibold">{service?.price}</h5>
      <p className="text-sm mb-3">{service?.description}</p>
      {/* <button className="px-6 py-1 my-3 bg-main text-white text-sm">
        Book Now
      </button> */}
      <label
        onClick={() => setServiceData(service)}
        htmlFor="my-modal-3"
        className="px-6 py-1 my-3 bg-main text-white text-sm"
      >
        Book Now
      </label>
    </div>
  );
};

export default SingleServiceCard;
