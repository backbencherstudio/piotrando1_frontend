// app/components/Footer.tsx
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { LuTwitter } from 'react-icons/lu';
import { TbBrandTwitterFilled } from 'react-icons/tb';

export default function Footer() {
    return (
        <footer className="bg-black text-white">
            <div className="container lg:px-8 py-12">
                {/* Main Footer Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">

                    {/* Brand Column - Left */}
                    <div className="md:col-span-5 space-y-6">
                        <Image src="/images/LOGO.png" height={50} width={216} alt='logo' />
                        <p className=" text-base leading-relaxed font-normal  text-[#F6F5F1] max-w-md">
                            Spawn Drop creates premium mystery repacks with authentic cards, fair value,
                            and reliable supply for retailers across Europe.
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
                        <h3 className="font-semibold text-[#F6F5F1]  mb-4">COMPANY</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/#aboutUs" className="  text-sm transition-colors">
                                    ABOUT US
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm transition-colors">
                                    WHY SPAWNDROP
                                </Link>
                            </li>
                            <li>
                                <Link href="/#contact" className="  text-sm transition-colors">
                                    CONTACT US
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="  text-sm transition-colors">
                                    PRIVACY POLICY
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Support Column */}
                    <div className="md:col-span-2">
                        <h3 className="font-semibold text-[#F6F5F1]  mb-4">SUPPORT</h3>
                        <ul className="space-y-2">
                            {/* <li>
                                <Link href="/#contact" className=" text-sm transition-colors">
                                    Contact Us
                                </Link>
                            </li> */}
                            <li>
                                <Link href="/#faq" className=" text-sm transition-colors">
                                    FAQS
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className=" text-sm transition-colors">
                                    CUSTOMER SUPPORT
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className=" text-sm transition-colors">
                                    BLOGS
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Resources Column */}
                    <div className="md:col-span-3">
                        <h3 className="font-semibold text-[#F6F5F1]  mb-4">RESOURCES</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="#" className=" text-sm transition-colors">
                                    100% AUTHENTIC CARDS
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className=" text-sm transition-colors">
                                    EU & UK SHIPPING
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className=" text-sm transition-colors">
                                    CUSTOM BRANDING AVAILABLE
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar - Copyright */}
                <div className="mt-10 pt-6 border-t border-gray-200">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                        <p className="text-gray-400 text-xs">
                            © Spawndrop 2026 | All Rights Reserved
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