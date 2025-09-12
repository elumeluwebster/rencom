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

      <div className="mt-24 px-4 sm:px-6 md:px-28 pb-24">
        <section className="flex flex-col md:flex-row items-center gap-10 md:gap-16 mt-12 mb-20">
          <div className="w-full md:w-1/2">
            <img
              src="/assets/images/engineer.png"
              alt="image of an engineer"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-18 flex flex-col">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="rounded-full bg-[#7ADC51] h-2.5 w-2.5" />
                <p className="font-geist text-xs sm:text-sm text-gray-800">
                  OUR VISION
                </p>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-[40px] font-regular font-geist mb-3">
                Key Driver of Nigeria's Energy
                <br className="hidden sm:block" />
                Transition
              </h2>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                To be a key driver of Nigeria’s energy transition and Africa's
                electrification, delivering equitable, sustainable power
                solutions that support thriving communities and economies.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="rounded-full bg-[#7ADC51] h-2.5 w-2.5" />
                <p className="font-geist text-xs sm:text-sm text-gray-800">
                  OUR MISSION
                </p>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-[40px] font-regular font-geist mb-3">
                To Empower Communities <br className="hidden sm:block" />
                and Businesses Across Africa
              </h2>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                To empower communities and businesses across Nigeria with
                reliable, clean energy, through both grid-integrated and
                off-grid solutions, aligned with national and international
                commitments for inclusive, sustainable electrification.
              </p>
            </div>
          </div>
        </section>

        <div className="mb-10 sm:mb-12">
          <div className="flex items-center gap-2 mb-2">
            <div className="rounded-full bg-[#30303070] h-2.5 w-2.5" />
            <p className="font-geist text-xs sm:text-sm text-gray-800">
              What Makes Us Thrive
            </p>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-[36px] font-regular text-[#000]">
            Impact, purpose, and a vision <br className="hidden sm:block" /> for
            a sustainable future.
          </h2>
        </div>

        <section className="flex flex-col md:flex-row items-start gap-10 md:gap-16">
          <div className="w-full md:w-1/2 space-y-4">
            {collapsibles.map((item, i) => (
              <div
                key={i}
                className="border bg-white py-3 rounded-md shadow-sm"
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex justify-between items-center px-4 py-3 text-left"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-[#E8FF9C] flex items-center justify-center rounded">
                      <img
                        src={item.icon}
                        alt={`${item.title} icon`}
                        className="w-4 h-4"
                      />
                    </div>
                    <span className="font-medium text-sm sm:text-base">
                      {item.title}
                    </span>
                  </div>
                  <span className="text-xl font-semibold">
                    {openIndex === i ? "−" : "+"}
                  </span>
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
            className="w-full md:w-1/2 mt-6 md:mt-0 rounded-lg"
            alt="Section 2"
          />
        </section>
      </div>
    </>
  );
}
