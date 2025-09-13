"use client";
import { useEffect, useRef, useState } from "react";
import { slides } from "@/utils/store";

export default function Carousel() {
  const [visible, setVisible] = useState(4);
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<number>(0);
  const animationRef = useRef<number>(0);

  const cardWidth = 220 + 10; // card width + gap
  const extendedSlides = [
    ...slides,
    ...slides,
    ...slides,
    ...slides,
    ...slides,
  ]; // repeat for seamless loop
  const totalWidth = extendedSlides.length * cardWidth;

  const speed = 0.5; // px per frame (adjust for faster/slower scroll)

  useEffect(() => {
    function handleResize() {
      setVisible(window.innerWidth < 640 ? 1 : 4);
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const animate = () => {
      if (trackRef.current) {
        scrollRef.current -= speed;
        if (scrollRef.current <= 0) {
          scrollRef.current = totalWidth / 2;
        }
        trackRef.current.style.transform = `translateX(-${scrollRef.current}px)`;
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationRef.current!);
  }, [totalWidth]);

  return (
    <div
      ref={containerRef}
      className="w-full bg-transparent mt-20 px-2 overflow-hidden"
    >
      <div
        ref={trackRef}
        className="flex gap-4"
        style={{
          width: `${totalWidth}px`,
          willChange: "transform",
        }}
      >
        {extendedSlides.map((slide, idx) => (
          <div
            key={idx}
            className="w-[260px] h-[460px] flex-shrink-0 rounded-xl bg-cover bg-center p-4 text-white flex flex-col justify-end"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <h3 className="text-lg font-bold">{slide.title}</h3>
            <p className="text-sm">{slide.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
