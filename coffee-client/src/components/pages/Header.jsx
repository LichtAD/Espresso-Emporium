import React from 'react';

const Header = () => {
    return (
        <div>
            {/* header */}
            <div className="bg-[url('/images/more/15.jpg')] h-20 bg-cover bg-center bg-no-repeat text-white flex justify-center items-center gap-2">
                <img className='w-10' src="/images/more/logo1.png" alt="" />
                <h1 className='text-3xl text-white_color'>Espresso Emporium</h1>
            </div>
        </div>
    );
};

export default Header;