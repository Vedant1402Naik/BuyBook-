import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function About() {
    return (
        <>
            <Navbar />
            <div className='midsection max-w-screen-2xl container md:px-20 px-4 mx-auto my-20'>
                <div>
                    <p className='text-4xl p-4 my-2 h-12'>About Us</p>
                </div>
                <div className='hero-1 h-22 flex flex-col md:flex-row'>
                    {/* left 1*/}
                    <section className='left flex flex-col justify-center items-start mt-8 w-full md:w-1/2 order-2 md:order-1 text-center md:text-start'>
                        <h4 className='text-xl tracking-wide font-bold mb-4 p-1'>TOYZONE: The True Childhood Companion</h4>
                        <p className='p-4 '>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia voluptatibus alias facere. Perferendis illo, laborum nostrum ducimus voluptatibus voluptates harum cum nemo, quia numquam consequuntur commodi pariatur amet corporis dolorem voluptas obcaecati consectetur fuga similique. Quae, officiis assumenda placeat ut sit dignissimos quia distinctio!
                        </p>
                    </section>

                    {/* right 1*/}
                    <section className='right flex justify-center items-center mt-8 w-full md:w-1/2 md:order-2 order-1'>
                        <img src="../../public/abt-1.jpg"
                            className=' md:h-[280px] rounded-md opacity-80'
                        />
                    </section>
                </div>

                <div className='hero-2 h-22 flex flex-col md:flex-row mt-4'>
                    {/* right 2*/}
                    <section className='right flex justify-center items-center mt-8 w-full md:w-1/2'>
                        <img src="../../public/abt-2.jpg"
                            className='w-full md:w-72 rounded-full opacity-80'
                        />
                    </section>

                    {/* left 2*/}
                    <section className='left flex flex-col justify-center items-start mt-8 w-full md:w-1/2 text-center md:text-start '>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia voluptatibus alias facere. Perferendis illo, laborum nostrum ducimus voluptatibus voluptates harum cum nemo, quia numquam consequuntur commodi pariatur amet corporis dolorem voluptas obcaecati consectetur fuga similique. Quae, officiis assumenda placeat ut sit dignissimos quia distinctio!
                        </p>
                    </section>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default About;
