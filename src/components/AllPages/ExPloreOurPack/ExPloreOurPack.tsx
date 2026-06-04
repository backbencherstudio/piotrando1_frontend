"use client";

import { useTranslation } from "@/components/hooks/useTranslation";
import CommonIcon from "@/components/icon/Common";
import FoilIcon from "@/components/icon/FoilIcon";
import RearIcon from "@/components/icon/RearIcon";
import ShareIcon from "@/components/icon/ShareIcon";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const tabs = ["All Packs", "Retail Packs", "Premium Packs", "Vintage Packs", "Wholesale"];



// const products = [
//     {
//         id: 1,
//         name: "Starter Pack ",
//         title: "10 CARDS",
//         desc: "Compact mystery pack perfect for checkout counter sales, impulse purchases, and entry-level collectors.",
//         img: "/images/pokemon11.png",
//         bg: "bg-gradient-to-b from-[#FFA7A7] to-[#FF8904]",
//         hoverCard: "/images/orange back 2.png",

//         stats: [
//             { label: "Common / Uncommon", value: 7, icon: <CommonIcon /> },
//             { label: "Foil Cards", value: 2, icon: <FoilIcon />, },
//             { label: "Rare Special", value: 1, icon: <RearIcon />, textColor: "text-[#FF6900] font-medium" }
//         ],
//         tags: [
//             "Premium Packaging",
//             "Great Gift Option",
//             "2 Foil Card Included"
//         ]
//     },
//     {
//         id: 2,
//         name: "Evolution Pack ",
//         title: "20 CARDS",
//         desc: "Balanced mystery pack designed for growing collectors seeking better pull rates and stronger perceived value.",
//         img: "/images/pokemon13.png",
//         bg: "bg-gradient-to-b from-[#B8FFD2] to-[#CCED00]",
//         hoverCard: "/images/orange back 2.png",

//         stats: [
//             { label: "Common / Uncommon", value: 14, icon: <CommonIcon /> },
//             { label: "Foil Cards", value: 4, icon: <FoilIcon />, },
//             { label: "Rare Special", value: 2, icon: <RearIcon />, textColor: "text-[#FF6900] font-medium" }
//         ],
//         tags: [
//             "Premium Packaging",
//             "Great Gift Option",
//             "4 Foil Card Included"
//         ]
//     },
//     {
//         id: 3,
//         name: "Ultra Pack ",
//         title: " 35 CARDS",
//         desc: "Premium mystery pack built for serious collectors, featuring the strongest pull potential and highest perceived value.",
//         img: "/images/pokemon121.png",
//         bg: "bg-gradient-to-b from-[#FFAFAF] to-[#FF2972]",
//         hoverCard: "/images/orange back 2.png",

//         stats: [
//             { label: "Common / Uncommon", value: 25, icon: <CommonIcon /> },
//             { label: "Foil Cards", value: 6, icon: <FoilIcon />, },
//             { label: "Rare Special", value: 4, icon: <RearIcon />, textColor: "text-[#FF6900] font-medium" },
//         ],
//         tags: [
//             "Premium Packaging",
//             "Great Gift Option",
//             "6 Foil Card Included"
//         ]
//     },
// ];

