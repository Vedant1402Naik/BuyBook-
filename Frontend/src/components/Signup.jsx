import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Signup() {
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const userInfo = {
            username: data.username,
            email: data.email,
            password: data.password,
        };
        await axios
            .post("http://localhost:4002/user/signup", userInfo)
            .then((res) => {
                if (res.data) {
                    localStorage.setItem("Users", JSON.stringify(res.data.user));
                    toast.success('Successfully Signed Up!');
                    navigate(from, { replace: true });
                }
            })
            .catch((err) => {
                if (err.response) {
                    console.log(err);
                    toast.error("Error: " + err.response.data.message);
                }
            });
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="bg-slate-900 innerBox border-2 border-slate-500 p-8 rounded-md">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h3 className="font-bold text-xl text-white">Sign up</h3>

                    {/* Username */}
                    <div className='mt-4 space-y-2'>
                        <label className="text-white">Username</label> <br />
                        <input
                            type="text"
                            placeholder='Enter Your Username'
                            className='w-80 py-2 px-2 rounded-md text-sm font-light outline-none'
                            {...register("username", { required: true })}
                        />
                        <br />
                        {errors.username && <span className='text-sm text-red-700'>This field is required</span>}
                    </div>

                    {/* Email */}
                    <div className='mt-4 space-y-2'>
                        <label className="text-white">Email</label> <br />
                        <input
                            type="email"
                            placeholder='Enter Your Email'
                            className='w-80 py-2 px-2 rounded-md text-sm font-light outline-none'
                            {...register("email", { required: true })}
                        />
                        <br />
                        {errors.email && <span className='text-sm text-red-700'>This field is required</span>}
                    </div>

                    {/* Password */}
                    <div className='mt-4 space-y-2'>
                        <label className="text-white">Password</label> <br />
                        <input
                            type="password"
                            placeholder='Enter Password'
                            className='w-80 py-2 px-2 rounded-md text-sm font-light outline-none'
                            {...register("password", { required: true })}
                        />
                        <br />
                        {errors.password && <span className='text-sm text-red-700'>This field is required</span>}
                    </div>

                    {/* Buttons */}
                    <div className='flex justify-between mt-4'>
                       <a href="/"> <button type="submit"  className="btn bg-blue-500 text-white">Sign Up</button></a>
                        <Link to="/" className="btn bg-red-900 text-white">Close</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Signup;
