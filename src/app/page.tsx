"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import HeaderLight from "@/components/header-light";
import Carousel from "@/components/carousel";

const Landing = () => {
  const route = useRouter();
  const handleProjects = () => {
    route.push("/projects-impact");
  };
  return (
    <div>
      <section className="relative bg-[url('/assets/images/windmill-landing.png')] bg-cover bg-center bg-no-repeat h-screen w-full">
        <div className="absolute top-0 left-0 w-full">
          <HeaderLight />
        </div>

        <div className="flex h-full w-full flex-col items-center justify-center text-center px-4">
          <h2 className="text-[73px] font-geist font-normal text-white leading-[83px]">
            Sustainable <br /> Energy Solutions
          </h2>

          <p className="font-geist font-extralight mt-6 max-w-2xl text-white text-lg">
            Based in Nigeria, RenCom is dedicated to delivering dependable,
            sustainable power solutions for communities and businesses, enabling
            economic growth and resilient development.
          </p>

          <div className="mt-8 flex gap-1.5">
            <div className="bg-[#E1FCAD] px-6 py-3 rounded-[30px]">
              Explore More
            </div>
            <button className="w-12 h-12 flex items-center justify-center bg-[#E1FCAD] rounded-full transition-colors duration-300">
              <Image
                src="/assets/icons/down-right-arrow.svg"
                width={20}
                height={20}
                alt=""
                className="cursor-pointer"
              />
            </button>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
          <p className="text-[18px] font-ptmono text-white">SCROLL DOWN</p>
        </div>
      </section>

      <section className="min-h-screen w-full py-16 flex flex-col items-center justify-center bg-[#D8E4CA]">
        <div className="flex flex-col items-center w-[80%] text-center mb-8">
          <p className="text-gray-600 font-geist font-medium">
            Powering Inclusive & Sustainable Energy Access
          </p>
          <h2 className="text-[28px] sm:text-[40px] font-extralight font-geist w-full sm:w-[80%] text-center text-gray-800">
            Driving{" "}
            <span className="font-newsreader italic tracking-tighter">
              Africa's Shift{" "}
            </span>{" "}
            to Renewable <br className="hidden sm:block" />
            Energy with Inclusion at its Core.{" "}
          </h2>
        </div>

        <div className="w-full mt-4 px-4 sm:ml-48 justify-start">
          <img src="/assets/icons/why-it-matters.svg" alt="why it matters" />
        </div>

        <div className="mt-10 w-[90%] sm:w-full md:w-[60%] min-h-[450px] bg-[#D8E4CA] flex flex-col sm:flex-row gap-3 rounded-[18px] p-2">
          <div className="flex sm:w-[44%] md:w-[44%] lg:w-[44%] w-full flex-row sm:flex-col md:flex-col lg:flex-col gap-3">
            <div className="flex-1 relative px-2 py-6 rounded-[18px] flex flex-col justify-between bg-[#C4D6B0]">
              <div className="flex items-center ml-5 justify-center w-8 h-8 rounded-full bg-[#0F3D1C] text-white font-bold">
                1
              </div>
              <p className="text-[#0F3D1C] text-[15px] px-7 leading-[24px] mt-2">
                There is a huge access to energy challenge faced by Nigerians,
                both from the availability and affordability perspectives.
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

            <div className="flex-1 px-2 py-6 rounded-[18px] flex flex-col justify-between bg-[#0B2520]">
              <div className="flex items-center ml-5 mb-2 justify-center w-8 h-8 rounded-full bg-[#0F3D1C] text-white font-bold">
                2
              </div>
              <p className="text-white font-light text-[15px] px-8 mt-2 leading-[24px]">
                Nigeria's Energy Transition Plan targets{" "}
                <br className="hidden sm:block" /> carbon neutrality by 2060
                while expanding <br className="hidden sm:block" /> modern energy
                access and decarbonizing <br className="hidden sm:block" /> key
                sectorsâ€"aligning closely with{" "}
                <br className="hidden sm:block" /> RenCom's approach.
              </p>
            </div>
          </div>

          <div className="flex-1 min-h-[300px] sm:h-full rounded-[18px] p-2 bg-[#A4C085] relative flex items-center justify-start">
            <div className="w-[60%] h-full">
              <Image
                src="/assets/images/storage.png"
                alt="Clean Cooking Solutions"
                width={200}
                height={200}
                className="w-full h-[90%] object-cover rounded-lg"
              />
            </div>

            <div className="absolute bottom-[4%] left-[10px] sm:left-[70px] bg-[#C4D6B0] rounded-lg shadow-lg w-[85%] sm:w-[80%] p-4 flex flex-col gap-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#0F3D1C] text-white font-bold">
                3
              </div>

              <p className="text-gray-800 text-sm leading-5">
                Across Sub-Saharan Africa, nearly 600 million people lack
                electricity access, and the World Bank's Mission 300 aims to
                connect 300 million people by 2030 through distributed renewable
                energy and electrification programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[url('/assets/images/2-girls.png')] bg-cover bg-center bg-no-repeat min-h-[500px] sm:min-h-[70vh] w-full flex flex-col justify-center items-center mt-16 sm:mt-0 py-16">
        <div className="flex h-full w-[90%] sm:w-[80%] flex-col items-center justify-center text-center px-4">
          <h2 className="font-medium leading-[22px] text-[16px] text-white">
            We love women
          </h2>

          <p className="text-white text-[18px] sm:text-[30px] font-geist font-extralight leading-[28px] sm:leading-[100%] mt-4 px-4">
            We approach every project with a gender lens to ensure{" "}
            <span className="font-newsreader italic font-extralight">
              women are <br className="hidden sm:block" /> actively
            </span>{" "}
            included as primary beneficiaries of the work we do - in{" "}
            <br className="hidden sm:block" />
            communities, in business and for work.
          </p>

          <div className="mt-8 gap-1.5 flex">
            <button
              onClick={handleProjects}
              className="bg-[#E1FCAD] px-5 py-2 font-normal text-[15px] rounded-[30px] hover:bg-[#122023] text-black"
            >
              View Projects{" "}
            </button>
            <button className="w-12 h-12 flex items-center justify-center bg-[#E1FCAD] rounded-full hover:bg-[#122023] transition-colors duration-300">
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

      <section className="min-h-screen w-full flex flex-col items-center py-16">
        <div className="w-[90%] sm:w-[80%] flex justify-start pt-4 sm:pt-20 pl-2">
          <div className="sm:w-[35%] w-full flex flex-col ">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-[8px] h-[8px] bg-[#30303070] rounded-full" />
              <h2>RenCom</h2>
            </div>
            <p className="text-[28px] sm:text-[38px] font-normal ">
              What We Offer
            </p>
            <p className="text-[16px] text-[#383838CC] font-light leading-[26px]">
              Innovative, affordable, and <span>people-centered </span>
              approaches to Africa's energy transition.
            </p>
          </div>
        </div>

        <div className="mb-16 sm:mb-32">
          <Carousel />
        </div>
      </section>
    </div>
  );
};

export default Landing;
