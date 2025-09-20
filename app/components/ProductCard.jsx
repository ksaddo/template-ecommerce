import Image from "next/image";
import Link from "next/link";
import { FiShare2, FiEye, FiHeart, FiShoppingBag } from "react-icons/fi";

const icons = [FiShoppingBag, FiHeart, FiShare2, FiEye];

export default function ProductCard({
  group = [],
  selectedIndex = 0,
  onSelect,
}) {
  const product = group[selectedIndex];

  if (!product) {
    return (
      <div className="p-4 text-center text-gray-500">No product found</div>
    );
  }

  return (
    <Link
      href={`/products/${product.id}`}
      className="block">
      <div className="flex flex-col justify-between overflow-hidden">
        {/* Product Image + hover icons */}
        <div className="group">
          <div className="relative w-full h-70 md:h-80 overflow-hidden">
            <Image
              src={product.img}
              alt={product.name}
              fill
              style={{ objectFit: "contain" }}
              className="transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          <div className="mt-4 md:mt-6 md:mb-3 flex justify-center gap-2 md:opacity-0 md:translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
            {icons.map((Icon, i) => (
              <span
                key={i}
                style={{ animationDelay: `${i * 0.15}s` }}
                className={`wave md:group-hover:opacity-100 shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-2 md:p-3 text-[16px] md:text-[20px] flex items-center justify-center bg-white/80 ${
                  i === 1 || i === 2 ? "hidden md:flex" : "flex"
                }`}>
                <Icon />
              </span>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="text-left space-y-1 p-4 mx-auto">
          <h3 className="text h-12 md:h-6 font-bold">{product.name}</h3>
          <p className="text-gray-600 text-sm">{product.desc}</p>

          <p className="font-bold">${product.price}</p>
          <p className="text-gray-600 text-sm">{product.brand}</p>

          {/* Two-color selector (always gray & white) */}
          <div className="flex justify-center gap-3 mt-3">
            {["#A8BCD4", "#C8AD7F"].map((color, i) => (
              <button
                key={i}
                onMouseEnter={() => onSelect(i)}
                className={`w-7 h-7 flex items-center justify-center rounded-full border-1 ${
                  i === selectedIndex ? "border-black" : "border-white"
                }`}>
                <span
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: color }}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
