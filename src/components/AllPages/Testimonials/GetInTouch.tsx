"use client";

import CountrySelect from "@/app/flag/page";
import { Select } from "@/components/ui/select";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import ReactCountryFlag from "react-country-flag";
import { CountryDropdown } from "react-country-region-selector";
import { useForm, SubmitHandler } from "react-hook-form";
import { CgMail } from "react-icons/cg";
import { CiLocationOn } from "react-icons/ci";
import { GoMail } from "react-icons/go";

type FormInputs = {
    companyName: string;
    contactName: string;
    businessEmail: string;
    country: string;
    estimatedQuantity: string;
    productType: string;
    message: string;
};

export default function GetInTouch() {
    const { register, handleSubmit, setValue, formState: { errors } } = useForm<FormInputs>();


    useEffect(() => {
        setValue("country", "Bangladesh");
    }, [setValue]);

    const onSubmit: SubmitHandler<FormInputs> = (data) => {
        console.log("Form Data:", data);
    };


    const handleCountryChange = (country: any) => {

        const name = typeof country.name === 'string'
            ? country.name
            : country.name?.common || country.label;

        if (name) {
            setValue("country", name);
            console.log("Country Updated to:", name);
        }
    };
    return (
        <div className=" py-10 lg:py-20 flex  container" id="contact">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

                <div className="flex flex-col justify-start" data-aos="fade-right"
                    data-aos-duration="2000">

                    <div className=" mb-12">
                        <div className='flex '>
                            <div className="flex gap-2 border py-2 px-4 rounded-full">
                                <Image
                                    src="/images/aboutusLogo.png"
                                    alt="icon"
                                    width={24}
                                    height={24}
                                    className="object-contain"
                                />
                                <p className=" text-[18px] font-medium leading-[140%] tracking-[-0.3px] ">Get in Touch
                                </p>
                            </div>

                        </div>
                        <div className=''>
                            <p className="text-[#000] text-[clamp(2rem,3rem,4rem)] font-normal font-secondary leading-120% pt-6">Request a Quote</p>
                            <p className="text-[#393939] font-normal text-base leading-170% tracking-[0.03px] flex justify-center items-center lg:w-lg">
                                Tell us what you need and we will prepare a custom quote, sample option, or wholesale recommendation within 24 hours.
                            </p>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 bg-[#F7E7D9] rounded-full flex items-center justify-center text-orange-600"><GoMail className="w-5 h-6" /></div>
                            <div>
                                <p className="font-bold text-gray-800">Email</p>
                                <p className="text-gray-500">contact@spawndrop.com</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 bg-[#F7E7D9] rounded-full flex items-center justify-center text-orange-600"><CiLocationOn className="w-9 h-6" /></div>
                            <div>
                                <p className="font-bold text-gray-800">Location</p>
                                <p className="text-gray-500">Europe-based, shipping EU-wide</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm  lg:h-full h-full " data-aos="fade-left"
                    data-aos-duration="2000">
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5">
                            <div className="space-y-2">
                                <label className="md:text-sm lg:text-[16px] font-medium leading-[170%] tracking-[-0.3px] text-[#393939]">Company Name</label>
                                <input {...register("companyName")} placeholder="Your Company Name" className="w-full md:p-1 p-4 bg-gray-50 border border-gray-100 rounded-full focus:outline-orange-500 transition-all" />
                            </div>
                            <div className="space-y-2">
                                <label className="md:text-sm lg:text-[16px] font-medium leading-[170%] tracking-[-0.3px] text-[#393939]">Contact Name</label>
                                <input {...register("contactName")} placeholder="Your Name" className="w-full md:p-1 p-4 bg-gray-50 border border-gray-100 rounded-full focus:outline-orange-500 transition-all" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5">
                            <div className="space-y-2">
                                <label className="md:text-sm lg:text-[16px] font-medium leading-[170%] tracking-[-0.3px] text-[#393939]">Business Email</label>
                                <input {...register("businessEmail")} placeholder="business@email.com" className="w-full md:p-1 p-4 bg-gray-50 border border-gray-100 rounded-full focus:outline-orange-500 transition-all" />
                            </div>
                            {/* <div className="space-y-2">
                                <label className="text-[16px] font-medium leading-[170%] tracking-[-0.3px] text-[#393939]">Country</label>
                                <select {...register("country")} className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-orange-500 transition-all appearance-none">
                                    <option value="Bangladesh">🇧🇩 Bangladesh</option>
                                </select>



                            </div> */}

                            <div className="space-y-2">
                                <label className="md:text-sm lg:text-[16px] font-medium leading-[170%] tracking-[-0.3px] text-[#393939]">Country</label>
                                <CountrySelect onChange={handleCountryChange} defaultValue="PL" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5">
                            <div className="space-y-2">
                                <label className="md:text-sm lg:text-[16px] font-medium leading-[170%] tracking-[-0.3px] text-[#393939]">Estimated Quantity</label>
                                <input {...register("estimatedQuantity")} placeholder="e.g. 400+" className="w-full md:p-1 p-4 bg-gray-50 border border-gray-100 rounded-full focus:outline-orange-500 transition-all" />
                            </div>
                            {/* <div className="space-y-2">
                                <label className="md:text-sm lg:text-[16px] font-medium leading-[170%] tracking-[-0.3px] ">Product Type</label>
                                <select {...register("productType")} className="w-full md:p-1 p-4 bg-gray-50 border border-gray-100 rounded-full focus:outline-orange-500 transition-all appearance-none ">
                                    <option value="" className="text-black">e.g. Starter, Pro, Ultra</option>
                                    <option value="pro" className="text-black">Pro</option>
                                </select>
                            </div> */}
                            <div className="space-y-2">
                                <label className="md:text-sm lg:text-[16px] font-medium leading-[170%] tracking-[-0.3px]  text-[#393939]">Messages</label>
                                <textarea {...register("message")} placeholder="Type your message here..." rows={4} className="w-full md:p-1 p-4 bg-gray-50 border h-9 border-gray-100 rounded-2xl focus:outline-orange-400 transition-all resize-none" />
                            </div>
                        </div>



                        <button type="submit" className="w-full bg-[#FF6900] text-white text-center text-[16px] font-medium leading-[170%] tracking-[-0.3px] py-2 md:py-2 lg:py-2 xl:py-4 rounded-full hover:bg-orange-600 cursor-pointer transition-all text-lg shadow-lg shadow-orange-200">
                            Request Wholesale Pricing
                        </button>

                        <p className="text-[#888D91] text-center md:text-sm xl:text-[16px] italic font-normal leading-[170%] tracking-[-0.3px] pt-2">
                            We usually reply within 24 hours. Sample packs are available before larger orders.
                        </p>
                    </form>
                </div>

            </div>
        </div>
    );
}