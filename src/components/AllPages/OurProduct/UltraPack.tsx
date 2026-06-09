"use client"
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";
import CorrectIcon from "@/components/icon/CorrectIcon";
import { BsStars } from "react-icons/bs";
import { useTranslation } from "@/components/hooks/useTranslation";

export default function UltraPack() {
    const { t } = useTranslation();
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div className="containers mt-3 md:mt-4  lg:pb-20 pb-8 md:pb-10 overflow-hidden">
            {/* GRID */}
            <div className="grid grid-cols-1 gap-9 md:gap-14 lg:grid-cols-2 lg:gap-[35px] xl:gap-25  items-center">

                {/* LEFT CARD */}
                <div className="relative mx-auto w-full max-w-full" data-aos="zoom-in" data-aos-duration="1500">


                    {/* BG */}
                    <Image
                        src="/images/pink.png"
                        alt="bg"
                        width={545}
                        height={301}
                        className="absolute top-0 z-0 h-[400px] w-full rounded-2xl object-cover sm:h-[470px] md:h-[500px]"
                    />

                    {/* CARD */}
                    <div className="relative px-2 sm:px-4 md:px-6 ">
                        <div className="relative z-10 mt-2 md:mt-6 flex min-h-[400px] w-full items-center justify-start rounded-2xl bg-white px-4 py-8 shadow-lg sm:min-h-[470px] sm:px-6 md:min-h-[500px] md:px-8 lg:px-4 xl:px-8">

                            {/* TEXT */}
                            <div>
                                <div className="max-w-[58%] sm:max-w-[56%]">
                                    <h2 className="flex items-center md:-mt-4 mt-0 gap-2 text-lg font-semibold sm:text-2xl md:text-3xl">
                                        <span className="h-2 w-2 rounded-full bg-[#FF5286]"></span>
                                        {t.products?.ultra?.insidePacks?.title}
                                    </h2>

                                    <ul className="md:mt-5 space-y-3 mt-5 text-sm text-[#4A5565] sm:text-base">
                                        {t.products?.ultra?.insidePacks?.items?.map((item: string, index: number) => (
                                            <li key={index} className={`flex gap-2 ${index === 2 ? "font-medium text-[#FF6900]" : ""
                                                }`}>
                                                <CorrectIcon className="mt-1 shrink-0 text-green-500" />
                                                <span>{item}</span>
                                            </li>
                                        ))}


                                        <li className="hidden md:block w-full mt-1">
                                            <p className="flex gap-2">
                                                <BsStars className="h-6 w-9" />
                                                {t.products?.ultra?.insidePacks?.specialNote}
                                            </p>
                                        </li>
                                    </ul>
                                </div>

                                <li className=" block md:hidden">
                                    <p className="flex gap-2 text-sm text-[#4A5565] min-[467px]:w-[250px]  sm:text-base">
                                        <BsStars className="h-6 w-9" />
                                        {t.products?.ultra?.insidePacks?.specialNote}
                                    </p>
                                </li>
                            </div>

                            {/* IMAGE */}
                            <div
                                onClick={() => setIsFlipped(!isFlipped)}
                                className="group perspective absolute top-1/3 md:top-1/2 mt-8 md:-mt-3.5 right-[2px] sm:right-[30px] md:right-[20px] lg:right-[-45px] xl:right-[10px] 2xl:right-[15px] flex -translate-y-1/2 cursor-pointer items-center justify-center rounded-xl "
                            >
                                <div
                                    className={`relative 2xl:mt-6 h-[220px] w-[150px] sm:h-[280px] sm:w-[190px] md:h-[320px] md:w-[220px] transition-transform duration-700 transform-style-preserve-3d rounded-xl ${isFlipped ? "rotate-y-180" : "group-hover:rotate-y-180"
                                        }`}
                                >

                                    {/* FRONT */}
                                    <div className="absolute inset-0 overflow-hidden rounded-xl backface-hidden">
                                        <Image
                                            src="/images/pokemon121.png"
                                            alt="front"
                                            width={220}
                                            height={320}
                                            className="h-full w-full object-contain"
                                        />
                                    </div>

                                    {/* BACK */}
                                    <div className="absolute inset-0 rotate-y-180 overflow-hidden rounded-xl backface-hidden">
                                        <Image
                                            src="/images/orange back 2.png"
                                            alt="back"
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
                <div className="order-[-1] lg:order-none flex flex-col justify-start lg:justify-center  lg:px-0"
                    data-aos="zoom-out-up"
                >


                    <div className="max-w-lg">
                        <p className="text-2xl font-bold md:font-medium sm:text-3xl lg:text-[40px] text-center md:text-start ">
                            {t.products.ultra.name}
                        </p>

                        <div className="mt-4 md:mt-0 flex flex-col gap-6 text-[#393939] ">
                            <p className="text-base lg:text-lg text-center md:text-start">
                                {t.products.ultra.description}
                            </p>

                            <ul className="ml-5 list-disc space-y-2 text-sm lg:text-base">
                                {t.products.ultra.features.map((feature: string, idx: number) => (
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

                <div className="block md:hidden md:-mt-1 -mt-3">
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
    );
}