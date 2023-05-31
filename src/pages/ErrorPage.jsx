import React from "react";
import errorImage from "../assets/404-error.gif";

const ErrorPage = () => {
  return (
    <div className="h-[60vh] w-full flex flex-col items-center justify-center ">
      <img
        src={errorImage}
        alt="error-image"
        className="w-full xs:w-[80%] sm:w-1/2"
      />
      <span className="mt-3 font-sans text-2xl md:text-4xl font-bold uppercase  tracking-wide text-gray-300">
        Nothing Here!
      </span>
    </div>
  );
};

export default ErrorPage;
