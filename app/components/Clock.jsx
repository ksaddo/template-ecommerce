"use client";

import { useEffect, useMemo, useState } from "react";

export default function AnalogClock({ size = 320 }) {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    // update every second (lighter on performance)
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // angles
  const secondDeg = seconds * 6; // 360/60
  const minuteDeg = (minutes + seconds / 60) * 6;
  const hourDeg = ((hours % 12) + minutes / 60) * 30;

  // geometry
  const radius = size / 2;
  const inset = Math.round(size * 0.037);
  const majorTickLen = Math.round(size * 0.043);
  const minorTickLen = Math.round(size * 0.021);

  // memoize ticks (static)
  const ticks = useMemo(
    () =>
      Array.from({ length: 60 }).map((_, i) => {
        const angle = i * 6;
        const isMajor = i % 5 === 0;
        const tickLen = isMajor ? majorTickLen : minorTickLen;
        const thickness = isMajor
          ? Math.max(2, size * 0.008)
          : Math.max(1, size * 0.005);
        const translateY = -(radius - inset - tickLen / 2);

        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              width: `${thickness}px`,
              height: `${tickLen}px`,
              background: isMajor ? "#111" : "#666",
              transform: `rotate(${angle}deg) translateY(${translateY}px)`,
              transformOrigin: "center center",
              borderRadius: "2px",
            }}
          />
        );
      }),
    [size]
  );

  // memoize numbers (static)
  const numbers = useMemo(() => {
    return Array.from({ length: 12 }).map((_, idx) => {
      const num = idx + 1;
      const angleRad = (num * 30 * Math.PI) / 180;
      const numRadius = radius - Math.round(size * 0.11);
      const x = radius + numRadius * Math.sin(angleRad);
      const y = radius - numRadius * Math.cos(angleRad);

      return (
        <div
          key={num}
          style={{
            position: "absolute",
            left: `${x}px`,
            top: `${y}px`,
            transform: "translate(-50%,-50%)",
            fontSize: `${Math.round(size * 0.06)}px`,
            fontWeight: 700,
            userSelect: "none",
          }}>
          {num}
        </div>
      );
    });
  }, [size, radius]);

  return (
    <div className="flex items-center justify-center h-screen">
      <div
        style={{
          width: `${size}px`,
          height: `${size}px`,
          borderRadius: "50%",
          border: "6px solid #111",
          position: "relative",
          background: "#fff",
          boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
        }}>
        {/* Static face */}
        {ticks}
        {numbers}

        {/* Hour hand */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            width: `${Math.max(4, Math.round(size * 0.02))}px`,
            height: `${Math.round(radius * 0.5)}px`,
            background: "#111",
            transformOrigin: "50% 100%",
            transform: `translate(-50%,-100%) rotate(${hourDeg}deg)`,
            borderRadius: "6px",
            zIndex: 5,
          }}
        />

        {/* Minute hand */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            width: `${Math.max(3, Math.round(size * 0.015))}px`,
            height: `${Math.round(radius * 0.75)}px`,
            background: "#222",
            transformOrigin: "50% 100%",
            transform: `translate(-50%,-100%) rotate(${minuteDeg}deg)`,
            borderRadius: "6px",
            zIndex: 6,
          }}
        />

        {/* Second hand */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            width: `${Math.max(2, Math.round(size * 0.008))}px`,
            height: `${Math.round(radius * 0.9)}px`,
            background: "#d02323",
            transformOrigin: "50% 100%",
            transform: `translate(-50%,-100%) rotate(${secondDeg}deg)`,
            borderRadius: "4px",
            zIndex: 7,
            boxShadow: "0 0 6px rgba(208,0,0,0.35)",
          }}
        />

        {/* Center pin */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%,-50%)",
            width: `${Math.round(size * 0.06)}px`,
            height: `${Math.round(size * 0.06)}px`,
            background: "#111",
            borderRadius: "50%",
            zIndex: 10,
          }}
        />
      </div>
    </div>
  );
}
