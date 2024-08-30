'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';


// Import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

const App: React.FC = () => {
  // Array of image names to be displayed in the swiper
  const imageNames = ['nay1', 'nay2', 'nay3', 'nay4', 'nay5', 'nay6', 'nay7', 'nay8'];

  return (
    <div className="swiper-container">
      <h1 className='Achieve'>Achievments</h1>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true, // Makes the pagination dots clickable
        }}
        navigation={true} // Enable navigation buttons
        autoplay={{
          delay: 1000, // Delay between slides in milliseconds (e.g., 3000ms = 3 seconds)
          disableOnInteraction: false, // Auto-scroll will not stop after user interaction (clicking/swiping)
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Navigation, Autoplay]} // Include the Autoplay module
        className="mySwiper"
      >
        {imageNames.map((name, index) => (
          <SwiperSlide key={index}>
            <img src={`/${name}.jpeg`} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default App;
