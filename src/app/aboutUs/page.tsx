"use client";

import Image from "next/image";
import React from "react";

export default function WhoWeAre() {
    const items = [
        { label: "Buybacks", position: "top-left" },
        { label: "Market Sourcing", position: "top-right" },
        { label: "Individual Sellers", position: "middle-left" },
        { label: "Pokémon Tournaments", position: "middle-right" },
        { label: "Wholesalers", position: "bottom-left" },
        { label: "Retailers", position: "bottom-right" },
    ];

    return (
        <section className="py-30 bg-[#F5F5F5]">
            <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center">

                {/* LEFT SIDE */}
                <div
                    data-aos="fade-right"
                    data-aos-delay="200"
                    data-aos-duration="1200"
                >
                    <h2 className="title font-secondary">
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

                    <button className="bg-black text-white px-6 py-3 rounded-full cursor-pointer">
                        Show More
                    </button>
                </div>

                {/* RIGHT SIDE DIAGRAM */}
                <div data-aos="fade-left"
                    data-aos-duration="2000">
                    <div className="bg-[#F6F5F1] rounded-xl">
                        <Image src="/images/circel.png" alt="about us" height={400} width={400} className="w-full h-full p-7" />
                    </div>
                </div>
            </div>
        </section>
    );
}