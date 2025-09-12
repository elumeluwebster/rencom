"use client";
import { useState } from "react";

const slides = [
  {
    image: "/assets/images/solar-home-systems-and-standalone-solutions.png",
    title: "Solar Home Systems and Standalone Solutions",
    desc: "Distribute reliable off-grid solar systems for households and micro-enterprises.",
  },
  {
    image: "/assets/images/grid-connected-renewables.png",
    title: "Grid-connected Renewables",
    desc: "Partner with utilities to expand renewable energy capacity integrated into the national grid.",
  },
  {
    image: "/assets/images/clean-cooking-solutions.png",
    title: "Clean Cooking Solutions",
    desc: "Promote sustainable energy for clean cooking, reducing reliance on traditional fuels (aligning with SDG 7.1 & 7.2).",
  },
  {
    image: "/assets/images/consultancy-assistance.png",
    title: "Consultancy & Technical Assistance",
    desc: "Support Energy Compacts, feasibility studies, planning, and implementation.",
  },
  {
    image: "/assets/images/solar-mini-grids.png",
    title: "Solar Mini-grids",
    desc: "Develop bespoke mini-grid systems for rural communities and businesses, ensuring clean, affordable power.",
  },
  {
    image: "/assets/images/slide6.jpg",
    title: "Storage",
    desc: "Efficient energy storage systems.",
  },
];

export default function Carousel() {
  const [start, setStart] = useState(0);
  const visible = 4;

  const next = () => {
    if (start + visible < slides.length) setStart(start + 1);
  };
  const prev = () => {
    if (start > 0) setStart(start - 1);
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto mt-20">
      {/* Buttons */}
      <div className="flex absolute bottom-[-60] right-[70]">
        <button
          onClick={prev}
          className=" z-10 bg-[#D5FF45] text-black rounded-full w-10 h-10 flex items-center justify-center  ">
          ‹
        </button>
        <button
          onClick={next}
          className=" z-10 bg-[#D5FF45] text-black rounded-full w-10 h-10 flex items-center justify-center ">
          ›
        </button>
      </div>

      {/* Slider Window */}
      <div className="overflow-hidden w-full">
        <div
          className="flex gap-4 w-full  transition-transform duration-500"
          style={{ transform: `translateX(-${start * (360 + 16)}px)` }}>
          {slides.map((slide, idx) => (
            <div
              key={idx}
              className="w-[260px] h-[460px] flex-shrink-0 rounded-xl bg-cover bg-center p-4 text-white flex flex-col justify-end"
              style={{ backgroundImage: `url(${slide.image})` }}>
              <h3 className="text-lg font-bold">{slide.title}</h3>
              <p className="text-sm">{slide.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
