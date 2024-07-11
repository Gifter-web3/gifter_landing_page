import React from "react";
import Image from "next/image";
import MarketPlaceImg from "../../public/assets/imgs/MarketPlace.png";
import Apple from "@/public/assets/imgs/apple.png";
import Rect from "@/public/assets/imgs/rectR.png";

const MarketPlace = () => {
  return (
    <div className="flex w-full h-auto overflow-hidden">
      <Image
        src={MarketPlaceImg}
        alt="Marketplace Background"
        className="w-full h-[955px]"
      />
      <div className=" absolute top-[20rem] md:top-[23rem] left-[1rem] md:left-[43rem] flex flex-col justify-center items-center gap-6 md:gap-[38px]">
        <p className="font-Orbitron font-semibold md:font-bold text-[46px] md:text-[66px] leading-[78px] tracking-[1px] text-white">
          Coming soon.....
        </p>
        <div className="flex gap-3 md:gap-9">
          <div className="flex items-center gap-2 w-[165px] md:w-[202px] h-[59px] rounded-[15px] px-[20px] md:px-8 py-[27px] bg-black">
            <Image src={Apple} alt="Apple" className="w-[23px] h-[25px]" />{" "}
            <p className="font-bold text-[14px] md:text-base leading-4 tracking-[1.6px] text-white">
              APP STORE
            </p>
          </div>
          <div className="flex items-center gap-2 w-[170px] md:w-[203px] h-[59px] rounded-[15px] px-[20px] md:px-8  py-[27px] bg-black">
            <Image src={Rect} alt="Rect" className="w-[23px] h-[25px]" />{" "}
            <p className="font-bold text-[14px] md:text-base leading-4 tracking-[1.6px] text-white">
              PLAY STORE
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketPlace;
