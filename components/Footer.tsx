"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import RArrow from "../public/assets/icons/Icons.svg";
import TextLogo from "../public/assets/imgs/TextLogo.png";
import { socialMedia } from "@/mock/footer";

const Footer = () => {
  return (
    <footer className="pt-[50px] xl:pt-[100px] w-full bg-black">
      <div className="text-white pt-10 pb-5 border-t-[1px] border-[#FFFFFF4D]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center sm:justify-between">
            <div>
              <div className="flex justify-start">
                <Image
                  priority
                  src={TextLogo}
                  alt="Icons"
                  width={199}
                  height={54}
                />
              </div>
              <p className="mb-4 w-[232px] pt-3">
                Bringing the gift card experience on-chain.
              </p>
              <p
                className="text-transparent text-[100px] sm:text-[150px] xl:text-[222px] font-bold leading-[85px] sm:leading-[140px] xl:leading-[181px] font-Orbitron"
                style={{ WebkitTextStroke: "1px #FFFFFF1A" }}
              >
                Gifter
              </p>
            </div>

            <div className="flex flex-col sm:flex-row sm:space-x-8 pt-3">
              <div>
                <div className="flex flex-col sm:flex-row  my-3 sm:my-0">
                  <div className="w-[157px]">
                    <ul className="flex flex-col gap-2 sm:gap-5 text-sm text-[#D2D0DD] pt-5 sm:pt-0">
                      <li>Navigation</li>
                      <li className="pt-6">Features</li>
                      <li>Future</li>
                      <li>Marketplace</li>
                      <li>Contact Us</li>
                    </ul>
                  </div>
                </div>
                <div className="pt-5 sm:pt-11">
                  <div className="relative">
                    <div className="input-gradient-border p-[1px] rounded-[10px] w-[288px] h-[56px]">
                      <input
                        type="text"
                        className="w-full h-full gap-[10px] py-4 px-5 border-grey bg-black rounded-[9px] outline-none"
                        placeholder="Email Address"
                      />
                    </div>
                    <Image
                      src={RArrow}
                      alt="Arrow"
                      width={20}
                      height={20}
                      className="absolute right-[50px] top-[19px]"
                    />
                  </div>
                  <div className="flex pt-7 gap-5">
                    {socialMedia.map((SocialItem) => (
                      <Link
                        href={SocialItem.href}
                        key={SocialItem.name}
                        className="opacity-60 hover:opacity-100 transition-opacity duration-300 ease-in-out flex items-center"
                      >
                        <Image
                          priority
                          src={SocialItem.icon}
                          alt="Icons"
                          width={16}
                          height={16}
                        />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-[#FFFFFF] mt-3 ml-[51px] sm:ml-[220px] lg:ml-auto">&copy; 2024 Gifter.web3</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
