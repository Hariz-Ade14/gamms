"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import {tabs,thirdLists,secondLists,firstLists,Content} from "../../../components/Data"

const SectionThree = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const handleAnimation = (index: number) => {
    setHoveredIndex(index);
  };

  useEffect(() => {
    AOS.init({
      duration: 500, // animation duration (in ms)
      easing: "ease-in", // easing function
      once: true, // whether animation should happen only once
      mirror: false, // whether elements animate out while scrolling past
    });
  }, []);

  return (
    <>
      <section className="flex flex-col items-center justify-center lg:px-0 px-5 py-10">
        <div className="flex flex-col gap-5 items-center justify-center">
          <h1 className="font-bold text-[30px] lg:max-w-[520px] lg;text-[40px] text-center leading-[40px] text-[#313231] mt-6">
            Everything your community needs in one place
          </h1>
          <p className="text-[17px] lg:text-[14px] text-center text-[#313231]">
            From seamless management to active engagement, Gamms gives you every
            tool to build, grow, and <br /> sustain a thriving community.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-7 lg:px-20 py-10">
          {Content.map(({ icon, header, content }, index) => {
            return (
              <div
                onMouseEnter={() => handleAnimation(index)}
                onMouseLeave={() => handleAnimation(index)}
                key={index}
                data-aos="zoom-in"
                className="flex cursor-pointer flex-col px-8 lg:px-5 pt-8 max-h-[400px] overflow-hidden hover:bg-white hover:shadow-xl gap-4 border border-solid border-[#3AAFA929] bg-gray-50 rounded-[20px]"
              >
                <div className="flex items-center justify-center border border-solid border-[#3AAFA980] p-1 w-[50px] h-[50px] lg:w-[30px] lg:h-[30px] rounded-[4px]">
                  <Image
                    src={icon}
                    width={20}
                    className="lg:w-[30px] lg:h-[30px] w-[40px] h-[40px]"
                    height={20}
                    alt="icon"
                  />
                </div>
                <h2 className="font-semibold text-[#313231] text-[20px] lg:text-[15px]">
                  {header}
                </h2>
                <p className="text-[#5B5B5B] max-w-[75%] lg:text-[12px] mb-8">
                  {content}
                </p>
                {hoveredIndex === index && (
                  <div
                    data-aos="fade-right"
                    className="h-[20px] -mb-3 self-end left-0 right-0 bottom-0 flex mx-auto w-[90%] rounded-[20px] bg-gradient-to-r from-[#3AAFA9] to-[#FFFCF1]"
                  ></div>
                )}
            
              </div>
            );
          })}
        </div>

        <div className="flex flex-col gap-5 items-center mt-26 justify-center">
          <h1 className="font-bold text-[30px] lg:text-[40px] text-center leading-[40px] text-[#313231]">
            Analytics / Engagement /Monetization
          </h1>
          <p className="text-[17px] lg:text-[14px] text-center text-[#313231]">
            Powerful tools designed to help you build, engage, and monetize your
            community, all in one place.
          </p>
        </div>
      </section>
      <div data-aos="fade-right" className="flex lg:flex-row-reverse flex-col-reverse py-10 mx-6 lg:mx-10 mt-10 border border-solid border-[#3AAFA9] p-5 lg:pl-12 items-start justify-between gap-8 bg-[#ffffff] rounded-[30px]">
        <div className="flex flex-row gap-3 items-center lg:max-w-[50%] overflow-x-scroll hide-scrollbar">
          <Image
            alt=""
            width={400}
            height={400}
            src={"/assets/man.svg"}
            className="z-10 h-[470px] lg:h-[400px] lg:w-[500px] object-cover rounded-[20px]"
          />
          <Image
            alt=""
            width={400}
            height={400}
            src={"/assets/man.svg"}
            className="z-10 h-[470px] lg:h-[400px] lg:w-[500px] object-cover rounded-[20px]"
          />
          <Image
            alt=""
            width={400}
            height={400}
            src={"/assets/man.svg"}
            className="z-10 h-[470px] lg:h-[400px] lg:w-[500px] object-cover rounded-[20px]"
          />
        </div>
        <div className="flex flex-col gap-3">
          <p className="font-bold text-[#3AAFA9] text-[17px] lg:text-[20px]">
            Analytics
          </p>
          <h1 className="font-bold text-[20px] lg:text-[35px] text-[#313231]">
            Insights that drive growth
          </h1>
          <p className="text-[#313231] max-w-[400px] text-[14px]">
            Understand your community at a deeper level with comprehensive
            analytics and actionable insights. Track what matters and make
            informed decisions to accelerate growth.
          </p>
          <div className="flex flex-col mt-5 text-[#313231] gap-3 pl-3">
            {firstLists.map((list) => {
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
        </div>
      </div>
      <div data-aos="fade-left" className="flex lg:flex-row-reverse flex-col-reverse py-10 mx-6 lg:mx-10 mt-10 p-5 lg:pl-12 items-start justify-between gap-8 bg-[#1A2631] rounded-[30px]">
        <div className="flex flex-row gap-3 items-center lg:max-w-[50%] overflow-x-scroll hide-scrollbar">
          <Image
            alt=""
            width={400}
            height={400}
            src={"/assets/man.svg"}
            className="z-10 h-[470px] lg:h-[400px] lg:w-[500px] object-cover rounded-[20px]"
          />
          <Image
            alt=""
            width={400}
            height={400}
            src={"/assets/man.svg"}
            className="z-10 h-[470px] lg:h-[400px] lg:w-[500px] object-cover rounded-[20px]"
          />
          <Image
            alt=""
            width={400}
            height={400}
            src={"/assets/man.svg"}
            className="z-10 h-[470px] lg:h-[400px] lg:w-[500px] object-cover rounded-[20px]"
          />
        </div>
        <div className="flex flex-col gap-3">
          <p className="font-bold text-[#3AAFA9] text-[17px] lg:text-[20px]">
            Engagements
          </p>
          <h1 className="font-bold text-[20px] lg:text-[35px] lg:max-w-[600px] text-[#fffcf1]">
            Unify your followers across platforms into one central hub.
          </h1>
          <p className="text-[#fffcf1] max-w-[400px] text-[14px]">
            Foster meaningful connections and keep members coming back with
            powerful engagement tools designed to spark conversations and build
            relationships.{" "}
          </p>
          <div className="flex flex-col mt-5  text-[#fffcf1] gap-3 pl-3">
            {secondLists.map((list) => {
              return (
                <div key={list} className="flex gap-3">
                  <Image
                    alt=""
                    width={15}
                    height={15}
                    src={"/assets/checkmark.svg"}
                  />
                  <p className="text-[#fffcf1] text-[14px]">{list}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div data-aos="fade-right" className="flex lg:flex-row-reverse flex-col-reverse py-10 mx-6 lg:mx-10 mt-10 border border-solid border-[#3AAFA9] p-5 lg:pl-12 items-start justify-between gap-8 bg-[#ffffff] rounded-[30px]">
        <div className="flex flex-row gap-3 items-center lg:max-w-[50%] overflow-x-scroll hide-scrollbar">
          <Image
            alt=""
            width={400}
            height={400}
            src={"/assets/man.svg"}
            className="z-10 h-[470px] lg:h-[400px] lg:w-[500px] object-cover rounded-[20px]"
          />
          <Image
            alt=""
            width={400}
            height={400}
            src={"/assets/man.svg"}
            className="z-10 h-[470px] lg:h-[400px] lg:w-[500px] object-cover rounded-[20px]"
          />
          <Image
            alt=""
            width={400}
            height={400}
            src={"/assets/man.svg"}
            className="z-10 h-[470px] lg:h-[400px] lg:w-[500px] object-cover rounded-[20px]"
          />
        </div>
        <div className="flex flex-col gap-3">
          <p className="font-bold text-[#3AAFA9] text-[17px] lg:text-[20px]">
            Monetization
          </p>
          <h1 className="font-bold text-[20px] lg:text-[35px] lg:max-w-[600px] text-[#313231]">
            Turn passion into profit
          </h1>
          <p className="text-[#313231] lg:max-w-[400px] text-[14px]">
            Build a sustainable business around your community with flexible
            monetization options that work for you and your members. No
            transaction fees on your terms.{" "}
          </p>
          <div className="flex flex-col mt-5 text-[#313231] gap-3 pl-3">
            {thirdLists.map((list) => {
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
        </div>
      </div>
      {/* <div className="mt-30 px-16 flex flex-col gap-10">
        <div className="flex flex-col gap-5 items-center justify-center">
          <h1 className="font-bold text-[40px] text-center leading-[40px] text-[#313231] mt-6">
            Built for community success
          </h1>
          <p className="text-[14px] text-center text-[#313231]">
            Everything you need to create exceptional community experiences,
            drive meaningful
            <br /> engagement, and build sustainable growth.
          </p>
        </div>

        <div className="flex mx-5 items-center justify-evenly gap-5 border border-solid border-[#4CAF50] rounded-[40px] py-3 pt-5 pb-6">
          {tabs.map((tab,idx) => {
            return (
              <p key={idx} className="relative text-[14px] text-[#313231] cursor-pointer hover:text-[#4CAF50] transition-colors duration-300 after:content-[''] after:absolute after:left-2/4 after:bottom-0 after:top-7 after:h-[2px] after:rounded-[3px] after:w-0 after:bg-[#4CAF50] after:transition-all after:duration-300  hover:after:left-0 hover:after:w-full">
                {tab}
              </p>
            );
          })}
        </div>

        <div className="border border solid border-[#95D5B2] rounded-[20px] h-[400px]"></div>
      </div> */}
    </>
  );
};

export default SectionThree;
