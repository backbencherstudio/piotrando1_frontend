"use client"
import CurrectIcon from '@/components/icon/CurrectIcon'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { IoCallOutline } from 'react-icons/io5'
import { MdArrowOutward } from 'react-icons/md'

export default function CustomBranding() {
    const [isDragging, setIsDragging] = useState(false);
    const [preview, setPreview] = useState<string | null>(null);

    const handleFile = (file: File | null) => {
        if (!file) return;

        if (file.type.startsWith("image/")) {
            const url = URL.createObjectURL(file);
            setPreview(url);
        }
    };

    // cleanup (important)
    useEffect(() => {
        return () => {
            if (preview) URL.revokeObjectURL(preview);
        };
    }, [preview]);

    return (
        <div className='bg-[#0E1115]'>

            <div className='grid grid-cols-1 md:grid-cols-2  container py-10 lg:py-20 gap-[40px] '>

                <div data-aos="fade-down"
                    data-aos-anchor-placement="bottom-bottom" >
                    <div >
                        <div className='flex'>
                            <p className='text-white text-3xl md:text-4xl lg:text-[48px] font-normal leading-120% font-secondary text-center md:text-start '>Custom Brandin & Full-Service <br /> Production</p>

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
                    data-aos-duration="2000"

                    style={{ backgroundImage: "url('/images/contactusbg.png')" }}
                    className="relative bg-cover  flex justify-center items-center   overflow-hidden rounded-2xl border border-[#854520] border-dashed  "
                >
                    {/* overlay */}
                    <div className="absolute inset-0 bg-black/70"></div>

                    {/* content */}
                    <div className="relative text-black px-" >

                        <Image src="/images/document.png" height={30} width={40} alt='document' className='flex justify-center items-center mx-auto mb-2' />
                        <p className="text-white font-semibold text-2xl text-center ">
                            “ Custom design details will be discussed after initial contact ”
                        </p>

                        <button className="bg-[#FF8904] px-4 py-2 rounded-full gap-2 font-medium text-base text-white flex justify-center items-center mx-auto mt-2">
                            <IoCallOutline />  Contact Us
                        </button>
                    </div>
                </div>


            </div>
        </div >
    )
}
