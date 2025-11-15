import React from "react";
import buttonProps from "@/types/buttonTypes";
const Buttons = ({ text, styles }: buttonProps) => {
  return (
    <button
      className={`${styles} cursor-pointer border-2 border-solid border-[#1A263180] rounded-[30px] flex items-center justify-center font-semibold py-3 px-10 text-white`}
    >
      {text}
    </button>
  );
};

export default Buttons;
