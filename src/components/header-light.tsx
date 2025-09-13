"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { HiMenu, HiX } from "react-icons/hi";

const HeaderLight = () => {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleClick = () => {
    router.push("/contact-us");
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="mt-9">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-1">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/">
              <img
                src="/assets/icons/logo-light.svg"
                alt="remcon light logo"
                height={70}
                width={120}
              />
            </Link>
          </div>

          <div className="bg-white hidden md:flex items-center py-3 px-8 rounded-xl font-normal font-questrial">
            <div className="flex items-baseline space-x-8">
              <Link
                href="/home"
                className="text-gray-700 hover:text-[#387F1A] text-base font-medium transition-colors duration-200"
              >
                Home
              </Link>
              <Link
                href="/about-us"
                className="text-gray-700 hover:text-[#387F1A] text-base font-medium transition-colors duration-200"
              >
                About Us
              </Link>
              <Link
                href="/projects-impact"
                className="text-gray-700 hover:text-[#387F1A] text-base font-medium transition-colors duration-200"
              >
                Projects & Impacts
              </Link>
              <Link
                href="/our-story"
                className="text-gray-700 hover:text-[#387F1A] text-base font-medium transition-colors duration-200"
              >
                Our Story
              </Link>
            </div>
          </div>

          <div className="flex items-center md:space-x-4">
            <button
              className="bg-[#387F1A] hover:bg-[#25610c] text-white px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 cursor-pointer hidden md:block"
              onClick={handleClick}
            >
              Contact Us →
            </button>

            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-gray-700 focus:outline-none"
                aria-label="Toggle Menu"
              >
                {isMobileMenuOpen ? (
                  <HiX className="h-6 w-6" />
                ) : (
                  <HiMenu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 bg-white rounded-xl shadow-md py-4 px-6 space-y-4">
            <Link
              href="/about-us"
              className="block text-gray-700 hover:text-[#387F1A] text-base font-medium"
            >
              About Us
            </Link>
            <Link
              href="/projects-impact"
              className="block text-gray-700 hover:text-[#387F1A] text-base font-medium"
            >
              Projects & Impacts
            </Link>
            <Link
              href="/our-story"
              className="block text-gray-700 hover:text-[#387F1A] text-base font-medium"
            >
              Our Story
            </Link>
            <Link
              href="/contact-us"
              className="w-full hover:bg-[#25610c] text-gray-700 py-2 text-base font-medium transition-colors "
            >
              Contact Us
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default HeaderLight;
