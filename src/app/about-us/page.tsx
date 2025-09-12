"use client";
import React, { useState } from "react";
import HeaderDark from "@/components/header-dark";

import { collapsibles } from "@/utils/store";

export default function About() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <>
      <HeaderDark />

      <div className="px-4 sm:px-6 md:px-28 pb-40">
        <section className="flex flex-col md:flex-row items-center gap-8 mt-12 mb-24">
          <div className="w-full md:w-1/2">
            <img
              src="/assets/images/engineer.png"
              alt="image of an engineer"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-bold mb-4">Who We Are</h2>
            <p className="text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod
              malesuada. Nulla porttitor accumsan tincidunt.
            </p>
          </div>
        </section>

        <section className="flex flex-col md:flex-row items-start gap-8">
          <div className="w-full md:w-1/2 space-y-4">
            {collapsibles.map((item, i) => (
              <div key={i} className="border rounded-md">
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex justify-between items-center px-4 py-3"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-4 h-4 bg-[#E8FF9C]"></div>
                    <span className="font-medium">{item.title}</span>
                  </div>
                  <span>{openIndex === i ? "−" : "+"}</span>
                </button>
                {openIndex === i && (
                  <div className="px-8 pb-4 text-sm text-gray-600">
                    {item.content}
                  </div>
                )}
              </div>
            ))}
          </div>
          <img
            src="/assets/images/engineer.png"
            className="w-full md:w-1/2 rounded-lg"
            alt="Section 2"
          />
        </section>
      </div>
    </>
  );
}
