"use client"
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";
import CorrectIcon from "@/components/icon/CorrectIcon";
import { BsStars } from "react-icons/bs";
import { useTranslation } from "@/components/hooks/useTranslation";

export default function Evaluation() {

    const { t } = useTranslation();
    const [isFlipped, setIsFlipped] = useState(false);
    return (
        <div className="containers pb-4 md:pb-4 overflow-hidden ">

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
                            className="absolute top-0 z-0 h-[400px] w-full rounded-2xl object-cover sm:h-[470px] md:h-[500px]"
                        />

                        {/* CARD */}
                        <div className="relative px-2 sm:px-4 md:px-6">
                            <div className="relative z-10 mt-2 md:mt-6 flex min-h-[400px] w-full items-center justify-start rounded-2xl bg-white px-4 py-8 shadow-lg sm:min-h-[470px] sm:px-6 md:min-h-[500px] md:px-8">

                                {/* TEXT */}
                                <div>
                                    <div className="max-w-[58%] sm:max-w-[55%] mt-9.5">
                                        <h2 className="flex items-center gap-2 text-lg font-semibold sm:text-2xl md:text-3xl">
                                            <span className="h-2 w-2 rounded-full bg-[#D5EB2A]"></span>
                                            <p className=" text-[#101828] ">{t.products.evolution.insidePacks.title}</p>
                                        </h2>

                                        <ul className="mt-4 space-y-3 text-sm text-[#4A5565] sm:text-base">
                                            {/* <li className="flex gap-2">
                                                <CorrectIcon className="mt-1 text-green-500" />
                                                14 Common / Uncommon Cards
                                            </li>

                                            <li className="flex gap-2 font-medium ">
                                                <CorrectIcon className="mt-1 text-green-500" />
                                                4 Foil Cards
                                            </li>

                                            <li className="flex gap-2 font-medium text-[#FF6900] ">
                                                <CorrectIcon className="mt-1 text-green-500" />
                                                2 Bonus Cards
                                            </li>

                                            <li className="flex gap-2">
                                                <CorrectIcon className="mt-1 text-green-500" />

                                                <span>
                                                    Bonus Card may include: <br />
                                                    Foil / V / EX / GX / Special Rare

                                                </span>
                                            </li>

                                            <li className="hidden md:block">
                                                <p className="flex gap-2">           <BsStars className="h-6 w-9" /> A chance to discover premium Special Rare cards, including select Full Art and high-rarity Pokémon cards.</p>
                                            </li> */}

                                            {t.products?.evolution?.insidePacks?.items?.map((item: string, index: number) => (
                                                <li key={index} className={`flex gap-2 ${index === 2 ? "font-medium text-[#FF6900]" : ""
                                                    }`}>
                                                    <CorrectIcon className="mt-1 shrink-0 text-green-500" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}


                                            <li className="hidden md:block w-full mt-1">
                                                <p className="flex gap-2">
                                                    <BsStars className="h-6 w-9" />
                                                    {t.products?.evolution?.insidePacks?.specialNote}
                                                </p>
                                            </li>
                                        </ul>


                                    </div>

                                    <div className="mt-6">
                                        <p className="flex gap-2 block md:hidden text-sm text-[#4A5565] sm:text-base ">
                                            <BsStars className="h-6 w-9" />
                                            {t.products?.evolution?.insidePacks?.specialNote}
                                        </p>
                                    </div>
                                </div>



                                {/* IMAGE */}
                                <div
                                    onClick={() => setIsFlipped(!isFlipped)}
                                    className="group perspective absolute top-1/3 md:top-1/2 mt-12 md:mt-3 right-[2px] sm:right-[25px] md:right-[20px] lg:right-[-50px] xl:right-[10px] 2xl:right-[14px] flex -translate-y-1/2 cursor-pointer items-center justify-center rounded-xl "
                                >
                                    <div
                                        className={`relative h-[220px] w-[150px] sm:h-[280px] sm:w-[190px] md:h-[320px] md:w-[220px] transition-transform duration-700 transform-style-preserve-3d rounded-xl ${isFlipped ? "rotate-y-180" : "group-hover:rotate-y-180"
                                            }`}
                                    >

                                        {/* FRONT */}
                                        <div className="absolute inset-0 overflow-hidden rounded-xl backface-hidden">
                                            <Image
                                                src="/images/pokemon13.png"
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
                                                height={220}
                                                className="h-full full object-contain"
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


                        <div className="max-w-lg">
                            <p className="text-2xl font-bold md:font-medium sm:text-3xl lg:text-[40px] text-center md:text-start ">
                                {t.products.evolution.name}
                            </p>

                            <div className="mt-4 flex flex-col gap-6 text-[#393939] ">
                                <p className="text-base lg:text-lg text-center md:text-start">
                                    {t.products.evolution.description}
                                </p>

                                <ul className="ml-5 list-disc space-y-2 text-sm lg:text-base">
                                    {t.products.evolution.features.map((feature: string, idx: number) => (
                                        <li key={idx} className="text-[#171B1C]">
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

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



                    </div>


                </div>

                <div className="block md:hidden">
                    <Link
                        href="/#contact"
                        className="mt-8 flex w-full items-center justify-center gap-2 rounded-2xl bg-black px-6 py-3 text-center text-white transition-all hover:scale-[1.02] sm:w-[230px] "
                    >
                        {t.products.requestQuote}
                        <MdKeyboardArrowRight className="text-xl" />
                    </Link>
                </div>
            </div>


        </div>

    );
}