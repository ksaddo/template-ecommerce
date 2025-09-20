"use client";
import { useState } from "react";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import { FiPlus, FiX } from "react-icons/fi";

import SocialIcons from "./SocialIcons";
import FancyButton from "./FancyButton";

export default function Footer() {
  const helpLinks = [
    { title: "Privacy Policy" },
    { title: "Returns + Exchanges" },
    { title: "Shipping Terms & Conditions" },
    { title: "Terms & Conditions" },
    { title: "FAQ’s" },
    { title: "My Wishlist" },
  ];
  const links = [
    { title: "Our Store" },
    { title: "Visit Our Store" },
    { title: "Contact Us" },
    { title: "Account" },
  ];

  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [isLinksOpen, setIsLinksOpen] = useState(false);

  return (
    <footer className="px-4 pb-4 pt-[70px] md:px-30 md:pt-20 w-full bg-black text-neutral-400">
      <div className="flex flex-col gap-6 md:gap-0 md:flex-row md:justify-between w-full pb-10 border-b border-neutral-800">
        {/* Template Section */}
        <div className="space-y-6 md:w-1/4">
          <p className="text-3xl font-bold text-white">template</p>
          <p>
            Address: Chirapatre Estate, F9, <br />
            Kumasi, Gh <br />
            Email: evansaddo12@gmail.com <br />
            Phone: +233-2465-06590
          </p>
          <button className="flex w-fit gap-2 items-center border-b ">
            Get direction
            <MdArrowOutward />
          </button>
          <SocialIcons />
        </div>

        {/* Help Section */}
        <div className="md:w-1/4">
          <div className="flex justify-between">
            <p className="text-lg md:text-xl md:mb-4 text-white">Help</p>
            <button
              className="block md:hidden text-xl transition-transform"
              onClick={() => setIsHelpOpen(!isHelpOpen)}
              aria-expanded={isHelpOpen}
              aria-controls="help-links">
              {isHelpOpen ? <FiX /> : <FiPlus />}
            </button>
          </div>

          <div
            id="help-links"
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              isHelpOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            } md:max-h-full md:opacity-100`}>
            <div className="flex flex-col space-y-3 mt-3 md:mt-0">
              {helpLinks.map((Helplink, index) => (
                <Link
                  href="/"
                  key={index}
                  className="hover:text-green-600 cursor-pointer text-sm">
                  {Helplink.title}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Links Section */}
        <div className="md:w-1/4">
          <div className="flex justify-between">
            <p className="text-lg md:text-xl md:mb-4 text-white">Links</p>
            <button
              className="block md:hidden text-xl transition-transform"
              onClick={() => setIsLinksOpen(!isLinksOpen)}
              aria-expanded={isLinksOpen}
              aria-controls="links-section">
              {isLinksOpen ? <FiX /> : <FiPlus />}
            </button>
          </div>

          <div
            id="links-section"
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              isLinksOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            } md:max-h-full md:opacity-100`}>
            <div className="flex flex-col space-y-3 mt-3 md:mt-0">
              {links.map((link, index) => (
                <Link
                  href="/"
                  key={index}
                  className="hover:text-blue-400 cursor-pointer text-sm">
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Signup Section */}
        <div className="w-full md:w-1/4 space-y-7">
          <p className="text-xl font-semibold text-white">Sign Up for Email</p>
          <p className="text-sm text-gray-300">
            Sign up to get first dibs on new arrivals, sales, exclusive content,
            events and more!
          </p>

          <div className="flex items-center gap-2 w-full bg-[#2c2c2c] rounded-full pl-4 pr-2 py-2">
            <input
              type="text"
              placeholder="Your email address"
              className="flex-1 bg-transparent outline-none placeholder-white text-sm text-white"
            />
            <FancyButton>Subscribe</FancyButton>
          </div>
        </div>
      </div>

      {/* Date Section */}
      <div className="flex justify-center py-10 text-sm">
        <p>&copy; {new Date().getFullYear()} Template. All rights reserved.</p>
      </div>
    </footer>
  );
}
