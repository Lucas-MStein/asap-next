import BackHeader from "@/components/BackHeader";
import SiteFooter from "@/components/SiteFooter";

export default function InitialPage() {
    return (
        <div className="bg-white text-black min-h-screen flex flex-col">
            <BackHeader href="/#blog" label="Zurück zu Beiträge" />

            <main className="flex-1 py-20 px-4 md:px-20">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl font-extrabold tracking-tight mb-6">
                        Initial Commit
                    </h1>

                    <p className="text-lg leading-relaxed mb-6">
                        Willkommen zum ersten Eintrag! Dies ist der{" "}
                        <strong>Initial Commit</strong> meines Projekts
                        „Always Strive And Prosper“.
                    </p>

                    <ul className="list-disc list-inside mb-6">
                        <li>6AM Morningwalk</li>
                        <li>Natürliche Dopaminquellen</li>
                        <li>Geistiges Wachstum</li>
                    </ul>

                    <section className="py-28 text-center">
                        <h2 className="text-4xl font-extrabold mb-6">Meine Motivation</h2>
                        <p className="text-lg leading-relaxed">
                            Always Strive And Prosper – nicht nur ein Name, sondern ein innerer Antrieb.
                        </p>
                    </section>

                    <p className="text-lg">
                        Weitere Inhalte folgen in den{" "}
                        <a href="/daily" className="text-[#d4af37] hover:underline">
                            Daily Commits
                        </a>
                        .
                    </p>
                </div>
            </main>

            <SiteFooter />
        </div>
    );
}