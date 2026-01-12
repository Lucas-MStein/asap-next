"use client";

import { useMemo, useState } from "react";
import BackHeader from "@/components/BackHeader";
import SiteFooter from "@/components/SiteFooter";

import data from "./daily-data.json";

type DailyEntry = {
    date: string;
    initialCommitDone: string;
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

    return (
        <div className="bg-white text-black min-h-screen flex flex-col">
            <BackHeader href="/#blog" label="Zurück zu Beiträge" />

            <main className="flex-1 py-20 px-4 md:px-20">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-4xl font-extrabold tracking-tight mb-4">
                        Daily Commits
                    </h1>

                    <p className="text-lg leading-relaxed mb-10">
                        Tägliche Fortschritte ab dem offiziellen Projektstart am{" "}
                        <strong className="text-[#d4af37]">{data.projectStart}</strong>.
                    </p>

                    {/* Woche Buttons (dynamisch) */}
                    <div className="flex flex-wrap gap-4 mb-8">
                        {weekNumbers.map((w) => (
                            <button
                                key={w}
                                onClick={() => setActiveWeek(w)}
                                className={`px-4 py-2 border rounded-full transition ${
                                    activeWeek === w
                                        ? "bg-[#d4af37] text-black"
                                        : "bg-black text-white hover:bg-[#d4af37] hover:text-black"
                                }`}
                            >
                                Woche {w}
                            </button>
                        ))}
                    </div>

                    {/* Tabelle */}
                    <div className="overflow-x-auto bg-white shadow-lg rounded-xl">
                        <table className="min-w-full text-left border border-gray-200 text-sm md:text-base">
                            <thead className="bg-gray-100 text-gray-700 uppercase text-xs font-semibold tracking-wider">
                            <tr>
                                <th className="px-4 py-3 border-b">Datum</th>
                                <th className="px-4 py-3 border-b">Initial Commit erfüllt?</th>
                                <th className="px-4 py-3 border-b">Extras</th>
                                <th className="px-4 py-3 border-b">Anmerkungen</th>
                            </tr>
                            </thead>

                            <tbody>
                            {activeEntries.length === 0 ? (
                                <tr>
                                    <td className="px-4 py-6 border-b text-gray-500" colSpan={4}>
                                        Keine Einträge für Woche {activeWeek}.
                                    </td>
                                </tr>
                            ) : (
                                activeEntries.map((row, idx) => (
                                    <tr key={`${row.date}-${idx}`} className="hover:bg-gray-50">
                                        <td className="px-4 py-3 border-b">{row.date}</td>
                                        <td className="px-4 py-3 border-b">
                                            {row.initialCommitDone}
                                        </td>
                                        <td className="px-4 py-3 border-b">{row.extras}</td>
                                        <td className="px-4 py-3 border-b">{row.notes}</td>
                                    </tr>
                                ))
                            )}
                            </tbody>
                        </table>
                    </div>

                    <p className="mt-12 text-lg">
                        Weitere Materialien findest du unter{" "}
                        <a href="/downloads" className="text-[#d4af37] hover:underline">
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