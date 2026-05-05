import Image from 'next/image'
import React from 'react'
import { MdArrowOutward, MdKeyboardArrowRight } from 'react-icons/md'
import UltraPack from './UltraPack'

export default function Evaluation() {
    return (
        <div className="py container py-8">


            {/* GRID */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[52px]">



                {/* RIGHT TEXT */}
                <div className="flex px-4 lg:px-0 order-2 lg:order-1 " data-aos="zoom-out-up" data-aos-duration="2000">
                    <div className="max-w-md">

                        <p className="text-2xl sm:text-3xl lg:text-[40px] font-medium">
                            Evolution Pack
                        </p>

                        <div className="flex flex-col gap-6 text-[#393939] mt-4">

                            <p className="text-base lg:text-lg">
                                Balanced mystery pack for collectors and resellers looking for better pull rates
                                and higher perceived value,
                            </p>

                            <ul className="text-sm lg:text-base space-y-2 list-disc ml-5">
                                <li>Ideal for repeat buyers
                                </li>
                                <li>Strong shelf appeal
                                </li>
                                <li>Increased chance for rare pulls
                                </li>
                                <li>Optimized for retail and e-commercet</li>

                            </ul>
                        </div>

                        <a href="/#contact" className="bg-black flex items-center gap-2 py-2 px-6 rounded-2xl text-white mt-6 cursor-pointer md:w-[230px] w-full text-center lg:text-start justify-center">
                            Request a Quote
                            <MdKeyboardArrowRight className="text-xl" />
                        </a>

                    </div>
                </div>
                {/* LEFT CARD */}
                <div className="relative order-1 lg:order-2" data-aos="zoom-out-down" data-aos-duration="2000">

                    {/* BG */}
                    <Image
                        src="/images/overlay2.png"
                        alt="bg"
                        width={545}
                        height={301}
                        className="absolute top-0 z-0 w-[600px] h-[490px] rounded-lg"
                    />

                    {/* CARD */}
                    <div className='relative ml-10'>
                        <div className="relative z-10 bg-white rounded-2xl mt-6 h-[500px] w-[90%] max-w-[500px] sm:max-w-[510px]  py-10 px-6 shadow-lg flex justify-start items-center">

                            {/* TEXT */}
                            <div className="max-w-[70%] ">
                                <h2 className="text-xl md:text-3xl font-semibold flex items-center gap-2">
                                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                                    Inside packs
                                </h2>

                                <ul className="mt-4 space-y-2 text-[#4A5565] text-base">
                                    <li>14 Common / Uncommon</li>
                                    <li>4 Foil cards</li>
                                    <li>2 Bonus Cards</li>
                                    <li className="mt-3">
                                        Bonus Cards can include: <br />
                                        V / EX / GX / Special Rare
                                    </li>
                                </ul>
                            </div>

                            {/* IMAGE (ALWAYS SAME POSITION) */}
                            <div className="group perspective absolute right-[-38px] sm:right-[-70px] md:right-[-100px] lg:right-[-62px] xl:right-[-100px] top-1/2 -translate-y-1/2 z-20 flex justify-center items-center rounded-xl">
                                <div className="relative w-[140px] sm:w-[250px] md:w-[200px] h-[320px] transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180 rounded-xl">
                                    {/* FRONT */}
                                    <div className="absolute inset-0 backface-hidden rounded-xl overflow-hidden ">
                                        <Image
                                            src="/images/Card20.png"
                                            alt="pokemon front"
                                            width={220}
                                            height={320}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    {/* BACK */}
                                    <div className="absolute inset-0 rotate-y-180 backface-hidden rounded-xl overflow-hidden ">
                                        <Image
                                            src="/images/hoverCard.png"
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

            </div>


        </div>
    )
}
