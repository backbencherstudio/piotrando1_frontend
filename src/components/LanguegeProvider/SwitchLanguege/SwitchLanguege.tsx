import { useLanguage } from "../LanguegeProvider";

export const SwitchLanguage = () => {
  const { language, setLanguage } = useLanguage();
  const isEn = language === "en";

  return (
    <div
      className="inline-flex items-center rounded-full bg-gray-100 p-1 shadow-sm ring-1 ring-black/10 notranslate"
      role="group"
      aria-label="Language switch"
    >
      <button
        type="button"
        onClick={() => setLanguage("en")}
        className={[
          "px-3 py-1 text-xs font-semibold uppercase tracking-wide rounded-full transition-all duration-200",
          isEn
            ? "bg-emerald-500 text-white shadow-sm"
            : "text-gray-600 hover:text-gray-900",
        ].join(" ")}
        aria-pressed={isEn}
      >
        EN
      </button>

      <button
        type="button"
        onClick={() => setLanguage("es")}
        className={[
          "px-3 py-1 text-xs font-semibold uppercase tracking-wide rounded-full transition-all duration-200",
          !isEn
            ? "bg-emerald-500 text-white shadow-sm"
            : "text-gray-600 hover:text-gray-900",
        ].join(" ")}
        aria-pressed={!isEn}
      >
        Es
      </button>
    </div>
  );
};
