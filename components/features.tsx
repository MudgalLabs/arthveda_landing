import Image from "next/image";

export default function Features() {
    return (
        <section id="features">
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

                <p className="mt-4 text-base md:text-lg text-foreground-muted max-w-2xl mx-auto">
                    Arthveda brings the features your broker forgot — deep
                    analytics, explore and view positions, and more.
                </p>
            </div>

            <div className="mt-16 space-y-24 [&_img]:outline-2 [&_img]:outline-offset-1 [&_img]:outline-accent-muted [&_img]:hover:outline-accent [&_img]:transition-all [&_img]:duration-300 [&_img]:ease-in-out [&_img]:lg:w-4/6 [&_img]:rounded-sm">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <Image
                        src="/images/dashboard.png"
                        alt="Analytics Dashboard"
                        width={1200}
                        height={900}
                    />
                    <div className="md:w-1/2 space-y-4">
                        <h3 className="text-xl md:text-2xl font-medium text-foreground">
                            Analytics Dashboard
                        </h3>
                        <ul className="text-foreground-muted list-disc list-inside space-y-2">
                            <li>
                                Track net & gross PnL, R Factor, win/loss
                                metrics
                            </li>
                            <li>Cumulative PnL curves </li>
                            <li>
                                Daily/Monthly PnL with different views - table,
                                calendar & chart, performance by strategy,
                                duration, time of day, day of week - Coming
                                Soon!
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
                    <Image
                        src="/images/import_positions.png"
                        alt="Import from broker"
                        width={1200}
                        height={900}
                    />
                    <div className="md:w-1/2 space-y-4">
                        <h3 className="text-xl md:text-2xl font-medium text-foreground">
                            Import from Your Broker
                        </h3>
                        <ul className="text-foreground-muted list-disc list-inside space-y-2">
                            <li>Simple guided import wizard</li>
                            <li>Support for several Indian brokers</li>
                            <li>Import is fast, accurate, and intuitive</li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <Image
                        src="/images/explore_positions.png"
                        alt="Explore Positions"
                        width={1200}
                        height={900}
                    />
                    <div className="md:w-1/2 space-y-4">
                        <h3 className="text-xl md:text-2xl font-medium text-foreground">
                            Explore Your Positions
                        </h3>
                        <ul className="text-foreground-muted list-disc list-inside space-y-2">
                            <li>
                                Search, filter, and sort through past positions
                            </li>
                            <li>View per-position metrics with precision</li>
                            <li>{`Go beyond your broker's static reports`}</li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
                    <Image
                        src="/images/position.png"
                        alt="View/Add Position"
                        width={1200}
                        height={900}
                    />
                    <div className="md:w-1/2 space-y-4">
                        <h3 className="text-xl md:text-2xl font-medium text-foreground">
                            View/Add Position
                        </h3>
                        <ul className="text-foreground-muted list-disc list-inside space-y-2">
                            <li>Can’t import yet? Add position manually</li>
                            <li>View all trades linked to a position</li>
                            <li>See PnL, R Factor & holding period</li>
                            <li>Arthveda can auto calculate charges</li>
                            <li>Add notes to any position</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
