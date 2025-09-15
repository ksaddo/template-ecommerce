"use client";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function Marquee() {
  const items = [
    "🚚 FREE SHIPPING AND RETURNS ON ALL LUXURY WATCHES",
    "⚡ LIMITED TIME OFFER — SAVE UP TO 40% ON SELECTED TIMEPIECES",
    "🎁 NEW ARRIVALS — EXCLUSIVE WATCHES JUST LAUNCHED",
  ];

  const marqueeRef = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (marqueeRef.current) {
      setWidth(marqueeRef.current.scrollWidth / 2); // half because items are duplicated
    }
  }, []);

  // Define pixels per second speed
  const speed = 40; // px per second
  const duration = width / speed;

  return (
    <div className="overflow-hidden whitespace-nowrap bg-black text-white py-3">
      <motion.div
        ref={marqueeRef}
        className="flex gap-16"
        animate={{ x: [0, -width] }}
        transition={{ repeat: Infinity, duration, ease: "linear" }}>
        {[...items, ...items].map((text, i) => (
          <span
            key={i}
            className="relative mx-8 text-xs font-bold after:content-[''] after:block after:h-[2px] after:w-6 after:bg-white after:mx-1 after:absolute after:top-1/2 after:translate-y-[-50%] after:right-[-5rem]">
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
