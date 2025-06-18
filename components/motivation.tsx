import { Frown, FileBarChart, Sheet, LineChart } from "lucide-react";

export default function Motivation() {
    return (
        <section id="motivation">
            <div className="text-center mb-14">
                <h2 className="text-3xl md:big-heading font-normal!">
                    Brokers give you numbers.
                    <br className="hidden md:block" />
                    <span className="text-primary">
                        {" "}
                        Arthveda gives you <br className="sm:hidden" />
                        <span className="font-semibold">real insight</span>.
                    </span>
                </h2>

                <p className="mt-4 text-base md:text-lg text-foreground-muted max-w-2xl mx-auto">
                    Arthveda was born because broker reports suck, analytics are
                    nonexistent, and spreadsheets are just plain boring.
                </p>
            </div>

            <div className="max-w-5xl mx-auto grid gap-10 md:grid-cols-2">
                <MotivationCard
                    icon={<Frown className="h-6 w-6 text-primary" />}
                    title="No tool built for Indian traders"
                    text="I checked out major tools out there. They were either too expensive or just not built for Indian traders. Arthveda is India first."
                />

                <MotivationCard
                    icon={<FileBarChart className="h-6 w-6 text-primary" />}
                    title="Most brokers lump your trades together"
                    text="Traded IRFC 8 times this year? Zerodha shows 1 row in your PnL. Arthveda intelligently reconstructs every position, so you know exactly how each position played out."
                />

                <MotivationCard
                    icon={<LineChart className="h-6 w-6 text-primary" />}
                    title="No meaningful analytics"
                    text="No performance overview? No idea about your R Factor, Win Rate, Win/Loss PnL, etc? When did you perform well? Is your account growing or your losses growing? Arthveda shows you all the metrics that matter."
                />

                <MotivationCard
                    icon={<Sheet className="h-6 w-6 text-primary" />}
                    title="Manual journaling is a pain"
                    text="Spreadsheets are slow, boring, and kill momentum. Arthveda imports trades in seconds from your broker. Sync feature coming soon."
                />
            </div>
        </section>
    );
}

/* ---------- Small reusable card ---------- */
function MotivationCard({
    icon,
    title,
    text,
}: {
    icon: React.ReactNode;
    title: string;
    text: string;
}) {
    return (
        <div className="flex gap-4">
            {/* icon */}
            <div className="shrink-0 mt-1">{icon}</div>

            {/* copy */}
            <div>
                <h3 className="text-lg font-medium mb-1">{title}</h3>
                <p className="text-sm text-foreground-muted leading-relaxed">
                    {text}
                </p>
            </div>
        </div>
    );
}
