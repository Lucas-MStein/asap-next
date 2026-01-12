"use client";

import { useState } from "react";
import BackHeader from "@/components/BackHeader";
import SiteFooter from "@/components/SiteFooter";

export default function DailyPage() {
    const [week, setWeek] = useState<1 | 2>(1);

    return (
        <div className="bg-white text-black min-h-screen flex flex-col">
            <BackHeader href="/#blog" label="Zurück zu Beiträge" />

            <main className="flex-1 py-20 px-4 md:px-20">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-4xl font-extrabold mb-4">Daily Commits</h1>

                    <div className="flex space-x-4 mb-8">
                        <button onClick={() => setWeek(1)} className="px-4 py-2 border rounded-full">
                            Woche 1
                        </button>
                        <button onClick={() => setWeek(2)} className="px-4 py-2 border rounded-full">
                            Woche 2
                        </button>
                    </div>

                    <p className="text-lg">
                        Aktive Woche: <strong>Woche {week}</strong>
                    </p>
                </div>
            </main>

            <SiteFooter />
        </div>
    );
}