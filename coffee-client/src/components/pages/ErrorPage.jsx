import React from 'react';
import ContactUs from './ContactUs';
import Header from './Header';
import Footer from './Footer';
import { NavLink } from 'react-router-dom';
import { FaArrowLeftLong } from "react-icons/fa6";

const ErrorPage = () => {
    return (
        <div className='font-rancho'>
            <Header></Header>
            <div className='flex justify-center items-center flex-col'>
                <NavLink to="/" className='mx-20 my-2 flex justify-start items-center gap-2 btn btn-ghost font-normal w-fit'><FaArrowLeftLong />Back to Home</NavLink>
                <img src="/images/404/404.gif" alt="" />
            </div>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;