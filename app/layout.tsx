import type { Metadata } from "next";
import { Bebas_Neue } from "next/font/google";
import "./globals.css";

/**
 * Google Font – Bebas Neue
 * Wird lokal von Next.js geladen (kein Google CDN)
 */
const bebas = Bebas_Neue({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-bebas-neue",
});

export const metadata: Metadata = {
    title: {
        default: "Always Strive And Prosper",
        template: "%s | Always Strive And Prosper",
    },
    description:
        "Always Strive And Prosper – ein digitaler Raum für Kreativität, Kultur und persönliche Entwicklung.",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="de" className={bebas.variable}>
        <body className="bg-white text-black pt-14 antialiased">
        {children}
        </body>
        </html>
    );
}