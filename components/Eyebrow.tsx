type EyebrowProps = {
    children: React.ReactNode;
    tone?: "ink" | "paper";
    className?: string;
};

export default function Eyebrow({
    children,
    tone = "ink",
    className = "",
}: EyebrowProps) {
    const color = tone === "paper" ? "text-paper/70" : "text-neutral-500";

    return (
        <p
            className={`inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] ${color} ${className}`}
        >
            <span className="h-1 w-1 rounded-full bg-gold" aria-hidden="true" />
            {children}
        </p>
    );
}
