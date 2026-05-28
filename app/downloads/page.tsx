import BackHeader from "@/components/BackHeader";
import SiteFooter from "@/components/SiteFooter";
import Container from "@/components/Container";
import Eyebrow from "@/components/Eyebrow";
import PageHeader from "@/components/PageHeader";

type ArchiveItem = {
    title: string;
    href: string;
    note?: string;
    status?: "wip" | "final";
    format?: string;
};

const ARCHIVE_ITEMS: ArchiveItem[] = [
    {
        title: "Gesicht verlieren",
        href: "/downloads/gesichtverlieren.pdf",
        note: "A short text on faces, presence and the small loss of them.",
        status: "wip",
        format: "PDF",
    },
];

export default function DownloadsPage() {
    return (
        <>
            <BackHeader href="/#notes" label="Back to Index" />

            <PageHeader
                eyebrow="Archive · 03"
                title="Archive"
                lede="Selected references, PDFs and collected material from the surrounding world of Always Strive And Prosper — kept here as part of a personal archive for culture, sound, style and thought."
            />

            <main className="bg-paper">
                <section className="border-b border-ink/10">
                    <Container className="py-20 md:py-28">
                        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                            <div>
                                <Eyebrow>Selected References</Eyebrow>
                                <h2 className="mt-6 text-3xl md:text-5xl font-medium tracking-tight">
                                    The Collection
                                </h2>
                            </div>
                            <p className="text-[11px] uppercase tracking-[0.28em] text-neutral-500">
                                {String(ARCHIVE_ITEMS.length).padStart(2, "0")} ·
                                Reference{ARCHIVE_ITEMS.length === 1 ? "" : "s"}
                            </p>
                        </div>

                        <span className="mt-10 block h-px w-12 bg-gold" aria-hidden="true" />

                        <ul className="mt-12 divide-y divide-ink/10 border-y border-ink/10">
                            {ARCHIVE_ITEMS.map((item, i) => (
                                <li key={item.href}>
                                    <ArchiveRow item={item} index={i + 1} />
                                </li>
                            ))}
                        </ul>
                    </Container>
                </section>

                <section>
                    <Container className="py-20 md:py-28">
                        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
                            <div>
                                <Eyebrow>Back · 01</Eyebrow>
                                <h3 className="mt-6 text-3xl md:text-4xl font-medium tracking-tight">
                                    Return to the Origin Note
                                </h3>
                                <p className="mt-4 max-w-md text-base leading-relaxed text-neutral-500">
                                    Re-read where the archive began.
                                </p>
                            </div>
                            <a
                                href="/initial"
                                className="group inline-flex items-center gap-3 self-start text-[11px] uppercase tracking-[0.28em] text-ink md:self-auto"
                            >
                                <span className="inline-block h-px w-8 bg-ink transition group-hover:w-12 group-hover:bg-gold" />
                                Read Origin Note
                            </a>
                        </div>
                    </Container>
                </section>
            </main>

            <SiteFooter />
        </>
    );
}

function ArchiveRow({ item, index }: { item: ArchiveItem; index: number }) {
    return (
        <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group grid grid-cols-[2.5rem_1fr] gap-6 py-8 md:grid-cols-[3rem_1fr_auto] md:items-baseline md:gap-10 md:py-10"
        >
            <span className="text-[11px] uppercase tracking-[0.28em] text-neutral-500 md:pt-1">
                {String(index).padStart(2, "0")}
            </span>

            <div>
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <h3 className="text-2xl md:text-3xl font-medium tracking-tight transition group-hover:text-neutral-500">
                        {item.title}
                    </h3>
                    {item.status === "wip" && (
                        <span className="text-[11px] uppercase tracking-[0.28em] text-gold">
                            Work in progress
                        </span>
                    )}
                </div>

                {item.note && (
                    <p className="mt-3 max-w-xl text-base leading-relaxed text-neutral-500">
                        {item.note}
                    </p>
                )}

                <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.18em] text-neutral-400">
                    {item.format ?? "FILE"} · Source {item.href}
                </p>
            </div>

            <span className="col-start-2 mt-4 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-ink md:col-auto md:mt-0">
                <span className="inline-block h-px w-6 bg-ink transition group-hover:w-10 group-hover:bg-gold" />
                Open {item.format ?? "file"}
            </span>
        </a>
    );
}
