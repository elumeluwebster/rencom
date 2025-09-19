"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { useRouter } from "next/navigation";

import HeaderLight from "@/components/header-light";
import FadeInSection from "@/utils/utils";
import Slider from "@/components/slider";

const Landing = () => {
  const route = useRouter();
  const handleProjects = () => {
    route.push("/Projects-impact");
  };

  const nextSectionRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    nextSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className=" overscroll-y-none">
      <section className="relative bg-gradient-to-b from-[#00330F] to-[#000000] h-[700px] sm:h-[1000px] md:h-[900px] lg:h-[1150px] w-full">
        <div className="absolute top-0 left-0 w-full z-50">
          <HeaderLight />
        </div>

        <div className="flex pt-60 w-full flex-col items-center justify-center text-center px-4 div1">
          <h2 className="text-[73px] font-geist font-semibold text-white leading-[83px]">
            Sustainable <br /> <span className="">Energy Solutions</span>
          </h2>

          <p className="font-geist font-thin mt-10 max-w-2xl text-[#F2F2F2] text-lg">
            Based in Nigeria, RenCom is dedicated to delivering dependable,
            sustainable <br /> power solutions for communities and businesses,
            enabling economic growth <br /> and resilient development.
          </p>

          <div className="mt-13 flex flex-row gap-4 z-50">
            <div
              onClick={handleClick}
              className="bg-[#EAFE45] hover:bg-[#efff62] items-center justify-between flex flex-row px-6 gap-5 py-2 rounded-[30px] cursor-pointer"
            >
              <span className="text-[#00330F]">Explore More</span>
              <div className="w-10 h-10 -mr-4 flex items-center justify-center bg-[#00330F] rounded-full transition-colors duration-300">
                <Image
                  src="/assets/icons/down-right-arrow-white.svg"
                  width={20}
                  height={20}
                  alt=""
                  className="cursor-pointer stroke-white fill-white"
                />
              </div>
            </div>

            <div
              onClick={handleProjects}
              className="bg-[#EFF3DF15] hover:bg-[#95919115] border-[0.5px] border-[#EFF3DF85] items-center justify-between flex flex-row px-6 gap-5 py-2 rounded-[30px] cursor-pointer"
            >
              <span className="text-[#FFF]">See Projects</span>
              <div className="w-10 h-10 -mr-4 flex items-center justify-center bg-[#EFF3DF] rounded-full transition-colors duration-300">
                <Image
                  src="/assets/icons/new-up-right-arrow.svg"
                  width={20}
                  height={20}
                  alt=""
                  className="cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-[1200px] z-0 hidden sm:block">
          <Image
            src="/assets/images/group-photo.png"
            alt="group pic"
            fill
            className="object-contain object-bottom"
          />
        </div>
      </section>

      <FadeInSection>
        <section
          ref={nextSectionRef}
          className="min-h-screen w-full py-16 flex flex-col items-center justify-center bg-gradient-to-b from-[#E4E1CA] to-[#D8E4CA]"
        >
          <div className="flex flex-col items-center w-[80%] text-center mb-8 mt-24">
            <p className="text-[#0F3D1C] font-geist font-medium">
              Powering Inclusive & Sustainable Energy Access
            </p>
            <h2 className="mt-6 text-[28px] sm:text-[40px] font-extralight font-geist w-full sm:w-[80%] text-center text-[#0F3D1C]">
              Driving{" "}
              <span className="font-newsreader italic tracking-tighter">
                Africa&apos;s Shift{" "}
              </span>{" "}
              to Renewable <br className="hidden sm:block" />
              Energy with Inclusion at its Core.{" "}
            </h2>
          </div>

          <div className="w-full mt-4 px-4 sm:ml-48 justify-start">
            <Image
              src="/assets/icons/why-it-matters.svg"
              height={100}
              width={100}
              alt="why it matters"
            />
          </div>

          <div className="mt-10 w-[90%] sm:w-full md:w-[60%] min-h-[450px] bg-[#D8E4CA] flex flex-col sm:flex-row gap-3 rounded-[18px] p-2">
            <div className="flex sm:w-[44%] md:w-[44%] lg:w-[44%] w-full flex-row sm:flex-col md:flex-col lg:flex-col gap-3">
              <div className="flex-1 relative px-2 py-6 rounded-[18px] flex flex-col justify-between bg-[#C4D6B0]">
                <div className="flex items-center ml-5 justify-center w-8 h-8 rounded-full bg-[#0F3D1C] text-white font-bold">
                  <Image
                    src="/assets/icons/energy-challenge.svg"
                    width={25}
                    height={25}
                    alt="bulb"
                  />
                </div>
                <p className="text-[#0F3D1C] text-[15px] px-7 leading-[24px] mt-2">
                  There is a huge access to{" "}
                  <strong>energy challenge faced by Nigerians</strong>, both
                  from the availability and affordability perspectives.
                  Alternative solutions are neither healthy, affordable, nor
                  sustainable.
                </p>
                <Image
                  src="/assets/icons/curved-arrow.svg"
                  alt="Clean Cooking Solutions"
                  width={100}
                  height={100}
                  className="absolute left-[-150px] bottom-[100px] hidden lg:block"
                />
              </div>

              <div className="flex-1 px-2 py-6 rounded-[18px] flex flex-col justify-between bg-[#F0DC83AD]">
                <div className="flex items-center ml-5 mb-2 justify-center w-8 h-8 rounded-full bg-[#0F3D1C] text-white font-bold">
                  <Image
                    src="/assets/icons/carbon-neutral.svg"
                    width={23}
                    height={23}
                    alt="carbon neutral"
                  />
                </div>
                <p className="text-[#1B1700] font-light text-[15px] px-8 mt-2 leading-[24px]">
                  Nigeria&apos;s Energy Transition Plan targets{" "}
                  <br className="hidden sm:block" />{" "}
                  <strong className="font-bold">carbon neutrality</strong> by
                  2060 while expanding <br className="hidden sm:block" /> modern
                  energy access and decarbonizing{" "}
                  <br className="hidden sm:block" /> key sectors&mdash;aligning
                  closely with <br className="hidden sm:block" /> RenCom&apos;s
                  approach.
                </p>
              </div>
            </div>

            <div className="flex-1 min-h-[300px] sm:h-full rounded-[18px] p-2 bg-[#A4C085] relative flex items-center justify-start">
              <div className="w-[60%] h-full pb-8">
                <Image
                  src="/assets/images/sub-sah.png"
                  alt="Clean Cooking Solutions"
                  width={200}
                  height={200}
                  className="w-full h-[80%] object-cover rounded-lg"
                />
              </div>

              <div className="absolute bottom-[1.5%] left-[10px] sm:left-[90px] bg-[#F1EDDA] rounded-lg shadow-lg w-[85%] sm:w-[80%] p-4 flex flex-col gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#0F3D1C] text-white font-bold">
                  <Image
                    src="/assets/icons/bulb.svg"
                    width={23}
                    height={23}
                    alt="bulb"
                  />
                </div>

                <p className="text-gray-800 text-sm px-3 leading-6">
                  Across Sub-Saharan Africa,{" "}
                  <strong className="font-bold">
                    nearly 600 million people lack electricity access
                  </strong>
                  , and the World Bank&apos;s Mission 300 aims to connect 300
                  million people by 2030 through distributed renewable energy
                  and electrification programs.
                </p>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section className="bg-[url('/assets/images/we-love-women.png')] bg-cover bg-center bg-no-repeat min-h-[500px] sm:min-h-[83vh] w-full flex flex-col justify-center items-center mt-16 sm:mt-0 py-16">
          <div className="flex h-full w-[90%] sm:w-[80%] flex-col items-center justify-center text-center px-4">
            <h2 className="font-medium leading-[22px] text-[16px] text-white">
              We love women
            </h2>

            <p className="text-white text-[18px] sm:text-[30px] font-geist font-extralight leading-[28px] sm:leading-[100%] mt-4 px-4">
              We approach every project with a gender lens to ensure{" "}
              <span className="font-newsreader italic font-hairline">
                women are <br className="hidden sm:block" /> actively
              </span>{" "}
              included as primary beneficiaries of the work we do - in{" "}
              <br className="hidden sm:block" />
              communities, in business and for work.
            </p>

            <div className="mt-8 gap-0 flex">
              <button
                onClick={handleProjects}
                className="bg-[#E1FCAD] px-5 py-2 font-normal text-[15px] rounded-[30px] text-black cursor-pointer"
              >
                View Projects
              </button>
              <button className="w-12 h-12 flex items-center justify-center bg-[#E1FCAD] rounded-full transition-colors duration-300 cursor-pointer">
                <Image
                  src="/assets/icons/up-right-arrow.svg"
                  width={20}
                  height={20}
                  alt="Up-right arrow"
                />
              </button>
            </div>
          </div>
        </section>
      </FadeInSection>
      <FadeInSection>
        <section className="min-h-screen w-full flex flex-col items-center py-16">
          <div className="w-[90%] sm:w-[80%] flex justify-start pt-4 sm:pt-20 pl-2">
            <div className="sm:w-[35%] w-full flex flex-col">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-[8px] h-[8px] bg-[#30303070] rounded-full" />
                <h2>RenCom</h2>
              </div>
              <p className="text-[28px] sm:text-[38px] font-normal">
                What We Offer
              </p>
              <p className="text-[16px] text-[#383838CC] font-light leading-[26px]">
                Innovative, affordable, and{" "}
                <span className="font-newsreader italic font-extralight">
                  people-centered{" "}
                </span>{" "}
                <br />
                approaches to Africa&apos;s energy transition.
              </p>
            </div>
          </div>

          <div className="mb-16 sm:mb-32">
            <Slider />
          </div>
        </section>
      </FadeInSection>
    </div>
  );
};

export default Landing;
