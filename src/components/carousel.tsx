"use client";
import { useState, useEffect, useRef } from "react";
import { slides } from "@/utils/store";

export default function Carousel() {
  const [start, setStart] = useState(0);
  const [visible, setVisible] = useState(4);
  const cardWidth = 220 + 10;
  const slideCount = slides.length;

  const extendedSlides = [...slides, ...slides];

  useEffect(() => {
    function handleResize() {
      setVisible(window.innerWidth < 640 ? 1 : 4);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setStart((prev) => {
        if (prev + 1 === slideCount) {
          return 0;
        }
        return prev + 1;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-transparent mt-20 px-2 overflow-hidden">
      <div
        className="flex gap-4 transition-transform duration-1000 ease-in-out"
        style={{
          width: `${extendedSlides.length * cardWidth}px`,
          transform: `translateX(-${start * cardWidth}px)`,
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
