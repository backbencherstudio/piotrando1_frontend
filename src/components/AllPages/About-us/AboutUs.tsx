import Image from 'next/image'
import { MdArrowOutward } from 'react-icons/md'

export default function AboutUs() {


    return (
        <div>

            <div className='grid grid-cols-1 md:grid-cols-2  container py-10 lg:py-20 gap-[52px] ' id='aboutUs'>
                <div
                    data-aos="fade-up"
                    data-aos-duration="1500"
                    data-aos-delay="300"
                >
                    <div>
                        <h2 className='text-[#000] text-[clamp(2rem,3vw,3rem)] font-normal leading-120% font-secondary items-center flex justify-center  md:text-start md:justify-start mb-6'>
                            WHO WE ARE AT SPAWN DROP
                        </h2>

                        <p className="text-gray-600 mb-4 text-base">
                            <span className="font-semibold">@Spawn drop</span> is built for collectors who value quality over quantity. We carefully source high-condition trading cards from across the market, inspect each one, and repurpose them into premium packs designed to deliver consistent value and a refined opening experience.
                        </p>

                        <p className="text-gray-600 mb-6 text-base">
                            In a space often defined by randomness and inconsistency, we focus on structure, balance, and trust. Every pack is assembled with purpose—combining reliable base value with the excitement of meaningful rare pulls.
                        </p>
                        <p className="text-gray-600 mb-6 text-base">
                            We don’t simply resell cards. We curate products that reflect what collectors truly want.

                            Whether you’re a retailer, reseller, or dedicated collector, Spawn Drop delivers products designed to earn your trust—again and again.
                        </p>

                        {/* <button className="bg-black text-white px-6 py-3 rounded-full cursor-pointer">
                            Show More
                        </button> */}
                    </div>
                </div>

                <div className='' data-aos="fade-up-left"
                    data-aos-duration="1500"
                    data-aos-delay="300">
                    <Image src="/images/aboutUC.png" alt='image' height={501} width={545} className='z-10 h-[400px] lg:h-[501px] w-full rounded-xl' />

                </div>
            </div>
        </div>
    )
}
