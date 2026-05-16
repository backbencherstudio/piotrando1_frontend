import CurrectGreenIcon from '@/components/icon/CurrectgreenIcon'
import Image from 'next/image'
import React from 'react'

export default function MysteryNotice() {
    return (
        <div className="Allcontainer ">
            <div>
                <div className='flex justify-center pb-10 md:pb-12 lg:pb-[64px]'> <p className="text-[#000] text-[clamp(2rem,3vw,3rem)] font-normal font-secondary leading-120% ">The Mystery Everyone Notices.</p></div>
                <div className='grid grid-cols-1 md:grid-cols-2   gap-[52px] '>
                    <div className='  ' data-aos="fade-right"
                        data-aos-duration="1500">
                        <Image src="/images/noticeSectiob.jpg" alt='image' height={501} width={545} className='z-10 h-[271px] lg:h-[501px] w-full rounded-xl object-center' />

                    </div>

                    <div data-aos="fade-left"
                        data-aos-duration="1500">
                        <div>

                            <div className='flex flex-col gap-8  '>


                                <div className='  text-[16px] font-normal leading-[170%] tracking-[-0.3px]  space-y-4'>
                                    <div className='flex gap-3 '> <div className=''><CurrectGreenIcon className='' /> </div>   <p className="-mt-1 text-[4A5565] font-normal text-base">From tournament prize tables to collector shelves, this piece instantly stands out.
                                        Designed to blend naturally with every Pokémon setup while adding a premium touch that catches
                                        attention at first glance.
                                        returned stock. This helps us maintain a stable flow of authentic trading cards throughout the year.</p> </div>

                                    <div className='flex gap-3'> <div className=''><CurrectGreenIcon /> </div>   <p className="-mt-1">More than just a collectible, it creates a real sense of mystery and excitement the kind of item
                                        that makes people stop, look closer, and wonder what&apos;s inside. Whether displayed jn a personal
                                        collection, showcased during tournaments, or featured in-store, it adds atmosphere and curiosity
                                        wherever it appears.</p>
                                    </div>

                                    <div className='flex gap-3'> <div className=''><CurrectGreenIcon /> </div> <p className="-mt-1">Its design was made to feel authentic to the Pokémon world while still looking unique enough to
                                        become a centerpiece on any shelf. The combination of presentation, detail, and mystery gives every
                                        setup a more immersive collector experience.</p>
                                    </div>

                                    <div className='flex gap-3'> <div className=''><CurrectGreenIcon /> </div>
                                        <ul className=" -mt-1">
                                            perfect for display shelves

                                            Eye-catching during events & tournaments

                                            Creates a mystery-box feeling
                                            Designed to attract attention naturally
                                            Built for collectors who value presentation and atmosphere.

                                        </ul>
                                    </div>




                                </div>

                            </div>


                        </div >
                    </div >




                </div >
            </div>
        </div >
    )
}
