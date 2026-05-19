"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import React, { useState } from "react";

const faqs = [
    {
        question: "What are Pokémon mystery repacks?",
        answer:
            "Pokémon mystery repacks are curated bundles of authentic Pokémon cards containing a randomized mix of commons, holos, rares and potential chase cards designed to create an exciting opening experience.",
    },
    {
        question: "Are the cards authentic?",
        answer:
            "Yes, all cards included in our mystery repacks are 100% authentic Pokémon cards sourced from trusted suppliers, collections and verified channels.",
    },
    {
        question: "What can be inside a repack?",
        answer:
            "Each repack may include a mix of common cards, holos, rare cards, ultra rares, full arts, vintage cards or special bonus pulls depending on the product tier.",
    },
    {
        question: "Are the packs random?",
        answer:
            "Yes, all mystery repacks are packed and shipped using a randomized process to ensure a fair and exciting experience for every customer.",
    },
    {
        question: "Can I pull valuable cards?",
        answer:
            "Yes, some repacks contain premium chase cards with significantly higher value, but because products are randomized, specific pulls are never guaranteed.",
    },
    {
        question: "Do you guarantee value?",
        answer:
            "Our mystery repacks are designed to provide fair value and an enjoyable opening experience, but individual pack value may vary due to randomness.",
    },
    {
        question: "What condition are the cards in?",
        answer:
            "Most cards are in Near Mint to Lightly Played condition, although occasional vintage or special cards may show minor wear.",
    },
    {
        question: "Do you ship internationally?",
        answer:
            "Yes, we ship across Europe and selected international countries, with shipping options available at checkout.",
    },
    {
        question: "How fast is shipping?",
        answer:
            "Orders are typically processed within 1–3 business days, while delivery times depend on destination and shipping method.",
    }, {
        question: "How are the cards protected during shipping?",
        answer:
            "All orders are securely packed using protective materials to help ensure your cards arrive safely and in excellent condition.",
    }, {
        question: "Do you offer wholesale pricing?",
        answer:
            "Yes, we work with resellers, online stores and vending businesses, and offer bulk pricing for larger orders.",
    }, {
        question: "Can I customize my repack order?",
        answer:
            "Custom repack options may be available for wholesale or larger orders depending on quantity and availability.",
    }, {
        question: "Do you offer sample packs for evaluation?",
        answer:
            "Yes. We understand the importance of testing product quality before ordering in bulk, which is why we offer sample packs for eligible retailers and resellers upon request.",
    }, {
        question: "What is your return policy?",
        answer:
            "Customer satisfaction matters to us. If there is an issue with your order, such as damage or an incorrect item, contact our support team and we will make it right as quickly as possible.",
    }, {
        question: "Are pull rates fair?",
        answer:
            "Yes, our repacks are built with randomized distribution to provide a fair and balanced opening experience.",
    }, {
        question: "Do you include vintage or high-value cards?",
        answer:
            "Selected repacks may include vintage, premium or high-value chase cards, which will always be clearly mentioned in the product description.",
    },
];

export function FAQ() {

    const [showAll, setShowAll] = useState(false);

    const visibleFaqs = showAll ? faqs : faqs.slice(0, 7);
    return (
        <section className=" w-full py-10 md:py-12 lg:py-20 bg-background bg-black text-white" id="faq">
            <div className=" containers grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  ">
                {/* Header */}
                <div className=" mb-12 space-y-4" data-aos="zoom-in"
                    data-aos-duration="1500">
                    <div className='flex items-center md:items-start justify-center md:justify-start mx-auto'>
                        <div className="flex  gap-2 border p-2 rounded-full px-4 py-2">
                            <Image
                                src="/images/wid.png"
                                alt="icon"
                                width={24}
                                height={24}
                                className="object-contain"
                            />
                            <p className="text-white font-[Inter] text-[16px] font-medium leading-[170%] tracking-[-0.3px]">FAQ’s</p>
                        </div>
                    </div>
                    <h1 className="text-[clamp(2rem,2.5rem,4rem)] font-secondary  tracking-tight mt-2">
                        FREQUENTLY ASKED QUESTIONS
                    </h1>
                    <p className="text-[16px] font-normal leading-[170%] tracking-[-0.3px] text-white font-inter">
                        Everything you need to know about our mystery repacks, wholesale <br />
                        process and delivery
                    </p>

                </div>

                {/* Accordion FAQ Grid */}
                <div className=" bg-black" data-aos="fade-right"
                    data-aos-duration="1500">
                    <Card className=" bg-black text-white ">
                        <CardContent className=" ">
                            <Accordion type="single" collapsible className="w-full gap-6 -mt-4">
                                {visibleFaqs.map((faq, index) => (
                                    <AccordionItem
                                        key={index}
                                        value={`item-${index}`}
                                        className=" bg-[#202020] rounded-lg  "
                                    >
                                        <AccordionTrigger className="text-left flex items-center font-medium text-base md:text-lg py-4 hover:no-underline rounded-lg px-2 ">
                                            {faq.question}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-muted-foreground pb-4 text-white px-2  pt-2">
                                            {faq.answer}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                            {faqs.length > 8 && (
                                <div className="flex justify-center mt-6">
                                    <Button
                                        onClick={() => setShowAll(!showAll)}
                                        className="bg-[#FE6B02] text-white  cursor-pointer rounded-full px-6 py-5"
                                    >
                                        {showAll ? "See Less" : "See More"}
                                    </Button>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}