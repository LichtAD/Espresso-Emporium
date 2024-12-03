import React from 'react';
import { NavLink } from 'react-router-dom';
import CoffeeCard from '../pages/CoffeeCard';

const AllProducts = ({ coffees, setCoffees }) => {

    return (
        // bg-[url('/images/more/7.jpg')] bg-cover bg-center bg-no-repeat
        <div className="my-20 bg-[url('/images/more/1.png')] object-cover bg-center bg-no-repeat">
            {/* </div><div className="flex justify-center items-center flex-col gap-2 absolute z-10 top-0 left-1/2 transform -translate-x-1/2 max-w-[50%] mx-auto text-center"> */}
            <div className='flex justify-center items-center flex-col gap-2'>
                <h2 className='font-railway'>--- Sip & Savor ---</h2>
                <h1 className='text-3xl text-dark_brown font-semibold'>Our Popular Products</h1>
                <div>
                    <NavLink to="/addcoffee" className='btn bg-light_brown text-xl font-normal border-dark_brown flex justify-center items-center gap-2'>
                        <p className='text-white_color'>Add Coffee</p>
                        <img src="/images/icons/1.png" className='w-6' alt="" />
                    </NavLink>
                </div>

                <div className='grid grid-cols-2 gap-4 my-10'>
                    {
                        coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees}></CoffeeCard>)
                    }
                </div>

            </div>

            {/* <div className='flex justify-between relative'>
                <div>
                    <img src="/images/more/4.png" alt="" />
                </div>
                <div>
                    <img src="/images/more/5.png" alt="" />
                </div>
            </div> */}
        </div>
    );
};

export default AllProducts;