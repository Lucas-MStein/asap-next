import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

export const metadata: Metadata = {
    metadataBase: new URL("https://alwaysstriveandprosper.de"),

    title: {
        default: "Always Strive And Prosper",
        template: "%s — Always Strive And Prosper",
    },

    description:
        "A personal archive for culture, sound, style and thought.",

    openGraph: {
        type: "website",
        url: "https://alwaysstriveandprosper.de",
        siteName: "Always Strive And Prosper",
        title: "Always Strive And Prosper",
        description:
            "A personal archive for culture, sound, style and thought.",
        locale: "en",
        images: [
            {
                url: "/opengraph-image.jpg",
                width: 512,
                height: 512,
                alt: "Always Strive And Prosper",
            },
        ],
    },

    twitter: {
        card: "summary",
        title: "Always Strive And Prosper",
        description:
            "A personal archive for culture, sound, style and thought.",
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
        <html lang="en" className={inter.variable}>
            <body className="bg-paper text-ink antialiased">{children}</body>
        </html>
    );
}
