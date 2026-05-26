"use client";

// @flow strict

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

function Navbar() {

  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-transparent relative z-50">

      <div className="flex items-center justify-between py-5">

        {/* Logo */}
        <div className="text-purple-500 text-2xl font-bold">
       PORTFOLIO
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex md:flex-row md:space-x-1">

          <li>
            <Link
              className="block px-4 py-2"
              href="/#about"
            >
              <div className="text-sm text-white hover:text-pink-600 transition-colors duration-300">
                ABOUT
              </div>
            </Link>
          </li>

          <li>
            <Link
              className="block px-4 py-2"
              href="/#experience"
            >
              <div className="text-sm text-white hover:text-pink-600 transition-colors duration-300">
                EXPERIENCE
              </div>
            </Link>
          </li>

          <li>
            <Link
              className="block px-4 py-2"
              href="/#skills"
            >
              <div className="text-sm text-white hover:text-pink-600 transition-colors duration-300">
                SKILLS
              </div>
            </Link>
          </li>

          <li>
            <Link
              className="block px-4 py-2"
              href="/#education"
            >
              <div className="text-sm text-white hover:text-pink-600 transition-colors duration-300">
                EDUCATION
              </div>
            </Link>
          </li>

          <li>
            <Link
              className="block px-4 py-2"
              href="/blog"
            >
              <div className="text-sm text-white hover:text-pink-600 transition-colors duration-300">
                CREATIVES
              </div>
            </Link>
          </li>

          <li>
            <Link
              className="block px-4 py-2"
              href="/#projects"
            >
              <div className="text-sm text-white hover:text-pink-600 transition-colors duration-300">
                PROJECTS
              </div>
            </Link>
          </li>

        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0d1224] border border-[#1b2c68a0] rounded-xl p-5 mt-2">

          <ul className="flex flex-col space-y-4">

            <li>
              <Link href="/#about" onClick={() => setIsOpen(false)}>
                <div className="text-white hover:text-pink-600">
                  ABOUT
                </div>
              </Link>
            </li>

            <li>
              <Link href="/#experience" onClick={() => setIsOpen(false)}>
                <div className="text-white hover:text-pink-600">
                  EXPERIENCE
                </div>
              </Link>
            </li>

            <li>
              <Link href="/#skills" onClick={() => setIsOpen(false)}>
                <div className="text-white hover:text-pink-600">
                  SKILLS
                </div>
              </Link>
            </li>

            <li>
              <Link href="/#education" onClick={() => setIsOpen(false)}>
                <div className="text-white hover:text-pink-600">
                  EDUCATION
                </div>
              </Link>
            </li>

            <li>
              <Link href="/blog" onClick={() => setIsOpen(false)}>
                <div className="text-white hover:text-pink-600">
                  CREATIVES
                </div>
              </Link>
            </li>

            <li>
              <Link href="/#projects" onClick={() => setIsOpen(false)}>
                <div className="text-white hover:text-pink-600">
                  PROJECTS
                </div>
              </Link>
            </li>

          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;