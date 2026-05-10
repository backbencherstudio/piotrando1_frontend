import Image from 'next/image'
import React from 'react'
import { MdArrowOutward, MdKeyboardArrowRight } from 'react-icons/md'
import Evaluation from './EvoluationPack'
import UltraPack from './UltraPack'
import Link from 'next/link'

export default function OurProduct() {
    return (
        <div className="py-10 lg:py-20 container">

            {/* HEADER */}
            <div className="flex flex-col justify-center items-center pb-10 lg:pb-16 text-center px-4" data-aos="zoom-out-down" data-aos-duration="1500" >

                <div className="flex items-center gap-2 border bg-white rounded-full px-4 py-2">
                    <Image src="/images/aboutusLogo.png" alt="icon" width={20} height={20} />
                    <p className="text-sm lg:text-base font-medium">Our Products</p>
                </div>

                <h2 className="text-[clamp(2rem,3vw,5rem)] font-secondary mt-4">
                    OUR MYSTERY REPACKS
                </h2>

                <p className="text-[#393939] text-sm lg:text-base max-w-xl mt-3">
                    Three tiers designed for every type of collector and retailer. Each pack
                    contains 100% authentic pokemon TCG cards.
                </p>
            </div>

            {/* GRID */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[52px]">

                {/* LEFT CARD */}
                <div className="relative" data-aos="zoom-out-up">

                    {/* BG */}
                    <Image
                        src="/images/overlay1.png"
                        alt="bg"
                        width={545}
                        height={301}
                        className="absolute top-0 z-0 w-[600px] h-[490px] rounded-lg"
                    />

                    {/* CARD */}
                    <div className='relative ml-10' data-aos-duration="2000">
                        <div className="relative z-10 bg-white rounded-2xl mt-6 h-[500px] w-[90%] max-w-[500px] sm:max-w-[510px]  py-10 px-6 shadow-lg flex justify-start items-center">

                            {/* TEXT */}
                            <div className="max-w-[70%]">
                                <h2 className="text-xl md:text-3xl font-semibold flex items-center gap-2">
                                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                                    Inside packs
                                </h2>

                                <ul className="mt-4 space-y-2 text-[#4A5565] text-base">
                                    <li>✔ 7 Common / Uncommon</li>
                                    <li>✔ 2 Foil Cards</li>
                                    <li>✔ 1 Bonus Card</li>
                                    <li className="mt-3">
                                        Bonus Card can be: <br />
                                        Foil V / EX / GX / Special Rare
                                    </li>
                                </ul>
                            </div>

                            {/* IMAGE (ALWAYS SAME POSITION) */}
                            <div className="group perspective absolute right-[-40px] sm:right-[-100px] md:right-[-114px] top-1/2 -translate-y-1/2  flex justify-center items-center  rounded-xl ">
                                <div className="relative w-[180px] sm:w-[250px] md:w-[200px] h-[320px] transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180 rounded-xl">
                                    {/* FRONT */}
                                    <div className="absolute inset-0 backface-hidden rounded-xl overflow-hidden ">
                                        <Image
                                            src="/images/card110.png"
                                            alt="pokemon front"
                                            width={220}
                                            height={320}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    {/* BACK */}
                                    <div className="absolute inset-0 rotate-y-180 backface-hidden rounded-xl  overflow-hidden ">
                                        <Image
                                            src="/images/orange back.png"
                                            alt="pokemon back"
                                            width={220}
                                            height={320}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* RIGHT TEXT */}
                <div className="flex  justify-start items-center lg:justify-center px-4 lg:px-0" data-aos="zoom-out-down" data-aos-duration="2000">
                    <div className="max-w-md">

                        <p className="text-2xl sm:text-3xl lg:text-[40px] font-medium">
                            Starter Pack
                        </p>

                        <div className="flex flex-col gap-6 text-[#393939] mt-4">

                            <p className="text-base lg:text-lg">
                                Perfect entry-level mystery pack designed for impulse purchases,
                                retail shelves, and new collectors.
                            </p>

                            <ul className="text-sm lg:text-base space-y-2 list-disc ml-5">
                                <li>High-turnover product</li>
                                <li>Retail-ready format</li>
                                <li>Strong margins</li>
                                <li>Accessible price point</li>
                                <li>Perfect for gifts</li>
                            </ul>
                        </div>

                        <Link href="/#contact" className="bg-black flex items-center gap-2 py-2 px-6 rounded-2xl text-white mt-6 cursor-pointer md:w-[230px] w-full text-center lg:text-start justify-center">
                            Request a Quote
                            <MdKeyboardArrowRight className="text-xl" />
                        </Link>

                    </div>
                </div>

            </div>

            <div>
                <Evaluation />
                <UltraPack />
            </div>
        </div >
    )
}
