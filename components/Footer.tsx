"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Vector from "../public/assets/icons/Vector.svg";
import RArrow from "../public/assets/icons/Icons.svg";

import { socialMedia } from "@/mock/footer";

const Footer = () => {
  return (
    <footer className="pt-[100px] w-full bg-black">
      <div className="text-white py-10 border-t-[1px] border-[#FFFFFF4D]">
        <div className="container mx-auto px-4">
          <div className="flex justify-between">
            <div>
              <div className="flex justify-start">
                <Image
                  priority
                  src={Vector}
                  alt="Icons"
                  width={28}
                  height={30}
                />
                <p className="font-medium text-[30px] leding-[24px] font-Orbitron pl-3 text-white">
                  Gifter
                </p>
              </div>
              <p className="mb-4 w-[232px] pt-8">
                Experience the next generation of SEO analytics.
              </p>
              <p
                className="text-transparent text-[222px] font-bold leading-[181px] font-Orbitron"
                style={{ WebkitTextStroke: "1px #FFFFFF1A" }}
              >
                Gifter
              </p>
              <p className="text-sm pt-6 text-[#FFFFFF]">
                &copy; 2024 Gifter Holdings
              </p>
            </div>

            <div className="flex space-x-8 pt-3">
              <div className="w-[122px]">
                <ul className="flex flex-col gap-5 text-sm text-[#D2D0DD]">
                  <li>Platform</li>
                  <li>Features</li>
                  <li>Pricing</li>
                  <li>Wiki</li>
                  <li>Partnership</li>
                  <li>Affiliate</li>
                  <li>Download</li>
                  <li>Community</li>
                  <li>Contact Us</li>
                </ul>
              </div>
              <div>
                <div className="flex">
                  <div className="w-[157px]">
                    <ul className="flex flex-col gap-5 text-sm text-[#D2D0DD]">
                      <li>Legals</li>
                      <li>Terms of Services</li>
                      <li>Privacy Policy</li>
                      <li className="pt-6">Free Tools</li>
                      <li>Content Generator</li>
                    </ul>
                  </div>
                  <div className="w-[157px]">
                    <ul className="flex flex-col gap-5 text-sm text-[#D2D0DD]">
                      <li>Wope for</li>
                      <li>Agencies</li>
                      <li>Startups</li>
                      <li className="pt-6">Success Stories</li>
                      <li>PizzaHut</li>
                    </ul>
                  </div>
                </div>
                <div className="pt-11">
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
