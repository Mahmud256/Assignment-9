import React from 'react';
import Marquee from "react-fast-marquee";
import Navbar from '../../components/Header/Navbar/Navbar';
import Banner from '../../components/Header/Banner/Banner';
import { Link, useLoaderData } from 'react-router-dom';
import Services from '../../components/Header/Services/Services';
import Footer from '../Footer/Footer';

const Home = () => {

    const allservice = useLoaderData();
    console.log(allservice);
    return (
        <div>
            <Navbar></Navbar>
            <Marquee className='text-red-600 text-2xl font-bold'>
                Welcome To Our Educational and Training Events.....
            </Marquee>
            <Banner></Banner>
            <div>
      </div>
            <div>
               <Services allservice={allservice}></Services>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;