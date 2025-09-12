"use client";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";

export default function Collections() {
  return (
    <section className="grid gap-4 md:gap-8 section-padding md:grid-cols-2 min-h-[800px] md:min-h-[900px]">
      {/* Left half */}
      <div className="relative flex flex-col justify-center items-center md:block h-[300px] md:h-auto text-white bg-gray-400 overflow-hidden ">
        <Image
          src="/hero6.jpg"
          alt="Signature Collections"
          fill
          className="transition-transform duration-500 ease-in-out hover:scale-105 object-cover"
          priority
        />

        <div className="flex flex-col md:block w-full relative z-10 md:p-14 space-y-3 md:space-y-4 text-center md:text-left">
          <h3 className="text-xl md:text-3xl">Signature Collections</h3>
          <p className="md:text-xl">Timeless Classics Modern Elegance</p>

          <div className="group flex w-fit gap-1 self-center items-center border-b md:mt-4 cursor-pointer transition-all duration-300 ease-in-out hover:text-black">
            <span className="text-center">Shop Collection</span>
            <MdArrowOutward className="text-sm transform transition-transform duration-500 group-hover:translate-x-3" />
          </div>
        </div>
      </div>

      {/* Right half */}
      <div className="grid gap-4 md:gap-8 text-white">
        {/* Top right card */}
        <div
          className="relative flex flex-col justify-center items-center md:block h-[300px] md:h-auto overflow-hidden bg-gray-400"
          style={{
            background:
              "linear-gradient(225deg, hsla(0, 0%, 67%, 1) 0%, hsla(0, 0%, 67%, 1) 47%, hsla(0, 0%, 76%, 1) 100%)",
          }}>
          <Image
            src="/top.png"
            alt="Top Right 1"
            fill
            className="transition-transform duration-500 ease-in-out hover:scale-110 object-contain"
            priority
          />

          <div className="w-full relative z-10 md:p-14 space-y-3 md:space-y-4 text-center md:text-left">
            <h3 className="text-xl md:text-3xl">Luxury Collections</h3>
            <p className="md:text-xl">Timeless Classics Modern Elegance</p>
          </div>
        </div>

        {/* Bottom right card */}
        <div className="relative  flex flex-col justify-center items-center md:block h-[300px] md:h-auto overflow-hidden">
          <Image
            src="/hero1.jpeg"
            alt="Bottom Right 2"
            fill
            className="transition-transform duration-500 ease-in-out hover:scale-110 object-cover"
            priority
          />

          <div className="w-full relative z-10 md:p-14 space-y-3 md:space-y-4 text-center md:text-left">
            <h3 className="text-xl md:text-3xl">Signature Collections</h3>
            <p className="md:text-xl">Timeless Classics Modern Elegance</p>
          </div>
        </div>
      </div>
    </section>
  );
}
