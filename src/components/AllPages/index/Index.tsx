// // src/app/page.tsx
// 'use client';

// import { useTranslation } from "@/components/hooks/useTranslation";


// export default function Home() {
//     const { t } = useTranslation(); // লোকাল স্টেট আর নেই, হুক থেকে নিচ্ছে

//     return (
//         <div className="min-h-screen bg-gray-50">
//             {/* Language Switcher - এখান থেকে সরিয়ে Navbar এ রাখুন */}

//             {/* Hero Section */}


//             {/* About Us Section */}


//             {/* Mission Section */}


//             {/* Products Section */}
//             <section className="py-16 bg-white">
//                 <div className="container mx-auto px-4">
//                     <h2 className="text-3xl font-bold text-center mb-4">{t.products.title}</h2>
//                     <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">{t.products.subtitle}</p>
//                     <div className="grid md:grid-cols-3 gap-8">
//                         {/* Starter Pack */}
//                         <div className="border rounded-lg p-6 shadow-lg hover:shadow-xl transition">
//                             <h3 className="text-2xl font-bold text-center mb-2">{t.products.starter.name}</h3>
//                             <p className="text-gray-600 text-center mb-4">{t.products.starter.description}</p>
//                             <div className="text-sm text-gray-500 mb-4">
//                                 {/* <p>{t.products.cardCounts.commonUncommon}</p>
//                                 <p>{t.products.cardCounts.foil}</p>
//                                 <p>{t.products.cardCounts.bonus}</p> */}
//                             </div>
//                             <ul className="text-sm space-y-1 mb-6">
//                                 {t.products.starter.features.map((feature, idx) => (
//                                     <li key={idx} className="text-gray-600">✓ {feature}</li>
//                                 ))}
//                             </ul>
//                             <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition">
//                                 {t.products.requestQuote}
//                             </button>
//                         </div>

//                         {/* Evolution Pack */}
//                         <div className="border-2 border-purple-500 rounded-lg p-6 shadow-lg hover:shadow-xl transition relative">
//                             <div className="absolute top-0 right-0 bg-purple-600 text-white px-3 py-1 rounded-bl-lg text-sm">Popular</div>
//                             <h3 className="text-2xl font-bold text-center mb-2">{t.products.evolution.name}</h3>
//                             <p className="text-gray-600 text-center mb-4">{t.products.evolution.description}</p>
//                             <div className="text-sm text-gray-500 mb-4">
//                                 {/* <p>{t.products.evolution.cardCount.commonUncommon}+ {t.products.cardCounts.commonUncommon}</p>
//                                 <p>{t.products.evolution.cardCount.foil}+ {t.products.cardCounts.foil}</p>
//                                 <p>{t.products.evolution.cardCount.bonus}+ {t.products.cardCounts.bonus}</p> */}
//                             </div>
//                             <ul className="text-sm space-y-1 mb-6">
//                                 {t.products.evolution.features.map((feature, idx) => (
//                                     <li key={idx} className="text-gray-600">✓ {feature}</li>
//                                 ))}
//                             </ul>
//                             <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition">
//                                 {t.products.requestQuote}
//                             </button>
//                         </div>

//                         {/* Ultra Pack */}
//                         <div className="border rounded-lg p-6 shadow-lg hover:shadow-xl transition">
//                             <h3 className="text-2xl font-bold text-center mb-2">{t.products.ultra.name}</h3>
//                             <p className="text-gray-600 text-center mb-4">{t.products.ultra.description}</p>
//                             <div className="text-sm text-gray-500 mb-4">
//                                 {/* <p>{t.products.ultra.cardCount.commonUncommon}+ {t.products.cardCounts.commonUncommon}</p>
//                                 <p>{t.products.ultra.cardCount.foil}+ {t.products.cardCounts.foil}</p>
//                                 <p>{t.products.ultra.cardCount.bonus}+ {t.products.cardCounts.bonus}</p> */}
//                             </div>
//                             <ul className="text-sm space-y-1 mb-6">
//                                 {t.products.ultra.features.map((feature, idx) => (
//                                     <li key={idx} className="text-gray-600">✓ {feature}</li>
//                                 ))}
//                             </ul>
//                             <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition">
//                                 {t.products.requestQuote}
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Footer */}
//             <footer className="bg-gray-900 text-white py-12">
//                 <div className="container mx-auto px-4">
//                     <div className="text-center mb-8">
//                         <h3 className="text-2xl font-bold mb-4">{t.footer.cta.title}</h3>
//                         <p className="mb-6">{t.footer.cta.description}</p>
//                         <div className="flex gap-4 justify-center">
//                             <button className="bg-purple-600 px-6 py-2 rounded-lg hover:bg-purple-700 transition">
//                                 {t.footer.cta.wholesaleBtn}
//                             </button>
//                             <button className="border border-white px-6 py-2 rounded-lg hover:bg-white hover:text-gray-900 transition">
//                                 {t.footer.cta.sampleBtn}
//                             </button>
//                         </div>
//                     </div>
//                     <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
//                         <p>{t.footer.copyright}</p>
//                     </div>
//                 </div>
//             </footer>
//         </div>
//     );
// }