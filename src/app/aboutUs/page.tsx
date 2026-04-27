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
                <div>
                    <h2 className="text-3xl md:text-4xl lg:text-[64px]  mb-6 font-secondary">
                        WHO WE ARE AT SPAWN DROP
                    </h2>

                    <p className="text-gray-600 mb-4 text-base">
                        <span className="font-semibold">@Spawn drop</span> is a company
                        providing modern solutions that enable fast and reliable access to
                        the most sought-after and rare collectible products — primarily
                        trading cards and TCG sets (Pokémon, Disney Lorcana, One Piece, and
                        others).
                    </p>

                    <p className="text-gray-600 mb-6 text-base">
                        In an environment of extremely high demand and allocations that
                        vanish in seconds, we develop tools and processes that allow both
                        individual collectors and business partners to stay ahead of the
                        market and acquire desired products at the right moment.
                    </p>

                    <button className="bg-black text-white px-6 py-3 rounded-full cursor-pointer">
                        Show More
                    </button>
                </div>

                {/* RIGHT SIDE DIAGRAM */}
                <div>
                    <div className="bg-[#F6F5F1] rounded-xl">
                        <Image src="/images/circel.png" alt="about us" height={400} width={400} className="w-full h-full p-7" />
                    </div>
                </div>
            </div>
        </section>
    );
}