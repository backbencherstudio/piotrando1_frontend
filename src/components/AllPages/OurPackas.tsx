'use client';

import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

interface GalleryItem {
    id: number;
    title: string;
    image: string;
    color: string;
}

const OurPackas = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlay, setIsAutoPlay] = useState(true);
    const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
    const [visibleItems, setVisibleItems] = useState(1);

    // Sample gallery items - replace with your own images
    const galleryItems: GalleryItem[] = [
        {
            id: 1,
            title: 'On Store Shelves',
            image: '/images/gallery1.png',
            color: 'from-blue-500 to-blue-600',
        },
        {
            id: 2,
            title: 'In Customer Hands',
            image: '/images/gallery2.png',
            color: 'from-green-500 to-green-600',
        },
        {
            id: 3,
            title: 'Ready for Retail Display',
            image: '/images/gallery3.png',
            color: 'from-purple-500 to-purple-600',
        },
        {
            id: 4,
            title: 'At Events & Tournaments',
            image: '/images/gallery4.png',
            color: 'from-red-500 to-red-600',
        },
        {
            id: 5,
            title: 'Behind the Scenes',
            image: '/images/gallery5.png',
            color: 'from-yellow-500 to-yellow-600',
        },
    ];

    // Auto-play carousel
    useEffect(() => {
        const updateVisibleItems = () => {
            if (window.innerWidth >= 1024) {
                setVisibleItems(4);
            } else if (window.innerWidth >= 768) {
                setVisibleItems(2);
            } else {
                setVisibleItems(1);
            }
        };

        updateVisibleItems();
        window.addEventListener('resize', updateVisibleItems);

        return () => window.removeEventListener('resize', updateVisibleItems);
    }, []);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % galleryItems.length);
        setIsAutoPlay(false);
        setTimeout(() => setIsAutoPlay(true), 10000);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
        setIsAutoPlay(false);
        setTimeout(() => setIsAutoPlay(true), 3000);
    };


    const displayItems = Array.from({ length: visibleItems }, (_, i) => {
        return galleryItems[(currentIndex + i) % galleryItems.length];
    });

    return (
        <div className="container">

            <div className=" mb-12 flex justify-between  flex-col" >
                <div className='flex flex-col lg:flex-row' data-aos="zoom-in">
                    <div className='flex justify-center'>
                        <div className="flex gap-2 border py-2 px-4 rounded-full">
                            <Image
                                src="/images/aboutusLogo.png"
                                alt="icon"
                                width={24}
                                height={24}
                                className="object-contain"
                            />
                            <p className=" font-[Inter] text-[16px] font-medium leading-[170%] tracking-[-0.3px] ">Our Packs
                            </p>
                        </div>
                    </div>

                </div>
                <div className='flex-col flex lg:flex-row justify-between' data-aos="zoom-in"   >
                    <p className="text-[#000] text-[clamp(2rem,3vw,3rem)] font-normal font-secondary leading-120% pt-6 text-center lg:text-start">See Our Packs in Action</p>
                    <div className='flex justify-center lg:justify-start items-center gap-4 mt-4 lg:mt-0 '>
                        <p className="text-[#393939] font-normal text-base leading-170% tracking-[0.03px] flex justify-center text-center lg:text-start items-center lg:w-lg w-sm ">
                            Explore how Spawn Drop products perform in real environments from retail
                            shelves to customer hands.
                        </p>
                    </div>
                </div>
            </div>
            {/* Gallery Title and Show More */}
            <div className="flex justify-between items-center mb-8">
                <h2 className=" text-xl md:text-3xl font-medium">Gallery</h2>
                <a
                    href="#"
                    className="flex items-center gap-2 text-gray-700 hover:text-black font-medium transition-colors"
                >
                    Show more
                    <ChevronRight className="w-5 h-5" />
                </a>
            </div>

            {/* Carousel Container */}
            <div className="relative" data-aos="zoom-out">
                {/* Gallery Items */}
                <div className="flex gap-4 overflow-hidden rounded-lg">
                    {displayItems.map((item) => (
                        <div
                            key={item.id}
                            className="
                                    w-full
                                    md:w-1/2
                                    lg:w-1/4
                                    flex-shrink-0
                                    group cursor-pointer rounded-2xl overflow-hidden
                                "
                        >
                            <div className="relative h-70 md:h-97 ">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-center rounded-2xl transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-4 ">
                                <h3 className="font-semibold text-gray-900">{item.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navigation Arrows */}
                <div className="flex justify-between items-center  md:mt-2">
                    <div className="flex-1" />
                    <div className="flex gap-3">
                        <button
                            onClick={handlePrev}
                            className="p-2 rounded-full bg-white cursor-pointer hover:bg-gray-300 transition-colors text-gray-800 hover:text-gray-900"
                            aria-label="Previous"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                            onClick={handleNext}
                            className="p-2 rounded-full bg-white cursor-pointer hover:bg-gray-300 transition-colors text-gray-800 hover:text-gray-900"
                            aria-label="Next"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default OurPackas;
