import React, { useState } from "react";
import Image from "next/image";
import RArrow from "@/public/assets/icons/Icons.svg";
import Link from "next/link";

import Logo from "@/public/assets/Logo.png";
import Menu from "@/public/assets/menu.svg";
import TextLogo from "../../public/assets/imgs/TextLogo.png";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <>
      <div className="hidden sm:flex w-full justify-center top-[50px] fixed z-[1000]">
        <nav className="bg-black text-white px-[45px] py-4 flex justify-between w-[1297px] h-[59px] rounded-[90px] items-center">
          <div className="text-2xl lg:text-3xl font-semibold md:font-bold mr-3 lg:mr-auto leading-[33px] md:leading-[38px] font-Orbitron">
            <Link href={"/"}>
              {" "}
              <Image
                priority
                src={TextLogo}
                alt="Icons"
                width={110}
                height={30}
              />
            </Link>
          </div>
          <div className="flex w-[500px] lg:w-[781px] justify-between items-center">
            <div className="w-auto lg:w-[412px] h-[40px] gap-4 flex justify-between font-semibold lg:font-bold items-center text-[15px] font-['Manrope']">
              <Link href="/future">Future</Link>
              <Link href="/marketplace">Litepaper</Link>
              <Link href="/marketplace">Whitepaper</Link>
              <Link href="/marketplace">Marketplace</Link>{" "}
            </div>
            <button className="flex justify-center text-base font-medium leading-5 font-Inter w-[164px]">
              Join waitlist
              <Image priority src={RArrow} alt="Icons" width={20} height={20} />
            </button>{" "}
          </div>
        </nav>
      </div>
      <nav className="block sm:hidden">
        <div className="flex justify-between items-center bg-black p-5 w-full h-[81px] gap-[290px] fixed top-0 z-[1000] border-[1px] border-solid border-[#405f5b]">
          <Link href="/main" onClick={() => setIsActive(false)}>
            <Image src={Logo} alt="Logo Icon" width={40} height={41} />
          </Link>
          <button onClick={toggleMenu}>
            <Image src={Menu} alt="Menu Icon" width={20} height={20} />
          </button>
        </div>
        {isActive && (
          <div className="flex flex-col items-center justify-start pt-[200px] px-[50px] z-[1000] gap-1 fixed top-[81px] right-0 w-full h-[90%] bg-slate-900 text-white font-medium text-[20px] font-Inter leading-[25px]">
            <div className="flex flex-col items-start gap-9">
              <Link href="/future" onClick={() => setIsActive(false)}>
                Future
              </Link>
              <Link href="/marketplace" onClick={() => setIsActive(false)}>
                Litepaper
              </Link>
              <Link href="/marketplace" onClick={() => setIsActive(false)}>
                Whitepaper
              </Link>
              <Link href="/marketplace" onClick={() => setIsActive(false)}>
                Marketplace
              </Link>{" "}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
