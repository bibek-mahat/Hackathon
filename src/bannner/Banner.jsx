import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import slide1 from "/img1.png";
import slide2 from "/img2.jpg";
import slide3 from "/img3.jpg";

const slides = [
  {
    image: slide1,
    title: "Smart Governance Tools",
    description:
      "Empowering citizens through smart digital interfaces and interactive platforms.",
    buttonText: "Learn More",
  },
  {
    image: slide3,
    title: "New Digital Initiatives for Citizen Engagement",
    description:
      "Discover how our new online platforms are making government services more accessible and transparent than ever before. Participate in policy discussions and provide feedback directly.",
    buttonText: "Explore Initiatives",
  },
  {
    image: slide2,
    title: "Smart Governance Tools",
    description:
      "Empowering citizens through smart digital interfaces and interactive platforms.",
    buttonText: "Learn More",
  },
];

const Banner = () => {
  return (
    <div className="relative w-full h-[70vh] mb-7">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        loop={true}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-full bg-cover bg-center relative"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="text-center px-4 max-w-2xl text-white">
                  <h1 className="text-2xl md:text-4xl font-bold mb-3">
                    {slide.title}
                  </h1>
                  <p className="mb-4 text-base md:text-lg">
                    {slide.description}
                  </p>
                  <button className="px-5 py-2 bg-white text-black rounded hover:bg-gray-200 transition">
                    {slide.buttonText}
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
