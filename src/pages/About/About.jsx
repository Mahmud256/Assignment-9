import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../../components/Header/Navbar/Navbar';


const About = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='pb-52 px-5 pt-3 h-full'>
                <h2 className="text-center text-2xl font-bold">About us</h2>
                <p className='text-xl'>Our academy is a skill development platform focusing on live learning. We have 30,000+ users on our platform and 4500+ learners who graduated and are still learning in this academy.
                    We provide skill development opportunities to university students, job holders, job seekers, and freelancers who want to learn or develop skills from the best instructors.
                    Develop your skill with the best industry experts through live learning, task-based curriculum, and track your progress through our progress tracking dashboard. Get all the resources easily and get access to one of the richest talentpools.</p>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default About;