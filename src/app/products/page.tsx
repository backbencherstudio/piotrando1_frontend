
import MysteryPacks from '@/components/AllPages/ExPloreOurPack/ExPloreOurPack'
import UltraPack from '@/components/AllPages/OurProduct/UltraPack'
import Image from 'next/image'
import React from 'react'

export default function page() {

    return (
        <div className='pt-20 '>
            {/* <div className="flex flex-col justify-center items-center pb-10 lg:pb-5 text-center px-4" data-aos="fade-down">

                <div className="flex items-center gap-2 border bg-white rounded-full px-4 py-2">
                    <Image src="/images/aboutusLogo.png" alt="icon" width={20} height={20} />
                    <p className="text-sm lg:text-base font-medium">Our Products</p>
                </div>

                <h2 className="title font-secondary mt-4">
                    OUR MYSTERY REPACKS
                </h2>

                <p className="text-[#393939] text-sm lg:text-base max-w-xl mt-3">
                    Three tiers designed for every type of collector and retailer. Each pack
                    contains 100% authentic pokemon TCG cards.
                </p>
            </div> */}
            {/* <div>
                <UltraPack />
            </div> */}
            <div>
                <MysteryPacks />
            </div>
        </div>
    )
}
