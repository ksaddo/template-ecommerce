"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function TestSwiper() {
  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={20}
      slidesPerView={1}
      pagination={{ clickable: true }}
      className="w-full max-w-lg h-64">
      <SwiperSlide className="bg-red-400 flex items-center justify-center text-white text-2xl">
        Slide 1
      </SwiperSlide>
      <SwiperSlide className="bg-blue-400 flex items-center justify-center text-white text-2xl">
        Slide 2
      </SwiperSlide>
      <SwiperSlide className="bg-green-400 flex items-center justify-center text-white text-2xl">
        Slide 3
      </SwiperSlide>
    </Swiper>
  );
}
