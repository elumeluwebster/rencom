"use client";
import React, { useState } from "react";
import { aboutData, projectImpactData } from "@/utils/store";

import HeaderDark from "@/components/header-dark";

export default function Projects() {
  //

  return (
    <>
      <HeaderDark />

      <div className="mt-24 px-4 sm:px-6 md:px-28 pb-10">
        <div></div>
        <section className="flex flex-col md:flex-row items-center gap-4 md:gap-4 mt-12 mb-3">
          {/* <div className="relative w-full md:w-1/2">
            <img
              src="/assets/images/kwara.png"
              alt=""
              className="w-full h-auto rounded-lg shadow-md object-cover"
            />
          </div>
          <div className="relative w-full md:w-1/2">
            <img
              src="/assets/images/agro.png"
              alt=""
              className="w-full h-auto rounded-lg shadow-md object-cover"
            />
          </div>*/}
        </section>
        <section className="flex flex-col md:flex-row items-center gap-4 md:gap-4 mt-12 mb-3">
          {/* <div className="relative w-full md:w-1/2">
            <img
              src="/assets/images/cooking.png"
              alt=""
              className="w-full h-auto rounded-lg shadow-md object-cover"
            />
          </div> */}
          {/* <div className="relative w-full md:w-1/2">
            <img
              src="/assets/images/solar-life.png"
              alt=""
              className="w-full h-auto rounded-lg shadow-md object-cover"
            />
          </div>
        </section>
        <section className="flex flex-col md:flex-row items-center gap-4 md:gap-4 mt-12 mb-3">
          <div className="relative w-full md:w-1/2">
            <img
              src="/assets/images/impact-metrics.png"
              alt=""
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
          <div className="relative w-full md:w-1/2">
            <img
              src="/assets/images/phc-improved.png"
              alt=""
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div> */}

          <div className="flex flex-wrap gap-4 w-full px-4 mb-20">
            {projectImpactData.map((items) => (
              <div
                key={items.num}
                className={`group relative flex-1 basis-full h-[350px] rounded-lg overflow-hidden bg-cover bg-center
                sm:basis-[calc(50%-0.5rem)] sm:h-[450px] flex flex-col justify-between`}
                style={{
                  backgroundImage: `url('${items.src}.png')`,
                }}>
                <div className="w-fit">
                  <div className="flex flex-col">
                    <p className="inline-block text-[26px] text-[#a4a0a0] font-bold font-anton transition-colors duration-300 group-hover:bg-black group-hover:text-white group-hover:p-2 rounded">
                      <span>{items.Tittle}</span>
                    </p>

                    <p className="inline-block text-[26px] text-[#a4a0a0] font-bold font-anton transition-colors duration-300 group-hover:bg-black group-hover:text-white group-hover:p-2 mt-1 rounded">
                      <span>{items.tittle2}</span>
                    </p>
                  </div>
                </div>

                <div className="absolute inset-0 bg-black/40 z-0"></div>

                <div className="relative z-10 w-full text-white p-3 mt-auto transition-all duration-400 group-hover:-translate-y-4 flex flex-col items-end justify-end h-full">
                  <div
                    className="flex items-start gap-2 mt-1 opacity-0 max-h-0 overflow-hidden 
                  transition-all duration-300 group-hover:opacity-100 group-hover:max-h-28">
                    <div className="w-2 bg-green-500 h-full rounded-full"></div>

                    <p className="text-[12px] text-[#F4F3EA] max-w-[50%]">
                      {items.Details}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
