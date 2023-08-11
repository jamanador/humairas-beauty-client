import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import SmallSpinner from "../../../Components/Shared/Spinner/SmallSpinner/SmallSpinner";

const AddService = () => {
  const {
    register,
    handleSubmit,
  } = useForm();
const [loading,setLoading] = useState(false)
  const handleAddService = (data) => {
    console.log(data);
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMG_BB_HOST_KEY}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        if (imageData.success) {
          setLoading(true)
          const service = {
            servicename: data.name,
            price: data.servicefee,
            description: data.description,
            photo: imageData.data.url,
          };
          fetch(`${process.env.REACT_APP_SERVER_URL}/services`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(service),
          })
            .then((res) => res.json())
            .then((data) => {
              setLoading(false)
              toast.success("Service Added Successfully")
              console.log(data);
            });
        }
        console.log(imageData);
      });
  };

  return (
    <div>
      <h4 className="font-bold py-3">Add New Service </h4>
      <form onSubmit={handleSubmit(handleAddService)}>
        <label htmlFor="name" className="block text-gray-600 py-1">
          Service Name
        </label>
        <input
          type="text"
          placeholder="name"
          {...register("name", { required: "name is required" })}
          className="w-96 focus:outline-0 px-4 py-2 rounded-md border border-gray  text-gray-800"
        />
        <label htmlFor="name" className="block text-gray-600 py-1">
          Service Detail
        </label>
        <textarea
          type="text"
          {...register("description", {
            required: "Detail Explaintation is required",
          })}
          placeholder="Write your service Detail"
          className="w-96 focus:outline-0 px-4 py-2 rounded-md border border-gray  text-gray-800"
        />
        <label htmlFor="price" className="block text-gray-600 py-1">
          Service Fee
        </label>
        <input
          type="number"
          {...register("servicefee", { required: "Service fee is required" })}
          placeholder="Service Fee"
          className="w-96 focus:outline-0 px-4 py-2 rounded-md border border-gray  text-gray-800"
        />
        <label htmlFor="name" className="block text-gray-600  py-1">
          Photo
        </label>
        <input
          type="file"
          {...register("image", { required: "photo is required" })}
          placeholder="name"
          accept="image/*"
          className="text-center w-96 px-4 py-2 rounded-md border-gray border text-gray-800 "
        />
        <button
          type="submit"
          className="block mt-2 py-1 px-36 text-center rounded-xl bg-second text-white"
        >
          {loading ? <SmallSpinner/> : "Add Service"}
        </button>
      </form>
    </div>
  );
};

export default AddService;
