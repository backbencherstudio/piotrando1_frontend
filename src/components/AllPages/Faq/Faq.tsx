// app/components/FAQ.tsx

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
import React from "react";

const faqs = [
    {
        question: "What is the minimum order quantity?",
        answer:
            "Starter orders begin from 25 packs. Wholesale typically starts from 50+ packs.",
    },
    {
        question: "Do you offer sample packs?",
        answer:
            "Yes, we offer limited sample packs for qualified buyers. Contact our support team for details.",
    },
    {
        question: "Are the cards authentic?",
        answer:
            "Absolutely. All cards are 100% authentic, sourced directly from licensed distributors.",
    },
    {
        question: "What can be inside the bonus card?",
        answer:
            "Bonus cards may contain rare foils, limited editions, or exclusive promo cards. Contents vary by batch.",
    },
    {
        question: "How fast is delivery?",
        answer:
            "Standard delivery takes 5-7 business days. Express shipping (2-3 days) is available at checkout.",
    },
    {
        question: "Do you guarantee supply?",
        answer:
            "We maintain large stock levels and guarantee supply for confirmed wholesale orders.",
    },
    {
        question: "Can I resell these products?",
        answer:
            "Yes, you are free to resell. Wholesale buyers receive a resell license certificate with their first order.",
    },
    {
        question: "How are pull rates structured?",
        answer:
            "Pull rates are clearly disclosed per repack type — you can find full odds tables on each product page.",
    },
];

export function FAQ() {
    const [open, setOpen] = React.useState(false);

    const handelClick = () => {
        setOpen(!open);
    };

    const visibleFaqs = open ? faqs : faqs.slice(0, 6);
    return (
        <section className=" w-full py-10 md:py-12 lg:py-20 bg-background bg-black text-white" id="faq">
            <div className=" containers grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ">
                {/* Header */}
                <div className=" mb-12 space-y-4" data-aos="zoom-in"
                    data-aos-duration="1500">
                    <div className='flex'>
                        <div className="flex items-center gap-2 border p-2 rounded-full px-4 py-2">
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
                    <div className="flex">
                        <Button onClick={handelClick} className="mt-2 text-primary bg-[#FF8904] text-white rounded-full px-8 py-5 cursor-pointer text-base font-medium hover:bg-[#FE6B02]">
                            See All FAQs
                        </Button>
                    </div>
                </div>

                {/* Accordion FAQ Grid */}
                <div className=" bg-black" data-aos="fade-right"
                    data-aos-duration="1500">
                    <Card className=" bg-black text-white">
                        <CardContent className=" ">
                            <Accordion type="single" collapsible className="w-full gap-6 ">
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
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}