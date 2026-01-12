import BackHeader from "@/components/BackHeader";
import SiteFooter from "@/components/SiteFooter";

export default function ImpressumPage() {
    return (
        <div className="bg-white text-black min-h-screen flex flex-col">
            <BackHeader href="/" label="Zurück zur Startseite" />

            <main className="flex-1 py-20 px-4 md:px-20">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl font-extrabold mb-6">Impressum</h1>

                    <p className="mb-4">
                        Angaben gemäß § 5 TMG:
                        <br />
                        Lucas-Maurice Stein
                        <br />
                        Herrengarten 39
                        <br />
                        75365 Calw
                    </p>

                    <p className="mb-4">
                        Kontakt:
                        <br />
                        Telefon: +49 176 47736812
                        <br />
                        E-Mail:{" "}
                        <a href="mailto:lucasmauricestein@gmail.com" className="text-[#d4af37] hover:underline">
                            lucasmauricestein@gmail.com
                        </a>
                    </p>
                </div>
            </main>

            <SiteFooter />
        </div>
    );
}