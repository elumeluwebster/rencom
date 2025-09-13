import React from "react";

import HeaderDark from "@/components/header-dark";
import Image from "next/image";

export default function Contact() {
  return (
    <>
      <HeaderDark />
      <div>
        <section className="relative h-auto mt-20 mb-24 px-4 sm:px-6 md:px-28 pb-40">
          <div className="flex flex-col md:flex-row gap-12 md:gap-16">
            <div className="flex-1 flex flex-col gap-4  ">
              <p className=" tex-[16px] text-[#0F3D1C]">Partner With Us</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-regular text-[#0F3D1C] leading-snug">
                Let’s Power <br />
                Change Together{" "}
              </h2>

              <p className="text-[16px] text-[#000000] font-light leading-[30px]">
                We collaborate with investors, NGOs, governments, and <br />
                communities to accelerate clean energy adoption. Partner <br />
                with us to create lasting impact for people and the planet.
              </p>

              <div className=" w-full md:w-[50%] flex flex-col   gap-4 rounded-[16px] p-2 bg-[#3F403C] mt-8">
                <div className="flex gap-2">
                  <img src="/assets/icons/star.svg" alt="" />
                  <p className="text-[12px] text-white">4.5</p>
                </div>
                <p className="text-white leading-[22px] text-[14px] font-light">
                  RenCom transformed our ideas <br />
                  into real solutions that improved access and reduced costs.
                </p>

                <div className="w-full flex justify-between items-center">
                  <div className="flex-2 flex flex-col">
                    <p className="text-[12px]">— Malwina Juice</p>
                    <p className="text-[12px] text-[#F4F3EA]">
                      Founder of RenCom®
                    </p>
                  </div>
                  <div className="flex-1 rounded-[32px]">
                    <Image
                      src="/assets/images/malwena.png"
                      width={100}
                      height={100}
                      objectFit="cover"
                      alt="malwana picture"
                      className="rounded-[32px]"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* forms  */}

            <div className="flex-1">
              <div className="bg-[#E6E8DD] p-6 sm:p-8 rounded-2xl shadow-md">
                <h3 className="text-[18px]  font-regular text-[#000000] mb-6 sm:mb-8">
                  Got something in mind? <br />
                  Let’s bring it to life—begin with a hello.{" "}
                </h3>
                <form className="space-y-6 sm:space-y-8">
                  <label className="block">
                    <span className="block mb-2 text-[14px] font-normal text-[#1A1A17]">
                      Full Name
                    </span>
                    <input
                      type="text"
                      placeholder="Your name here"
                      className="w-full p-3 border border-[#EDEDED] rounded text-black resize-none bg-[#F4F3EA] focus:outline-none focus:border-[#387F1A]"
                    />
                  </label>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <label className="block">
                      <span className="block mb-2 text-[14px] font-normal text-[#1A1A17]">
                        Email{" "}
                      </span>
                      <input
                        type="text"
                        placeholder="Email address"
                        className="flex-1 w-full p-3 border border-[#EDEDED] rounded text-black resize-none bg-[#F4F3EA] focus:outline-none focus:border-[#387F1A]"
                      />
                    </label>

                    <label className="block">
                      <span className="block mb-2 text-[14px] font-normal text-[#1A1A17]">
                        Partnership Goal{" "}
                      </span>
                      <input
                        type="text"
                        placeholder="Select a goal"
                        className="flex-1 w-full p-3 border border-[#EDEDED] rounded  resize-none bg-[#F4F3EA] text-black focus:outline-none focus:border-[#387F1A]"
                      />
                    </label>
                  </div>

                  <label className="block">
                    <span className="block mb-2 text-sm font-medium text-gray-700">
                      Message
                    </span>
                    <textarea
                      placeholder="Type your message here..."
                      className="w-full p-3 border border-[#EDEDED]  resize-none bg-[#F4F3EA] text-black  rounded-[16px] focus:outline-none focus:border-[#387F1A]"
                      rows={8}></textarea>
                  </label>

                  <label className="flex items-center w-full space-x-2">
                    <input
                      type="checkbox"
                      className="mt-1 h-5 w-5  border-gray-300 rounded-[8px] focus:ring-green-500 [accent-color:#387F1A]"
                    />
                    <span className="text-[12px] font-normal text-[#1A1A17]">
                      I agree to let RenCom securely store my details for
                      communication.
                    </span>
                  </label>
                  <div className="flex justify-between items-center">
                    <p className="w-[40%] text-[12px] font-light">
                      You’ll hear from us within 1–2 days. <br />
                      We’re excited to connect!
                    </p>

                    <button
                      type="submit"
                      className="bg-[#B6E400] cursor-pointer text-black text-[13px] p-3 rounded-[32px] w-[200px] sm:w-auto">
                      Send message{" "}
                    </button>
                  </div>
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
