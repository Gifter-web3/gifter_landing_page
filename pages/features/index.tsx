import React from "react";
import Image from "next/image";

import StarEffectImg from "@/public/assets/imgs/starEffect.png";
import EllipseImg from "@/public/assets/imgs/EllipseF.png";
import RoundEffect from "@/public/assets/imgs/RoundEffect.png";
import AppleComputer from "@/public/assets/imgs/features/AppleComputers.png";
import AppleComputerL from "@/public/assets/imgs/features/AppleComputerL.png";

import SendRecieve from "@/public/assets/icons/sendRecieve.svg";
import RealTimeTrading from "@/public/assets/icons/realTimeTrading.svg";
import TradingCharts from "@/public/assets/icons/tradingCharts.svg";
import Wallet from "@/public/assets/icons/wallet.svg";

import IPhone from "@/public/assets/imgs/iPhones.png";
import EllipseP from "@/public/assets/imgs/EllipseP.png";

import IPhoneSR from "@/public/assets/imgs/features/IPhoneSR.png";
import IPhoneSL from "@/public/assets/imgs/features/IPhoneSL.png";

import Encryption from "@/public/assets/imgs/features/Encryption.svg";
import Fast from "@/public/assets/imgs/features/Fast.svg";
import Lowest from "@/public/assets/imgs/features/Lowest.svg";

import Private from "@/public/assets/imgs/features/Private.svg";
import Uptime from "@/public/assets/imgs/features/Uptime.svg";
import Dedicated from "@/public/assets/imgs/features/Dedicated.svg";

import Download from "@/public/assets/imgs/features/Download.svg";
import Account from "@/public/assets/imgs/features/Account.svg";
import StartTrading from "@/public/assets/imgs/features/StartTrading.svg";

import Video from "@/public/assets/imgs/features/Video.png";

import Apple from "@/public/assets/imgs/apple.png";
import Rect from "@/public/assets/imgs/rectR.png";
import BuyAndSellGiftcard from "@/components/BuyAndSellGiftcard";
import TakeCareGiftcard from "@/components/TakeCareGiftcard";
import BottomEffect from "@/public/assets/imgs/features/EllipseF.png";
import Footer from "@/components/Footer";

