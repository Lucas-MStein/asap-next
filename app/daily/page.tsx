"use client";

import { useMemo, useState } from "react";
import BackHeader from "@/components/BackHeader";
import SiteFooter from "@/components/SiteFooter";

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
    const weeks = data.weeks as WeekBlock[];

    const weekNumbers = useMemo(
        () => weeks.map((w) => w.week).sort((a, b) => a - b),
        [weeks]
    );

    const [activeWeek, setActiveWeek] = useState<number>(weekNumbers[0] ?? 1);

    const activeWeekBlock = useMemo(() => {
        return weeks.find((w) => w.week === activeWeek) ?? weeks[0];
    }, [weeks, activeWeek]);

    const categories = data.categories as FieldNoteCategory[];

    return (
        <div className="min-h-screen flex flex-col bg-neutral-950 text-white">
            <BackHeader href="/#blog" label="Back to Notes" />

            {/* HERO */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-neutral-950" />

                {/* gold bars */}
                <div className="absolute left-0 right-0 top-0 h-[2px] bg-[#d4af37]/70" />
                <div className="absolute left-0 right-0 bottom-0 h-[2px] bg-[#d4af37]/40" />

                {/* glow */}
                <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#d4af37]/10 blur-3xl" />

                <div className="relative mx-auto max-w-6xl px-4 md:px-20 py-14 md:py-18">
                    <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-white/70">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#d4af37]" />
                        Field Notes
                    </p>

                    <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight">
                        {data.title}
                        <span className="block mt-3 h-1 w-20 bg-[#d4af37]" />
                    </h1>

                    <p className="mt-6 max-w-3xl text-white/80 text-lg leading-relaxed">
                        {data.subtitle} {data.description}
                    </p>

                    <p className="mt-4 max-w-3xl text-white/60 text-sm uppercase tracking-[0.2em]">
                        Started {data.startedAt}
                    </p>

                    {/* Week switch */}
                    <div className="mt-10 flex flex-wrap gap-3">
                        {weekNumbers.map((w) => {
                            const active = w === activeWeek;
                            return (
                                <button
                                    key={w}
                                    type="button"
                                    onClick={() => setActiveWeek(w)}
                                    className={[
                                        "px-5 py-2.5 rounded-full border transition font-medium",
                                        active
                                            ? "bg-[#d4af37] text-black border-[#d4af37]"
                                            : "bg-white/5 text-white border-white/10 hover:bg-white/10 hover:border-white/20",
                                    ].join(" ")}
                                >
                                    Week {w}
                                </button>
                            );
                        })}
                    </div>

                    {/* Category chips */}
                    <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                        {categories.map((category) => (
                            <div
                                key={category}
                                className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-sm"
                            >
                                <p className="text-xs uppercase tracking-[0.25em] text-white/60">
                                    {category}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CONTENT */}
            <main className="flex-1 bg-neutral-50 text-neutral-900">
                <div className="mx-auto max-w-6xl px-4 md:px-20 py-14 md:py-20">
                    {/* Week Card */}
                    <section className="rounded-2xl bg-white shadow-xl border border-neutral-200 overflow-hidden">
                        <div className="h-2 bg-gradient-to-r from-black via-neutral-900 to-[#d4af37]" />

                        <div className="p-6 md:p-10">
                            <div className="max-w-3xl">
                                <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
                                    Week {activeWeekBlock.week}
                                </p>

                                <h2 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight">
                                    {activeWeekBlock.title}
                                    <span className="block mt-3 h-1 w-16 bg-[#d4af37]" />
                                </h2>

                                <p className="mt-5 text-neutral-600 text-lg leading-relaxed">
                                    {activeWeekBlock.summary}
                                </p>
                            </div>

                            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
                                {activeWeekBlock.items.length === 0 ? (
                                    <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 text-neutral-500 md:col-span-2">
                                        No Field Notes for Week {activeWeekBlock.week} yet.
                                    </div>
                                ) : (
                                    activeWeekBlock.items.map((item, index) => (
                                        <FieldNoteCard
                                            key={`${item.category}-${item.title}-${index}`}
                                            item={item}
                                        />
                                    ))
                                )}
                            </div>
                        </div>

                        <div className="h-2 bg-gradient-to-r from-[#d4af37] via-neutral-900 to-black" />
                    </section>

                    {/* Divider */}
                    <div className="my-10 md:my-14">
                        <div className="h-px bg-neutral-200" />
                        <div className="mx-auto mt-3 h-1 w-20 bg-[#d4af37]" />
                    </div>

                    <section className="mt-10 md:mt-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 rounded-2xl border border-neutral-200 bg-white p-6 md:p-10 shadow-lg">
                        <div>
                            <h3 className="text-xl md:text-2xl font-extrabold">
                                Open the Archive
                            </h3>
                            <p className="mt-2 text-neutral-600">
                                Kuratierte PDFs, Referenzen und Sammlungen findest du im Archiv.
                            </p>
                        </div>

                        <a
                            href="/downloads"
                            className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-white font-semibold shadow-md hover:bg-neutral-900 transition"
                        >
                            Open Archive →
                        </a>
                    </section>
                </div>
            </main>

            <SiteFooter />
        </div>
    );
}

/* ---------- UI helpers ---------- */

function FieldNoteCard({ item }: { item: FieldNoteItem }) {
    return (
        <article className="flex h-full flex-col rounded-2xl border border-neutral-200 bg-neutral-50 p-6 transition hover:-translate-y-0.5 hover:shadow-lg">
            <div className="flex items-center justify-between gap-3">
                <span className="inline-flex rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#8a6f12]">
                    {item.category}
                </span>

                {item.status && (
                    <span className="text-xs uppercase tracking-[0.2em] text-neutral-400">
                        {item.status}
                    </span>
                )}
            </div>

            <h3 className="mt-5 text-xl font-extrabold tracking-tight text-neutral-950">
                {item.title}
            </h3>

            <p className="mt-3 flex-1 text-neutral-600 leading-relaxed">
                {item.text}
            </p>

            {item.reference && (
                <p className="mt-6 border-t border-neutral-200 pt-4 text-sm text-neutral-500">
                    Reference: <span className="font-medium text-neutral-800">{item.reference}</span>
                </p>
            )}
        </article>
    );
}