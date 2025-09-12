import React from "react";

const HeaderLight = () => {
	return (
		<nav className=" mt-9">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-1">
				<div className="flex justify-between items-center h-16">
					{/* Logo */}
					<div className="flex-shrink-0">
						<div className="flex items-center">
							<img
								src="/assets/icons/logo-light.svg"
								alt="remcon light logo"
								height={70}
								width={120}
							/>
						</div>
					</div>

					{/* Center Navigation Links */}
					<div className="bg-white text-center hidden md:flex justify-center items-center py-3 px-8 rounded-xl">
						<div className="flex items-baseline space-x-8">
							<a
								href="#about"
								className="text-gray-700 hover:text-[#387F1A] px-4 py-3 text-base font-medium transition-colors duration-200"
							>
								About Us
							</a>
							<a
								href="#services"
								className="text-gray-700 hover:text-[#387F1A] px-4 py-3 text-base font-medium transition-colors duration-200"
							>
								Services
							</a>
							<a
								href="#projects"
								className="text-gray-700 hover:text-[#387F1A] px-4 py-3 text-base font-medium transition-colors duration-200"
							>
								Projects & Impacts
							</a>
							<a
								href="#story"
								className="text-gray-700 hover:text-[#387F1A] px-4 py-3 text-base font-medium transition-colors duration-200"
							>
								Our Story
							</a>
						</div>
					</div>

					{/* Contact Us Button */}
					<div className="flex items-center">
						<button className="bg-[#387F1A] hover:bg-[#25610c] text-white px-8 py-4 rounded-full text-sm font-medium transition-colors duration-200">
							Contact Us →
						</button>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default HeaderLight;
