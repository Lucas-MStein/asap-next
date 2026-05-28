type HairlineProps = {
    tone?: "ink" | "paper";
    accent?: boolean;
    className?: string;
};

export default function Hairline({
    tone = "ink",
    accent = false,
    className = "",
}: HairlineProps) {
    const base =
        tone === "paper" ? "bg-paper/15" : "bg-neutral-200";

    return (
        <div className={`relative ${className}`} aria-hidden="true">
            <div className={`h-px w-full ${base}`} />
            {accent && (
                <span className="absolute left-0 top-0 h-px w-12 bg-gold" />
            )}
        </div>
    );
}
