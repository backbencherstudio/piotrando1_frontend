// // components/LanguageSwitcher.js
// "use client";
// import { useRouter } from 'next/router';

// export default function LanguageSwitcher() {
//     const router = useRouter();
//     const { pathname, asPath, query, locale } = router;

//     const changeLanguage = (newLocale) => {
//         router.push({ pathname, query }, asPath, { locale: newLocale });
//     };

//     return (
//         <div className="flex gap-2">
//             <button onClick={() => changeLanguage('en')}>🇬🇧 English</button>
//             <button onClick={() => changeLanguage('de')}>🇩🇪 Deutsch</button>
//             <button onClick={() => changeLanguage('fr')}>🇫🇷 Français</button>
//             <button onClick={() => changeLanguage('pl')}>🇵🇱 Polski</button>
//         </div>
//     );
// }