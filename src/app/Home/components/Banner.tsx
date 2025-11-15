import React from "react";
import Buttons from "@/components/Buttons";
const Banner = () => {
  return (
    <div className="bg-[#1A2631] flex flex-col gap-4 mt-20 lg:py-30 py-10 items-center px-14 lg:px-0 justify-center">
      <h1 className="text-[#FFFCF1] lg:text-[35px] text-[25px] font-semibold">
        Ready to build something extraordinary?
      </h1>
      <div className="flex lg:flex-row flex-col-reverse w-full lg:items-center items-start lg:justify-center gap-5">
          <Buttons text="Create a community" styles="!px-14 bg-[#3AAFA9] border-solid border border-[#3AAFA9]"/>
          <Buttons text="Schedule a demo" styles="!bg-transparent border-[#3AAFA9] border-solid border hover:bg-[#3AAFA9]"/>
      </div>
    </div>
  );
};

export default Banner;
