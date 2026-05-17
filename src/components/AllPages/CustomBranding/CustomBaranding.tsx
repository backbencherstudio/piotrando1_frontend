"use client"
import CurrectIcon from '@/components/icon/CurrectIcon'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { IoCallOutline } from 'react-icons/io5'
import { MdArrowOutward } from 'react-icons/md'

export default function CustomBranding() {

    // cleanup (important)


    return (
        <div className='bg-[#0E1115]' id="customBranding">

            <div className='grid grid-cols-1 md:grid-cols-2  containers py-10 lg:py-20 gap-[40px] '>

                <div data-aos="fade-down"
                    data-aos-anchor-placement="bottom-bottom" >
                    <div >
                        <div className='flex'>
                            <p className='text-white text-[clamp(2rem,3vw,3rem)] font-normal leading-120% font-secondary  md:text-start '>Custom Brandin & Full-Service <br /> Production</p>

                        </div>


                        <div className='flex flex-col gap-8 text-[#393939] mt-5'>
                            <p className=' text-[#DBEAFE] text-[16px] font-normal leading-[120%] tracking-[-0.3px]'>Stand out with your own branded mystery pack experience. We handle everything from design to final packaging.
                            </p>

                            <div className='  text-[16px] font-normal leading-[170%] tracking-[-0.3px] text-[#FFF] space-y-2'>
                                <div className='flex gap-2'> <div className='bg-[#3E2311] flex items-center p-2 rounded-full'><CurrectIcon /> </div> Custom blister packaging with your logo</div>
                                <div className='flex gap-2'> <div className='bg-[#3E2311] flex items-center p-2 rounded-full'><CurrectIcon /> </div> Full packaging design (blister + box)
                                </div>
                                <div className='flex gap-2'> <div className='bg-[#3E2311] flex items-center p-2 rounded-full'><CurrectIcon /> </div> Card sourcing (Pokémon and more)
                                </div>
                                <div className='flex gap-2'> <div className='bg-[#3E2311] flex items-center p-2 rounded-full'><CurrectIcon /> </div> Quality control & assembly</div>
                                <div className='flex gap-2'> <div className='bg-[#3E2311] flex items-center p-2 rounded-full'><CurrectIcon /> </div> Ready-to-sell delivery</div>

                            </div>

                        </div>


                    </div>
                </div>

                <div data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1500"



                >
                    <Image src="/images/computer.jpg" alt='customBranding' height={500} width={500} className='h-[300px] lg:h-[500px]  w-full object-center rounded-xl' />

                    {/* content */}

                </div>


            </div>
        </div >
    )
}
