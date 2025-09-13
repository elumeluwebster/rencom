"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { auto_slides } from "@/utils/store";

export default function AutoCarousel() {
  const [start, setStart] = useState(0);
  const cardWidth = 200 + 10;

  useEffect(() => {
    const interval = setInterval(() => {
      setStart((prev) => (prev + 1 >= auto_slides.length ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex justify-center items-center my-10 z-20 relative">
      <Image
        src="/assets/icons/spirals.svg"
        alt="sliderImages"
        width={300}
        height={200}
        className="absolute -z-10 top-[-170px] right-30 hidden sm:block"
      />
      <div className="w-[90%] bg-[#014715] flex justify-center rounded-[18px] p-3 ">
        <div className="overflow-hidden px-2">
          <div
            className="flex gap-1 transition-transform duration-1000 ease-in-out"
            style={{
              transform: `translateX(-${start * cardWidth}px)`,
            }}
          >
            {auto_slides.map((slide, idx) => (
              <div
                key={idx}
                className="w-[380px] h-[420px] flex-shrink-0 rounded-xl overflow-hidden relative"
              >
                <Image
                  src={slide.image}
                  alt="sliderImages"
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
