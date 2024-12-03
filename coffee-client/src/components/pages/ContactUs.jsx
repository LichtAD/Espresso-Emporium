import React from 'react';
import { MdOutlineFacebook } from "react-icons/md";
import { IoLogoInstagram } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";

const ContactUs = () => {
    return (
        <div className="bg-[url('/images/more/13.jpg')] py-20 grid grid-cols-2 px-32">
            {/* left */}
            <div className='space-y-4'>
                <div><img className='w-20' src="/images/more/logo1.png" alt="" /></div>
                <h1 className='text-4xl font-bold'>Espresso Emoirium</h1>
                <p className='font-railway'>Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
                <div className='flex gap-4'>
                    <span><MdOutlineFacebook size={40} /></span>
                    <span><IoLogoInstagram size={40} /></span>
                    <span><FaTwitter size={40} /></span>
                    <span><FaLinkedin size={40} /></span>
                </div>
                <h4 className='text-3xl'>Get in Touch</h4>
                <div className='flex gap-2 items-center'><IoIosCall size={25} /> <span className='text-xl'>+88 01533 333 333</span></div>
                <div className='flex gap-2 items-center'><IoMdMail size={25} /> <span className='text-xl'>info@gmail.com</span></div>
                <div className='flex gap-2 items-center'><IoLocationSharp size={25} /> <span className='text-xl'>72, Wall street, King Road, Dhaka</span></div>
            </div>

            {/* right */}
            <div className='mt-24'>
                <h1 className='text-4xl font-bold'>Connect with Us</h1>
                <div className='flex flex-col gap-4 mt-4'>
                    <input type="text" placeholder="Name" className="input input-bordered focus:outline-dark_brown w-full max-w-lg" />
                    <input type="text" placeholder="Email" className="input input-bordered focus:outline-dark_brown w-full max-w-lg" />
                    <textarea type="text" placeholder="Message" className="textarea textarea-bordered focus:outline-dark_brown w-full max-w-lg" />
                </div>
                <button className='btn border-2 border-dark_brown bg-transparent rounded-full px-8 mt-4 font-normal text-lg'>Send Message</button>
            </div>
        </div>
    );
};

export default ContactUs;