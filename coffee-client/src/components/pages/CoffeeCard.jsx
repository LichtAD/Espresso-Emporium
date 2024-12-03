import React from 'react';
import { FaRegEye } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {

    // console.log(coffee);

    const { _id, coffee_name, chef_name, supplier, taste, category, details, photo_url } = coffee;

    // ! delete
    const handleDeleteCoffee = (id) => {

        // console.log(id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                // Swal.fire({
                //     title: "Deleted!",
                //     text: "Your file has been deleted.",
                //     icon: "success"
                // });

                fetch(`http://localhost:5000/coffees2/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your coffee has been deleted.',
                                'success'
                            )
                            const remaining = coffees.filter(cof => cof._id !== id);
                            // console.log(remaining);
                            setCoffees(remaining);
                        }
                    })
            }
        });
    }

    return (
        <div className='py-8 px-4 flex justify-center items-center gap-2 bg-[#F5F4F1] rounded-2xl'>
            <div>
                <img className='h-32 w-[100%]' src={photo_url} alt="" />
            </div>
            <div className='w-[50%] font-railway flex justify-start flex-col items-start gap-2'>
                <h1>Name: {coffee_name}</h1>
                <h2>Chef: {chef_name}</h2>
                <h3>Taste: {taste}</h3>
            </div>
            <div className='w-[20%] flex flex-col justify-center items-center gap-4'>
                <NavLink to={`/coffeeDetails/${_id}`} className='bg-[#D2B48C] rounded-lg btn'><FaRegEye /></NavLink>
                <NavLink to={`/updateCoffee/${_id}`} className='bg-dark_brown text-white_color rounded-lg btn'><FaPen /></NavLink>
                <div onClick={() => { handleDeleteCoffee(_id) }} className='bg-[#EA4744] text-white_color rounded-lg btn'><MdDelete /></div>
            </div>
        </div>
    );
};

export default CoffeeCard;