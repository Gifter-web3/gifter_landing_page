import React from "react";
import Image from "next/image";
import RArrow from "@/public/assets/icons/Icons.svg";
import CursorL from "@/public/assets/imgs/cursorL.png";
import MessgeR from "@/public/assets/imgs/messageR.png";
import TeamTopImage from "@/public/assets/imgs/team-top.png";
import Rectangle from "@/public/assets/icons/Rectangle.svg";

import Bank from "@/public/assets/imgs/bank.png";
import Encrypted from "@/public/assets/imgs/encrypted.png";
import Cryptocurrency from "@/public/assets/imgs/cryptocurrency.png";
import Net from "@/public/assets/imgs/net.png";

import ShieldL from "@/public/assets/imgs/shieldL.png";
import StarImg from "@/public/assets/imgs/starImg.png";
import Sphere from "@/public/assets/imgs/sphere.png";

import { FoldData } from "@/mock/home";
import { LoremData } from "@/mock/home";
import { GeneratorData } from "@/mock/home";

import BuyAndSellGiftcard from "@/components/BuyAndSellGiftcard";
import TakeCareGiftcard from "@/components/TakeCareGiftcard";

import BgGradient from "@/public/assets/imgs/bg-gradient.png";
import bottomEffect from "@/public/assets/imgs/bottomEffect.png";
import Footer from "@/components/Footer";

