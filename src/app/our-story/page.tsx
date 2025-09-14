import React from "react";

import { aboutData } from "@/utils/store";
import HeaderDark from "@/components/header-dark";

const OurStory = () => {
  return (
    <>
      <HeaderDark />
      <div className="mt-24">
        <section className="min-h-screen w-full flex flex-col gap-30">
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

            <div className="min-w-[120px] flex items-center px-2 py-1.5 border border-[#aaaaa9] rounded-[24px] cursor-pointer">
              <div className="relative w-[45px] h-[32px] rounded-full overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage: "url('/assets/images/malwena.png')",
                  }}
                />
                <div className="absolute bottom-[8%] right-[4%] w-3 h-3 bg-[#B6E400] rounded-full border-white border-2 z-10" />
              </div>

              <span className="ml-2 text-[#1A1A17] font-light text-[13px]">
                Book a call
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
            {aboutData.map((items) => (
              <div
                key={items.num}
                className={`group relative flex-1 basis-full h-[350px] rounded-2xl overflow-hidden bg-cover bg-center
      sm:basis-[calc(50%-0.5rem)] sm:h-[450px]`}
                style={{
                  backgroundImage: `url('/assets/images/sustainable${items.num}.png')`,
                }}
              >
                <div className="absolute inset-0 bg-black/40 z-0"></div>

                <div className="relative z-10 w-full text-white p-3 mt-auto transition-all duration-400 group-hover:-translate-y-4 flex flex-col justify-end h-full">
                  <div className="w-fit">
                    <p className="inline-block text-[26px] text-[#a4a0a0] font-bold font-anton transition-colors duration-300 group-hover:bg-black group-hover:text-white group-hover:p-2 rounded">
                      {items.Tittle}
                    </p>
                  </div>

                  <div
                    className="flex items-start gap-2 mt-1 opacity-0 max-h-0 overflow-hidden 
        transition-all duration-300 group-hover:opacity-100 group-hover:max-h-28"
                  >
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
};

export default OurStory;
