import React from "react";
import person from "../../../assets//images/person.png";
const ExtraSection = () => {
  return (
    <section className="flex flex-wrap md:justify-between my-16">
      <div className="md:w-5/12">
        <img src={person} alt="" className="" />
      </div>
      <div className="text-left flex-1 md:ml-16 px-4 md:px-0">
        <h3 className="font-bold lg:text-xl text-lg pt-6 md:pt-0">
          Let us handle your  <br></br> screen  
          <span className="text-second px-2">Professionally</span>
        </h3>
        <p className="text-sm lg:w-10/12 md:py-6 py-3">With well written codes, we build amazing apps for all platforms, mobile and web apps in general ipsum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum.</p>
        <ul className="flex md:py-6 py-3">
            <li className="md:px-4 mr-4 md:mr-0">
                <h3 className="font-bold text-second text-lg">500+</h3>
                <p className="font-bold">Happy Customer</p>
            </li>
            <li className="md:px-4">
                <h3 className="font-bold text-second text-lg">16+</h3>
                <p className="font-bold">Total Service</p>
            </li>
        </ul>
      </div>
    </section>
  );
};

export default ExtraSection;
