"use client";
import { useParams } from "next/navigation";
import products from "../../components/products";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FiCheckCircle, FiUser, FiHeart, FiShoppingBag, FiShare2, FiX, FiTruck} from "react-icons/fi"; // prettier-ignore

import { GoShieldCheck, GoQuestion } from "react-icons/go";
import { MdArrowOutward } from "react-icons/md";
import { GiReturnArrow } from "react-icons/gi";
import ProductTabs from "@/app/components/ProductTabs";
import Link from "next/link";

export default function ProductPage() {
  const { id } = useParams(); // ✅ get the id from the URL

  // Find the group that contains this product
  const group = products.find((g) => g.some((p) => String(p.id) === id));

  // Compute the initial index
  const initialIndex = group ? group.findIndex((p) => String(p.id) === id) : 0;

  const [selectedIndex, setSelectedIndex] = useState(initialIndex);
  const [count, setCount] = useState(1); // ✅ missing in your code

  // Keep selectedIndex in sync if `id` changes
  useEffect(() => {
    if (group) {
      const index = group.findIndex((p) => String(p.id) === id);
      setSelectedIndex(index);
    }
  }, [id, group]);

  if (!group) {
    return <div className="p-10 text-center">Product not found</div>;
  }

  const product = group[selectedIndex];

  return (
    <div className="w-full h-fit p-[clamp(1rem,4vw,8rem)] mb-10">
      <nav className="flex items-center gap-2 text-sm">
        <Link
          href="/"
          className="text-gray-700 font-bold hover:text-black transition-colors ">
          Home
        </Link>
        <span>{`>`}</span>
        <Link
          href="/products"
          className="text-gray-700 font-bold hover:text-black transition-colors">
          Products
        </Link>
        <span>{`>`}</span>
        <p className="text-gray-500 font-bold">{product.name}</p>
      </nav>
      <div className="flex flex-col lg:flex lg:flex-row w-full h-fit">
        {/* Left content */}
        <div className="w-full lg:w-1/2">
          <div className="relative w-full h-[350px] md:h-[400px] xl:h-[500px] 2xl:h-[600px] flex justify-center items-center overflow-hidden my-14">
            <Image
              src={product.img}
              alt={product.name}
              fill
              className="transition-transform duration-700 ease-in-out group-hover:scale-105"
              style={{ objectFit: "contain" }}
            />
          </div>
          {/* Thumbnail selector */}
          <div className="w-full h-[130px] items-center flex gap-5 overflow-x-auto hide-scrollbar">
            {group.map((item, i) => (
              <button
                key={item.id}
                onClick={() => setSelectedIndex(i)}
                className={`relative w-[80px] h-full border overflow-hidden p-1 ${
                  i === selectedIndex
                    ? "border-2 border-black"
                    : "border border-gray-200"
                }`}>
                <Image
                  src={item.img}
                  alt={item.name}
                  width={60}
                  height={80}
                  className="object-contain"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Right content */}
        <div className="flex flex-col lg:w-1/2 gap-2 md:gap-3 mt-4">
          <p className="text-sm">
            Brand:{" "}
            <span className="text-[#814037] font-bold">{product.brand}</span>
          </p>
          <h3 className="text-[26px] md:text-[30px]">{product.name}</h3>
          <div className="w-fit text-[9px] font-bold px-3 py-2 border">
            IN STOCK
          </div>
          <p className="text-[26px] md:text-[30px]">${product.price}</p>
          <p className="text-gray-600 text-sm">{product.desc}</p>

          {/* Group Selector */}
          <div className="flex gap-3 my-3">
            {["black", "#C8AD7F"].map((color, i) => (
              <button
                key={i}
                onClick={() => setSelectedIndex(i)}
                className={`w-10 h-10 flex items-center justify-center rounded-full border ${
                  i === selectedIndex ? "border-black" : "border-white"
                }`}>
                <span
                  className="w-7 h-7 rounded-full"
                  style={{ backgroundColor: color }}
                />
              </button>
            ))}
          </div>

          {/* Quantity selector */}
          <div className="w-full space-y-2">
            <p className="font-bold">Quantity:</p>
            <div className="flex justify-between items-center w-full border border-gray-200">
              <button
                className="w-10 h-10 text-3xl bg-gray-200"
                onClick={() => setCount((c) => Math.max(1, c - 1))}>
                -
              </button>

              <p className="text-lg">{count}</p>

              <button
                className="w-10 h-10 text-3xl bg-gray-200"
                onClick={() => setCount((c) => c + 1)}>
                +
              </button>
            </div>
          </div>

          {/* Buy now section */}
          <div className="flex w-full gap-1">
            <button
              className="flex-1 text-white bg-black"
              aria-label="Add to cart">
              Add to cart
            </button>
            <button className="flex justify-center items-center w-[46px] h-[46px] border border-gray-200 hover:bg-black hover:text-white text-xl">
              <FiHeart />
            </button>
            <button className="flex justify-center items-center w-[46px] h-[46px] border border-gray-200 hover:bg-black hover:text-white text-xl">
              <GoShieldCheck />
            </button>
          </div>
          <button className="flex justify-center items-center w-full h-[46px] bg-[#814037] gap-2 text-white">
            BUY NOW <MdArrowOutward className="text-xl" />
          </button>

          {/* Trust section */}
          <div className="flex flex-wrap space-x-6 font-bold text-sm my-6">
            <button className="flex gap-2 justify-center items-center hover:text-[#814037] ">
              <GoQuestion className="text-xl" /> Ask a question
            </button>
            <button className="flex gap-2 justify-center items-center hover:text-[#814037] font-bold">
              <FiTruck className="text-xl" /> Delivery & Return
            </button>
            <button className="flex gap-2 justify-center items-center hover:text-[#814037] font-bold">
              <FiShare2 className="text-xl" /> Share
            </button>
          </div>

          <div className="flex flex-col lg:flex-row items-center w-full gap-4">
            <div className="flex flex-col items-center justify-center w-full md:w-[390px] min-h-[160px] text-[14px] px-10 gap-6 text-center border border-gray-200">
              <FiCheckCircle className="text-4xl mx-auto" />
              <p>
                1-year limited warranty. Covers manufacturing defects, free
                replacement
              </p>
            </div>
            <div className="flex flex-col items-center justify-center w-full md:w-[390px] min-h-[160px] text-[14px] px-10 gap-6 text-center border border-gray-200">
              <GiReturnArrow className="text-4xl mx-auto" />
              <p>
                30-day return policy. Enjoy hassle-free returns or exchanges
                with full support
              </p>
            </div>
          </div>

          <div className="flex gap-2 items-center hover:text-[#814037] text-sm font-bold mt-6">
            <GoShieldCheck className="text-xl font-extrabold" /> Protected
            Payment System
          </div>
          <div className="relative flex items-center  w-full h-10 gap-4">
            <Image
              src="/payments.png"
              alt="Payment cards"
              width={300}
              height={300}
              className="object-contain"
            />
          </div>
        </div>
      </div>
      <ProductTabs />
    </div>
  );
}
