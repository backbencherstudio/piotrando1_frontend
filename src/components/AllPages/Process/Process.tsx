"use client";

import { useTranslation } from '@/components/hooks/useTranslation';
import DuobleIcon from '@/components/icon/DuobleIcon';
import PackIcon from '@/components/icon/PackIcon';
import Step2Icon from '@/components/icon/Step2Icon';
import Image from 'next/image';
import { LuSearch, LuUserRound } from 'react-icons/lu';
import { Truck } from 'lucide-react';
import { ReactNode } from 'react';

export default function Process() {

    const { t } = useTranslation();

    const stepsData = t.process.steps;

    // JSON object → array (ORDER FIXED)
    const steps = [
        { key: "sourcing", ...stepsData.sourcing },
        { key: "verified", ...stepsData.verified },
        { key: "quality", ...stepsData.quality },
        { key: "assembly", ...stepsData.assembly },
        { key: "shipping", ...stepsData.shipping },
        { key: "experience", ...stepsData.experience },
    ];

    // icon mapping (same order)
    const icons = [
        <LuSearch key="s1" className="w-8 h-8 text-[#FF8904]" />,
        <Step2Icon key="s2" className="w-10 h-10" />,
        <DuobleIcon key="s3" className="w-8 h-8" />,
        <PackIcon key="s4" className="w-10 h-10 text-[#FF8904]" />,
        <Truck key="s5" className="w-8 h-8 text-[#FF8904]" />,
        <LuUserRound key="s6" className="w-8 h-8 text-[#FF8904]" />,
    ] as const;
    return (
        <main className="bg-[#0E1115] py-10 lg:py-20">

            <div className="containers">

                {/* HEADER (UNCHANGED DESIGN) */}
                <div
                    className="text-center mb-16"
                    data-aos="zoom-out-up"
                    data-aos-duration="1500"
                >
                    <div className='flex justify-center'>
                        <div className="flex items-center gap-2 border py-2 px-4 rounded-full">
                            <Image
                                src="/images/wid.png"
                                alt="icon"
                                width={24}
                                height={24}
                                className="object-contain"
                            />
                            <p className="text-white text-[16px] font-medium">
                                Process
                            </p>
                        </div>
                    </div>

                    <h1 className="text-[clamp(2rem,3vw,3rem)] uppercase font-normal pt-6 pb-2 font-secondary text-white mb-4">
                        {t.process.title}
                    </h1>

                    <div className='flex justify-center'>
                        <p className="text-base text-[#F6F5F1] font-normal w-xl text-center">
                            {t.process.subtitle}
                        </p>
                    </div>
                </div>

                {/* STEPS GRID (UNCHANGED STRUCTURE + CSS SAME) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="bg-[#171A21] rounded-2xl border border-transparent hover:border-orange-500 transition-all duration-300 overflow-hidden"
                            data-aos="fade-up"
                            data-aos-duration="1500"
                        >
                            <div className="bg-[#171A21] rounded-2xl p-6">

                                {/* STEP HEADER */}
                                <div className="flex items-center gap-2 mb-4">

                                    <div className="w-16 h-16 rounded-full bg-[#2E251E] flex items-center justify-center shadow-md">
                                        {icons[index]}
                                    </div>

                                    <div>
                                        <span className="text-base font-normal text-[#707D8F] tracking-wide">
                                            Step {index + 1}
                                        </span>

                                        <h3 className="text-xl lg:text-2xl font-normal text-white mb-3 leading-120% font-secondary">
                                            {step.title}
                                        </h3>
                                    </div>

                                </div>

                                {/* DESCRIPTION */}
                                <p className="text-white font-normal text-base leading-relaxed">
                                    {step.description}
                                </p>

                                {/* DECOR LINE (same as your old design) */}
                                <div className="mt-4 h-1 w-12 rounded-full bg-gradient-to-r" />

                            </div>
                        </div>
                    ))}

                </div>

            </div>
        </main>
    );
}