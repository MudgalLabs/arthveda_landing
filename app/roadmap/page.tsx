import { Card, CardContent, CardTitle } from "@/ui/card";
import { Tag } from "@/ui/tag";

const roadmap = [
    {
        title: "Tags and Tag Groups",
        icon: "🔖",
        status: "In Progress",
        description: `Give structure to your trades. Power filters, insights, and journaling.

Use Tag Groups like:
- Setup → Breakout, Pullback, Range.
- Mistake → FOMO, Sold Early, Revenge Trade.
- Emotion → Fear, Greed, Hesitation.

Tags power segmented performance analysis, filtering, and richer journaling.`,
    },
    {
        title: "Share Positions and Dashboards",
        icon: "👥",
        status: "Planned",
        description: `Share with your community or team.

- Share individual positions via public links.
- Share dashboard views (e.g. Intraday Tag Dashboard).
- Great for mentor-led groups, friends, or trade reviews.`,
    },
    {
        title: "Dashboards Views + Custom Widgets",
        icon: "📊",
        status: "Planned",
        description: `The heart of Arthveda. Flexible. Configurable. Personal.

Build and save tailored dashboards to suit your trading style:
- Create multiple saved views (e.g. Swing Dashboard, Calendar Dashboard).
- Add, resize, and reorder widgets.
- Configure each widget with filters (e.g. tags, dates, instruments).
`,
    },
    {
        title: "Rich Journaling",
        icon: "📝",
        status: "Planned",
        description: `Not just numbers. Build real insights.

- Markdown-powered notes (like Notion).
- Attach screenshots (e.g. TradingView chart snapshots).
- Add tags and review mistakes/thoughts.
- Helps you develop consistency and discipline.`,
    },
    {
        title: "Visualize entries and exits on real market charts",
        icon: "📈",
        status: "Planned",
        description: `Enables richer visual journaling and trade review.`,
    },
    {
        title: "Brokers + Instruments (Driven by You)",
        icon: "🔌",
        status: "In Progress",
        description: `What you trade is what we build for.

Currently supported:
- Zerodha (1-Click Sync for today's trades)
- Excel Import: Zerodha, Upstox, Groww

Based on demand and paying user interest:
- More excel import and 1-click sync integrations for other brokers.
- Crypto start with CoinDCX?`,
    },
    {
        title: "Weekly Summary Emails",
        icon: "📬",
        status: "Maybe",
        description: `Weekly trading summary.

- Key stats: PnL, win rate, best/worst trades.
- Nudges to journal or review mistakes.`,
    },
];

export default function RoadmapPage() {
    return (
        <div className="text-foreground min-h-screen py-16 md:px-20">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {`What's next for Arthveda?`}
            </h1>
            <p className="text-text-muted mb-10">
                Here’s a look at the roadmap — driven by real trading pain
                points.
            </p>
            <div className="relative space-y-10 border-l border-border ml-2">
                {roadmap.map((item, index) => (
                    <div key={index} className="pl-6 relative">
                        <div className="absolute left-[-9px] top-2 w-4 h-4 bg-primary rounded-full" />
                        <Card>
                            <CardTitle>
                                {item.icon} {item.title}
                            </CardTitle>

                            {/* <div className="text-xs inline-block px-2 py-0.5 rounded-md bg-zinc-800 text-blue-400 border border-blue-500 mb-2"> */}
                            <Tag
                                size="small"
                                className="mb-2"
                                variant="success"
                            >
                                {item.status}
                            </Tag>
                            {/* </div> */}

                            <CardContent>
                                <p className="text-gray-300 whitespace-pre-line text-sm md:text-base">
                                    {item.description}
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                ))}
            </div>
            <p className="text-xs text-text-muted mt-16">
                Last updated: July 20, 2025
            </p>
        </div>
    );
}
