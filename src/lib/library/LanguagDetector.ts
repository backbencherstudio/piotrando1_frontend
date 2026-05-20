export class LanguageDetector {
    static supported: string[] = ["en", "es", "fr", "de", "hi", "pl", "ja"];


    static detectBrowserLanguage(): string {
        if (typeof window === "undefined") return "en";


        const browserLang = navigator.language.split("-")[0];


        return this.supported.includes(browserLang) ? browserLang : "en";
    }
}
