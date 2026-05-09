import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MdArrowOutward } from 'react-icons/md'

export default function BannerSection() {
    return (
        <div
            style={{ backgroundImage: "url('/images/banner3.png')" }}
            className="relative bg-cover bg-center bg-no-repeat lg:h-screen min-h-[600px] flex items-center justify-center  py-16 md:py-20 lg:py-0"
        >
            {/* Dark Overlay */}
            {/* <div className="absolute inset-0 bg-black/80"></div> */}
            <div className='grid grid-cols-1 md:grid-cols-2 text-white container  gap-8 '>
                <div
                    data-aos="fade-right"
                    data-aos-duration="1500"
                    data-aos-delay="300"
                    className='flex justify-center items-center'>
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
                        <h2 className=" text-white text-[clamp(2rem,4vw,4rem)] font-normal leading-[100%] py-4 font-secondary">Next-Gen Pokémon Mystery Packs for Retail & Collectors</h2>
                        <p className='text-white font-[Inter] text-[16px] font-normal leading-[120%] tracking-[-0.3px]'>Fair-value mystery packs with authentic Pokémon cards, transparent pull rates, and
                            reliable supply  ready for retail, e-commerce, and collectors.</p>

                        <div className='flex lg:flex-row flex-col gap-4 pt-12'>
                            <Link href="/#contact" className='bg-[#FE6B02] flex justify-center items-center gap-2 py-2 pl-6 pr-2 rounded-3xl cursor-pointer'>
                                Get Wholesale Pricing <div className='bg-white rounded-full p-1'>
                                    <MdArrowOutward className='  text-black' /></div></Link>
                            <Link href="/products" className='bg-[#454849] flex justify-center items-center gap-2 py-2 px-4 cursor-pointer rounded-3xl'>
                                Request Sample Pack</Link>
                        </div>
                    </div>
                </div>

                <div className='justify-center items-center flex ' data-aos="fade-left"
                    data-aos-duration="1500"
                    data-aos-delay="300">
                    <Image
                        src="/images/bannerBg.png"
                        alt="imagebanner"
                        width={545}
                        height={521}
                        priority
                        unoptimized
                        className="z-10 object-contain h-auto w-full max-w-[545px]"
                    />

                </div>
            </div>
        </div>
    )
}
