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
                        <p className=" text-sm leading-relaxed max-w-md">
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
                        <h3 className="font-semibold  mb-4">Company</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/about" className=" hover:text-purple-600 text-sm transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/why-spawndrop" className=" hover:text-purple-600 text-sm transition-colors">
                                    Why Spawndrop
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className=" hover:text-purple-600 text-sm transition-colors">
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy" className=" hover:text-purple-600 text-sm transition-colors">
                                    Privacy Policy
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Support Column */}
                    <div className="md:col-span-2">
                        <h3 className="font-semibold  mb-4">Support</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/contact" className=" text-sm transition-colors">
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/faqs" className=" text-sm transition-colors">
                                    FAQs
                                </Link>
                            </li>
                            <li>
                                <Link href="/customer-support" className=" text-sm transition-colors">
                                    Customer Support
                                </Link>
                            </li>
                            <li>
                                <Link href="/blogs" className=" text-sm transition-colors">
                                    Blogs
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Resources Column */}
                    <div className="md:col-span-3">
                        <h3 className="font-semibold  mb-4">Resources</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/authentic-cards" className=" text-sm transition-colors">
                                    100% Authentic Cards
                                </Link>
                            </li>
                            <li>
                                <Link href="/shipping" className=" text-sm transition-colors">
                                    EU & UK Shipping
                                </Link>
                            </li>
                            <li>
                                <Link href="/custom-branding" className=" text-sm transition-colors">
                                    Custom Branding Available
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
                        <Link href="/privacy-policy" className="text-gray-400 hover:text-purple-600 text-xs transition-colors">
                            Privacy Policy
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}