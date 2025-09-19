"use client";
import { useRef, useState } from "react";
import { slides } from "@/utils/store";

export default function Slider() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const cardWidth = 200;
  const visibleCards = 1;
  const maxIndex = slides.length - visibleCards;

  const handleNext = () => {
    if (currentIndex < maxIndex) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      scrollToIndex(newIndex);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
      scrollToIndex(newIndex);
    }
  };

  const scrollToIndex = (index: number) => {
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(-${index * cardWidth}px)`;
    }
  };

  return (
    <div className="mt-20 flex justify-center">
      <div className="max-w-screen-lg w-full px-4 sm:px-2 md:px-3">
        <div className="overflow-visible ">
          <div
            ref={trackRef}
            className="flex gap-4 transition-transform duration-300 ease-in-out"
            style={{ willChange: "transform" }}
          >
            {slides.map((slide, idx) => (
              <div
                key={idx}
                className="w-[320px] h-[460px] flex-shrink-0 rounded-xl bg-cover bg-center p-4 text-white flex flex-col justify-end"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <h3 className="text-lg font-bold">{slide.title}</h3>
                <p className="text-sm">{slide.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-end gap-4 mt-8">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="px-3 py-3 rounded-full pointer-cursor bg-[#D5FF45] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <img src="/assets/icons/left-carousel-arrow.svg" alt="Left" />
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex === maxIndex}
            className="px-3 py-3 rounded-full pointer-cursor bg-[#D5FF45] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <img src="/assets/icons/right-carousel-arrow.svg" alt="Right" />
          </button>
        </div>
      </div>
    </div>
  );
}
