import React from 'react';
import { Outlet } from 'react-router-dom';

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