export default function MysteryPacks() {

    const { t } = useTranslation();


    const [activeTab, setActiveTab] = useState("All Packs");
    const [isFlipped, setIsFlipped] = useState<number | null>(null);

    const products = [
        {
            id: 1,
            name: t.explore.starter.name,
            title: t.explore.starter.cards,
            desc: t.explore.starter.description,
            img: "/images/pokemon11.png",
            bg: "bg-gradient-to-b from-[#FFA7A7] to-[#FF8904]",
            hoverCard: "/images/orange back 2.png",

            stats: [
                {
                    label: t.explore.starter.commonUncommon,
                    value: 7,
                    icon: <CommonIcon />
                },
                {
                    label: t.explore.starter.foilCards,
                    value: 2,
                    icon: <FoilIcon />
                },
                {
                    label: t.explore.starter.rareSpecial,
                    value: 1,
                    icon: <RearIcon />,
                    textColor: "text-[#FF6900] font-medium"
                }
            ],

            tags: [
                t.explore.starter.premiumPackaging,
                t.explore.starter.greatGiftOption,
                t.explore.starter.foilIncluded
            ]
        },

        {
            id: 2,
            name: t.explore.evolution.name,
            title: t.explore.evolution.cards,
            desc: t.explore.evolution.description,
            img: "/images/pokemon13.png",
            bg: "bg-gradient-to-b from-[#B8FFD2] to-[#CCED00]",
            hoverCard: "/images/orange back 2.png",

            stats: [
                {
                    label: t.explore.evolution.commonUncommon,
                    value: 14,
                    icon: <CommonIcon />
                },
                {
                    label: t.explore.evolution.foilCards,
                    value: 4,
                    icon: <FoilIcon />
                },
                {
                    label: t.explore.evolution.rareSpecial,
                    value: 2,
                    icon: <RearIcon />,
                    textColor: "text-[#FF6900] font-medium"
                }
            ],

            tags: [
                t.explore.evolution.premiumPackaging,
                t.explore.evolution.greatGiftOption,
                t.explore.evolution.foilIncluded
            ]
        },

        {
            id: 3,
            name: t.explore.ultra.name,
            title: t.explore.ultra.cards,
            desc: t.explore.ultra.description,
            img: "/images/pokemon121.png",
            bg: "bg-gradient-to-b from-[#FFAFAF] to-[#FF2972]",
            hoverCard: "/images/orange back 2.png",

            stats: [
                {
                    label: t.explore.ultra.commonUncommon,
                    value: 25,
                    icon: <CommonIcon />
                },
                {
                    label: t.explore.ultra.foilCards,
                    value: 6,
                    icon: <FoilIcon />
                },
                {
                    label: t.explore.ultra.rareSpecial,
                    value: 4,
                    icon: <RearIcon />,
                    textColor: "text-[#FF6900] font-medium"
                }
            ],

            tags: [
                t.explore.ultra.premiumPackaging,
                t.explore.ultra.greatGiftOption,
                t.explore.ultra.foilIncluded
            ]
        }
    ];

    return (
        <div className="py-10 lg:py-20  " data-aos="fade-up"
            data-aos-anchor-placement="top-bottom">
            <div className="containers">

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
                {/* <div className="flex flex-wrap justify-center gap-3 mb-10">
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
                </div> */}

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" data-aos="fade-up"
                    data-aos-duration="1500">
                    {products.map((item) => (

                        <div
                            key={item.id}
                            className=""
                        >

                            <div className="text-center flex items-center justify-center pb-4 text-2xl md:text-3xl font-secondary">{item.name}</div>
                            <div className="bg-white rounded-2xl shadow-sm border hover:shadow-md transition p-2">

                                {/* Image section */}
                                <div className={`flex  justify-center items-center rounded-xl h-[340px] ${item.bg}`}>
                                    <div onClick={() => setIsFlipped(isFlipped === item.id ? null : item.id)} className="group perspective flex  mx-auto w-[150px] justify-center items-center ">

                                        <div className={`relative w-[390px] h-[280px]  transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180 rounded-xl ${isFlipped === item.id ? "rotate-y-180" : "group-hover:rotate-y-180"}`}>

                                            {/* FRONT */}
                                            <div className="absolute left-1/2 -translate-x-1/2 w-[200px] h-[280px] inset-y-0 backface-hidden rounded-sm overflow-hidden flex justify-center items-center ">
                                                <Image
                                                    src={item.img}
                                                    alt={item.title}
                                                    width={400}
                                                    height={300}
                                                    className="object-contain w-full h-full "
                                                // className={item.id === 3 ? "object-cover" : "object-contain"}
                                                />
                                            </div>

                                            {/* BACK */}
                                            {/* BACK */}
                                            <div className="absolute left-1/2 -translate-x-1/2 w-[200px] h-[280px] inset-y-0 rotate-y-180 backface-hidden rounded-sm overflow-hidden flex justify-center items-center">
                                                <Image
                                                    src={item.hoverCard}
                                                    alt={item.title}
                                                    width={250}
                                                    height={220}
                                                    className="object-contain w-full h-full"
                                                />
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                < div className=" py-2" >
                                    <h3 className="text-3xl font-normal text-center text-[#171B1C] font-secondary">
                                        {item.title}
                                    </h3>
                                    <div className="flex justify-center mx-auto items-center text-center">
                                        <p className="text-sm text-[#393939] text-center mt-2  leading-relaxed text-balance">
                                            {item.desc}
                                        </p>
                                    </div>

                                    {/* Stats */}
                                    <div className="mt-4 space-y-2" >
                                        {
                                            item.stats.map((stat, i) => (
                                                <div
                                                    key={i}
                                                    className="flex justify-between bg-[#F6F5F1] rounded-full px-4 py-2 text-sm"
                                                >
                                                    <div className="flex gap-1 ">
                                                        <p>{stat.icon}</p>  <span className={stat.textColor}>{stat.label}</span>
                                                    </div>
                                                    <span>{stat.value}</span>
                                                </div>
                                            ))
                                        }
                                    </div>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mt-4 text-xs text-[#4A5565]">
                                        {item.tags.map((tag, index) => (
                                            <span
                                                key={index}
                                                className="bg-[#F6F5F1] px-2 py-1 rounded-full"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Button */}
                                    <Link href="/#contact" className="w-full flex justify-center gap-3 mt-5 bg-[#FF8904] hover:bg-orange-500 cursor-pointer  text-white py-3 rounded-xl transition">
                                        <ShareIcon />  {t.explore.requestQuote}
                                    </Link>
                                </div>

                            </div>
                        </div>
                    ))
                    }
                </div >
            </div >


        </div >
    );
}