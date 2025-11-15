"use client"
import React,{useEffect} from "react";
import Buttons from "@/components/Buttons";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const lists = [
  "Clean, distraction-free interface across all devices",
  "Personalized feeds and smart recommendations",
  "Gamification with badges, points, and recognition",
  "Native mobile apps for iOS and Android",
];
const SectionOne = () => {
  useEffect(() => {
    AOS.init({
      duration: 500, 
      easing: "ease-in", 
      once: true, 
      mirror: false, 
    });
  }, []);
  return (
    <div className="p-5 lg:p-10">
      <div className="flex flex-col gap-5 px-8 lg:px-0 mt-10">
        <h1 className="font-bold lg:text-[35px] text-[#313231]">
          One platform. Total control
        </h1>
        <p className="text-[#313231] max-w-[800px] text-[14px]">
          From governance to chatrooms, education, and marketplaces, Gamms
          brings structure, engagement, and real-time collaboration under one
          secure system.
          <br /> Whether you’re leading a club, brand, or network, Gamms makes
          connection effortless and growth inevitable.
        </p>
        <Buttons
          text="Create a community"
          styles="bg-[#3AAFA9] border-solid border border-[#3AAFA9] w-[300px]"
        />
      </div>
      <div data-aos="fade-right" className="flex-col lg:flex lg:flex-row mt-20 py-12 lg:py-10 px-6 lg:px-12 min-h-screen lg:min-h-min items-start gap-8 bg-[#1A2631] rounded-[30px]">
        <Image alt="" width={400} height={400} src={"/assets/Frame 40.svg"} className="z-10 h-[470px] lg:h-[400px] lg:w-[500px] object-cover rounded-[20px]"/>
        <div className="flex flex-col gap-3">
          <h1 className="font-semibold text-[20px] mt-5 lg:mt-0 lg:text-[35px] lg:max-w-[550px] text-[#FFFCF1]">
            A home where you actually want
            to be
          </h1>
        
          <p className="text-[#FFFCF1] max-w-[400px] text-[14px]">
            Beautiful, intuitive interface that makes engagement effortless.
            From discussions to learning to shopping — all in one seamless
            experience.
          </p>
          <div className="flex flex-col mt-3 lg:mt-0 text-[#FFFCF1] gap-3 pl-3">
            {lists.map((list) => {
              return (
                <div className="flex gap-3" key={list}>
                  <Image
                    alt=""
                    width={15}
                    height={15}
                    src={"/assets/checkmark.svg"}
                  />
                  <p className="text-[#FFFCF1] text-[14px]">{list}</p>
                </div>
              );
            })}
          </div>
            <Buttons
            text="Join a community"
            styles="bg-[#3AAFA9] border-solid border mt-5 lg:mt-0 border-[#3AAFA9]"
          />
        
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
