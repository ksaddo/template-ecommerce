"use client";
import {
  FiHome,
  FiSearch,
  FiUser,
  FiHeart,
  FiShoppingBag,
} from "react-icons/fi";
import { AiOutlineProduct } from "react-icons/ai";

export default function MobileBottomNav() {
  const navItems = [
    { icon: <FiHome />, label: "Home" },
    { icon: <AiOutlineProduct />, label: "Shop" },
    { icon: <FiHeart />, label: "Wishlist" },
    { icon: <FiUser />, label: "Profile" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white shadow-lg md:hidden z-50">
      <ul className="flex justify-around items-center px-6 py-3 text-xl">
        {navItems.map((item, index) => (
          <li
            key={index}
            className="flex flex-col items-center justify-center">
            {item.icon}
            <span className="text-xs mt-1">{item.label}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
}
