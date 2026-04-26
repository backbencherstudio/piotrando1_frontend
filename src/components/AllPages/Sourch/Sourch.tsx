import CurrectGreenIcon from '@/components/icon/CurrectgreenIcon'
import CurrectIcon from '@/components/icon/CurrectIcon'
import Image from 'next/image'
import React from 'react'
import { MdArrowOutward } from 'react-icons/md'

const stats = [
    {
        total: "10,000+",
        title: "Packs Sold"
    },
    {
        total: "100+",
        title: "Business Customers"
    },
    {
        total: "99%",
        title: "Customer Satisfaction"
    },
    {
        total: "4.9/5",
        title: "Rating"
    },
]

export default function Sourch() {
    return (
        <div className='py-10 lg:py-20 container'>

            <div className="text-center">
                <div className='flex justify-center'>
                    <div className="flex items-center gap-2 border py-2 px-4 rounded-full">
                        <Image
                            src="/images/aboutusLogo.png"
                            alt="icon"
                            width={24}
                            height={24}
                            className="object-contain"
                        />
                        <p className=" font-[Inter] text-[16px] font-medium leading-[170%] tracking-[-0.3px] ">Sources
                        </p>
                    </div>

                </div>
                <p className="text-[#000] text-3xl md:text-4xl  lg:text-[48px] font-normal font-secondary leading-120% pt-6">Reliable Supply. Trusted Sources.</p>
                <p className="text-[#393939] font-normal text-base leading-170% tracking-[0.03px] text-center ">
                    We maintain a consistent supply pipeline by working only with trusted
                    partners across the global TCG market.
                </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2   py-20 gap-[52px] '>

                <div>
                    <div>

                        <div className='flex flex-col gap-8  '>


                            <div className='  text-[16px] font-normal leading-[170%] tracking-[-0.3px] ml-4  space-y-4'>
                                <div className='flex gap-2'> <div className=''><CurrectGreenIcon /> </div> Custom blister packaging with your logo</div>
                                <p className="ml-9">We work directly with retail stores and card businesses to purchase excess inventory, collections, and returned stock. This helps us maintain a stable flow of authentic cards throughout the year.</p>
                                <div className='flex gap-2'> <div className=''><CurrectGreenIcon /> </div> Full packaging design (blister + box)
                                </div>
                                <p className="ml-9">We source cards through Pokémon tournaments and local events, giving us access to popular, competitive, and hard-to-find cards directly from the community.</p>
                                <div className='flex gap-2'> <div className=''><CurrectGreenIcon /> </div> Card sourcing (Pokémon and more)
                                </div>
                                <p className="ml-9">We have long-term relationships with trusted individual resellers who regularly provide high-quality cards, sealed products, and rare collectibles.</p>
                                <div className='flex gap-2'> <div className=''><CurrectGreenIcon /> </div> Quality control & assembly</div>
                                <p className="ml-9">We actively monitor the trading card market and source inventory through verified platforms, distributors, and international suppliers to keep stock available at all times.</p>


                            </div>

                        </div>


                    </div >
                </div >

                <div className='  '>
                    <Image src="/images/sourch.png" alt='image' height={501} width={545} className='z-10 h-[501px] w-full rounded-xl' />

                </div>


            </div >

            <div className=' container '>
                <div className=' outline rounded-lg py-15'>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-">
                        {stats.map((item, index) => (
                            <div
                                key={index}
                                className="text-center p-6 rounded-2xl  "
                            >
                                <div className='space-y-4 flex flex-col'>
                                    <h2 className=" text-3xl md:text-4xl lg:text-[56px] font-normal font-secondary text-[#101828]">
                                        {item.total}
                                    </h2>
                                    <p className="text-[#101828] text-xl font-normal tracking-normal">{item.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div >
    )
}
