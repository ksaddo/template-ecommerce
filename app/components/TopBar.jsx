"use client";
import { useState } from "react";
import {
  FiSearch,
  FiUser,
  FiHeart,
  FiShoppingBag,
  FiChevronDown,
  FiMenu,
  FiX,
} from "react-icons/fi";

export default function TopBar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ["Home", "Shop", "Products", "Pages", "Blog", "Buy Now"];

  return (
    <header>
      <div className="flex w-full h-16 px-4 md:px-10 items-center md:border-b md:border-neutral-300">
        {/* Hamburger Button (mobile only) */}
        <button
          onClick={() => setIsOpen(true)}
          className="text-2xl md:hidden"
          aria-label="Open Menu">
          <FiMenu />
        </button>

        {/* Sidebar Menu (Mobile) */}
        {/* Overlay */}
        {isOpen && (
          <div
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/40 z-40"
          />
        )}

        <div
          className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          role="navigation">
          {/* Close button */}
          <div className="flex justify-end p-6">
            <button
              onClick={() => setIsOpen(false)}
              className="text-3xl"
              aria-label="Close Menu">
              <FiX />
            </button>
          </div>

          {/* Menu items */}
          <nav className="flex flex-col space-y-6 px-6 text-lg font-medium">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={() => setIsOpen(false)}
                className="text-left hover:text-gray-600 transition">
                {item}
              </button>
            ))}
          </nav>
        </div>

        {/* Currency & Language (desktop only) */}
        <div className="hidden md:flex space-x-4 text-sm">
          <button>USD</button>
          <button>English</button>
        </div>

        {/* Center: Logo */}
        <div className="flex flex-1 justify-center">
          <span className="text-3xl font-bold">template</span>
        </div>

        {/* Right: Icons */}
        <div className="flex gap-4 text-xl">
          <button aria-label="Search">
            <FiSearch />
          </button>
          <button
            className="hidden md:block"
            aria-label="User">
            <FiUser />
          </button>
          <button
            className="hidden md:block"
            aria-label="Wishlist">
            <FiHeart />
          </button>
          <button aria-label="Cart">
            <FiShoppingBag />
          </button>
        </div>
      </div>

      {/* Navigation Menu (desktop only) */}
      <nav
        className="hidden md:block w-full h-16 px-10"
        role="navigation">
        <ul className="flex items-center justify-center space-x-8 p-4">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="relative group cursor-pointer flex items-center gap-2">
              <span>{item}</span>
              <FiChevronDown className="mt-0.5" />

              {/* Hover underline animation */}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-black transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
