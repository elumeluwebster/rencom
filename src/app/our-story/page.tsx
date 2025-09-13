import React from "react";
import HeaderDark from "@/components/header-dark";
import Image from "next/image";

const OurStory = () => {
  return (
    <>
      <HeaderDark />
      <div className="mt-24">
        <section className="  min-h-screen w-full flex flex-col gap-30 ">
          {/* hero text  */}
          <div className="text-center flex flex-col items-center gap-4">
            <h2 className=" font-normal text-[60px] font-newsreader leading-[60px]">
              Our Story
            </h2>
            <p className="text-[16px] leading-[24px] font-geist">
              Our story is one of passion and persistence—rooted in Africa,
              driven <br />
              by innovation, and dedicated to creating sustainable energy <br />
              solutions that transform lives.
            </p>

            <div className="min-w-[150px] flex items-center p-2  border border-[#aaaaa9] rounded-[32px]  cursor-pointer">
              {/* Left image container */}
              <div className="relative w-[65px] h-[46px] rounded-full overflow-hidden">
                {/* Background image */}
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage: "url('/assets/images/malwena.png')",
                  }}></div>
                {/* Green dot */}
                <div className="absolute bottom-[10%] right-[5%] w-4 h-4 bg-[#B6E400] rounded-full  border-white border-2 z-10"></div>
              </div>

              {/* Right text */}
              <span className="ml-3 text-[#1A1A17] text-[15px] font-normal">
                Book a call{" "}
              </span>
            </div>
          </div>

          {/* hero images  */}
          <div className="mb-60 ">
            <div className=" w-full sm:w-[70%] mx-auto h-[475px] flex">
              {/* Left image */}
              <div
                className="flex-1 bg-cover bg-center rounded-lg"
                style={{
                  backgroundImage: "url('/assets/images/our-story1.png')",
                }}></div>

              {/* Right image (pushed down) */}
              <div
                className="flex-1 bg-cover bg-center rounded-lg relative top-[30%] ml-4"
                style={{
                  backgroundImage: "url('/assets/images/our-story1.png')",
                }}></div>
            </div>
          </div>
        </section>

        <section className="  min-h-screen w-full flex flex-col gap-10 p-4 ">
          <div className="flex items-center gap-1">
            <div className=" w-4 h-4 bg-[#B6E400] rounded-full  border-white border-2 z-10"></div>
            <p className="font-geist text-[12.2px] leading-[12px] tracking-[1px]">
              OUR STORY
            </p>
          </div>
          <h2 className=" text-[48px] leading-[51px] text-[#1A1A17] font-geist">
            From idea to <span>sustainable</span> success
          </h2>

          <div className="flex flex-wrap gap-4 w-full mx-auto mb-20">
            {/* Image 1 */}
            <div
              className="flex-1 basis-[calc(50%-0.5rem)] h-[450px] rounded-lg bg-cover bg-center"
              style={{
                backgroundImage: "url('/assets/images/sustainable1.png')",
              }}></div>

            {/* Image 2 */}
            <div
              className="flex-1 basis-[calc(50%-0.5rem)] h-[450px] rounded-lg bg-cover bg-center"
              style={{
                backgroundImage: "url('/assets/images/sustainable2.png')",
              }}></div>

            {/* Image 3 */}
            <div
              className="flex-1 basis-[calc(50%-0.5rem)] h-[450px] rounded-lg bg-cover bg-center"
              style={{
                backgroundImage: "url('/assets/images/sustainable3.png')",
              }}></div>

            {/* Image 4 */}
            <div
              className="flex-1 basis-[calc(50%-0.5rem)] h-[450px] rounded-lg bg-cover bg-center flex justify-end items-end p-4"
              style={{
                backgroundImage: "url('/assets/images/sustainable4.png')",
              }}>
              <div className=" flex gap-1 items-center ">
                <p className="text-[14px] leading-[20px] text-[#F4F3EA]">
                  {" "}
                  Be a Partner
                </p>
                <button className="w-12 h-12 flex items-center justify-center bg-[#B6E400] rounded-full transition-colors duration-300">
                  <Image
                    src="/assets/icons/rightArrow.svg"
                    width={40}
                    height={40}
                    alt=""
                    className="cursor-pointer mt-4"
                  />
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default OurStory;
