"use client";

import React from "react";
import { useTranslation } from "@/components/hooks/useTranslation";
import Image from "next/image";

import { FaRegClock } from "react-icons/fa";
import { MdOutlinePublic } from "react-icons/md";
import { BsBox } from "react-icons/bs";

import SecureIcon from "@/components/icon/SecureIcon";
import ConsitentIcon from "@/components/icon/ConsistentIcon";
import StrongIcon from "@/components/icon/StrongIcon";
import CarIcon from "@/components/icon/CarIcon";

export default function DeliveryLogistics() {
    const { t } = useTranslation();
    const d = t.delivery;

    const deliveryData = [
        {
            title: d.regions.title,
            icon: <MdOutlinePublic />,
            description: d.regions.description,
            details: [d.regions.eu, d.regions.uk, d.regions.international],
        },
        {
            title: d.times.title,
            icon: <FaRegClock />,
            description: d.times.description,
            details: [d.times.eu, d.times.uk, d.times.bulk],
        },
        {
            title: d.moq.title,
            icon: <BsBox />,
            description: d.moq.description,
            details: [d.moq.starter, d.moq.wholesale, d.moq.reserved],
        },
    ];

    const features = [
        {
            title: d.highlights.authentic,
            desc: d.highlights.authenticDesc,
            icon: <SecureIcon />,
        },
        {
            title: d.highlights.supply,
            desc: d.highlights.supplyDesc,
            icon: <ConsitentIcon />,
        },
        {
            title: d.highlights.margins,
            desc: d.highlights.marginsDesc,
            icon: <StrongIcon />,
        },
        {
            title: d.highlights.fastDelivery,
            desc: d.highlights.fastDeliveryDesc,
            icon: <CarIcon />,
        },
    ];

    return (
        <div className="py-10 lg:py-20 containers" id="shiping">
            {/* Header */}
            <div className="text-center mb-12" data-aos="zoom-out-down">
                <div className="flex justify-center">
                    <div className="flex items-center gap-2 border py-2 px-4 rounded-full">
                        <Image
                            src="/images/aboutusLogo.png"
                            alt="icon"
                            width={24}
                            height={24}
                            className="object-contain"
                        />
                        <p className="text-[16px] font-medium">
                            Delivery & Logistics
                        </p>
                    </div>
                </div>

                <p className="text-[#000] text-[clamp(2rem,3vw,3rem)] font-secondary pt-6">
                    {d.title}
                </p>

                <p className="text-[#393939] text-base text-center">
                    {d.subtitle}
                </p>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 md:gap-6">
                {deliveryData.map((item, index) => (
                    <div
                        key={index}
                        className="rounded-2xl border overflow-hidden"
                    >
                        {/* Top */}
                        <div className="bg-white p-6">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="text-orange-400 text-xl">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-medium">
                                    {item.title}
                                </h3>
                            </div>

                            <p className="text-[#393939]">
                                {item.description}
                            </p>
                        </div>

                        {/* Bottom */}
                        <div className="bg-[#F8F8F8] p-6">
                            <p className="font-medium mb-2">Details:</p>

                            <ul className="space-y-2">
                                {item.details.map((d, i) => (
                                    <li key={i} className="flex gap-2">
                                        <span className="h-3 w-3 rounded-full border border-black mt-1" />
                                        <span>{d}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-16">
                {features.map((f, i) => (
                    <div key={i} className="flex gap-3 items-start">
                        <div className="bg-[#DCFCE7] p-2.5 rounded-md">
                            {f.icon}
                        </div>
                        <div>
                            <h4 className="font-medium text-lg">{f.title}</h4>
                            <p className="text-sm text-[#4A5565]">{f.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}