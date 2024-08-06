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
import bottomEffect from "@/public/assets/imgs/bottomEffect.png";

import { FoldData } from "@/mock/home";
import { LoremData } from "@/mock/home";
import { GeneratorData } from "@/mock/home";

import TakeCareGiftcard from "@/components/TakeCareGiftcard";

import BgGradient from "@/public/assets/imgs/bg-gradient.png";
import Footer from "@/components/Footer";

import RightArrow from "../../public/assets/imgs/rightArrow.png";

import Thumb from "../../public/assets/imgs/thumb.png";
import Shield from "../../public/assets/imgs/shield.png";
import HeaderPhone from "../../public/assets/imgs/headerphone.png";

import CardGif from '../../public/assets/gif/cardAnimation.gif';

const Main = () => {
  return (
    <>
      <div className="flex flex-col w-full relative">
        <div className="flex justify-center w-full relative banner-gradient pb-[200px] md:pb-[390px]">
          <div className="flex flex-col items-center w-[1112px] pt-[170px] lg:pt-[218px] z-50">
            <div className="font-Orbitron font-extrabold text-[40px] md:text-[50px] lg:text-[70px] leading-[55px] md:leading-[88px] text-center text-white">
              Bringing <span className="bg-[#d25804] rounded-xl">Gitcards</span>{" "}
              <br></br>
              <p className="mt-5">To web3</p>
            </div>
            <p className="text-lg leading-[25px] font-medium text-white px-2 sm:px-auto text-center w-full lg:w-[755px] py-7">
              Gifter.web3 is a decentralized application that will be built on
              the blockchin chain that provides an intuitive, user-friendly
              platform where anyone can create customizable gift cards
            </p>
            {/* <div className="relative pt-[33px]">
              <button className="flex items-center justify-center text-white w-[162px] h-[40px] pr-[10px] py-[15px] bg-black font-medium text-center leading-5 rounded-[10px] hover:btn-hover">
                Join waitlist
                <Image
                  src={RArrow}
                  alt="Arrow"
                  width={20}
                  height={20}
                  className="absolute right-[11px] top-[45px] bg-black"
                />
              </button>
            </div> */}
          </div>
          <div className="absolute top-[106px] mx-auto z-40">
            <Image
              src={CardGif}
              alt="Example GIF"
              className="w-[423ppx] md:w-[556px] h-[400px] md:h-[517px] object-cover opacity-30"
            />
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
          <div className="w-full absolute left-0 top-0 -translate-y-[55%] z-20">
            <Image
              src={TeamTopImage}
              alt="team-top"
              className="w-full h-auto"
            />
          </div>
          {/* <div className="flex flex-col justify-center items-center w-auto py-[40px] gap-[43px] z-30">
            <p className="text-[#7A7A7A] font-normal text-sm leading-[17px]">{`Trusted by the world’s most innovative teams`}</p>
            <div className="grid md:flex grid-cols-2 md:grid-cols-3 justify-between gap-4 md:gap-7">
              {FoldData.map((item) => {
                return (
                  <div key={item.name}>
                    <Image
                      src={item.img}
                      alt={item.name}
                      className="w-[146px] h-[28px]"
                    />
                  </div>
                );
              })}
            </div>
          </div> */}
        </div>

        <div className="flex flex-col justify-center items-center py-1 md:py-[100px] bg-black relative mt-[60px] sm:mt-0">
          <div className="text-center lg:w-[828px] z-40">
            <p className="text-[40px] md:text-[54px] leading-[46px] md:leading-[60px] font-semibold md:font-bold font-Orbitron text-white">
              How Gifter Works
            </p>
            <p className="text-[20px] sm:text-[22px] leading-[31px] font-normal font-Inter text-white pt-5">
              A place where web3 users and businesses can create unique gift
              cards for their loved ones/customers.
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
                  <p className="font-bold text-lg font-Orbitron leading-[23px] text-white max-w-[216px]">
                    {data.title}
                  </p>
                  <p className="font-normal text-base font-Inter leading-[23px] text-white">
                    {data.content}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className=" bg-gradient3 w-full h-auto relative">
          <div className="flex justify-center py-[30px] xl:py-[100px] px-[10px] sm:px-auto">
            <div className="flex flex-col w-[1244px] h-auto rounded-[27px] border-[2px] gap-[30px] px-3 sm:px-[45px] py-[46px] bg-gradient2">
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
                    {`Bringing gift cards into the Web3 industry could transform them from simple transactional tools into dynamic, 
                    digital assets. By using blockchain technology, gift cards are transformed into secure, transparent digital assets. 
                    They can be tokenized(NFT), traded, and personalized with unique conditions,  enhancing their value and usability
                    which really mean something to the person you're giving them.`}
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

          <div className="flex justify-center sm:py-[100px] w-full z-50">
            <div className="flex flex-col gap-[40px] sm:gap-[60px] text-center items-center">
              <p className="font-Orbitron font-semibold sm:font-bold text-[40px] sm:text-[54px] leading-[50px] sm:leading-[60px] text-white">
                Key Features
              </p>
              <div className="flex flex-col xl:flex-row items-center xl:justify-center gap-2 xl:gap-[30px]">
                <div className="flex justify-center items-center w-[369px] h-[440px] border-[2px] py-[27px] px-[42px] rounded-[24px] border-gradient group hover:bg-[#2F0078]  hover:cursor-pointer">
                  <Image
                    src={HeaderPhone}
                    alt="HeaderPhone"
                    width={70}
                    height={70}
                    className="group-hover:hidden"
                  />
                  <div className="flex-col justify-center items-center mx-auto gap-[20px] py-[52px] hidden group-hover:flex">
                    <div className="flex flex-col justify-center items-center mx-auto gap-[45px]">
                      <div className="w-[97px] h-[97px] rounded-[999px] bg-white flex justify-center items-center">
                        <svg
                          width="35"
                          height="33"
                          viewBox="0 0 35 33"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15.768 32.0893V28.6251H29.6251V16.3268C29.6251 12.9492 28.449 10.0842 26.0968 7.73195C23.7445 5.3797 20.879 4.20299 17.5001 4.20184C14.1213 4.20068 11.2563 5.37739 8.90525 7.73195C6.55415 10.0865 5.37745 12.9515 5.37514 16.3268V26.8929H3.643C2.69032 26.8929 1.87506 26.554 1.19721 25.8761C0.519366 25.1983 0.179866 24.3825 0.178711 23.4286V19.9643C0.178711 19.3581 0.330562 18.7882 0.634265 18.2547C0.937967 17.7212 1.3635 17.2951 1.91085 16.9764L2.04076 14.6813C2.27172 12.7182 2.84217 10.8995 3.75212 9.22505C4.66207 7.55065 5.8024 6.09276 7.1731 4.85139C8.54381 3.61002 10.1166 2.64291 11.8915 1.95005C13.6663 1.25719 15.5359 0.910767 17.5001 0.910767C19.4644 0.910767 21.3264 1.25719 23.0863 1.95005C24.8462 2.64291 26.4195 3.60309 27.8064 4.83061C29.1933 6.05812 30.3336 7.5085 31.2274 9.18175C32.1212 10.855 32.6985 12.6737 32.9595 14.638L33.0894 16.8898C33.6379 17.1496 34.064 17.5393 34.3677 18.059C34.6715 18.5786 34.8227 19.1271 34.8216 19.7045V23.6884C34.8216 24.2658 34.6703 24.8143 34.3677 25.334C34.0652 25.8536 33.6391 26.2434 33.0894 26.5032V28.6251C33.0894 29.5777 32.7505 30.3936 32.0727 31.0726C31.3948 31.7516 30.579 32.0905 29.6251 32.0893H15.768ZM12.3037 19.9643C11.8129 19.9643 11.4018 19.7981 11.0704 19.4655C10.739 19.1329 10.5727 18.7218 10.5716 18.2322C10.5704 17.7426 10.7367 17.3315 11.0704 16.9989C11.4042 16.6663 11.8152 16.5001 12.3037 16.5001C12.7922 16.5001 13.2038 16.6663 13.5387 16.9989C13.8736 17.3315 14.0393 17.7426 14.0359 18.2322C14.0324 18.7218 13.8661 19.1335 13.537 19.4672C13.2079 19.8009 12.7968 19.9666 12.3037 19.9643ZM22.6966 19.9643C22.2058 19.9643 21.7947 19.7981 21.4633 19.4655C21.1319 19.1329 20.9656 18.7218 20.9644 18.2322C20.9633 17.7426 21.1296 17.3315 21.4633 16.9989C21.797 16.6663 22.2081 16.5001 22.6966 16.5001C23.185 16.5001 23.5967 16.6663 23.9316 16.9989C24.2665 17.3315 24.4322 17.7426 24.4287 18.2322C24.4252 18.7218 24.259 19.1335 23.9299 19.4672C23.6007 19.8009 23.1897 19.9666 22.6966 19.9643ZM7.15059 17.2795C6.9485 14.2194 7.87231 11.5923 9.92202 9.39827C11.9717 7.20422 14.5266 6.10719 17.5867 6.10719C20.1561 6.10719 22.4154 6.92246 24.3646 8.55298C26.3139 10.1835 27.49 12.2702 27.893 14.8129C25.2659 14.7829 22.8484 14.0751 20.6405 12.6893C18.4326 11.3036 16.7363 9.42714 15.5515 7.05987C15.0896 9.3694 14.1155 11.4266 12.6294 13.2315C11.1432 15.0364 9.31692 16.3857 7.15059 17.2795Z"
                            fill="#2F0078"
                          />
                        </svg>
                      </div>
                      <div className="flex flex-col justify-center items-center mx-auto gap-[20px]">
                        <p className="text-[34px] leading-[29px] font-bold text-white">
                          Decentralized
                        </p>
                        <p className="text-[16px] leading-[24px] font-normal text-[#FFFFFF99]">
                          All gift card transactions will be processed on-chain.
                        </p>
                      </div>
                    </div>

                    <button className="flex flex-row items-center text-[20px] leading-[24px] text-white font-medium">
                      Learn more{" "}
                      <span>
                        <Image
                          src={RightArrow}
                          alt="Arrow"
                          width={24}
                          height={24}
                        />
                      </span>
                    </button>
                  </div>
                </div>

                <div className="flex justify-center items-center w-[369px] h-[440px] border-[2px] py-[27px] px-[42px] rounded-[24px] border-gradient group hover:bg-[#D25804] hover:cursor-pointer">
                  <Image
                    src={Shield}
                    alt="Shield"
                    width={70}
                    height={70}
                    className="group-hover:hidden"
                  />
                  <div className="flex-col justify-center items-center mx-auto gap-[20px] py-[52px] hidden group-hover:flex">
                    <div className="flex flex-col justify-center items-center mx-auto gap-[45px]">
                      <div className="w-[97px] h-[97px] rounded-[999px] bg-white flex justify-center items-center">
                        <svg
                          width="33"
                          height="39"
                          viewBox="0 0 33 39"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M16.4997 0.446533L0.9104 7.3751V17.768C0.9104 27.3814 7.56183 36.3712 16.4997 38.5537C25.4375 36.3712 32.089 27.3814 32.089 17.768V7.3751L16.4997 0.446533ZM16.4997 19.4828H28.6247C27.7067 26.6192 22.9433 32.9762 16.4997 34.9681V19.5001H4.37469V9.62689L16.4997 4.23993V19.4828Z"
                            fill="#D25804"
                          />
                        </svg>
                      </div>
                      <div className="flex flex-col justify-center items-center mx-auto gap-[20px]">
                        <p className="text-[34px] leading-[29px] font-bold text-white">
                          Security
                        </p>
                        <p className="text-[16px] leading-[24px] font-normal text-[#FFFFFF99]">
                          With the use of zk Proofs, gift card redeemption and
                          verification is highly secured onchain.
                        </p>
                      </div>
                    </div>

                    <button className="flex flex-row items-center text-[20px] leading-[24px] text-white font-medium">
                      Learn more{" "}
                      <span>
                        <Image
                          src={RightArrow}
                          alt="Arrow"
                          width={24}
                          height={24}
                        />
                      </span>
                    </button>
                  </div>
                </div>

                <div className="flex justify-center items-center w-[369px] h-[440px] border-[2px] py-[27px] px-[42px] rounded-[24px] border-gradient group hover:bg-[#5D2CA8] z-50  hover:cursor-pointer">
                  <Image
                    src={Thumb}
                    alt="Thumb"
                    width={70}
                    height={70}
                    className="group-hover:hidden"
                  />
                  <div className="flex-col justify-center items-center mx-auto gap-[20px] py-[52px] hidden group-hover:flex">
                    <div className="flex flex-col justify-center items-center mx-auto gap-[45px]">
                      {" "}
                      <div className="w-[97px] h-[97px] rounded-[999px] bg-white flex justify-center items-center">
                        <svg
                          width="31"
                          height="35"
                          viewBox="0 0 31 35"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M23.2947 32.2232C18.5489 34.8237 14.634 34.8214 9.43757 33.0893C4.17497 31.3351 0.776855 25.2947 0.776855 20.9643C0.776855 18.588 4.33944 17.178 5.56502 16.7633C5.80648 16.6816 5.97328 16.4578 5.97328 16.2029V9.70537C5.97328 8.03126 7.33042 6.67412 9.00453 6.67412C10.6786 6.67412 12.0358 8.03126 12.0358 9.70537V7.5402C12.0358 5.86608 13.3929 4.50895 15.067 4.50895C16.7411 4.50895 18.0983 5.86608 18.0983 7.5402V9.70537C18.0983 8.03126 19.4554 6.67412 21.1295 6.67412C22.8036 6.67412 24.1608 8.03126 24.1608 9.70537V3.20983C24.1608 1.53572 25.5179 0.178589 27.192 0.178589C28.8661 0.178589 30.2233 1.53572 30.2233 3.20983V21.1651C30.2233 23.3062 29.7103 25.4335 28.4582 27.1703C27.185 28.9364 25.3364 31.1045 23.2947 32.2232Z"
                            fill="#5D2CA8"
                          />
                        </svg>
                      </div>
                      <div className="flex flex-col justify-center items-center mx-auto gap-[20px]">
                        <p className="text-[34px] leading-[29px] font-bold text-white">
                          Simplicity
                        </p>
                        <p className="text-[16px] leading-[24px] font-normal text-[#FFFFFF99]">
                          Very user friendly and easy to use interfaces for easy
                          onboarding
                        </p>
                      </div>
                    </div>

                    <button className="flex flex-row items-center text-[20px] leading-[24px] text-white font-medium">
                      Learn more{" "}
                      <span>
                        <Image
                          src={RightArrow}
                          alt="Arrow"
                          width={24}
                          height={24}
                        />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <div></div>
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
              {/* <div className="flex justify-center w-full">
                <button className="bg-white text-black rounded-[10px] px-[15px] py-[10px] w-[162px] font-medium text-base leading-[19px] font-Inter">
                  Become a Gifter
                </button>
              </div> */}
              <Image
                src={Net}
                alt="Net Image"
                width={600}
                height={1045}
                className="absolute right-0 z-20 hidden sm:block"
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
                Secured With Zero Knowledge
              </p>
              <p className="font-Inter text-base leading-[24px] font-normal xl:w-[580px] text-white">
                ZK proofs will prevent fraud by ensuring the authenticity of
                gift cards and secure gift card codes.
              </p>
              <button className="w-[162px] sm:w-[190px] h-[45px] sm:h-[56px] rounded-[10px] border-[1px] text-white border-white text-base font-semibold font-Inter">
                Future Roadmap
              </button>
            </div>
          </div>
          <Image
            src={BgGradient}
            alt="Background gradient"
            className="w-[450px] md:w-[670px] h-[900px] absolute top-[-300px] md:top-[-450px] xl:top-[-100px] left-[-150px] xl:left-0"
          />
          <div className="xl:mt-[100px]">
            <TakeCareGiftcard />
          </div>
        </div>
        <Image
          src={bottomEffect}
          alt="bottomEffect"
          className="w-[3747px] h-[890px] absolute bottom-[-43rem] md:bottom-[-49rem] xl:bottom-[-35rem] right-[2rem] z-50"
        />
      </div>
      <Footer />
    </>
  );
};

export default Main;
