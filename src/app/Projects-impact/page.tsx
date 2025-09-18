"use client";

import React, { useState } from "react";
import { aboutData, projectImpactData } from "@/utils/store";

import HeaderDark from "@/components/header-dark";

export default function ProjectsImpact() {
  return (
    <>
      <HeaderDark />
      <div className="mt-6 sm:mt-16 md:mt-24 px-4 sm:px-6 md:px-28 pb-10">
        <div className="flex flex-col items-center text-center justify-center mb-5 px-4">
          <div className="text-black flex items-center justify-center border border-[#E1FCAD] bg-[#E1FCAD] rounded-lg px-2 mt-5 h-7 w-fit font-geist text-[10px] mb-4 sm:mb-7">
            RENCOM PROJECTS
          </div>
          <h2 className="font-normal tracking-tight text-[#012F0E] text-[60px] sm:text-[60px] xs:text-[28px] font-geist leading-[60px] sm:leading-[44px] xs:leading-[32px] mb-4">
            Our Projects
          </h2>
          <p className="mt-2 text-[16px] sm:text-[16px] xs:text-[12px] leading-[24px] sm:leading-[24px] font-geist max-w-[700px] mx-auto">
            Our story is one of passion and persistence—rooted in Africa, driven
            by innovation, and dedicated to creating sustainable energy
            solutions that transform lives.
          </p>
        </div>

        <section className="flex  md:flex-row items-center gap-4 md:gap-4 mt-12 mb-3">
          <div className="flex flex-wrap gap-4 w-full px-4 mb-20">
            {projectImpactData.map((items) => (
              <div
                key={items.num}
                className={`group relative w-full h-[350px] rounded-lg overflow-hidden p-2 bg-cover bg-center
        sm:flex-1 sm:basis-[calc(50%-0.5rem)] sm:h-[450px] flex flex-col justify-between`}
                style={{
                  backgroundImage: `url('${items.src}.png')`,
                }}
              >
                <div className="w-fit relative z-10">
                  <div className="flex flex-col gap-2">
                    <p className="inline-block text-[26px] text-[#ffffffb0] font-bold font-anton transition-colors duration-500 group-hover:bg-[#0B2E15] group-hover:text-white group-hover:p-2 rounded">
                      <span>{items.Tittle}</span>
                    </p>
                    {items.tittle2 && (
                      <p className="inline-block text-[26px] text-[#ffffffb0] font-bold font-anton transition-colors duration-500 group-hover:bg-[#0B2E15] group-hover:text-white group-hover:p-2 rounded">
                        <span>{items.tittle2}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div className="absolute inset-0 group-hover:bg-black/30 bg-transparent z-0"></div>

                <div className="relative z-10 w-full text-white p-3 mt-auto transition-all duration-500 group-hover:-translate-y-4 flex flex-col items-end justify-end h-full">
                  <div
                    className="flex items-start justify-end gap-2 mt-1 opacity-0 max-h-0 overflow-hidden 
            transition-all duration-300 group-hover:opacity-100 group-hover:max-h-35"
                  >
                    <p className="text-[12px] text-[#F4F3EA] self-end max-w-[50%] text-start">
                      {items.Details}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            <div
              className={`group relative w-full h-[430px] rounded-lg overflow-hidden p-2 bg-cover bg-center sm:flex-1 sm:basis-[calc(50%-0.5rem)] sm:h-[450px] flex flex-col justify-between`}
              style={{
                backgroundImage: `url('/assets/images/impact-metrics.png')`,
              }}
            ></div>

            <div
              className={`group relative w-full h-[430px] rounded-lg overflow-hidden p-2 bg-cover bg-center sm:flex-1 sm:basis-[calc(50%-0.5rem)] sm:h-[450px] flex flex-col justify-between`}
              style={{
                backgroundImage: `url('/assets/images/phc-improved.png')`,
              }}
            ></div>
          </div>
        </section>
      </div>
    </>
  );
}
