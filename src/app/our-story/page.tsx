import React from "react";

import HeaderDark from "@/components/header-dark";

const OurStory = () => {
  return (
    <>
      <HeaderDark />
      <div className="mt-24">
        <div className="flex mb-10 bg-[#E1FCAD] px-4 py-2 rounded-xl mt-20 w-1/6 text-center justify-center">
          <h3>RENCOM PROJECTS</h3>
        </div>
        <section className="flex flex-col md:flex-row items-center gap-4 md:gap-4 mt-12 mb-3"></section>
        <section></section>
      </div>
    </>
  );
};

export default OurStory;
