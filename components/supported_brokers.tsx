import Image from "next/image";

export default function SupportedBrokers() {
    /* Replace these with real SVG components or <Image> tags */
    const brokers = [
        {
            name: "Groww",
            svg: "/svgs/groww.svg",
        },
        {
            name: "Zerodha",
            svg: "/svgs/zerodha.svg",
        },
        // {
        //     name: "Upstox",
        //     svg: "/svgs/upstox.svg",
        // },
        /* Add more brokers as integration ships */
    ];

    return (
        <section id="supported-brokers" className="mt-24">
            <div className="text-center mb-14">
                <h2 className="text-3xl md:big-heading font-normal!">
                    No more spreadsheets,
                    <br className="hidden md:block" />
                    <span className="text-primary">
                        {" "}
                        seamless integration with
                        <span className="font-semibold"> your broker</span>
                    </span>
                </h2>

                <p className="mt-4 text-base md:text-lg text-foreground-muted max-w-2xl mx-auto">
                    Arthveda already supports India’s most used equity brokers,
                    with more on the way.
                </p>
            </div>

            <div className="flex flex-col items-center sm:flex-wrap">
                <div className="flex flex-col items-center justify-center gap-12 sm:flex-row">
                    {brokers.map(({ name, svg }) => (
                        <Image
                            key={name}
                            src={svg}
                            alt={`${name} logo`}
                            width={150}
                            height={0}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
