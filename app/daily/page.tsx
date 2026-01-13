"use client";

import { useMemo, useState } from "react";
import BackHeader from "@/components/BackHeader";
import SiteFooter from "@/components/SiteFooter";

import data from "./daily-data.json";

type DailyEntry = {
    date: string;
    initialCommitDone: string; // "Ja" | "Nein" | "-"
    extras: string;
    notes: string;
};

type WeekBlock = {
    week: number;
    entries: DailyEntry[];
};

export default function DailyPage() {
    const weeks = data.weeks as WeekBlock[];

    const weekNumbers = useMemo(
        () => weeks.map((w) => w.week).sort((a, b) => a - b),
        [weeks]
    );

    const [activeWeek, setActiveWeek] = useState<number>(weekNumbers[0] ?? 1);

    const activeEntries = useMemo(() => {
        return weeks.find((w) => w.week === activeWeek)?.entries ?? [];
    }, [weeks, activeWeek]);

    const stats = useMemo(() => {
        const total = activeEntries.length;

        const yes = activeEntries.filter((e) => e.initialCommitDone === "Ja").length;
        const no = activeEntries.filter((e) => e.initialCommitDone === "Nein").length;
        const open = activeEntries.filter((e) => e.initialCommitDone === "-").length;

        return { total, yes, no, open };
    }, [activeEntries]);

    return (
        <div className="min-h-screen flex flex-col bg-neutral-950 text-white">
            <BackHeader href="/#blog" label="Zurück zu Beiträge" />

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
                        Logbook
                    </p>

                    <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight">
                        Daily Commits
                        <span className="block mt-3 h-1 w-20 bg-[#d4af37]" />
                    </h1>

                    <p className="mt-6 max-w-3xl text-white/80 text-lg leading-relaxed">
                        Tägliche Fortschritte ab dem offiziellen Projektstart am{" "}
                        <span className="text-[#d4af37] font-semibold">{data.projectStart}</span>.
                    </p>

                    {/* Week switch */}
                    <div className="mt-10 flex flex-wrap gap-3">
                        {weekNumbers.map((w) => {
                            const active = w === activeWeek;
                            return (
                                <button
                                    key={w}
                                    onClick={() => setActiveWeek(w)}
                                    className={[
                                        "px-5 py-2.5 rounded-full border transition font-medium",
                                        active
                                            ? "bg-[#d4af37] text-black border-[#d4af37]"
                                            : "bg-white/5 text-white border-white/10 hover:bg-white/10 hover:border-white/20",
                                    ].join(" ")}
                                >
                                    Woche {w}
                                </button>
                            );
                        })}
                    </div>

                    {/* Mini stats */}
                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-4 gap-3">
                        <StatCard label="Tage" value={stats.total} />
                        <StatCard label="Erfüllt" value={stats.yes} accent />
                        <StatCard label="Nicht erfüllt" value={stats.no} />
                        <StatCard label="Offen" value={stats.open} />
                    </div>
                </div>
            </section>

            {/* CONTENT */}
            <main className="flex-1 bg-neutral-50 text-neutral-900">
                <div className="mx-auto max-w-6xl px-4 md:px-20 py-14 md:py-20">
                    {/* Table Card */}
                    <section className="rounded-2xl bg-white shadow-xl border border-neutral-200 overflow-hidden">
                        {/* top accent bar */}
                        <div className="h-2 bg-gradient-to-r from-black via-neutral-900 to-[#d4af37]" />

                        <div className="p-4 md:p-6">
                            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
                                <div>
                                    <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                                        Woche {activeWeek}
                                        <span className="ml-3 align-middle inline-block h-1 w-10 bg-[#d4af37]" />
                                    </h2>
                                    <p className="mt-2 text-neutral-600">
                                        Einträge für diese Woche im Überblick.
                                    </p>
                                </div>
                            </div>

                            <div className="mt-6 overflow-x-auto">
                                <table className="min-w-full text-left border border-neutral-200 text-sm md:text-base rounded-xl overflow-hidden">
                                    <thead className="bg-neutral-100 text-neutral-700 uppercase text-xs font-semibold tracking-wider">
                                    <tr>
                                        <th className="px-4 py-3 border-b">Datum</th>
                                        <th className="px-4 py-3 border-b">
                                            Initial Commit erfüllt?
                                        </th>
                                        <th className="px-4 py-3 border-b">Extras</th>
                                        <th className="px-4 py-3 border-b">Anmerkungen</th>
                                    </tr>
                                    </thead>

                                    <tbody>
                                    {activeEntries.length === 0 ? (
                                        <tr>
                                            <td
                                                className="px-4 py-6 border-b text-neutral-500"
                                                colSpan={4}
                                            >
                                                Keine Einträge für Woche {activeWeek}.
                                            </td>
                                        </tr>
                                    ) : (
                                        activeEntries.map((row, idx) => (
                                            <tr
                                                key={`${row.date}-${idx}`}
                                                className="hover:bg-neutral-50"
                                            >
                                                <td className="px-4 py-3 border-b">{row.date}</td>

                                                <td className="px-4 py-3 border-b">
                                                    <StatusPill value={row.initialCommitDone} />
                                                </td>

                                                <td className="px-4 py-3 border-b">{row.extras}</td>
                                                <td className="px-4 py-3 border-b">{row.notes}</td>
                                            </tr>
                                        ))
                                    )}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* bottom accent */}
                        <div className="h-2 bg-gradient-to-r from-[#d4af37] via-neutral-900 to-black" />
                    </section>

                    {/* Divider (Balken wie Startseite) */}
                    <div className="my-10 md:my-14">
                        <div className="h-px bg-neutral-200" />
                        <div className="mx-auto mt-3 h-1 w-20 bg-[#d4af37]" />
                    </div>

                    {/* Hint */}
                    <p className="text-lg text-neutral-800">
                        Weitere Materialien findest du unter{" "}
                        <a href="/downloads" className="text-[#d4af37] hover:underline font-medium">
                            Downloads
                        </a>
                        .
                    </p>
                </div>
            </main>

            <SiteFooter />
        </div>
    );
}

/* ---------- UI helpers (keine extra files nötig) ---------- */

function StatCard({
                      label,
                      value,
                      accent,
                  }: {
    label: string;
    value: number;
    accent?: boolean;
}) {
    return (
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-sm">
            <p className="text-xs uppercase tracking-[0.25em] text-white/60">
                {label}
            </p>
            <p className={["mt-2 text-3xl font-extrabold", accent ? "text-[#d4af37]" : "text-white"].join(" ")}>
                {value}
            </p>
        </div>
    );
}

function StatusPill({ value }: { value: string }) {
    const isYes = value === "Ja";
    const isNo = value === "Nein";

    const cls = isYes
        ? "bg-[#d4af37]/15 text-[#8a6f12] border-[#d4af37]/30"
        : isNo
            ? "bg-black/5 text-neutral-700 border-neutral-200"
            : "bg-neutral-100 text-neutral-600 border-neutral-200";

    const label = isYes ? "Ja" : isNo ? "Nein" : "-";

    return (
        <span className={`inline-flex items-center justify-center rounded-full border px-3 py-1 text-sm font-medium ${cls}`}>
      {label}
    </span>
    );
}