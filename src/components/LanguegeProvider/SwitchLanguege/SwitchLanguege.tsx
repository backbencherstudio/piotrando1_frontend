"use client";

import { useState } from "react";
import { useLanguage } from "../LanguegeProvider";
import { LanguageCode } from "@/lib/library/LanguageCode";
import Image from "next/image";

type LanguageItem = {
  code: LanguageCode;
  label: string;
  flag: string;
};

const languages: LanguageItem[] = [
  { code: "en", label: "English", flag: "/images/flag.png" },
  { code: "fr", label: "France", flag: "/images/flags/fr.png" },
  { code: "pl", label: "Poland", flag: "/images/flags/pl.png" },
  { code: "de", label: "Germany", flag: "/images/flags/de.png" },
];

export const SwitchLanguage = () => {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState<boolean>(false);

  const current = languages.find((l) => l.code === language);

  return (
    <div className="relative inline-block mt-3">
      {/* Button */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg shadow-sm border"
      >
        <Image
          height={40}
          width={40}
          src={current?.flag || ""}
          alt={current?.label || "language"}
          className="w-5 h-3 rounded-lg object-cover"
        />
        <span className="text-xs font-semibold">
          {current?.label || "EN"}
        </span>
        <span className="text-xs">▼</span>
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute mt- w-full bg-white rounded-lg shadow-lg border overflow-hidden mt-2 z-50">
          {languages.map((lang: LanguageItem) => (
            <button
              key={lang.code}
              onClick={() => {
                setLanguage(lang.code);
                setOpen(false);
              }}
              className={`w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-gray-100 ${language === lang.code ? "bg-gray-100 font-semibold" : ""
                }`}
            >
              <img
                src={lang.flag}
                alt={lang.label}
                className="w-5 h-3 rounded-lg object-cover"
              />
              <span>{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};