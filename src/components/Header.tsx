import Link from "next/link";
import React from "react";
import Buttons from "./Buttons";
import menuListProps from "@/types/menuListTypes";
import Logo from "./assets/logo.svg"
import Image from "next/image"
const menu: menuListProps[] = [
  {
    url: "/Products",
    text: "Products",
  },
  {
    url: "/Resources",
    text: "Resources",
  },
  {
    url: "/About",
    text: "About",
  },
  {
    url: "/Pricing",
    text: "Pricing",
  },
];
const Header = () => {
  return (
    <>
    <div className="hidden lg:flex items-center absolute left-0 backdrop-blurxl right-0 justify-between px-5 py-2.5 bg[#1A2631] border-2 border-solid border-[#3AAFA936] mx-5 my-5 rounded-[40px] ">
      <div className="menu flex items-center gap-5">
        <Image alt="" src={"./assets/logo.svg"} width={130} height={100}/>
        <ul className="menulist lg:flex text-[#FFFCF1] hidden text-[14px] items-center gap-10">
          {menu.map(({ url, text }) => {
            return (
              <li key={url}>
                <Link
                  className="relative text-white hover:text-[#4CAF50] transition-colors duration-300 after:content-[''] after:absolute after:left-2/4 after:bottom-0 after:top-7 after:h-[2px] after:rounded-[3px] after:w-0 after:bg-[#4CAF50] after:transition-all after:duration-300  hover:after:left-0 hover:after:w-full"
                  href={url}
                >
                  {text}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="cts hidden lg:flex items-center gap-5">
        <h1 className="text-[14px] text-white font-semibold">Login</h1>
        <Buttons
          text="Get started"
          styles="bg-[#3AAFA9] !py-2"
        />
      </div>
    </div>

    <div className="flex lg:hidden items-center justify-between bg-[#1A2631] border-none p-5 shadow-lg">
      <Image alt="" src={"./assets/logo.svg"} width={130} height={100}/>
      <Image alt="" src={"./assets/menu.svg"} width={30} height={30}/>
        
    </div>
    </>
  );
};

export default Header;
