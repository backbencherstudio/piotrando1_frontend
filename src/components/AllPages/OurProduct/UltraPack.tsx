
import Image from 'next/image'
import React from 'react'
import { MdArrowOutward, MdKeyboardArrowRight } from 'react-icons/md'

import Link from 'next/link'

export default function UltraPack() {
    return (
        <div className="py-8 container">



            {/* GRID */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[70px] xl:gap-[52px]">

                {/* LEFT CARD */}
                <div className="relative" data-aos="zoom-out-down" data-aos-duration="2000">

                    {/* BG */}
                    <Image
                        src="/images/overlay1.png"
                        alt="bg"
                        width={545}
                        height={301}
                        className="absolute top-0 z-0 w-[600px] h-[490px] rounded-lg"
                    />

                    {/* CARD */}
                    <div className='relative ml-10'>
                        <div className="relative z-10 bg-white rounded-2xl mt-6 h-[500px] w-[90%] max-w-[500px] sm:max-w-[510px]  py-10 px-6 shadow-lg flex justify-start items-center">

                            {/* TEXT */}
                            <div className="max-w-[70%]">
                                <h2 className="text-xl md:text-3xl font-semibold flex items-center gap-2">
                                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                                    Inside packs
                                </h2>

                                <ul className="mt-4 space-y-2 text-[#4A5565] text-base">
                                    <li>25 Common / Uncommon</li>
                                    <li>6 Foil cards</li>
                                    <li>4 Bonus Cards</li>
                                    <li>Guaranteed holo cards inside</li>

                                    <li className="mt-3">
                                        Highest chance of premium <br />
                                        pulls (V / EX / GX I Special Rare)
                                    </li>
                                </ul>
                            </div>

                            {/* IMAGE (ALWAYS SAME POSITION) */}
                            <div className="group perspective absolute right-[-38px] sm:right-[-70px] md:right-[-100px] top-1/2 -translate-y-1/2 z-20 flex justify-center items-center rounded-xl">
                                <div className="relative w-[140px] sm:w-[250px] md:w-[200px] h-[320px] transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180 rounded-xl">
                                    {/* FRONT */}
                                    <div className="absolute inset-0 backface-hidden rounded-xl overflow-hidden ">
                                        <Image
                                            src="/images/card135.png"
                                            alt="pokemon front"
                                            width={220}
                                            height={320}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    {/* BACK */}
                                    <div className="absolute inset-0 rotate-y-180 backface-hidden rounded-xl overflow-hidden mt-9">
                                        <Image
                                            src="/images/hoverCard.png"
                                            alt="pokemon back"
                                            width={220}
                                            height={220}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* RIGHT TEXT */}
                <div className="flex  justify-start items-center lg:justify-center px-4 lg:px-0" data-aos="zoom-out-up" data-aos-duration="2000">
                    <div className="max-w-md">

                        <p className="text-2xl sm:text-3xl lg:text-[40px] font-medium">
                            Ultra Pack
                        </p>

                        <div className="flex flex-col gap-6 text-[#393939] mt-4">

                            <p className="text-base lg:text-lg">
                                High-value mystery pack designed for enthusiasts and premium retail
                                positioning.
                            </p>

                            <ul className="text-sm lg:text-base space-y-2 list-disc ml-5">
                                <li>Collector-focused product
                                </li>
                                <li>Premium unboxing experience</li>
                                <li>Strong margins</li>
                                <li> Best perceived value
                                </li>
                                <li>Designed for top-tier resale</li>
                            </ul>
                        </div>

                        <Link href="/#contact" className="bg-black flex items-center gap-2 py-2 px-6 rounded-2xl text-white mt-6 cursor-pointer md:w-[230px] w-full text-center lg:text-start justify-center">
                            Request a Quote
                            <MdKeyboardArrowRight className="text-xl" />
                        </Link>

                    </div>
                </div>

            </div>

        </div>
    )
}
