// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import { usePathname, useRouter } from "next/navigation";
// import { useEffect, useState } from "react";
// import { IoArrowForwardOutline, IoClose } from "react-icons/io5";
// import LineIcon from "@/components/icon/LineIcon";
// import { SwitchLanguage } from "@/components/LanguegeProvider/SwitchLanguege/SwitchLanguege";

// export default function Navbar() {
//     const [open, setOpen] = useState(false);
//     const [scrolled, setScrolled] = useState(false);
//     const pathname = usePathname();
//     const router = useRouter();
//     const [activeHash, setActiveHash] = useState("");

//     const isHomePage = pathname === "/";

//     useEffect(() => {
//         const handleScroll = () => setScrolled(window.scrollY > 50);
//         handleScroll();
//         window.addEventListener("scroll", handleScroll);
//         return () => window.removeEventListener("scroll", handleScroll);
//     }, []);

//     useEffect(() => {
//         const updateHash = () => setActiveHash(window.location.hash);
//         updateHash();
//         window.addEventListener("hashchange", updateHash);
//         return () => window.removeEventListener("hashchange", updateHash);
//     }, []);

//     const navItems = [
//         { name: "Home", path: "/" },
//         { name: "About us", path: "/#aboutUs" },
//         { name: "Products", path: "/products" },
//         { name: "Shipping", path: "/#shiping" },
//         { name: "FAQs", path: "/#faq" },
//         { name: "Contact", path: "/#contact" },
//     ];

//     const mobileNavItems = [
//         { name: "Home", path: "/" },
//         { name: "About us", path: "/#aboutUs" },
//         { name: "Products", path: "/products" },
//         { name: "Shipping", path: "/#shiping" },
//         { name: "FAQs", path: "/#faq" },
//         { name: "Contact", path: "/#contact" },
//     ];

//     // const handleNavigation = (path: string, e?: React.MouseEvent) => {
//     //     if (path.includes("#")) {
//     //         const sectionId = path.split("#")[1];
//     //         e?.preventDefault();

//     //         if (isHomePage) {
//     //             const section = document.getElementById(sectionId);
//     //             if (section) {
//     //                 const navbarHeight = 85;
//     //                 const offset = section.getBoundingClientRect().top + window.scrollY - navbarHeight;
//     //                 window.scrollTo({ top: offset, behavior: "smooth" });
//     //             }
//     //         } else {
//     //             router.push(`/#${sectionId}`);
//     //         }
//     //     } else {
//     //         if (pathname !== path) {
//     //             router.push(path);
//     //             setTimeout(() => {
//     //                 window.scrollTo({ top: 0, behavior: "instant" });
//     //             }, 50);
//     //         }
//     //     }
//     // };


//     const handleNavigation = (path: string, e?: React.MouseEvent) => {


//         if (path === "/" && isHomePage) {
//             e?.preventDefault();

//             window.scrollTo({
//                 top: 0,
//                 behavior: "smooth",
//             });

//             return;
//         }

//         if (path.includes("#")) {
//             const sectionId = path.split("#")[1];
//             e?.preventDefault();

//             if (isHomePage) {
//                 const section = document.getElementById(sectionId);

//                 if (section) {
//                     const navbarHeight = 85;

//                     const offset =
//                         section.getBoundingClientRect().top +
//                         window.scrollY -
//                         navbarHeight;

//                     window.scrollTo({
//                         top: offset,
//                         behavior: "smooth",
//                     });
//                 }
//             } else {
//                 router.push(`/#${sectionId}`);
//             }
//         } else {
//             if (pathname !== path) {
//                 router.push(path);

//                 setTimeout(() => {
//                     window.scrollTo({
//                         top: 0,
//                         behavior: "instant",
//                     });
//                 }, 50);
//             }
//         }
//     };
//     const isActive = (path: string) => {
//         if (pathname === path && !path.includes("#")) return true;
//         if (path.includes("#") && isHomePage) {
//             const hash = `#${path.split("#")[1]}`;
//             return activeHash === hash;
//         }
//         return false;
//     };

//     const shouldBeDark = !isHomePage || scrolled;
//     const textColor = shouldBeDark ? "text-black" : "text-white";
//     const navBg = shouldBeDark ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent";

