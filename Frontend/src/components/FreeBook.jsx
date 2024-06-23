import React, { useEffect, useState } from 'react'
import axios from "axios"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cards from './Cards';

function FreeBook() {

    const [book, setBook] = useState([])
    useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4002/book")
        let data = res.data.filter((freeBooks) => freeBooks.price === 0)
        console.log(res.data);
        setBook(data)
      } catch (error) {
        console.log("Eroor : ",error)
      }
    }
    getBook()
  },[])

    
   
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }

    return (
        <>
            <div className='max-w-screen-2xl container md:px-20 px-4 mx-auto '>
                <div>
                    <h1 className='font-bold text-2xl mt-4'>Checkout Free Stuff</h1>
                    <p className='font-lighter mt-2 tracking-tight'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint, asperiores in. Unde veritatis exercitationem eligendi ducimus illum quaerat natus veniam quis perspiciatis.</p>
                </div>


                <div>
                    <Slider {...settings}>
                       {book.map((item)=>(
                        <Cards item={item} key={item.id} />
                       ))}
                    </Slider>
                </div>

            </div>



        </>
    )
}

export default FreeBook