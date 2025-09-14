"use client";
import React from "react";
import Image from "next/image";
import HeaderDark from "@/components/header-dark";

export default function ProjectsImpact() {
  return (
    <>
      <HeaderDark />
      <div className="mt-24 px-4 sm:px-6 md:px-28 pb-10">
        <section className="flex flex-col md:flex-row items-center gap-4 md:gap-4 mt-12 mb-3">
          <div className="relative w-full md:w-1/2">
            <Image
              src="/assets/images/kwara.png"
              alt="Kwara project"
              width={500}
              height={300}
              className="w-full h-auto rounded-lg shadow-md object-cover"
              priority={false}
            />
          </div>
          <div className="relative w-full md:w-1/2">
            <Image
              src="/assets/images/agro.png"
              alt="Agro project"
              width={500}
              height={300}
              className="w-full h-auto rounded-lg shadow-md object-cover"
              priority={false}
            />
          </div>
        </section>

        <section className="flex flex-col md:flex-row items-center gap-4 md:gap-4 mt-12 mb-3">
          <div className="relative w-full md:w-1/2">
            <Image
              src="/assets/images/cooking.png"
              alt="Cooking project"
              width={500}
              height={300}
              className="w-full h-auto rounded-lg shadow-md object-cover"
              priority={false}
            />
          </div>
          <div className="relative w-full md:w-1/2">
            <Image
              src="/assets/images/solar-life.png"
              alt="Solar life project"
              width={500}
              height={300}
              className="w-full h-auto rounded-lg shadow-md object-cover"
              priority={false}
            />
          </div>
        </section>

        <section className="flex flex-col md:flex-row items-center gap-4 md:gap-4 mt-12 mb-3">
          <div className="relative w-full md:w-1/2">
            <Image
              src="/assets/images/impact-metrics.png"
              alt="Impact metrics"
              width={500}
              height={300}
              className="w-full h-auto rounded-lg shadow-md object-cover"
              priority={false}
            />
          </div>
          <div className="relative w-full md:w-1/2">
            <Image
              src="/assets/images/phc-improved.png"
              alt="PHC improved"
              width={500}
              height={300}
              className="w-full h-auto rounded-lg shadow-md object-cover"
              priority={false}
            />
          </div>
        </section>
      </div>
    </>
  );
}
