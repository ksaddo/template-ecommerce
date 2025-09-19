"use client";
import Image from "next/image";
import CategoryHero from "./CategoryHero";

const categories = [
  { name: "Vintage", img: "/hero2.jpg" },
  { name: "Smart", img: "/hero3.jpg" },
  { name: "Fashion", img: "/hero4.jpg" },
  { name: "Sports", img: "/hero5.jpg" },
  { name: "Vintage", img: "/hero2.jpg" },
  { name: "Smart", img: "/hero3.jpg" },
  { name: "Fashion", img: "/hero4.jpg" },
  { name: "Sports", img: "/hero5.jpg" },
];

export default function NewCategory() {
  return (
    <section className="bg-[#EAECEC]">
      <div className="flex flex-col w-full px-[clamp(1rem,4vw,8rem)] py-[clamp(2rem,6vw,12rem)]">
        <h1 className="text-[22px] md:text-[32px] xl:text-[42px] md:text-center mb-6 md:mb-8 xl:mb-11">
          Shop By Categories
        </h1>

        {/* Wrapper for centering on md+ */}
        <div className="w-full flex md:justify-center">
          <div className="flex gap-4 md:gap-6 xl:gap-10 2xl:gap-12 overflow-x-auto hide-scrollbar">
            {categories.map((cat, index) => (
              <div
                key={index}
                className="flex flex-col items-center shrink-0">
                <button
                  className="relative w-[clamp(85px,8vw,100px)] h-[clamp(85px,8vw,100px)] rounded-full overflow-hidden group shrink-0 shadow-md"
                  aria-label={`Shop ${cat.name}`}>
                  <Image
                    src={cat.img}
                    alt={cat.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    priority
                  />
                </button>
                <span className="mt-2 text-sm">{cat.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <CategoryHero />
    </section>
  );
}
