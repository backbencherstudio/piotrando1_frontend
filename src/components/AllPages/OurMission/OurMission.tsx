import CurrectGreenIcon from '@/components/icon/CurrectgreenIcon'
import OurmisionIcon from '@/components/icon/OurmisionCurrect'
import Image from 'next/image'
import React from 'react'
import { MdArrowOutward } from 'react-icons/md'

export default function OurMission() {
    return (
        <div>

            <div className='grid grid-cols-1 md:grid-cols-2  containers md:py-10 lg:py-20 gap-8 md:gap-10 lg:gap-[52px] '>
                <div className=' order-2 md:order-2  rounded-xl ' data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine" >
                    <div className="relative w-full h-[300px] sm:h-[320px] md:h-[450px] lg:h-[500px] rounded-xl overflow-hidden">
                        <Image
                            src="/images/ourmission2.png"
                            alt="image"
                            fill
                            className="object-center "
                        />
                    </div>

                </div>
                <div className="order-1 md:order-2 flex flex-col " data-aos="fade-left"
                    data-aos-offset="300"  >
                    <div>
                        <div className='flex justify-center items-center text-center mx-auto  '>

                            <div className='w-full whitespace-normal text-center md:text-start'>

                                <div>
                                    <p className=' text-black text-[clamp(2rem,3vw,3rem)] font-normal leading-[120%] font-secondary mb-2 md:mb-6 md:leading-6 lg:leading-9'>
                                        Our Mission
                                    </p>
                                </div>

                                <div className='flex flex-col gap-3 lg:gap-8 text-[#393939]'>

                                    <p className='text-[16px] font-normal leading-[170%] tracking-[-0.3px] text-justify'>
                                        To bridge the gap between limited supply and growing demand, ensuring the most valuable and exciting products reach the people who truly appreciate them.
                                    </p>

                                    <p className='text-base font-medium leading-[170%] text-[#393939] text-start'>
                                        The Future of Collectibles
                                    </p>

                                    <p className='text-[16px] font-normal leading-[170%] tracking-[-0.3px] text-justify'>
                                        The global TCG market is expanding rapidly, driven by a new generation of collectors who value rarity, identity, and long-term value.
                                    </p>

                                </div>

                            </div>

                        </div>
                        <div className=' text-[#393939] text-[16px] font-normal leading-[170%] tracking-[-0.3px]  mt-6 space-y-1.5 flex flex-col'>
                            <p className='flex gap-3'><span className='mt-2'><OurmisionIcon className='' /></span>Rare collectibles are increasingly viewed as alternative assets</p>
                            <p className='flex gap-3'><span className='mt-2'><OurmisionIcon className='' /></span>Inflation reduces cash purchasing power, collectibles gain attention
                            </p>
                            <p className='flex gap-3'><span className='mt-2'><OurmisionIcon className='' /></span>Pokémon represents over 50% of the global TCG market
                            </p>
                            <p className='flex gap-3'><span className='mt-2'><OurmisionIcon className='' /></span> 94% of affluent young collectors invest in premium collectibles</p>
                            <p className='mt-2'> Cash loses value. Rare collectibles gain attention.</p>

                        </div>

                        {/* <div className=''>

                            <button className='bg-[#000000] flex items-center gap-2 py-2 px-4 rounded-2xl text-white mt-6 cursor-pointer md:w-[230px] w-full text-center lg:text-start justify-center '>
                                Show More</button>
                        </div> */}
                    </div>
                </div>


            </div>
        </div>
    )
}
