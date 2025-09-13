"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { auto_slides } from "@/utils/store";

export default function AutoCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<number>(0);

  const cardWidth = 380 + 10;
  const totalSlides = auto_slides.length;
  const speed = 0.5;

  useEffect(() => {
    let animationFrameId: number;

    const animate = () => {
      if (trackRef.current) {
        scrollRef.current += speed;
        const scrollAmount = scrollRef.current % (cardWidth * totalSlides);
        trackRef.current.style.transform = `translateX(-${scrollAmount}px)`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationFrameId);
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

      <div className="w-[90%] bg-[#014715] flex justify-center rounded-[18px] p-3">
        <div className="overflow-hidden px-2">
          <div
            ref={trackRef}
            className="flex gap-2"
            style={{
              whiteSpace: "nowrap",
              willChange: "transform",
            }}
          >
            {[
              ...auto_slides,
              ...auto_slides,
              ...auto_slides,
              ...auto_slides,
              ...auto_slides,
            ].map((slide, idx) => (
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
