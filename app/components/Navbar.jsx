"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiSearch, FiUser, FiHeart, FiShoppingBag, FiMenu, FiX,} from "react-icons/fi"; // prettier-ignore
import { MdArrowOutward } from "react-icons/md";

function Backdrop({ onClick }) {
  return (
    <div
      onClick={onClick}
      className="fixed inset-0 bg-black/40 z-40"
    />
  );
}

function SidebarMenu({ isOpen, onClose, navLinks, pathname }) {
  return (
    <div
      className={`fixed top-0 left-0 h-full px-6 w-72 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
      role="dialog"
      aria-modal="true">
      <div className="flex justify-end p-6">
        <button
          onClick={onClose}
          className="text-3xl"
          aria-label="Close Menu">
          <FiX />
        </button>
      </div>

      <nav className="flex flex-col space-y-4 font-medium mb-10">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            href={link.path}
            onClick={onClose}
            className={`${
              pathname === link.path ? "font-semibold" : ""
            } hover:text-gray-600 transition border-b border-gray-200 pb-2`}>
            {link.name}
          </Link>
        ))}
      </nav>

      <div>
        <p className="mb-4">
          Address: Chirapatre Estate, F9, <br />
          Kumasi, GH <br />
          Email: evansaddo12@gmail.com <br />
          Phone: +233-2465-06590
        </p>
        <p className="underline">Need Help?</p>
      </div>
    </div>
  );
}

function CartDrawer({ isOpen, onClose }) {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 md:w-96 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
      role="dialog"
      aria-modal="true">
      <div className="flex justify-end p-6">
        <button
          onClick={onClose}
          className="text-3xl"
          aria-label="Close Cart">
          <FiX />
        </button>
      </div>

      <div className="flex flex-col items-center space-y-6 h-full text-center px-4 mt-32">
        <h3 className="text-3xl font-bold">Your cart is empty</h3>
        <p>
          You may check out all the available products and buy some in the shop
        </p>
        <Link
          href="/products"
          className="flex justify-center items-center w-44 h-12 gap-2 text-lg bg-black text-white">
          Return to shop <MdArrowOutward />
        </Link>
      </div>
    </div>
  );
}

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Shop", path: "/shop" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header>
      <div className="flex w-full h-16 px-4 md:px-10 items-center md:border-b md:border-neutral-300">
        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(true)}
          className="text-2xl md:hidden"
          aria-label="Open Menu">
          <FiMenu />
        </button>

        {/* Currency & Language (desktop only) */}
        <div className="hidden md:flex space-x-4 text-sm">
          <button>USD</button>
          <button>English</button>
        </div>

        {/* Logo */}
        <Link
          href="/"
          className="flex flex-1 justify-center">
          <span className="text-[26px] md:text-3xl font-bold">template</span>
        </Link>

        {/* Cart (mobile only) */}
        <button
          onClick={() => setIsCartOpen(true)}
          className="text-2xl md:hidden"
          aria-label="Open Cart">
          <FiShoppingBag />
        </button>

        {/* Right Icons (desktop only) */}
        <div className="hidden md:flex gap-4 text-xl">
          <button aria-label="Search">
            <FiSearch />
          </button>
          <button aria-label="User">
            <FiUser />
          </button>
          <button aria-label="Wishlist">
            <FiHeart />
          </button>
          <button
            onClick={() => setIsCartOpen(true)}
            aria-label="Cart">
            <FiShoppingBag />
          </button>
        </div>
      </div>

      {/* Desktop Nav Menu */}
      <nav
        className="hidden md:block w-full h-16 px-10"
        role="navigation">
        <ul className="flex items-center justify-center space-x-8 p-4">
          {navLinks.map((link) => (
            <li
              key={link.path}
              className="relative group cursor-pointer flex items-center gap-2">
              <Link href={link.path}>
                <span
                  className={`${
                    pathname === link.path ? "font-semibold" : ""
                  }`}>
                  {link.name}
                </span>
              </Link>
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-black transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Sidebar + Backdrop */}
      <SidebarMenu
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        navLinks={navLinks}
        pathname={pathname}
      />
      {isOpen && <Backdrop onClick={() => setIsOpen(false)} />}

      {/* Cart Drawer + Backdrop */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />
      {isCartOpen && <Backdrop onClick={() => setIsCartOpen(false)} />}
    </header>
  );
}
