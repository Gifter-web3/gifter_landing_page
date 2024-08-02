import React from "react";
import Image from "next/image";
import FutureBackImg from "@/public/assets/imgs/futureBackImg.png";
import StarEffectImg from "@/public/assets/imgs/starEffect.png";
import StartEffectImgSmall from "@/public/assets/imgs/team-top-small.png";
import EllipseImg from "@/public/assets/imgs/EllipseF.png";
import RoundEffect from "@/public/assets/imgs/RoundEffect.png";
import Line from "@/public/assets/imgs/Line.png";
import Round from "@/public/assets/imgs/round.png";

import OnChain from "@/public/assets/imgs/OnChain.png";
import MarketIntelligence from "@/public/assets/imgs/MarketIntelligence.png";
import MobileIssueDetector from "@/public/assets/imgs/MobileIssueDetector.png";
import OpportunityCalculation from "@/public/assets/imgs/OpportunityCalculation.png";
import bestRankSpotter from "@/public/assets/imgs/bestRankSpotter.png";
import SmartAlerts from "@/public/assets/imgs/SmartAlerts.png";

import CardGrid from "@/public/assets/imgs/cardGrid.png";

import Vector from "@/public/assets/icons/vectorB.svg";
import TakeCareGiftcard from "@/components/TakeCareGiftcard";
// import BuyAndSellGiftcard from "@/components/BuyAndSellGiftcard";

