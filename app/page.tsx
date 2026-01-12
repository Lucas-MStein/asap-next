import HomeNavbar from "@/components/HomeNavbar";
import SiteFooter from "@/components/SiteFooter";

export default function HomePage() {
    return (
        <>
            <HomeNavbar />

            {/* Hero */}
            <section id="home" className="relative w-full h-screen bg-black">
                <img
                    src="/img/rocky.jpg"
                    alt="ASAP Rocky"
                    className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
                    <h1 className="text-5xl md:text-7xl font-bebas uppercase tracking-wide italic">
                        Always Strive And Prosper
                    </h1>
                    <p className="mt-4 text-lg font-bebas md:text-2xl">
                        A digital space inspired by the world&apos;s leading creative minds
                    </p>
                    <a
                        href="#blog"
                        className="mt-6 px-6 py-3 bg-[#d4af37] text-white font-semibold rounded-full shadow-md hover:brightness-110 transition duration-300"
                    >
                        Explore Blog
                    </a>
                </div>
            </section>

            {/* Blog */}
            <section id="blog" className="py-28 bg-gray-50 text-black px-4 md:px-20">
                <div className="max-w-6xl mx-auto">
                    <div className="max-w-4xl mx-auto text-center mb-12">
                        <h2 className="text-4xl font-extrabold tracking-tight relative inline-block after:block after:w-16 after:h-1 after:bg-[#d4af37] after:mx-auto after:mt-2">
                            Beiträge
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        <article className="bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 p-6 flex flex-col justify-between">
                            <div>
                                <h3 className="text-xl font-bold mb-2">Initial Commit</h3>
                                <p className="text-sm text-gray-600">
                                    Projektstart: Motivation, Vision &amp; Zielsetzung.
                                </p>
                            </div>
                            <a href="/initial" className="mt-4 inline-block text-[#d4af37] font-semibold hover:underline">
                                Weiterlesen →
                            </a>
                        </article>

                        <article className="bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 p-6 flex flex-col justify-between">
                            <div>
                                <h3 className="text-xl font-bold mb-2">Daily Commits</h3>
                                <p className="text-sm text-gray-600">
                                    Tägliche Logs zur Entwicklung, Entscheidungen &amp; Learnings.
                                </p>
                            </div>
                            <a href="/daily" className="mt-4 inline-block text-[#d4af37] font-semibold hover:underline">
                                Zu den Logs →
                            </a>
                        </article>

                        <article className="bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 p-6 flex flex-col justify-between">
                            <div>
                                <h3 className="text-xl font-bold mb-2">Downloads</h3>
                                <p className="text-sm text-gray-600">
                                    Alle PDFs: Musik, Kunst &amp; Persönlichkeiten
                                </p>
                            </div>
                            <a href="/downloads" className="mt-4 inline-block text-[#d4af37] font-semibold hover:underline">
                                PDFs anzeigen →
                            </a>
                        </article>
                    </div>
                </div>
            </section>

            {/* About */}
            <section id="about" className="py-28 bg-gray-100 text-black px-4 md:px-20">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-extrabold tracking-tight relative inline-block after:block after:w-16 after:h-1 after:bg-[#d4af37] after:mx-auto after:mt-2">
                        Über mich
                    </h2>
                    <p className="text-lg leading-relaxed mt-6">
                        Ich bin <span className="font-semibold">Lucas-Maurice Stein</span>,
                        kreativer Kopf und Musikliebhaber. Dieser Blog ist mein digitaler
                        Ausdruck von <span className="italic">Street Culture</span>, Kunst
                        und Style – inspiriert von <strong>A$AP Rocky</strong> und der Idee,
                        immer zu wachsen:{" "}
                        <span className="text-[#d4af37] font-semibold">
              Always Strive And Prosper
            </span>
                        .
                    </p>
                </div>
            </section>

            {/* Kontakt */}
            <section id="kontakt" className="py-28 bg-gray-50 text-black px-4 md:px-20">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-extrabold tracking-tight relative inline-block after:block after:w-16 after:h-1 after:bg-[#d4af37] after:mx-auto after:mt-2">
                        Kontakt
                    </h2>
                    <p className="text-lg mb-6 mt-6">
                        Fragen, Anregungen oder einfach nur „Peace“ sagen?
                    </p>
                    <a
                        href="mailto:lucasmauricestein@gmail.com"
                        className="inline-flex items-center gap-3 px-6 py-3 bg-[#d4af37] text-white font-medium rounded-full shadow-md hover:brightness-110 transition duration-300"
                    >
                        Schreib mir eine E-Mail
                    </a>
                </div>
            </section>

            <SiteFooter showImpressumLink />
        </>
    );
}