"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import PlanetImg from "@/assets/planet.png";
import PlanetOverlayImg from "@/assets/planet-overlay.svg";
import PlanetTagImg01 from "@/assets/Cluster.svg";
import PlanetTagImg02 from "@/assets/Shield.svg";
import PlanetTagImg03 from "@/assets/Rocket.svg";
import PlanetTagImg04 from "@/assets/Folder.svg";
import Service1 from "@/assets/service1.svg";
import Service2 from "@/assets/service2.svg";
import Service3 from "@/assets/service3.svg";
import ItConsulting from "@/assets/ItConsulting.svg";
import SoftwareDesign from "@/assets/SoftwareDesign.svg";
import ProjectManagement from "@/assets/ProjectManagement.svg";
import { useMemo } from "react";
import getScrollAnimation from "@/components/utils/getScrollAnimation";
import ListItem from "@/components/utils/ListItem";
export default function Service() {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const [activeTab, setActiveTab] = useState("projectManagement");

  const smoothTransition = {
    type: "spring",
    stiffness: 70,
    damping: 15,
  };
  return (
    <section className="relative before:absolute before:inset-0 pt-24 sm:p-12 sm:pt-24 before:-z-20 before:bg-gradient-to-b before:from-sky-400 before:via-emerald-200 before:to-sky-200">
      <motion.div
        variants={scrollAnimation}
        className="mx-auto max-w-6xl px-4 sm:px-6"
      >
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-10 text-center md:pb-20">
            <h2 className="text-3xl font-bold text-gray-200 md:text-4xl">
              Feel free to explore our high quality services!
            </h2>
          </div>
          {/* Planet */}
          <div className="pb-16 hidden sm:block md:pb-20" data-aos="zoom-y-out">
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={smoothTransition}
                className="relative inline-flex rounded-full before:absolute before:inset-0 before:-z-10 before:scale-[.85] before:animate-[pulse_4s_cubic-bezier(.4,0,.6,1)_infinite] before:bg-gradient-to-b before:from-sky-200 before:to-sky-400/50 before:blur-3xl after:absolute after:inset-0 after:rounded-[inherit] after:[background:radial-gradient(closest-side,theme(colors.blue.500),transparent)]"
              >
                <Image
                  className="rounded-full bg-sky-400"
                  src={PlanetImg}
                  width={400}
                  height={400}
                  alt="Planet"
                />
                <div className="pointer-events-none" aria-hidden="true">
                  <Image
                    className="absolute -right-64 -top-20 z-10 max-w-none"
                    src={PlanetOverlayImg}
                    width={789}
                    height={755}
                    alt="Planet decoration"
                  />
                  <div>
                    <Image
                      className="absolute -left-24 top-16 z-10 animate-[float_4s_ease-in-out_infinite_both] opacity-90 transition-opacity duration-500"
                      src={PlanetTagImg02}
                      width={150}
                      height={56}
                      alt="Tag 01"
                    />
                    <Image
                      className="absolute left-64 top-7 z-10 animate-[float_4s_ease-in-out_infinite_1s_both] opacity-90 transition-opacity duration-500"
                      src={PlanetTagImg01}
                      width={150}
                      height={70}
                      alt="Tag 02"
                    />
                    <Image
                      className="absolute -left-20 bottom-0 z-10 animate-[float_4s_ease-in-out_infinite_2s_both] opacity-90 transition-opacity duration-500"
                      src={PlanetTagImg04}
                      width={203}
                      height={56}
                      alt="Tag 03"
                    />
                    <Image
                      className="absolute bottom-0 left-64 z-10 animate-[float_4s_ease-in-out_infinite_3s_both] opacity-90 transition-opacity duration-500"
                      src={PlanetTagImg03}
                      width={150}
                      height={20}
                      alt="Tag 04"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          {/* Grid */}
          <section className=" text-gray-900 container mx-auto py-16 px-4 sm:px-0 ">
            <div className="space-y-12">
              <motion.div
                variants={scrollAnimation}
                initial="offscreen"
                whileInView="onscreen"
                transition={smoothTransition}
                viewport={{ once: true, amount: 0.7 }}
                className="flex flex-col md:flex-row items-center md:items-start md:justify-between"
              >
                <div className="md:w-5/12">
                  <h2 className="text-2xl font-bold mb-4">
                    Information Technology Consultants
                  </h2>
                  <p className="text-gray-600 mb-6 text-center md:text-left">
                    Our expert IT consultants provide strategic technology
                    guidance tailored to your business needs. We offer
                    comprehensive assessments, digital transformation
                    strategies, and innovative solutions that align cutting-edge
                    technology with your organizational goals. Our team helps
                    you leverage technological innovations to enhance
                    efficiency, reduce costs, and create competitive advantages.
                  </p>
                </div>

                <div className="md:w-5/12 max-w-sm">
                  <Image
                    height={500}
                    width={500}
                    className="rounded-md border-none"
                    src={Service1.src}
                    alt="IT Consulting Services"
                  />
                </div>
              </motion.div>

              <motion.div
                variants={scrollAnimation}
                transition={smoothTransition}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.5 }}
                className="flex flex-col md:flex-row-reverse items-center md:items-start md:justify-between"
              >
                <div className="md:w-5/12">
                  <h2 className="text-2xl font-bold mb-4">
                    Computer Systems and Software Designing
                  </h2>
                  <p className="text-gray-600 mb-6 text-center md:text-left">
                    We specialize in creating custom software solutions and
                    designing robust computer systems tailored to your unique
                    business requirements. Our skilled developers and system
                    architects craft innovative, scalable, and secure software
                    applications that streamline operations and enhance
                    productivity. From initial concept to final implementation,
                    we ensure technological solutions perfectly align with your
                    business processes.
                  </p>
                </div>

                <div className="md:w-5/12 max-w-sm">
                  <Image
                    height={500}
                    width={500}
                    className="rounded-md border-none"
                    src={Service3.src}
                    alt="Software and Systems Design"
                  />
                </div>
              </motion.div>

              <motion.div
                variants={scrollAnimation}
                transition={smoothTransition}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.5 }}
                className="flex flex-col md:flex-row items-center md:items-start md:justify-between"
              >
                <div className="md:w-5/12">
                  <h2 className="text-2xl font-bold mb-4">
                    Project Management Consulting
                  </h2>
                  <p className="text-gray-600 mb-6 text-center md:text-left">
                    Our project management consulting services provide
                    comprehensive support to ensure successful technology and
                    business initiatives. We offer expert guidance in project
                    planning, execution, monitoring, and control. Utilizing
                    advanced methodologies and tools, our experienced project
                    managers deliver projects on time, within scope, and meeting
                    the highest quality standards while minimizing risks and
                    optimizing resource allocation.
                  </p>
                </div>

                <div className="md:w-4/12  max-w-sm">
                  <Image
                    className="rounded-md border-none"
                    src={Service2.src}
                    height={900}
                    width={500}
                    alt="Project Management Consulting"
                  />
                </div>
              </motion.div>
            </div>
          </section>
        </div>
      </motion.div>
      {/* secont Grid */}
      <div className="flex flex-col sm:flex-row gap-9 justify-center px-3 sm:px-0 mb-6">
        <button
          className={`${
            activeTab == "itConsulting" ? "bg-sky-400" : "bg-white"
          } px-4 py-2 font-semibold text-gray-800   rounded-xl hover:bg-sky-200  focus:outline-none`}
          onClick={() => setActiveTab("itConsulting")}
        >
          IT Consulting
        </button>
        <button
          className={` ${
            activeTab == "systemsDesign" ? "bg-sky-400" : "bg-white"
          } px-4 py-2 font-semibold text-gray-800   rounded-xl hover:bg-sky-200  focus:outline-none`}
          onClick={() => setActiveTab("systemsDesign")}
        >
          Computer Systems & Software Design
        </button>
        <button
          className={`${
            activeTab == "projectManagement" ? "bg-sky-400" : "bg-white"
          } px-4 py-2 font-semibold text-gray-800   rounded-xl hover:bg-sky-200  focus:outline-none`}
          onClick={() => setActiveTab("projectManagement")}
        >
          Project Management Consulting
        </button>
      </div>

      <div className="w-full lg:h-[700px]  gap-3 flex flex-col md:flex md:flex-row justify-between">
        {/* Tabs Navigation */}

        {/* Tab Content */}
        {activeTab === "projectManagement" && (
          <div className="flex flex-col md:flex md:flex-row justify-between">
            <div className="2xl:container w-full md:py-6 py-9">
              <div className="flex flex-col lg:flex-row w-full px-4 gap-8">
                <div className="w-full flex flex-col justify-center animate-fade-up">
                  <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-black pb-4 animate-slide-in-left">
                    Project Management Consulting
                  </h1>
                  <p className="font-normal text-xl  leading-6 text-gray-500 animate-fade-up">
                    Optimize your project lifecycle with expert guidance in
                    planning, execution, and monitoring. We ensure successful
                    outcomes with streamlined processes tailored to your goals.
                  </p>
                  <ul className="mt-5 text-lg flex flex-col gap-4 text-gray-400  animate-fade-up">
                    <ListItem Title="Customized project strategies for diverse industries." />
                    <ListItem Title="Detailed Workflow Analysis and Optimization" />
                    <ListItem Title="Advanced Project Management Tools Deployment" />
                    <ListItem Title="Comprehensive risk assessment and mitigation plans." />
                    <ListItem Title="Performance monitoring tools to ensure milestones are met." />
                    <ListItem Title="Post-Project Analysis and Reporting" />
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-full">
              <Image
                className="lg:h-5/6"
                height={50}
                width={900}
                alt="service"
                src={ProjectManagement.src}
              />
            </div>
          </div>
        )}

        {activeTab === "systemsDesign" && (
          <div className="flex flex-col md:flex md:flex-row justify-between">
            <div className="2xl:container w-full md:py-6 py-9">
              <div className="flex flex-col lg:flex-row w-full px-4 gap-8">
                <div className="w-full flex flex-col justify-center animate-fade-up">
                  <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-black pb-4 animate-slide-in-left">
                    Computer Systems & Software Design
                  </h1>
                  <p className="font-normal text-xl leading-6 text-gray-500 animate-fade-up">
                    From system architecture to software development, we craft
                    scalable, efficient, and secure solutions that power your
                    business operations.
                  </p>
                  <ul className="mt-5 flex text-lg flex-col gap-4 text-gray-400  animate-fade-up">
                    <ListItem Title="Tailored system architecture for optimized workflows." />
                    <ListItem Title="Scalable Cloud-Based Solutions" />
                    <ListItem Title="Robust Cybersecurity Measures" />
                    <ListItem Title="Data-Driven Decision Support Systems" />
                    <ListItem Title="Custom software solutions for specific business needs." />
                    <ListItem Title="Integration of cutting-edge technologies like AI and IoT." />
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-full">
              <Image
                className="lg:h-5/6"
                height={500}
                width={900}
                alt="service"
                src={SoftwareDesign.src}
              />
            </div>
          </div>
        )}

        {activeTab === "itConsulting" && (
          <div className="flex flex-col md:flex md:flex-row justify-between">
            <div className="2xl:container w-full md:py-6 py-9">
              <div className="flex flex-col lg:flex-row w-full px-4 gap-8">
                <div className="w-full flex flex-col justify-center animate-fade-up">
                  <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-black pb-4 animate-slide-in-left">
                    Information Technology Consulting
                  </h1>
                  <p className="font-normal text-xl leading-6 text-gray-500 animate-fade-up">
                    Maximize your IT investments with strategic consulting
                    services. We help you align technology with business
                    objectives and drive efficiency.
                  </p>
                  <ul className="mt-5 text-lg flex flex-col gap-4 text-gray-400  animate-fade-up">
                    <ListItem Title="IT strategy development for business growth." />
                    <ListItem Title="Implementation of secure and scalable IT solutions." />
                    <ListItem Title="Comprehensive audits to improve infrastructure performance." />
                    <ListItem Title="Cloud Migration and Optimization Services" />
                    <ListItem Title="Technology Lifecycle Management" />
                    <ListItem Title="Vendor Assessment and Management" />
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-full">
              <Image
                className="lg:h-5/6"
                height={500}
                width={900}
                alt="service"
                src={ItConsulting.src}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
