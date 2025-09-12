"use client";

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGooglePlusG,
} from "react-icons/fa";

const socialIcons = [
  { icon: FaFacebookF, bg: "bg-[#3b5999]" },
  { icon: FaTwitter, bg: "bg-[#55acee]" },
  { icon: FaLinkedinIn, bg: "bg-[#0077b5]" },
  { icon: FaGooglePlusG, bg: "bg-[#dd4b39]" },
];

export default function SocialIcons() {
  return (
    <ul className="flex gap-3 mt-4">
      {socialIcons.map(({ icon: Icon, bg }, idx) => (
        <li key={idx}>
          <a
            className={`relative w-10 h-10 flex items-center justify-center text-white border border-white rounded-full overflow-hidden group`}>
            <Icon className="z-10 transition-transform duration-500 group-hover:rotate-[360deg] group-hover:text-white" />
            <span
              className={`absolute inset-0 top-full transition-all duration-500 ${bg}`}></span>
          </a>
        </li>
      ))}
    </ul>
  );
}
