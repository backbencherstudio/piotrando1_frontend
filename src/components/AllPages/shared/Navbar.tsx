"use client";

import CountrySelect from "@/app/flag/page";
import LineIcon from "@/components/icon/LineIcon";
import { SwitchLanguage } from "@/components/LanguegeProvider/SwitchLanguege/SwitchLanguege";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CountryDropdown } from "react-country-region-selector";
import { IoArrowForwardOutline, IoMenu, IoClose } from "react-icons/io5";
import { MdOutlineShoppingBag } from "react-icons/md";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [country, setCountry] = useState("");


    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const [activeHash, setActiveHash] = useState("");

useEffect(() => {
  const updateHash = () => {
    setActiveHash(window.location.hash);
  };

  updateHash();
  window.addEventListener("hashchange", updateHash);

  return () => window.removeEventListener("hashchange", updateHash);
}, []);

const getNavClass = (path: string) => {
  const isActive = pathname === path || activeHash === path.replace("/", "");

  if (isActive) return "text-[#FE6B02] font-semibold";

  return scrolled || !isHomePage
    ? "text-black hover:text-[#FE6B02]"
    : "text-white hover:text-[#FE6B02]";
};

    const isHomePage = pathname === "/";

    const navItems = [
        { name: "Home", path: "/" },

        { name: "About us", path: "/aboutUs" },
        { name: "Products", path: "/products" },
        // { name: "Cards", path: "/cards" },
        // { name: "Shipping", path: "#" },
        // { name: "FAQ's", path: "/faq" },
        // { name: "Contact", path: "/getInTouch" },
    ];

    const mobileNavItems = [
        { name: "Home", path: "/" },

        { name: "About us", path: "/aboutUs" },
        { name: "Products", path: "/products" },
        // { name: "Cards", path: "/cards" },
        // { name: "Shipping", path: "#" },
        // { name: "Contact", path: "/getInTouch" },

    ];

    return (
        <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/80 backdrop-blur-md text-black" : "bg-transparent text-black"
            }`}>
            <div className="container  text-white py-4 flex justify-between  items-center gap-6 lg:gap-10  ">


                <Link href="/">
                    <div style={{ position: "relative", width: "160px", height: "44px" }}>
                        <Image
                            src={scrolled || !isHomePage ? "/images/logocolor.png" : "/images/LOGO.png"}
                            alt="logo"
                            fill
                            sizes="(max-width: 768px) 160px, 160px"
                            style={{ objectFit: "contain" }}
                        />
                    </div>
                </Link>


                <ul className="hidden lg:flex justify-between w-full   items-center ">
                    {navItems.map((item) => (
                        <Link href={item.path} key={item.name} className="flex justify-between text-xs xl:text-base ">
                            <li className={`cursor-pointer transition-colors duration-200 ${pathname === item.path
                                ? "text-[#FE6B02]  border-[#FE6B02] "
                                : scrolled || !isHomePage ? "text-black hover:text-[#FE6B02]" : "text-white hover:text-[#FE6B02]"
                                }`}>
                                {item.name}
                            </li>
                        </Link>
                    ))}

                    <a
  href="/#shiping"
  className={`flex justify-between text-xs xl:text-base -mt-2 ${
    scrolled || !isHomePage
      ? "text-black hover:text-[#FE6B02]"
      : "text-white hover:text-[#FE6B02]"
  }`}
>
  <p className="lg:mt-3 xl:mt-2 text-xs xl:text-base">Shipping</p>
</a>

                    <a
  href="/#contact"
  className={`flex gap-3 cursor-pointer transition-colors duration-200 -mt-2 ${
    scrolled || !isHomePage
      ? "text-black hover:text-[#FE6B02]"
      : "text-white hover:text-[#FE6B02]"
  }`}
>
  <p className="lg:mt-3 xl:mt-2 text-xs xl:text-base">Contact</p>
</a>
<a
  href="/#faq"
  className={`flex gap-3 cursor-pointer transition-colors duration-200 -mt-2 ${
    scrolled || !isHomePage
      ? "text-black hover:text-[#FE6B02]"
      : "text-white hover:text-[#FE6B02]"
  }`}
>
  <p className="lg:mt-3 xl:mt-2 text-xs xl:text-base">Faq</p>
</a>
                    <div className={` flex   gap-3 cursor-pointer transition-colors duration-200  ${scrolled || !isHomePage ? "text-black hover:text-[#FE6B02]" : "text-white hover:text-[#FE6B02]"
                        }`}>
                        <p className="lg:mt-3 xl:mt-2 text-xs xl:text-base"> Strona glowna (EN) </p>   <Image src="/images/flag.png" alt="flag" width={30} height={20} className="py-3" />
                    </div>

                    {/* <div>
                        <SwitchLanguage />
                    </div> */}

                    {/* <div>
                        <CountrySelect defaultValue="EG" />
                    </div> */}
                    {/* <MdOutlineShoppingBag
                        className={`text-2xl cursor-pointer transition-colors duration-200 ${scrolled || !isHomePage ? "text-black hover:text-[#FE6B02]" : "text-white hover:text-[#FE6B02]"
                            }`}
                    /> */}

                    <button className="bg-[#FE6B02] flex items-center gap-2 py-2 pl-6 pr-2 rounded-3xl hover:bg-[#e05a00] transition-colors">
                        Get Quotes
                        <div className="rounded-full p-2 bg-white">
                            <IoArrowForwardOutline className="text-black" />
                        </div>
                    </button>

                </ul>


                <button
                    className="lg:hidden text-3xl bg-[#343434] rounded-full p-3 "
                    onClick={() => setOpen(true)}
                >
                    <LineIcon />
                </button>
            </div>

            {/* MOBILE DRAWER */}
            <div
                className={`fixed top-0 left-0 w-full h-screen bg-[#F5F5F5] text-black z-50 transform transition-transform duration-300  ${open ? "translate-x-0" : "-translate-x-full"
                    }`
                }
            >
                {/* HEADER */}
                <div className="flex justify-between items-center p-4 ">
                    <Link href="/" onClick={() => setOpen(false)}>
                        <div style={{ position: "relative", width: "140px", height: "40px" }}>
                            <Image
                                src="/images/logocolor.png"
                                alt="logo"
                                fill
                                sizes="140px"
                                style={{ objectFit: "contain" }}
                            />
                        </div>
                    </Link>

                    <button onClick={() => setOpen(false)} className="text-2xl">
                        <IoClose />
                    </button>
                </div>

                {/* MENU ITEMS */}
                <ul className="flex flex-col gap-6 px-6 mt-6 text-lg ">
                    {mobileNavItems.map((item) => (
                        <Link href={item.path} key={item.name} onClick={() => setOpen(false)}>
                            <li className={`cursor-pointer transition-colors duration-200 ${pathname === item.path
                                ? "text-[#FE6B02] font-semibold"
                                : "hover:text-[#FE6B02]"
                                }`}>
                                {item.name}
                            </li>
                        </Link>
                    ))}

                    <div className="flex gap-2">
                        <p className="mt-3"> Strona glowna (EN) </p>   <Image src="/images/flag.png" alt="flag" width={40} height={20} className="py-3" />
                    </div>

                    {/* <div>
                        <CountrySelect defaultValue="EG" />
                    </div> */}
                    {/* <MdOutlineShoppingBag

                    /> */}
                </ul>



                {/* <div>
                        <CountrySelect defaultValue="EG" />
                    </div> */}

                {/* BUTTON */}
                <div className="absolute bottom-10 w-full px-6">
                    <button className="w-full bg-[#FE6B02] flex items-center justify-between py-3 pl-6 pr-2 rounded-3xl text-white hover:bg-[#e05a00] transition-colors">
                        Get Quotes
                        <div className="bg-white rounded-full p-2">
                            <IoArrowForwardOutline className="text-black" />
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
}