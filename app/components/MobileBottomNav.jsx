"use client";
import Link from "next/link";
import { FiHome, FiUser, FiHeart } from "react-icons/fi";
import { AiOutlineProduct } from "react-icons/ai";

export default function MobileBottomNav() {
  const navItems = [
    { icon: <FiHome />, label: "Home", href: "/" },
    { icon: <AiOutlineProduct />, label: "Shop", href: "/products" },
    { icon: <FiHeart />, label: "Wishlist", href: "/wishlist" },
    { icon: <FiUser />, label: "Profile", href: "/account" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white shadow-lg md:hidden z-50">
      <ul className="flex justify-around items-center px-6 py-3 font-bold text-xl">
        {navItems.map((item, index) => (
          <li key={index}>
            <Link
              href={item.href}
              className="flex flex-col items-center justify-center">
              {item.icon}
              <span className="text-[14px] mt-1">{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
