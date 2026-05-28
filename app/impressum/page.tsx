import BackHeader from "@/components/BackHeader";
import SiteFooter from "@/components/SiteFooter";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";

export default function ImpressumPage() {
    return (
        <>
            <BackHeader href="/" label="Back to home" />

            <PageHeader
                eyebrow="Legal"
                title="Impressum"
                lede="Angaben gemäß § 5 TMG."
            />

            <main className="bg-paper">
                <section>
                    <Container className="py-20 md:py-28">
                        <div className="max-w-2xl space-y-8 text-base leading-relaxed text-neutral-700">
                            <div>
                                <p className="text-[11px] uppercase tracking-[0.28em] text-neutral-500">
                                    Verantwortlich
                                </p>
                                <p className="mt-3 text-ink">
                                    Lucas-Maurice Stein
                                    <br />
                                    Herrengarten 39
                                    <br />
                                    75365 Calw
                                </p>
                            </div>

                            <div>
                                <p className="text-[11px] uppercase tracking-[0.28em] text-neutral-500">
                                    Kontakt
                                </p>
                                <p className="mt-3">
                                    Telefon: +49 176 47736812
                                    <br />
                                    E-Mail:{" "}
                                    <a
                                        href="mailto:lucasmauricestein@gmail.com"
                                        className="text-ink underline underline-offset-4 hover:text-gold"
                                    >
                                        lucasmauricestein@gmail.com
                                    </a>
                                </p>
                            </div>
                        </div>
                    </Container>
                </section>
            </main>

            <SiteFooter />
        </>
    );
}
