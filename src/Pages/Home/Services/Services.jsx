import React from 'react';
import group1 from '../../../assets/icons/Group1.png';
import group2 from '../../../assets/icons/Group2.png';
import group3 from '../../../assets/icons/Group3.png';
import PrimaryButton from '../../../Components/Shared/PrimaryButton/PrimaryButton';
import SectionTitle from '../../../Components/Shared/SectionTitle/SectionTitle';
import './Services.css';
const Services = () => {
    return (
        <div className='py-12'>
            <SectionTitle>Our Awesome <span className='text-second'>Services</span></SectionTitle>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 my-12'>
                <div className='p-4 w-12/12 text-center mx-2'>
                    <img src={group1} alt="" className='w-16 mx-auto'/>
                    <h2 className='font-bold pt-1'>Anti Age Face Treatment</h2>
                    <h5 className='text-second font-semibold'>$199</h5>
                    <p className='text-sm'>We craft stunning and amazing web UI, using a well drrafted UX to fit your product.</p>
                </div>
                <div className='p-4 w-12/12 custom-shadow text-center mx-2 bg-white'>
                    <img src={group2} alt="" className='w-16 mx-auto'/>
                    <h2 className='font-bold pt-1'>Hair Color & Styleing</h2>
                    <h5 className='text-second font-semibold'>$199</h5>
                    <p className='text-sm'>Amazing flyers, social media posts and brand representations that would make your brand stand out.</p>
                </div>
                <div className='p-4 w-12/12 text-center mx-2'>
                    <img src={group3} alt="" className='w-16 mx-auto'/>
                    <h2 className='font-bold pt-1'>Skin Care Treatment</h2>
                    <h5 className='text-second font-semibold'>$199</h5>
                    <p className='text-sm'>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
                </div>
            </div>
            <div className='text-center'>
            <PrimaryButton>Explore More</PrimaryButton>

            </div>
        </div>
    );
};

export default Services;