//     return (
//         <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${navBg}`}>
//             <div className="containers py-4 flex justify-between items-center gap-6 lg:gap-10">
//                 <Link href="/" onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}>
//                     <div className="relative w-[160px] h-[44px]">
//                         <Image
//                             src={shouldBeDark ? "/images/logocolor.png" : "/images/LOGO.png"}
//                             alt="logo"
//                             fill
//                             sizes="(max-width: 768px) 160px, 160px"
//                             style={{ objectFit: "contain" }}
//                             priority
//                         />
//                     </div>
//                 </Link>

//                 <ul className="hidden lg:flex justify-between w-full items-center">
//                     <div className="flex mx-auto gap-9">
//                         {navItems?.map((item) => (
//                             <Link
//                                 href={item?.path}
//                                 key={item?.name}
//                                 scroll={false}
//                                 onClick={(e) => handleNavigation(item?.path, e)}
//                                 className="text-xs xl:text-base"
//                             >
//                                 <li
//                                     className={`cursor-pointer pb-1 border-b-2 border-transparent transition-all duration-200 ${isActive(item.path)
//                                         ? "text-[#FE6B02] border-[#FE6B02] font-semibold"
//                                         : `${textColor} hover:text-[#FE6B02] hover:border-[#FE6B02]`
//                                         }`}
//                                 >
//                                     {item.name}
//                                 </li>
//                             </Link>
//                         ))}
//                     </div>

//                     <div className="flex gap-5 -mt-2 ml-4">
//                         {/* <SwitchLanguage /> */}
//                         <div className={`flex items-center gap-2 cursor-pointer ${textColor}`}>
//                             {/* <p className="text-xs xl:text-base hover:text-[#FE6B02]">Strona glowna (EN)</p> */}
//                             {/* <Image src="/images/flag.png" alt="flag" width={30} height={20} /> */}
//                         </div>

//                         <Link
//                             href="/#contact"
//                             onClick={(e) => handleNavigation("/#contact", e)}
//                             className="bg-[#FE6B02] flex items-center gap-2 py-2 pl-6 pr-2 rounded-3xl hover:bg-[#e05a00] transition-colors text-white"
//                         >
//                             Get Quotes
//                             <div className="rounded-full p-2 bg-white">
//                                 <IoArrowForwardOutline className="text-black" />
//                             </div>
//                         </Link>
//                     </div>
//                 </ul>

//                 <button
//                     className="lg:hidden text-3xl bg-[#343434] rounded-full p-3 text-white"
//                     onClick={() => setOpen(true)}
//                 >
//                     <LineIcon />
//                 </button>
//             </div>

//             <div className={`fixed top-0 left-0 w-full h-screen overflow-y-auto bg-[#F5F5F5] text-black z-50 transform transition-transform duration-300 ${open ? "translate-x-0" : "-translate-x-full"}`}>
//                 <div className="flex justify-between items-center p-4">
//                     <Link href="/" onClick={() => setOpen(false)}>
//                         <div className="relative w-[140px] h-[40px]">
//                             <Image src="/images/logocolor.png" alt="logo" fill sizes="140px" style={{ objectFit: "contain" }} />
//                         </div>
//                     </Link>
//                     <button onClick={() => setOpen(false)} className="text-3xl">
//                         <IoClose />
//                     </button>
//                 </div>

//                 <ul className="flex flex-col gap-3 md:gap-6 px-6 mt-6 text-lg ">
//                     {mobileNavItems.map((item) => (
//                         <Link
//                             href={item.path}
//                             key={item.name}
//                             onClick={(e) => {
//                                 setOpen(false);
//                                 handleNavigation(item.path, e);
//                             }}
//                         >
//                             <li className={`cursor-pointer ${isActive(item.path) ? "text-[#FE6B02] font-semibold" : ""}`}>
//                                 {item.name}
//                             </li>
//                         </Link>
//                     ))}

//                     {/* <SwitchLanguage onSelect={() => setOpen(false)} /> */}
//                 </ul>

//                 <div className="absolute bottom-10 w-full px-6 z-100">
//                     <Link
//                         href="/#contact"
//                         onClick={(e) => {
//                             setOpen(false);
//                             handleNavigation("/#contact", e);
//                         }}
//                         className="w-full bg-[#FE6B02] flex items-center justify-between py-3 pl-6 pr-2 rounded-3xl text-white hover:bg-[#e05a00]"
//                     >
//                         Get Quotes
//                         <div className="bg-white rounded-full p-2">
//                             <IoArrowForwardOutline className="text-black" />
//                         </div>
//                     </Link>
//                 </div>
//             </div>
//         </div>
//     );
// }






