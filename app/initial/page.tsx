import BackHeader from "@/components/BackHeader";
import SiteFooter from "@/components/SiteFooter";
import Container from "@/components/Container";
import Eyebrow from "@/components/Eyebrow";
import PageHeader from "@/components/PageHeader";

const PRINCIPLES = [
    {
        name: "Culture",
        body: "Scenes, repeated symbols and small movements that shape how taste forms.",
    },
    {
        name: "Sound",
        body: "Music, artists and the visual language that grows around them.",
    },
    {
        name: "Style",
        body: "Design, ästhetik and the things worth looking at twice.",
    },
    {
        name: "Thought",
        body: "Notes, fragments and ideas kept on purpose unfinished.",
    },
];

export default function InitialPage() {
    return (
        <>
            <BackHeader href="/#notes" label="Back to Index" />

            <PageHeader
                eyebrow="Origin Note · 01"
                title="Origin Note"
                lede="The first entry to Always Strive And Prosper — not a blog, but the opening page of a personal archive for culture, sound, style and thought."
                meta="Filed 2025"
            />

            <main className="bg-paper">
                {/* Archive Principles */}
                <section className="border-b border-ink/10">
                    <Container className="py-20 md:py-28">
                        <Eyebrow>Archive Principles</Eyebrow>

                        <h2 className="mt-6 max-w-3xl text-3xl md:text-5xl font-medium tracking-tight leading-[1.1]">
                            Four quiet directions
                            <br className="hidden md:block" /> the archive follows.
                        </h2>

                        <span className="mt-8 block h-px w-12 bg-gold" aria-hidden="true" />

                        <p className="mt-10 max-w-2xl text-lg leading-relaxed text-neutral-600">
                            This archive doesn&apos;t follow a guide format. It collects references,
                            notes and fragments that make taste, curiosity and cultural influence
                            visible.
                        </p>

                        <dl className="mt-16 grid grid-cols-1 gap-px overflow-hidden border border-ink/10 bg-ink/10 md:grid-cols-2">
                            {PRINCIPLES.map((p) => (
                                <div key={p.name} className="bg-paper p-8 md:p-10">
                                    <dt className="text-[11px] uppercase tracking-[0.28em] text-neutral-500">
                                        {p.name}
                                    </dt>
                                    <dd className="mt-4 text-xl md:text-2xl font-medium tracking-tight text-ink">
                                        {p.body}
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </Container>
                </section>

                {/* Why this archive exists — ink section */}
                <section className="border-b border-ink/10 bg-ink text-paper">
                    <Container className="py-24 md:py-36">
                        <Eyebrow tone="paper">Archive Note</Eyebrow>

                        <h2 className="mt-6 max-w-3xl text-3xl md:text-5xl font-medium tracking-tight leading-[1.1]">
                            Why this archive exists.
                        </h2>

                        <span className="mt-8 block h-px w-12 bg-gold" aria-hidden="true" />

                        <div className="mt-12 grid gap-8 md:grid-cols-2 md:gap-16">
                            <div className="space-y-6 text-lg leading-relaxed text-paper/80">
                                <p>
                                    Always Strive And Prosper started as a personal thought and is
                                    slowly turning into a place for influences, references and
                                    quiet observations.
                                </p>
                                <p>
                                    Not every entry needs to give an answer. Some things are
                                    simply worth keeping.
                                </p>
                            </div>

                            <div className="space-y-6 text-lg leading-relaxed text-paper/80">
                                <p>
                                    The page collects what stays: music, visual identities, street
                                    culture, digital aesthetics and notes from the day.
                                </p>
                                <p className="text-paper">
                                    Always Strive And Prosper stands for a posture — stay attentive,
                                    collect things, develop taste, and don&apos;t close thoughts
                                    too soon.
                                </p>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* Continue */}
                <section>
                    <Container className="py-20 md:py-28">
                        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
                            <div>
                                <Eyebrow>Next · 02</Eyebrow>
                                <h3 className="mt-6 text-3xl md:text-4xl font-medium tracking-tight">
                                    Continue with Field Notes
                                </h3>
                                <p className="mt-4 max-w-md text-base leading-relaxed text-neutral-500">
                                    Weekly fragments from culture, sound, style and thought.
                                </p>
                            </div>

                            <a
                                href="/daily"
                                className="group inline-flex items-center gap-3 self-start text-[11px] uppercase tracking-[0.28em] text-ink md:self-auto"
                            >
                                <span className="inline-block h-px w-8 bg-ink transition group-hover:w-12 group-hover:bg-gold" />
                                View Field Notes
                            </a>
                        </div>
                    </Container>
                </section>
            </main>

            <SiteFooter />
        </>
    );
}
