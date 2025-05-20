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
      className="mySwiper w-full h-[300px] lg:h-[670px]"
    >

      {/* Slider-1 */}
      <SwiperSlide>
        <div className="relative w-full">
          <img src="../../../images/slider-1.webp" alt="slider-1 image" />

          {/* Left-to-right black gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-transparent flex flex-col justify-center items-start text-white px-20">
            <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-4 text-start">Taste the Season with <br /> Every Box!</h2>
            <p className="mb-8 text-lg text-start">Handpicked, seasonal produce delivered fresh to your door.</p>
            <button className="bg-[#F2841D] text-white font-medium px-6 py-3 rounded hover:bg-gray-200 hover:text-black">Get Started</button>
          </div>
        </div>
      </SwiperSlide>

      {/* Slider -2 */}
      <SwiperSlide>
        <div className="relative w-full">
          <img src="../../../images/slider-2.webp" alt="slider-2 image" />

          {/* Left-to-right black gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-transparent flex flex-col justify-center items-start text-white px-20">
            <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-4 text-start">Eat Clean. Live Fresh.</h2>
            <p className="mb-8 text-lg text-start">Freshikart brings you organic fruits & veggies every week.</p>
            <button className="bg-[#F2841D] text-white font-medium px-6 py-3 rounded hover:bg-gray-200 hover:text-black">Subscribe Now</button>
          </div>
        </div>
      </SwiperSlide>

      {/* slider-3 */}
      <SwiperSlide>
        <div className="relative w-full">
          <img src="../../../images/slider-3.jpg" alt="slider-3 image" />

          {/* Left-to-right black gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-transparent flex flex-col justify-center items-start text-white px-20">
            <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-4 text-start">Groceries at Your <br /> Doorstep.</h2>
            <p className="mb-8 text-lg text-start">No queues, no hassle. Just freshness, every time.</p>
            <button className="bg-[#F2841D] text-white font-medium px-6 py-3 rounded hover:bg-gray-200 hover:text-black">Build Your Box</button>
          </div>
        </div>
      </SwiperSlide>

      {/* slider-4 */}
      <SwiperSlide>
        <div className="relative w-full">
          <img src="../../../images/slider-4.jpg" alt="slider-4 image" />

          {/* Left-to-right black gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-transparent flex flex-col justify-center items-start text-white px-20">
            <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-4 text-start">Premium Quality and <br />Pocket-Friendly Price.</h2>
            <p className="mb-8 text-lg text-start">Enjoy farm-fresh ingredients without breaking the bank.</p>
            <button className="bg-[#F2841D] text-white font-medium px-6 py-3 rounded hover:bg-gray-200 hover:text-black">See Plans</button>
          </div>
        </div>
      </SwiperSlide>

      {/* slider-5 */}
      <SwiperSlide>
        <div className="relative w-full">
          <img src="../../../images/slider-5.webp" alt="slider-5 image" />

          {/* Left-to-right black gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-transparent flex flex-col justify-center items-start text-white px-20">
            <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-4 text-start">Fresh Food, Zero Waste.</h2>
            <p className="mb-8 text-lg text-start">Our eco-packaging and smart delivery help the planet.</p>
            <button className="bg-[#F2841D] text-white font-medium px-6 py-3 rounded hover:bg-gray-200 hover:text-black"> Learn More</button>
          </div>
        </div>
      </SwiperSlide>

    </Swiper>
  );
};

export default Banner;