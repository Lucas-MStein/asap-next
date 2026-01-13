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
    { href: "#kontakt", label: "Kontakt" },
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

        const onDocClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement | null;
            if (!target) return;

            const toggle = document.getElementById("menu-toggle");
            const menu = document.getElementById("mobile-menu");
            if (!toggle || !menu) return;

            if (!menu.contains(target) && !toggle.contains(target)) {
                setMobileOpen(false);
            }
        };

        document.addEventListener("click", onDocClick);

        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("hashchange", onHashChange);
            document.removeEventListener("click", onDocClick);
        };
    }, []);

    const navBase =
        "fixed top-0 left-0 right-0 z-50 h-14 transition-all duration-300";
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
                            className="md:hidden inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-2 hover:bg-white/10 transition"
                            onClick={(e) => {
                                e.stopPropagation();
                                setMobileOpen((v) => !v);
                            }}
                            aria-label="Menü öffnen"
                            aria-expanded={mobileOpen}
                            aria-controls="mobile-menu"
                            type="button"
                        >
                            <svg
                                className="h-6 w-6 stroke-[#d4af37]"
                                viewBox="0 0 24 24"
                                fill="none"
                                strokeWidth={2}
                                strokeLinecap="round"
                            >
                                <path d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div
                    id="mobile-menu"
                    className={[
                        "md:hidden overflow-hidden transition-all duration-300 origin-top",
                        mobileOpen ? "block" : "hidden",
                    ].join(" ")}
                >
                    <div className="mx-auto max-w-6xl px-4 pb-6">
                        <div className="mt-3 rounded-2xl border border-white/10 bg-black/90 backdrop-blur-md shadow-xl">
                            <div className="h-[2px] bg-[#d4af37] rounded-t-2xl" />

                            <ul className="flex flex-col py-3 text-center text-base font-medium tracking-wide text-white">
                                {NAV_ITEMS.map((item) => (
                                    <li key={item.href}>
                                        <a
                                            href={item.href}
                                            className="block py-3 hover:text-[#d4af37] transition border-b border-white/10"
                                            onClick={() => setMobileOpen(false)}
                                        >
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Spacer for fixed navbar */}
            <div className="h-14" aria-hidden="true" />
        </>
    );
}