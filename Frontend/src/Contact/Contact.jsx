import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Contact() {
	return (
		<>
			<Navbar />
			<div className='max-w-screen-2xl container md:px-20 px-4 mx-auto flex flex-col md:flex-row my-20'>
				<div className="contact bg-base-900 flex flex-col md:flex-row">
					<div className="leftContainer w-full md:w-1/2 p-4">
						<div className="flex-1">
							<a className="btn btn-ghost text-4xl mt-4">Write Us</a>
							<div className="btline w-full h-[1px] bg-white mt-2"></div>
							<p className="m-2">Jot us a note and we’ll get back to you as quickly as possible.</p>
							<div>
								<label className="text-xl">Name</label><br />
								<input type="text" placeholder="Enter Your Name" className="input input-bordered w-full max-w-xs mb-4 mt-2" />
								<br />
								<label className="text-xl mb-2">Email</label><br />
								<input type="email" placeholder="Enter Your Email" className="input input-bordered w-full max-w-xs mb-4 mt-2" />
								<br />
								<label className="form-control">
									<div className="label">
										<span className="label-text text-xl mb-2">Message</span>
									</div>
									<textarea className="textarea textarea-bordered h-24" placeholder="Enter Your Thoughts"></textarea>
								</label>
							</div>
						</div>
					</div>
					<div className='rightContainer flex justify-center items-center py-16 px-12 w-full md:w-1/2'>
						<div>
							<h2 className='text-2xl'>BuyZone</h2>
							<hr className='w-full md:w-96 mt-2' />
							<div>
								{/* location */}
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 mt-8 mb-2">
									<path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
									<path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
								</svg>
								<p className='text-slate-400'>Z6, Rajouri Garden, New Delhi-110027</p>

								{/* message */}
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 mt-8 mb-2">
									<path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
								</svg>
								<p className='text-slate-400'>support@buyZone</p>

								{/* phone */}
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 mt-8 mb-2">
									<path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
								</svg>
								<p className='text-slate-400'>+ 999110027</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}

export default Contact;
