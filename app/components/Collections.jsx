"use client";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";

export default function Collections() {
  return (
    <section className="p-4 md:p-[30px] xl:p-[50px] 2xl:px-[100px] 2xl:py-[60px] grid gap-4 md:gap-8 md:grid-cols-2 md:min-h-[700px] 2xl:min-h-[900px]">
      {/* Left half */}
      <div className="relative h-[300px] md:h-[700px] 2xl:h-[900px] overflow-hidden group">
        <Image
          src="/collection/hero6.jpg"
          alt="Signature Collections"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-1000 ease-in-out group-hover:scale-110 brightness-90"
          priority
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center md:block w-full z-20 md:p-14 space-y-3 md:space-y-4 text-center md:text-left text-white">
          <h3 className="text-xl lg:text-2xl xl:text-3xl">
            Signature Collections
          </h3>
          <p className="text-base xl:text-xl">
            Timeless Classics Modern Elegance
          </p>
          <button className="group flex w-fit gap-1 self-center items-center border-b md:mt-4 cursor-pointer transition-all duration-300 ease-in-out hover:text-black">
            <span className="text-center">Shop Collection</span>
            <MdArrowOutward className="text-sm transform transition-transform duration-500 hover:translate-x-3" />
          </button>
        </div>
      </div>

      {/* Right half */}
      <div className="grid gap-4 md:gap-8">
        {/* Top right card */}
        <div className="relative h-[300px] md:h-auto overflow-hidden group">
          <div className="absolute inset-0 flex flex-col justify-center items-center md:block w-full z-20 md:p-14 space-y-3 md:space-y-4 text-center md:text-left text-white">
            <h3 className="text-xl md:text-xl lg:text-2xl xl:text-3xl">
              Vintage Collections
            </h3>
            <button className="group flex w-fit gap-1 self-center items-center border-b md:mt-4 cursor-pointer transition-all duration-300 ease-in-out hover:text-black">
              <span className="text-center">Shop Collection</span>
              <MdArrowOutward className="text-sm transform transition-transform duration-500 hover:translate-x-3" />
            </button>
          </div>
          <Image
            src="/collection/collection4.jpg"
            alt="Bottom Right 1"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-1000 ease-in-out group-hover:scale-110  brightness-90"
            priority
          />
        </div>

        {/* Bottom right card */}
        <div className="relative h-[300px] md:h-auto overflow-hidden group">
          <div className="absolute inset-0 flex flex-col justify-center items-center md:block w-full z-20 md:p-14 space-y-3 md:space-y-4 text-center md:text-left text-white">
            <h3 className="text-xl md:text-xl lg:text-2xl xl:text-3xl">
              Vintage Collections
            </h3>
            <button className="group flex w-fit gap-1 self-center items-center border-b md:mt-4 cursor-pointer transition-all duration-300 ease-in-out hover:text-black">
              <span className="text-center">Shop Collection</span>
              <MdArrowOutward className="text-sm transform transition-transform duration-500 hover:translate-x-3" />
            </button>
          </div>
          <Image
            src="/collection/collection3.jpg"
            alt="Bottom Right 1"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-1000 ease-in-out group-hover:scale-110 brightness-75"
            priority
          />
        </div>
      </div>
    </section>
  );
}
