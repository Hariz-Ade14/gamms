import React from "react";

const list = [
  {
    header: "Product",
    menulist: ["Overview", "Dashboard", "Features", "Integrations", "Pricing"],
  },
  {
    header: "Resources",
    menulist: ["Blog", "Help Center", "FAQs", "Documentation", "Community"],
  },
  {
    header: "Product",
    menulist: ["About", "Careers", "Privacy Policy", "Terms of Use", "Contact"],
  },
];
const Footer = () => {
  return (
    <div className="flex lg:flex-row flex-col border-none items-start justify-start bg-[#1A2631] gap-10 lg:gap-[350px] p-10 lg:p-12">
      {list.map(({ header, menulist },idx) => {
        return (
          <div key={idx} className="text-[#FFFFFF]">
            <p className="font-semibold text-[20px]">{header}</p>
            <ul>
              {menulist.map((listItem,idx) => (
                <li key={idx}>{listItem}</li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Footer;
