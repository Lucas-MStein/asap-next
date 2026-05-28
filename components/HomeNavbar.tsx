"use client";

import { useEffect, useState } from "react";

type NavItem = {
    href: string;
    label: string;
};

const NAV_ITEMS: NavItem[] = [
    { href: "#home", label: "Home" },
    { href: "#notes", label: "Notes" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
];

export default function HomeNavbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeHash, setActiveHash] = useState<string>("#home");

    useEffect(() => {
        const onHashChange = () => {
            setActiveHash(window.location.hash || "#home");
        };

        onHashChange();
        window.addEventListener("hashchange", onHashChange);
        return () => window.removeEventListener("hashchange", onHashChange);
    }, []);

    useEffect(() => {
        document.body.style.overflow = mobileOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [mobileOpen]);

    const close = () => setMobileOpen(false);

    return (
        <>
            <nav
                aria-label="Primary"
                className="sticky top-0 z-40 border-b border-ink/10 bg-paper/85 backdrop-blur supports-[backdrop-filter]:bg-paper/70"
            >
                <div className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between px-6 md:px-10">
                    <a
                        href="#home"
                        onClick={close}
                        className="text-[13px] uppercase tracking-[0.22em] text-ink"
                        aria-label="Always Strive And Prosper — home"
                    >
                        Always Strive And Prosper
                    </a>

                    <ul className="hidden md:flex items-center gap-8 text-[13px] uppercase tracking-[0.22em]">
                        {NAV_ITEMS.map((item) => {
                            const isActive = activeHash === item.href;
                            return (
                                <li key={item.href}>
                                    <a
                                        href={item.href}
                                        className={
                                            isActive
                                                ? "relative text-ink"
                                                : "relative text-neutral-500 transition hover:text-ink"
                                        }
                                    >
                                        {item.label}
                                        {isActive && (
                                            <span className="absolute -bottom-1 left-0 h-px w-full bg-gold" />
                                        )}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>

                    <button
                        type="button"
                        onClick={() => setMobileOpen((v) => !v)}
                        className="md:hidden text-[11px] uppercase tracking-[0.28em] text-ink"
                        aria-label={mobileOpen ? "Close menu" : "Open menu"}
                        aria-expanded={mobileOpen}
                        aria-controls="mobile-menu"
                    >
                        {mobileOpen ? "Close" : "Menu"}
                    </button>
                </div>
            </nav>

            {mobileOpen && (
                <div
                    id="mobile-menu"
                    className="fixed inset-0 z-50 flex flex-col bg-paper md:hidden"
                >
                    <div className="flex h-14 items-center justify-between border-b border-ink/10 px-6">
                        <span className="text-[13px] uppercase tracking-[0.22em] text-ink">
                            Always Strive And Prosper
                        </span>
                        <button
                            type="button"
                            onClick={close}
                            className="text-[11px] uppercase tracking-[0.28em] text-ink"
                            aria-label="Close menu"
                        >
                            Close
                        </button>
                    </div>

                    <nav aria-label="Mobile" className="flex-1 px-6 pt-16">
                        <ul className="flex flex-col gap-6">
                            {NAV_ITEMS.map((item) => {
                                const isActive = activeHash === item.href;
                                return (
                                    <li key={item.href}>
                                        <a
                                            href={item.href}
                                            onClick={close}
                                            className={
                                                isActive
                                                    ? "block text-4xl font-medium tracking-tight text-ink"
                                                    : "block text-4xl font-medium tracking-tight text-neutral-400"
                                            }
                                        >
                                            {item.label}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>

                    <div className="border-t border-ink/10 px-6 py-8">
                        <p className="text-[11px] uppercase tracking-[0.28em] text-neutral-500">
                            A personal archive for culture, sound, style and thought.
                        </p>
                    </div>
                </div>
            )}
        </>
    );
}
