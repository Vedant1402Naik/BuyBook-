import React from 'react';

function Banner() {
    return (
        <>
            <div className='max-w-screen-2xl container md:px-20 px-4 mx-auto flex flex-col md:flex-row my-10'>
                <div className='order-2 md:order-1 w-full md:w-1/2 mt-12 md:mt-32'>
                    <div className='space-y-12'>
                        <h1 className='font-bold text-4xl'>
                            Heya, Welcome let's learn something <span className='text-pink-500'>New Everyday!!!</span>
                        </h1>
                        <p className='text-xl tracking-tight'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque earum maiores praesentium rerum numquam! Temporibus et reprehenderit aut odit omnis. Illum labore perferendis repellat?
                        </p>
                        <label className="input input-bordered flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
                                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                            </svg>
                            <input type="text" className="grow" placeholder="Email" />
                        </label>
                    </div>
                    <button className="btn btn-secondary mt-6 text-white">Subscribe</button>
                </div>
                <div className='order-1 md:order-2 w-full md:w-1/2 flex justify-center items-center mt-12 md:mt-0'>
                    <img src="../../public/banner3.jpg" className='rounded-md h-[240px] md:h-[360px] opacity-85' alt="Banner" />
                </div>
            </div>
        </>
    );
}

export default Banner;
