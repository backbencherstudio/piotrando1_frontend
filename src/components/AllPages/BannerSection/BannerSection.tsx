import Image from 'next/image'
import React from 'react'
import { MdArrowOutward } from 'react-icons/md'

export default function BannerSection() {
    return (
        <div
            style={{ backgroundImage: "url('/images/bannerBg.png')" }}
            className="bg-cover bg-center lg:h-screen h-full flex justify-center  items-center py-30 md:py-30 lg:py-70">

            <div className='grid grid-cols-1 md:grid-cols-2 text-white container  gap-8 '>
                <div>
                    <div>
                        <div className='flex'>
                            <div className="flex items-center gap-2 border p-2 rounded-3xl">
                                <Image
                                    src="/images/wid.png"
                                    alt="icon"
                                    width={24}
                                    height={24}
                                    className="object-contain"
                                />
                                <p className="text-white font-[Inter] text-[16px] font-medium leading-[170%] tracking-[-0.3px]">EU-Wide Mystery Pack Distribution</p>
                            </div>
                        </div>
                        <h2 className=" text-white text-[30px] md:text-[40px] lg:text-[72px] font-normal leading-[100%] py-4 font-secondary">Next-Gen Pokémon Mystery Packs for Retail & Collectors</h2>
                        <p className='text-white font-[Inter] text-[16px] font-normal leading-[120%] tracking-[-0.3px]'>Fair-value mystery packs with authentic Pokémon cards, transparent pull rates, and
                            reliable supply  ready for retail, e-commerce, and collectors.</p>

                        <div className='flex lg:flex-row flex-col gap-4 pt-12'>
                            <button className='bg-[#FE6B02] flex justify-center items-center gap-2 py-2 pl-6 pr-2 rounded-3xl'>
                                Get Wholesale Pricing <div className='bg-white rounded-full p-2'>
                                    <MdArrowOutward className='  text-black' /></div></button>
                            <button className='bg-[#454849] flex justify-center items-center gap-2 py-2 px-4 rounded-3xl'>
                                Request Sample Pack</button>
                        </div>
                    </div>
                </div>

                <div className='justify-center items-center flex'>
                    <Image src="/images/pokemon.png" alt='image' height={501} width={545} className='z-10 h-[501px] w-[545px]' />

                </div>
            </div>
        </div>
    )
}
