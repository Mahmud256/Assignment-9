import React, { useContext, useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../../components/Header/Navbar/Navbar';
import { AuthContext } from '../../providers/AuthProvider';

const Register = () => {
    
    const { createUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    
    const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);

        
        const name = form.get("name"); 
        const email = form.get("email"); 
        const password = form.get("password"); 
        console.log(form.get("password"));

        
        createUser(email, password)
            .then((result) => {
                const user = result.user;

                navigate(location?.state ? location.state : '/');
            })
            .catch((error) => {
                const errorCode = error.code; 
                const errorMessage = error.message; 
            })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <p className="p-6">Provident cupiditate voluptatem et in.<br /> Quaerat fugiat ut assumenda excepturi exercitationem quasi.<br /> In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleRegister}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="name" name="name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Register</button>
                                </div>
                            </form>
                            <p className='text-center'>Or Register with <Link className='text-blue-700' to="/login"><button className="btn btn-outline w-full">
                                <FaGoogle></FaGoogle>
                                Google
                            </button></Link></p>
                            <p className='text-center'>Already have an account <Link className='text-blue-700' to="/login">Login</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;