import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            {/* test navbar */}
            <div className='flex justify-center gap-4 my-4'>
                <Link to="/"><button className='btn bg-[#E3B577] text-xl font-normal border-none'>Home</button></Link>
                <Link to="/addcoffee"><button className='btn bg-[#E3B577] text-xl font-normal border-none'>Add Coffee</button></Link>
            </div>
        </div>
    );
};

export default Navbar;