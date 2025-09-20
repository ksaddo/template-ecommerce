import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

export default function WishListPage() {
  return (
    <div className="flex flex-col items-center space-y-6 h-full text-center px-4 mt-32">
      <h3 className="text-3xl font-bold">Wishlist is empty</h3>
      <p>
        You don't have any products in the wishlist yet. You will find a lot of
        interesting products on our "Shop" page.
      </p>
      <Link
        href="/products"
        className="flex justify-center items-center w-44 h-12 gap-2 text-lg bg-black text-white">
        Return to shop <MdArrowOutward />
      </Link>
    </div>
  );
}
