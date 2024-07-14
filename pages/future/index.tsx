import React from "react";
import Image from "next/image";
import FutureBackImg from "@/public/assets/imgs/futureBackImg.png";
import StarEffectImg from "@/public/assets/imgs/starEffect.png";
import StartEffectImgSmall from "@/public/assets/imgs/team-top-small.png";
import EllipseImg from "@/public/assets/imgs/EllipseF.png";
import RoundEffect from "@/public/assets/imgs/RoundEffect.png";
import Line from "@/public/assets/imgs/LineF.png";
import Round from "@/public/assets/imgs/round.png";

import Seasonality from "@/public/assets/imgs/Seasonality.png";
import MarketIntelligence from "@/public/assets/imgs/MarketIntelligence.png";
import MobileIssueDetector from "@/public/assets/imgs/MobileIssueDetector.png";
import OpportunityCalculation from "@/public/assets/imgs/OpportunityCalculation.png";
import bestRankSpotter from "@/public/assets/imgs/bestRankSpotter.png";
import SmartAlerts from "@/public/assets/imgs/SmartAlerts.png";

import CardGrid from "@/public/assets/imgs/cardGrid.png";

import Vector from "@/public/assets/icons/vectorB.svg";
import TakeCareGiftcard from "@/components/TakeCareGiftcard";
import BuyAndSellGiftcard from "@/components/BuyAndSellGiftcard";

import Looper from "@/public/assets/imgs/Looper.png";
import bottomEffect from "@/public/assets/imgs/bottomEffect.png";
import Footer from "@/components/Footer";

import RoadMapLiine from "@/public/assets/imgs/Line.png";

