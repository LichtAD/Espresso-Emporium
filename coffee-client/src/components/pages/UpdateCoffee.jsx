import React from 'react';
import Header from './Header';
import { FaArrowLeftLong } from "react-icons/fa6";
import { NavLink, useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

const UpdateCoffee = () => {

    const coffee = useLoaderData();
    console.log(coffee);

    const { _id, coffee_name, chef_name, supplier, taste, category, details, photo_url } = coffee;

    const navigate = useNavigate();

    const handleUpdateCoffee = (event) => {
        event.preventDefault();
        const form = event.target;
        const coffee_name = form.coffee_name.value;
        const chef_name = form.chef_name.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo_url = form.photo_url.value;

        const updatedCoffee = { coffee_name, chef_name, supplier, taste, category, details, photo_url };
        // console.log(updatedCoffee);

        // ! send data to the server
        fetch(`http://localhost:5000/coffees2/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                // alert('success')
                Swal.fire({
                    title: "Congratulation!",
                    text: "Coffee has been added updated!",
                    icon: "success",
                    confirmButtonText: "Ok"
                }).then((result) => {
                    if (result.isConfirmed) {
                        navigate('/');
                    }
                })
            })
            .catch(error => console.error(error))
            .finally(() => form.reset());
    }

    return (
        <div>
            {/* <Navbar></Navbar> */}
            <Header></Header>

            <div className="bg-[url('/images/more/11.png')] bg-cover bg-center bg-no-repeat">
                <NavLink to="/" className='mx-20 my-2 flex justify-start items-center gap-2 btn font-normal w-fit'><FaArrowLeftLong />Back to Home</NavLink>
                <div className='max-w-7xl mx-auto space-y-4 my-10'>
                    <h1 className='text-3xl text-center font-bold'>Update Existing Coffee Details</h1>
                    <p className='font-railway text-center w-[80%] mx-auto'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>

                    <div className='font-railway'>
                        <form onSubmit={handleUpdateCoffee}>
                            <div className='grid grid-cols-2 gap-4'>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name="coffee_name" defaultValue={coffee_name} placeholder="Enter coffee name" className="input input-bordered focus:outline-dark_brown" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Chef</span>
                                    </label>
                                    <input type="text" name="chef_name" defaultValue={chef_name} placeholder="Enter coffee chef" className="input input-bordered focus:outline-dark_brown" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Supplier</span>
                                    </label>
                                    <input type="text" name="supplier" defaultValue={supplier} placeholder="Enter coffee supplier" className="input input-bordered focus:outline-dark_brown" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Taste</span>
                                    </label>
                                    <input type="number" name="taste" defaultValue={taste} placeholder="Enter coffee taste" className="input input-bordered focus:outline-dark_brown" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Category</span>
                                    </label>
                                    <input type="text" name="category" defaultValue={category} placeholder="Enter coffee category" className="input input-bordered focus:outline-dark_brown" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Details</span>
                                    </label>
                                    <input type="text" name="details" defaultValue={details} placeholder="Enter coffee details" className="input input-bordered focus:outline-dark_brown" required />
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input type="text" name="photo_url" defaultValue={photo_url} placeholder="Enter photo URL" className="input input-bordered focus:outline-dark_brown" required />
                            </div>

                            <div className="form-control mt-8 font-rancho">
                                <button className="btn bg-light_brown border-dark_brown border-2 text-xl font-normal w-full">
                                    Update Coffee Details
                                </button>
                            </div>

                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default UpdateCoffee;