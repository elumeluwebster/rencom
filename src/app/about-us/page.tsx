"use client";
import Image from "next/image";
import React, { useState, useRef } from "react";

import { collapsibles, collapsibleImages } from "@/utils/store";
import HeaderDark from "@/components/header-dark";
import FadeInSection from "@/utils/utils";

export default function About() {
  const nextSectionRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  const handleClick = () => {
    nextSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const currentImage =
    openIndex !== null
      ? collapsibleImages[openIndex]
      : "/assets/images/testimonies.png";

  const [prevImage, setPrevImage] = useState<string | null>(null);
  const [fade, setFade] = useState(true);

  React.useEffect(() => {
    if (openIndex !== null) {
      setPrevImage(currentImage);
      setFade(false);
      const timeout = setTimeout(() => setFade(true), 300);
      return () => clearTimeout(timeout);
    } else {
      setPrevImage(null);
    }
  }, [openIndex]);

  return (
    <>
      <section className="relative bg-[#EEEDE4] h-[140px] w-full">
        <div className="absolute top-0 left-0 w-full">
          <HeaderDark />
        </div>
      </section>

      <section className="relative w-full h-screen px-8">
        <div className="w-full h-full bg-[url('/assets/images/about-hero.png')] bg-cover bg-center bg-no-repeat rounded-3xl">
          <div className="ml-0 sm:ml-12 absolute bg-[#fff] rounded-2xl text-white mb-10 px-10 py-10 bottom-0 left-0 justify-start">
            <div className="text-black flex border border-[#F2F2F2] rounded-2xl px-2 items-center mt-5 h-7 w-fit font-geist text-[10px]">
              ABOUT RENCOM
            </div>
            <h2 className="font-geist tracking-tight font-light text-black leading-17 text-6xl py-2">
              Creating Sustainable <br /> Energy Solutions for <br /> All People
            </h2>
            <p className="mt-4 text-black font-extralight font-geist">
              We combine innovation, impact, and sustainability to deliver
              energy
              <br />
              solutions that transform lives and protect the planet.
            </p>

            <div
              className="flex flex-row gap-2 items-center mt-10 mb-5"
              onClick={handleClick}
            >
              <button className="text-black py-3 px-4 rounded-3xl cursor-pointer font-light bg-[#E1FCAD]">
                Continue Reading
              </button>

              <div className="cursor-pointer w-12 h-12 rounded-full bg-[#E1FCAD] p-3 flex items-center justify-center">
                <Image
                  src="/assets/icons/down-right-arrow.svg"
                  alt="arrow icon"
                  width={12}
                  height={12}
                  className="w-4 h-4"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div ref={nextSectionRef} className="mt-24 px-4 sm:px-6 md:px-28 pb-24">
        <FadeInSection>
          <div className="text-center font-geist mb-40 ">
            <h1 className="text-[7vh]">Our Vision & Mission</h1>
            <p className="text-black font-extralight text-[18px] leading-8 mt-5">
              Building sustainable systems, empowering communities, and <br />{" "}
              fueling economic growth.
            </p>
          </div>
          <section className="flex flex-col md:flex-row items-center gap-10 md:gap-16 mt-12 mb-20">
            <div className="w-full md:w-1/2 relative">
              <Image
                src="/assets/images/engineer.png"
                alt="image of an engineer"
                className="w-full h-auto rounded-lg"
                width={2400}
                height={2400}
              />
              <div className="absolute bottom-4 backdrop-blur rounded-2xl tracking-wide text-[11px] left-4 bg-[#1A1A1752] text-white uppercase px-4 py-2 overflow-hidden font-geist font-regular">
                Driving Africa&apos;s Energy Transition
              </div>
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
                  Key Driver of Nigeria&apos;s Energy
                  <br className="hidden sm:block" />
                  Transition
                </h2>
                <p className="text-gray-700 font-extralight text-sm sm:text-base leading-8">
                  To be a key driver of Nigeria&apos;s energy transition and
                  Africa&apos;s <br />
                  electrification, delivering equitable, sustainable power
                  solutions that <br /> support thriving communities and
                  economies.
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
                <p className="text-gray-700 font-extralight text-sm sm:text-base leading-8">
                  To empower communities and businesses across Nigeria with{" "}
                  <br />
                  reliable, clean energy, through both grid-integrated and
                  off-grid <br /> solutions, aligned with national and
                  international commitments for <br /> inclusive, sustainable
                  electrification.
                </p>
              </div>
            </div>
          </section>
        </FadeInSection>
        <FadeInSection>
          <div className="mb-10 sm:mb-12">
            <div className="flex items-center gap-2 mb-2">
              <div className="rounded-full bg-[#30303070] h-2.5 w-2.5" />
              <p className="font-geist text-xs sm:text-sm text-gray-800">
                What Makes Us Thrive
              </p>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-[36px] font-regular text-[#000]">
              Impact, purpose, and a vision <br className="hidden sm:block" />{" "}
              for a sustainable future.
            </h2>
          </div>
        </FadeInSection>
        <FadeInSection>
          <section className="flex flex-col md:flex-row items-start gap-10 md:gap-16">
            <div className="w-full md:w-1/2 space-y-4">
              {collapsibles.map((item, i) => (
                <div key={i} className="bg-white py-3 rounded-md shadow-sm">
                  <button
                    onClick={() => toggle(i)}
                    className="w-full flex justify-between items-center px-4 py-3 text-left"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-[#E8FF9C] flex items-center justify-center rounded">
                        <Image
                          src={item.icon}
                          width={12}
                          height={12}
                          alt={`${item.title} icon`}
                          className="w-4 h-4"
                        />
                      </div>
                      <span className="font-medium text-sm sm:text-base">
                        {item.title}
                      </span>
                    </div>
                    <span className="text-xl cursor-pointer font-semibold">
                      {openIndex === i ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 transition-transform duration-300"
                          viewBox="0 0 20 20"
                          fill="black"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 8.586L15.95 2.636a1 1 0 111.414 1.414L11.414 10l5.95 5.95a1 1 0 11-1.414 1.414L10 11.414l-5.95 5.95a1 1 0 11-1.414-1.414L8.586 10 2.636 4.05a1 1 0 111.414-1.414L10 8.586z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ) : (
                        "+"
                      )}
                    </span>
                  </button>
                  {openIndex === i && (
                    <div className="px-14 pb-4 justify-center text-sm text-gray-600 animate-in slide-in-from-top-2 duration-300">
                      {item.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <Image
              width={2400}
              height={2400}
              alt="corresponding images"
              src={currentImage}
              key={currentImage}
              className={`w-full md:w-1/2 mt-6 md:mt-0 rounded-lg transition-opacity duration-700 ${
                fade ? "opacity-100" : "opacity-0"
              }`}
            />
          </section>
        </FadeInSection>
      </div>
    </>
  );
}

// className="w-full md:w-1/2 mt-6 md:mt-0 rounded-lg transition-opacity duration-300"
