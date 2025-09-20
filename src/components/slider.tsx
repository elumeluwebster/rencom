"use client";
import { useEffect, useRef, useState } from "react";
import { slides } from "@/utils/store";

export default function Slider() {
  const trackRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollStep, setScrollStep] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);

  useEffect(() => {
    const calculateLayout = () => {
      if (trackRef.current?.children[0] && containerRef.current) {
        const slide = trackRef.current.children[0] as HTMLElement;
        const slideWidth = slide.offsetWidth;
        const style = window.getComputedStyle(trackRef.current);
        const gap = parseFloat(style.gap) || 16;
        const step = slideWidth + gap;
        setScrollStep(step);

        const containerWidth = containerRef.current.offsetWidth;

        const visibleSlides = Math.floor(containerWidth / step);

        const newMax = slides.length - visibleSlides;
        setMaxIndex(Math.max(0, newMax));
      }
    };

    calculateLayout();
    window.addEventListener("resize", calculateLayout);
    return () => window.removeEventListener("resize", calculateLayout);
  }, []);

  const scrollToIndex = (index: number) => {
    if (trackRef.current) {
      const clampedIndex = Math.min(index, maxIndex);
      trackRef.current.style.transform = `translateX(-${
        clampedIndex * scrollStep
      }px)`;
    }
  };

  const handleNext = () => {
    const newIndex = Math.min(currentIndex + 1, maxIndex);
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  const handlePrev = () => {
    const newIndex = Math.max(currentIndex - 1, 0);
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  return (
    <div className="w-full">
      <div ref={containerRef} className="overflow-visible">
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
          className="px-3 py-3 rounded-full bg-[#D5FF45] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <img src="/assets/icons/left-carousel-arrow.svg" alt="Left" />
        </button>
        <button
          onClick={handleNext}
          disabled={currentIndex >= maxIndex} // Use >= for safety
          className="px-3 py-3 rounded-full bg-[#D5FF45] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <img src="/assets/icons/right-carousel-arrow.svg" alt="Right" />
        </button>
      </div>
    </div>
  );
}
