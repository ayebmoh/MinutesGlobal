import React, { useMemo } from "react";
import Image from "next/image";
import ButtonPrimary from "./Buttons/ButtonPrimary";
import { motion } from "framer-motion";
import getScrollAnimation from "@/components/utils/getScrollAnimation";
import ScrollAnimationWrapper from "@/components/layouts/ScrollAnimationWrapper";
import HeroImage from "@/assets/hero.svg";
import Tech from "@/assets/technology.svg";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
const Hero = ({}) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <section className="  max-w-screen-xl mt-24 px-8 xl:px-0 mx-auto" id="Home">
      <ScrollAnimationWrapper>
        <motion.div
          className="grid grid-flow-row sm:grid-flow-col grid-rows-1 md:grid-rows-1 sm:grid-cols-2   "
          variants={scrollAnimation}
        >
          <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal">
              Anything becomes easy with <strong>Minutes Global FZ-LLC</strong>.
            </h1>
            <p className="text-gray-800 z-50 font-semibold mt-4 mb-6">
              Empowering businesses with cutting-edge IT solutions, we provide a
              comprehensive range of services to address all your technology
              needs. From tailored consulting and strategic advice to seamless
              digital transformation, we guide you through every step of your
              journey. Whether you're looking to enhance operational efficiency,
              boost innovation, or scale your operations, we help you unlock
              your full potential with state-of-the-art technologies, expert
              guidance, and customized solutions that drive measurable results.
            </p>
            <div className="flex flex-col sm:flex-row sm:gap-12 gap-5 w-full">
              {" "}
              <ButtonPrimary>Get Started</ButtonPrimary>{" "}
              <a
                href="/services"
                className="inline-flex z-50 justify-center underline items-center py-3 px-5 text-base font-semibold text-center text-gray-900 rounded-lg border border-gray-300 bg-sky-200 bg-opacity-30 hover:bg-sky-200 hover:bg-opacity-50   focus:ring-4 focus:ring-gray-100 "
              >
                Explore more{" "}
                <ArrowRightIcon className="h-4 w-4 font-semibold text-gray-900 ml-1" />
              </a>
              <Image
                className="absolute lg:left-[20%] hidden lg:block top-[40%] z-10"
                src={Tech.src}
                alt="hero image"
                quality={100}
                height={40}
                width={400}
              />
            </div>
          </div>
          <motion.div className="flex " variants={scrollAnimation}>
            <Image
              src={HeroImage.src}
              alt="Image Hero"
              quality={100}
              width={612}
              height={100}
              layout="responsive"
            />
          </motion.div>
        </motion.div>
      </ScrollAnimationWrapper>
    </section>
  );
};

export default Hero;
