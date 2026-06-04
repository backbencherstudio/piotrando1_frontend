"use client";
import { useTranslation } from '@/components/hooks/useTranslation'
import CurrectGreenIcon from '@/components/icon/CurrectgreenIcon'
import CurrectIcon from '@/components/icon/CurrectIcon'
import Image from 'next/image'
import React from 'react'
import { MdArrowOutward } from 'react-icons/md'

// const stats = [
//     {
//         total: "10,000+",
//         title: "Packs Sold"
//     },
//     {
//         total: "100+",
//         title: "Business Customers"
//     },
//     {
//         total: "99%",
//         title: "Customer Satisfaction"
//     },
//     {
//         total: "4.9/5",
//         title: "Rating"
//     },
// ]

export default function Sourch() {

    const { t } = useTranslation();

    const points = t.sources.points;
    return (
        <div className='py-10 lg:py-20 containers'>

            <div className="text-center" data-aos="fade-up"
                data-aos-duration="1500">
                <div className='flex justify-center'>
                    <div className="flex items-center gap-2 border py-2 px-4 rounded-full">
                        <Image
                            src="/images/aboutusLogo.png"
                            alt="icon"
                            width={24}
                            height={24}
                            className="object-contain"
                        />
                        <p className=" font-[Inter] text-[16px] font-medium leading-[170%] tracking-[-0.3px] ">{t.sources.mainTitle}
                        </p>
                    </div>

                </div>
                <p className="text-[#000] text-[clamp(2rem,3vw,3rem)] font-normal font-secondary leading-120% pt-6">{t.sources.title}</p>
                <p className="text-[#393939] font-normal text-base leading-170% tracking-[0.03px] text-center  xl:w-xl flex justify-center items-center mx-auto">
                    {t.sources.description}
                </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 pt-5 md:pt-10  lg:pt-20 gap-[52px] '>

                <div data-aos="fade-right"
                    data-aos-duration="1500">
                    <div>

                        <div className='flex flex-col gap-8  '>


                            <div className='  text-[16px] font-normal leading-[170%] tracking-[-0.3px]   space-y-4'>

                                {
                                    points.map((point, index) => {
                                        return <div key={point.title}>
                                            <div>
                                                <div className='flex gap-2 text-[#101828] font-medium text-lg'>
                                                    <div><CurrectGreenIcon /></div>
                                                    {point.title}
                                                </div>

                                                <p className="ml-9 text-[#4A5565] text-base font-normal">{point.description}</p>


                                            </div>
                                        </div>
                                    })
                                }
                                {/* <div className='flex gap-2 text-[#101828] font-medium text-lg'> <div className=''><CurrectGreenIcon /> </div> Cards sourced from verified sellers, retailers, and events</div>
                                <p className="ml-9 text-[#4A5565] text-base font-normal">We work directly with retail stores and card businesses to acquire excess inventory, collections, and
                                    returned stock. This helps us maintain a stable flow of authentic trading cards throughout the year.</p>
                                <div className='flex gap-2 text-[#101828] font-medium text-lg'> <div className=''><CurrectGreenIcon /> </div> Only authentic products, no exceptions
                                </div>
                                <p className="ml-9 text-[#4A5565] text-base font-normal">We source cards through Pokémon tournaments, local events, and collector communities, giving us
                                    access to popular, competitive, and hard-to-find cards directly from active players and collectors.</p>
                                <div className='flex gap-2 text-[#101828] font-medium text-lg'> <div className=''><CurrectGreenIcon /> </div> Double-layer quality control process
                                </div>
                                <p className="ml-9 text-[#4A5565] text-base font-normal">We maintain long-term relationships with reliable independent resellers who consistently provide
                                    high-quality singles, sealed products, and collectible inventory.</p>
                                <div className='flex gap-2 text-[#101828] font-medium text-lg'> <div className=''><CurrectGreenIcon /> </div> Continuous sourcing to ensure stable stock</div>
                                <p className="ml-9 text-[#4A5565] text-base font-normal">Every product is carefully reviewed and prepared through internal quality control processes to
                                    ensure authenticity, consistency, and presentation standards before shipment.</p> */}


                            </div>

                        </div>


                    </div >
                </div >

                <div className='  ' data-aos="fade-left"
                    data-aos-duration="1500">
                    <Image src="/images/image33.png" alt='image' height={501} width={545} className='z-10 h-[271px] lg:h-[501px] w-full rounded-xl' />

                </div>


            </div >

            {/* <div className=' containers ' data-aos="fade-up"

                data-aos-duration="800">
                <div className=' outline rounded-lg py-0 lg:py-15'>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-">
                        {stats.map((item, index) => (
                            <div
                                key={index}
                                className="text-center p-6 rounded-2xl  "
                            >
                                <div className=' md:space-y-0 lg:space-y-4 flex flex-col'>
                                    <h2 className=" text-xl md:text-3xl lg:text-[56px] font-normal font-secondary text-[#101828]">
                                        {item.total}
                                    </h2>
                                    <p className="text-[#101828] text-xl font-normal tracking-normal">{item.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div> */}
        </div >
    )
}
