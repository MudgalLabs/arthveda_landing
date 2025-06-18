import { ArrowUpRight } from "lucide-react"; // Lucide has GitHub icon
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t border-accent-muted">
            <div className="px-6 py-10 flex-center">
                <div className="space-y-2">
                    <p className="inline-block text-foreground">
                        <span className="font-semibold text-foreground">
                            Arthveda{" "}
                        </span>
                        is designed and developed by{" "}
                        <Link
                            href="https://github.com/MudgalLabs"
                            target="_blank"
                            className="text-base! inline-flex items-center"
                        >
                            Mudgal Labs <ArrowUpRight size={18} />
                        </Link>
                    </p>

                    <p className="text-center text-sm text-foreground-muted">
                        Thank you for being here 🤍
                    </p>
                </div>
            </div>
        </footer>
    );
}
