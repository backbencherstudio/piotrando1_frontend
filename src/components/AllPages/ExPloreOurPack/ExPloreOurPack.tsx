"use client";

import CommonIcon from "@/components/icon/Common";
import FoilIcon from "@/components/icon/FoilIcon";
import RearIcon from "@/components/icon/RearIcon";
import ShareIcon from "@/components/icon/ShareIcon";
import Image from "next/image";
import { useState } from "react";

const tabs = ["All Packs", "Retail Packs", "Premium Packs", "Vintage Packs", "Wholesale"];

const products = [
    {
        id: 1,
        title: "SPAN DROP 10",
        desc: "Compact mystery pack perfect for checkout counter sales and impulse purchases.",
        img: "/images/Card10.png",
        bg: "bg-gradient-to-b from-[#FFA7A7] to-[#FF8904]",
        hoverCard: "/images/hoverCard.png",

        stats: [
            { label: "Common / Uncommon", value: 32, icon: <CommonIcon /> },
            { label: "Foil Cards", value: 2, icon: <FoilIcon />, },
            { label: "Rare Special", value: 1, icon: <RearIcon />, }
        ],
    },
    {
        id: 2,
        title: "SPAN DROP 20",
        desc: "Entry-level pack great for new collectors and gift purchases",
        img: "/images/Card20.png",
        bg: "bg-gradient-to-b from-[#B8FFD2] to-[#CCED00]",
        hoverCard: "/images/hoverCard.png",

        stats: [
            { label: "Common / Uncommon", value: 32, icon: <CommonIcon /> },
            { label: "Foil Cards", value: 2, icon: <FoilIcon />, },
            { label: "Rare Special", value: 1, icon: <RearIcon />, }
        ],
    },
    {
        id: 3,
        title: "SPAN DROP 35",
        desc: "Mid-tier mystery pack with extra foil cards for added value. ",
        img: "/images/Card35.png",
        bg: "bg-gradient-to-b from-[#FFAFAF] to-[#FF2972]",
        hoverCard: "/images/hoverCard.png",

        stats: [
            { label: "Common / Uncommon", value: 32, icon: <CommonIcon /> },
            { label: "Foil Cards", value: 2, icon: <FoilIcon />, },
            { label: "Rare Special", value: 1, icon: <RearIcon />, },
        ],
    },
];

export default function MysteryPacks() {
    const [activeTab, setActiveTab] = useState("All Packs");

    return (
        <div className="bg-[#F5F5F5] pt-30 container" data-aos="fade-up"
            data-aos-anchor-placement="top-bottom">
            <div className="">

                {/* Heading */}
                <div className="text-center mb-10">
                    <h2 className="title font-secondary tracking-tight">
                        EXPLORE OUR MYSTERY PACKS
                    </h2>
                    <p className="text-[#393939] mt-4 max-w-xl mx-auto">
                        Authentic Pokémon repacks designed for collectors, retailers,
                        and wholesale partners.
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-3 mb-10">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-5 py-2 rounded-full text-sm transition
                ${activeTab === tab
                                    ? "bg-black text-white"
                                    : "bg-[#FFFFFF] text-[#161616]"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" data-aos="fade-up"
                    data-aos-duration="2000">
                    {products.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white rounded-2xl shadow-sm border hover:shadow-md transition p-2"
                        >
                            {/* Image section */}
                            <div className="group perspective flex justify-center">

                                <div className="relative w-[300px] h-[220px] transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">

                                    {/* FRONT */}
                                    <div className="absolute inset-0 backface-hidden rounded-sm overflow-hidden">
                                        <Image
                                            src={item.img}
                                            alt={item.title}
                                            width={230}
                                            height={220}
                                            className="object-contain w-full h-full"
                                        />
                                    </div>

                                    {/* BACK */}
                                    <div className="absolute inset-0 rotate-y-180 backface-hidden rounded-sm overflow-hidden">
                                        <Image
                                            src={item.hoverCard}
                                            alt={item.title}
                                            width={230}
                                            height={220}
                                            className="object-contain w-full h-full"
                                        />
                                    </div>

                                </div>
                            </div>

                            {/* Content */}
                            <div className=" py-2">
                                <h3 className="text-3xl font-normal text-center text-[#171B1C] font-secondary">
                                    {item.title}
                                </h3>
                                <div className="flex justify-center mx-auto items-center text-center">
                                    <p className="text-sm text-[#393939] text-center mt-2 ">
                                        {item.desc}
                                    </p>
                                </div>

                                {/* Stats */}
                                <div className="mt-4 space-y-2">
                                    {item.stats.map((stat, i) => (
                                        <div
                                            key={i}
                                            className="flex justify-between bg-[#F6F5F1] rounded-full px-4 py-2 text-sm"
                                        >
                                            <div className="flex gap-1">
                                                <p>{stat.icon}</p>  <span>{stat.label}</span>
                                            </div>
                                            <span>{stat.value}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mt-4 text-xs text-[#4A5565]">
                                    <span className="bg-[#F6F5F1] px-2 py-1 rounded-full">
                                        Premium Packaging
                                    </span>
                                    <span className="bg-[#F6F5F1] px-2 py-1 rounded-full">
                                        Great Gift Option
                                    </span>
                                    <span className="bg-[#F6F5F1] px-2 py-1 rounded-full">
                                        2 Foil Card Included
                                    </span>
                                </div>

                                {/* Button */}
                                <button className="w-full flex justify-center gap-3 mt-5 bg-[#FF8904] hover:bg-orange-500 cursor-pointer  text-white py-3 rounded-xl transition">
                                    <ShareIcon /> Request a Quote
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    );
}