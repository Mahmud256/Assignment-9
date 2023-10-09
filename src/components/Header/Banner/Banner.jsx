import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="relative h-[22vh] md:h-[59vh] lg:h-[89vh] bg-center bg-no-repeat">
                <div className="absolute bg-cover inset-0 bg-[url('./assets/banner9.png')] bg-no-repeat"></div>
                <div className='relative flex justify-center items-center flex-col h-full'>
                </div>
            </div>
        </div>
    );
};

export default Banner;