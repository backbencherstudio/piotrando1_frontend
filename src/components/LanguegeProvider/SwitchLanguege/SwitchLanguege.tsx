// "use client";

// import { useState } from "react";
// import { useLanguage } from "../LanguegeProvider";
// import { LanguageCode } from "@/lib/library/LanguageCode";
// import Image from "next/image";
// import { MdKeyboardArrowDown } from "react-icons/md";

// type LanguageItem = {
//   code: LanguageCode;
//   label: string;
//   flag: string;
// };

// const languages: LanguageItem[] = [
//   { code: "en", label: "English", flag: "/images/flag.png" },
//   { code: "fr", label: "French", flag: "/images/france.png" },
//   { code: "pl", label: "Polish", flag: "/images/poland.png" },
//   { code: "de", label: "Deutsch", flag: "/images/germany (1).png" },
// ];

// export const SwitchLanguage = () => {
//   const { language, setLanguage } = useLanguage();
//   const [open, setOpen] = useState<boolean>(false);

//   const current = languages.find((l) => l.code === language);

//   return (
//     <div className="relative inline-block mt-3 notranslate">
//       {/* Button */}
//       <button
//         onClick={() => setOpen((prev) => !prev)}
//         className="flex items-center gap-2 px-2 py-2 bg-gray-100 rounded-lg shadow-sm border"
//       >
//         <Image
//           height={40}
//           width={40}
//           src={current?.flag || ""}
//           alt={current?.label || "language"}
//           className="w-5 h-3 rounded-lg object-cover"
//         />
//         <span className="text-xs font-semibold">
//           {current?.label || "EN"}
//         </span>
//         <span className={`${open ? "rotate-180" : "rotate-0"}`}><MdKeyboardArrowDown className=" text-black " /></span>
//       </button>

//       {/* Dropdown */}
//       {
//         open && (
//           <div className="absolute mt- w-full bg-white rounded-lg shadow-lg border overflow-hidden mt-2 z-50">
//             {languages.map((lang: LanguageItem) => (
//               <button
//                 key={lang.code}
//                 onClick={() => {
//                   setLanguage(lang.code);
//                   setOpen(false);
//                 }}
//                 className={`w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-gray-100 ${language === lang.code ? "bg-gray-100 font-semibold" : ""
//                   }`}
//               >
//                 <img
//                   src={lang.flag}
//                   alt={lang.label}
//                   className="w-5 h-3 rounded-lg object-cover"
//                 />
//                 <span>{lang.label}</span>
//               </button>
//             ))}
//           </div>
//         )
//       }
//     </div >
//   );
// };



"use client";

import { useState } from "react";
import { useLanguage } from "../LanguegeProvider";
import { LanguageCode } from "@/lib/library/LanguageCode";
import Image from "next/image";
import { MdKeyboardArrowDown } from "react-icons/md";

type LanguageItem = {
  code: LanguageCode;
  label: string;
  flag: string;
};

type SwitchLanguageProps = {
  onSelect?: () => void;
};

const languages: LanguageItem[] = [
  { code: "en", label: "English", flag: "/images/flag.png" },
  { code: "fr", label: "French", flag: "/images/france.png" },
  { code: "pl", label: "Polish", flag: "/images/poland.png" },
  { code: "de", label: "Deutsch", flag: "/images/germany (1).png" },
];

export const SwitchLanguage = ({
  onSelect,
}: SwitchLanguageProps) => {
  const { language, setLanguage } = useLanguage();

  const [open, setOpen] = useState<boolean>(false);

  const current = languages.find(
    (l) => l.code === language
  );

  return (
    <div className="relative inline-block mt-3 notranslate lg:h-0 h-75 ">
      {/* Button */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-2 px-2 py-2 bg-gray-100 rounded-lg shadow-sm border"
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

        <span
          className={`transition-transform duration-300 ${open ? "rotate-180" : "rotate-0"
            }`}
        >
          <MdKeyboardArrowDown className="text-black" />
        </span>
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 w-full bg-white rounded-lg shadow-lg border overflow-hidden z-50">
          {languages.map((lang: LanguageItem) => (
            <button
              key={lang.code}
              onClick={() => {
                setLanguage(lang.code);

                setOpen(false);

                // mobile menu close
                if (onSelect) {
                  onSelect();
                }
              }}
              className={`w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-gray-100 ${language === lang.code
                ? "bg-gray-100 font-semibold"
                : ""
                }`}
            >
              <Image
                src={lang.flag}
                alt={lang.label}
                width={20}
                height={12}
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