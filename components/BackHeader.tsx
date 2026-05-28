type BackHeaderProps = {
    href: string;
    label: string;
};

export default function BackHeader({ href, label }: BackHeaderProps) {
    return (
        <header className="sticky top-0 z-30 border-b border-ink/10 bg-paper/85 backdrop-blur supports-[backdrop-filter]:bg-paper/70">
            <div className="mx-auto flex h-14 w-full max-w-5xl items-center px-6 md:px-10">
                <a
                    href={href}
                    className="group inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-neutral-500 transition hover:text-ink"
                >
                    <span
                        aria-hidden="true"
                        className="inline-block h-px w-6 bg-neutral-400 transition group-hover:w-8 group-hover:bg-gold"
                    />
                    {label}
                </a>
            </div>
        </header>
    );
}
