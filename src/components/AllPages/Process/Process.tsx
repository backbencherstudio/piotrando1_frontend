// app/page.tsx
import DuobleIcon from '@/components/icon/DuobleIcon';
import PackIcon from '@/components/icon/PackIcon';
import Step2Icon from '@/components/icon/Step2Icon';
import { ShieldCheck, Package, Truck, Users, Gem, Eye } from 'lucide-react';
import Image from 'next/image';
import { LuSearch, LuUserRound } from 'react-icons/lu';

export default function Process() {
    const steps = [
        {
            number: "Step 1",
            title: "SOURCING",
            description: "We acquire authentic cards from trusted partners, resellers, tournaments, and global suppliers",
            icon: < LuSearch className="w-8 h-8 text-[#FF8904]" />,
            color: "bg-[#2E251E]",
        },
        {
            number: "Step 2",
            title: "VERIFIED SUPPLY",
            description: "Every source is vetted. We only work with reliable and proven partners.",
            icon: <Step2Icon className="w-10 h-10" />,
            color: "bg-[#2E251E]",
        },
        {
            number: "Step 3",
            title: "DOUBLE QUALITY CHECK",
            description: "Each card is inspected twice  before acquisition and before packaging.",
            icon: <DuobleIcon className="w-8 h-8" />,
            color: "bg-[#2E251E]",
        },
        {
            number: "Step 4",
            title: "PACK ASSEMBLY",
            description: "We design and assemble each pack in-house with carefully balanced card ratios.",
            icon: <PackIcon className="w-10 h-10 text-[#FF8904]" />,
            color: "bg-[#2E251E]",
        },
        {
            number: "Step 5",
            title: "FAST EU SHIPPING",
            description: "Orders are shipped quickly with tracked delivery across Europe.",
            icon: <Truck className="w-8 h-8 text-[#FF8904]" />,
            color: "bg-[#2E251E]",
        },
        {
            number: "Step 6",
            title: "CUSTOMER EXPERIENCE",
            description: "The final step your customer opens the pack and experiences the pull.",
            icon: <LuUserRound className="w-8 h-8 text-[#FF8904]" />,
            color: "bg-[#2E251E]",
        },
    ];

    return (
        <main className=" bg-[#0E1115] py-10 lg:py-20 ">
            <div className="containers ">
                {/* Header Section */}
                <div className="text-center mb-16" data-aos="zoom-out-up" data-aos-duration="1500">
                    <div className='flex justify-center'>
                        <div className="flex items-center gap-2 border py-2 px-4 rounded-full">
                            <Image
                                src="/images/wid.png"
                                alt="icon"
                                width={24}
                                height={24}
                                className="object-contain"
                            />
                            <p className=" text-white text-[16px] font-medium leading-[170%] tracking-[-0.3px]">Process</p>
                        </div>
                    </div>
                    <h1 className="text-[clamp(2rem,3vw,3rem)] uppercase font-normal pt-6 pb-2 font-secondary text-[#FFF] bg-clip-text  mb-4">
                        How Spawn Drop Works
                    </h1>
                    <div className='flex justify-center'>
                        <p className="text-base text-[#F6F5F1] font-normal leading-170% w-xl text-center items-center justify-center">
                            From sourcing authentic cards to delivering ready-to-sell mystery repacks,
                            we manage every step for your business.
                        </p>
                    </div>
                </div>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="bg-[#171A21] rounded-2xl border border-transparent hover:border-orange-500 transition-all duration-300 overflow-hidden"
                            data-aos="fade-up"
                            // data-aos-delay={index * 120}
                            data-aos-duration="1500">
                            <div className="bg-[#171A21] rounded-2xl p-6">
                                {/* Step Number Badge */}
                                <div className="flex items-center gap-2  mb-4">

                                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center  shadow-md`}>
                                        {step.icon}
                                    </div>
                                    <div>
                                        <span className="text-base font-normal text-[#707D8F] tracking-wide">
                                            {step.number}
                                        </span>
                                        <h3 className="text-xl lg:text-2xl font-normal text-white mb-3 leading-120% font-secondary">
                                            {step.title}
                                        </h3>
                                    </div>

                                </div>

                                {/* Title */}


                                {/* Description */}
                                <p className="text-white font-normal text-base leading-relaxed">
                                    {step.description}
                                </p>

                                {/* Decorative Line */}
                                <div className={`mt-4 h-1 w-12 rounded-full bg-gradient-to-r `} />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}

            </div>
        </main>
    );
}