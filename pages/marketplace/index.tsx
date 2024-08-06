import React from "react";
import Image from "next/image";
import MarketPlaceImg from "../../public/assets/imgs/MarketPlace.png";
import Apple from "@/public/assets/imgs/apple.png";
import Rect from "@/public/assets/imgs/rectR.png";
import Footer from "@/components/Footer";
import TakeCareGiftcard from "@/components/TakeCareGiftcard";
import TeamTopImage from "@/public/assets/imgs/team-top.png";

const MarketPlace = () => {
  return (
    <>
    {/* left-[1rem] sm:left-[6rem] lg:left-[14rem] xl:left-[43rem] */}
      <div className="flex w-full h-auto flex-col relative  banner-gradient min-h-screen">
        <div className="absolute top-1/2 -translate-y-1/2 w-full">
          <p className="font-Orbitron font-semibold md:font-bold text-[46px] md:text-[66px] leading-[78px] tracking-[1px] text-white text-center mx-auto">
            Coming soon.....
          </p>
          {/* <div className="flex gap-3 md:gap-9">
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
          </div> */}
        </div>
      </div>
      <div className="relative">
        <div className="w-full absolute left-0 top-0 -translate-y-[55%]">
          <Image src={TeamTopImage} alt="team-top" className="w-full h-auto" />
        </div>
        <TakeCareGiftcard />
        <div className="footer-gradient">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default MarketPlace;
