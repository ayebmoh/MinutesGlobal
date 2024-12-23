import Logo from "@/assets/logo.svg";
import { MapPinIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
export const Footer = () => {
  return (
    <div className="relative mt-3 bg-gradient-to-b from-sky-400 from-30% via-emerald-200 to-sky-400">
      <svg
        className="absolute top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16 text-sky-400"
        preserveAspectRatio="none"
        viewBox="0 0 1440 54"
      >
        <path
          fill="currentColor"
          d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
        />
      </svg>
      <div className="px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
          <div className="md:max-w-md lg:col-span-2">
            <Image
              src={Logo.src}
              alt="Logo"
              className=""
              height={90}
              width={100}
              quality={100}
            />
            <a
              href="/"
              aria-label="Go home"
              title="Company"
              className="inline-flex items-center"
            >
              <span className="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
                Minutes Global FZ-LLC
              </span>
            </a>
          </div>
          <div className="flex lg:flex-row  flex-col ">
            {" "}
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
        <ul className="text-lg flex items-center justify-center flex-col gap-7 md:flex-row md:gap-12 transition-all duration-500  mb-10 ">
          <li>
            <a href="faq" className=" text-gray-800 hover:text-gray-500">
              Faq
            </a>
          </li>
          <li>
            <a
              href="/privacy&policy"
              className=" text-gray-800 hover:text-gray-500"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="services" className=" text-gray-800 hover:text-gray-500">
              services
            </a>
          </li>
          <li>
            <a href="/contact" className=" text-gray-800 hover:text-gray-500">
              Support
            </a>
          </li>
        </ul>
      </div>
      <div className="flex flex-col w-full justify-center  pt-5 pb-10 border-t  sm:flex-row">
        <span className="text-lg px-4 justify-center text-gray-500 text-center block">
          ©<span>Minutes Global FZ-LLC</span> {new Date().getFullYear()}, All
          rights reserved.
        </span>
        <div className="flex px-4 items-center mt-4 space-x-4 sm:mt-0"></div>
      </div>
    </div>
  );
};
