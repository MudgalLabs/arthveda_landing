import Image from "next/image";
import { Github } from "lucide-react";

import { Button } from "@/ui/button";

export default function Hero() {
    return (
        <main>
            <h1 className="text-[28px] text-center md:text-5xl lg:text-7xl font-medium lg:font-semibold">
                Turn every trade{" "}
                <span className="text-primary">into insight</span>
            </h1>

            <div className="md:h-4" />

            <p className="text-center text-sm md:text-base lg:text-xl text-foreground-muted">
                Arthveda lets you import trades, unlock analytics, and explore
                positions — all in seconds.
            </p>

            <div className="h-8" />

            <div className="[&_button]:w-full [&_button]:sm:w-fit flex justify-center gap-x-2">
                <Button variant="secondary">
                    Star us on Github <Github />
                </Button>

                <Button>Open Demo</Button>
            </div>

            <div className="h-16" />

            <Image
                src="/images/dashboard.png"
                alt="Arthveda Dashboard"
                width={1200}
                height={800}
                className="w-full h-auto outline-1 md:outline-0 hover:outline-accent outline-accent-muted rounded-none md:rounded-md transition-all duration-300 ease-in-out"
                loading="lazy"
            />
        </main>
    );
}
