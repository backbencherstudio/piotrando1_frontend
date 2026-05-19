"use client"
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";
import CorrectIcon from "@/components/icon/CorrectIcon";
import { BsStars } from "react-icons/bs";

export default function UltraPack() {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div className="containers mt-6 md:mt-8  lg:pb-20 pb-8 md:pb-10 overflow-hidden">
            {/* GRID */}
            <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-[100px] items-center">

                {/* LEFT CARD */}
                <div className="relative mx-auto w-full max-w-full" data-aos="zoom-out-down">

                    {/* BG */}
                    <Image
                        src="/images/pink.png"
                        alt="bg"
                        width={545}
                        height={301}
                        className="absolute top-0 z-0 h-[430px] w-full rounded-2xl object-cover sm:h-[470px] md:h-[500px]"
                    />

                    {/* CARD */}
                    <div className="relative px-2 sm:px-4 md:px-6">
                        <div className="relative z-10 mt-2 md:mt-6 flex min-h-[430px] w-full items-center justify-start rounded-2xl bg-white px-4 py-8 shadow-lg sm:min-h-[470px] sm:px-6 md:min-h-[500px] md:px-8">

                            {/* TEXT */}
                            <div>
                                <div className="max-w-[58%] sm:max-w-[55%]">
                                    <h2 className="flex items-center gap-2 text-lg font-semibold sm:text-2xl md:text-3xl">
                                        <span className="h-2 w-2 rounded-full bg-[#FF5286]"></span>
                                        Inside packs
                                    </h2>

                                    <ul className="mt-4 space-y-3 text-sm text-[#4A5565] sm:text-base">
                                        <li className="flex gap-2">
                                            <CorrectIcon className="mt-1 text-green-500" />
                                            25 Common / Uncommon Cards
                                        </li>

                                        <li className="flex gap-2">
                                            <CorrectIcon className="mt-1 text-green-500" />
                                            6 Foil cards
                                        </li>

                                        <li className="flex gap-2">
                                            <CorrectIcon className="mt-1 text-green-500" />
                                            4 Bonus Cards
                                        </li>



                                        <li className="flex gap-2">
                                            <CorrectIcon className="mt-1 text-green-500" />
                                            <span>
                                                Bonus Cards may include: <br />
                                                Foil / V / EX / GX / Special Rare

                                            </span>
                                        </li>
                                        <li className="hidden md:block">
                                            <p className="flex gap-2">
                                                <BsStars className="h-6 w-9" /> Our highest-tier experience with the strongest chance of premium Full Art and high-rarity Pokémon card pulls.
                                            </p>
                                        </li>
                                    </ul>
                                </div>

                                <li className=" block md:hidden">
                                    <p className="flex gap-2 flex gap-2 text-sm text-[#4A5565] sm:text-base mt-6">
                                        <BsStars className="h-6 w-9 flex gap-2 text-sm text-[#4A5565] sm:text-base" /> Our highest-tier experience with the strongest chance of premium Full Art and high-rarity Pokémon card pulls
                                    </p>
                                </li>
                            </div>

                            {/* IMAGE */}
                            <div
                                onClick={() => setIsFlipped(!isFlipped)}
                                className="group perspective absolute md:top-1/2 top-1/3 md:mt-0 mt-6 right-[0px] sm:right-[30px] md:right-[20px] lg:right-[-50px] xl:right-[10px] 2xl:right-[10px] flex -translate-y-1/2 cursor-pointer items-center justify-center rounded-xl"
                            >
                                <div
                                    className={`relative h-[220px] w-[150px] sm:h-[280px] sm:w-[190px] md:h-[320px] md:w-[220px] transition-transform duration-700 transform-style-preserve-3d rounded-xl ${isFlipped ? "rotate-y-180" : "group-hover:rotate-y-180"
                                        }`}
                                >

                                    {/* FRONT */}
                                    <div className="absolute inset-0 overflow-hidden rounded-xl backface-hidden">
                                        <Image
                                            src="/images/card135.png"
                                            alt="front"
                                            width={220}
                                            height={320}
                                            className="h-full w-full object-cover"
                                        />
                                    </div>

                                    {/* BACK */}
                                    <div className="absolute inset-0 rotate-y-180 overflow-hidden rounded-xl backface-hidden">
                                        <Image
                                            src="/images/pink back.png"
                                            alt="back"
                                            width={220}
                                            height={320}
                                            className="h-[315px] w-[212px] object-contain"
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
                    <div className="max-w-md">

                        <p className="text-2xl font-medium sm:text-3xl lg:text-[40px] text-center md:text-start">
                            Ultra Pack
                        </p>

                        <div className="mt-4 flex flex-col gap-6 text-[#393939]">

                            <p className="text-base lg:text-lg text-center md:text-start">
                                High-value mystery pack designed for enthusiasts and premium retail
                                positioning.
                            </p>

                            <ul className="ml-5 list-disc space-y-2 text-sm lg:text-base">
                                <li>Collector-focused product</li>
                                <li>Premium unboxing experience</li>
                                <li>Strong margins</li>
                                <li>Best perceived value</li>
                                <li>Designed for top-tier resale</li>
                            </ul>

                        </div>

                        <Link
                            href="/#contact"
                            className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-black px-6 py-3 text-white transition hover:scale-[1.02] sm:w-[230px]"
                        >
                            Request a Quote
                            <MdKeyboardArrowRight className="text-xl" />
                        </Link>

                    </div>
                </div>

            </div>
        </div>
    );
}