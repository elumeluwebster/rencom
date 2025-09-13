import React from "react";
import { FiChevronRight } from "react-icons/fi";

import HeaderDark from "@/components/header-dark";

const OurStory = () => {
  return (
    <>
      <HeaderDark />
      <div className="mt-24">
        <section className="min-h-screen w-full flex flex-col gap-30">
          {/* hero text  */}
          <div className="text-center flex flex-col items-center gap-4">
            <h2 className="font-normal tracking-tighter text-[60px] sm:text-[40px] xs:text-[28px] font-newsreader leading-[60px] sm:leading-[44px] xs:leading-[32px]">
              Our Story
            </h2>
            <p className="text-[16px] sm:text-[16px] xs:text-[12px] leading-[24px] sm:leading-[24px] font-geist">
              Our story is one of passion and persistence—rooted in Africa,
              driven <br />
              by innovation, and dedicated to creating sustainable energy <br />
              solutions that transform lives.
            </p>

            <div className="min-w-[150px] flex items-center px-4 py-2.5  border border-[#aaaaa9] rounded-[32px]  cursor-pointer">
              <div className="relative w-[65px] h-[46px] rounded-full overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage: "url('/assets/images/malwena.png')",
                  }}
                ></div>
                <div className="absolute bottom-[10%] right-[5%] w-4 h-4 bg-[#B6E400] rounded-full  border-white border-2 z-10"></div>
              </div>

              <span className="ml-3 text-[#1A1A17] font-light text-[15px]">
                Book a call{" "}
              </span>
            </div>
          </div>

          <div className="mb-60">
            <div className="w-full sm:w-[70%] mx-auto px-6 sm:px-0 h-[300px] sm:h-[475px] flex">
              <div
                className="flex-1 bg-cover bg-center rounded-lg"
                style={{
                  backgroundImage: "url('/assets/images/our-story1.png')",
                }}
              />

              <div
                className="flex-1 bg-cover bg-center rounded-lg relative top-[30%] ml-4"
                style={{
                  backgroundImage: "url('/assets/images/our-story2.png')",
                }}
              />
            </div>
          </div>
        </section>

        <hr className="px-4 mx-5 border-t-2 border-[#c4c4c4]" />

        <section className="min-h-screen w-full flex mt-4 flex-col gap-10 p-4">
          <div className="flex items-center gap-1 px-2">
            <div className="w-4 h-4 bg-[#B6E400] rounded-full  border-white border-2 z-10"></div>
            <p className="font-geist text-[12.2px] leading-[12px] tracking-[1px]">
              OUR STORY
            </p>
          </div>
          <h2 className="text-[48px] px-2 font-light tracking-tight leading-[51px] text-[#1A1A17] font-geist">
            From idea to{" "}
            <span className="font-newsreader italic tracking-tighter font-light">
              sustainable
            </span>{" "}
            success
          </h2>

          <div className="flex flex-wrap gap-4 w-full px-4 mb-20">
            {[1, 2, 3, 4].map((num) => (
              <div
                key={num}
                className={`flex-1 basis-full h-[350px] rounded-2xl overflow-hidden bg-cover bg-center
                 sm:basis-[calc(50%-0.5rem)] sm:h-[450px]`}
                style={{
                  backgroundImage: `url('/assets/images/sustainable${num}.png')`,
                }}
              >
                {num === 4 && (
                  <div className="flex justify-end items-end p-4 h-full w-full">
                    <div className="flex gap-1 items-center bg-black bg-opacity-30 p-2 rounded">
                      <p className="text-[14px] leading-[20px] text-[#F4F3EA]">
                        Be a Partner
                      </p>
                      <button className="w-8 h-8 flex items-center justify-center bg-[#B6E400] rounded-full transition-colors duration-300">
                        <FiChevronRight />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* <div className="flex flex-wrap gap-4 w-full px-4 mb-20">
            <div
              className="flex-1 basis-[calc(50%-0.5rem)] h-[450px] rounded-2xl overflow-hidden bg-cover bg-center"
              style={{
                backgroundImage: "url('/assets/images/sustainable1.png')",
              }}
            />

            <div
              className="flex-1 basis-[calc(50%-0.5rem)] h-[450px] rounded-2xl overflow-hidden bg-cover bg-center"
              style={{
                backgroundImage: "url('/assets/images/sustainable2.png')",
              }}
            />

            <div
              className="flex-1 basis-[calc(50%-0.5rem)] h-[450px] rounded-2xl overflow-hidden bg-cover bg-center"
              style={{
                backgroundImage: "url('/assets/images/sustainable3.png')",
              }}
            />

            <div
              className="flex-1 basis-[calc(50%-0.5rem)] h-[450px] rounded-2xl overflow-hidden bg-cover bg-center flex justify-end items-end p-4"
              style={{
                backgroundImage: "url('/assets/images/sustainable4.png')",
              }}
            >
              <div className="flex gap-1 items-center">
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
          </div> */}
        </section>
      </div>
    </>
  );
};

export default OurStory;
