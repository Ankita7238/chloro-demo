"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoSearch } from "react-icons/io5";
import { HiMiniBars3 } from "react-icons/hi2";
import { IoIosArrowDown } from "react-icons/io";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400"],
});

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownServices, setDropdownServices] = useState(false);
  const [dropdownPages, setDropdownPages] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="w-full bg-[#023A15] text-white relative z-20">
        <div className="container w-11/12 lg:w-4/5 mx-auto py-8 flex justify-between items-center">
          {/* Logo */}
          <div>
            <Link href="/">
              <Image
                src="/images/logo_dark.png"
                alt="chloro-logo"
                className="hover:scale-105 transition-transform duration-300"
                width={100}
                height={40}
              />
            </Link>
          </div>

          {/* Links */}
          <div className="space-x-10 lg:space-x-14 hidden md:block font-semibold text-sm relative z-30">
            <Link
              href="/home"
              className={`${montserrat.className} text-white tracking-wider hover:text-green-300`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`${montserrat.className} text-white tracking-wider hover:text-green-300`}
            >
              About
            </Link>

            {/* Services Dropdown */}
            <div className="relative inline-block text-left">
              <button
                onMouseEnter={() => setDropdownServices(true)}
                onMouseLeave={() => setDropdownServices(false)}
                className={`${montserrat.className} text-white tracking-wider hover:text-green-300 flex items-center`}
              >
                Services
                <IoIosArrowDown className="ml-1" />
              </button>
              {dropdownServices && (
                <div
                  className="absolute mt-2 w-48 bg-beige-100 text-[#023A15] rounded-md shadow-lg z-40"
                  onMouseEnter={() => setDropdownServices(true)}
                  onMouseLeave={() => setDropdownServices(false)}
                >
                  <Link href="/service1" className="block px-4 py-2 hover:bg-beige-200">
                    Service 1
                  </Link>
                  <Link href="/service2" className="block px-4 py-2 hover:bg-beige-200">
                    Service 2
                  </Link>
                  <Link href="/service3" className="block px-4 py-2 hover:bg-beige-200">
                    Service 3
                  </Link>
                </div>
              )}
            </div>

            {/* Pages Dropdown */}
            <div className="relative inline-block text-left">
              <button
                onMouseEnter={() => setDropdownPages(true)}
                onMouseLeave={() => setDropdownPages(false)}
                className={`${montserrat.className} text-white tracking-wider hover:text-green-300 flex items-center`}
              >
                Pages
                <IoIosArrowDown className="ml-1" />
              </button>
              {dropdownPages && (
                <div
                  className="absolute mt-2 w-48 bg-beige-100 text-[#023A15] rounded-md shadow-lg z-40"
                  onMouseEnter={() => setDropdownPages(true)}
                  onMouseLeave={() => setDropdownPages(false)}
                >
                  <Link href="/page1" className="block px-4 py-2 hover:bg-beige-200">
                    Page 1
                  </Link>
                  <Link href="/page2" className="block px-4 py-2 hover:bg-beige-200">
                    Page 2
                  </Link>
                  <Link href="/page3" className="block px-4 py-2 hover:bg-beige-200">
                    Page 3
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/contact"
              className={`${montserrat.className} text-white tracking-wider hover:text-green-300`}
            >
              Contact
            </Link>
          </div>

          {/* Hamburger Menu and search icon */}
          <div className="flex justify-center items-center gap-x-8">
            <div>
              <IoSearch className="w-8 h-10" />
            </div>
            <div>
              <HiMiniBars3 onClick={toggleMenu} className="w-10 h-8" />
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <Link href="/home" className="block px-4 py-2 text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <Link href="/about" className="block px-4 py-2 text-gray-600 hover:text-gray-900">
              About
            </Link>
            <Link href="/services" className="block px-4 py-2 text-gray-600 hover:text-gray-900">
              Services
            </Link>
            <Link href="/contact" className="block px-4 py-2 text-gray-600 hover:text-gray-900">
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
