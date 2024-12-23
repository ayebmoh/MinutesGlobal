"use client";
import getScrollAnimation from "@/components/utils/getScrollAnimation";
import { useMemo, useRef, useState } from "react";
import contact from "@/assets/contact2.svg";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import { MapPinIcon } from "@heroicons/react/24/solid";

const page = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE,
        process.env.NEXT_PUBLIC_TEMPLATE,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        (result) => {
          setemailsub(true);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const [emailsub, setemailsub] = useState(false);
  const smoothTransition = {
    type: "spring",
    stiffness: 70,
    damping: 15,
  };
  return (
    <section
      id="Contact"
      className=" lg:p-20 block bg-gradient-to-b from-emerald-200 via-sky-400 to-sky-300"
    >
      {/* content */}
      <div className="container px-6 pb-10 mx-auto">
        <div className="lg:flex pt-28 lg:py-0 lg:pt-10 md:pt-32 lg:items-center lg:-mx-10">
          <div className="lg:w-1/2  lg:mx-10">
            <h1 className="text-2xl  font-semibold capitalize text-white lg:text-3xl">
              Let’s take you to the next{" "}
              <span className="font-bold text-sky-500">level!</span>
            </h1>

            <p className="mt-4 font-semibold text-gray-700">
              Ask us everything and we would love to hear from you
            </p>
            <form
              id="contactform"
              ref={form}
              onSubmit={sendEmail}
              className="mt-8"
            >
              <div className="-mx-2 md:items-center md:flex">
                <div className="flex-1 px-2">
                  <label className="block mb-2 font-bold text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    id="name"
                    name="name"
                    placeholder="Your Full Name"
                    className="block w-full px-5 py-3 mt-2      rounded-md placeholder-gray-600 bg-white- text-gray-700 border-gray-700 focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div className="flex-1 px-2 mt-4 md:mt-0">
                  <label className="block mb-2 font-bold text-gray-700">
                    Email address
                  </label>
                  <input
                    type="email"
                    required
                    id="email"
                    name="email"
                    placeholder="name@example.com"
                    className="block w-full px-5 py-3 mt-2    border  rounded-md placeholder-gray-700 bg-white- text-gray-700 border-gray-300 focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
              </div>
              <div className="flex-1  pt-4 md:mt-0">
                <label className="block mb-2 font-bold text-gray-700">
                  Service
                </label>
                <select
                  name="service"
                  id="service"
                  required
                  defaultValue=""
                  className="block w-full px-5 py-3 mt-2    border  rounded-md placeholder-gray-700 bg-white- text-gray-700 border-gray-300 focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                >
                  <option value="Information_Technology_Consultants">
                    Information Technology Consultants
                  </option>
                  <option value="Computer_Systems_&_Software_Design">
                    Computer Systems & Software Design
                  </option>
                  <option value="Project_Management_Consultancy">
                    Service3 Project Management Consultancy
                  </option>
                  <option value="Something_else">Something else </option>
                </select>
              </div>
              <div className="w-full mt-4">
                <label className="block mb-2 font-bold  text-gray-700">
                  Message
                </label>
                <textarea
                  required
                  name="message"
                  id="message"
                  className="block w-full h-32 px-5 py-3 mt-2    border  rounded-md md:h-56 placeholder-gray-600 text-gray-700 border-gray-300  focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Your Message"
                ></textarea>
              </div>

              <button className="w-full px-6 py-3 mt-4 font-bold text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                get in touch
              </button>
              {emailsub && (
                <p className="text-green-500 text-md mb-5">
                  Email sent successfully!
                </p>
              )}
            </form>
          </div>

          <div className="mt-12 lg:flex lg:mt-0 lg:flex-col lg:items-center lg:w-1/2 lg:mx-10">
            <Image
              className="hidden object-cover mx-auto  lg:block shrink-0 "
              src={contact.src}
              width={500}
              height={250}
              alt=""
            />
            <div className="mt-6 space-y-8 md:mt-8">
              <p className="flex items-start -mx-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-2 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>

                <span className="mx-2  truncate w-72 text-gray-700">
                  admin@minutesglobal.io{" "}
                </span>
              </p>
            </div>

            <div className="mt-6 flex flex-row space-y-8 ">
              <p className="flex -mx-2">
                <MapPinIcon className="h-6 w-6 text-blue-500" />

                <span className="mx-2   w-72 text-gray-700">
                  VUPRO250 compass building - Al Hulaila, Al Hulaila Industrial
                  Zone-FZ Ras Al Khaimah,United Arab Emirates{" "}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
