import BackHeader from "@/components/BackHeader";
import SiteFooter from "@/components/SiteFooter";

export default function InitialPage() {
    return (
        <div className="min-h-screen flex flex-col bg-neutral-950 text-white">
            <BackHeader href="/#blog" label="Back to Notes" />

            {/* HERO */}
            <section className="relative overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-neutral-950" />

                {/* Decorative bars */}
                <div className="absolute left-0 right-0 top-0 h-[2px] bg-[#d4af37]/70" />
                <div className="absolute left-0 right-0 bottom-0 h-[2px] bg-[#d4af37]/40" />

                {/* Soft glow */}
                <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#d4af37]/10 blur-3xl" />

                <div className="relative mx-auto max-w-6xl px-4 md:px-20 py-16 md:py-20">
                    <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-white/70">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#d4af37]" />
                        Origin Note
                    </p>

                    <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight">
                        Origin Note
                        <span className="block mt-3 h-1 w-20 bg-[#d4af37]" />
                    </h1>

                    <p className="mt-6 max-w-3xl text-white/80 text-lg leading-relaxed">
                        Der erste Eintrag zu <span className="text-[#d4af37] font-semibold">Always Strive And Prosper</span> —
                        nicht als klassischer Blog, sondern als persönliches Archiv für Kultur, Sound,
                        Stil und Gedanken.
                    </p>

                </div>
            </section>

            {/* CONTENT */}
            <main className="flex-1 bg-neutral-50 text-neutral-900">
                <div className="mx-auto max-w-6xl px-4 md:px-20 py-14 md:py-20">
                    {/* Card: Archive Principles */}
                    <section className="relative rounded-2xl bg-white shadow-xl border border-neutral-200 overflow-hidden">
                        {/* Top accent bar */}
                        <div className="h-2 bg-gradient-to-r from-black via-neutral-900 to-[#d4af37]" />

                        <div className="p-6 md:p-10">
                            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                                Archive Principles
                                <span className="ml-3 align-middle inline-block h-1 w-10 bg-[#d4af37]" />
                            </h2>

                            <p className="mt-4 text-neutral-600 leading-relaxed">
                                Dieses Archiv folgt keinem festen Ratgeber-Format. Es sammelt Referenzen,
                                Notizen und Fragmente, die Geschmack, Neugier und kulturelle Einflüsse sichtbar machen.
                            </p>

                            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-5">
                                    <p className="text-xs uppercase tracking-widest text-neutral-500">
                                        Culture
                                    </p>
                                    <p className="mt-2 font-semibold">Popkultur, Szenen und Zeitgeist</p>
                                </div>

                                <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-5">
                                    <p className="text-xs uppercase tracking-widest text-neutral-500">
                                        Sound
                                    </p>
                                    <p className="mt-2 font-semibold">Musik, Artists und visuelle Sprache</p>
                                </div>

                                <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-5">
                                    <p className="text-xs uppercase tracking-widest text-neutral-500">
                                        Style & Thought
                                    </p>
                                    <p className="mt-2 font-semibold">Design, Ästhetik und persönliche Notizen</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Divider “Balken” wie Startseite */}
                    <div className="my-10 md:my-14">
                        <div className="h-px bg-neutral-200" />
                        <div className="mx-auto mt-3 h-1 w-20 bg-[#d4af37]" />
                    </div>

                    {/* Motivation: black card */}
                    <section className="rounded-2xl bg-neutral-950 text-white shadow-2xl border border-white/10 overflow-hidden">
                        <div className="p-6 md:p-10">
                            <p className="text-xs uppercase tracking-[0.25em] text-white/60">
                                Archive Note
                            </p>

                            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight">
                                Warum dieses Archiv existiert
                                <span className="block mt-3 h-1 w-20 bg-[#d4af37]" />
                            </h2>

                            <p className="mt-8 text-white/80 text-lg leading-relaxed">
                                Always Strive And Prosper begann als persönlicher Gedanke und entwickelt sich
                                zu einem Ort für Einflüsse, Referenzen und Beobachtungen. Nicht jeder Eintrag
                                muss eine Antwort geben. Manche Dinge sind einfach wert, festgehalten zu werden.
                            </p>

                            <p className="mt-6 text-white/80 text-lg leading-relaxed">
                                Die Seite sammelt, was hängen bleibt: Musik, visuelle Identitäten,
                                Street Culture, digitale Ästhetik und Gedanken aus dem Alltag. Eher Archiv
                                als Anleitung. Eher Beobachtung als Ratschlag.
                            </p>

                            <div className="mt-8 rounded-xl border border-white/10 bg-white/5 p-6">
                                <p className="text-white/90 leading-relaxed">
                                    <span className="text-[#d4af37] font-semibold">
                                        Always Strive And Prosper
                                    </span>{" "}
                                    steht hier für eine Haltung: aufmerksam bleiben, Dinge sammeln,
                                    Geschmack entwickeln und Gedanken nicht zu früh abschließen.
                                </p>
                            </div>
                        </div>

                        {/* Bottom accent */}
                        <div className="h-2 bg-gradient-to-r from-[#d4af37] via-neutral-900 to-black" />
                    </section>

                    {/* Divider (Balken wie Startseite) */}
                    <div className="my-10 md:my-14">
                        <div className="h-px bg-neutral-200" />
                        <div className="mx-auto mt-3 h-1 w-20 bg-[#d4af37]" />
                    </div>

                    {/* CTA */}
                    <section className="mt-10 md:mt-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 rounded-2xl border border-neutral-200 bg-white p-6 md:p-10 shadow-lg">
                        <div>
                            <h3 className="text-xl md:text-2xl font-extrabold">
                                Weiter mit den Field Notes
                            </h3>
                            <p className="mt-2 text-neutral-600">
                                Fragmente, Beobachtungen und kleine Gedanken aus dem laufenden Archiv.
                            </p>
                        </div>

                        <a
                            href="/daily"
                            className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-white font-semibold shadow-md hover:bg-neutral-900 transition"
                        >
                            View Field Notes →
                        </a>
                    </section>
                </div>
            </main>

            <SiteFooter />
        </div>
    );
}