import Looper from "@/public/assets/imgs/net.png";
import bottomEffect from "@/public/assets/imgs/bottomEffect.png";
import Footer from "@/components/Footer";

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

          <div className="flex flex-col items-center w-full xl:w-[1112px] pt-[253px] absolute left-0 xl:left-[23rem] gap-[86px]">
            <p className="font-Orbitron font-extrabold text-[40px] md:text-[50px] lg:text-[70px] leading-[55px] md:leading-[88px] text-center text-white">
              Bringing The{" "}
              <span className="bg-[#d25804] rounded-xl px-3"> Gift card </span>{" "}
              Experience On-Chain{" "}
            </p>
            <div className="flex justify-between gap-[20px] md:gap-[85px] xl:gap-[150px] py-[10px]">
              {/* <button className="w-[100px] md:w-[170px] h-[39px] text-white border-[1px] border-solid border-white rounded-[10px] font-Inter font-medium text-sm sm:text-base leading-[19px] tracking-[-2%]">
                Whitelist
              </button> */}
              <button className="w-[100px] md:w-[170px] h-[39px] text-white border-[1px] border-solid border-white rounded-[10px] font-Inter font-medium text-sm sm:text-base leading-[19px] tracking-[-2%] btn-hover">
                White Paper
              </button>
              <button className="w-[100px] md:w-[170px] h-[39px] text-white border-[1px] border-solid border-white rounded-[10px] font-Inter font-medium text-sm sm:text-base leading-[19px] tracking-[-2%] btn-hover">
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
          <p className="font-Orbitron font-bold text-[40px] md:text-[54px] leading-[60px] text-white pb-3 md:pb-[50px]">
            Gifter Road Map
          </p>

          <div className="p-6 rounded-xl mb-10 hidden xl:block">
            <div className="justify-between relative w-[25rem] xl:w-[1244px] h-[37rem] xl:h-[336px] rounded-[27px] border-[2px] gap-[30px] px-[45px] py-[46px] bg-gradient2 hidden xl:flex">
              <div className="flex flex-col md:flex-row relative">
                <div className="absolute top-[70px] left-0 flex flex-col gap-[6px] w-[100px] text-center">
                  <p className="text-style">1st july 2024</p>
                  <div className="w-full flex justify-center">
                    <div className="bg-[#933FFE] w-[47px] h-[3px]"></div>
                  </div>
                  <p className="text-style">October 2024</p>
                  <div className="absolute top-[65px] left-[30px] z-50">
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 17 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="8.5"
                        cy="8.5"
                        r="6"
                        fill="white"
                        stroke="#5D2CA8"
                        stroke-width="5"
                      />
                    </svg>
                  </div>
                  <p className="mt-11 font-Inter text-[#933FFE] font-semibold text-[16px] leading-6">
                    Gifter MVP
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row absolute top-[150px] left-[205px]">
                <div className="absolute top-[34px] left-[35px] z-50">
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 13 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="6.5" cy="6.5" r="6.5" fill="white" />
                  </svg>
                </div>
                <div className="flex flex-col text-white font-Inter font-semibold">
                  Fund Raising
                </div>
              </div>

              <div className="flex flex-col md:flex-row absolute top-[115px] left-[424px]">
                <div className="flex flex-col gap-[6px] text-center">
                  <p className="text-style">1st November 2024</p>
                  <div className="w-full flex justify-center">
                    <div className="bg-[#933FFE] w-[47px] h-[3px]"></div>
                  </div>
                  <p className="text-style">20. October 2024</p>
                  <div className="absolute top-[60px] left-[53px] z-50">
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g filter="url(#filter0_f_137_870)">
                        <circle cx="12.5" cy="12.5" r="8.5" fill="white" />
                      </g>
                      <defs>
                        <filter
                          id="filter0_f_137_870"
                          x="0"
                          y="0"
                          width="25"
                          height="25"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="BackgroundImageFix"
                            result="shape"
                          />
                          <feGaussianBlur
                            stdDeviation="2"
                            result="effect1_foregroundBlur_137_870"
                          />
                        </filter>
                      </defs>
                    </svg>
                  </div>
                  <p className="mt-11 font-Inter text-[#933FFE] font-semibold text-[16px] leading-6">
                    Pre-ICO
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row absolute top-[115px] left-[678px]">
                <div className="flex flex-col gap-[6px] text-center">
                  <p className="text-style">December 2024</p>
                  <div className="w-full flex justify-center">
                    <div className="bg-[#933FFE] w-[47px] h-[3px]"></div>
                  </div>
                  <div className="absolute top-[66px] left-[49px] z-50">
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 13 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="6.5" cy="6.5" r="6.5" fill="white" />
                    </svg>
                  </div>
                  <p className="text-style mt-[74px]">ICO</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row absolute top-[115px] left-[904px] text-center">
                <div className="flex flex-col gap-[6px] text-center">
                  <p className="text-style">Jan 2025</p>
                  <div className="w-full flex justify-center">
                    <div className="bg-[#933FFE] w-[47px] h-[3px]"></div>
                  </div>
                  <p className="text-style">March 2024</p>
                  <div className="absolute top-[67px] left-[40px] z-50">
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 13 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="6.5"
                        cy="6.5"
                        r="4"
                        fill="#2E1F44"
                        stroke="white"
                        stroke-width="5"
                      />
                    </svg>
                  </div>
                  <p className="mt-11 font-Inter text-[#933FFE] font-semibold text-[16px] leading-6">
                    Marketplace
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row absolute top-[115px] left-[1150px] text-center">
                <div className="flex flex-col gap-[6px]">
                  <p className="text-style">April 2025</p>
                  <div className="w-full flex justify-center">
                    <div className="bg-[#933FFE] w-[47px] h-[3px]"></div>
                  </div>
                  <p className="text-style">July 2025</p>
                  <div className="absolute top-[67px] left-[40px] z-50">
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 17 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="8.5"
                        cy="8.5"
                        r="6"
                        fill="white"
                        stroke="#2E1F44"
                        stroke-width="5"
                      />
                    </svg>
                  </div>
                  <p className="text-style mt-11">Multichain Giftcards</p>
                </div>
              </div>
              <Image
                src={Line}
                alt="Line"
                className="w-[18px] md:w-[1110px] h-[35rem] md:h-[3px] absolute top-[0.75rem] md:top-[11.75rem] left-[12rem] md:left-[85px] bg-no-repeat"
              />
            </div>
          </div>

          <div className="p-6 rounded-xl mb-10 xl:hidden">
            <div className="flex flex-col items-center justify-between relative w-[25rem] h-[43rem] rounded-[27px] border-[2px] gap-[30px] px-[30px] py-[46px] bg-gradient2">
              <div className="flex gap-[40px] justify-between items-center text-center w-full">
                <div className="flex flex-col gap-2">
                  <p className="text-style">1st july 2024</p>
                  <div className="w-full flex justify-center">
                    <div className="bg-[#933FFE] w-[47px] h-[3px]"></div>
                  </div>
                  <p className="text-style">October 2024</p>
                </div>
                <div className="absolute top-[74px] left-[191px] z-50">
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="8.5"
                      cy="8.5"
                      r="6"
                      fill="white"
                      stroke="#5D2CA8"
                      stroke-width="5"
                    />
                  </svg>
                </div>
                <p className="font-Inter text-[#933FFE] font-semibold text-[16px] leading-6">
                  Gifter MVP
                </p>
              </div>

              <div className="flex gap-[40px] justify-between items-center text-center relative w-full">
                <div></div>
                <div className="absolute top-[11px] left-[163px] z-50">
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 13 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="6.5" cy="6.5" r="6.5" fill="white" />
                  </svg>
                </div>
                <div className="flex flex-col text-white font-Inter font-semibold ml-[112px]">
                  Fund Raising
                </div>
              </div>

              <div className="flex gap-[40px] justify-between items-center text-center w-full relative">
                <div className="flex flex-row gap-[6px] text-center w-full justify-between items-center">
                  <div className="flex flex-col gap-2">
                    <p className="text-style">1st November 2024</p>
                    <div className="w-full flex justify-center">
                      <div className="bg-[#933FFE] w-[47px] h-[3px]"></div>
                    </div>
                    <p className="text-style">20. October 2024</p>
                  </div>
                  <div className="absolute top-[16px] left-[157px] z-50">
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g filter="url(#filter0_f_137_870)">
                        <circle cx="12.5" cy="12.5" r="8.5" fill="white" />
                      </g>
                      <defs>
                        <filter
                          id="filter0_f_137_870"
                          x="0"
                          y="0"
                          width="25"
                          height="25"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="BackgroundImageFix"
                            result="shape"
                          />
                          <feGaussianBlur
                            stdDeviation="2"
                            result="effect1_foregroundBlur_137_870"
                          />
                        </filter>
                      </defs>
                    </svg>
                  </div>
                  <p className="font-Inter text-[#933FFE] font-semibold text-[16px] leading-6">
                    Pre-ICO
                  </p>
                </div>
              </div>

              <div className="flex gap-[40px] justify-between items-center text-center w-full">
                <div className="flex gap-[6px] text-center justify-between w-full relative">
                  <div className="flex flex-col gap-2">
                    {" "}
                    <p className="text-style">December 2024</p>
                    <div className="w-full flex justify-center">
                      <div className="bg-[#933FFE] w-[47px] h-[3px]"></div>
                    </div>
                  </div>
                  <div className="absolute top-[9px] left-[162px] z-50">
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 13 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="6.5" cy="6.5" r="6.5" fill="white" />
                    </svg>
                  </div>
                  <p className="text-style">ICO</p>
                </div>
              </div>

              <div className="flex gap-[40px] justify-between items-center text-center w-full">
                <div className="flex gap-[6px] text-center items-center relative w-full justify-between">
                  <div className="flex flex-col gap-2">
                    <p className="text-style">Jan 2025</p>
                    <div className="w-full flex justify-center">
                      <div className="bg-[#933FFE] w-[47px] h-[3px]"></div>
                    </div>
                    <p className="text-style">March 2024</p>
                  </div>
                  <div className="absolute top-[23px] left-[162px] z-50">
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 13 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="6.5"
                        cy="6.5"
                        r="4"
                        fill="#2E1F44"
                        stroke="white"
                        stroke-width="5"
                      />
                    </svg>
                  </div>
                  <p className="font-Inter text-[#933FFE] font-semibold text-[16px] leading-6">
                    Marketplace
                  </p>
                </div>
              </div>

              <div className="flex gap-[40px] justify-between items-center text-center w-full">
                <div className="flex gap-[6px] w-full relative justify-between items-center">
                  <div className="flex flex-col gap-2">
                    <p className="text-style">April 2025</p>
                    <div className="w-full flex justify-center">
                      <div className="bg-[#933FFE] w-[47px] h-[3px]"></div>
                    </div>
                    <p className="text-style">July 2025</p>
                  </div>
                  <div className="absolute top-[21px] left-[160px] z-50">
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 17 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="8.5"
                        cy="8.5"
                        r="6"
                        fill="white"
                        stroke="#2E1F44"
                        stroke-width="5"
                      />
                    </svg>
                  </div>
                  <p className="text-style">Multichain Giftcards</p>
                </div>
              </div>

              <Image
                src={Line}
                alt="Line"
                className="h-[520px] w-[3px] absolute top-[85px] left-1/2"
              />
            </div>
          </div>
          {/* <div className="flex flex-col xl:flex-row justify-around gap-[60px]">
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
          </div> */}
        </div>

        <div className="flex flex-col items-center bg-gradient-enhance py-[50px] md:py-[100px] relative">
          <div className="text-white p-4 md:p-10">
            <div className="flex flex-col items-center gap-[34px]">
              <p className="w-[308px] h-[34px] text-center border-[1px] border-[#FFFFFF0A] bg-[#FFFFFF0A] py-[5px] px-[61px] rounded-[999px] font-Inter font-normal text-sm leading-6 tracking-[1.12px]">
                WHAT TO EXPECT ?
              </p>
              <p className="text-center text-[40px] xl:text-[53px] font-semibold xl:font-bold leading-[50px] xl:leading-[64px] font-Orbitron mb-10">
                Key Features
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[5px] md:gap-[24px]">
              <div className="bg-[#0a0118] p-6 rounded-xl shadow-lg sm:w-[335px] xl:w-[400px] h-[304px]">
                <div className="mb-4 relative">
                  <Image src={OnChain} alt="OnChain" className="" />
                  <Image
                    src={CardGrid}
                    alt="CardGrid"
                    className="absolute top-0 left-0"
                  />
                </div>
                <h2 className="text-[18px] font-Inter font-semibold leading-6 tracking-[-0.36px] mb-2">
                  {` On-chain Gift Cards as NFT's`}
                </h2>
                <p className="mb-4">
                  {`Giftcards will be created on-chain as NFT's Leveraging the flexibility of on-chain assets`}
                </p>
              </div>
              <div className="bg-[#0a0118] p-6 rounded-xl shadow-lg sm:w-[335px] xl:w-[400px] h-[304px]">
                <div className="relative">
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
                  Easy to use Interface
                </h2>
                <p className="mb-4 font-normal text-base leading-6 tracking-[-0.16px] text-[#9B96B0]">
                  A user friendly and flexible interface for easy usage. Users
                  can mint giftcard collections in a few clicks.
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
                  ZK Proofs
                </h2>
                <p className="mb-4 font-normal text-base leading-6 tracking-[-0.16px] text-[#9B96B0]">
                  ZK proofs will be used to verify the authenticity of
                  gift-cards during at redemption point
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
                  Track giftcard usage on-chain
                </h2>
                <p className="mb-4 font-normal text-base leading-6 tracking-[-0.16px] text-[#9B96B0]">
                  Giftcard collections can be tracked on-chain including use and
                  expiry dates
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
                  Marketplace
                </h2>
                <p className="mb-4 font-normal text-base leading-6 tracking-[-0.16px] text-[#9B96B0]">
                  Gifter marketplace will be a platform that allows anyone to
                  trade gift cards seamlessly and security
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
                  Seamless creation of giftcard collections
                </h2>
                <p className="mb-4 font-normal text-base leading-6 tracking-[-0.16px] text-[#9B96B0]">
                  Collections can be minted seamlessly on-chain
                </p>
              </div>
            </div>
          </div>{" "}
          <button className="mt-[16px] group text-black font-Inter font-medium text-base leading-[19px] tracking-[-2%] bg-white hover:bg-white/0 transition-all delay-200 duration-500 w-[162px] h-[40px] rounded-[10px] py-[10px] px-[15px] gap-1 relative overflow-hidden">
            <div className="absolute left-0 top-0 w-full h-full btnJoin-hover opacity-0 group-hover:opacity-100 transition-all delay-200 duration-500"></div>
            <div className="relative z-10 flex justify-center items-center">
              Join waitlist{" "}
              <span>
                <Image
                  src={Vector}
                  alt="Vector"
                  className="w-[20px] h-[10px]"
                />
              </span>
            </div>
          </button>
          <p className="flex justify-center animate-marquee font-Orbitron font-black leading-[58px] md:leading-[168px] mt-[40px] text-[#FFFFFF47] text-[58px] md:text-[100px] xl:text-[140px] py-[50px]">
            Create Giftcards
          </p>
        </div>

        <div className="bg-black">
          {/* <BuyAndSellGiftcard /> */}
          <TakeCareGiftcard />
          <Image
            src={Looper}
            alt="Looper"
            className="w-[845px] h-[1044px] absolute bottom-[134px] md:right-0 xl:right-0 hidden sm:block z-10"
          />
        </div>
        <Image
          src={bottomEffect}
          alt="bottomEffect"
          className="w-[3747px] h-[890px] absolute bottom-[-43rem] md:bottom-[-35rem] right-[2rem] z-50"
        />
      </div>
      <Footer />
    </>
  );
};

export default Future;
