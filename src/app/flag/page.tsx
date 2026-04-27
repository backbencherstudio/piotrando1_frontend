

"use client";

import { useState, useEffect } from "react";
import { getAllCountriesWithFlags } from "@tw-labs/countries";
import { IoIosArrowDown } from "react-icons/io";

interface Country {
    code: string;
    name: any;
    flagSvg: string;
    label?: string;
}

interface CountrySelectProps {
    onChange?: (country: Country) => void;
    defaultValue?: string;
}

const allCountries = (getAllCountriesWithFlags() as unknown) as Country[];

export default function CountrySelect({ onChange, defaultValue }: CountrySelectProps) {
    const defaultCountry = allCountries.find((c) => c.code === (defaultValue || "US")) || allCountries[0];
    const [selectedCountry, setSelectedCountry] = useState<Country>(defaultCountry);
    const [isOpen, setIsOpen] = useState(false);

    const getCountryName = (country: Country): string => {
        if (typeof country.name === "string") return country.name;
        if (typeof country.name === "object" && country.name !== null) {
            return (country.name as any).common || (country.name as any).official || "Unknown";
        }
        return country.label || "Unknown";
    };

    const handleSelect = (country: Country) => {
        setSelectedCountry(country);
        setIsOpen(false);
        if (onChange) {
            onChange(country);
        }
    };

    return (
        <div className="relative w-full max-w-sm ">
            <input type="hidden" name="country" value={selectedCountry.code} />

            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className={`w-full flex items-center justify-between md:p-1 xl:py-2 border-2 transition-all duration-200 rounded-2xl bg-gray-50 text-white
  ${isOpen ? "" : ""}`}
            >
                <div className="flex items-center gap-4">
                    <img
                        src={selectedCountry.flagSvg}
                        alt=""
                        className="w-8 h-5 object-cover rounded-sm shadow-sm"
                    />
                    <span className="text-gray-800 font-bold">
                        {getCountryName(selectedCountry)}
                    </span>
                </div>
                <span className={`text-[10px] transition-transform duration-300 text-black ${isOpen ? "rotate-180" : ""}`}>
                    <IoIosArrowDown />

                </span>
            </button>

            {isOpen && (
                <>
                    <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} />
                    <div className="absolute z-20 w-full mt-2 bg-white bg-green-500  rounded-2xl shadow-2xl max-h-72 overflow-y-auto overflow-x-hidden">
                        {allCountries.map((country) => (
                            <button
                                key={country.code}
                                type="button"
                                onClick={() => handleSelect(country)}
                                className="w-full flex items-center gap-4  p-4 hover:bg-blue-50 transition-colors text-left border-b border-gray-50 last:border-none"
                            >
                                <img
                                    src={country.flagSvg}
                                    alt=""
                                    className="w-8 h-5 object-cover rounded-sm"
                                />
                                <span className="text-gray-700 font-medium whitespace-nowrap overflow-hidden text-ellipsis">
                                    {getCountryName(country)}
                                </span>
                            </button>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}