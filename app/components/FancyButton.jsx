import { MdArrowOutward } from "react-icons/md";

export default function FancyButton({ children }) {
  return (
    <button className="group relative inline-flex h-10 items-center justify-center overflow-hidden rounded-full bg-neutral-950 px-5 font-medium text-white">
      {/* Button text and arrow */}
      <span className="relative z-10 flex items-center text-sm gap-2">
        {children}
        <MdArrowOutward className="transition-transform duration-300 group-hover:translate-x-1" />
      </span>

      {/* Glimmer effect */}
      <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-700 group-hover:[transform:skew(-12deg)_translateX(100%)]">
        <div className="relative h-full w-8 bg-white/20"></div>
      </div>
    </button>
  );
}
