import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import { Link } from 'react-router-dom'
import axios from "axios"

function Genre() {

  const [book, setBook] = useState([])
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4002/book")
        console.log(res.data);
        setBook(res.data)
      } catch (error) {
        console.log("Eroor : ",error)
      }
    }
    getBook()
  },[])


  return (
    <>
      <div className='max-w-screen-2xl container md:px-20 px-4 mx-auto'>
        <div className='mt-28 items-center text-center justify-center'>

          <h1 className='md:text-4xl text-2xl '>We're delighted to have you <span className='text-pink-500'> Here! :) </span></h1>

          <p className='mt-12'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, laboriosam libero. Maiores temporibus voluptatem nisi, atque culpa illum ullam natus hic nemo vel ipsa, cum esse quisquam beatae facere! Doloremque, eaque perferendis laudantium quibusdam fuga unde sequi? Repellat amet sint incidunt adipisci dolor ad doloribus.</p>

          <Link to="/" >
            <button className='bg-pink-500 text-white px-4 py-2 rounded-md mt-6 hover:bg-pink-700 duration-200'>Back</button>
          </Link>


        </div>

        <div className='mt-12 grid grid-col-1 md:grid-cols-3'>
          {
            book.map((item) => (
              <Cards key={item.id} item={item} />
            )
            )
          }
        </div>
      </div>
    </>
  )
}

export default Genre