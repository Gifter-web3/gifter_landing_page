import React from "react";
import Image from "next/image";
import Cta from "../public/assets/imgs/cta.png";
import BackImg from "../public/assets/imgs/take-giftcard.png";
import Gift from "../public/assets/imgs/gift3.png";

const TakeCareGiftcard = () => {
  return (
    <div className="flex justify-center py-[50px] sm:py-[100px] px-[10px] relative">
      <Image
        src={BackImg}
        alt="Cta"
        width={1128}
        className="h-[550px] md:h-[690px] sm:h-[603px] z-20"
      />
      <div className="flex flex-col items-center sm:gap-[48px] xl:w-[1148px] py-[60px] absolute sm:top-[130px] mx-auto z-30 px-1 sm:px-0">
        <Image src={Gift} alt="Cta" className="w-[151px] h-[132px]" />
        <div className="flex flex-col items-center gap-[20px] sm:gap-[24px]">
          <p className="font-Orbitron text-[24px] sm:text-[36px] leading-[40px] sm:leading-[52px] font-bold text-white text-center max-w-[964px]">
            A place where web3 users and businesses can create unique gift
            cards/rewards for their loved ones and customers.
          </p>
          <p className="text-[#9B96B0] text-base sm:text-[20px] sm:tracking-[-0.2px] sm:leading-7 font-normal text-center px-3 sm:px-0 max-w-[690px]">
          Be among the first to experience Gifter and get rewarded with some perks and potential airdrop.
          </p>
          <div className="flex items-center relative">
            {" "}
            <input
              type="text"
              className="w-[354px] h-[48px] rounded-[999px] bg-[#FFFFFF0A] border-[1px] border-solid border-[##FFFFFF0A] pl-[22px] text-white"
              placeholder="Enter your email"
            />
            <button className="w-[114px] h-[40px] rounded-[999px] border-[1px] btn-gradient border-[#FFFFFF1A] border-solid absolute right-1 font-[#8f8a8a] text-[#9B96B0]">
              Join
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TakeCareGiftcard;
