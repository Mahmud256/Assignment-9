import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Footer/Footer';

const Root = () => {
    return (
        <div>
            <Outlet></Outlet>
            <div className="max-w-[1300px]  mx-auto">
                
            </div>
        </div>
    );
};

export default Root;