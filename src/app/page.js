"use client";
import {
  ComputerDesktopIcon,
  CircleStackIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/solid";
import Header from "@/components/layouts/Navbar";
import Hero from "@/components/Hero";
import HowWeWork from "@/components/Work";
import ScrollAnimationWrapper from "@/components/layouts/ScrollAnimationWrapper";
import React, { useMemo } from "react";
import getScrollAnimation from "@/components/utils/getScrollAnimation";
import { motion } from "framer-motion";
import Contact from "@/components/Contact";
import Settings from "@/assets/Settings.svg";
import Code from "@/assets/Code.svg";
import Stats from "@/assets/Stats.svg";
import Image from "next/image";
export default function Home() {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  const smoothTransition = {
    type: "spring",
    stiffness: 70,
    damping: 15,
  };

  return (
    <div className="bg-gradient-to-t from-sky-400 to-sky-200 from-50% min-h-screen overflow-hidden">
      {/* Hero Section */}
      <Header />

      <Hero />
      {/* Wave Divider */}
      <section className="bg-gradient-to-b from-sky-300 to-emerald-200">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="text-sky-200 fill-current"
        >
          <path
            fillOpacity="1"
            d="M0,160L48,170.7C96,181,192,203,288,202.7C384,203,480,181,576,170.7C672,160,768,160,864,176C960,192,1056,224,1152,229.3C1248,235,1344,213,1392,202.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </section>
      {/* Services Section */}
      <section id="Services" className=" bg-sky-200 pb-8">
        <ScrollAnimationWrapper>
          <div className="max-w px-6 mx-auto ">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={smoothTransition}
              className="text-4xl font-bold text-center mb-16 text-blue-400"
            >
              Our Services
            </motion.h2>
            <div className="grid md:grid-cols-3  xl:grid-cols-3 gap-8 ">
              <motion.div
                variants={scrollAnimation}
                className="group relative cursor-pointer mx-4 overflow-hidden bg-white px-6 pt-10 pb-6 shadow-xl ring-1 ring-gray-900/5 transition-all  hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm rounded-lg sm:px-10"
              >
                <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-400 transition-all duration-300 group-hover:scale-[10]"></span>
                <div className="relative z-10 mx-auto max-w-md">
                  <span className="grid h-20 w-20 place-items-center rounded-full bg-sky-400 transition-all duration-300 group-hover:bg-sky-400">
                    <Image
                      className="p-1"
                      src={Settings.src}
                      alt="Service1"
                      quality={100}
                      width={200}
                      height={300}
                      layout="responsive"
                    />{" "}
                  </span>
                  <div className="space-y-6 pt-5 text-base  text-gray-600 transition-all duration-300 group-hover:text-white/90">
                    <p className="font-bold">
                      Information Technology Consultants
                    </p>
                    <p>
                      Expert guidance and strategic insights for your
                      technological infrastructure and digital transformation.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={scrollAnimation}
                className="group relative cursor-pointer mx-4 overflow-hidden bg-white px-6 pt-10 pb-6 shadow-xl ring-1 ring-gray-900/5 transition-all  hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm rounded-lg sm:px-10"
              >
                <span className="absolute top-10 z-0 h-20 w-20 rounded-full  bg-sky-400 transition-all duration-300 group-hover:scale-[10]"></span>
                <div className="relative z-10 mx-auto max-w-md">
                  <span className="grid h-20 w-20 place-items-center rounded-full bg-sky-400 transition-all duration-300 group-hover:bg-sky-400">
                    <Image
                      className="p-1"
                      src={Code.src}
                      alt="Service2"
                      quality={100}
                      width={200}
                      height={300}
                      layout="responsive"
                    />{" "}
                  </span>
                  <div className="space-y-6 pt-5 text-base text-gray-600 transition-all duration-300 group-hover:text-white/90">
                    <p className="font-bold">Systems & Software Design</p>
                    <p>
                      Custom software solutions and comprehensive system design
                      tailored to your business needs.
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                variants={scrollAnimation}
                className="group relative cursor-pointer overflow-hidden bg-white px-6 mx-4 pt-10 pb-6 shadow-xl ring-1 ring-gray-900/5 transition-all  hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm rounded-lg sm:px-10"
              >
                <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-400 transition-all duration-300 group-hover:scale-[10]"></span>
                <div className="relative z-10 mx-auto max-w-md">
                  <span className="grid h-20 w-20 place-items-center rounded-full bg-sky-400 transition-all duration-300 group-hover:bg-sky-400">
                    <Image
                      className="p-1 "
                      src={Stats}
                      alt="Service3"
                      quality={100}
                      width={200}
                      height={300}
                      layout="responsive"
                    />{" "}
                  </span>
                  <div className="space-y-6 pt-5 text-base  text-gray-600 transition-all duration-300 group-hover:text-white/90">
                    <p className="font-bold">Project Management Consultancy</p>
                    <p>
                      End-to-end project management services ensuring efficient
                      delivery and optimal resource utilization.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </ScrollAnimationWrapper>
      </section>

      {/* Wave Divider */}
      <div className="bg-gradient-to-b from-emerald-200 to-sky-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="text-sky-200 fill-current rotate-180"
        >
          <path
            fillOpacity="1"
            d="M0,160L48,170.7C96,181,192,203,288,202.7C384,203,480,181,576,170.7C672,160,768,160,864,176C960,192,1056,224,1152,229.3C1248,235,1344,213,1392,202.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
      <HowWeWork />
      {/* Contact Section */}
      <section className="bg-sky-200 ">
        <div className="bg-gradient-to-b from-sky-400 to-emerald-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="text-sky-200 fill-current rotate-180"
          >
            <path
              fillOpacity="1"
              d="M0,160L48,170.7C96,181,192,203,288,202.7C384,203,480,181,576,170.7C672,160,768,160,864,176C960,192,1056,224,1152,229.3C1248,235,1344,213,1392,202.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>

        <Contact />
      </section>
    </div>
  );
}
