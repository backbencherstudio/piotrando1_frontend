"use client";

import LineIcon from "@/components/icon/LineIcon";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoArrowForwardOutline, IoMenu, IoClose } from "react-icons/io5";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <div className="bg-black text-white sticky top-0 z-50 ">
            <div className="container bg-black text-white py-4 flex gap-25 justify-between items-center">

                {/* LOGO */}
                <Image src="/images/LOGO.png" alt="logo" height={44} width={160} />

                {/* DESKTOP MENU */}
                <ul className="hidden lg:flex gap-4 items-center">
                    <li>About us</li>
                    <Link href="/products" ><li>Products</li></Link>
                    <li> Cards</li>
                    <Link href="/shipping" ><li>Shipping</li></Link>
                    <li>FAQ’s</li>
                    <Link href="/getInTouch" ><li>Contact</li></Link>


                    <Image
                        src="/images/shopping-basket-01.png"
                        alt="cart"
                        width={24}
                        height={24}
                    />

                    <button className="bg-[#FE6B02] flex items-center gap-2 py-2 pl-6 pr-2 rounded-3xl">
                        Get Quotes
                        <div className="rounded-full p-2 bg-white">
                            <IoArrowForwardOutline className="text-black" />
                        </div>
                    </button>

                </ul>

                {/* MOBILE MENU BUTTON */}
                <button
                    className="lg:hidden text-3xl bg-[#343434] rounded-full p-3"
                    onClick={() => setOpen(true)}
                >
                    <LineIcon />
                </button>
            </div >

            {/* MOBILE DRAWER */}
            < div
                className={`fixed top-0 left-0 w-full h-screen bg-[#F5F5F5] text-black z-50 transform transition-transform duration-300 ${open ? "translate-x-0" : "-translate-x-full"
                    }`
                }
            >
                {/* HEADER */}
                < div className="flex justify-between items-center p-4" >
                    <Image src="/images/logocolor.png" alt="logo" width={140} height={40} />

                    <button onClick={() => setOpen(false)} className="text-2xl">
                        <IoClose />
                    </button>
                </div >

                {/* MENU ITEMS */}
                < ul className="flex flex-col gap-6 px-6 mt-6 text-lg" >
                    <li>About us</li>
                    <li>Products</li>
                    <li>Cards</li>
                    <li>Shipping</li>
                    <li>Contact</li>
                    <li>View Cart</li>
                </ul >

                {/* BUTTON */}
                < div className="absolute bottom-10 w-full px-6" >
                    <button className="w-full bg-[#FE6B02] flex items-center justify-between py-3 pl-6 pr-2 rounded-3xl text-white">
                        Get Quotes
                        <div className="bg-white rounded-full p-2">
                            <IoArrowForwardOutline className="text-black" />
                        </div>
                    </button>
                </div >
            </div >
        </div >
    );
}