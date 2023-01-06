import React from "react";
import testi1 from "../../../assets/images/testi1.png";
import testi2 from "../../../assets/images/testi12.png";
import testi3 from "../../../assets/images/testi3.png";
import SectionTitle from "../../../Components/Shared/SectionTitle/SectionTitle";
const Testimonial = () => {
  return (
    <div>
      <SectionTitle>Testimonial</SectionTitle>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-6 md:gap-y-10 gap-y-4 pt-12">
        <div className="border border-gray px-2 py-4 mx-4 md:mx-0">
          <div className="flex items-center">
            <img src={testi1} className="w-14 rounded-full" alt="" />
            <div className="px-4">
              <h4 className="font-bold">Rumana Hoque</h4>
              <p className="font-semibold">CEO,MANPOL</p>
            </div>
          </div>
          <p className="py-2 text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the
          </p>
        </div>
        <div className="border border-gray px-2 py-4 mx-4 md:mx-0">
          <div className="flex items-center">
            <img src={testi2} className="w-14 rounded-full" alt="" />
            <div className="px-4">
              <h4 className="font-bold">Rubayet Hasan</h4>
              <p className="font-semibold">CEO,PIXAMBLUR</p>
            </div>
          </div>
          <p className="py-2 text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the
          </p>
        </div>
        <div className="border border-gray px-2 py-4 mx-4 md:mx-0">
          <div className="flex items-center">
            <img src={testi3} className="w-14 rounded-full" alt="" />
            <div className="px-4">
              <h4 className="font-bold">Raihanul Hasan</h4>
              <p className="font-semibold">CEO,EPIC</p>
            </div>
          </div>
          <p className="py-2 text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
