"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Vector from "../public/assets/icons/Vector.svg";
import RArrow from "../public/assets/icons/Icons.svg";

import { socialMedia } from "@/mock/footer";

const Footer = () => {
  return (
    <footer
      className="text-white py-10 border-t-2 absolute bottom-0 w-full"
      style={{
        background:
          "radial-gradient(32.81% 53.93% at 50% 0%, rgba(133, 102, 255, 0.04) 0%, rgba(133, 102, 255, 0) 100%, rgba(133, 102, 255, 0) 100%)",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between">
          <div>
            <div className="flex justify-start">
              <Image priority src={Vector} alt="Icons" width={28} height={30} />
              <p className="font-medium text-[30px] leding-[24px] font-Orbitron pl-3">
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
            <p className="text-sm pt-6">&copy; 2024 Gifter Holdings</p>
          </div>

          <div className="flex space-x-8 pt-3">
            <div className="w-[122px]">
              <ul className="flex flex-col gap-5 text-sm">
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
                  <ul className="flex flex-col gap-5 text-sm">
                    <li>Legals</li>
                    <li>Terms of Services</li>
                    <li>Privacy Policy</li>
                    <li className="pt-6">Free Tools</li>
                    <li>Content Generator</li>
                  </ul>
                </div>
                <div className="w-[157px]">
                  <ul className="flex flex-col gap-5 text-sm">
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
                  <input
                    type="text"
                    className="w-[288px] h-[56px] rounded-[10px] gap-[10px] py-4 px-5 border-grey bg-black"
                    placeholder="Email Address"
                  />
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
    </footer>
  );
};

export default Footer;
