import Image from 'next/image';
import React from 'react';
import { MdArrowOutward } from 'react-icons/md';

const CTASection = () => {
    return (
        <section className="py-10 lg:py-20 px-4 flex flex-col items-center text-center font-sans">
            {/* Badge */}
            <div className='flex '>
                <div className="flex gap-2 border py-2 px-4 rounded-full">
                    <Image
                        src="/images/aboutusLogo.png"
                        alt="icon"
                        width={24}
                        height={24}
                        className="object-contain"
                    />
                    <p className=" text-[18px] font-medium leading-[140%] tracking-[-0.3px] ">CTA
                    </p>
                </div>

            </div>

            {/* Heading */}
            <h2 className="text-black text-center text-3xl md:text-4xl lg:text-[48px] font-normal leading-[120%] font-secondary pt-6">
                Ready to start selling premium mystery packs?
            </h2>

            {/* Subtext */}
            <p className="text-[#4A5565] text-center text-[18px] font-normal leading-[28px] pb-10 md:pb-[64px]">
                Get wholesale pricing, request a sample, or create your own custom branded <br /> product today.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
                {/* Primary Button */}
                <button className="group flex items-center gap-3 bg-[#FE6B02] text-white px-8 py-3 rounded-full  text-[16px] font-medium leading-[115%] tracking-[-0.048px]  hover:bg-orange-600 transition-all shadow-lg shadow-orange-100 cursor-pointer">
                    Get Wholesale Pricing
                    <span className="bg-white text-black rounded-full w-8 h-8 flex items-center justify-center transition-transform ">
                        <MdArrowOutward />
                    </span>
                </button>

                {/* Secondary Button */}
                <button className="px-8 py-4 border border-gray-300 rounded-full  text-[16px] font-medium leading-[115%] tracking-[-0.048px]  hover:bg-gray-50 transition-all text-[#181818] cursor-pointer">
                    Request Sample Pack
                </button>
            </div>
        </section>
    );
};

export default CTASection;