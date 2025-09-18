import { MdArrowOutward } from "react-icons/md";

export default function Account() {
  return (
    <div className="mx-auto w-[640px] h-[360px] px-8 py-6 space-y-4 border border-gray-300 mt-14 mb-24">
      <h2 className="mb-6 text-3xl">Login</h2>
      <input
        className="w-full p-4 border border-gray-300"
        placeholder="Email address *"
        type="text"
      />
      <input
        className="w-full p-4 border border-gray-300"
        placeholder="Password *"
        type="text"
      />
      <div className="flex justify-between">
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            className="w-4 h-4 accent-black"
          />
          <span className="text-sm">Remember me</span>
        </label>
        <p className="text-sm border-b border-black">Forgot Password?</p>
      </div>
      <div className="flex justify-between">
        <button className="h-11 w-1/2 bg-black text-white">Log in</button>
        <button className="flex justify-center items-center gap-2 font-bold">
          Create an account <MdArrowOutward />
        </button>
      </div>
    </div>
  );
}
