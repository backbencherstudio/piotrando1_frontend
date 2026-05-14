"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { IoArrowForwardOutline, IoClose } from "react-icons/io5";
import LineIcon from "@/components/icon/LineIcon";
import { SwitchLanguage } from "@/components/LanguegeProvider/SwitchLanguege/SwitchLanguege";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();
    const router = useRouter();
    const [activeHash, setActiveHash] = useState("");

    const isHomePage = pathname === "/";

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const updateHash = () => setActiveHash(window.location.hash);
        updateHash();
        window.addEventListener("hashchange", updateHash);
        return () => window.removeEventListener("hashchange", updateHash);
    }, []);

    const navItems = [
        { name: "Home", path: "/" },
        { name: "About us", path: "/#aboutUs" },
        { name: "Products", path: "/products" },
        { name: "Shipping", path: "/#shiping" },
        { name: "FAQ's", path: "/#faq" },
        { name: "Contact", path: "/#contact" },
    ];

    const mobileNavItems = [
        { name: "Home", path: "/" },
        { name: "About us", path: "/#aboutUs" },
        { name: "Products", path: "/products" },
        { name: "Shipping", path: "/#shiping" },
        { name: "FAQ's", path: "/#faq" },
        { name: "Contact", path: "/#contact" },
    ];

    const handleNavigation = (path: string, e?: React.MouseEvent) => {
        if (path.includes("#")) {
            const sectionId = path.split("#")[1];
            e?.preventDefault();

            if (isHomePage) {
                const section = document.getElementById(sectionId);
                if (section) {
                    const navbarHeight = 85;
                    const offset = section.getBoundingClientRect().top + window.scrollY - navbarHeight;
                    window.scrollTo({ top: offset, behavior: "smooth" });
                }
            } else {
                router.push(`/#${sectionId}`);
            }
        } else {
            if (pathname !== path) {
                router.push(path);
                setTimeout(() => {
                    window.scrollTo({ top: 0, behavior: "instant" });
                }, 50);
            }
        }
    };

    const isActive = (path: string) => {
        if (pathname === path && !path.includes("#")) return true;
        if (path.includes("#") && isHomePage) {
            const hash = `#${path.split("#")[1]}`;
            return activeHash === hash;
        }
        return false;
    };

    const shouldBeDark = !isHomePage || scrolled;
    const textColor = shouldBeDark ? "text-black" : "text-white";
    const navBg = shouldBeDark ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent";

    return (
        <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${navBg}`}>
            <div className="container py-4 flex justify-between items-center gap-6 lg:gap-10">
                <Link href="/" onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}>
                    <div className="relative w-[160px] h-[44px]">
                        <Image
                            src={shouldBeDark ? "/images/logocolor.png" : "/images/LOGO.png"}
                            alt="logo"
                            fill
                            sizes="(max-width: 768px) 160px, 160px"
                            style={{ objectFit: "contain" }}
                            priority
                        />
                    </div>
                </Link>

                <ul className="hidden lg:flex justify-between w-full items-center">
                    <div className="flex mx-auto gap-9">
                        {navItems.map((item) => (
                            <Link
                                href={item.path}
                                key={item.name}
                                scroll={false}
                                onClick={(e) => handleNavigation(item.path, e)}
                                className="text-xs xl:text-base"
                            >
                                <li
                                    className={`cursor-pointer pb-1 border-b-2 border-transparent transition-all duration-200 ${isActive(item.path)
                                        ? "text-[#FE6B02] border-[#FE6B02] font-semibold"
                                        : `${textColor} hover:text-[#FE6B02] hover:border-[#FE6B02]`
                                        }`}
                                >
                                    {item.name}
                                </li>
                            </Link>
                        ))}
                    </div>

                    <div className="flex gap-5 -mt-2">
                        {/* <SwitchLanguage /> */}
                        <div className={`flex items-center gap-2 cursor-pointer ${textColor}`}>
                            <p className="text-xs xl:text-base hover:text-[#FE6B02]">Strona glowna (EN)</p>
                            <Image src="/images/flag.png" alt="flag" width={30} height={20} />
                        </div>

                        <Link
                            href="/#contact"
                            onClick={(e) => handleNavigation("/#contact", e)}
                            className="bg-[#FE6B02] flex items-center gap-2 py-2 pl-6 pr-2 rounded-3xl hover:bg-[#e05a00] transition-colors text-white"
                        >
                            Get Quotes
                            <div className="rounded-full p-2 bg-white">
                                <IoArrowForwardOutline className="text-black" />
                            </div>
                        </Link>
                    </div>
                </ul>

                <button
                    className="lg:hidden text-3xl bg-[#343434] rounded-full p-3 text-white"
                    onClick={() => setOpen(true)}
                >
                    <LineIcon />
                </button>
            </div>

            <div className={`fixed top-0 left-0 w-full h-screen bg-[#F5F5F5] text-black z-50 transform transition-transform duration-300 ${open ? "translate-x-0" : "-translate-x-full"}`}>
                <div className="flex justify-between items-center p-4">
                    <Link href="/" onClick={() => setOpen(false)}>
                        <div className="relative w-[140px] h-[40px]">
                            <Image src="/images/logocolor.png" alt="logo" fill sizes="140px" style={{ objectFit: "contain" }} />
                        </div>
                    </Link>
                    <button onClick={() => setOpen(false)} className="text-3xl">
                        <IoClose />
                    </button>
                </div>

                <ul className="flex flex-col gap-6 px-6 mt-6 text-lg">
                    {mobileNavItems.map((item) => (
                        <Link
                            href={item.path}
                            key={item.name}
                            onClick={(e) => {
                                setOpen(false);
                                handleNavigation(item.path, e);
                            }}
                        >
                            <li className={`cursor-pointer ${isActive(item.path) ? "text-[#FE6B02] font-semibold" : ""}`}>
                                {item.name}
                            </li>
                        </Link>
                    ))}
                </ul>

                <div className="absolute bottom-10 w-full px-6">
                    <Link
                        href="/#contact"
                        onClick={(e) => {
                            setOpen(false);
                            handleNavigation("/#contact", e);
                        }}
                        className="w-full bg-[#FE6B02] flex items-center justify-between py-3 pl-6 pr-2 rounded-3xl text-white hover:bg-[#e05a00]"
                    >
                        Get Quotes
                        <div className="bg-white rounded-full p-2">
                            <IoArrowForwardOutline className="text-black" />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
// "use client";

// import CountrySelect from "@/app/flag/page";
// import LineIcon from "@/components/icon/LineIcon";
// import { SwitchLanguage } from "@/components/LanguegeProvider/SwitchLanguege/SwitchLanguege";
// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useEffect, useState } from "react";
// import { CountryDropdown } from "react-country-region-selector";
// import { IoArrowForwardOutline, IoMenu, IoClose } from "react-icons/io5";
// import { MdOutlineShoppingBag } from "react-icons/md";
// import PhoneInput from "react-phone-number-input";
// import "react-phone-number-input/style.css";

// export default function Navbar() {
//     const [open, setOpen] = useState(false);
//     const [country, setCountry] = useState("");


//     const [scrolled, setScrolled] = useState(false);
//     const pathname = usePathname();

//     useEffect(() => {
//         const handleScroll = () => {
//             setScrolled(window.scrollY > 50);
//         };

//         window.addEventListener("scroll", handleScroll);

//         return () => window.removeEventListener("scroll", handleScroll);
//     }, []);

//     const [activeHash, setActiveHash] = useState("");

// useEffect(() => {
//   const updateHash = () => {
//     setActiveHash(window.location.hash);
//   };

//   updateHash();
//   window.addEventListener("hashchange", updateHash);

//   return () => window.removeEventListener("hashchange", updateHash);
// }, []);

// const getNavClass = (path: string) => {
//   const isActive = pathname === path || activeHash === path.replace("/", "");

//   if (isActive) return "text-[#FE6B02] font-semibold";

//   return scrolled || !isHomePage
//     ? "text-black hover:text-[#FE6B02]"
//     : "text-white hover:text-[#FE6B02]";
// };

//     const isHomePage = pathname === "/";

//     const navItems = [
//         { name: "Home", path: "/" },

//         { name: "About us", path: "/aboutUs" },
//         { name: "Products", path: "/products" },
//         // { name: "Cards", path: "/cards" },
//         // { name: "Shipping", path: "#" },
//         // { name: "FAQ's", path: "/faq" },
//         // { name: "Contact", path: "/getInTouch" },
//     ];

//     const mobileNavItems = [
//         { name: "Home", path: "/" },

//         { name: "About us", path: "/aboutUs" },
//         { name: "Products", path: "/products" },
//         // { name: "Cards", path: "/cards" },
//         // { name: "Shipping", path: "#" },
//         // { name: "Contact", path: "/getInTouch" },

//     ];

//     return (
//         <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/80 backdrop-blur-md text-black" : "bg-transparent text-black"
//             }`}>
//             <div className="container  text-white py-4 flex justify-between  items-center gap-6 lg:gap-10  ">


//                 <Link href="/">
//                     <div style={{ position: "relative", width: "160px", height: "44px" }}>
//                         <Image
//                             src={scrolled || !isHomePage ? "/images/logocolor.png" : "/images/LOGO.png"}
//                             alt="logo"
//                             fill
//                             sizes="(max-width: 768px) 160px, 160px"
//                             style={{ objectFit: "contain" }}
//                         />
//                     </div>
//                 </Link>


//                 <ul className="hidden lg:flex justify-between w-full   items-center ">
//                     {navItems.map((item) => (
//                         <Link href={item.path} key={item.name} className="flex justify-between text-xs xl:text-base ">
//                             <li className={`cursor-pointer transition-colors duration-200 ${pathname === item.path
//                                 ? "text-[#FE6B02]  border-[#FE6B02] "
//                                 : scrolled || !isHomePage ? "text-black hover:text-[#FE6B02]" : "text-white hover:text-[#FE6B02]"
//                                 }`}>
//                                 {item.name}
//                             </li>
//                         </Link>
//                     ))}

//                     <a
//   href="/#shiping"
//   className={`flex justify-between text-xs xl:text-base -mt-2 ${
//     scrolled || !isHomePage
//       ? "text-black hover:text-[#FE6B02]"
//       : "text-white hover:text-[#FE6B02]"
//   }`}
// >
//   <p className="lg:mt-3 xl:mt-2 text-xs xl:text-base">Shipping</p>
// </a>

//                     <a
//   href="/#contact"
//   className={`flex gap-3 cursor-pointer transition-colors duration-200 -mt-2 ${
//     scrolled || !isHomePage
//       ? "text-black hover:text-[#FE6B02]"
//       : "text-white hover:text-[#FE6B02]"
//   }`}
// >
//   <p className="lg:mt-3 xl:mt-2 text-xs xl:text-base">Contact</p>
// </a>
// <a
//   href="/#faq"
//   className={`flex gap-3 cursor-pointer transition-colors duration-200 -mt-2 ${
//     scrolled || !isHomePage
//       ? "text-black hover:text-[#FE6B02]"
//       : "text-white hover:text-[#FE6B02]"
//   }`}
// >
//   <p className="lg:mt-3 xl:mt-2 text-xs xl:text-base">Faq</p>
// </a>
//                     <div className={` flex   gap-3 cursor-pointer transition-colors duration-200  ${scrolled || !isHomePage ? "text-black hover:text-[#FE6B02]" : "text-white hover:text-[#FE6B02]"
//                         }`}>
//                         <Image src="/images/flag.png" alt="flag" width={30} height={20} className="py-3" /> <p className="lg:mt-3 xl:mt-2 text-xs xl:text-base"> (EN) </p>
//                     </div>

//                     {/* <div>
//                         <SwitchLanguage />
//                     </div> */}

//                     {/* <div>
//                         <CountrySelect defaultValue="EG" />
//                     </div> */}
//                     {/* <MdOutlineShoppingBag
//                         className={`text-2xl cursor-pointer transition-colors duration-200 ${scrolled || !isHomePage ? "text-black hover:text-[#FE6B02]" : "text-white hover:text-[#FE6B02]"
//                             }`}
//                     /> */}

//                     <a href="/#contact" className="bg-[#FE6B02] flex items-center gap-2 py-2 pl-6 pr-2 rounded-3xl hover:bg-[#e05a00] transition-colors">
//                         Get Quotes
//                         <div className="rounded-full p-2 bg-white">
//                             <IoArrowForwardOutline className="text-black" />
//                         </div>
//                     </a>

//                 </ul>


//                 <button
//                     className="lg:hidden text-3xl bg-[#343434] rounded-full p-3 "
//                     onClick={() => setOpen(true)}
//                 >
//                     <LineIcon />
//                 </button>
//             </div>

//             {/* MOBILE DRAWER */}
//             <div
//                 className={`fixed top-0 left-0 w-full h-screen bg-[#F5F5F5] text-black z-50 transform transition-transform duration-300  ${open ? "translate-x-0" : "-translate-x-full"
//                     }`
//                 }
//             >
//                 {/* HEADER */}
//                 <div className="flex justify-between items-center p-4 ">
//                     <Link href="/" onClick={() => setOpen(false)}>
//                         <div style={{ position: "relative", width: "140px", height: "40px" }}>
//                             <Image
//                                 src="/images/logocolor.png"
//                                 alt="logo"
//                                 fill
//                                 sizes="140px"
//                                 style={{ objectFit: "contain" }}
//                             />
//                         </div>
//                     </Link>

//                     <button onClick={() => setOpen(false)} className="text-2xl">
//                         <IoClose />
//                     </button>
//                 </div>

//                 {/* MENU ITEMS */}
//                 <ul className="flex flex-col gap-6 px-6 mt-6 text-lg ">
//                     {mobileNavItems.map((item) => (
//                         <Link href={item.path} key={item.name} onClick={() => setOpen(false)}>
//                             <li className={`cursor-pointer transition-colors duration-200 ${pathname === item.path
//                                 ? "text-[#FE6B02] font-semibold"
//                                 : "hover:text-[#FE6B02]"
//                                 }`}>
//                                 {item.name}
//                             </li>
//                         </Link>
//                     ))}

//                     <div className="flex gap-2">
//                         <p className="mt-3"> Strona glowna (EN) </p>   <Image src="/images/flag.png" alt="flag" width={40} height={20} className="py-3" />
//                     </div>

//                     {/* <div>
//                         <CountrySelect defaultValue="EG" />
//                     </div> */}
//                     {/* <MdOutlineShoppingBag

//                     /> */}
//                 </ul>



//                 {/* <div>
//                         <CountrySelect defaultValue="EG" />
//                     </div> */}

//                 {/* BUTTON */}
//                 <div className="absolute bottom-10 w-full px-6">
//                     <button className="w-full bg-[#FE6B02] flex items-center justify-between py-3 pl-6 pr-2 rounded-3xl text-white hover:bg-[#e05a00] transition-colors">
//                         Get Quotes
//                         <div className="bg-white rounded-full p-2">
//                             <IoArrowForwardOutline className="text-black" />
//                         </div>
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// }