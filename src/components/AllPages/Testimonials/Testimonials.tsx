'use client'

import { useTranslation } from '@/components/hooks/useTranslation'
import Image from 'next/image'

interface TestimonialProfile {
    name: string
    role: string
    avatar: string
}



const testimonialProfiles: TestimonialProfile[] = [
    {
        name: 'Cyprian',
        role: 'Player',
        avatar: '/images/Cyprian.png',
    },
    {
        name: 'James',
        role: 'Buyer',
        avatar: '/images/james.png',
    },
    {
        name: 'Oliver',
        role: 'Operator',
        avatar: '/images/test3.png',
    },
    {
        name: 'Marek',
        role: 'Shop Owner',
        avatar: '/images/test2.png',
    },
    {
        name: 'Thomas',
        role: 'Seller',
        avatar: '/images/test1.png',
    },
    {
        name: 'Kacper',
        role: 'Seller',
        avatar: '/images/test1.png',
    },
]

interface CardProps {
    name: string
    role: string
    avatar: string
    quote: string
}

function Card({ name, role, quote, avatar }: CardProps) {
    return (
        <div className="bg-slate-50 p-5 rounded-xl border  lg:h-[250px]">
            <div className="flex items-center gap-3 h-15 md:h-[100px]">
                <Image
                    src={avatar}
                    alt={name}
                    width={40}
                    height={40}
                    className="rounded-full"
                />

                <div>
                    <h4 className="font-semibold text-lg">{name}</h4>
                    <p className="text-sm text-gray-500">{role}</p>
                </div>
            </div>

            <p className="text-sm text-gray-600">{quote}</p>
        </div>
    )
}

export default function TestimonialsSection() {
    const { t } = useTranslation()

    const testimonials = t.testimonials.quotes.map((item, index) => ({
        ...testimonialProfiles[index],
        quote: item.text,
    }))

    type TestimonialCard = {
        name: string;
        role: string;
        avatar: string;
        quote: string;
    };

    const columns: TestimonialCard[][] = [[], [], []];

    testimonials.forEach((item, index) => {
        columns[index % 3].push(item)
    })

    return (
        <section className="py-10 lg:py-20 containers overflow-y-hidden">
            <div className="text-center mb-12" data-aos="zoom-in">
                <div className="flex justify-center">
                    <div className="flex items-center gap-2 border py-2 px-4 rounded-full">
                        <Image
                            src="/images/aboutusLogo.png"
                            alt="icon"
                            width={24}
                            height={24}
                            className="object-contain"
                        />

                        <p className="font-[Inter] text-[16px] font-medium leading-[170%] tracking-[-0.3px]">
                            Testimonials
                        </p>
                    </div>
                </div>

                <p className="text-[#000] text-[clamp(2rem,3vw,3rem)] font-normal font-secondary leading-120% pt-6">
                    {t.testimonials.title}
                </p>

                <p className="text-[#393939] font-normal text-base leading-170% tracking-[0.03px] text-center xl:w-xl flex justify-center items-center mx-auto">
                    {t.testimonials.subtitle}
                </p>
            </div>

            <div
                className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6"
                data-aos="fade-up"
                data-aos-delay={100}
            >
                <div className="flex flex-col gap-3 md:gap-6">
                    {columns[0].map((item, i) => (
                        <Card key={i} {...item} />
                    ))}
                </div>

                <div className="flex flex-col gap-3 md:gap-6">
                    {columns[1].map((item, i) => (
                        <Card key={i} {...item} />
                    ))}
                </div>

                <div className="flex flex-col gap-3 md:gap-6">
                    {columns[2].map((item, i) => (
                        <Card key={i} {...item} />
                    ))}
                </div>
            </div>
        </section>
    )
}