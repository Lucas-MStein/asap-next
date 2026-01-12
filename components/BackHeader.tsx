type BackHeaderProps = {
    href: string;
    label: string;
};

export default function BackHeader({ href, label }: BackHeaderProps) {
    return (
        <header className="h-14 flex items-center px-4 md:px-20 bg-black text-white shadow-md sticky top-0 z-50">
            <a href={href} className="flex items-center text-sm hover:text-[#d4af37] transition">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
                {label}
            </a>
        </header>
    );
}