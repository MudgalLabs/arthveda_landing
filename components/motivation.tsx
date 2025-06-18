import { Layers3, FileBarChart, Sheet, LineChart } from "lucide-react";

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
                        <span className="font-semibold">real insight.</span>
                    </span>
                </h2>

                <p className="mt-4 text-base md:text-lg text-foreground-muted max-w-2xl mx-auto">
                    Arthveda was born because broker reports suck, analytics are
                    nonexistent, and spreadsheets are just plain boring.
                </p>
            </div>

            <div className="max-w-5xl mx-auto grid gap-10 md:grid-cols-2">
                <MotivationCard
                    icon={<Layers3 className="h-6 w-6 text-primary" />}
                    title="Broker merges every trade into a blob"
                    text="Traded IRFC 8 times this year? Zerodha shows 1 row in your PnL. Arthveda reconstructs every position — exactly as you traded it."
                />

                <MotivationCard
                    icon={<FileBarChart className="h-6 w-6 text-primary" />}
                    title="No meaningful analytics"
                    text="No performance overview, winners/losers overview? Broker portals leave you guessing. Arthveda shows the metrics that actually help you improve."
                />

                <MotivationCard
                    icon={<Sheet className="h-6 w-6 text-primary" />}
                    title="Manual journaling is a pain"
                    text="Spreadsheets are slow, boring, and kill momentum. Arthveda imports trades in seconds from broker. Sync feature is coming soon."
                />

                <MotivationCard
                    icon={<LineChart className="h-6 w-6 text-primary" />}
                    title="You can’t improve what you can’t see"
                    text="When did you perform well? What’s your average R? Are your losses growing? Arthveda turns your trading data into a story."
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
