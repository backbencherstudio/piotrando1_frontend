"use client";

import React from "react";
import { FaRegClock, FaShippingFast } from "react-icons/fa";
import { MdOutlinePublic } from "react-icons/md";
import { BsBox } from "react-icons/bs";
import Image from "next/image";
import SecureIcon from "@/components/icon/SecureIcon";
import ConsitentIcon from "@/components/icon/ConsistentIcon";
import StrongIcon from "@/components/icon/StrongIcon";
import CarIcon from "@/components/icon/CarIcon";

const deliveryData = [
    {
        title: "Shipping Regions",
        icon: <MdOutlinePublic />,
        description:
            "We currently deliver across the EU, United Kingdom, and selected international markets.",
        details: [
            "EU-wide + UK",
            "UK delivery available",
            "International shipping on request",
        ],
    },
    {
        title: "Delivery Times",
        icon: <FaRegClock />,
        description:
            "Orders are processed quickly so your products arrive ready to sell without long delays.",
        details: [
            "EU: 3–5 business days",
            "UK: 5–7 business days",
            "Bulk orders: 7—10 days",
        ],
        highlight: true,
    },
    {
        title: "Minimum Order Quantity",
        icon: <BsBox />,
        description:
            "Flexible order sizes make it easy to start small or scale as your business grows.",
        details: [
            "Starter: from 25 packs",
            "Wholesale: from 50+",
            "Reserved inventory available for long-term partners.",
        ],
    },
];

const features = [
    {
        title: "100% Authentic Cards",
        desc: "All cards are genuine – guaranteed or money back",
        icon: <SecureIcon />
    },
    {
        title: "Consistent Supply",
        desc: "Reliable stock from multiple sourcing channels",
        icon: <ConsitentIcon />
    },
    {
        title: "Strong Margins",
        desc: "Competitive wholesale pricing for profitable resale",
        icon: <StrongIcon />
    },
    {
        title: "Fast Delivery",
        desc: "Ships across EU & UK with tracked delivery",
        icon: <CarIcon />
    },
];

export default function DeliveryLogistics() {
    return (
        <div className=" py-10 lg:py-20 container" id="shiping">
            {/* Header */}
            <div className="text-center mb-12" data-aos="zoom-out-down" data-aos-duration="1500">
                <div className='flex justify-center'>
                    <div className="flex items-center gap-2 border py-2 px-4 rounded-full">
                        <Image
                            src="/images/aboutusLogo.png"
                            alt="icon"
                            width={24}
                            height={24}
                            className="object-contain"
                        />
                        <p className="  text-[16px] font-medium leading-[170%] tracking-[-0.3px] ">Delivery & Logistics
                        </p>
                    </div>

                </div>
                <p className="text-[#000] text-[clamp(2rem,3vw,3rem)] font-normal font-secondary leading-120% pt-6 ">Fast & Reliable Delivery Across Europe</p>
                <p className="text-[#393939] font-normal text-base leading-170% tracking-[0.03px] text-center ">
                    We keep your business stocked with fast shipping, secure packaging, and consistent
                    availability
                </p>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 md:gap-6  mx-auto">
                {deliveryData.map((item, index) => (
                    <div
                        key={index}
                        data-aos="fade-up"
                        data-aos-duration="1500"
                        className="rounded-2xl border border-transparent hover:border-orange-500 transition-all duration-300 overflow-hidden"
                    >
                        {/* Top Section */}
                        <div className="bg-white p-6">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="text-xl text-orange-400">{item.icon}</div>
                                <h3 className="text-xl font-medium leading-170%">{item.title}</h3>
                            </div>

                            <p className="text-base leading-170% text-[#393939]">
                                {item.description}
                            </p>
                        </div>

                        {/* Bottom Section */}
                        <div className="bg-[#F8F8F8] p-6">
                            <p className="mb-2 text-base leading-170% font-medium text-[#000]">Details:</p>

                            <ul className="space-y-2 text-sm text-gray-700">
                                {item.details.map((d, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <span className="outline h-3 w-3 rounded-full outline-black mt-1"></span>
                                        <span className="text-[#000] font-normal text-base">{d}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>

            {/* Bottom Features */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6  mx-auto mt-16">
                {features.map((f, i) => (
                    <div key={i} className="flex gap-3 items-start" data-aos="fade-up"
                        data-aos-duration="1500">
                        <div className="bg-[#DCFCE7] p-2.5 rounded-md">{f.icon}</div>
                        <div>
                            <h4 className="font-medium text-lg text-[#101828]">{f.title}</h4>
                            <p className="text-[#4A5565] text-sm font-normal">{f.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}