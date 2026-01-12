type SiteFooterProps = {
    showImpressumLink?: boolean;
};

export default function SiteFooter({ showImpressumLink = false }: SiteFooterProps) {
    return (
        <footer className="h-14 md:h-20 bg-black text-gray-300 px-4 md:px-20 flex items-center justify-center">
            <div className="text-center text-sm">
                <span className="block md:inline">&copy; 2025 Lucas-Maurice Stein</span>
                {showImpressumLink && (
                    <>
                        <span className="mx-2 hidden md:inline">|</span>
                        <a href="/impressum" className="text-[#d4af37] hover:underline">
                            Impressum
                        </a>
                    </>
                )}
            </div>
        </footer>
    );
}