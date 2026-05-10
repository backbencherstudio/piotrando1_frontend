'use client'

import Image from 'next/image'
import { FiArrowRight } from 'react-icons/fi'

interface Testimonial {
    name: string
    role: string
    quote: string
    avatar: string
}

const testimonials: Testimonial[] = [
    {
        name: 'Cyprian', role: 'Player',
        quote: 'l got this pack as a prize after a tournament and didn t expect much, but it turned out to be really fun to open.The bonus card made it exciting, and Id definitely get another one. —Tournament Player', avatar: '/images/Cyprian.png'
    },
    {
        name: 'James', role: 'Buyer', quote:

            'I really like how professionally the product is packaged, It looks premium on the shelf and doesnt need much explanation to sell.', avatar: '/images/james.png'
    },
    {
        name: 'Oliver', role: 'Operator', quote: 'Perfect format for vending machines. Compact, visually appealing, and performs well in terms of turnover and repeat purchases', avatar: '/images/test3.png'
    },
    {
        name: 'Marek', role: 'Shop Owner', quote: 'Perfect format for vending machines. Compact, visually appealing, and performs well in terms of turnover and repeat purchases.', avatar: '/images/test2.png'
    },
    { name: 'Thomas', role: 'Seller', quote: 'These packs sell really fast in our store. The margins are solid, and customers often come back for more after their first purchase.', avatar: '/images/test1.png' },
    {
        name: 'Kacper', role: 'Manager', quote: 'Very consistent quality and reliable supply. Its an easy product to manage and works well for scaling online sales.', avatar: '/images/item.png'
    },

]

// split into 3 columns
const columns: Testimonial[][] = [[], [], []]

testimonials.forEach((item, i) => {
    columns[i % 3].push(item)
})

function Card({ name, role, quote, avatar }: Testimonial) {
    return (
        <div className="bg-slate-50 p-5 rounded-xl border h-full lg:h-[250px] ">
            <div className="flex items-center gap-3  h-[100px] ">
                <Image src={avatar} alt={name} width={40} height={40} className="rounded-full" />
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
    return (
        <section className="py-10 lg:py-20 container">

            <div className="text-center mb-12" data-aos="zoom-in">
                <div className='flex justify-center'>
                    <div className="flex items-center gap-2 border py-2 px-4 rounded-full">
                        <Image
                            src="/images/aboutusLogo.png"
                            alt="icon"
                            width={24}
                            height={24}
                            className="object-contain"
                        />
                        <p className=" font-[Inter] text-[16px] font-medium leading-[170%] tracking-[-0.3px] ">Testimonials
                        </p>
                    </div>

                </div>
                <p className="text-[#000] text-[clamp(2rem,3vw,3rem)] font-normal font-secondary leading-120% pt-6">TRUSTED BY GROWING RETAILERS AND COLLECTORS</p>
                <p className="text-[#393939] font-normal text-base leading-170% tracking-[0.03px] text-center ">
                    From Local card shops to online sellers, businesses choose spawn drop for <br />
                    reliable stock, authentic cards, and strong resale potential
                </p>
            </div>

            {/* GRID */}
            {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6  h-[600px] overflow-hidden">


                <div className="hidden md:flex flex-col gap-6 animate-scrollDown h-[400px]">
                    {[...columns[0], ...columns[0]].map((item, i) => (
                        <Card key={i} {...item} />
                    ))}
                </div>


                <div className="flex flex-col gap-6 animate-scrollUp h-[600px]">
                    {[...columns[1], ...columns[1]].map((item, i) => (
                        <Card key={i} {...item} />
                    ))}
                </div>


                <div className="hidden md:flex flex-col gap-6 animate-scrollDown h-[400px]">
                    {[...columns[2], ...columns[2]].map((item, i) => (
                        <Card key={i} {...item} />
                    ))}
                </div>

            </div> */}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 "
                data-aos="fade-up"
                data-aos-delay={100}>

                {/* 1st COLUMN */}
                <div className="flex flex-col gap-6 ">
                    {columns[0].slice(0, 3).map((item, i) => (
                        <div
                            key={i}
                            data-aos=""
                            data-aos-delay={i * 100}

                        >
                            <Card {...item} />
                        </div>
                    ))}
                </div>

                {/* 2nd COLUMN */}
                <div className="flex flex-col gap-6">
                    {columns[1].slice(0, 3).map((item, i) => (
                        <div
                            key={i}
                            data-aos=""
                            data-aos-delay={i * 100}
                        >
                            <Card {...item} />
                        </div>
                    ))}
                </div>

                {/* 3rd COLUMN */}
                <div className="flex flex-col gap-6">
                    {columns[2].slice(0, 3).map((item, i) => (
                        <div
                            key={i}
                            data-aos=""
                            data-aos-delay={i * 100}
                        >
                            <Card {...item} />
                        </div>
                    ))}
                </div>

            </div>

            <div className='flex justify-center'>
                <button className='bg-[#FF6900] text-white px-5 py-2 rounded-full mt-7 flex gap-3 cursor-pointer'>  Show More <FiArrowRight className='mt-1' /></button>
            </div>

        </section>
    )
}