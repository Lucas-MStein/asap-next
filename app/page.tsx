import Image from "next/image";
import HomeNavbar from "@/components/HomeNavbar";
import SiteFooter from "@/components/SiteFooter";
import Container from "@/components/Container";
import Eyebrow from "@/components/Eyebrow";

type ArchiveEntry = {
    index: string;
    title: string;
    description: string;
    href: string;
    cta: string;
};

const ARCHIVE_ENTRIES: ArchiveEntry[] = [
    {
        index: "01",
        title: "Origin Note",
        description:
            "The first entry — where the archive comes from and what it tries to hold.",
        href: "/initial",
        cta: "Read note",
    },
    {
        index: "02",
        title: "Field Notes",
        description:
            "Weekly fragments from culture, sound, style and thought. Unfinished on purpose.",
        href: "/daily",
        cta: "View notes",
    },
    {
        index: "03",
        title: "Archive",
        description:
            "Selected references, PDFs and collected material from the surrounding world.",
        href: "/downloads",
        cta: "Open archive",
    },
];

export default function HomePage() {
    return (
        <>
            <HomeNavbar />

            {/* Hero */}
            <section
                id="home"
                className="relative border-b border-ink/10"
            >
                <Container className="py-24 md:py-40">
                    <Eyebrow>The Archive · Est. 2025</Eyebrow>

                    <h1 className="mt-10 text-5xl md:text-7xl lg:text-[5.5rem] font-medium tracking-tight leading-[1.02]">
                        Always Strive
                        <br />
                        And Prosper.
                    </h1>

                    <span
                        className="mt-10 block h-px w-16 bg-gold"
                        aria-hidden="true"
                    />

                    <p className="mt-10 max-w-2xl text-lg md:text-2xl leading-relaxed text-neutral-600">
                        A personal archive for culture, sound, style and thought —
                        collected references, observations and unfinished ideas.
                    </p>

                    <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 text-[11px] uppercase tracking-[0.28em]">
                        <a
                            href="#notes"
                            className="group inline-flex items-center gap-3 text-ink"
                        >
                            <span className="inline-block h-px w-8 bg-ink transition group-hover:w-12 group-hover:bg-gold" />
                            Enter Archive
                        </a>
                        <a
                            href="#about"
                            className="text-neutral-500 transition hover:text-ink"
                        >
                            About the archive
                        </a>
                    </div>
                </Container>
            </section>

            {/* Notes / Archive Index */}
            <section id="notes" className="border-b border-ink/10">
                <Container className="py-24 md:py-36">
                    <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                        <div>
                            <Eyebrow>Index</Eyebrow>
                            <h2 className="mt-6 text-3xl md:text-5xl font-medium tracking-tight">
                                Latest Notes
                            </h2>
                        </div>
                        <p className="max-w-sm text-sm leading-relaxed text-neutral-500">
                            Three entry points into the archive — each grows on its own
                            rhythm.
                        </p>
                    </div>

                    <span
                        className="mt-12 block h-px w-12 bg-gold"
                        aria-hidden="true"
                    />

                    <ul className="mt-12 divide-y divide-ink/10 border-y border-ink/10">
                        {ARCHIVE_ENTRIES.map((entry) => (
                            <li key={entry.index}>
                                <a
                                    href={entry.href}
                                    className="group grid grid-cols-[3rem_1fr] gap-6 py-8 md:grid-cols-[4rem_1fr_auto] md:items-baseline md:gap-10 md:py-10"
                                >
                                    <span className="text-[11px] uppercase tracking-[0.28em] text-neutral-500 md:pt-1">
                                        {entry.index}
                                    </span>

                                    <div className="col-span-1 md:col-span-1">
                                        <h3 className="text-2xl md:text-4xl font-medium tracking-tight transition group-hover:text-neutral-500">
                                            {entry.title}
                                        </h3>
                                        <p className="mt-3 max-w-md text-sm md:text-base leading-relaxed text-neutral-500">
                                            {entry.description}
                                        </p>
                                    </div>

                                    <span className="col-start-2 mt-4 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-ink md:col-auto md:mt-0">
                                        <span className="inline-block h-px w-6 bg-ink transition group-hover:w-10 group-hover:bg-gold" />
                                        {entry.cta}
                                    </span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </Container>
            </section>

            {/* About */}
            <section id="about" className="border-b border-ink/10 bg-ink text-paper">
                <Container className="py-24 md:py-36">
                    <div className="grid gap-16 md:grid-cols-[1fr_1.2fr] md:gap-20 md:items-start">
                        <div>
                            <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden border border-paper/15">
                                <Image
                                    src="/img/me.webp"
                                    alt="Lucas-Maurice Stein"
                                    fill
                                    sizes="(max-width: 768px) 80vw, 32rem"
                                    className="object-cover grayscale"
                                />
                            </div>
                        </div>

                        <div>
                            <Eyebrow tone="paper">About the Archive</Eyebrow>

                            <h2 className="mt-6 text-3xl md:text-5xl font-medium tracking-tight leading-[1.1]">
                                Not a blog.
                                <br />
                                A personal archive.
                            </h2>

                            <span className="mt-8 block h-px w-12 bg-gold" aria-hidden="true" />

                            <div className="mt-10 space-y-6 text-lg leading-relaxed text-paper/80">
                                <p>
                                    <span className="text-paper">Always Strive And Prosper</span>{" "}
                                    is the working title for a slow-burning collection — references,
                                    fragments and observations from music, street culture, design
                                    and digital aesthetics.
                                </p>
                                <p>
                                    Curated by{" "}
                                    <span className="text-paper">Lucas-Maurice Stein</span>.
                                    Nothing here aims to teach. It only tries to remember.
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Contact */}
            <section id="contact">
                <Container className="py-24 md:py-36">
                    <Eyebrow>Contact</Eyebrow>

                    <h2 className="mt-6 max-w-3xl text-3xl md:text-5xl font-medium tracking-tight leading-[1.1]">
                        For exchanges, ideas
                        <br className="hidden md:block" /> and quiet collaborations.
                    </h2>

                    <span className="mt-8 block h-px w-12 bg-gold" aria-hidden="true" />

                    <a
                        href="mailto:lucasmauricestein@gmail.com"
                        className="group mt-12 inline-flex items-center gap-4 text-lg md:text-xl text-ink"
                    >
                        <span className="inline-block h-px w-10 bg-ink transition group-hover:w-16 group-hover:bg-gold" />
                        lucasmauricestein@gmail.com
                    </a>
                </Container>
            </section>

            <SiteFooter showLegalLinks />
        </>
    );
}
