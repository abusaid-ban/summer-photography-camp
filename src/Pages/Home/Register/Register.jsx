import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const { register, handleSubmit,  formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        createUser(data.email,data.password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
        })
    };
    
    return (
        <div>
            <Helmet>
                <title>Imagine Studio | Register</title>
            </Helmet>
            <div className="hero min-h-screen bg-gray-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Please Register!</h1>

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleSubmit(onSubmit)} >
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" {...register("name")} name="name" placeholder="name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                                    {errors.email && <span className="text-red-600">Email is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" {...register("password", { required: true,
                                     minLength:6,
                                     maxLength: 20,
                                        pattern:/(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/
                                         })} name="password" placeholder="password" className="input input-bordered" />
                                    {errors.password?.type === 'required' && <span className="text-red-600">Password is required</span>}
                                    {errors.password?.type === 'minLength' && <span className="text-red-600">Password must be 6 character required</span>}
                                   
                                    {errors.password?.type === 'pattern' && <span className="text-red-600">Password must have one capital letter and one special character required</span>}
                                   

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Confirm Password</span>
                                    </label>
                                    <input type="password" {...register("confirm")} name="confirm" placeholder="Confirm password" className="input input-bordered" />

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text" {...register("photo")} name="photo" placeholder="photo url" className="input input-bordered" />

                                </div>
                                <div className="form-control mt-6">

                                    <input className="btn btn-primary" type="submit" value="Register" />
                                </div>
                            </form>

                            <p className='text-center font bold my-4'>Already Have an Account? <span  >
                                <Link className="text-orange-500" to='/login'>Login </Link> Here</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;