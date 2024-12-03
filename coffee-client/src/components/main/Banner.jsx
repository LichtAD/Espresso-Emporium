import React from 'react';
// import Navbar from '../pages/Navbar';
import Header from '../pages/Header';

const Banner = () => {
    return (
        <div>

            {/* <Navbar></Navbar> */}

            <Header></Header>

            {/* 1st banner */}
            <div className="bg-[url('/images/more/6_mirror.jpg')] h-[35rem] bg-cover bg-center bg-no-repeat text-white grid grid-cols-2">
                <div></div>
                <div className='flex justify-start items-start gap-4 flex-col mt-40 w-[80%] text-white_color'>
                    <h1 className='text-3xl font-normal'>Would you like a Cup of Delicious Coffee?</h1>
                    <p className='text-lg font-normal font-railway'>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                    <button className='btn bg-[#E3B577] text-xl font-normal border-none'>Learn More</button>
                </div>
            </div>

            {/* 2nd banner */}
            <div className='bg-[#ECEAE3] grid grid-cols-4 py-10 px-48'>
                <div className='flex justify-start items-start gap-4 flex-col'>
                    <img src="/images/icons/1.png" alt="" />
                    <h1 className='text-2xl'>Awesome Aroma</h1>
                    <p className='font-railway'>You will definitely be a fan of the design & aroma of your coffee</p>
                </div>
                <div className='flex justify-start items-start gap-4 flex-col'>
                    <img src="/images/icons/2.png" alt="" />
                    <h1 className='text-2xl'>High Quality</h1>
                    <p className='font-railway'>We served the coffee to you maintaining the best quality</p>
                </div>
                <div className='flex justify-start items-start gap-4 flex-col'>
                    <img src="/images/icons/3.png" alt="" />
                    <h1 className='text-2xl'>Pure Grades</h1>
                    <p className='font-railway'>The coffee is made of the green coffee beans which you will love</p>
                </div>
                <div className='flex justify-start items-start gap-4 flex-col'>
                    <img src="/images/icons/4.png" alt="" />
                    <h1 className='text-2xl'>Proper Roasting</h1>
                    <p className='font-railway'>Your coffee is brewed by first roasting the green coffee beans</p>
                </div>
            </div>

        </div>
    );
};

export default Banner;