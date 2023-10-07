import React from 'react';
import Marquee from "react-fast-marquee";
import Navbar from '../../components/Header/Navbar/Navbar';
import Banner from '../../components/Header/Banner/Banner';
import { useLoaderData } from 'react-router-dom';
import Products from '../../components/Header/Product/Products';

const Home = () => {
    const allproducts = useLoaderData();
    console.log(allproducts);
    return (
        <div>
            <Navbar></Navbar>
            <Marquee className='text-red-600 text-2xl font-bold'>
                Welcome To Our Educational and Training Events.....
            </Marquee>
            <Banner></Banner>
            <div>
               <Products allproducts={allproducts}></Products>
            </div>
        </div>
    );
};

export default Home;