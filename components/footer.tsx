import { ArrowUpRight } from "lucide-react"; // Lucide has GitHub icon

export default function Footer() {
    return (
        <footer className="border-t border-accent-muted mt-12 sm:mt-24">
            <div className="py-6 md:py-10 flex-center">
                <div className="space-y-2 text-center">
                    <p className="text-sm sm:text-base inline-block text-foreground">
                        <span className="font-semibold text-foreground">
                            Arthveda{" "}
                        </span>
                        is designed and developed by{" "}
                        <a
                            href="https://github.com/MudgalLabs"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm! sm:text-base! inline-flex items-center"
                        >
                            Mudgal Labs <ArrowUpRight size={18} />
                        </a>
                    </p>

                    <p className="text-sm sm:text-base">
                        Give feedback, request a feature, report a bug or{" "}
                        <br className="block sm:hidden" />
                        just say hi on{" "}
                        <span className="font-bold text-sm sm:text-base">
                            hey@arthveda.io
                        </span>
                    </p>

                    <p className="text-center text-xs sm:text-sm text-foreground-muted">
                        Thank you for being here 🤍
                    </p>
                </div>
            </div>
        </footer>
    );
}
