import Image from 'next/image'
import React from 'react'
import { MdArrowOutward } from 'react-icons/md'

export default function AboutUs() {
    return (
        <div>

            <div className='grid grid-cols-1 md:grid-cols-2  container py-20 gap-[52px] '>
                <div>
                    <div>
                        <div className='flex'>
                            <div className="flex items-center gap-2 border py-2 px-4 rounded-full">
                                <Image
                                    src="/images/aboutusLogo.png"
                                    alt="icon"
                                    width={24}
                                    height={24}
                                    className="object-contain"
                                />
                                <p className=" font-[Inter] text-[16px] font-medium leading-[170%] tracking-[-0.3px]">About us</p>
                            </div>

                        </div>

                        <p className=" text-[#000] text-3xl md:text-4xl lg:text-[48px] font-normal leading-[120%] uppercase font-bebas font-secondary py-6">Who We Are at spawn drop</p>
                        <div className='flex flex-col gap-8 text-[#393939]'>
                            <p className='  text-[16px] font-normal leading-[120%] tracking-[-0.3px]'>Spawn Drop is a modern distribution platform designed to provide fast, reliable
                                access to the most sought-after collectible products — especially trading cards and
                                TCG sets like Pokémon.</p>
                            <p className=' font-[Inter] text-[16px] font-normal leading-[170%] tracking-[-0.3px]'>In a market where demand is extreme and new releases disappear within seconds, we build systems and sourcing pipelines that help both collectors and retail partners stay ahead.</p>
                            <p className=' font-[Inter] text-[16px] font-normal leading-[120%] tracking-[-0.3px]'>We connect global supply with local demand — shortening the distance between
                                sellers across the world and collectors or stores in your city.
                            </p>
                        </div>

                        <div className=''>

                            <button className='bg-[#000000] flex items-center gap-2 py-2 px-4 rounded-2xl text-white mt-6 md:w-[200px] w-full justify-center cursor-pointer'>
                                Show More</button>
                        </div>
                    </div>
                </div>

                <div className=''>
                    <Image src="/images/aboutUs.jpg" alt='image' height={501} width={545} className='z-10 h-[501px] w-full rounded-xl' />

                </div>
            </div>
        </div>
    )
}
