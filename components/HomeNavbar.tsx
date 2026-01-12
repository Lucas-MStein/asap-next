"use client";

import { useEffect, useState } from "react";

export default function HomeNavbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        onScroll();
        window.addEventListener("scroll", onScroll);

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
            document.removeEventListener("click", onDocClick);
        };
    }, []);

    return (
        <nav
            id="navbar"
            className={[
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 text-white h-14",
                scrolled ? "bg-black shadow-md" : "bg-transparent",
            ].join(" ")}
        >
            <div className="container mx-auto flex items-center justify-between h-full px-4 md:px-6">
                <div className="flex items-center space-x-2">
                    <img src="/img/asap-logo.png" alt="A$AP Logo" className="h-6 w-auto" />
                    <span className="text-sm font-semibold uppercase tracking-wider">
            alwaysstriveandprosper
          </span>
                </div>

                <ul className="hidden md:flex items-center space-x-8 text-sm">
                    <li><a href="#home" className="hover:text-[#d4af37]">Home</a></li>
                    <li><a href="#blog" className="hover:text-[#d4af37]">Blog</a></li>
                    <li><a href="#about" className="hover:text-[#d4af37]">Über</a></li>
                    <li><a href="#kontakt" className="hover:text-[#d4af37]">Kontakt</a></li>
                </ul>

                <div className="md:hidden">
                    <button
                        id="menu-toggle"
                        className="focus:outline-none transition"
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
                            className="h-7 w-7 stroke-[#d4af37] hover:stroke-yellow-400 transition duration-300"
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

            <div
                id="mobile-menu"
                className={[
                    "md:hidden bg-black text-white px-4 pt-4 pb-6 rounded-b-xl shadow-lg animate-fade-down origin-top transition-all duration-300",
                    mobileOpen ? "block" : "hidden",
                ].join(" ")}
            >
                <ul className="flex flex-col space-y-4 text-base text-center font-medium tracking-wide">
                    <li><a href="#home" className="block py-1 border-b border-gray-700 hover:text-[#d4af37] transition" onClick={() => setMobileOpen(false)}>Home</a></li>
                    <li><a href="#blog" className="block py-1 border-b border-gray-700 hover:text-[#d4af37] transition" onClick={() => setMobileOpen(false)}>Blog</a></li>
                    <li><a href="#about" className="block py-1 border-b border-gray-700 hover:text-[#d4af37] transition" onClick={() => setMobileOpen(false)}>Über</a></li>
                    <li><a href="#kontakt" className="block py-1 hover:text-[#d4af37] transition" onClick={() => setMobileOpen(false)}>Kontakt</a></li>
                </ul>
            </div>
        </nav>
    );
}