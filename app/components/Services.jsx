import { IoMdReturnLeft } from "react-icons/io";
import { MdOutlineSupportAgent, MdOutlinePayment } from "react-icons/md";
import { FiBox } from "react-icons/fi";

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
    <div className="flex justify-between px-30 py-20 border-y border-neutral-200">
      {services.map((service, index) => (
        <div
          key={index}
          className="flex justify-center gap-5 items-center ">
          <span className="flex justify-center items-center rounded-full w-[70px] h-[70px] border border-neutral-300">
            {service.icon}
          </span>
          <span className="space-y-2">
            <h3 className="text-lg">{service.title}</h3>
            <p className="text-sm text-gray-600">{service.desc}</p>
          </span>
        </div>
      ))}
    </div>
  );
}
