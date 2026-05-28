"use client";

import { useEffect, useState } from "react";

type SiteFooterProps = {
    showLegalLinks?: boolean;
    tone?: "ink" | "paper";
};

type OpenModal = null | "datenschutz" | "impressum";

export default function SiteFooter({
    showLegalLinks = false,
    tone = "paper",
}: SiteFooterProps) {
    const currentYear = new Date().getFullYear();
    const [openModal, setOpenModal] = useState<OpenModal>(null);

    useEffect(() => {
        document.body.style.overflow = openModal ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [openModal]);

    const isInk = tone === "ink";
    const wrapper = isInk
        ? "border-t border-paper/10 bg-ink text-paper"
        : "border-t border-ink/10 bg-paper text-ink";
    const muted = isInk ? "text-paper/60" : "text-neutral-500";
    const link = isInk
        ? "text-paper/80 hover:text-gold transition"
        : "text-neutral-500 hover:text-ink transition";

    return (
        <>
            <footer className={wrapper}>
                <div className="mx-auto flex w-full max-w-5xl flex-col items-start justify-between gap-4 px-6 py-8 text-[11px] uppercase tracking-[0.28em] md:flex-row md:items-center md:px-10">
                    <span className={muted}>
                        © {currentYear} · Lucas-Maurice Stein
                    </span>

                    {showLegalLinks && (
                        <nav aria-label="Legal" className="flex items-center gap-6">
                            <button
                                type="button"
                                onClick={() => setOpenModal("impressum")}
                                className={link}
                            >
                                Impressum
                            </button>
                            <button
                                type="button"
                                onClick={() => setOpenModal("datenschutz")}
                                className={link}
                            >
                                Datenschutz
                            </button>
                        </nav>
                    )}
                </div>
            </footer>

            {openModal && (
                <div
                    role="dialog"
                    aria-modal="true"
                    aria-label={openModal === "impressum" ? "Impressum" : "Datenschutz"}
                    className="fixed inset-0 z-50 flex items-end justify-center bg-ink/70 px-4 py-6 md:items-center"
                    onClick={() => setOpenModal(null)}
                >
                    <div
                        className="relative w-full max-w-xl border border-ink/10 bg-paper p-8 md:p-10"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            type="button"
                            onClick={() => setOpenModal(null)}
                            className="absolute right-6 top-6 text-[11px] uppercase tracking-[0.28em] text-neutral-500 hover:text-ink"
                            aria-label="Close"
                        >
                            Close
                        </button>

                        <p className="text-[11px] uppercase tracking-[0.28em] text-neutral-500">
                            {openModal === "impressum" ? "Imprint" : "Privacy"}
                        </p>

                        <h2 className="mt-4 text-2xl font-medium tracking-tight text-ink">
                            {openModal === "impressum" ? "Impressum" : "Datenschutz"}
                        </h2>

                        <span className="mt-4 block h-px w-10 bg-gold" aria-hidden="true" />

                        {openModal === "impressum" && (
                            <div className="mt-6 space-y-4 text-sm leading-relaxed text-neutral-700">
                                <p>Angaben gemäß § 5 TMG:</p>
                                <p>
                                    <strong>Lucas-Maurice Stein</strong>
                                    <br />
                                    Herrengarten 39
                                    <br />
                                    75365 Calw
                                </p>
                                <p>
                                    E-Mail:{" "}
                                    <a
                                        href="mailto:lucasmauricestein@gmail.com"
                                        className="underline underline-offset-4 hover:text-ink"
                                    >
                                        lucasmauricestein@gmail.com
                                    </a>
                                </p>
                            </div>
                        )}

                        {openModal === "datenschutz" && (
                            <div className="mt-6 space-y-4 text-sm leading-relaxed text-neutral-700">
                                <p>Verantwortlicher im Sinne der DSGVO:</p>
                                <p>
                                    <strong>Lucas-Maurice Stein</strong>
                                    <br />
                                    E-Mail:{" "}
                                    <a
                                        href="mailto:lucasmauricestein@gmail.com"
                                        className="underline underline-offset-4 hover:text-ink"
                                    >
                                        lucasmauricestein@gmail.com
                                    </a>
                                </p>
                                <p>
                                    Diese Website dient ausschließlich der Information. Es
                                    werden keine personenbezogenen Daten aktiv erhoben.
                                </p>
                                <p>
                                    Beim Zugriff auf diese Website werden durch den
                                    Hosting-Anbieter (Vercel) technisch notwendige Zugriffsdaten
                                    (z. B. IP-Adresse, Browsertyp, Zeitpunkt des Zugriffs)
                                    verarbeitet, um den sicheren Betrieb der Website zu
                                    gewährleisten.
                                </p>
                                <p className="text-neutral-500">
                                    Es werden keine Cookies zu Analyse- oder Marketingzwecken
                                    eingesetzt.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}
