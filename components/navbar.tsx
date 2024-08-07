"use client";

import React, { useState } from "react";
import Image from "next/image";
import Logo from "@/public/images/logo.png";
const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className=" shadow-md">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Image src={Logo} alt="AMAC Logo" width={100} height={50} />
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li>
              <a href="#products" className=" hover:text-green-600">
                Products
              </a>
            </li>
            <li>
              <a href="#about" className=" hover:text-green-600">
                About Us
              </a>
            </li>

            <li>
              <a href="#contacts" className=" hover:text-green-600">
                Contact us
              </a>
            </li>
          </ul>
        </nav>
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      {menuOpen && (
        <nav className="md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li>
              <a href="#products" className=" hover:text-green-600">
                Products
              </a>
            </li>
            <li>
              <a href="#about" className=" hover:text-green-600">
                About Us
              </a>
            </li>

            <li>
              <a href="#contacts" className=" hover:text-green-600">
                Contact us
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default NavBar;
