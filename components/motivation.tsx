import { Rocket, FileBarChart, Sheet, LineChart } from "lucide-react";

export default function Motivation() {
    return (
        <section id="motivation" className="mt-24">
            <div className="text-center mb-14">
                <h2 className="big-heading">
                    Brokers give you numbers. Arthveda gives you{" "}
                    <span className="font-semibold! text-primary">
                        real insight.
                    </span>
                </h2>
            </div>

            <div className="max-w-4xl mx-auto grid gap-10 md:grid-cols-2">
                <MotivationCard
                    icon={<Rocket className="h-6 w-6 text-primary" />}
                    title="Built for Indian traders"
                    content={
                        <>
                            <p>Most tools are expensive or irrelevant.</p>
                            <p>Arthveda is made for {`India's`} market.</p>
                        </>
                    }
                />

                <MotivationCard
                    icon={<FileBarChart className="h-6 w-6 text-primary" />}
                    title="Brokers merge your trades"
                    content={
                        <>
                            <p>Traded IRFC 8 times? See just 1 row?</p>
                            <p>Arthveda rebuilds every position for clarity.</p>
                        </>
                    }
                />

                <MotivationCard
                    icon={<LineChart className="h-6 w-6 text-primary" />}
                    title="No real trading insights"
                    content={
                        <>
                            <p>No R Factor, win rate, or performance trend?</p>
                            <p>Arthveda shows you what actually matters.</p>
                        </>
                    }
                />

                <MotivationCard
                    icon={<Sheet className="h-6 w-6 text-primary" />}
                    title="Manual journaling sucks"
                    content={
                        <>
                            <p>Spreadsheets are slow and kill momentum.</p>
                            <p>Arthveda imports trades in seconds.</p>
                        </>
                    }
                />
            </div>
        </section>
    );
}

function MotivationCard({
    icon,
    title,
    content,
}: {
    icon: React.ReactNode;
    title: string;
    content: React.ReactNode;
}) {
    return (
        <div className="flex gap-4 border-1 transition-colors duration-300 ease-in-out border-foreground-muted hover:border-foreground rounded-md px-4 py-6">
            <div className="shrink-0 mt-1">{icon}</div>

            <div>
                <h3 className="text-lg font-medium mb-1">{title}</h3>
                <div className="text-sm text-foreground-muted leading-relaxed">
                    {content}
                </div>
            </div>
        </div>
    );
}
