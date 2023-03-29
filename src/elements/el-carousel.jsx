import { define } from 'preactement';
import React, { useEffect, useState } from "react";

// import Swiper JS
import Swiper, { Navigation, Pagination } from 'swiper';
// import Swiper styles
import 'swiper/css';



const Carousel = ({children}) => {
  const [display, setDisplay] = useState(true);
  
  useEffect(() => {
    const swiper = new Swiper('.js_swiper', {
      modules: [Navigation, Pagination],
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
    
    
  }, [])
  
  return (  
    <>
      <div className="h-full">
        
        <div class="swiper js_swiper">
          
          <div class="swiper-wrapper">
            {children}
          </div>
          
          <div class="swiper-pagination"></div>

          <div className="flex">
            <div class="swiper-button-prev bg-slate-700 text-white w-12 h-8 rounded-lg cursor-pointer m-2 flex items-center justify-center">Prev</div>
            <div class="swiper-button-next bg-slate-700 text-white w-12 h-8 rounded-lg cursor-pointer m-2 flex items-center justify-center">Next</div>
          </div>

          
          <div class="swiper-scrollbar"></div>
        </div>
        
      </div>
    </>
  )
};

define('el-carousel', () => Carousel);