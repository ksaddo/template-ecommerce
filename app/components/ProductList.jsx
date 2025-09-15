"use client";
import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "swiper/css";
import "swiper/css/navigation";

import products from "./products"; // grouped array
import ProductCard from "./ProductCard";

export default function ProductsList() {
  const [selected, setSelected] = useState(Array(products.length).fill(0));
  const swiperRef = useRef(null);

  return (
    <div className="w-full min-h-[800px] md:min-h-[900px] section-padding">
      {/* Header */}
      <div>
        <h1 className="text-center text-[22px] md:text-[42px] mb-2">
          Trending now
        </h1>
        <p className="w-fit mx-auto text-sm cursor-pointer border-b mb-30">
          VIEW ALL
        </p>
      </div>

      {/* Swiper with custom arrows */}
      <div className="relative flex items-center">
        {/* Left Arrow */}
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="hidden md:block z-10 absolute left-1 md:left-6 p-3 rounded-full bg-white text-black shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:bg-gray-300 transition">
          <FiChevronLeft size={22} />
        </button>

        <Swiper
          modules={[Navigation]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          spaceBetween={24}
          slidesPerView={2} // ✅ 2 by default (mobile)
          breakpoints={{
            640: { slidesPerView: 2 }, // small screens → 2
            1024: { slidesPerView: 3 }, // medium → 3
            1280: { slidesPerView: 4 }, // large → 4
          }}
          className="w-full px-12" // ✅ padding so arrows don’t overlap content
        >
          {products.map((group, groupIndex) => (
            <SwiperSlide key={groupIndex}>
              <ProductCard
                group={group}
                selectedIndex={selected[groupIndex]}
                onSelect={(i) =>
                  setSelected((prev) => {
                    const copy = [...prev];
                    copy[groupIndex] = i;
                    return copy;
                  })
                }
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Right Arrow */}
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="hidden md:block z-10 absolute right-1 md:right-6 p-3 rounded-full bg-white text-black shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:bg-gray-300 transition">
          <FiChevronRight size={22} />
        </button>
      </div>
    </div>
  );
}
