import React from "react";
import HeaderLight from "@/components/header-light";

const Landing = () => {
  return (
    <section className="relative bg-[url('/assets/images/windmill-landing.png')] bg-cover bg-center bg-no-repeat h-screen w-full">
      {/* Header fixed at the top */}
      <div className="absolute top-0 left-0 w-full">
        <HeaderLight />
      </div>

      {/* Hero Text centered */}
      <div className="flex h-full w-full flex-col items-center justify-center text-center px-4">
        {/* Hero Title */}
        <h2 className="text-[73px] text-white leading-[83px] font-bold">
          Sustainable Energy <br />
          Solutions
        </h2>

        {/* Paragraph */}
        <p className="mt-6 max-w-2xl text-white text-">
          Based in Nigeria, RenCom is dedicated to delivering dependable,
          sustainable power solutions for communities and businesses, enabling
          economic growth and resilient development.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex gap-6">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            Learn More
          </button>
          <button className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Landing;
