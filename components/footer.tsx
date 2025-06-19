import { ArrowUpRight } from "lucide-react"; // Lucide has GitHub icon
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t border-accent-muted mt-24">
            <div className="py-6 md:py-10 flex-center">
                <div className="space-y-2">
                    <p className="text-xs sm:text-base inline-block text-foreground">
                        <span className="font-semibold text-foreground">
                            Arthveda{" "}
                        </span>
                        is designed and developed by{" "}
                        <Link
                            href="https://github.com/MudgalLabs"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs! sm:text-base! inline-flex items-center"
                        >
                            Mudgal Labs <ArrowUpRight size={18} />
                        </Link>
                    </p>

                    <p className="text-center text-xs sm:text-sm text-foreground-muted">
                        Thank you for being here 🤍
                    </p>
                </div>
            </div>
        </footer>
    );
}
