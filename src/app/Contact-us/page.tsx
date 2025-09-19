"use client";
import React from "react";
import Image from "next/image";

import CustomSelect from "@/components/custom-select";
import HeaderDark from "@/components/header-dark";

export default function Contact() {
  const [reason, setReason] = React.useState<string>("");

  return (
    <>
      <HeaderDark />
      <div>
        <section className="relative h-auto mt-20 mb-24 px-4 sm:px-6 md:px-28 pb-40">
          <div className="flex flex-col md:flex-row gap-12 md:gap-16">
            <div className="flex-1 flex flex-col gap-4">
              <p className="text-[16px] text-[#0F3D1C]">Partner With Us</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-[#0F3D1C] leading-snug">
                Let&apos;s Power <br />
                Change Together{" "}
              </h2>

              <p className="text-[16px] text-[#000000] font-extralight leading-[30px]">
                We collaborate with investors, NGOs, <br /> Governments, and
                Communities to accelerate <br /> clean energy adoption.
              </p>

              <div className="flex flex-row mb-10 items-center gap-4 mt-4">
                <a href="#">
                  <Image
                    src="/assets/icons/gmail.svg"
                    alt="Gmail"
                    className="h-12 w-12"
                    width={48}
                    height={48}
                  />
                </a>
                <a href="#">
                  <Image
                    src="/assets/icons/youtube.svg"
                    alt="YouTube"
                    className="h-12 w-12"
                    width={48}
                    height={48}
                  />
                </a>
                <a href="#">
                  <Image
                    src="/assets/icons/twitter.svg"
                    alt="Twitter"
                    className="h-12 w-12"
                    width={48}
                    height={48}
                  />
                </a>
                <a href="#">
                  <Image
                    src="/assets/icons/instagram.svg"
                    alt="Instagram"
                    className="h-12 w-12"
                    width={48}
                    height={48}
                  />
                </a>
                <a href="#">
                  <Image
                    src="/assets/icons/facebook.svg"
                    alt="Facebook"
                    className="h-12 w-12"
                    width={48}
                    height={48}
                  />
                </a>
                <a href="#">
                  <Image
                    src="/assets/icons/linkedin.svg"
                    alt="LinkedIn"
                    className="h-12 w-12"
                    width={48}
                    height={48}
                  />
                </a>
              </div>
            </div>
            {/* forms  */}

            <div className="flex-1">
              <div className="bg-[#E6E8DD] p-6 sm:p-8 rounded-2xl shadow-md">
                <h3 className="text-[24px] font-regular text-[#000000] mb-6 sm:mb-8">
                  We&apos;re ready to hear all you <br /> have to say about
                  sustainable energy
                </h3>
                <form className="space-y-6 sm:space-y-8">
                  <label className="block">
                    <span className="block mb-2 text-[14px] font-extralight text-[#1A1A17]">
                      FULL NAME
                    </span>
                    <input
                      type="text"
                      placeholder="Your name here"
                      className="flex-1 w-full p-3 border border-[#EDEDED] rounded text-[#1A1A177A] resize-none bg-[#F4F3EA] focus:outline-none focus:ring-2 focus:ring-[#0F3D1C]"
                    />
                  </label>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <label className="block w-full sm:w-1/2">
                      <span className="block mb-2 text-[14px] font-extralight text-[#1A1A17]">
                        EMAIL
                      </span>
                      <input
                        type="text"
                        placeholder="Email address"
                        className="flex-1 w-full p-3 border border-[#EDEDED] rounded-lg text-[#1A1A177A] resize-none bg-[#F4F3EA] focus:outline-none focus:ring-2 focus:ring-[#0F3D1C]"
                      />
                    </label>

                    <label className="block w-full sm:w-1/2">
                      <span className="block mb-2 text-[14px] font-geist font-extralight text-[#1A1A17]">
                        SELECT REASON
                      </span>
                      <CustomSelect value={reason} onChange={setReason} />
                    </label>
                  </div>

                  <label className="block">
                    <span className="block mb-2 text-sm font-medium text-gray-700">
                      Message
                    </span>
                    <textarea
                      placeholder="Type your message here..."
                      className="w-full p-3 border border-[#EDEDED] resize-none bg-[#F4F3EA] text-[#1A1A177A] rounded-[16px] focus:outline-none focus:ring-2 focus:ring-[#0F3D1C]"
                      rows={10}
                    ></textarea>
                  </label>

                  <label className="flex items-center w-full space-x-2">
                    <input
                      type="checkbox"
                      className="h-5 w-5 cursor-pointer rounded-[8px] border border-[#1A1A1729] bg-[#E6E8DD] appearance-none checked:bg-[#E6E8DD] checked:after:content-['✓'] checked:after:text-black checked:after:text-sm checked:after:font-bold checked:after:flex checked:after:items-center checked:after:justify-center checked:after:h-full checked:after:w-full"
                    />
                    <span className="text-[12px] font-normal text-[#1A1A17]">
                      I agree to let RenCom securely store my details for
                      communication.
                    </span>
                  </label>
                  <div className="flex justify-between items-center">
                    <p className="w-[40%] text-[12px] font-extralight">
                      You&apos;ll hear from us within 1–2 days. <br />
                      We&apos;re excited to connect!
                    </p>

                    <button
                      type="submit"
                      onClick={() => {}}
                      className="bg-[#B6E400] cursor-pointer text-black text-[13px] p-3 rounded-[32px] w-[200px] sm:w-auto"
                    >
                      Send message{" "}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <Image
            src="/assets/images/topographic.png"
            alt=""
            width={400}
            height={240}
            className="hidden md:block absolute left-0 -bottom-24 pointer-events-none select-none w-[400px] h-[240px] object-cover object-top overflow-hidden"
          />
        </section>

        <section className="bg-[#D8E4CA] w-full py-36 px-4 sm:px-6 md:px-10">
          <div className="flex flex-col md:flex-row gap-12 md:gap-20 px-10 md:px-4">
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
