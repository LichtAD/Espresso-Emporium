import React from 'react';
import ContactUs from './ContactUs';
import Header from './Header';
import { NavLink, useLoaderData } from 'react-router-dom';
import { FaArrowLeftLong } from "react-icons/fa6";

const CoffeeDetails = () => {

    const coffee = useLoaderData();
    // console.log(coffee);

    const { _id, coffee_name, chef_name, supplier, taste, category, details, photo_url } = coffee;

    return (
        <div className="bg-[url('/images/more/11.png')]">
            <Header></Header>
            <NavLink to="/" className='mx-20 my-2 flex justify-start items-center gap-2 btn btn-ghost font-normal w-fit'><FaArrowLeftLong />Back to Home</NavLink>
            <div className='flex justify-between items-center max-w-md mx-auto my-10 bg-[#F4F3F0]'>

                <div className='my-20 w-[40%]'>
                    <div><img src={photo_url} alt="" /></div>
                </div>

                <div className='w-[60%] space-y-2'>
                    <h1 className='text-4xl'>{coffee_name}</h1>
                    <div className='font-railway space-y-2'>
                        <h2>Chef: {chef_name}</h2>
                        <h3>Supplier: {supplier}</h3>
                        <h4>Taste: {taste}</h4>
                        <h5>Category: {category}</h5>
                        <h6>Details: {details}</h6>
                    </div>
                </div>

            </div>
            <ContactUs></ContactUs>
        </div>
    );
};

export default CoffeeDetails;