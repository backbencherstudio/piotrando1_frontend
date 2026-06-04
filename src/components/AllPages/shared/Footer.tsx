"use client";
// app/components/Footer.tsx
import { useTranslation } from '@/components/hooks/useTranslation';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { LuTwitter } from 'react-icons/lu';
import { TbBrandTwitterFilled } from 'react-icons/tb';

export default function Footer() {


    const { t } = useTranslation();
    return (
        <footer className="bg-black text-white">
            <div className="containers  py-12">
                {/* Main Footer Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">

                    {/* Brand Column - Left */}
                    <div className="md:col-span-5 space-y-6">
                        <Image src="/images/LOGO.png" height={50} width={216} alt='logo' />
                        <p className=" text-base leading-relaxed font-normal  text-[#F6F5F1] max-w-md">
                            {/* Spawn Drop creates premium mystery repacks with authentic cards, fair value,
                            and reliable supply for retailers across Europe. */}
                            {t?.footer?.description}
                        </p>
                        <div className='flex gap-4'>
                            <div>
                                <FiInstagram />
                            </div>
                            <div>
                                <FaFacebookF />
                            </div>  <div>
                                <TbBrandTwitterFilled />
                            </div>  <div>
                                <FaLinkedinIn />
                            </div>
                        </div>
                    </div>

                    {/* Company Column */}
                    <div className="md:col-span-2">
                        <h3 className="font-semibold text-[#F6F5F1]  mb-4">{t.footer.company}</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/#aboutUs" className="  text-sm transition-colors">
                                    {t.footer.about}
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm transition-colors">
                                    {t.footer.why}
                                </Link>
                            </li>
                            <li>
                                <Link href="/#contact" className="  text-sm transition-colors">
                                    {t.footer.contactUs}
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="  text-sm transition-colors">
                                    {t.footer.privacy}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Support Column */}
                    <div className="md:col-span-2">
                        <h3 className="font-semibold text-[#F6F5F1]  mb-4">{t.footer.support}</h3>
                        <ul className="space-y-2">
                            {/* <li>
                                <Link href="/#contact" className=" text-sm transition-colors">
                                    Contact Us
                                </Link>
                            </li> */}
                            <li>
                                <Link href="/#faq" className=" text-sm transition-colors">
                                    {t.footer.faqs}
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className=" text-sm transition-colors">
                                    {t.footer.customerSupport}
                                </Link>
                            </li>

                        </ul>
                    </div>

                    {/* Resources Column */}
                    <div className="md:col-span-3">
                        <h3 className="font-semibold text-[#F6F5F1]  mb-4">{t.footer.resources}</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="#" className=" text-sm transition-colors">
                                    {t.footer.authentic}
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className=" text-sm transition-colors">
                                    {t.footer.shipping}
                                </Link>
                            </li>
                            <li>
                                <Link href="#customBranding" className=" text-sm transition-colors">
                                    {t.footer.customBranding}
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar - Copyright */}
                <div className='h-0.5 w-full bg-gray-500 mt-10 mb-10 '>

                </div>
                <div className="">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                        <p className="text-gray-400 text-xs">
                            {t.footer.copyright}
                        </p>
                        <Link href="#" className="text-gray-400 hover:text-white text-xs transition-colors">
                            Privacy Policy
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}