const Features = () => {
  return (
    <>
      <div className="relative">
        <div className="flex w-full flex-col h-[952px] overflow-hidden relative">
          <div className="w-full bg-features h-full absolute left-0 top-0">
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
          <Image
            src={RoundEffect}
            alt="Round Effect"
            className="w-full h-screen sm:h-[1014px] absolute top-[46rem] left-0 z-20  hidden sm:block"
          />
          <div className="z-30 mt-[273px] relative px-4 lg:px-8 xl:px-0">
            <div className="flex flex-col ml-0 xl:ml-[270px]  w-full lg:w-[865px] gap-7 sm:gap-12">
              <p className="font-Orbitron font-bold text-[40px] lg:text-[60px] xl:text-[80px] leading-[50px] lg:leading-[80px] tracking-[-1px] text-white">
                Buy, trade, and hold 350+ Giftcards
              </p>
              <p className="font-medium text-[18px] leading-6 text-[#6F698E]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut laboret dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation
              </p>
              <div className="flex flex-col gap-2">
                <span className="font-Inter text-white font-medium leading-[15px] tracking-[-2%] text-[12px]">
                  Coming Soon
                </span>
                <button className="text-white bg-black w-[212px] h-[52px] rounded-[13px] py-[13px] px-[20px] leading-[25px] font-medium font-Inter">
                  Download App
                </button>
              </div>
            </div>
            <div className="hidden xl:block absolute right-0 -top-[10rem]">
              <Image src={AppleComputer} alt="Apple Computer" />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center bg-black">
          <div className="flex flex-col gap-[30px] px-[10px] py-[45px] text-center lg:text-start">
            <p className="font-bold text-[40px] sm:text-[55px] leading-[50px] sm:leading-[55px] font-Orbitron text-white">
              Build your Gifter Portfolio
            </p>
            <p className="font-Inter text-[18px] leading-[28px] font-normal text-[#FFFFFF99] w-full md:w-[635px] text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
              nulla suspendisse tortor aene.
            </p>
          </div>

          <div className="bg-black text-white flex items-center justify-center py-[20px] sm:py-[100px]">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-[10px] lg:gap-[13px] xl:gap-8">
              <div className="flex flex-col sm:flex-row lg:flex-col items-end gap-[10px] sm:gap-[30px]">
                <div className="flex flex-col items-start w-[325px] rounded-3xl py-[48px] px-[23px] border-[2px] border-gradient gap-[30px]">
                  <div className="">
                    <Image
                      src={SendRecieve}
                      alt="Send and Receive"
                      className="w-[68px] h-[68px]"
                    />
                  </div>
                  <div className="flex flex-col gap-[14px]">
                    <h2 className="text-xl font-bold">SEND & RECEIVE</h2>
                    <p className="text-[#FFFFFF99]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Feugiat nulla suspendisse tortor aene.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-start w-[325px] rounded-3xl py-[48px] px-[23px] border-[2px] border-gradient gap-[30px]">
                  <div className="">
                    <Image
                      src={Wallet}
                      alt="Send and Receive"
                      className="w-[68px] h-[68px]"
                    />
                  </div>
                  <div className="flex flex-col gap-[14px]">
                    <h2 className="text-xl font-bold">100% SECURE WALLET</h2>
                    <p className="text-[#FFFFFF99]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Feugiat nulla suspendisse tortor aene.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start m-auto w-[328px] md:w-[328px] xl:w-[477px] h-[500px] lg:h-[656px] !bg-[#6538AD] rounded-3xl py-[48px] px-[23px] border-[2px] border-gradient gap-[30px] relative">
                <div className="flex justify-center w-full absolute bottom-0 right-0">
                  <Image
                    src={IPhone}
                    alt="Send and Receive"
                    className="w-[291px] sm:w-[303px] xl:w-[355px] h-[267px] lg:h-[442px]"
                  />
                </div>
                <div className="flex flex-col gap-[20px]">
                  <h2 className="text-xl font-bold">iOS & Android App</h2>
                  <p className="text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Feugiat nulla suspendisse tortor aene.
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row lg:flex-col gap-[30px]">
                <div className="flex flex-col items-start w-[325px] rounded-3xl py-[48px] px-[23px] border-[2px] border-gradient gap-[30px]">
                  <div className="">
                    <Image
                      src={RealTimeTrading}
                      alt="Send and Receive"
                      className="w-[68px] h-[68px]"
                    />
                  </div>
                  <div className="flex flex-col gap-[14px]">
                    <h2 className="text-xl font-bold">Trading Charts</h2>
                    <p className="text-[#FFFFFF99]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Feugiat nulla suspendisse tortor aene.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-start w-[325px] rounded-3xl py-[48px] px-[23px] border-[2px] border-gradient gap-[30px]">
                  <div className="">
                    <Image
                      src={TradingCharts}
                      alt="Send and Receive"
                      className="w-[68px] h-[68px]"
                    />
                  </div>
                  <div className="flex flex-col gap-[14px]">
                    <h2 className="text-xl font-bold">Real Time Trading</h2>
                    <p className="text-[#FFFFFF99]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Feugiat nulla suspendisse tortor aene.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Image
            src={EllipseP}
            alt="Effect"
            className="w-[50rem] h-[60rem] absolute left-0 z-10"
          />
        </div>

        <div className="bg-features-reward px-[15px] sm:px-[20px] xl:px-0">
          <div className="flex justify-center lg:justify-end xl:justify-center py-[100px] gap-[50px] xl:gap-[118px]">
            <div className="hidden lg:flex relative">
              <Image
                src={IPhoneSR}
                alt="IPhone"
                className="w-[242px] h-[523px] z-30"
              />
              <Image
                src={IPhoneSL}
                alt="IPhone"
                className="w-[242px] h-[523px] absolute top-[-22px] left-[-155px] z-20"
              />
            </div>

            <div className="flex flex-col items-start w-full sm:w-[529px] gap-[45px]">
              <div className="flex flex-col items-start gap-6">
                <p className="font-bold font-Orbitron text-[42px] leading-[51px] text-white">
                  Earn daily rewards on your idle tokens
                </p>
                <p className="font-Inter font-normal text-lg gap-[28px] text-[#FFFFFF99]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Feugiat nulla suspendisse tortor aene.
                </p>
              </div>
              <div className="flex flex-col items-start gap-[17px] text-white">
                <div className="flex justify-between gap-[17px]">
                  <Image
                    src={Lowest}
                    alt="Lowest fees"
                    width={46}
                    height={46}
                  />
                  <p className="font-Inter font-normal text-lg leading-8">
                    Lowest fees in market
                  </p>
                </div>
                <div className="flex justify-between gap-[17px]">
                  <Image
                    src={Fast}
                    alt="Fast and secure transaction"
                    width={46}
                    height={46}
                  />
                  <p className="font-Inter font-normal text-lg leading-8">
                    Fast and secure transactions
                  </p>
                </div>
                <div className="flex justify-between gap-[17px]">
                  <Image
                    src={Encryption}
                    alt="Encryption"
                    width={46}
                    height={46}
                  />
                  <p className="font-Inter font-normal text-lg leading-8">
                    256-bit secure encryption
                  </p>
                </div>
              </div>

              <button className="font-Inter bg-white text-[21px] text-black font-medium leading-[25px] tracking-[-2%] w-[259px] h-[51px] rounded-[13px] px-[20px] py-[13px]">
                Get Started
              </button>
            </div>
          </div>

          <div className="flex items-center md:justify-center py-0 sm:py-[100px] gap-[118px]">
            <div className="flex justify-center lg:justify-end w-full mt-[90px]">
              <div className="flex flex-col items-start w-full sm:w-[529px] gap-[45px]">
                <div className="flex flex-col items-start gap-6">
                  <p className="font-bold font-Orbitron text-[42px] leading-[51px] text-white">
                    Earn daily rewards on your idle tokens
                  </p>
                  <p className="font-Inter font-normal text-lg gap-[28px] w-full sm:w-[529px] text-[#FFFFFF99]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Feugiat nulla suspendisse tortor aene.
                  </p>
                </div>
                <div className="flex flex-col items-start gap-[17px] text-white">
                  <div className="flex justify-between gap-[17px]">
                    <Image
                      src={Private}
                      alt="Lowest fees"
                      width={46}
                      height={46}
                    />
                    <p className="font-Inter font-normal text-lg leading-8">
                      100% Private data
                    </p>
                  </div>
                  <div className="flex justify-between gap-[17px]">
                    <Image
                      src={Uptime}
                      alt="Fast and secure transaction"
                      width={46}
                      height={46}
                    />
                    <p className="font-Inter font-normal text-lg leading-8">
                      99.99% Uptime guarantee
                    </p>
                  </div>
                  <div className="flex justify-between gap-[17px]">
                    <Image
                      src={Dedicated}
                      alt="Encryption"
                      width={46}
                      height={46}
                    />
                    <p className="font-Inter font-normal text-lg leading-8">
                      24/7 Dedicated support
                    </p>
                  </div>
                </div>

                <button className="font-Inter bg-white text-[21px] text-black font-medium leading-[25px] tracking-[-2%] w-[259px] h-[51px] rounded-[13px] px-[20px] py-[13px]">
                  Get Started
                </button>
              </div>
            </div>

            <div className="hidden lg:flex justify-center lg:justify-end w-full ml-[145px] lg:ml-0">
              <Image
                src={AppleComputerL}
                alt="Apple Computer"
                className="z-30"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-center py-0 sm:py-[150px] gap-[20px] xl:gap-[118px] bg-black px-6 xl:px-0">
          <div className="flex sm:justify-center xl:justify-end w-full mt-[90px]">
            <div className="flex flex-col items-start  w-full sm:w-[529px] gap-[45px]">
              <div className="flex flex-col items-start gap-6">
                <p className="font-bold font-Orbitron text-[42px] leading-[51px] text-white">
                  Get started today
                </p>
                <p className="font-Inter font-normal text-lg gap-[28px] text-[#FFFFFF99]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Feugiat nulla suspendisse tortor aene.
                </p>
              </div>
              <div className="flex flex-col items-start gap-[17px] text-white">
                <div className="flex justify-between gap-[17px]">
                  <Image
                    src={Download}
                    alt="Lowest fees"
                    width={46}
                    height={46}
                  />
                  <p className="font-Inter font-normal text-lg leading-8">
                    Download app
                  </p>
                </div>
                <div className="flex justify-between gap-[17px]">
                  <Image
                    src={Account}
                    alt="Fast and secure transaction"
                    width={46}
                    height={46}
                  />
                  <p className="font-Inter font-normal text-lg leading-8">
                    Create a free account
                  </p>
                </div>
                <div className="flex justify-between gap-[17px]">
                  <Image
                    src={StartTrading}
                    alt="Encryption"
                    width={46}
                    height={46}
                  />
                  <p className="font-Inter font-normal text-lg leading-8">
                    Start trading
                  </p>
                </div>
              </div>

              <div className="flex gap-3 md:gap-9">
                <div className="flex items-center gap-2 w-[165px] md:w-[202px] h-[59px] rounded-[15px] px-[20px] md:px-8 py-[27px] bg-[#0C0C0C]">
                  <Image
                    src={Apple}
                    alt="Apple"
                    className="w-[23px] h-[25px]"
                  />
                  <p className="font-bold text-[14px] md:text-base leading-4 tracking-[1.6px] text-white">
                    APP STORE
                  </p>
                </div>
                <div className="flex items-center gap-2 w-[170px] md:w-[203px] h-[59px] rounded-[15px] px-[20px] md:px-8  py-[27px] bg-[#0C0C0C]">
                  <Image src={Rect} alt="Rect" className="w-[23px] h-[25px]" />
                  <p className="font-bold text-[14px] md:text-base leading-4 tracking-[1.6px] text-white">
                    PLAY STORE
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex sm:justify-center xl:justify-start items-end w-full pb-[25px]">
            <Image
              src={Video}
              alt="Apple Computer"
              className="z-30 w-[385px] sm:w-[585px] xl:w-[662px] h-[280px] sm:h-[400px] xl:h-[385px]"
            />
          </div>
        </div>

        <div className="bg-black">
          <BuyAndSellGiftcard />
          <TakeCareGiftcard />
        </div>
        <Image
          src={BottomEffect}
          alt="Bottom Effect"
          className="w-[3747px] h-[1204px] absolute bottom-[-220px] right-0 z-50"
        />
      </div>
      <Footer />
    </>
  );
};

export default Features;
