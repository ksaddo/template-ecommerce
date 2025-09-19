"use client";
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
    <div className="w-full md:px-[30px] 2xl:px-[100px] border border-t-neutral-300">
      <Swiper
        modules={[Pagination]}
        spaceBetween={20}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 }, // sm
          768: { slidesPerView: 2 }, // md
          1024: { slidesPerView: 4 }, // lg (all items visible, no need for static layout)
        }}
        className="w-full">
        {services.map((service, index) => (
          <SwiperSlide
            key={index}
            className="flex justify-center items-center">
            <div className="flex flex-col justify-center items-center w-full text-center pt-4 pb-14 md:pt-6 lg:pb-6">
              <span className="flex justify-center items-center rounded-full w-[70px] h-[70px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] mb-4">
                {service.icon}
              </span>
              <h3 className="text-lg text-gray-900 mb-2">{service.title}</h3>
              <p className="text-sm text-gray-600">{service.desc}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
