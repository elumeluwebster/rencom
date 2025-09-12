import React from "react";
import HeaderLight from "@/components/header-light";
import Image from "next/image";
import Carousel from "@/components/carousel";

const Landing = () => {
  return (
    <div>
      <section className="relative bg-[url('/assets/images/windmill-landing.png')] bg-cover bg-center bg-no-repeat h-screen w-full">
        <div className="absolute top-0 left-0 w-full">
          <HeaderLight />
        </div>

        <div className="flex h-full w-full flex-col items-center justify-center text-center px-4">
          <h2 className="text-[73px] text-white leading-[83px] font-bold">
            Sustainable Energy <br />
            Solutions
          </h2>

          <p className="mt-6 max-w-2xl text-white text-lg">
            Based in Nigeria, RenCom is dedicated to delivering dependable,
            sustainable power solutions for communities and businesses, enabling
            economic growth and resilient development.
          </p>

          <div className="mt-8 flex gap-3">
            <button className="bg-[#E1FCAD] p-2 rounded-[30px] hover:bg-[#122023] text-black">
              Start a Project
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

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
          <p className="text-[18px] text-white">Scroll Down</p>
        </div>
      </section>

      <section className="h-screen w-full flex flex-col items-center justify-center bg-[#D8E4CA]">
        <div className="flex flex-col items-center w-[80%] text-center">
          <p className="text-gray-600">
            Powering Inclusive & Sustainable Energy Access
          </p>
          <h2 className="text-[40px] font-bold  w-[80%] text-center text-gray-800">
            Driving <span>Africa’s Shift </span> to Renewable <br />
            Energy with Inclusion at its Core.{" "}
          </h2>
        </div>

        <div className="w-full ml-20">
          <p className=" text-start hidden sm:block md:hidden lg:block">
            Why It Matters
          </p>
        </div>

        <div className="mt-10 w-full sm:w-full md:w-[60%] h-[450px] bg-[#D8E4CA] flex flex-col sm:flex-row gap-3 rounded-[18px] p-2">
          <div className="flex sm:w-[44%] md:w-[44%] lg:w-[44%] w-full flex-row sm:flex-col md:flex-col lg:flex-col gap-3">
            <div className="flex-1 relative px-2 py-6 rounded-[18px] flex flex-col justify-between bg-[#C4D6B0]">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#0F3D1C] text-white font-bold">
                1
              </div>
              <p className="text-[#0F3D1C] text-[15px] leading-[24px] mt-2">
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
                className=" absolute left-[-150px] bottom-[100px]"
              />
            </div>

            <div className="flex-1 px-2 py-6 rounded-[18px] flex flex-col justify-between bg-[#0B2520]">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#0F3D1C] text-white font-bold">
                2
              </div>
              <p className="text-white text-[15px] mt-2 leading-[24px]">
                Nigeria’s Energy Transition Plan targets carbon neutrality by
                2060 while expanding modern energy access and decarbonizing key
                sectors—aligning closely with RenCom’s approach.
              </p>
            </div>
          </div>

          <div className="flex-1 h-full rounded-[18px] p-2 bg-[#A4C085] relative flex items-center justify-start">
            <div className="w-[60%] h-full">
              <Image
                src="/assets/images/clean-cooking-solutions.png"
                alt="Clean Cooking Solutions"
                width={200}
                height={200}
                className="w-full h-[90%] object-cover rounded-lg"
              />
            </div>

            <div className="absolute bottom-[4%]  left-[70px] bg-white rounded-lg shadow-lg w-[80%] p-4 flex flex-col gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#0F3D1C] text-white font-bold">
                3
              </div>

              <p className="text-gray-800 text-sm leading-5">
                Across Sub-Saharan Africa, nearly 600 million people lack
                electricity access, and the World Bank’s Mission 300 aims to
                connect 300 million people by 2030 through distributed renewable
                energy and electrification programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[url('/assets/images/2-girls.png')] bg-cover bg-center bg-no-repeat h-[70vh] w-full flex flex-col justify-center items-center mt-60 sm:mt-0 md:mt-0 lg:mt-0">
        <div className="flex h-full w-[80%] flex-col items-center justify-center text-center px-4">
          <h2 className="font-medium leading-[22px] text-[16px] text-white">
            We love women
          </h2>

          <p className="font-light text-[30px] leading-[100%] mt-2 text-white">
            We approach every project with a gender lens to ensure women are
            actively included as primary beneficiaries of the work we do - in
            communities, in business and for work.
          </p>

          <div className="mt-8 flex ">
            <button className="bg-[#E1FCAD] p-2 font-normal text-[15px] rounded-[30px] hover:bg-[#122023] text-black">
              View Leadership{" "}
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

      <section className="h-screen w-full flex flex-col items-center ">
        <div className=" w-[80%] flex justify-start pt-20 pl-2">
          <div className="sm:w-[35%] w-full flex flex-col ">
            <div>
              <div className="w-[8px] h-[8px] rounded-full"></div>
              <h2>RenCom</h2>
            </div>
            <p className=" text-[38px] font-normal ">What We Offer</p>
            <p className="text-[16px] font-light leading-[26px]">
              Innovative, affordable, and <span>people-centered </span>
              approaches to Africa’s energy transition.
            </p>
          </div>
        </div>

        <Carousel />
      </section>
    </div>
  );
};

export default Landing;
