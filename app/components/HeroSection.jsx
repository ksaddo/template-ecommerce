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
      title: "The Regal Orbit",
      desc: "Crafted for those who value more than time, each piece tells stories of passion, heritage.",
      short: "Crafted for those who value more than time",
      img: "/hero/newhero1.png",
      bg: "bg-[#F8F3F2]",
    },
    {
      title: "Phantom Chrono",
      desc: "The luxury of perfect design, for those who demand excellence and appreciate the interplay of style.",
      short: "The luxury of perfect design",

      img: "/hero/newhero2.png",
      bg: "bg-[#F2F4F7]",
    },
    {
      title: "Midnight Voyager",
      desc: "Crafted with the highest attention to detail, this watch seamlessly combines innovation with exquisite design",
      short: "Crafted with the highest attention to detail",
      img: "/hero/newhero4.png",
      bg: "bg-[#EAECEC]",
    },
  ];

  return (
    <section className="w-full">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="w-full h-full mx-auto pb-5">
        {slides.map((slide, index) => (
          <SwiperSlide
            key={index}
            className={`w-full h-full ${slide.bg}`}>
            <div className="md:hidden flex flex-col-reverse gap-8 justify-end items-center w-full h-[540px] mt-4">
              {/* Text overlay */}
              <div className="flex flex-col justify-center items-center px-4 z-20">
                <h1 className="text-4xl fade-in-up text-black text-shadow-lg text-shadow-black-200/50">
                  {slide.title}
                </h1>
                <p className="mt-3 lg:mt-6 xl:mt-7 line-clamp-2">
                  {slide.short}
                </p>

                <button className="group flex items-center justify-center gap-2 w-42 h-10 bg-black text-white rounded-sm cursor-pointer transition-all duration-300 ease-in-out mt-4">
                  <span>View Collection</span>
                  <FaChevronRight className="text-sm transition-transform duration-500 group-hover:translate-x-3" />
                </button>
              </div>
              <div className="flex justify-center w-full">
                <Image
                  src={slide.img}
                  alt={slide.title}
                  className=" object-contain"
                  width={300}
                  height={300}
                  priority
                />
              </div>
            </div>

            {/* md version */}
            <div className="hidden md:flex items-center w-full h-[400px] lg:h-[430px] xl:h-[770px] 2xl:h-[780px] 2xl:gap-20 px-[clamp(3rem,8vw,10rem)]">
              <div className="w-1/2 2xl:pl-30 flex flex-col justify-center items-start">
                <h1 className="text-[40px] lg:text-5xl xl:text-7xl text-black">
                  {slide.title}
                </h1>
                <p className="2xl:w-[580px] xl:text-xl mt-2 lg:mt-6 xl:mt-7 line-clamp-2">
                  {slide.desc}
                </p>
                <button className="flex items-center justify-center gap-2 mt-6 lg:mt-8 xl:mt-10 w-42 h-10 text-lg bg-black text-white rounded">
                  View Collection
                  <FaChevronRight className="text-sm transition-transform duration-500 group-hover:translate-x-3" />
                </button>
              </div>
              <div className="w-1/2  h-full flex lg:pl-0 lg:justify-center 2xl:justify-start items-center ">
                <Image
                  src={slide.img}
                  alt={slide.title}
                  width={600} // just for Next.js optimization, not the actual display size
                  height={600}
                  className="object-contain w-[300px] h-[300px] lg:w-[350px] lg:h-[350px] xl:w-[520px] xl:h-[520px] 2xl:w-[600px] 2xl:h-[600px]"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
