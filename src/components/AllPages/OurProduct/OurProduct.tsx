"use client";

import Image from "next/image";
import React, { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";
import CorrectIcon from "@/components/icon/CorrectIcon";
import { BsStars } from "react-icons/bs";
import { useTranslation } from "@/components/hooks/useTranslation";

export default function OurProduct() {
    const [isFlipped, setIsFlipped] = useState(false);
    const { t } = useTranslation();


    return (
        <div className="containers pt-10 pb-8 lg:pt-20 overflow-hidden">
            {/* HEADER */}
            <div
                className="flex flex-col items-center justify-center px-4 pb-10 text-center lg:pb-16"
                data-aos="zoom-out-down"
                data-aos-duration="1500"
            >
                <div className="flex items-center gap-2 rounded-full border bg-white px-4 py-2">
                    <Image
                        src="/images/aboutusLogo.png"
                        alt="icon"
                        width={20}
                        height={20}
                    />

                    <p className="text-sm font-medium lg:text-base">
                        {t.products.mainTitle}
                    </p>
                </div>

                <h2 className="mt-4 font-secondary text-[clamp(2rem,3vw,5rem)]">
                    {t.products.title}
                </h2>

                <p className="mt-3 max-w-xl text-sm text-[#393939] lg:text-base">
                    {t.products.subtitle}
                </p>
            </div>

            {/* GRID */}
            <div className=" ">
                <div className="grid grid-cols-1 gap-8 md:gap-13 lg:grid-cols-2 lg:gap-[100px] ">
                    {/* LEFT CARD */}
                    <div
                        className="relative mx-auto w-full max-w-full"
                        data-aos="zoom-out-up"
                    >
                        {/* BG */}
                        <Image
                            src="/images/overlay1.png"
                            alt="bg"
                            width={545}
                            height={301}
                            className="absolute top-0 z-0 h-[400px] w-full rounded-2xl object-cover sm:h-[470px] md:h-[500px]"
                        />

                        {/* CARD */}
                        <div
                            className="relative px-2 sm:px-4 md:px-6 "
                            data-aos-duration="1500"
                        >
                            <div className="relative z-10 mt-2 md:mt-6 flex min-h-[400px] w-full items-center justify-start rounded-2xl bg-white px-4 py-8 shadow-lg  sm:min-h-[470px] sm:px-6 md:min-h-[500px] md:px-8">

                                {/* TEXT */}
                                <div>
                                    <div className="max-w-[58%]  sm:max-w-[56%] mt-0 md:-mt-5 space-y-3 text-sm text-[#4A5565] sm:text-base">
                                        <h2 className="flex items-center gap-2 text-lg font-semibold sm:text-2xl md:text-3xl">
                                            <span className="h-2 w-2 rounded-full bg-[#FF8904]"></span>
                                            <p className=" text-[#101828] ">  {t.products?.starter?.insidePacks?.title}</p>
                                        </h2>

                                        <ul className="mt-4 space-y-3 text-sm text-[#4A5565] sm:text-base">
                                            {t.products?.starter?.insidePacks?.items?.map((item: string, index: number) => (
                                                <li key={index} className={`flex gap-2 ${index === 2 ? "font-medium text-[#FF6900]" : ""
                                                    }`}>
                                                    <CorrectIcon className="mt-1 shrink-0 text-green-500" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}


                                            <li className="hidden md:block w-full mt-1">
                                                <p className="flex gap-2">
                                                    <BsStars className="h-6 w-9" />
                                                    {t.products?.starter?.insidePacks?.specialNote}
                                                </p>
                                            </li>
                                        </ul>


                                    </div>
                                    <div className="block md:hidden mt-6">
                                        <p className="flex gap-2 text-sm text-[#4A5565] sm:text-base">
                                            <BsStars className="h-6 w-9" />
                                            {t.products?.starter?.insidePacks?.specialNote}
                                        </p>
                                    </div>
                                </div>



                                {/* IMAGE */}
                                <div
                                    onClick={() => setIsFlipped(!isFlipped)}
                                    className="group perspective absolute top-1/3 md:top-1/2 mt-10 md:-mt-3 right-[2px] sm:right-[30px] md:right-[20px] lg:right-[-45px] xl:right-[10px] 2xl:right-[15px] flex -translate-y-1/2 cursor-pointer items-center justify-center rounded-xl "
                                >
                                    <div
                                        className={`relative h-[220px] w-[150px] -mt-4 [@media(min-width:470px)]:mt-5.5 md:mt-0 2xl:mt-6 rounded-xl transition-transform duration-700 transform-style-preserve-3d sm:h-[280px] sm:w-[190px] md:h-[320px] md:w-[220px] 
    ${isFlipped
                                                ? "rotate-y-180"
                                                : "group-hover:rotate-y-180"
                                            }`}
                                    >
                                        {/* FRONT */}
                                        <div className="absolute inset-0 overflow-hidden rounded-xl backface-hidden">
                                            <Image
                                                src="/images/pokemon11.png"
                                                alt="pokemon front"
                                                width={220}
                                                height={320}
                                                className="h-full w-full object-contain"
                                            />
                                        </div>

                                        {/* BACK */}
                                        <div className="absolute inset-0 rotate-y-180 overflow-hidden rounded-xl backface-hidden">
                                            <Image
                                                src="/images/orange back 2.png"
                                                alt="pokemon back"
                                                width={220}
                                                height={320}
                                                className="h-full w-full object-contain"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT TEXT */}
                    <div
                        className="order-[-1] lg:order-none flex flex-col justify-start lg:justify-center -mt-3 md:mt-0  lg:px-0"
                        data-aos="zoom-out-down"
                        data-aos-duration="1500"
                    >
                        <div className="max-w-lg">
                            <p className="text-2xl font-bold md:font-medium sm:text-3xl lg:text-[40px] text-center md:text-start ">
                                {t.products.starter.name}
                            </p>

                            <div className="mt-4 flex flex-col gap-6 text-[#393939] ">
                                <p className="text-base lg:text-lg text-center md:text-start">
                                    {t.products.starter.description}
                                </p>

                                <ul className="ml-5 list-disc space-y-2 text-sm lg:text-base">
                                    {t.products.starter.features.map((feature: string, idx: number) => (
                                        <li key={idx} className="text-[#171B1C]">
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="hidden md:block">
                                <Link
                                    href="/#contact"
                                    className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-black px-6 py-3 text-center text-white transition-all hover:scale-[1.02] sm:w-[230px] "
                                >
                                    {t.products.requestQuote}
                                    <MdKeyboardArrowRight className="text-xl" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="block md:hidden">
                        <Link
                            href="/#contact"
                            className=" flex w-full items-center justify-center gap-2 rounded-2xl bg-black px-6 py-3 text-center text-white transition-all hover:scale-[1.02] sm:w-[230px]"
                        >
                            {t.products.requestQuote}
                            <MdKeyboardArrowRight className="text-xl" />
                        </Link>
                    </div>
                </div>
            </div>


        </div >
    );
}