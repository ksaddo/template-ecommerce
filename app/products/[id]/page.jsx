"use client";
import { useParams } from "next/navigation";
import products from "../../components/products";
import Image from "next/image";
import { useState } from "react";
import {
  FiSearch,
  FiUser,
  FiHeart,
  FiShoppingBag,
  FiTruck,
  FiShare2,
  FiX,
} from "react-icons/fi";
import { GoShieldCheck, GoQuestion } from "react-icons/go";
import { MdArrowOutward } from "react-icons/md";

export default function ProductDetailsPage() {
  const { id } = useParams();

  // ✅ Find product by id
  const product = products.flat().find((p) => String(p.id) === id);
  const [count, setCount] = useState(1);

  if (!product) {
    return <div className="p-10 text-center">Product not found</div>;
  }

  return (
    <div className="w-full h-fit p-4">
      <div className="w-full h-[400px] border flex justify-center items-center overflow-hidden">
        <Image
          src={product.img}
          alt={product.name}
          width={200}
          height={200}
          className="transition-transform duration-700 ease-in-out group-hover:scale-105"
          style={{ objectFit: "contain" }}
        />
      </div>

      <div className="space-y-2">
        <h3 className="text-[26px]">{product.name}</h3>
        <div className="w-fit text-[9px] font-bold px-3 py-2 border">
          IN STOCK
        </div>
        <p className="text-[26px]">${product.price}</p>
        <p className="text-gray-600 text-sm">{product.desc}</p>

        <div className="w-full space-y-2">
          <p className="font-bold">Quantity:</p>
          <div className="flex justify-between items-center w-full border border-gray-300">
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

        <div className="flex w-full gap-1">
          <button className="flex-1 text-white bg-black">Add to cart </button>
          <button className="flex justify-center items-center w-11 h-11 border border-gray-300 hover:bg-black hover:text-white text-xl">
            <FiHeart />
          </button>
          <button className="flex justify-center items-center w-11 h-11 border border-gray-300 hover:bg-black hover:text-white text-xl">
            <GoShieldCheck />
          </button>
        </div>
        <button className="flex justify-center items-center w-full h-11 bg-[#814037] gap-2">
          BUY NOW <MdArrowOutward />
        </button>

        <div className="flex flex-wrap space-x-6 font-bold text-sm">
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
      </div>
    </div>
  );
}
