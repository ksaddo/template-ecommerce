"use client";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export default function Categories() {
  const categories = [
    { name: "Vintage", img: "/hero2.jpg" },
    { name: "Smart", img: "/hero3.jpg" },
    { name: "Fashion", img: "/hero4.jpg" },
    { name: "Sports", img: "/hero5.jpg" },
  ];

  return (
    <div className="flex flex-col p-[clamp(1rem,4vw,8rem)] bg-[#f8f6f2] bg-opacity-40">
      <h1 className="w-full text-[22px] md:text-[42px] mb-6 md:mb-8 text-left">
        Shop By Categories
      </h1>

      {/* Single Swiper for all screen sizes */}
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={16}
        breakpoints={{
          320: { slidesPerView: 1.2 }, // small screens → 1 full + part of next
          640: { slidesPerView: 2 }, // tablets
          1024: { slidesPerView: 3 }, // desktops
          1280: { slidesPerView: 4 }, // large desktops → all fit
        }}
        className="w-full">
        {categories.map((cat, i) => (
          <SwiperSlide key={i}>
            <div className="relative w-[270px] h-[380px] overflow-hidden group">
              <Image
                src={cat.img}
                alt={cat.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <button className="group absolute bottom-6 left-1/2 -translate-x-1/2 inline-flex h-10 items-center justify-center bg-white px-4 text-black shadow-md">
                <span className="text-lg">{cat.name}</span>
                <div className="w-0 translate-x-[100%] pl-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-0 group-hover:pl-1 group-hover:opacity-100">
                  <MdArrowOutward />
                </div>
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
