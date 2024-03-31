import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaYoutube } from "react-icons/fa";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../App.css';
import { pesmeLista } from '../Services/pesme';

// import required modules
import { Pagination } from 'swiper/modules';
function Slider() {
    return (
        <div className='w-full w-full shadow-2xl  box-border '>
            <Swiper
                key={pesmeLista.id}
                watchSlidesProgress={true}
                slidesPerView={2}
                className="mySwiper"
            >
                {pesmeLista.map((pesma, id) => {
                    return (

                        <SwiperSlide
                            className='flex flex-col  w-[500px] h-[300px] opacity-50 hover:opacity-70 border-l-2 border-black'>
                            <h1 className='m-2 text-[#dc2626] '>{pesma.id}</h1>
                            <h1>{pesma.name}</h1>
                            <hr className='w-[50%] border-1 border-black m-4 ' />
                            <div className='flex flex-row'>
                                <p className='text-[#dc2626]'>Lyrics : </p>
                                <p className='ml-1'>{pesma.tekst}</p>
                            </div>
                            <a href={pesma.url} target='_blank' rel='noreferrer'>
                                <button className='bg-white hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full'><FaYoutube color='red' size={30} /></button>
                            </a>
                        </SwiperSlide>


                    )
                })}
            </Swiper>
        </div>
    )
}

export default Slider