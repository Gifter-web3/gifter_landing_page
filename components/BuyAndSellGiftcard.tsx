import React from "react";
import Image from "next/image";
import ArrowP from "../public/assets/icons/arrowP.svg";
import CryptocurrencyList from "./CryptocurrencyList";

const BuyAndSellGiftcard = () => {
  return (
    <div className="flex flex-col items-center xl:gap-[59px] py-[50px] xl:py-[100px] justify-center">
      <div className="flex flex-col items-center text-center gap-4 md:gap-8">
        <p className="font-Orbitron font-black text-[30px] lg:text-[50px] leading-[40px] lg:leading-[65px] text-white xl:w-[1077px]">
          Buy and sell Giftcards with the lowest fees in the industry
        </p>
        <p className="font-Inter text-base leading-6 font-normal text-[#FFFFFF99]">
          Buy and sell 150+ cryptocurrencies with 20+ fiat currencies using
          Giftcards.
        </p>
        <a href="#" className="flex justify-between text-white items-center">
          <p className="text-base leading-4 font-semibold font-Inter text-[#B982FF] pb-1">
            Learn more
          </p>
          <span>
            <Image src={ArrowP} alt="Arrow" width={24} height={24} />
          </span>
        </a>
      </div>
      <div className="mt-8 xl:mt-0">
        <CryptocurrencyList />
      </div>
    </div>
  );
};

export default BuyAndSellGiftcard;
