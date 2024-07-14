import React from "react";
import Image from "next/image";
import Cta from "../public/assets/imgs/cta.png";
import BackImg from "../public/assets/imgs/take-giftcard.png";

const TakeCareGiftcard = () => {
  return (
    <div className="flex justify-center py-[50px] sm:py-[100px] px-[10px] relative">
      <Image src={BackImg} alt="Cta" width={1128} className="h-[475px] sm:h-[603px]" />
      <div className="flex flex-col items-center sm:gap-[48px] xl:w-[1148px] py-[60px] absolute sm:top-[157px] xl:left-[378px]">
        <Image src={Cta} alt="Cta" className="w-[70px] sm:w-[128px] h-[70px] sm:h-[128px]" />
        <div className="flex flex-col items-center gap-[20px] sm:gap-[24px]">
          <p className="font-Orbitron text-[30px] sm:text-[40px] xl:text-[54px] leading-[40px] sm:leading-[64px] font-semibold text-white text-center">
            Take Control of Your Giftcards
          </p>
          <p className="text-[#9B96B0] text-base sm:text-[20px] sm:tracking-[-0.2px] sm:leading-7 font-normal text-center px-3 sm:px-0">
            Get started with Wope and stay on top of your rankings in no time!
          </p>
          <div className="flex items-center relative">
            {" "}
            <input
              type="text"
              className="w-[354px] h-[48px] rounded-[999px] bg-[#FFFFFF0A] border-[1px] border-solid border-[##FFFFFF0A] pl-[22px] text-white"
              placeholder="Enter your email"
            />
            <button className="w-[114px] h-[40px] rounded-[999px] border-[1px] btn-gradient border-[#FFFFFF1A] border-solid absolute right-1 font-[#8f8a8a] text-[#9B96B0]">
              Try Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TakeCareGiftcard;
