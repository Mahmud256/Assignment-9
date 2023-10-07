import React, { useContext, useState } from 'react';
import Navbar from '../../components/Header/Navbar/Navbar';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import LoginAuth from './LoginAuth';

const Login = () => {

    const [user, setUser] = useState(null);

    const { logIN } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    console.log("Login", location);

    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        console.log(form.get("password"));

        const email = form.get("email");
        const password = form.get("password");
        console.log(form.get("password"));

        logIN(email, password)
            .then((result) => {
                const user = result.user;
                console.log("loginuser", loginuser);
                console.log("user", user);
                
                const loginuser = result.user;

                console.log(loginuser);
                setUser(loginuser);

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
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="p-6">Provident cupiditate voluptatem et in.<br /> Quaerat fugiat ut assumenda excepturi exercitationem quasi.<br /> In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleLogin}>
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
                                    <button className="btn btn-primary">Login</button>
                                </div>
                            </form>
                           
                            <LoginAuth></LoginAuth>
                            {user && <div><h2>User:{user.displayName}</h2></div>}

                            <p className='text-center'>Don't have an account <Link className='text-blue-700' to="/register">Register</Link></p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;