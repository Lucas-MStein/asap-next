import BackHeader from "@/components/BackHeader";
import SiteFooter from "@/components/SiteFooter";

export default function DownloadsPage() {
    return (
        <div className="bg-white text-black min-h-screen flex flex-col">
            <BackHeader href="/#blog" label="Zurück zu Beiträge" />

            <main className="flex-1 py-20 px-4 md:px-20">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl font-extrabold mb-6">Downloads</h1>

                    <ul className="space-y-4 text-[#d4af37] font-medium">
                        <li>
                            <a href="/downloads/gesichtverlieren.pdf" download className="hover:underline">
                                📄 Gesicht verlieren.pdf
                            </a>
                        </li>
                    </ul>
                </div>
            </main>

            <SiteFooter />
        </div>
    );
}