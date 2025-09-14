"use client";
import React, { useState } from "react";

import HeaderDark from "@/components/header-dark";

export default function Projects() {
  //

  return (
    <>
      <HeaderDark />

      <div className="mt-24 px-4 sm:px-6 md:px-28 pb-10">
        <div></div>
        <section className="flex flex-col md:flex-row items-center gap-4 md:gap-4 mt-12 mb-3">
          <div className="relative w-full md:w-1/2">
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
          </div>
        </section>
        <section className="flex flex-col md:flex-row items-center gap-4 md:gap-4 mt-12 mb-3">
          <div className="relative w-full md:w-1/2">
            <img
              src="/assets/images/cooking.png"
              alt=""
              className="w-full h-auto rounded-lg shadow-md object-cover"
            />
          </div>
          <div className="relative w-full md:w-1/2">
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
          </div>
        </section>
      </div>
    </>
  );
}
