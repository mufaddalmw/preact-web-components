import { define } from 'preactement';
import React, { useEffect, useState } from "react";



const CarouselSlides = ({children}) => {
  
  
  return (  
    <>
      <div className="text-center">
        {children}
      </div>
    </>
  )
};

define('el-carousel-slides', () => CarouselSlides);