import React from 'react'

function Cards({ item }) {
    return (
        <div className='my-3 mt-4'>
            <div className="card w-96 bg-base-100 shadow-xl hover:scale-95 duration-100">
                <figure className="h-64 w-full overflow-hidden">
                    <img src={item.image} alt="Item" className="h-full w-full object-cover" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{item.name}</h2>
                    <p>{item.title}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary text-white">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards
