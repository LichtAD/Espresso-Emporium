import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Footer';

const Root = () => {
    return (
        <div className='font-rancho'>
            <div className='min-h-screen'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;