import Image from 'next/image'
import React from 'react'
import { MdArrowOutward } from 'react-icons/md'

export default function OurMission() {
    return (
        <div>

            <div className='grid grid-cols-1 md:grid-cols-2  container py-10 lg:py-20 gap-[52px] '>
                <div className=' order-2 md:order-2 '>
                    <Image src="/images/ourmission.jpg" alt='image' height={501} width={545} className='z-10 h-[501px] w-full rounded-xl' />

                </div>
                <div className='order-1 md:order-2'>
                    <div>
                        <div className=' '>
                            <p className='text-[#000] text-3xl md:text-4xl lg:text-[48px] font-normal leading-120% font-secondary items-center flex justify-center  md:text-start md:justify-start mb-6'>Our Mission</p>

                        </div>


                        <div className='flex flex-col gap-3 lg:gap-8 text-[#393939]'>
                            <p className='  text-[16px] font-normal leading-[120%] tracking-[-0.3px]'>To bridge the gap between limited supply and growing demand — ensunng the most
                                valuable and exciting products reach the people who truly want them.</p>

                            <p className=' text-base font-medium leading-170% text-[#393939]'>Market Insight Section:</p>
                            <p className=' font-[Inter] text-[16px] font-normal leading-[170%] tracking-[-0.3px]'>The global TCG market is rapidly expanding driven by a new generation of
                                collectors who value rarity, identity, and long-term value.</p>

                            <div className='  text-[16px] font-normal leading-[170%] tracking-[-0.3px] ml-4'>
                                <li>Rare collectibles are replacing traditional savings</li>
                                <li>Inflation reduces cash collectibles gain attention
                                </li>
                                <li>Pokémon dominates over 50% of the market
                                </li>
                                <li>94% of affluent young collectors invest in premium collectibles</li>
                                <p className='mt-2'>Cash loses value. Rare cards gain attention.</p>

                            </div>

                        </div>

                        <div className=''>

                            <button className='bg-[#000000] flex items-center gap-2 py-2 px-4 rounded-2xl text-white mt-6 cursor-pointer md:w-[230px] w-full text-center lg:text-start justify-center '>
                                Show More</button>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}
