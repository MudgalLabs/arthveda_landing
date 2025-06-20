import { Tag } from "@/ui/tag";
import Image from "next/image";

export default function Brokers() {
    /* Replace these with real SVG components or <Image> tags */
    const brokers = [
        {
            name: "Groww",
            svg: "/svgs/groww.svg",
            homepage: "https://groww.in/",
        },
        {
            name: "Zerodha",
            svg: "/svgs/zerodha.svg",
            homepage: "https://zerodha.com/",
        },
        {
            name: "Upstox",
            svg: "/svgs/upstox.svg",
            homepage: "https://upstox.com/",
            isComingSoon: true,
        },
        /* Add more brokers as integration ships */
    ];

    return (
        <section id="brokers" className="mt-24">
            <div className="text-center mb-8">
                <h2 className="big-heading">
                    You save hours every week through
                    <br className="hidden md:block" />
                    <span className="text-primary">
                        {" "}
                        seamless integration <br className="sm:hidden" />
                        with
                        <span className="font-semibold"> your broker</span>
                    </span>
                </h2>

                <p className="mt-4 text-sm sm:text-base md:text-lg text-foreground-muted max-w-2xl mx-auto">
                    Arthveda supports these brokers - more integrations are on
                    the way!
                </p>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-12 sm:gap-12">
                {brokers.map(({ name, svg, homepage, isComingSoon }) => (
                    <div key={name} className="relative">
                        <a
                            href={homepage}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                src={svg}
                                alt={`${name} logo`}
                                width={150}
                                height={40}
                                // className="grayscale contrast-60 hover:grayscale-0 hover:contrast-100"
                            />
                        </a>
                        {isComingSoon && (
                            <Tag
                                className="absolute -bottom-5 right-0"
                                variant="primary"
                                size="small"
                            >
                                Coming Soon
                            </Tag>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
