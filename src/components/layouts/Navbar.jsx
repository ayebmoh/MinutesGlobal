"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/logo.svg";
import { usePathname } from "next/navigation"; // Import this hook

import {
  HomeIcon,
  GlobeEuropeAfricaIcon,
  ExclamationCircleIcon,
  ChatBubbleOvalLeftEllipsisIcon,
} from "@heroicons/react/24/solid";

const Header = () => {
  const pathname = usePathname(); // Use Next.js hook to get current path
  const [scrollActive, setScrollActive] = useState(false);

  // Track scrolling
  useEffect(() => {
    const handleScroll = () => {
      setScrollActive(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Helper function to check if the current path is active
  const isActive = (path) => pathname === path;

  return (
    <>
      <header
        className={
          "fixed top-0 bg-sky-200 bg-opacity-40 w-full z-30 transition-all " +
          (scrollActive ? "shadow-md pt-0" : "pt-2")
        }
      >
        <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-2 sm:py-2">
          <ul className="hidden font-bold text-lg lg:flex col-start-4 col-end-8 text-black-500 items-center">
            <Link
              href="/"
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (isActive("/")
                  ? " text-blue-400 animation-active "
                  : " text-black-500 hover:text-sky-500")
              }
            >
              Home
            </Link>
            <Link
              href="/services"
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (isActive("/services")
                  ? " text-blue-600 animation-active "
                  : " text-black-500 hover:text-sky-600")
              }
            >
              Services
            </Link>
            <Link
              href="/faq"
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (isActive("/faq")
                  ? " text-blue-600 animation-active "
                  : " text-black-500 hover:text-sky-600")
              }
            >
              Faq
            </Link>
            <Link
              href="/contact"
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (isActive("/contact")
                  ? " text-blue-400 animation-active "
                  : " text-black-500 hover:text-sky-400")
              }
            >
              Contact
            </Link>
          </ul>
          <div className="col-start-10 col-end-12 font-medium flex justify-end p-0 items-center">
            <Link href="/">
              <Image
                src={Logo.src}
                alt="Logo"
                className=""
                height={90}
                width={80}
                quality={100}
              />
            </Link>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation */}
      <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 sm:px-8 shadow-t">
        <div className="bg-black-500 sm:px-3">
          <ul className="flex w-full justify-between items-center text-black-500">
            <Link
              href="/"
              className={
                "px-3 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (isActive("/")
                  ? " text-blue-600 animation-active "
                  : " text-black-500 hover:text-blue-600")
              }
            >
              <HomeIcon className="w-6 h-6 ml-2" />
              Home
            </Link>
            <Link
              href="/services"
              className={
                "px-3 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (isActive("/services")
                  ? " text-blue-600 animation-active "
                  : " text-black-500 hover:text-blue-600")
              }
            >
              <GlobeEuropeAfricaIcon className="w-6 h-6 ml-5" />
              Services
            </Link>
            <Link
              href="/faq"
              className={
                "px-3 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (isActive("/faq")
                  ? " text-blue-600 animation-active "
                  : " text-black-500 hover:text-blue-600")
              }
            >
              <ExclamationCircleIcon className="w-6 h-6 " />
              Faq
            </Link>
            <Link
              href="/contact"
              className={
                "px-3 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (isActive("/contact")
                  ? " text-blue-600 animation-active "
                  : " text-black-500 hover:text-blue-600")
              }
            >
              <ChatBubbleOvalLeftEllipsisIcon className="w-6 h-6 ml-4" />
              Contact
            </Link>
          </ul>
        </div>
      </nav>
      {/* End Mobile Navigation */}
    </>
  );
};

export default Header;
