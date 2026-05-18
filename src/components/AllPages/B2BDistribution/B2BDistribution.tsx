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
    const features = [
        {
            title: "High-margin impulse products",
            description: "Perfect for card shops, game stores, and hobby retailers",
            icon: <HighMergin />
        },
        {
            title: "Compact & optimized packaging",
            description: "Optimized packaging for modern vending solutions",
            icon: <ComPackIcon />
        },
        {
            title: "Ready-to-ship inventory",
            description: "Ready-to-ship products for e-commerce businesses",
            icon: <TfiWorld className="text-[#FF8904] w-7 h-8" />
        },
        {
            title: "Scalable supply & pricing",
            description: "Volume pricing for distribution partners",
            icon: <ScalableIcon />
        },
        {
            title: "Exciting pull experience",
            description: "Perfect for collectors who want exciting pulls.",
            icon: <BiUser className="w-7 h-8 text-[#FF8904]" />
        },
        {
            title: "Unique and eye-catching product",
            description: "A unique and eye catching product for special occasions.",
            icon: <AiOutlineGift className="w-7 h-8 text-[#FF8904]" />
        },
        {
            title: "Perfect reward items",
            description: "Great as rewards, giveaways, and prizes.",
            icon: <RewordIcon />
        },
        {
            title: "Easy add-on product",
            description: "An easy-to-sell product for hobby and stationery stores.",
            icon: <EasyIcon />
        },
    ];

    return (
        <div className=" py-10  lg:py-20 ">
            <div className="containers">
                {/* Header Section */}
                <div className="text-center mb-12" data-aos="zoom-out-down" data-aos-duration="1500">
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
                        PERFECT FOR B2B DISTRIBUTION
                    </h1>
                    <p className="text-lg text-[#393939] max-w-lg mx-auto leading-170%">
                        Built for resellers and distribution partners looking <br /> ready-to-sell products.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
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
                                        {feature.icon}
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