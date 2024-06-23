import React from "react";
import logo from "../../assets/images/logo.png";
const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div>
      <hr className="h-px w-4/5 bg-gray-400 opacity-50 outline-none border-none" />
      <div className="flex items-center justify-around pt-4 ">
        <img src={logo} alt="logo" />
        <p>
          Copyright {year} page. Marko Web's project coping for learning Redux
          Toolkit
        </p>
      </div>
    </div>
  );
};

export default Footer;
