import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from 'react-hot-toast';

function Login() {
    const modalRef = useRef(null);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const userInfo = {
            email: data.email,
            password: data.password,
        };
        await axios.post("http://localhost:4002/user/login", userInfo)
            .then((res) => {
                if (res.data) {
                    toast.success('Successfully Logged In!');
                    localStorage.setItem("Users", JSON.stringify(res.data.user));
                    setTimeout(() => {
                        window.location.reload();
                    }, 1000);
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
        <>
            <dialog ref={modalRef} id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h3 className="font-bold text-xl">Login</h3>

                        {/* Email */}
                        <div className='mt-4 space-y-2'>
                            <span>Email</span> <br />
                            <input type="email" placeholder='Enter Your Email'
                                className='w-80 py-2 px-2 rounded-md text-sm font-light outline-none'
                                {...register("email", { required: true })}
                            />
                            <br />
                            {errors.email && <span className='text-sm text-red-700'>This field is required</span>}
                        </div>

                        {/* Password */}
                        <div className='mt-4 space-y-2'>
                            <span>Password</span> <br />
                            <input type="password" placeholder='Enter Password'
                                className='w-80 py-2 px-2 rounded-md text-sm font-light outline-none'
                                {...register("password", { required: true })}
                            />
                            <br />
                            {errors.password && <span className='text-sm text-red-700'>This field is required</span>}
                        </div>

                        {/* Buttons */}
                        <div className='flex justify-between mt-4'>
                            <button type="submit" className="btn w-20 bg-slate-500 text-white">Login</button>
                            <Link to="/signup" className="btn bg-blue-500 text-white">Sign Up</Link>
                            <button type="button" className="btn bg-red-900 text-white" onClick={() => modalRef.current.close()}>Close</button>
                        </div>
                    </form>
                </div>
            </dialog>
        </>
    );
}

export default Login;
