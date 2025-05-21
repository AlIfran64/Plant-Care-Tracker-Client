import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';







const Banner = () => {
  return (
    <Swiper
      pagination={{ dynamicBullets: true }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      modules={[Pagination, Autoplay]}
      className="mySwiper w-full h-[300px] lg:h-[800px]"
    >

      {/* Slider-1 */}
      <SwiperSlide>
        <div className="relative w-full">
          <img src="/assets/images/slider-1.jpg" alt="slider-1 image" />

          {/* Left-to-right black gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-transparent flex flex-col justify-center items-start text-white px-20">
            <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-4 text-start">Transform Your Space <br /> with Nature</h2>
            <p className="mb-8 lg:text-2xl text-start">From cozy indoor corners to vibrant outdoor gardens Plantify <br /> brings green to every scene.</p>
            <button className="bg-[#1f7158] text-white font-medium px-6 py-3 rounded hover:bg-gray-200 hover:text-black">Get Started</button>
          </div>
        </div>
      </SwiperSlide>

      {/* Slider -2 */}
      <SwiperSlide>
        <div className="relative w-full">
          <img src="/assets/images/slider-2.jpg" alt="slider-2 image" />

          {/* Left-to-right black gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-transparent flex flex-col justify-center items-start text-white px-20">
            <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-4 text-start">Track & Grow with Ease</h2>
            <p className="mb-8 lg:text-2xl text-start">Easily manage your indoor and outdoor plant collections, add new  <br />entries,  and monitor their growth in one dashboard.</p>
            <button className="bg-[#1f7158] text-white font-medium px-6 py-3 rounded hover:bg-gray-200 hover:text-black">My Plants</button>
          </div>
        </div>
      </SwiperSlide>

      {/* slider-3 */}
      <SwiperSlide>
        <div className="relative w-full">
          <img src="/assets/images/slider-3.jpg" alt="slider-3 image" />

          {/* Left-to-right black gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-transparent flex flex-col justify-center items-start text-white px-20">
            <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-4 text-start">Find Plants That Fit <br /> Your Space</h2>
            <p className="mb-8 lg:text-2xl text-start">Whether it's a sunlit balcony or a shaded corner, explore plants <br /> tailored for your  indoor and outdoor needs.</p>
            <button className="bg-[#1f7158] text-white font-medium px-6 py-3 rounded hover:bg-gray-200 hover:text-black">Explore All Plants</button>
          </div>
        </div>
      </SwiperSlide>

    </Swiper>
  );
};

export default Banner;