import Container from "./Container";
import Eyebrow from "./Eyebrow";

type PageHeaderProps = {
    eyebrow: string;
    title: string;
    lede?: string;
    meta?: string;
};

export default function PageHeader({ eyebrow, title, lede, meta }: PageHeaderProps) {
    return (
        <header className="border-b border-neutral-200 bg-paper">
            <Container className="py-20 md:py-28">
                <Eyebrow>{eyebrow}</Eyebrow>

                <h1 className="mt-8 text-4xl md:text-6xl font-medium tracking-tight leading-[1.05]">
                    {title}
                </h1>

                <span className="mt-8 block h-px w-12 bg-gold" aria-hidden="true" />

                {lede && (
                    <p className="mt-8 max-w-2xl text-lg md:text-xl leading-relaxed text-neutral-500">
                        {lede}
                    </p>
                )}

                {meta && (
                    <p className="mt-10 text-[11px] uppercase tracking-[0.28em] text-neutral-500">
                        {meta}
                    </p>
                )}
            </Container>
        </header>
    );
}
