"use client";

import Image from "next/image";
import { useState } from "react";

const tabs = ["All Packs", "Retail Packs", "Premium Packs", "Vintage Packs", "Wholesale"];

const products = [
    {
        id: 1,
        title: "SPAN DROP 10",
        desc: "Compact mystery pack perfect for checkout counter sales and impulse purchases.",
        img: "/images/Product 1.png",
        bg: "bg-gradient-to-b from-[#FFA7A7] to-[#FF8904]",
        stats: [
            { label: "Common / Uncommon", value: 8 },
            { label: "Foil Cards", value: 1 },
            { label: "Rare Special", value: 1 },
        ],
    },
    {
        id: 2,
        title: "SPAN DROP 20",
        desc: "Entry-level pack great for new collectors and gift purchases",
        img: "/images/Product 2.png",
        bg: "bg-gradient-to-b from-[#B8FFD2] to-[#CCED00]",
        stats: [
            { label: "Common / Uncommon", value: 18 },
            { label: "Foil Cards", value: 1 },
            { label: "Rare Special", value: 1 },
        ],
    },
    {
        id: 3,
        title: "SPAN DROP 35",
        desc: "Mid-tier mystery pack with extra foil cards for added value.",
        img: "/images/Product 3.png",
        bg: "bg-gradient-to-b from-[#FFAFAF] to-[#FF2972]",
        stats: [
            { label: "Common / Uncommon", value: 32 },
            { label: "Foil Cards", value: 2 },
            { label: "Rare Special", value: 1 },
        ],
    },
];

export default function MysteryPacks() {
    const [activeTab, setActiveTab] = useState("All Packs");

    return (
        <div className="bg-[#F5F5F5] py-16 px-4">
            <div className="max-w-7xl mx-auto">

                {/* Heading */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                        EXPLORE OUR MYSTERY PACKS
                    </h2>
                    <p className="text-gray-500 mt-3 max-w-xl mx-auto">
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
                                    : "bg-gray-200 text-gray-700"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white rounded-2xl shadow-sm border hover:shadow-md transition"
                        >
                            {/* Image section */}
                            <div
                                className={`rounded-t-2xl p-6 flex justify-center bg-gradient-to-b ${item.bg}`}
                            >
                                <Image
                                    src={item.img}
                                    alt={item.title}
                                    width={180}
                                    height={220}
                                    className="object-contain"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-5">
                                <h3 className="text-lg font-semibold text-center">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-gray-500 text-center mt-2">
                                    {item.desc}
                                </p>

                                {/* Stats */}
                                <div className="mt-4 space-y-2">
                                    {item.stats.map((stat, i) => (
                                        <div
                                            key={i}
                                            className="flex justify-between bg-gray-100 rounded-full px-4 py-2 text-sm"
                                        >
                                            <span>{stat.label}</span>
                                            <span>{stat.value}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mt-4 text-xs text-gray-500">
                                    <span className="bg-gray-100 px-3 py-1 rounded-full">
                                        Premium Packaging
                                    </span>
                                    <span className="bg-gray-100 px-3 py-1 rounded-full">
                                        Great Gift Option
                                    </span>
                                    <span className="bg-gray-100 px-3 py-1 rounded-full">
                                        2 Foil Card Included
                                    </span>
                                </div>

                                {/* Button */}
                                <button className="w-full mt-5 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl transition">
                                    Request a Quote
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}