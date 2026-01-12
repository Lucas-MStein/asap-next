import type { Metadata } from "next";
import "./globals.css"; // kann leer bleiben, wenn du alles über /style.css machst

export const metadata: Metadata = {
    title: "Persönlicher Blog",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="de">
        <head>
            <link rel="icon" href="/img/asap-logo.png" />
            <link rel="stylesheet" href="/style.css" />
            <link
                href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
                rel="stylesheet"
            />

            {/* Keyframes aus deinem <style>-Block */}
            <style>{`
          .animate-fade-down { animation: fadeDown 0.3s ease-out; }
          @keyframes fadeDown {
            0% { opacity: 0; transform: translateY(-10%); }
            100% { opacity: 1; transform: translateY(0); }
          }
        `}</style>

            {/* Optional: falls du dein bestehendes main.js weiter nutzen willst */}
            <script type="module" src="/main.js" defer />
        </head>
        <body className="bg-white text-black pt-14">{children}</body>
        </html>
    );
}