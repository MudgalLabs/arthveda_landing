"use client";
import Image from "next/image";

export default function Features() {
    return (
        <section id="features" className="mt-24">
            <div className="text-center mb-14">
                <h2 className="text-3xl md:big-heading font-normal!">
                    Arthveda gives you tools to track,
                    <br className="hidden md:block" />
                    <span className="text-primary">
                        {" "}
                        analyze, and improve <br className="sm:hidden" />
                        <span className="font-semibold">your trading</span>
                    </span>
                </h2>
            </div>

            <div className="mt-16 space-y-24 [&_img]:outline-2 [&_img]:outline-offset-1 [&_img]:outline-accent-muted [&_img]:hover:outline-accent [&_img]:transition-all [&_img]:duration-300 [&_img]:ease-in-out [&_img]:rounded-sm">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="w-full lg:w-4/6">
                        <a
                            href="/images/dashboard_zoomed.png"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                src="/images/dashboard_zoomed.png"
                                alt="Analytics Dashboard"
                                width={1200}
                                height={900}
                                className="w-full rounded-sm transition-all duration-300 ease-in-out outline-2 outline-offset-1 outline-accent-muted hover:outline-accent"
                            />
                        </a>
                    </div>
                    <div className="w-full lg:w-2/6 space-y-4">
                        <h3 className="text-xl md:text-2xl font-medium text-foreground">
                            Analytics Dashboard
                        </h3>
                        <ul className="text-foreground-muted list-disc list-inside space-y-2">
                            <li>
                                Track net/gross PnL, R Factor, win rate & more.
                            </li>
                            <li>View cumulative PnL curves over time.</li>
                            <li>
                                Performance by strategy, duration, time of day.
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
                    <div className="w-full lg:w-4/6">
                        <a
                            href="/images/import_positions.png"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                src="/images/import_positions.png"
                                alt="Import from broker"
                                width={1200}
                                height={900}
                                className="w-full rounded-sm transition-all duration-300 ease-in-out outline-2 outline-offset-1 outline-accent-muted hover:outline-accent"
                            />
                        </a>
                    </div>
                    <div className="w-full lg:w-2/6 space-y-4">
                        <h3 className="text-xl md:text-2xl font-medium text-foreground">
                            Import from Your Broker
                        </h3>
                        <ul className="text-foreground-muted list-disc list-inside space-y-2">
                            <li>Guided import wizard for file uploads</li>
                            <li>Import 1,000s of trades in under 10 seconds</li>
                            <li>{`Auto-sync today’s trades after each session`}</li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="w-full lg:w-4/6">
                        <a
                            href="/images/explore_positions.png"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                src="/images/explore_positions.png"
                                alt="Explore Positions"
                                width={1200}
                                height={900}
                                className="w-full rounded-sm transition-all duration-300 ease-in-out outline-2 outline-offset-1 outline-accent-muted hover:outline-accent"
                            />
                        </a>
                    </div>
                    <div className="w-full lg:w-2/6 space-y-4">
                        <h3 className="text-xl md:text-2xl font-medium text-foreground">
                            Explore Your Positions
                        </h3>
                        <ul className="text-foreground-muted list-disc list-inside space-y-2">
                            <li>Search, filter, and sort with ease</li>
                            <li>See detailed metrics for each position</li>
                            <li>Go beyond basic broker reports</li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
                    <div className="w-full lg:w-4/6">
                        <a
                            href="/images/position.png"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                src="/images/position.png"
                                alt="View/Add Position"
                                width={1200}
                                height={900}
                                className="w-full rounded-sm transition-all duration-300 ease-in-out outline-2 outline-offset-1 outline-accent-muted hover:outline-accent"
                            />
                        </a>
                    </div>
                    <div className="w-full lg:w-2/6 space-y-4">
                        <h3 className="text-xl md:text-2xl font-medium text-foreground">
                            View/Add Position
                        </h3>
                        <ul className="text-foreground-muted list-disc list-inside space-y-2">
                            <li>Manually add positions when needed</li>
                            <li>
                                See all trades, PnL, R Factor & holding period
                            </li>
                            <li>Auto-calculated charges, add notes</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
