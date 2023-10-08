import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch()

    }

    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/services">Services</NavLink></li>
        <li><NavLink to="/footer">Footer</NavLink></li>
        <li><NavLink to="/cart">Cart</NavLink></li>
    </>

    return (
        <div className="container mx-auto">
            <div className='flex justify-between'>
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <div className="flex lg:hidden gap-5">
                    {user ? (
                        <button onClick={handleLogOut} className="btn">Logout</button>
                    ) : (
                        <>
                            <Link to="/login">
                                <button className="btn">Login</button>
                            </Link>
                            <Link to="/register">
                                <button className="btn">Register</button>
                            </Link>
                        </>
                    )}
                </div>
            </div>
            <div className="flex justify-between">
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="lg:flex hidden gap-5">
                    {user ? (
                        <button onClick={handleLogOut} className="btn">Logout</button>
                    ) : (
                        <>
                            <Link to="/login">
                                <button className="btn">Login</button>
                            </Link>
                            <Link to="/register">
                                <button className="btn">Register</button>
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
