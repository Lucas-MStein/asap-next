"use client";

import { useEffect, useState } from "react";

type NavItem = {
    href: string;
    label: string;
};

const NAV_ITEMS: NavItem[] = [
    { href: "#home", label: "Home" },
    { href: "#blog", label: "Blog" },
    { href: "#about", label: "Über" },
    { href: "#contact", label: "Kontakt" },
];

export default function HomeNavbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeHash, setActiveHash] = useState<string>("#home");

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        const onHashChange = () => {
            setActiveHash(window.location.hash || "#home");
        };

        onScroll();
        onHashChange();

        window.addEventListener("scroll", onScroll);
        window.addEventListener("hashchange", onHashChange);

        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("hashchange", onHashChange);
        };
    }, []);

    const closeMobileMenu = () => {
        setMobileOpen(false);
    };

    const navBase =
        "fixed top-0 left-0 right-0 z-40 h-14 transition-all duration-300";
    const navTop = "bg-black/30 backdrop-blur-sm";
    const navScrolled =
        "bg-black/80 backdrop-blur-md shadow-lg border-b border-white/10";

    return (
        <>
            <nav id="navbar" className={`${navBase} ${scrolled ? navScrolled : navTop}`}>
                {/* Gold line (Signature Detail) */}
                <div
                    className={`absolute left-0 right-0 top-0 h-[2px] transition-opacity duration-300 ${
                        scrolled ? "opacity-100 bg-[#d4af37]" : "opacity-0"
                    }`}
                />

                <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-4 md:px-6">
                    {/* Brand */}
                    <a
                        href="#home"
                        className="group inline-flex items-center gap-2 text-white"
                        aria-label="Zur Startseite"
                        onClick={closeMobileMenu}
                    >
                        <img
                            src="/img/asap-logo.png"
                            alt="A$AP Logo"
                            className="h-6 w-auto opacity-95 group-hover:opacity-100 transition"
                        />
                        <span className="text-sm font-semibold uppercase tracking-wider">
              ALWAYS<span className="text-[#d4af37]">STRIVE</span>ANDPROSPER
            </span>
                    </a>

                    {/* Desktop Navigation */}
                    <ul className="hidden md:flex items-center gap-8 text-sm">
                        {NAV_ITEMS.map((item) => {
                            const isActive = activeHash === item.href;

                            return (
                                <li key={item.href}>
                                    <a
                                        href={item.href}
                                        className={[
                                            "relative py-2 transition",
                                            isActive
                                                ? "text-[#d4af37]"
                                                : "text-white/80 hover:text-white",
                                        ].join(" ")}
                                    >
                                        {item.label}

                                        {/* Gold underline */}
                                        <span
                                            className={[
                                                "absolute left-0 -bottom-1 h-[2px] bg-[#d4af37] transition-all duration-300",
                                                isActive ? "w-full" : "w-0 hover:w-full",
                                            ].join(" ")}
                                        />
                                    </a>
                                </li>
                            );
                        })}
                    </ul>

                    {/* Right controls */}
                    <div className="flex items-center gap-3">
                        {/* Accent dot */}
                        <span className="hidden md:inline-block h-2 w-2 rounded-full bg-[#d4af37]" />

                        {/* Mobile menu toggle */}
                        <button
                            id="menu-toggle"
                            className="md:hidden text-xs font-semibold uppercase tracking-[0.25em] text-[#d4af37] transition hover:text-white"
                            onClick={(e) => {
                                e.stopPropagation();
                                setMobileOpen((v) => !v);
                            }}
                            aria-label={mobileOpen ? "Menü schließen" : "Menü öffnen"}
                            aria-expanded={mobileOpen}
                            aria-controls="mobile-menu"
                            type="button"
                        >
                            {mobileOpen ? "Close" : "Menu"}
                        </button>
                    </div>
                </div>


            </nav>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div
                    id="mobile-menu"
                    className="fixed left-0 right-0 top-0 z-50 mx-auto h-dvh w-full max-w-6xl overflow-hidden bg-black text-white md:hidden"
                >
                    <div className="flex h-14 items-center justify-between px-4 md:px-6">
                        <a
                            href="#home"
                            className="group inline-flex items-center gap-2 text-white"
                            aria-label="Zur Startseite"
                            onClick={closeMobileMenu}
                        >
                            <img
                                src="/img/asap-logo.png"
                                alt="A$AP Logo"
                                className="h-6 w-auto opacity-95 transition group-hover:opacity-100"
                            />
                            <span className="text-sm font-semibold uppercase tracking-wider">
                                ALWAYS<span className="text-[#d4af37]">STRIVE</span>ANDPROSPER
                            </span>
                        </a>

                        <button
                            type="button"
                            onClick={closeMobileMenu}
                            className="text-2xl leading-none text-[#d4af37] transition hover:text-white"
                            aria-label="Navigation schließen"
                        >
                            ✕
                        </button>
                    </div>

                    <div className="mx-4 mt-10 h-[2px] bg-[#d4af37]" />

                    <nav aria-label="Mobile Navigation" className="mt-16 px-4">
                        <ul className="flex flex-col gap-7">
                            {NAV_ITEMS.map((item) => {
                                const isActive = activeHash === item.href;

                                return (
                                    <li key={item.href}>
                                        <a
                                            href={item.href}
                                            onClick={closeMobileMenu}
                                            className={[
                                                "block border-b border-white/10 pb-5 text-4xl font-semibold uppercase tracking-tight transition",
                                                isActive ? "text-[#d4af37]" : "text-white hover:text-[#d4af37]",
                                            ].join(" ")}
                                        >
                                            {item.label}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                </div>
            )}

            {/* Spacer for fixed navbar */}
            <div className="h-14" aria-hidden="true" />
        </>
    );
}