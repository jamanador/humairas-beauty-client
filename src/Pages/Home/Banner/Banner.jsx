import React from "react";
import PrimaryButton from "../../../Components/Shared/PrimaryButton/PrimaryButton";
import beauty from "../../../assets/images/beauty.png";
const Banner = () => {
  return (
    <div className="container mx-auto md:flex md:justify-between items-center md:py-28 py-20 px-6">
      <div className="lg:w-12/12 w-full">
        <h3 className="hidden md:block text-black font-bold lg:text-3xl md:text-2xl text-1xl">
          BEAUTY SALON <br></br>FOR EVERY WOMEN
        </h3>
        <h3 className="md:hidden text-black font-extrabold lg:text-4xl md:text-2xl text-1xl">
        BEAUTY SALON <br></br>FOR EVERY WOMEN
        </h3>
        <p className="py-4 w-full lg:w-10/12">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the
        </p>
      <PrimaryButton>Get An Apointment</PrimaryButton>
      </div>
      <div className="lg:w-8/12">
        <img
          src={beauty}
          alt=""
          className="lg:w-10/12 rounded-sm shadow-sm md:block hidden"
        />
      </div>
    </div>
  );
};

export default Banner;
