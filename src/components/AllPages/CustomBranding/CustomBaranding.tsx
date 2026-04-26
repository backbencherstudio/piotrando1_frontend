"use client"
import CurrectIcon from '@/components/icon/CurrectIcon'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { MdArrowOutward } from 'react-icons/md'

export default function CustomBranding() {
    const [isDragging, setIsDragging] = useState(false);
    const [preview, setPreview] = useState<string | null>(null);

    const handleFile = (file: File | null) => {
        if (!file) return;

        if (file.type.startsWith("image/")) {
            const url = URL.createObjectURL(file);
            setPreview(url);
        }
    };

    // cleanup (important)
    useEffect(() => {
        return () => {
            if (preview) URL.revokeObjectURL(preview);
        };
    }, [preview]);

    return (
        <div className='bg-[#0E1115]'>

            <div className='grid grid-cols-1 md:grid-cols-2  container py-10 lg:py-20 gap-[52px] '>

                <div>
                    <div>
                        <div className='flex'>
                            <p className='text-white text-3xl md:text-4xl lg:text-[48px] font-normal leading-120% font-secondary text-center md:text-start '>Custom Brandin & Full-Service Production</p>

                        </div>


                        <div className='flex flex-col gap-8 text-[#393939] mt-5'>
                            <p className=' text-[#DBEAFE] text-[16px] font-normal leading-[120%] tracking-[-0.3px]'>Stand out with your own branded mystery pack experience. We handle everything from design to final packaging.
                            </p>

                            <div className='  text-[16px] font-normal leading-[170%] tracking-[-0.3px] text-[#FFF] space-y-2'>
                                <div className='flex gap-2'> <div className='bg-[#3E2311] flex items-center p-2 rounded-full'><CurrectIcon /> </div> Custom blister packaging with your logo</div>
                                <div className='flex gap-2'> <div className='bg-[#3E2311] flex items-center p-2 rounded-full'><CurrectIcon /> </div> Full packaging design (blister + box)
                                </div>
                                <div className='flex gap-2'> <div className='bg-[#3E2311] flex items-center p-2 rounded-full'><CurrectIcon /> </div> Card sourcing (Pokémon and more)
                                </div>
                                <div className='flex gap-2'> <div className='bg-[#3E2311] flex items-center p-2 rounded-full'><CurrectIcon /> </div> Quality control & assembly</div>
                                <div className='flex gap-2'> <div className='bg-[#3E2311] flex items-center p-2 rounded-full'><CurrectIcon /> </div> Ready-to-sell delivery</div>

                            </div>

                        </div>


                    </div>
                </div>

                <div className="flex items-center justify-center  p-4 rounded-2xl">
                    <div
                        className={`w-full  h-full rounded-2xl border-2 border-dashed p-10 text-center transition-all duration-300 
    ${isDragging ? "border-orange-500 bg-[#1E293B]" : "border-orange-400/40 bg-[#111827]"}`}
                        onDragOver={(e) => {
                            e.preventDefault();
                            setIsDragging(true);
                        }}
                        onDragLeave={() => setIsDragging(false)}
                        onDrop={(e) => {
                            e.preventDefault();
                            setIsDragging(false);
                            const file = e.dataTransfer.files?.[0] || null;
                            handleFile(file);
                        }}
                    >
                        {/* hidden input */}
                        <input
                            id="fileInput"
                            type="file"
                            className="hidden"
                            onChange={(e) => handleFile(e.target.files?.[0] || null)}
                        />

                        {preview ? (
                            <div className="flex flex-col items-center gap-4">

                                <Image
                                    src={preview}
                                    height={100}
                                    width={100}
                                    alt="preview"
                                    onClick={() => document.getElementById("fileInput")?.click()}
                                    className="max-h-64 w-full rounded-lg object-contain cursor-pointer hover:opacity-80 transition"
                                />
                            </div>
                        ) : (
                            <>
                                {/* default UI */}
                                <div className="flex justify-center mb-6">
                                    <div className="bg-gray-200 text-gray-700 rounded-md p-2">
                                        <Image src="/images/document.png" alt='documnet' height={40} width={40} />
                                    </div>
                                </div>

                                <h2 className="text-white text-lg font-medium mb-2">
                                    Drag and drop your design or logo
                                </h2>

                                <p className="text-gray-400 text-sm mb-6">
                                    JPEG, PNG and PDF formats, up to 50MB
                                </p>

                                <button
                                    onClick={() => document.getElementById("fileInput")?.click()}
                                    className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md transition"
                                >
                                    Select File
                                </button>
                            </>
                        )}
                    </div>
                </div>


            </div>
        </div>
    )
}
