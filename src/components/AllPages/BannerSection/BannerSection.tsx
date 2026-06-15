"use client";
import { useTranslation } from '@/components/hooks/useTranslation';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MdArrowOutward } from 'react-icons/md'

export default function BannerSection() {

    const { t } = useTranslation();
    return (
        <div
            style={{ backgroundImage: "url('/images/banner3.png')" }}
            className="relative bg-cover bg-center bg-no-repeat lg:h-screen opacity- min-h-[600px] flex items-center justify-center  py-16 md:py-20 lg:py-0"
        >
            {/* Dark Overlay */}
            <div className="absolute inset-0  bg-black/45"></div>
            <div className='grid grid-cols-1 md:grid-cols-2 text-white containers  gap-8 '>
                <div
                    data-aos="fade-right"
                    data-aos-duration="1500"
                    data-aos-delay="300"
                    className='flex justify-center items-center mt-12 md:mt-0'>
                    <div>
                        <div className='flex justify-center  md:justify-start'>
                            <div className="flex items-center gap-2 border p-2 rounded-3xl">
                                <Image
                                    src="/images/wid.png"
                                    alt="icon"
                                    width={24}
                                    height={24}
                                    className="object-contain"
                                />
                                <p suppressHydrationWarning className="text-white font-[Inter] text-[16px] font-medium leading-[170%] tracking-[-0.3px]">{t.hero.title}</p>
                            </div>
                        </div>
                        <h2 className=" text-white text-[clamp(2.5rem,4vw,4rem)] text-center md:text-start font-normal leading-[100%] py-4 font-secondary">{t.hero.subtitle}</h2>
                        <p className='text-white font-[Inter] text-[16px] text-center md:text-start font-normal leading-[120%] tracking-[-0.3px]'>{t.hero.description}</p>

                        <div className='flex lg:flex-row flex-col gap-4 pt-10 md:pt-12'>
                            <Link href="/#contact" className='bg-[#FE6B02] flex justify-center items-center gap-2 py-2 pl-6 pr-2 rounded-3xl cursor-pointer'>
                                {t.hero.wholesaleBtn}<div className='bg-white rounded-full p-2'>
                                    <MdArrowOutward className='  text-black' /></div></Link>
                            <Link href="/products" className='bg-[#454849] flex justify-center items-center gap-2 py-3 lg:py-2 px-4 cursor-pointer rounded-3xl'>
                                {t.hero.sampleBtn}</Link>
                        </div>
                    </div>
                </div>

                <div className='justify-center items-center flex ' data-aos="fade-left"
                    data-aos-duration="1500"
                    data-aos-delay="300">
                    <Image
                        src="/images/banerPokemon.png"
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
