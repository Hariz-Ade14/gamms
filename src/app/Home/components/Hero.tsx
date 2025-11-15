import React from "react";
import Buttons from "../../../components/Buttons";
import Image from "next/image"

const Hero = () => {
  return (
    <div className="bg-[#1A2631] lg:flex-row flex-col-reverse flex justify-center items-center lg:items-end lg:justify-between py-10 lg:p-10 lg:min-h-screen overflow-hidden">
      <div className="-ml-46 hidden lg:block lg:absolute rounded-[50%] -mt-14 w-[500px] top-0 h-[650px] bg-gradient-to-b from-[#A7FFFB]/40 via-[#1A2631]/10 to-[#1A2631] blur-3xl"></div>
      <div className="flex lg:mt-0 -mt-12 flex-col gap-2 z-10 lg:ml-0 ml-8">
        <h1 className="font-bold lg:text-[50px] text-[30px] text-[#FFFCF1]">
        Build lasting communities. <br /> 
         Earn without limits.
        </h1>
        <p className="text-[#FFFCF1]">
          Build, manage, and scale thriving communities, all from one platform
          <br />
          that connects people, purpose, and progress.
        </p>
        <div className="flex flex-col-reverse lg:flex-row lg:items-center mt-5 gap-3 lg:gap-5">
          <Buttons
            text="Create a community"
            styles="bg-[#3AAFA9] w-[300px] !py-3 lg:w-[300px]"
          />
          <Buttons
            text="See how it works"
            styles="bg-transparent border-solid border w-[250px] lg:w-[250px] border-[#3AAFA9] hover:bg-gradient-to-tr hover:from-[#999273]/60 hover:via-[#FFF3BF00] hover:to-[#262824] text-[#FFFCF1]"
          />
        </div>
      </div>
      <div className="absolute rounded-[50%] left-0 lg:right-0 lg:left-auto w-[400px] lg:top-0 h-[650px] bg-gradient-to-b from-[#A7FFFB]/10 to-[#A7FFFB]/20 blur-3xl"></div>
      {/* <div className="flex items-center gap-5"> */}
        <Image alt="members" src={"./assets/members.svg"} width={530} height={600} className="lg:w-full hidden lg:block z-10 lg:ml-0 lg:max-w-[530px] h-auto mx-auto"/>
        <Image alt="members" src={"./assets/member2.svg"} width={530} height={600} className="lg:w-full lg:hidden -mt-26 z-10 max-w-400px] ml-0 h-auto mx-auto"/>
      {/* </div> */}
    </div>
  );
};

export default Hero;

// 
