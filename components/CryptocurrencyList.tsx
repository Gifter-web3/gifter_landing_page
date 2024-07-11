import React from "react";
import Image from "next/image";
import Graph1 from "@/public/assets/imgs/graph/small-graph1.png";
import Graph2 from "@/public/assets/imgs/graph/small-graph2.png";
import Graph3 from "@/public/assets/imgs/graph/small-graph3.png";
import Graph4 from "@/public/assets/imgs/graph/small-graph4.png";
import Graph5 from "@/public/assets/imgs/graph/small-graph5.png";

const cryptocurrencies = [
  {
    name: "Bitcoin",
    symbol: "BTC",
    price: "$56,290.30",
    change: "+1.68%",
    changePositive: true,
    graph: Graph1,
  },
  {
    name: "Ethereum",
    symbol: "ETH",
    price: "$4,284.81",
    change: "+4.36%",
    changePositive: true,
    graph: Graph2,
  },
  {
    name: "Cardano",
    symbol: "ADA",
    price: "$1.88",
    change: "+3.43%",
    changePositive: true,
    graph: Graph3,
  },
  {
    name: "Wax",
    symbol: "WAXP",
    price: "$0.97",
    change: "-2.62%",
    changePositive: false,
    graph: Graph4,
  },
  {
    name: "Polkadot",
    symbol: "DOT",
    price: "$42.22",
    change: "+7.56%",
    changePositive: true,
    graph: Graph5,
  },
];

const CryptocurrencyList = () => {
  return (
    <div className="flex flex-col gap-4 w-[1180px] bg-black p-6 rounded-[25px] px-8 py-[20px]">
      {cryptocurrencies.map((crypto) => (
        <div
          key={crypto.symbol}
          className="flex items-center justify-between py-4 border-b border-gray-700"
        >
          <div className="flex items-center space-x-4">
            <span className="text-white font-bold text-[20px] font-Inter leading-[30px] w-[207px]">
              {crypto.name}
            </span>
            <span className="text-[#B982FF] font-bold text-[20px] font-Inter leading-[30px] w-[91px]">
              {crypto.symbol}
            </span>
          </div>
          <div className="text-white font-bold text-[20px] font-Inter leading-[30px] w-[231px]">
            {crypto.price}
          </div>
          <div
            className={`font-bold text-[20px] font-Inter leading-[30px] ${
              crypto.changePositive ? "text-green-500" : "text-red-500"
            }`}
          >
            {crypto.change}
          </div>
          <div>
            <Image src={crypto.graph} alt={crypto.name} />
          </div>
          <a
            href="#"
            className="text-white font-Inter text-base leading-4 font-semibold"
          >
            Trade Now →
          </a>
        </div>
      ))}
    </div>
  );
};

export default CryptocurrencyList;
