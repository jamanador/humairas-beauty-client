import React, { useContext } from "react";
import { authContext } from "../../../../Context/AuthProvider";

const ModalData = ({ serviceData }) => {
  console.log(serviceData);
  const { user } = useContext(authContext);
  return (
    <div>
      {/* The button to open modal */}

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Service : {serviceData?.servicename}</h3>
          <form>
            <input
              type="text"
              name="fullname"
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
              name="email"
              defaultValue={user?.email}
              placeholder="Email"
              disabled
              className="input border border-gray-300 w-full my-2"
            />
            <p className="py-2 text-sm"><span className="font-bold">Detail</span> : {serviceData?.description}</p>
            <p>Price : {serviceData?.price}</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalData;
