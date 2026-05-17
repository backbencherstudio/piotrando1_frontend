"use client"
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";
import CorrectIcon from "@/components/icon/CorrectIcon";

export default function Evaluation() {
    const [isFlipped, setIsFlipped] = useState(false);
    return (
        <div className="containers pb-4 overflow-hidden ">

            {/* GRID */}
            <div className="">
                <div className="grid w-full grid-cols-1 items-center gap-8 md:gap-14 lg:grid-cols-2 lg:gap-[100px]">

                    {/* RIGHT IMAGE (swapped) */}
                    <div className="relative order-2 w-full" data-aos="zoom-out-down">

                        {/* BG */}
                        <Image
                            src="/images/overlay2.png"
                            alt="bg"
                            width={545}
                            height={301}
                            className="absolute top-0 z-0 h-[430px] w-full rounded-2xl object-cover sm:h-[470px] md:h-[500px]"
                        />

                        {/* CARD */}
                        <div className="relative px-2 sm:px-4 md:px-6">
                            <div className="relative z-10 mt-2 md:mt-6 flex min-h-[430px] w-full items-center justify-start rounded-2xl bg-white px-4 py-8 shadow-lg sm:min-h-[470px] sm:px-6 md:min-h-[500px] md:px-8">

                                {/* TEXT */}
                                <div className="max-w-[58%] sm:max-w-[55%]">
                                    <h2 className="flex items-center gap-2 text-lg font-semibold sm:text-2xl md:text-3xl">
                                        <span className="h-2 w-2 rounded-full bg-[#D5EB2A]"></span>
                                        Inside packs
                                    </h2>

                                    <ul className="mt-4 space-y-3 text-sm text-[#4A5565] sm:text-base">
                                        <li className="flex gap-2">
                                            <CorrectIcon className="mt-1 text-green-500" />
                                            14 Common / Uncommon
                                        </li>

                                        <li className="flex gap-2">
                                            <CorrectIcon className="mt-1 text-green-500" />
                                            4 Foil cards
                                        </li>

                                        <li className="flex gap-2">
                                            <CorrectIcon className="mt-1 text-green-500" />
                                            2 Bonus Cards
                                        </li>

                                        <li className="flex gap-2">
                                            <CorrectIcon className="mt-1 text-green-500" />
                                            <span>
                                                Bonus Cards can include: <br />
                                                V / EX / GX / Special Rare
                                            </span>
                                        </li>
                                    </ul>
                                </div>

                                {/* IMAGE */}
                                <div
                                    onClick={() => setIsFlipped(!isFlipped)}
                                    className="group perspective absolute top-1/2 right-[0px] sm:right-[25px] md:right-[20px] lg:right-[-50px] xl:right-[20px] flex -translate-y-1/2 cursor-pointer items-center justify-center rounded-xl"
                                >
                                    <div
                                        className={`relative h-[220px] w-[150px] sm:h-[280px] sm:w-[190px] md:h-[320px] md:w-[220px] transition-transform duration-700 transform-style-preserve-3d rounded-xl ${isFlipped ? "rotate-y-180" : "group-hover:rotate-y-180"
                                            }`}
                                    >

                                        {/* FRONT */}
                                        <div className="absolute inset-0 overflow-hidden rounded-xl backface-hidden">
                                            <Image
                                                src="/images/card120.png"
                                                alt="front"
                                                width={220}
                                                height={320}
                                                className="h-full w-full object-cover"
                                            />
                                        </div>

                                        {/* BACK */}
                                        <div className="absolute inset-0 rotate-y-180 overflow-hidden rounded-xl backface-hidden">
                                            <Image
                                                src="/images/green back.png"
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

                    {/* LEFT TEXT (swapped) */}
                    <div className="flex flex-col justify-start lg:justify-center  lg:px-0  order-1 lg:order-1"
                        data-aos="zoom-out-up"
                    >
                        <div className="w-full max-w-[540px]">

                            <p className="text-2xl font-medium sm:text-3xl lg:text-[40px]">
                                Evolution Pack
                            </p>

                            <div className="mt-4 flex flex-col gap-6 text-[#393939]">

                                <p className="text-base lg:text-lg">
                                    Balanced mystery pack for collectors and resellers looking for better pull rates
                                    and higher perceived value,
                                </p>

                                <ul className="ml-5 list-disc space-y-2 text-sm lg:text-base">
                                    <li>Ideal for repeat buyers</li>
                                    <li>Strong shelf appeal</li>
                                    <li>Increased chance for rare pulls</li>
                                    <li>Optimized for retail and e-commerce</li>
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
        </div>
    );
}