'use client';

import { useState } from 'react';

type SiteFooterProps = {
    showLegalLinks?: boolean;
};

type OpenModal = null | 'datenschutz' | 'impressum';

export default function SiteFooter({ showLegalLinks = false }: SiteFooterProps) {
    const currentYear = new Date().getFullYear();
    const [openModal, setOpenModal] = useState<OpenModal>(null);

    return (
        <>
            {/* WICHTIG: keine fixe Höhe auf Mobile */}
            <footer className="bg-black text-gray-300 px-4 md:px-20 py-3 md:py-0 md:h-20 flex items-center justify-center">
                <div className="text-center text-sm w-full">
                    {/* Mobile: eigene Zeile */}
                    <div className="whitespace-nowrap">
                        &copy; {currentYear} Lucas-Maurice Stein
                    </div>

                    {/* Mobile: eigene Zeile, Desktop: inline mit Pipes */}
                    <div className="mt-1 md:mt-0 flex items-center justify-center flex-wrap gap-x-4 gap-y-1">
                        {showLegalLinks && (
                            <button
                                type="button"
                                onClick={() => setOpenModal('impressum')}
                                className="text-[#d4af37] hover:underline"
                            >
                                Impressum
                            </button>
                        )}

                        {/* Pipes nur am Desktop sichtbar */}
                        {showLegalLinks && (
                            <span className="hidden md:inline text-gray-600">|</span>
                        )}

                        {showLegalLinks && (
                            <button
                                type="button"
                                onClick={() => setOpenModal('datenschutz')}
                                className="text-[#d4af37] hover:underline"
                            >
                                Datenschutz
                            </button>
                        )}
                    </div>
                </div>
            </footer>

            {/* Datenschutz / Impressum Modal */}
            {openModal && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4"
                    onClick={() => setOpenModal(null)}
                >
                    <div
                        className="relative w-full max-w-xl rounded-lg bg-neutral-900 p-6 text-neutral-300 shadow-xl"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <button
                            type="button"
                            onClick={() => setOpenModal(null)}
                            className="absolute right-4 top-4 text-neutral-500 hover:text-white"
                            aria-label="Modal schließen"
                        >
                            ✕
                        </button>

                        {openModal === 'datenschutz' && (
                            <>
                                <h2 className="mb-4 text-xl font-semibold">Datenschutzerklärung</h2>

                                <p className="mb-4">Verantwortlicher im Sinne der DSGVO:</p>

                                <p className="mb-4">
                                    <strong>Lucas-Maurice Stein</strong>
                                    <br />
                                    E-Mail:{' '}
                                    <a href="mailto:lucasmauricestein@gmail.com" className="underline">
                                        lucasmauricestein@gmail.com
                                    </a>
                                </p>

                                <p className="mb-4">
                                    Diese Website dient ausschließlich der Information. Es werden keine
                                    personenbezogenen Daten aktiv erhoben.
                                </p>

                                <p className="mb-4">
                                    Beim Zugriff auf diese Website werden durch den Hosting-Anbieter (Vercel)
                                    technisch notwendige Zugriffsdaten (z. B. IP-Adresse, Browsertyp, Zeitpunkt
                                    des Zugriffs) verarbeitet, um den sicheren Betrieb der Website zu gewährleisten.
                                </p>

                                <p className="text-sm text-neutral-500">
                                    Es werden keine Cookies zu Analyse- oder Marketingzwecken eingesetzt.
                                </p>
                            </>
                        )}

                        {openModal === 'impressum' && (
                            <>
                                <h2 className="mb-4 text-xl font-semibold">Impressum</h2>

                                <p className="mb-4">Angaben gemäß § 5 TMG:</p>

                                <p className="mb-4">
                                    <strong>Lucas-Maurice Stein</strong>
                                    <br />
                                    Herrengarten 39
                                    <br />
                                    75365 Calw
                                </p>

                                <p className="mb-4">
                                    Kontakt:
                                    <br />
                                    E-Mail:{' '}
                                    <a href="mailto:lucasmauricestein@gmail.com" className="underline">
                                        lucasmauricestein@gmail.com
                                    </a>
                                </p>
                            </>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}