"use client";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function HeroSection() {
  const slides = [
    {
      title: "More than keeping time",
      desc: "Crafted for those who value more than time, each piece tells a story of passion, heritage, and the pursuit of perfection.",
      img: "/hero/newhero1.png",
      bg: "bg-[#F8F3F2]",
    },
    {
      title: "Precision in Every Detail",
      desc: "Where precision meets sophistication, blending cutting-edge craftsmanship with refined artistry for those who demand excellence.",
      img: "/hero/newhero2.png",
      bg: "bg-[#E4F1E7]",
    },
    {
      title: "Redefining Timeless Style",
      desc: "Experience the luxury of perfect design, where innovation and tradition unite to redefine what it means to wear time.",
      img: "/hero/newhero5.png",
      bg: "bg-[#EAECEC]",
    },
  ];

  return (
    <section className="w-full h-[570px] md:h-[830px] relative">
      <Swiper
        modules={[Pagination, Autoplay]} // ✅ include Autoplay
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000, // 5 seconds per slide
          disableOnInteraction: false, // keeps autoplay running even after user swipes
        }}
        loop={true} // ✅ keeps looping
        className="w-full h-full mx-auto">
        {slides.map((slide, index) => (
          <SwiperSlide
            key={index}
            className={`relative w-full h-full px-[clamp(1rem,4vw,8rem)] ${slide.bg}`}>
            <div className="flex flex-col-reverse justify-end gap-20 md:gap-0 items-center md:flex md:flex-row md:justify-center md:items-center w-full h-full">
              {/* Text Column */}
              <div className="flex flex-col w-full justify-center items-center md:items-start max-w-xl gap-4">
                <h1 className="text-3xl md:text-7xl leading-[1.2] fade-in-up">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl line-clamp-1 sm:line-clamp-2 md:line-clamp-3 lg:line-clamp-none">
                  {slide.desc}
                </p>

                <div className="fade-in-up md:mt-10">
                  <div className="group flex justify-center items-center gap-1 w-46 h-10 md:w-52 md:h-14 md:text-lg bg-black text-white cursor-pointer transition-all duration-300 ease-in-out">
                    <span>View Collection</span>
                    <FaChevronRight className="text-sm transform transition-transform duration-500 group-hover:translate-x-3" />
                  </div>
                </div>
              </div>

              <div className="relative w-[250px] sm:w-[300px] md:w-[400px] lg:w-[500px] h-[300px]">
                <Image
                  src={slide.img}
                  alt={slide.title}
                  fill
                  className="object-contain border"
                  priority
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
