import BackHeader from "@/components/BackHeader";
import SiteFooter from "@/components/SiteFooter";

type DownloadItem = {
    title: string;
    href: string;
    note?: string;
    status?: "wip" | "final";
};

const downloads: DownloadItem[] = [
    {
        title: "Gesicht verlieren",
        href: "/downloads/gesichtverlieren.pdf",
        note: "work in progress",
        status: "wip",
    },
];

export default function DownloadsPage() {
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
                        Ressourcen
                    </p>

                    <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight">
                        Downloads
                        <span className="block mt-3 h-1 w-20 bg-[#d4af37]" />
                    </h1>

                    <p className="mt-6 max-w-3xl text-white/80 text-lg leading-relaxed">
                        Hier findest du alle relevanten Dokumente zum Projekt{" "}
                        <span className="text-[#d4af37] font-semibold">
              Always Strive And Prosper
            </span>{" "}
                        – als PDFs zum Download.
                    </p>

                    {/* quick chips */}
                    <div className="mt-8 flex flex-wrap gap-3">
                        {["PDFs", "Notes", "Work in Progress"].map((label) => (
                            <span
                                key={label}
                                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/85 hover:bg-white/10 transition"
                            >
                {label}
              </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* CONTENT */}
            <main className="flex-1 bg-neutral-50 text-neutral-900">
                <div className="mx-auto max-w-6xl px-4 md:px-20 py-14 md:py-20">
                    {/* Card */}
                    <section className="rounded-2xl bg-white shadow-xl border border-neutral-200 overflow-hidden">
                        {/* top accent bar */}
                        <div className="h-2 bg-gradient-to-r from-black via-neutral-900 to-[#d4af37]" />

                        <div className="p-6 md:p-10">
                            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
                                <div>
                                    <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                                        Dokumente
                                        <span className="ml-3 align-middle inline-block h-1 w-10 bg-[#d4af37]" />
                                    </h2>
                                    <p className="mt-2 text-neutral-600">
                                        Alle Dateien werden direkt aus dem <span className="font-medium">/public/downloads</span>-Ordner ausgeliefert.
                                    </p>
                                </div>

                                <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2 text-sm text-neutral-700">
                  <span className="h-2 w-2 rounded-full bg-[#d4af37]" />
                                    {downloads.length} Datei{downloads.length === 1 ? "" : "en"}
                </span>
                            </div>

                            <div className="mt-8 grid gap-4">
                                {downloads.map((item) => (
                                    <DownloadRow key={item.href} item={item} />
                                ))}
                            </div>
                        </div>

                        {/* bottom accent */}
                        <div className="h-2 bg-gradient-to-r from-[#d4af37] via-neutral-900 to-black" />
                    </section>

                    {/* Divider “Balken” */}
                    <div className="my-10 md:my-14">
                        <div className="h-px bg-neutral-200" />
                        <div className="mx-auto mt-3 h-1 w-20 bg-[#d4af37]" />
                    </div>
                </div>
            </main>

            <SiteFooter />
        </div>
    );
}

function DownloadRow({ item }: { item: DownloadItem }) {
    const badge =
        item.status === "final" ? (
            <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
        FINAL
      </span>
        ) : (
            <span className="rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 px-3 py-1 text-xs font-semibold text-[#8a6f12]">
        WIP
      </span>
        );

    return (
        <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5 md:p-6 hover:bg-white transition">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex items-start gap-4">
                    <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl bg-black text-white">
                        <span className="text-sm font-bold">PDF</span>
                    </div>

                    <div>
                        <div className="flex items-center gap-3">
                            <h3 className="text-lg font-extrabold">{item.title}</h3>
                            {badge}
                        </div>

                        <p className="mt-1 text-sm text-neutral-600">
                            {item.note ?? "Zum Download verfügbar."}
                        </p>

                        <p className="mt-2 text-xs text-neutral-500">
                            Datei: <span className="font-mono">{item.href}</span>
                        </p>
                    </div>
                </div>

                <a
                    href={item.href}
                    download
                    className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-white font-semibold shadow-md hover:bg-neutral-900 transition"
                >
                    Download →
                </a>
            </div>
        </div>
    );
}