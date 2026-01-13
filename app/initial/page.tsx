import BackHeader from "@/components/BackHeader";
import SiteFooter from "@/components/SiteFooter";

export default function InitialPage() {
    return (
        <div className="min-h-screen flex flex-col bg-neutral-950 text-white">
            <BackHeader href="/#blog" label="Zurück zu Beiträge" />

            {/* HERO (schwarz + gold accents wie Startseite) */}
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
                        Beitrag
                    </p>

                    <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight">
                        Initial Commit
                        <span className="block mt-3 h-1 w-20 bg-[#d4af37]" />
                    </h1>

                    <p className="mt-6 max-w-3xl text-white/80 text-lg leading-relaxed">
                        Willkommen zum ersten Eintrag! Dies ist der{" "}
                        <span className="text-[#d4af37] font-semibold">Initial Commit</span>{" "}
                        meines Projekts „Always Strive And Prosper“ – ein digitaler Raum für
                        Kreativität, Kultur und persönliches Wachstum.
                    </p>

                    {/* Quick stats / chips */}
                    <div className="mt-8 flex flex-wrap gap-3">
                        {["6AM Morningwalk", "Natürliche Dopaminquellen", "Geistiges Wachstum"].map(
                            (label) => (
                                <span
                                    key={label}
                                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/85 hover:bg-white/10 transition"
                                >
                  {label}
                </span>
                            )
                        )}
                    </div>
                </div>
            </section>

            {/* CONTENT */}
            <main className="flex-1 bg-neutral-50 text-neutral-900">
                <div className="mx-auto max-w-6xl px-4 md:px-20 py-14 md:py-20">
                    {/* Card: Ziele */}
                    <section className="relative rounded-2xl bg-white shadow-xl border border-neutral-200 overflow-hidden">
                        {/* Top accent bar */}
                        <div className="h-2 bg-gradient-to-r from-black via-neutral-900 to-[#d4af37]" />

                        <div className="p-6 md:p-10">
                            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                                Projektziele
                                <span className="ml-3 align-middle inline-block h-1 w-10 bg-[#d4af37]" />
                            </h2>

                            <p className="mt-4 text-neutral-600 leading-relaxed">
                                In dieser ersten Phase wurden die grundlegenden Ziele definiert – als
                                klare Leitplanken für den Alltag und das Mindset.
                            </p>

                            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-5">
                                    <p className="text-xs uppercase tracking-widest text-neutral-500">
                                        Ziel 1
                                    </p>
                                    <p className="mt-2 font-semibold">6AM Morningwalk</p>
                                </div>

                                <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-5">
                                    <p className="text-xs uppercase tracking-widest text-neutral-500">
                                        Ziel 2
                                    </p>
                                    <p className="mt-2 font-semibold">Natürliche Dopaminquellen</p>
                                </div>

                                <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-5">
                                    <p className="text-xs uppercase tracking-widest text-neutral-500">
                                        Ziel 3
                                    </p>
                                    <p className="mt-2 font-semibold">Geistiges Wachstum</p>
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
                                Motivation
                            </p>

                            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight">
                                Meine Motivation
                                <span className="block mt-3 h-1 w-20 bg-[#d4af37]" />
                            </h2>

                            <p className="mt-8 text-white/80 text-lg leading-relaxed">
                                Der 17. Juni 2025. Ein Tag, der hoffentlich bedeutsam für mich bleibt.
                                Namen wie Michael Jordan &amp; Kobe Bryant schweben mir durch den Kopf.
                                Persönlichkeiten, denen nachgesagt wird, eine bestimmte Killer-Mentality
                                zu haben. Und genau das fehlt mir gerade. Diese Disziplin, das eigene
                                Potential auszuschöpfen.
                            </p>

                            <p className="mt-6 text-white/80 text-lg leading-relaxed">
                                Liebe, Verlust &amp; Trauer haben meine Komfortzone gestört und ich bin
                                immer noch nicht so gut, wie ich es sein kann. Doch ich weiß, welches
                                Feuer in mir lodert. Es muss nur entfacht werden.
                            </p>

                            <div className="mt-8 rounded-xl border border-white/10 bg-white/5 p-6">
                                <p className="text-white/90 leading-relaxed">
                                    Mit jedem Commit, jedem Eintrag und jeder neuen Idee entwickle ich mich
                                    weiter.{" "}
                                    <span className="text-[#d4af37] font-semibold">
                    Always Strive And Prosper
                  </span>{" "}
                                    – das ist nicht nur ein Name, sondern ein innerer Antrieb.
                                </p>
                            </div>
                        </div>

                        {/* Bottom accent */}
                        <div className="h-2 bg-gradient-to-r from-[#d4af37] via-neutral-900 to-black" />
                    </section>

                    {/* CTA */}
                    <section className="mt-10 md:mt-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 rounded-2xl border border-neutral-200 bg-white p-6 md:p-10 shadow-lg">
                        <div>
                            <h3 className="text-xl md:text-2xl font-extrabold">
                                Weiter mit den Daily Commits
                            </h3>
                            <p className="mt-2 text-neutral-600">
                                Tägliche Logs zur Entwicklung, Entscheidungen &amp; Learnings.
                            </p>
                        </div>

                        <a
                            href="/daily"
                            className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-white font-semibold shadow-md hover:bg-neutral-900 transition"
                        >
                            Zu den Daily Commits →
                        </a>
                    </section>
                </div>
            </main>

            <SiteFooter />
        </div>
    );
}