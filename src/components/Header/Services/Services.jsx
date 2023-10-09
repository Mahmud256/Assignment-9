import React from 'react';
import ServicesCard from './ServicesCard';

const Services = ({ allservice }) => {
    console.log(allservice);
    
    return (
        <div>
            <h1 className='text-3xl text-red-700 font-bold text-center pt-12' data-aos="fade-up">Our Services</h1>
            <div className="flex justify-around py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {
                        allservice?.map(service => <ServicesCard key={service.id} service={service}></ServicesCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;