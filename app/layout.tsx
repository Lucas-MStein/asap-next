import type { Metadata } from "next";
import { Bebas_Neue } from "next/font/google";
import "./globals.css";

const bebas = Bebas_Neue({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-bebas-neue",
});

export const metadata: Metadata = {
    metadataBase: new URL("https://alwaysstriveandprosper.de"),

    title: {
        default: "Always Strive And Prosper",
        template: "%s | Always Strive And Prosper",
    },

    description:
        "A digital space inspired by the world's leading creative minds – Street Culture, Kunst & persönliches Wachstum.",

    openGraph: {
        type: "website",
        url: "https://alwaysstriveandprosper.de",
        siteName: "Always Strive And Prosper",
        title: "Always Strive And Prosper",
        description:
            "A digital space inspired by the world's leading creative minds – Street Culture, Kunst & persönliches Wachstum.",
        locale: "de_DE",
        images: [
            {
                // ✅ hier das quadratische Icon als OG-Image
                url: "/opengraph-image.jpg",
                width: 512,
                height: 512,
                alt: "Always Strive And Prosper",
            },
        ],
    },

    twitter: {
        // ✅ Quadrat passt besser zu summary als zu summary_large_image
        card: "summary",
        title: "Always Strive And Prosper",
        description:
            "A digital space inspired by the world's leading creative minds – Street Culture, Kunst & persönliches Wachstum.",
        images: ["/opengraph-image.jpg"],
    },

    alternates: {
        canonical: "https://alwaysstriveandprosper.de",
    },
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="de" className={bebas.variable}>
        <body className="bg-white text-black antialiased">{children}</body>
        </html>
    );
}