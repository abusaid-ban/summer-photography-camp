import { useState } from "react";
import {  FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from "react-router-dom";


const Login = () => {
    const [show,setShow]= useState(false);
    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
    }
    return (
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col md:flex-row-reverse">
                    <div className="text-center md:w-1/2 lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card md:w-1/2 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body mt-4">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={show ? "text" : "password"} name="password" placeholder="password"  className="input input-bordered" />
                                <p className="mt-2 text-xl" onClick={()=>setShow(!show)}><small>
                                    {
                                        show? <span><FaEyeSlash /></span> : <span> <FaEye /></span>
                                    }</small></p>
                               
                            </div>
                            <div className="form-control mt-4">
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
                        <p className="text-center pb-10"><small>New To Imagine Studio?<Link className="text-orange-400" to="/register"> Register</Link> Here</small></p>
                    </div>
                </div>
            </div>

       
    );
};

export default Login;