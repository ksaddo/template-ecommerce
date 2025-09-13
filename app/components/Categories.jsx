"use client";
import { useState } from "react";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";

export default function Categories() {
  const categories = [
    { name: "Vintage", img: "/hero2.jpg" },
    { name: "Smart", img: "/hero3.jpg" },
    { name: "Fashion", img: "/hero4.jpg" },
    { name: "Sports", img: "/hero5.jpg" },
  ];

  const [current, setCurrent] = useState(0);

  return (
    <div className="flex flex-col p-[clamp(1rem,4vw,8rem)] bg-[#f8f6f2] bg-opacity-40">
      <h1 className="w-full text-[22px] md:text-[42px] mb-6 md:mb-8 text-left">
        Shop By Categories
      </h1>

      {/* Mobile: Manual slider with dots */}
      <div className="block md:hidden relative w-full aspect-[3/4]">
        <div className="relative w-full h-full overflow-hidden">
          <Image
            key={categories[current].img}
            src={categories[current].img}
            alt={categories[current].name}
            fill
            className="object-cover transition-opacity duration-500 opacity-0 animate-fade-in"
          />
          <div className="absolute inset-0 bg-black/30"></div>
          <button className="group absolute bottom-10 left-1/2 -translate-x-1/2 inline-flex h-10 items-center justify-center bg-white px-4 text-black shadow-md">
            <span className="text-lg">{categories[current].name}</span>
            <div className="w-0 translate-x-[100%] pl-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-0 group-hover:pl-1 group-hover:opacity-100">
              <MdArrowOutward />
            </div>
          </button>
        </div>

        {/* Dots */}
        <div className="absolute bottom-4 w-full flex justify-center gap-2">
          {categories.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 transition-all duration-500 rounded-full ${
                i === current ? "w-6 h-3  bg-black" : "h-3 bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Desktop: Grid */}
      <div className="hidden md:pb-4 md:grid grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        {categories.map((categorie, index) => (
          <div
            key={index}
            className="relative aspect-[3/4] overflow-hidden group">
            <Image
              src={categorie.img}
              alt={categorie.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <button className="group absolute bottom-6 left-1/2 -translate-x-1/2 inline-flex h-10 items-center justify-center bg-white px-4 text-black shadow-md">
              <span className="text-lg">{categorie.name}</span>
              <div className="w-0 translate-x-[100%] pl-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-0 group-hover:pl-1 group-hover:opacity-100">
                <MdArrowOutward />
              </div>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
