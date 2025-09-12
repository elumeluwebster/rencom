import React from "react";
import HeaderDark from "@/components/header-dark";

export default function Contact() {
  return (
    <>
      <HeaderDark />
      <div>
        <section className="relative h-auto mt-20 mb-24 px-4 sm:px-6 md:px-28 pb-40">
          <div className="flex flex-col md:flex-row gap-12 md:gap-16">
            <div className="flex-1">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-regular text-[#0F3D1C] leading-snug">
                Get Involved - <br /> Let's Build Together
              </h2>
            </div>

            <div className="flex-1">
              <div className="bg-[#F5F5F5] p-6 sm:p-8 rounded-2xl shadow-md">
                <h3 className="text-xl sm:text-2xl font-regular text-[#0F3D1C] mb-6 sm:mb-8">
                  Partner With Us
                </h3>
                <form className="space-y-6 sm:space-y-8">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="flex-1 p-3 border border-[#EDEDED] rounded text-black"
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="flex-1 p-3 border border-[#EDEDED] rounded text-black"
                    />
                  </div>

                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full p-3 border border-[#EDEDED] rounded text-black"
                  />

                  <textarea
                    placeholder="Message"
                    rows={5}
                    className="w-full p-3 border border-[#EDEDED] rounded text-black resize-none"
                  ></textarea>

                  <button
                    type="submit"
                    className="bg-[#387F1A] cursor-pointer text-white px-6 py-3 rounded-full w-full sm:w-auto"
                  >
                    Contact Us →
                  </button>
                </form>
              </div>
            </div>
          </div>

          <img
            src="/assets/images/topographic.png"
            alt=""
            className="hidden md:block absolute left-0 -bottom-24 pointer-events-none select-none w-[400px] h-auto"
          />
        </section>

        <section className="bg-[#D8E4CA] w-full py-16 px-4 sm:px-6 md:px-28">
          <div className="flex flex-col md:flex-row gap-12 md:gap-20">
            <div className="flex-1">
              <p className="text-[#0F3D1C] text-lg sm:text-xl font-base">
                Contact Us
              </p>
              <p className="text-[#0F3D1C] mt-4 text-3xl sm:text-4xl md:text-5xl font-regular leading-snug">
                Get In Touch <br /> with Us
              </p>
            </div>

            <div className="flex-1 flex flex-col gap-2">
              <p className="text-[#000] text-lg sm:text-xl font-semibold">
                Email
              </p>
              <div className="w-8 h-1 bg-[#000]"></div>
              <p className="text-[#0F3D1C] break-words">
                rencomlimited@gmail.com
              </p>
              <p className="text-[#000] mt-2">Assistance hours:</p>
              <p className="text-[#000]">
                Monday - Friday <br className="md:hidden" /> 6 am to 8 pm EST
              </p>
            </div>

            <div className="flex-1 flex flex-col gap-2">
              <p className="text-[#000] text-lg sm:text-xl font-semibold">
                Phone
              </p>
              <div className="w-8 h-1 bg-[#000]"></div>
              <p className="text-[#000]">(808) 998-34256</p>
              <p className="text-[#000] mt-2">Assistance hours:</p>
              <p className="text-[#000]">
                Monday - Friday <br className="md:hidden" /> 6 am to 8 pm EST
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
