import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0B2E15] font-geist mt-0 py-8">
      <div className="px-2 max-w-screen-xl mx-auto">
        <hr className="border-none h-[0.5px] mt-10 bg-[#134E24] mb-6" />

        <div className="flex flex-col md:flex-row justify-between items-start gap-16 px-3 md:px-0 pb-12">
          <div className="text-[#fefefb] font-geist font-light text-3xl md:text-4xl max-w-full md:max-w-xl">
            Sustainable <br />
            <p className="font-newsreader italic">Energy Solutions</p>
            <div>
              <div className="flex-col gap-4">
                <img
                  className="mt-15"
                  src="/assets/icons/logo-light.svg"
                  alt="logo"
                />
                <p className="text-sm mt-8">© Copyright RenCom</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row w-full md:w-2/3 gap-6 bg-[#0F3D1C] rounded-3xl p-6 md:p-8">
            <div className="flex-1 flex flex-col justify-center">
              <h3 className="text-[#fefefb] font-extralight font-geist text-lg md:text-xl mb-4 md:mb-6 leading-snug">
                Need to talk about sustainable energy? Please leave your mail
                and we’ll contact you.
              </h3>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 rounded-md bg-[#0B2E15] border border-[#7ADC51] text-white placeholder-[#7ADC51] mb-4 focus:outline-none focus:ring-2 focus:ring-[#7ADC51] transition"
              />
              <button className="w-full py-3 bg-[#087B37] text-white rounded-md hover:bg-[#0A5E2D] transition duration-200 font-semibold">
                Subscribe
              </button>
              <p className="mt-3 text-[#bcbcbc] text-xs font-light">
                We never share your information with third parties.
              </p>
            </div>

            <div className="hidden md:w-1/3 md:flex h-full overflow-hidden rounded-md items-center justify-center">
              <img
                src="/assets/images/grass-letter.png"
                alt="Newsletter Illustration"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>

        <hr className="border-none h-[0.5px] mt-10 bg-[#134E24] mb-6" />

        <div className="text-[#bcbcbc] font-geist font-extralight pt-4 text-left px-6 md:px-28 text-sm leading-relaxed">
          <p>
            RenCom is committed to{" "}
            <span className="font-bold text-white">
              Sustainable Development Goal 7
            </span>
            . In line with Target 7.1, we expand universal access to modern
            energy services through off-grid and home solar systems as well as
            mini-grids, supporting communities where the grid is absent. Aligned
            with Target 7.2, our emphasis on solar and clean cooking
            technologies increases the share of renewable energy and advances
            the global shift toward sustainability
          </p>
        </div>

        <div
          className="text-center mt-10 font-geist font-extrabold tracking-tight bg-clip-text text-transparent px-4 overflow-x-auto"
          style={{
            backgroundImage: "linear-gradient(to right, #087B37, #7ADC51)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <p className="text-[80px] sm:text-[120px] md:text-[280px] leading-none whitespace-nowrap">
            RENCOM
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