const Main = () => {
  return (
    <>
      <div className="flex flex-col w-full relative">
        <div className="flex justify-center w-full relative banner-gradient pb-[200px] md:pb-[390px]">
          <div className="flex flex-col items-center w-[1112px] pt-[80px] md:pt-[170px] lg:pt-[218px]">
            <p className="font-Orbitron font-extrabold text-[40px] md:text-[50px] lg:text-[70px] leading-[55px] md:leading-[88px] text-center text-white">
              Lorem Ipsum{" "}
              <span className="bg-[#d25804] rounded-xl">Generator</span> Lorem
              Ipsum
            </p>
            <p className="text-lg leading-[25px] font-medium text-[#6F698E] px-2 sm:px-auto text-center w-full lg:w-[755px] py-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut laboret dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation
            </p>
            <div className="relative pt-[33px]">
              <button className="flex items-center justify-center text-white w-[162px] h-[40px] px-[10px] py-[15px] bg-black font-medium text-center leading-5 rounded-[10px]">
                Engage Gifter
                <Image
                  src={RArrow}
                  alt="Arrow"
                  width={20}
                  height={20}
                  className="absolute right-[11px] top-[45px] bg-black"
                />
              </button>
            </div>
          </div>
          <Image
            src={CursorL}
            alt="Cursor"
            className="w-[25%] lg:w-[18%] h-auto absolute top-[65%] lg:top-[45%] left-[10px] lg:left-[50px] xl:left-[190px]"
          />
          <Image
            src={MessgeR}
            alt="Cursor"
            className="w-[25%] lg:w-[18%] h-auto absolute bottom-[180px] md:bottom-[255px] right-[10px] lg:right-[60px] xl:right-[127px]"
          />
        </div>

        <div className="flex justify-center bg-black relative">
          <div className="w-full absolute left-0 top-0 -translate-y-[55%]">
            <Image
              src={TeamTopImage}
              alt="team-top"
              className="w-full h-auto"
            />
          </div>
          <div className="flex flex-col justify-center items-center w-auto py-[40px] gap-[43px] z-30">
            <p className="text-[#7A7A7A] font-normal text-sm leading-[17px]">{`Trusted by the world’s most innovative teams`}</p>
            <div className="grid md:flex grid-cols-2 md:grid-cols-3 justify-between gap-4 md:gap-7">
              {FoldData.map((item) => {
                return (
                  <div key={item.name}>
                    <Image
                      src={item.img}
                      alt={item.name}
                      className="w-[146px] h-auto"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center py-1 md:py-[100px] bg-black relative">
          <div className="text-center lg:w-[828px] ">
            <p className="text-[40px] md:text-[54px] leading-[46px] md:leading-[60px] font-semibold md:font-bold font-Orbitron text-white">
              Everything you need
            </p>
            <p className="text-[20px] sm:text-[22px] leading-[31px] font-normal font-Inter text-white pt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore
            </p>
          </div>
          <div className="flex flex-col xl:flex-row items-center md:justify-center gap-[20px] sm:gap-[58px] pt-[60px]">
            {LoremData.map((data) => {
              return (
                <div
                  className="flex flex-col justify-center items-center w-[360px] sm:w-[376px] h-[250px] sm:h-[260px] rounded-3xl py-[23px] sm:py-[27px] px-[10px] sm:px-[42px] text-center border-[2px] border-gradient gap-[20px] sm:gap-[30px]"
                  key={data.title}
                >
                  <div className="flex justify-center items-center w-[56px] h-[56px] bg-white rounded-[10px] p-[10px]">
                    <Image
                      src={data.img}
                      alt={data.title}
                      className="w-auto h-auto"
                    />
                  </div>
                  <p className="font-bold text-lg font-Orbitron leading-[23px] text-white">
                    {data.title}
                  </p>
                  <p className="font-normal text-base font-Inter leading-[23px] text-white">
                    {data.content}
                  </p>
                </div>
              );
            })}
          </div>
          {/* <div className="w-[693px] h-[693px] absolute light-gradient top-[115px] left-[-402px] rotate-[30deg] rounded-full"></div> */}
        </div>

        <div className=" bg-gradient3 w-full h-auto xl:h-[98rem] relative">
          <div className="flex justify-center py-[30px] xl:py-[100px] px-[10px] sm:px-auto">
            <div className="flex flex-col w-[1244px] h-auto lg:h-[368px] rounded-[27px] border-[2px] gap-[30px] px-3 sm:px-[45px] py-[46px] bg-gradient2">
              <div className="flex justify-center gap-[20px] md:gap-[30px]">
                <div className="hidden sm:flex justify-start items-center">
                  <Image
                    src={Rectangle}
                    alt="Rectangle"
                    width={66}
                    height={66}
                  />
                </div>
                <div className="flex flex-col w-[87%] gap-[18px] text-center sm:text-left">
                  <p className="font-Orbitron font-bold text-[30px] sm:text-[40px] leading-[35px] sm:leading-[48px] text-white">
                    {" "}
                    Unlock unlimited possibilities
                  </p>
                  <p className="font-Inter font-normal sm:font-semibold text-lg sm:text-xl leading-[22px] text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row justify-between items-start sm:items-center px-[32px] gap-[15px] sm:gap-[50px] xl:gap-0 ">
                <div className="flex flex-row sm:flex-col justify-start gap-[30px]">
                  <Image
                    src={Encrypted}
                    alt="Encrypted"
                    width={50}
                    height={50}
                  />
                  <p className="font-Monrope font-semibold text-[18px] sm:text-[23px] text-white leading-[24px]">
                    Protect Your Fiats
                  </p>
                </div>
                <div className="w-full md:w-[7px] h-[2px] md:h-[50px] bg-[#D25804]"></div>
                <div className="flex flex-row sm:flex-col justify-start gap-[30px]">
                  <Image
                    src={Cryptocurrency}
                    alt="Encrypted"
                    width={50}
                    height={50}
                  />
                  <p className="font-Monrope font-semibold text-[18px] sm:text-[23px] text-white leading-[24px]">
                    Transact In Crypto
                  </p>
                </div>
                <div className="w-full md:w-[7px] h-[2px] md:h-[50px] bg-[#D25804]"></div>
                <div className="flex flex-row sm:flex-col justify-start gap-[30px]">
                  <Image src={Bank} alt="Encrypted" width={50} height={50} />
                  <p className="font-Monrope font-semibold text-[18px] sm:text-[23px] text-white leading-[24px]">
                    Get Returns In Dollars
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center sm:py-[100px] w-full">
            <div className="flex flex-col gap-[40px] sm:gap-[60px] text-center">
              <p className="font-Orbitron font-semibold sm:font-bold text-[40px] sm:text-[54px] leading-[50px] sm:leading-[60px] text-white">
                Lorem Ipsum Generator
              </p>
              <div className="flex flex-col xl:flex-row items-center xl:justify-center gap-2 xl:gap-[30px]">
                {GeneratorData.map((item) => {
                  return (
                    <div
                      className="flex justify-center items-center w-[369px] h-[250px] md:h-[320px] xl:h-[440px] border-[2px] py-[27px] px-[42px] rounded-[24px] border-gradient"
                      key={item.name}
                    >
                      <Image
                        src={item.img}
                        alt={item.name}
                        width={70}
                        height={70}
                      />
                    </div>
                  );
                })}
              </div>
              <p className="font-semibold font-Inter text-base sm:text-lg leading-[20px] sm:leading-[24px] text-white text-center w-auto xl:w-[1005px] px-[25px] xl:px-0">
                At Gifter, we believe “The Perfect Gift Starts with Us.
                Together, We Create Unforgettable Moments.” Join our community
                of innovative thinkers and experience the future of gifting.
                <span className="text-[#EC4F2F]">
                  {" "}
                  OUR VISION IS TO REVOLUTIONIZE THE GIFT CARD INDUSTRY WITH
                  BLOCKCHAIN TECHNOLOGY.
                </span>
              </p>
              <div className="flex justify-center w-full">
                <button className="bg-white text-black rounded-[10px] px-[15px] py-[10px] w-[162px] font-medium text-base leading-[19px] font-Inter">
                  Become a Gifter
                </button>
              </div>
              <Image
                src={Net}
                alt="Net Image"
                width={600}
                height={1045}
                className="absolute right-0"
              />
            </div>
          </div>
        </div>

        <div className="bg-black h-auto relative">
          <div className="flex flex-col sm:flex-row justify-between xl:py-[100px]">
            <div className="relative w-[300px] xl:w-[400px] hidden sm:block">
              <Image
                src={ShieldL}
                alt="Large Shield"
                width={275}
                height={326}
                className="absolute z-50 left-[20px] lg:left-[200px] xl:left-[416px] top-0"
              />
              <Image
                src={Sphere}
                alt="Sphere"
                width={172}
                height={172}
                className="absolute z-30 top-[133px] left-0 xl:left-[322px]"
              />
              <Image
                src={StarImg}
                alt="Star"
                width={74}
                height={74}
                className="absolute top-0 left-[-4px] xl:left-[310px]"
              />
            </div>

            <div className="flex flex-col items-center sm:items-start gap-8 pl-[22px] sm:pl-[90px] lg:px-[220px] xl:px-3 xl:pr-[130px] py-[30px] sm:py-0">
              <p className="font-Orbitron font-black leading-[40px] sm:leading-[52px] text-[30px] xl:text-[40px] text-white w-auto xl:w-[620px]">
                24/7 access to full service customer support
              </p>
              <p className="font-Inter text-base leading-[24px] font-normal xl:w-[580px] text-white">
                We invest more resources than any other platform in making sure
                great support from real people is a click away, whenever you
                need it.
              </p>
              <button className="w-[162px] sm:w-[190px] h-[45px] sm:h-[56px] rounded-[10px] border-[1px] text-white border-white text-base font-semibold font-Inter">
                Get Started
              </button>
            </div>
          </div>
          <Image
            src={BgGradient}
            alt="Background gradient"
            className="w-[450px] md:w-[670px] h-[900px] lg:h-[1143px] absolute top-[-300px] md:top-[-450px] xl:top-[-100px] left-[-150px] xl:left-0"
          />
          <BuyAndSellGiftcard />
          <TakeCareGiftcard />
        </div>
        {/* <Image
          src={bottomEffect}
          alt="bottomEffect"
          className="w-[3747px] h-[3204px] absolute bottom-[-34rem] right-[2rem] z-50"
        />  */}
      </div>
      <Footer />
    </>
  );
};

export default Main;
