"use client";

import { useTranslation } from "@/components/hooks/useTranslation";
import ComPackIcon from "@/components/icon/ComPackIcon";
import EasyIcon from "@/components/icon/EasyAddIcon";
import HighMergin from "@/components/icon/HighMergin";
import RewordIcon from "@/components/icon/RewordIcon";
import ScalableIcon from "@/components/icon/ScalabeIcon";
import Image from "next/image";
import { AiOutlineGift } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { TfiWorld } from "react-icons/tfi";



// app/page.tsx
export default function B2BDistributionPage() {



    const { t } = useTranslation();
    const b2b = t.b2b.features;

    const featuresw = [];
    for (let i = 0; i < b2b.length; i += 2) {
        featuresw.push({
            title: b2b[i],
            description: b2b[i + 1],
        })
    }


    const features = [
        { key: "highMargin", icon: <HighMergin /> },
        { key: "compact", icon: <ComPackIcon /> },
        { key: "readyShip", icon: <TfiWorld className="text-[#FF8904] w-7 h-8" /> },
        { key: "scalable", icon: <ScalableIcon /> },
        { key: "pull", icon: <BiUser className="w-7 h-8 text-[#FF8904]" /> },
        { key: "unique", icon: <AiOutlineGift className="w-7 h-8 text-[#FF8904]" /> },
        { key: "reward", icon: <RewordIcon /> },
        { key: "easy", icon: <EasyIcon /> },
    ];


    return (
        <div className=" py-10  lg:py-20 ">
            <div className="containers">
                {/* Header Section */}
                <div className="text-center mb-12" data-aos="zoom-in" data-aos-duration="1500">
                    <div className='flex justify-center items-center mb-6'>
                        <div className="flex items-center gap-2 border py-2 px-4 rounded-full">
                            <Image
                                src="/images/aboutusLogo.png"
                                alt="icon"
                                width={24}
                                height={24}
                                className="object-contain"
                            />
                            <p className=" font-[Inter] text-[16px] font-medium leading-[170%] tracking-[-0.3px]">B2B Distribution</p>
                        </div>

                    </div>
                    <h1 className="text-[clamp(2rem,3vw,3rem)] font-normal font-secondary text-[#000] mb-4">
                        {t.b2b.title}
                    </h1>
                    <p className="text-[#393939] font-normal text-base leading-170% tracking-[0.03px] xl:w-sm flex justify-center items-center mx-auto">
                        {t.b2b.subtitle}
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {featuresw.map((feature, index) => (
                        <div
                            data-aos="fade-up"
                            // data-aos-delay={index * 120}
                            data-aos-duration="800"
                            key={index}
                            className="group border bg-[#FFFFFF] rounded-2xl p-6 lg:p-2 lg:py-4 xl:p-6 transition-all duration-300  "
                        >
                            <div className="flex justify-center mb-10">
                                <div className="bg-[#FFF4E6] p-4 rounded-2xl ">
                                    <div className="w-10 h-10 rounded-xl   flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <div className="bg-[#FFF4E6] p-4 rounded-2xl">
                                            {features[index].icon}
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <h3 className="text-lg font-semibold text-[#0A0A0A] mb-5 text-center">
                                {feature.title}
                            </h3>
                            <p className="text-base  font-normal  text-[#4A5565]  text-center">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    );
}