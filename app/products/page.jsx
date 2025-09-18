"use client";
import { useState } from "react";
import products from "../components/products";
import ProductCard from "../components/ProductCard";
import Link from "next/link";
import { IoFilter } from "react-icons/io5";
import { FiX, FiChevronDown } from "react-icons/fi";

export default function ProductsListingPage() {
  const [selectedVariants, setSelectedVariants] = useState(
    Array(products.length).fill(0)
  );

  const [isFilterOpen, setIsFilterOpen] = useState(false); // ✅ Sidebar
  const [isSortOpen, setIsSortOpen] = useState(false); // ✅ Dropdown
  const [sortSelected, setSortSelected] = useState("Shop by latest");

  const categories = ["Quartz", "Digital", "Luxury", "Sport", "Smart", "Casual"]; // prettier-ignore
  const prices = ["Under $100", "$100 - $500", "$500 - $1000", "Above $1000"]; // prettier-ignore
  const brands = ["Grand Sieko", "Caveman Watches", "Breitling", "Apple", "Others"]; // prettier-ignore
  const options = ["Shop by latest", "Price: Low to High", "Price: High to Low", "Best Sellers","Customer Rating"]; // prettier-ignore

  return (
    <div className="w-full min-h-[800px] md:min-h-[900px] p-[clamp(1rem,4vw,8rem)]">
      <nav className="flex items-center gap-2 text-sm">
        <Link
          href="/"
          className="text-gray-700 font-bold hover:text-black transition-colors ">
          Home
        </Link>

        <span>{`>`}</span>
        <p className="text-gray-500 font-bold">Products</p>
      </nav>

      {/* Header */}
      <div className="mt-4 mb-10">
        <h1 className="text-center text-[22px] md:text-[42px] mb-2">
          Shop now
        </h1>
        <p className="w-fit mx-auto text-sm cursor-pointer">
          Our latest timepieces
        </p>
      </div>

      {/* Top controls */}
      <div className="flex justify-between mb-10">
        {/* Filter Button */}
        <button
          onClick={() => setIsFilterOpen(true)}
          className="border flex justify-center items-center gap-2 py-2 px-3 hover:border-gray-600 border-gray-300">
          <IoFilter /> Filter
        </button>

        {/* Sort Dropdown */}
        <div className="relative inline-block text-left text-sm">
          <button
            onClick={() => setIsSortOpen(!isSortOpen)}
            className="border flex items-center justify-between gap-2 py-2 px-3 border-gray-300 w-44">
            {sortSelected}
            <FiChevronDown
              className={`transition-transform ${
                isSortOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {isSortOpen && (
            <div className="absolute mt-2 w-44 bg-white border border-gray-200 rounded-md shadow-lg z-50">
              <ul className="py-1">
                {options.map((option, idx) => (
                  <li key={idx}>
                    <button
                      onClick={() => {
                        setSortSelected(option);
                        setIsSortOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100">
                      {option}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((group, groupIndex) => (
          <ProductCard
            key={groupIndex}
            group={group}
            selectedIndex={selectedVariants[groupIndex]}
            onSelect={(i) =>
              setSelectedVariants((prev) => {
                const copy = [...prev];
                copy[groupIndex] = i;
                return copy;
              })
            }
          />
        ))}
      </div>

      {/* === Filter Sidebar === */}
      {isFilterOpen && (
        <div
          onClick={() => setIsFilterOpen(false)}
          className="fixed inset-0 bg-black/30 z-40"
        />
      )}

      <div
        className={`fixed top-0 left-0 h-full min-w-[400px] bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isFilterOpen ? "translate-x-0" : "-translate-x-full"
        }`}>
        {/* Close button */}
        <div className="flex justify-between px-6 py-2 bg-gray-100 border-b border-gray-300">
          <div className="flex justify-center items-center gap-2 py-2 px-3">
            <IoFilter className="text-xl" /> Filter
          </div>

          <button
            onClick={() => setIsFilterOpen(false)}
            className="text-2xl"
            aria-label="Close Filter">
            <FiX />
          </button>
        </div>

        {/* Filter Content */}
        <div className="px-6 space-y-6 mt-8">
          {/* Category */}
          <div className="pb-6 border-b border-gray-300">
            <h3 className="font-medium mb-4 text-xl">Product Category</h3>
            <div className="flex flex-col space-y-2">
              {categories.map((category, index) => (
                <label
                  key={index}
                  className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 accent-black"
                  />
                  <span className="text-lg">{category}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Price */}
          <div className="pb-6 border-b border-gray-300">
            <h3 className="font-medium mb-4 text-xl">Price</h3>
            <div className="flex flex-col space-y-2">
              {prices.map((price, index) => (
                <label
                  key={index}
                  className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="price"
                    className="w-4 h-4 accent-black"
                  />
                  <span className="text-lg">{price}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Brand */}
          <div className="pb-6 border-b border-gray-300">
            <h3 className="font-medium mb-4 text-xl">Brand</h3>
            <div className="flex flex-col space-y-2">
              {brands.map((brand, index) => (
                <label
                  key={index}
                  className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 accent-black"
                  />
                  <span className="text-lg">{brand}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
