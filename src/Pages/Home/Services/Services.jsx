import React, { useEffect, useState } from "react";
// import group1 from '../../../assets/icons/Group1.png';
// import group2 from '../../../assets/icons/Group2.png';
// import group3 from '../../../assets/icons/Group3.png';
import PrimaryButton from "../../../Components/Shared/PrimaryButton/PrimaryButton";
import SectionTitle from "../../../Components/Shared/SectionTitle/SectionTitle";
import ModalData from "./ModalData/ModalData";
import "./Services.css";
import SingleServiceCard from "./SingleServiceCard/SingleServiceCard";
const Services = () => {
  const [services, setServices] = useState();
  const [serviceData,setServiceData]= useState(null)
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setServices(data);
      });
  }, []);
  return (
    <div className="py-12">
      <SectionTitle>
        Our Awesome <span className="text-second">Services</span>
      </SectionTitle>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 my-12">
        {services?.map((service) => (
          <SingleServiceCard
            key={service?._id}
            service={service}
            setServiceData={setServiceData}
          ></SingleServiceCard>
        ))}
      </div>
      <ModalData serviceData={serviceData} setServiceData={setServiceData}></ModalData>
      <div className="text-center">
        <PrimaryButton>Explore More</PrimaryButton>
      </div>
    </div>
  );
};

export default Services;
