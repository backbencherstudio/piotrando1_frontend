import Image from 'next/image'
import { MdArrowOutward } from 'react-icons/md'

export default function AboutUs() {


    return (
        <div>

            <div className='grid grid-cols-1 md:grid-cols-2 containers   py-10 lg:py-20 gap-10 lg:gap-[52px] ' id='aboutUs'>
                <div
                    data-aos="fade-up"
                    data-aos-duration="1500"
                    data-aos-delay="300"
                    className=' '>
                    <div className='md:text-justify text-center'>
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
                        <h2 className='text-[#000] text-[clamp(2rem,3vw,3rem)] font-normal leading-120% font-secondary items-center flex justify-center  md:text-start md:justify-start mb-6 md:leading-6 lg:leading-9 '>
                            WHO WE ARE AT SPAWN DROP
                        </h2>

                        <p className="text-[#393939] mb-4 text-base">
                            <span className="">Spawn Drop </span> is built for collectors who value quality over quantity. We carefully source high-condition trading cards from across the market, inspect each one, and repurpose them into premium packs designed to deliver consistent value and a refined opening experience.
                        </p>

                        <p className="text-[#393939] mb-4 text-base">
                            In a space often defined by randomness and inconsistency, we focus on structure, balance, and trust. Every pack is assembled with purpose, combining reliable base value with the excitement of meaningful rare pulls.
                        </p>
                        <p className="text-[#393939]  text-base">
                            We don’t simply resell cards. We curate products that reflect what collectors truly want. Whether you’re a retailer, reseller, or dedicated collector, Spawn Drop delivers products designed to earn your trust, again and again.
                        </p>

                        {/* <button className="bg-black text-white px-6 py-3 rounded-full cursor-pointer">
                            Show More
                        </button> */}
                    </div>
                </div>

                <div className='' data-aos="fade-up-left"
                    data-aos-duration="1500"
                    data-aos-delay="300">
                    <Image src="/images/whoWe.png" alt='image' height={501} width={545} className='z-10 h-[320px] lg:h-[421px] w-full rounded-xl' />

                </div>
            </div>
        </div>
    )
}
