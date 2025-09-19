"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Footer = () => {
  const route = useRouter();

  const handleProjects = () => {
    route.push("/Projects-impact");
  };

  const handleContact = () => {
    route.push("/Contact-us");
  };

  return (
    <section className="overscroll-y-none">
      <section>
        <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px]">
          <Image
            className="object-cover"
            src="/assets/images/footer-img.png"
            alt="SUSTAINABLE ENERGY FOR ALL"
            fill
            priority
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
            <div className="flex flex-row gap-1.5 items-center mb-4">
              <div className="rounded-full bg-[#B6E400] h-2 w-2" />
              <p className="text-[#F4F3EA] text-[10px] sm:text-xs font-geist font-extralight">
                SUSTAINABLE ENERGY FOR ALL
              </p>
            </div>

            <h2 className="text-white font-newsreader font-light tracking-tighter text-xl sm:text-3xl md:text-5xl leading-tight">
              Ready to build the <br /> future of energy?
            </h2>

            <div className="mt-6 flex flex-row justify-center gap-4 w-full max-w-sm mx-auto">
              <button
                onClick={handleContact}
                className="w-28 sm:w-40 px-4 sm:px-6 py-2 sm:py-3 font-geist rounded-full text-xs sm:text-base text-[#F4F3EA] bg-[#1A1A1745] hover:bg-[#1A1A1795] transition duration-200 cursor-pointer"
              >
                Contact Us
              </button>
              <button
                onClick={handleProjects}
                className="w-28 sm:w-40 px-4 sm:px-6 py-2 sm:py-3 font-geist rounded-full text-xs sm:text-base bg-[#B6E400] hover:bg-[#7f9f00] transition duration-200 cursor-pointer"
              >
                View Projects
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#0B2E15] font-geist mt-0 pt-8 pb-0">
        <div className="px-2 max-w-screen-xl mx-auto">
          <hr className="border-none h-[0.5px] mt-10 bg-[#134E24] mb-6" />

          <div className="flex flex-col md:flex-row justify-between items-start gap-16 px-3 md:px-0 pb-12">
            <div className="text-[#fefefb] font-geist font-light text-3xl md:text-4xl max-w-full md:max-w-xl">
              Sustainable <br />
              <p className="font-newsreader italic">Energy Solutions</p>
              <div>
                <div className="relative w-32 h-12 mt-4">
                  <Image
                    src="/assets/icons/logo-light.svg"
                    alt="logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-sm mt-8">© Copyright RenCom</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row w-full md:w-2/3 gap-6 bg-[#0F3D1C] rounded-3xl px-4 py-6 md:px-4 md:py-3">
              <div className="flex-1 px-1 sm:px-2 flex flex-col justify-center">
                <h3 className="text-[#fefefb] font-extralight font-geist text-base sm:text-lg md:text-xl mb-4 md:mb-8 leading-snug">
                  Need to talk about sustainable energy?
                </h3>

                <div className="flex flex-col sm:flex-row items-stretch gap-3 mb-4">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="flex-1 p-3 rounded-xl bg-[#0B2E15] text-white placeholder-[#fefefb] font-extralight focus:outline-none transition md:w-1/6"
                  />
                  <button className="sm:w-[140px] text-sm w-full py-3 px-4 bg-[#147A06] text-white rounded-full hover:bg-[#0A5E2D] transition duration-200 font-normal cursor-pointer">
                    Submit
                  </button>
                </div>

                <p className="mt-1 text-[#557C4C] text-xs font-light">
                  We never share your information with third parties.
                </p>
              </div>

              <div className="hidden md:flex md:w-1/3 h-full overflow-hidden rounded-md items-center justify-end">
                <Image
                  src="/assets/images/grass-letter.png"
                  alt="Newsletter Illustration"
                  className="w-[70%] h-auto object-contain"
                  width={500}
                  height={300}
                />
              </div>
            </div>
          </div>

          <hr className="border-none h-[0.5px] mt-10 bg-[#134E24] mb-6" />

          <div className="text-[#bcbcbc] font-geist font-extralight pt-4 text-left px-6 md:px-0.5 text-sm leading-relaxed">
            <p>
              RenCom is committed to{" "}
              <span className="font-bold text-white">
                Sustainable Development Goal 7
              </span>
              . In line with Target 7.1, we expand universal access to modern
              energy services through off-grid and home solar systems as well as
              mini-grids, supporting communities where the grid is absent.
              Aligned with Target 7.2, our emphasis on solar and clean cooking
              technologies increases the share of renewable energy and advances
              the global shift toward sustainability
            </p>
          </div>

          <div className="flex justify-center items-center px-4 overflow-x-auto pb-0 mb-0 bottom-20">
            <div className="relative mt-10 w-[1280px] sm:w-[1200px] md:w-[1350px] h-[80px] sm:h-[120px] md:h-[280px]">
              <Image
                src="/assets/images/rencom-logo.png"
                alt="Rencom Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
