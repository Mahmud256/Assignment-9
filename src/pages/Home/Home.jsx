import React from 'react';
import Marquee from "react-fast-marquee";
import Navbar from '../../components/Header/Navbar/Navbar';
import Banner from '../../components/Header/Banner/Banner';
import { useLoaderData } from 'react-router-dom';
import Services from '../../components/Header/Services/Services';
import Footer from '../Footer/Footer';
import Instructor from '../Instructors/Instructor';
import Subscribe from '../Subscribe/Subscribe';



const Home = () => {

    const allservice = useLoaderData();
    console.log("Alls",allservice);
    return (
        <div>
            <Navbar></Navbar>
            <Marquee className='text-red-600 text-2xl font-bold'>
                Welcome To Our Educational and Training Events Website.....
            </Marquee>
            <Banner></Banner>
            <div>
      </div>
            <div className='Allserv'>
               <Services allservice={allservice}></Services>
            </div>

           <Instructor></Instructor>
           <Subscribe></Subscribe>
            <Footer></Footer>
        </div>
    );
};

export default Home;