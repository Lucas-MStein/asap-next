import BackHeader from "@/components/BackHeader";
import SiteFooter from "@/components/SiteFooter";
import Container from "@/components/Container";
import Eyebrow from "@/components/Eyebrow";
import PageHeader from "@/components/PageHeader";

import data from "./field-notes-data.json";

type FieldNoteCategory = "Culture" | "Sound" | "Style" | "Thought";
type FieldNoteStatus = "draft" | "published" | "archived";

type FieldNoteItem = {
    category: FieldNoteCategory;
    title: string;
    text: string;
    reference: string | null;
    status?: FieldNoteStatus;
};

type WeekBlock = {
    week: number;
    title: string;
    summary: string;
    items: FieldNoteItem[];
};

export default function DailyPage() {
    const weeks = (data.weeks as WeekBlock[])
        .slice()
        .sort((a, b) => a.week - b.week);

    return (
        <>
            <BackHeader href="/#notes" label="Back to Index" />

            <PageHeader
                eyebrow="Field Notes · 02"
                title={data.title}
                lede={`${data.subtitle} ${data.description}`}
                meta={`Started ${data.startedAt}`}
            />

            <main className="bg-paper">
                {/* Week index */}
                {weeks.length > 1 && (
                    <section className="border-b border-ink/10">
                        <Container className="py-10 md:py-12">
                            <Eyebrow>Index</Eyebrow>
                            <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-[13px] uppercase tracking-[0.22em]">
                                {weeks.map((w) => (
                                    <li key={w.week}>
                                        <a
                                            href={`#week-${w.week}`}
                                            className="group inline-flex items-center gap-2 text-neutral-500 hover:text-ink"
                                        >
                                            <span className="text-neutral-400">
                                                W{String(w.week).padStart(2, "0")}
                                            </span>
                                            <span>{w.title}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </Container>
                    </section>
                )}

                {/* Weeks */}
                {weeks.map((week, idx) => (
                    <section
                        key={week.week}
                        id={`week-${week.week}`}
                        className={
                            idx < weeks.length - 1
                                ? "border-b border-ink/10 scroll-mt-20"
                                : "scroll-mt-20"
                        }
                    >
                        <Container className="py-20 md:py-28">
                            <div className="grid gap-10 md:grid-cols-[12rem_1fr] md:gap-16">
                                <div className="md:sticky md:top-24 md:self-start">
                                    <Eyebrow>
                                        Week {String(week.week).padStart(2, "0")}
                                    </Eyebrow>
                                    <h2 className="mt-6 text-3xl md:text-4xl font-medium tracking-tight leading-[1.1]">
                                        {week.title}
                                    </h2>
                                    <span
                                        className="mt-6 block h-px w-10 bg-gold"
                                        aria-hidden="true"
                                    />
                                    <p className="mt-6 text-base leading-relaxed text-neutral-500">
                                        {week.summary}
                                    </p>
                                </div>

                                <div>
                                    {week.items.length === 0 ? (
                                        <p className="text-base leading-relaxed text-neutral-500">
                                            No field notes for this week yet.
                                        </p>
                                    ) : (
                                        <ul className="divide-y divide-ink/10 border-y border-ink/10">
                                            {week.items.map((item, i) => (
                                                <li key={`${week.week}-${i}`}>
                                                    <FieldNoteRow item={item} />
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </div>
                        </Container>
                    </section>
                ))}

                {/* Continue */}
                <section className="border-t border-ink/10">
                    <Container className="py-20 md:py-28">
                        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
                            <div>
                                <Eyebrow>Next · 03</Eyebrow>
                                <h3 className="mt-6 text-3xl md:text-4xl font-medium tracking-tight">
                                    Open the Archive
                                </h3>
                                <p className="mt-4 max-w-md text-base leading-relaxed text-neutral-500">
                                    Selected references, PDFs and material from the surrounding
                                    world.
                                </p>
                            </div>
                            <a
                                href="/downloads"
                                className="group inline-flex items-center gap-3 self-start text-[11px] uppercase tracking-[0.28em] text-ink md:self-auto"
                            >
                                <span className="inline-block h-px w-8 bg-ink transition group-hover:w-12 group-hover:bg-gold" />
                                Open Archive
                            </a>
                        </div>
                    </Container>
                </section>
            </main>

            <SiteFooter />
        </>
    );
}

function FieldNoteRow({ item }: { item: FieldNoteItem }) {
    return (
        <article className="py-8 md:py-10">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] uppercase tracking-[0.28em]">
                <span className="text-ink">{item.category}</span>
                {item.status && (
                    <span className="text-neutral-400">{item.status}</span>
                )}
            </div>

            <h3 className="mt-5 text-xl md:text-2xl font-medium tracking-tight leading-snug">
                {item.title}
            </h3>

            <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-600">
                {item.text}
            </p>

            {item.reference && (
                <p className="mt-6 text-[11px] uppercase tracking-[0.28em] text-neutral-500">
                    Reference ·{" "}
                    <span className="text-neutral-800 normal-case tracking-normal">
                        {item.reference}
                    </span>
                </p>
            )}
        </article>
    );
}
