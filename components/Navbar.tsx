import React from "react";
import Image from "next/image";
import RArrow from "../public/assets/icons/Icons.svg";

const Navbar = () => {
  return (
    <div className="flex w-full justify-center top-[50px] absolute">
      <nav className="bg-black text-white p-4 flex justify-between w-[1297px] h-[59px] rounded-[90px] items-center">
        <div className="text-3xl font-bold leading-[38px] font-Orbitron">
          GIFTER
        </div>
        <div className="flex space-x-4 w-[781px] justify-between items-center">
          <div className="w-[412px] h-[40px] flex justify-between font-bold items-center text-[15px] font-Manrope">
            <a href="#future">Future</a>
            <a href="#features">Features</a>
            <a href="#marketplace">Marketplace</a>
            <a href="#contact">Contact</a>{" "}
          </div>
          <button className="flex justify-center text-base font-medium leading-5 font-Inter w-[164px]">
            Get Started
            <Image priority src={RArrow} alt="Icons" width={20} height={20} />
          </button>{" "}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
