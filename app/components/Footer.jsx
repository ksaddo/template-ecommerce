import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
import SocialIcons from "./SocialIcons";
import FancyButton from "./FancyButton";

export default function Footer() {
  const helpLinks = [
    { title: "Privacy Policy" },
    { title: "Returns + Exchanges" },
    { title: "Shipping Terms & Conditions" },
    { title: "Terms & Conditions" },
    { title: "FAQ’s" },
    { title: "Returns + Exchanges" },
    { title: "My Wishlist" },
  ];
  const links = [
    { title: "Our Store" },
    { title: "Visit Our Store" },
    { title: "Contact Us" },
    { title: "Account" },
  ];

  return (
    <footer className="px-30 pt-20 w-full bg-black text-neutral-400">
      <div className="flex justify-between w-full pb-10 border-b border-neutral-800">
        <div className="space-y-6">
          <p className="text-3xl font-bold text-white">template</p>
          <p>
            Address: Chirapatre Estate, F9, <br />
            Kumasi, GH <br />
            Email: evansaddo12@gmail.com <br />
            Phone: +233-2465-06590
          </p>
          <button className="flex w-fit gap-2 items-center border-b ">
            Get direction
            <MdArrowOutward />
          </button>
          <SocialIcons />
        </div>

        <div className="">
          <p className="text-xl mb-7 text-white">Help</p>

          {helpLinks.map((Helplink, index) => (
            <p
              key={index}
              className="hover:text-green-600 cursor-pointer mb-3 text-sm ">
              {Helplink.title}
            </p>
          ))}
        </div>

        <div className="">
          <p className="text-xl mb-7 text-white">Useful Links</p>
          {links.map((link, index) => (
            <p
              key={index}
              className="hover:text-blue-400 cursor-pointer mb-3 text-sm ">
              {link.title}
            </p>
          ))}
        </div>

        <div className="w-1/4 space-y-7">
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

      <div className="flex justify-center py-10 text-sm">
        <p>&copy; {new Date().getFullYear()} Template. All rights reserved.</p>
      </div>
    </footer>
  );
}
