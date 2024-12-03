import React, { useState } from 'react';
import Banner from '../main/Banner';
import AllProducts from '../main/AllProducts';
import FollowUs from '../pages/FollowUs';
import { useLoaderData } from 'react-router-dom';
import ContactUs from '../pages/ContactUs';

const Home = () => {

    const loaderData  = useLoaderData();
    // console.log(loaderData);

    const [coffees, setCoffees] = useState(loaderData);

    return (
        <div>
            <Banner></Banner>
            <AllProducts coffees={coffees} setCoffees={setCoffees}></AllProducts>
            <FollowUs></FollowUs>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;