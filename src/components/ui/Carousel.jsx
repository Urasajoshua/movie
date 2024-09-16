"use client"
import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import ImageSlider from './ImageSlider';

const Carousel = () => {
  return (
<div className=''>
<Swiper
      
      modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{delay: 3000}}
      pagination
    
    >
      <SwiperSlide>
        <ImageSlider title='' image={'/3.jpg'} message="Discover the latest movies and series trending around the world. Our app brings you the best movies and shows to keep you entertained."/>
      </SwiperSlide>
      <SwiperSlide>
        <ImageSlider image={'/4.jpg'} message={'Discover the latest movies and series trending around the world. Our app brings you the best movies and shows to keep you entertained.'} description=''/>
      </SwiperSlide>

      <SwiperSlide>
        <ImageSlider message={'Discover the latest movies and series trending around the world. Our app brings you the best movies and shows to keep you entertained.'}image={'/6.jpg'} />
      </SwiperSlide>
     
    
    </Swiper>
</div>
  );
};

export default Carousel