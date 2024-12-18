import React from "react";
import { useRouter } from "next/navigation";
const ButtonPrimary = ({ children, addClass }) => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push("/contact")}
      className={
        "py-3 z-50 lg:py-4 px-12 lg:px-16 text-white-500 font-semibold rounded-lg bg-gradient-to-t from-sky-500 to-sky-300 hover:shadow-lg hover:shadow-sky-500 transition-all outline-none " +
        addClass
      }
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;