"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { IoArrowForwardOutline, IoClose } from "react-icons/io5";
import LineIcon from "@/components/icon/LineIcon";
import { Locale, useTranslation } from "@/components/hooks/useTranslation";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { t, locale, changeLanguage } = useTranslation();
    const pathname = usePathname();
    const router = useRouter();
    const [activeHash, setActiveHash] = useState("");
    const [isLangOpen, setIsLangOpen] = useState(false);
    const [isMobileLangOpen, setIsMobileLangOpen] = useState(false);

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
        { name: t.nav.home, path: "/" },
        { name: t.nav.about, path: "/#aboutUs" },
        { name: t.nav.products, path: "/products" },
        { name: t.nav.shipping, path: "/#shiping" },
        { name: t.nav.faqs, path: "/#faq" },
        { name: t.nav.contact, path: "/#contact" },
    ];

    const mobileNavItems = [
        { name: t.nav.home, path: "/" },
        { name: t.nav.about, path: "/#aboutUs" },
        { name: t.nav.products, path: "/products" },
        { name: t.nav.shipping, path: "/#shiping" },
        { name: t.nav.faqs, path: "/#faq" },
        { name: t.nav.contact, path: "/#contact" },
    ];

    const handleNavigation = (path: string, e?: React.MouseEvent) => {
        if (path === "/" && isHomePage) {
            e?.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
            return;
        }

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
                setTimeout(() => window.scrollTo({ top: 0, behavior: "instant" }), 50);
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

    const languages = [
        { code: 'en', name: 'English', flag: '/images/flag.png' },
        { code: 'de', name: 'Deutsch', flag: '/images/germany (1).png' },
        { code: 'fr', name: 'Français', flag: '/images/france.png' },
        { code: 'pl', name: 'Polski', flag: '/images/poland.png' },
    ];



    return (
        <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${navBg}`}>
            <div className="containers py-4 flex justify-between items-center gap-6 lg:gap-10">
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
                    <div className="flex mx-auto lg:gap-6 text-nowrap xl:gap-9">
                        {navItems?.map((item) => (
                            <Link
                                href={item?.path}
                                key={item?.name}
                                scroll={false}
                                onClick={(e) => handleNavigation(item?.path, e)}
                                className="text-xs xl:text-base"
                            >
                                <li suppressHydrationWarning className={`cursor-pointer pb-1 border-b-2 border-transparent transition-all duration-200 ${isActive(item.path)
                                    ? "text-[#FE6B02] border-[#FE6B02] font-semibold"
                                    : `${textColor} hover:text-[#FE6B02] hover:border-[#FE6B02]`
                                    }`}
                                >
                                    {item.name}
                                </li>
                            </Link>
                        ))}
                    </div>

                    <div className="flex gap-5 -mt-2 ml-4">
                        {/* Language Dropdown */}
                        <div className="relative mt-4 ">
                            <button
                                onClick={() => setIsLangOpen(!isLangOpen)}
                                className={`flex items-center gap-2 px-3 py-1.5 border rounded-lg border-gray-300   transition-all duration-200 ${textColor} hover:bg-gray-100 hover:text-black`}
                            >
                                <Image
                                    src={languages.find(l => l.code === locale)?.flag || "/images/flag.png"}
                                    alt="flag"
                                    width={25}
                                    height={20}
                                />
                                <span className="text-sm font-medium">{languages.find(l => l.code === locale)?.code}</span>
                                <svg className={`w-4 h-4 transition-transform ${isLangOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {isLangOpen && (
                                <div className="absolute right-0 mt-2 w-44 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden z-50 p">
                                    {languages.map((lang) => (
                                        <button
                                            key={lang.code}
                                            onClick={() => {
                                                changeLanguage(lang.code as Locale);
                                                setIsLangOpen(false);
                                            }}
                                            className={`w-full flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 transition-colors ${locale === lang.code ? 'bg-orange-50 text-[#FE6B02]' : 'text-gray-700'
                                                }`}
                                        >
                                            <Image
                                                src={lang.flag}
                                                alt={lang.name}
                                                width={20}
                                                height={20}
                                            />
                                            <span className="text-sm">{lang.name}</span>
                                            {locale === lang.code && (
                                                <svg className="w-4 h-4 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                            )}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        <Link
                            href="/#contact"
                            onClick={(e) => handleNavigation("/#contact", e)}
                            className="bg-[#FE6B02] flex items-center gap-2 py-2 pl-6 pr-2 rounded-3xl hover:bg-[#e05a00] transition-colors text-white mt-3"
                        >
                            {t.nav.getQuotes}
                            <div className="rounded-full p-2 bg-white ">
                                <IoArrowForwardOutline className="text-black" />
                            </div>
                        </Link>
                    </div>
                </ul>

                <button className="lg:hidden text-3xl bg-[#343434] rounded-full p-3 text-white" onClick={() => setOpen(true)}>
                    <LineIcon />
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`fixed top-0 left-0 w-full h-screen overflow-y-auto bg-[#F5F5F5] text-black z-50 transform transition-transform duration-300 ${open ? "translate-x-0" : "-translate-x-full"}`}>
                <div className="flex justify-between items-center p-4">
                    <Link href="/" onClick={() => setOpen(false)}>
                        <div className="relative w-[140px] h-[40px]">
                            <Image src="/images/logocolor.png" alt="logo" fill sizes="140px" style={{ objectFit: "contain" }} />
                        </div>
                    </Link>
                    <button onClick={() => setOpen(false)} className="text-3xl"><IoClose /></button>
                </div>

                <ul className="flex flex-col gap-3 md:gap-6 px-6 mt-6 text-lg ">
                    {mobileNavItems.map((item) => (
                        <Link
                            href={item.path}
                            key={item.name}
                            onClick={(e) => { setOpen(false); handleNavigation(item.path, e); }}
                        >
                            <li className={`cursor-pointer ${isActive(item.path) ? "text-[#FE6B02] font-semibold" : ""}`}>
                                {item.name}
                            </li>
                        </Link>
                    ))}

                    {/* Mobile Language Selector */}
                    {/* Mobile Language Selector */}
                    <div className=" pt-4 ">

                        <div className="relative">
                            <button
                                onClick={() => setIsMobileLangOpen(!isMobileLangOpen)}
                                className="w-full flex items-center justify-between px-4  py-3 bg-white border border-gray-300 rounded-lg"
                            >
                                <div className="flex items-center gap-2">
                                    <Image
                                        src={
                                            languages.find((l) => l.code === locale)?.flag ||
                                            "/images/flag.png"
                                        }
                                        alt="flag"
                                        width={20}
                                        height={20}
                                    />
                                    <span>
                                        {languages.find((l) => l.code === locale)?.name}
                                    </span>
                                </div>

                                <svg
                                    className={`w-4 h-4 transition-transform ${isMobileLangOpen ? "rotate-180" : ""
                                        }`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </button>

                            {isMobileLangOpen && (
                                <div className="absolute left-0 right-0 mt-2 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden z-50">
                                    {languages.map((lang) => (
                                        <button
                                            key={lang.code}
                                            onClick={() => {
                                                changeLanguage(lang.code as Locale);
                                                setIsMobileLangOpen(false);
                                                setOpen(false);
                                            }}
                                            className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors ${locale === lang.code
                                                ? "bg-orange-50 text-[#FE6B02]"
                                                : "text-gray-700"
                                                }`}
                                        >
                                            <Image
                                                src={lang.flag}
                                                alt={lang.name}
                                                width={20}
                                                height={20}
                                            />

                                            <span>{lang.name}</span>

                                            {locale === lang.code && (
                                                <svg
                                                    className="w-4 h-4 ml-auto"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M5 13l4 4L19 7"
                                                    />
                                                </svg>
                                            )}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </ul>

                <div className="absolute bottom-10 w-full px-6">
                    <Link
                        href="/#contact"
                        onClick={(e) => { setOpen(false); handleNavigation("/#contact", e); }}
                        className="w-full bg-[#FE6B02] flex items-center justify-between py-3 pl-6 pr-2 rounded-3xl text-white hover:bg-[#e05a00]"
                    >
                        {t.nav.getQuotes}
                        <div className="bg-white rounded-full p-2"><IoArrowForwardOutline className="text-black" /></div>
                    </Link>
                </div>
            </div>
        </div>
    );
}