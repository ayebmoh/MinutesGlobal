import ScrollAnimationWrapper from "./layouts/ScrollAnimationWrapper";
import React, { useMemo } from "react";
import getScrollAnimation from "@/components/utils/getScrollAnimation";
import { motion } from "framer-motion";

const HowWeWork = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <ScrollAnimationWrapper>
      <section
        id="About"
        className="relative bg-gradient-to-t from-sky-200 to-sky-400 pb-20  "
      >
        <motion.div
          variants={scrollAnimation}
          className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl text-white font-extrabold mx-auto md:text-6xl lg:text-5xl">
              How We Work
            </h2>
            <p className="max-w-2xl mx-auto mt-4 text-base text-black-500 leading-relaxed md:text-2xl">
              Our streamlined process ensures your success from consultation to
              implementation.
            </p>
          </div>
          <div className="relative mt-12 lg:mt-20">
            <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
              <img
                alt=""
                loading="lazy"
                width="1000"
                height="500"
                decoding="async"
                data-nimg="1"
                className="w-full"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg"
              />
            </div>
            <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
              <div>
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-400 rounded-full shadow">
                  <span className="text-xl font-semibold text-gray-700">1</span>
                </div>
                <h3 className="mt-6 text-xl  text-white font-semibold leading-tight md:mt-10">
                  Initial Consultation
                </h3>
                <p className="mt-4 text-base text-black-500 md:text-lg">
                  Collaborate with our IT consultants to understand your
                  business needs and identify the best solutions.
                </p>
              </div>
              <div>
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-400 rounded-full shadow">
                  <span className="text-xl font-semibold text-gray-700">2</span>
                </div>
                <h3 className="mt-6 text-xl text-white font-semibold leading-tight md:mt-10">
                  Design & Development
                </h3>
                <p className="mt-4 text-base text-black-500 md:text-lg">
                  Our experts design and develop tailored software or systems to
                  meet your specific requirements.
                </p>
              </div>
              <div>
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-400 rounded-full shadow">
                  <span className="text-xl font-semibold text-gray-700">3</span>
                </div>
                <h3 className="mt-6 text-xl text-white font-semibold leading-tight md:mt-10">
                  Implementation & Support
                </h3>
                <p className="mt-4 text-base text-black-500 md:text-lg">
                  We ensure seamless project implementation and provide ongoing
                  support to maximize results.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
        <div className="absolute inset-0 m-auto max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg"></div>
      </section>
    </ScrollAnimationWrapper>
  );
};

export default HowWeWork;
