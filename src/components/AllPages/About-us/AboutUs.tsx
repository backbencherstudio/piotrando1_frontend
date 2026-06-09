"use client";
import { useTranslation } from '@/components/hooks/useTranslation';
import Image from 'next/image'
import { MdArrowOutward } from 'react-icons/md'

export default function AboutUs() {

    const { t } = useTranslation();


    return (
        <div>

            <div className='grid grid-cols-1 md:grid-cols-2 containers   py-10 lg:py-20 gap-10 lg:gap-[52px] ' id='aboutUs'>
                <div
                    data-aos="fade-up"
                    data-aos-duration="1500"
                    data-aos-delay="300"
                    className=' '>
                    <div className='text-justify '>
                        {/* <div className="flex mb-4 md:mb-6 flex items-center md:items-start justify-center md:justify-start">
                            <div className="flex items-center md:items-start justify-center md:justify-start  gap-2 rounded-full border bg-white px-4 py-2">
                                <Image
                                    src="/images/aboutusLogo.png"
                                    alt="icon"
                                    width={20}
                                    height={20}
                                />

                                <p className="text-sm font-medium lg:text-base">
                                    About Us
                                </p>
                            </div>
                        </div> */}
                        <h2 className='text-[#000] text-[clamp(2rem,3vw,3rem)] font-normal leading-120% font-secondary items-center flex justify-center  md:text-start md:justify-start mb-2 md:mb-6 md:leading-6 lg:leading-9 '>
                            {t.about.title}
                        </h2>

                        <p className="text-[#393939] mb-5 text-base">
                            {t.about.description1}
                        </p>

                        <p className="text-[#393939] mb-5 text-base">
                            {t.about.description2}
                        </p>
                        <p className="text-[#393939]  text-base">
                            {t.about.description3}
                        </p>

                        {/* <button className="bg-black text-white px-6 py-3 rounded-full cursor-pointer">
                            Show More
                        </button> */}
                    </div>
                </div>

                <div className='' data-aos="fade-up-left"
                    data-aos-duration="1500"
                    data-aos-delay="300">
                    <Image src="/images/whoWe.png" alt='image' height={501} width={545} className='z-10 h-[320px] lg:h-[361px] w-full rounded-xl object-center' />

                </div>
            </div>
        </div>
    )
}
