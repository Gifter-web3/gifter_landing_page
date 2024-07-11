import React, { useState } from "react";
import Image from "next/image";

import BackImg from "@/public/assets/imgs/backImgC.png";
import LetterBox from "@/public/assets/icons/letterBox.svg";
import EllipseL from "@/public/assets/imgs/ellipseCL.png";
import BuyAndSellGiftcard from "@/components/BuyAndSellGiftcard";
import TakeCareGiftcard from "@/components/TakeCareGiftcard";

const faqs = [
  { question: "Question 1", answer: "Answer to question 1" },
  {
    question: "Question 2",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id dui pharetra elementum sit id sagittis non donec egestas.",
  },
  { question: "Question 3", answer: "Answer to question 3" },
  { question: "Question 4", answer: "Answer to question 4" },
  { question: "Question 5", answer: "Answer to question 5" },
];

const Contact = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div>
      <div className="flex w-full h-auto overflow-hidden relative">
        <Image
          src={BackImg}
          alt="Marketplace Background"
          className="w-full h-[955px]"
        />
        <div className="flex items-center justify-center absolute top-[180px] left-[25px] gap-[174px] w-full">
          <div className="p-10 rounded-lg shadow-lg w-full max-w-[770px]">
            <h1 className="text-[66px] leading-[80px] font-bold text-white mb-8 font-Orbitron text-center">
              Get in touch
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex flex-col">
                <label className="text-white font-semibold mb-2">Name</label>
                <input
                  type="text"
                  placeholder="Full name"
                  className="px-4 py-2 border border-gray-300 rounded-md bg-[#010D5033] focus:outline-none focus:border-purple-500 w-[323px] h-[68px]"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-white font-semibold mb-2">Email</label>
                <input
                  type="email"
                  placeholder="email@example.com"
                  className="px-4 py-2 border border-gray-300 rounded-md bg-[#010D5033] focus:outline-none focus:border-purple-500 w-[323px] h-[68px]"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-white font-semibold mb-2">Company</label>
                <input
                  type="text"
                  placeholder="Company Name"
                  className="px-4 py-2 border border-gray-300 rounded-md bg-[#010D5033] focus:outline-none focus:border-purple-500 w-[323px] h-[68px]"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-white font-semibold mb-2">Subject</label>
                <input
                  type="text"
                  placeholder="How can we help?"
                  className="px-4 py-2 border border-gray-300 bg-[#010D5033] rounded-md focus:outline-none focus:border-purple-500 w-[323px] h-[68px]"
                />
              </div>
              <div className="md:col-span-2 flex flex-col">
                <label className="text-white font-semibold mb-2">Message</label>
                <textarea
                  placeholder="Your message"
                  className="px-4 py-2 border border-gray-300 bg-[#010D5033] rounded-md focus:outline-none focus:border-purple-500 w-[668px] h-[177px]"
                ></textarea>
              </div>
            </div>
            <button className="flex justify-center items-center bg-white text-black w-[259px] h-[52px] font-medium py-[20px] px-[13px] rounded-[13px] hover:bg-[#010D5033] transition duration-300">
              <p className="font-Inter text-[21px] leading-[25px] tracking-[-2%]">
                Get Started
              </p>
            </button>
          </div>
          <div className="mt-11 text-white w-[382px]">
            <p className="font-bold mb-5 text-[22px] leading-[31px] tracking-[0.22px]">
              Want to reach us directly?
            </p>
            <p className="font-normal text-[18px] leading-[25px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id dui
              pharetra elementum sit id sagittis non donec egestas.
            </p>
            <ul className="flex flex-col gap-4 mt-[48px]">
              <li className="mb-2 flex gap-[15px]">
                <span className="mr-2">
                  <Image src={LetterBox} alt="Letter" width={38} height={38} />
                </span>{" "}
                <p className="text-[18px] leading-[29px] font-medium">
                  contact@example.com
                </p>
              </li>
              <li className="mb-2 flex gap-[15px]">
                <span className="mr-2">
                  <Image src={LetterBox} alt="Letter" width={38} height={38} />
                </span>{" "}
                <p className="text-[18px] leading-[29px] font-medium">
                  support@example.com{" "}
                </p>
              </li>
              <li className="flex gap-[15px]">
                <span className="mr-2">
                  <Image src={LetterBox} alt="Letter" width={38} height={38} />
                </span>{" "}
                <p className="text-[18px] leading-[29px] font-medium">
                  press@example.com
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-white flex items-center justify-center p-10 bg-black">
        <div className="w-full flex flex-col justify-center items-center pt-[70px]">
          <h1 className="text-[66px] font-bold text-center leading-[80px] tracking-[-1px] font-Orbitron mb-10">
            FAQ
          </h1>
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4 w-[872px] pt-[3rem]">
              <div
                className="flex justify-between items-center py-4 border-b border-[#FFFFFF33] cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h2 className="text-[28px] leading-[30px] tracking-[0.28px] font-bold">
                  {faq.question}
                </h2>
                <span className="text-2xl">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </div>
              {activeIndex === index && (
                <div className="mt-2">
                  <p className="font-normal text-lg leading-8">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <Image
          src={EllipseL}
          alt="Back Effect"
          width={693}
          height={693}
          className="absolute left-[-302px] rotate-[30deg]"
        />
      </div>
      <div className="bg-gradient-contact">
        <BuyAndSellGiftcard />
        <TakeCareGiftcard />
      </div>

    </div>
  );
};

export default Contact;
