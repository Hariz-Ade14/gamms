"use client";
import React, { useRef,useEffect } from "react";
import Buttons from "@/components/Buttons";
import Image from "next/image";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import AOS from "aos";
import "aos/dist/aos.css";
import { lists,figures } from "@/components/Data";

const SectionTwo = () => {
  useEffect(() => {
    AOS.init({
      duration: 500, 
      easing: "ease-in", 
      once: true, 
      mirror: false, 
    });
  }, []);
  const { ref, inView } = useInView({ triggerOnce: true }); // triggers once when visible
  return (
    <div className="p-5 lg:p-10 bg-[#1A2631]">
      <div data-aos="fade-left" className="flex flex-col lg:flex-row-reverse py-12 lg:py-10 px-6 lg:px-12 items-start min-h-screen lg:min-h-min justify-between gap-8 bg-[#ffffff] rounded-[30px]">
        <Image
          alt=""
          width={400}
          height={400}
          src={"/assets/man.svg"}
          className="z-10 h-[470px] lg:h-[400px] lg:w-[500px] object-cover rounded-[20px]"
        />
        <div className="flex flex-col gap-3">
          <h1 className="font-semibold text-[20px] lg:text-[35px] lg:max-w-[550px] text-[#313231]">
            Admin dashboard that actually works
          </h1>
          <p className="text-[#313231] max-w-[400px] text-[14px]">
            Manage everything from one beautiful interface. Track growth,
            moderate content, analyze engagement, and make data-driven
            decisions.
          </p>
          <div className="flex flex-col text-[#313231] gap-3 pl-3">
            {lists.map((list) => {
              return (
                <div key={list} className="flex gap-3">
                  <Image
                    alt=""
                    width={15}
                    height={15}
                    src={"/assets/checkmark.svg"}
                  />
                  <p className="text-[#313231] text-[14px]">{list}</p>
                </div>
              );
            })}
          </div>
          <Buttons
            text="Join a community"
            styles="bg-[#3AAFA9] border-solid mt-5 lg:mt-0 border border-[#3AAFA9]"
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row mt-10 items-center justify-center lg:py-5 py-10 lg:items-start px-10 gap-10 lg:gap-40 rounded-[30px] border border-solid border-[#3AAFA936]">
        {figures.map(({ fig, text }) => {
          return (
            <div key={text} className="flex flex-col gap-1 items-center">
              <h1 className="font-bold text-[25px] text-[#FFFCF1]">
                <div ref={ref}>
                  {typeof fig === "number" ? (
                    inView ? (
                      <CountUp start={0} end={fig} duration={3} suffix="%" />
                    ) : (
                      0
                    )
                  ) : (
                    fig // just show the string (e.g., "24/7")
                  )}
                </div>
              </h1>
              <p className="font-semibold text-[15px] text-[#FFFCF1]">{text}</p>
            </div>
          );
        })}
        <div className="flex flex-col gap-1 items-center mt-5">
          <Image
            src={"/assets/infinity.svg"}
            width={30}
            height={20}
            alt="infinity"
          />
          <p className="font-semibold text-[15px] text-[#FFFCF1]">
            Possibilities
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