const Future = () => {
  return (
    <>
      {" "}
      <div className="relative">
        <div className="flex w-full flex-col h-auto overflow-hidden relative">
          <div className="w-full h-full">
            <Image
              src={FutureBackImg}
              alt="Marketplace Background"
              className="w-full h-[744px] md:h-[955px]"
            />
            <Image
              src={StarEffectImg}
              alt="Marketplace Background"
              className="w-[1052px] h-[561px] absolute top-[193px] left-[405px]"
            />
            <Image
              src={EllipseImg}
              alt="Marketplace Background"
              className="w-[1052px] h-[561px] absolute top-[15rem] right-[-1rem]"
            />
          </div>

          <div className="flex flex-col items-center w-full xl:w-[1112px] pt-[145px] md:pt-[253px] absolute left-0 xl:left-[23rem] gap-[86px]">
            <p className="font-Orbitron font-extrabold text-[40px] md:text-[50px] lg:text-[70px] leading-[55px] md:leading-[88px] text-center text-white">
              Lorem Ipsum{" "}
              <span className="bg-[#d25804] rounded-xl">Generator</span> Lorem
              Ipsum
            </p>
            <div className="flex justify-between gap-[20px] md:gap-[85px] xl:gap-[150px] py-[10px]">
              <button className="w-[100px] md:w-[170px] h-[39px] text-white border-[1px] border-solid border-white rounded-[10px] font-Inter font-medium text-sm sm:text-base leading-[19px] tracking-[-2%]">
                Whitelist
              </button>
              <button className="w-[100px] md:w-[170px] h-[39px] text-white border-[1px] border-solid border-white rounded-[10px] font-Inter font-medium text-sm sm:text-base leading-[19px] tracking-[-2%]">
                White Paper
              </button>
              <button className="w-[100px] md:w-[170px] h-[39px] text-white border-[1px] border-solid border-white rounded-[10px] font-Inter font-medium text-sm sm:text-base leading-[19px] tracking-[-2%]">
                Lite Paper
              </button>
            </div>
          </div>
          <Image
            src={RoundEffect}
            alt="Round Effect"
            className="w-full h-[1014px] absolute top-[46rem] left-0 z-30 hidden md:block"
          />
          <Image
            src={StartEffectImgSmall}
            alt="Round Background Small"
            className="w-[1052px] h-[561px] absolute top-[29rem] sm:top-[193px] left-0 sm:left-[405px] block md:hidden"
          />
        </div>

        <div className="flex flex-col items-center bg-black">
          <p className="font-Orbitron font-bold text-[40px] md:text-[54px] leading-[60px] text-white pb-[50px]">
            ICO Road Map
          </p>

          <div className="p-6 rounded-xl mb-10">
            <div className="justify-between relative w-[25rem] xl:w-[1244px] h-[37rem] xl:h-[336px] rounded-[27px] border-[2px] gap-[30px] px-[45px] py-[46px] bg-gradient2 hidden xl:flex">
              <div className="flex flex-col md:flex-row relative">
                <div className="absolute top-[70px] left-0 flex flex-col gap-[6px]">
                  <p className="text-style">15.01.25</p>
                  <div className="ml-[28px] transform -translate-x-1/2 bg-[#933FFE] w-[47px] h-[3px]"></div>
                  <p className="text-style">20.02.25</p>
                  <p className="text-style mt-11">Lorem Ipsum</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row absolute top-[150px] left-[205px]">
                <div className="flex flex-col text-[#933FFE] font-Inter font-semibold">
                  Gifter MVP
                </div>
              </div>

              <div className="flex flex-col md:flex-row absolute top-[115px] left-[424px]">
                <div className="flex flex-col gap-[6px]">
                  <p className="text-style">15.01.25</p>
                  <div className="ml-[28px] transform -translate-x-1/2 bg-[#933FFE] w-[47px] h-[3px]"></div>
                  <p className="text-style">20.02.25</p>
                  <p className="text-style mt-11 font-Inter">Pre-ICO</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row absolute top-[115px] left-[678px]">
                <div className="flex flex-col gap-[6px]">
                  <p className="text-style">15.01.25</p>
                  <div className="ml-[28px] transform -translate-x-1/2 bg-[#933FFE] w-[47px] h-[3px]"></div>
                  <p className="text-style">20.02.25</p>
                  <p className="text-style mt-11 ml-[17px]">ICO</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row absolute top-[115px] left-[904px]">
                <div className="flex flex-col gap-[6px]">
                  <p className="text-style">15.01.25</p>
                  <div className="ml-[28px] transform -translate-x-1/2 bg-[#933FFE] w-[47px] h-[3px]"></div>
                  <p className="text-style">20.02.25</p>
                  <p className="text-style mt-11 ml-[-15px]">Lorem Ipsum</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row absolute top-[115px] left-[1150px]">
                <div className="flex flex-col gap-[6px]">
                  <p className="text-style">15.01.25</p>
                  <div className="ml-[28px] transform -translate-x-1/2 bg-[#933FFE] w-[47px] h-[3px]"></div>
                  <p className="text-style">20.02.25</p>
                  <p className="text-style mt-11 ml-[-15px]">Lorem Ipsum</p>
                </div>
              </div>
              <Image
                src={Line}
                alt="Line"
                className="w-[18px] md:w-[1137px] h-[35rem] md:h-[18px] absolute top-[0.75rem] md:top-[11.75rem] left-[12rem] md:left-[3.25rem] bg-no-repeat"
              />
            </div>
          </div>

          <div className="flex flex-col xl:flex-row justify-around gap-[60px]">
            <div className="p-2 rounded-xl mb-10 block xl:hidden">
              <div className="h-full flex flex-col relative gap-[50px] rounded-[27px] border-[2px] px-[45px] py-[46px] bg-gradient2">
                <div className="flex text-style gap-[60px] justify-between">
                  <div>
                    <p>15.01.25</p>
                    <p>20.02.25</p>
                  </div>
                  <p className="w-[100px] mx-auto">Lorem Ipsum</p>
                </div>
                <div className="flex text-style text-[#933FFE]">Gifter MVP</div>
                <div className="flex text-style gap-[60px] justify-between">
                  <div>
                    <p>15.01.25</p>
                    <p>20.02.25</p>
                  </div>
                  <p className="w-[100px] mx-auto">Pre-ICO</p>
                </div>
                <div className="flex text-style gap-[60px] justify-between">
                  <div>
                    <p>15.01.25</p>
                    <p>20.02.25</p>
                  </div>
                  <p className="w-[100px] mx-auto">ICO</p>
                </div>
                <div className="flex text-style gap-[60px] justify-between">
                  <div>
                    <p>15.01.25</p>
                    <p>20.02.25</p>
                  </div>
                  <p className="w-[100px] mx-auto">Lorem Ipsum</p>
                </div>
                <Image
                  src={Line}
                  alt="Road Map Line"
                  className="w-full h-[15px] rotate-90 absolute top-[245px] left-[-24px]"
                />
              </div>
            </div>
            <div className="w-auto md:w-[516px] h-auto md:h-[326px] rounded-[27px] border-[2px] gap-[30px] px-[45px] py-3 md:py-[46px] bg-gradient2 mx-2">
              <h2 className="text-center font-Orbitron font-bold text-white text-[25px] leading-[31px] mb-4">
                Start Pre-ICO
              </h2>
              <p className="text-center font-Inter font-normal text-[#FFFFFF99] text-base leading-[32px] tracking-[-1%] mb-4">
                Lorem ipsum dolor sit amet, consectetur
              </p>
              <div className="relative mb-4">
                <div className="h-2 bg-gray-700 rounded-full">
                  <div className="w-1/3 h-full bg-purple-600 rounded-full"></div>
                </div>
                <Image
                  src={Round}
                  alt="Round"
                  className="absolute top-[-6px] left-[99px] md:left-[131px] w-[21px] h-[21px]"
                />
              </div>
              <div className="flex justify-between font-Inter text-base leading-[32px] tracking-[-1%] text-white font-semibold md:font-bold">
                <div className="flex flex-col justify-between font-Inter text-base leading-[32px] tracking-[-1%] text-[#933FFE] font-bold">
                  <p>Soft Cap</p>
                  <span className="text-white">$50,000 USD</span>
                </div>
                <p>1 Gifter - 0.56 USD</p>
                <p>
                  Hard Cap
                  <br />
                  $500,000 USD
                </p>
              </div>
            </div>

            <div className="w-auto md:w-[516px] h-auto md:h-[326px] rounded-[27px] border-[2px] gap-[30px] px-[45px] py-3 md:py-[46px] bg-gradient2 mx-2">
              <h2 className="text-center font-Orbitron font-bold text-white text-[25px] leading-[31px] mb-4">
                ICO
              </h2>
              <p className="text-center font-Inter font-normal text-[#FFFFFF99] text-base leading-[32px] tracking-[-1%] mb-4">
                Lorem ipsum dolor sit amet, consectetur
              </p>
              <div className="relative mb-4">
                <div className="h-2 bg-gray-700 rounded-full">
                  <div className="w-1/3 h-full bg-purple-600 rounded-full"></div>
                </div>
                <Image
                  src={Round}
                  alt="Round"
                  className="absolute top-[-6px] left-[99px] md:left-[131px] w-[21px] h-[21px]"
                />
                <div className="absolute top-0 left-1/3 transform -translate-x-1/2 bg-purple-600 w-2 h-2 rounded-full"></div>
              </div>
              <div className="flex justify-between font-Inter text-base leading-[32px] tracking-[-1%] text-white font-semibold md:font-bold">
                <div className="flex flex-col justify-between font-Inter text-base leading-[32px] tracking-[-1%] text-[#933FFE] font-bold">
                  <p>Soft Cap</p>
                  <span className="text-white">$50,000 USD</span>
                </div>
                <p>1 Gifter - 0.56 USD</p>
                <p>
                  Hard Cap
                  <br />
                  $500,000 USD
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center bg-gradient-enhance py-[50px] md:py-[100px] relative">
          <div className="text-white p-4 md:p-10">
            <div className="flex flex-col items-center gap-[34px]">
              <p className="w-[308px] h-[34px] text-center border-[1px] border-[#FFFFFF0A] py-[5px] px-[61px] rounded-[999px] font-Inter font-normal text-sm leading-6 tracking-[1.12px]">
                WHAT MORE TO COME
              </p>
              <p className="text-center text-[40px] xl:text-[53px] font-semibold xl:font-bold leading-[50px] xl:leading-[64px] font-Orbitron mb-10">
                Enhance gifting efficiency
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[5px] md:gap-[24px]">
              <div className="bg-[#0a0118] p-6 rounded-xl shadow-lg sm:w-[335px] xl:w-[400px] h-[304px]">
                <div className="mb-4 relative">
                  <Image src={Seasonality} alt="Seasonality" className="" />
                  <Image
                    src={CardGrid}
                    alt="CardGrid"
                    className="absolute top-0 left-0"
                  />
                </div>
                <h2 className="text-[18px] font-Inter font-semibold leading-6 tracking-[-0.36px] mb-2">
                  Seasonality
                </h2>
                <p className="mb-4">
                  {`Spot when any keywords' seasonality is trending and when losing`}
                </p>
              </div>
              <div className="bg-[#0a0118] p-6 rounded-xl shadow-lg sm:w-[335px] xl:w-[400px] h-[304px]">
                <div className="mb-4 relative">
                  <Image
                    src={MobileIssueDetector}
                    alt="MobileIssueDetector"
                    className=""
                  />
                  <Image
                    src={CardGrid}
                    alt="CardGrid"
                    className="absolute top-0 left-0"
                  />
                </div>
                <h2 className="text-[18px] font-Inter font-semibold leading-6 tracking-[-0.36px] mb-2">
                  Mobile Issue Detector
                </h2>
                <p className="mb-4 font-normal text-base leading-6 tracking-[-0.16px] text-[#9B96B0]">
                  When you have issues on mobile pages, we find them out by
                  ranking differences.
                </p>
              </div>
              <div className="bg-[#0a0118] p-6 rounded-xl shadow-lg sm:w-[335px] xl:w-[400px] h-[304px]">
                <div className="mb-4 relative">
                  <Image
                    src={bestRankSpotter}
                    alt="bestRankSpotter"
                    className=""
                  />
                  <Image
                    src={CardGrid}
                    alt="CardGrid"
                    className="absolute top-0 left-0"
                  />
                </div>
                <h2 className="text-[18px] font-Inter font-semibold leading-6 tracking-[-0.36px] mb-2">
                  Best Rank Spotter
                </h2>
                <p className="mb-4 font-normal text-base leading-6 tracking-[-0.16px] text-[#9B96B0]">
                  Analyzes the history of ranking and lets you know when you
                  spot the best rank.
                </p>
              </div>
              <div className="bg-[#0a0118] p-6 rounded-xl shadow-lg sm:w-[335px] xl:w-[400px] h-[304px]">
                <div className="mb-4 relative">
                  <Image src={SmartAlerts} alt="SmartAlerts" className="" />
                  <Image
                    src={CardGrid}
                    alt="CardGrid"
                    className="absolute top-0 left-0"
                  />
                </div>
                <h2 className="text-[18px] font-Inter font-semibold leading-6 tracking-[-0.36px] mb-2">
                  Smart Alerts
                </h2>
                <p className="mb-4 font-normal text-base leading-6 tracking-[-0.16px] text-[#9B96B0]">
                  Simplify gift management with advanced alerts
                </p>
              </div>
              <div className="bg-[#0a0118] p-6 rounded-xl shadow-lg sm:w-[335px] xl:w-[400px] h-[304px]">
                <div className="mb-4 relative">
                  <Image
                    src={MarketIntelligence}
                    alt="MarketIntelligence"
                    className=""
                  />
                  <Image
                    src={CardGrid}
                    alt="CardGrid"
                    className="absolute top-0 left-0"
                  />
                </div>
                <h2 className="text-[18px] font-Inter font-semibold leading-6 tracking-[-0.36px] mb-2">
                  Market Intelligence Based on AI
                </h2>
                <p className="mb-4 font-normal text-base leading-6 tracking-[-0.16px] text-[#9B96B0]">
                  Experience seamless gifting with intelligent notifications
                </p>
              </div>
              <div className="bg-[#0a0118] p-6 rounded-xl shadow-lg sm:w-[335px] xl:w-[400px] h-[304px]">
                <div className="mb-4 relative">
                  <Image
                    src={OpportunityCalculation}
                    alt="OpportunityCalculation"
                    className=""
                  />
                  <Image
                    src={CardGrid}
                    alt="CardGrid"
                    className="absolute top-0 left-0"
                  />
                </div>
                <h2 className="text-base font-Inter font-semibold leading-6 tracking-[-0.36px] mb-2">
                  Opportunity Calculation
                </h2>
                <p className="mb-4 font-normal text-base leading-6 tracking-[-0.16px] text-[#9B96B0]">
                  A few position changes can bring the most traffic by using the
                  opportunity metric.
                </p>
              </div>
            </div>
          </div>{" "}
          <button className="flex justify-center items-center mt-[16px] text-black font-Inter font-medium text-base leading-[19px] tracking-[-2%] bg-white w-[162px] h-[40px] rounded-[10px] py-[10px] px-[15px] gap-1">
            Get Started{" "}
            <span>
              <Image
                src={Vector}
                alt="Vector"
                className="w-[12.5px] h-[10px]"
              />
            </span>
          </button>
          <p className="flex justify-center font-Orbitron font-black leading-[58px] md:leading-[260px] mt-[40px] text-white text-[58px] md:text-[100px] xl:text-[200px] py-[10px]">
            Buy and Sell
          </p>
          <Image
            src={Looper}
            alt="Looper"
            className="w-[1020px] h-[1044px] absolute bottom-[-246px] md:right-0 xl:right-[-411px] hidden sm:block"
          />
        </div>

        <div className="bg-black">
          <BuyAndSellGiftcard />
          <TakeCareGiftcard />
        </div>
        <Image
          src={bottomEffect}
          alt="bottomEffect"
          className="w-[3747px] h-[1204px] absolute bottom-[-70rem] md:bottom-[-34rem] right-[2rem] z-50"
        />
      </div>
      <Footer />
    </>
  );
};

export default Future;
