import { IoMdReturnLeft } from "react-icons/io";
import { MdOutlineSupportAgent, MdOutlinePayment } from "react-icons/md";
import { FiBox } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const services = [
  {
    title: "Free Shipping",
    desc: "You will love at low prices",
    icon: <FiBox className="text-3xl" />,
  },
  {
    title: "Flexible Payment",
    desc: "Pay with Multiple Credit Cards",
    icon: <MdOutlinePayment className="text-3xl" />,
  },
  {
    title: "14 Day Returns",
    desc: "Within 30 days for an exchange",
    icon: <IoMdReturnLeft className="text-3xl" />,
  },
  {
    title: "Premium Support",
    desc: "Outstanding premium support",
    icon: <MdOutlineSupportAgent className="text-3xl" />,
  },
];

export default function Services() {
  return (
    <div className="w-full px-[clamp(1rem,4vw,8rem)] border border-t-neutral-300">
      {/* Swiper for sm & md */}
      <div className="block lg:hidden">
        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 }, // sm
            768: { slidesPerView: 2 }, // md
          }}
          className="w-full mx-auto !pb-12" //
        >
          {services.map((service, index) => (
            <SwiperSlide
              key={index}
              className="flex justify-center items-center">
              <div className="flex flex-col justify-center items-center pt-3 w-full">
                <span className="flex justify-center items-center rounded-full w-[60px] h-[60px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] mb-4">
                  {service.icon}
                </span>
                <h3 className="text-lg text-gray-900 mb-1">{service.title}</h3>
                <p className="text-sm text-gray-600">{service.desc}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Static layout for lg */}
      <div className="hidden lg:flex justify-center py-[clamp(1rem,4vw,5rem)]">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex justify-center gap-6 items-center w-full">
            <span className="flex justify-center items-center rounded-full w-[70px] h-[70px] shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
              {service.icon}
            </span>
            <span className="space-y-2">
              <h3 className="text-lg text-gray-900">{service.title}</h3>
              <p className="text-sm text-gray-600">{service.desc}</p>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
