import React from "react";
import Image from "next/image";
import Cta from "../public/assets/imgs/cta.png";
import BackImg from "../public/assets/imgs/take-giftcard.png";

const TakeCareGiftcard = () => {
  return (
    <div className="flex justify-center py-[100px] px-[10px] relative">
      <Image src={BackImg} alt="Cta" width={1128} height={603} />
      <div className="flex flex-col items-center gap-[48px] w-[1148px] py-[60px] absolute top-[157px] left-[378px]">
        <Image src={Cta} alt="Cta" width={128} height={128} />
        <div className="flex flex-col items-center gap-[24px]">
          <p className="font-Orbitron text-[54px] leading-[64px] font-semibold text-white">
            Take Control of Your Giftcards
          </p>
          <p className="text-[#9B96B0] text-[20px] tracking-[-0.2px] leading-7 font-normal">
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
