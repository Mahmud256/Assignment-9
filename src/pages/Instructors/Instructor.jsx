import React from 'react';
import InstructorsCard from './InstructorsCard';
import { useEffect } from 'react';
import { useState } from 'react';
;

const Instructor = ({}) => {
    const [instructor, setAllinstructor] = useState([]);

    useEffect(() => {
        fetch('instructors.json')
            .then(res => res.json())
            .then(data => setAllinstructor(data))
    }, [])
    return (
        <div>
            <h1 className='text-3xl text-red-700 font-bold text-center pt-12' data-aos="fade-up">Our Professional Instructors</h1>
            <div className="flex justify-around py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {
                        instructor?.map(sir => <InstructorsCard key={sir.id} sir={sir}></InstructorsCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Instructor;