import Image from "next/image";
import { Github } from "lucide-react";

import { Button } from "@/ui/button";

export default function Hero() {
    return (
        <main>
            <h1 className="text-[28px] text-center md:text-5xl lg:text-7xl font-medium lg:font-semibold">
                Turn every trade into insight
            </h1>

            <div className="h-2 md:h-4" />

            <p className="text-center text-sm md:text-base lg:text-xl text-foreground-muted">
                Arthveda lets you import trades, unlock analytics, and explore
                positions — all in seconds.
            </p>

            <div className="h-6" />

            <div className="flex justify-center gap-x-2">
                <Button variant="secondary">
                    Star us on Github <Github />
                </Button>

                <Button>Open Demo</Button>
            </div>

            <div className="h-12" />

            <Image
                src="/images/dashboard.png"
                alt="Arthveda Dashboard"
                width={1200}
                height={400}
                className="w-full h-auto  outline-1 md:outline-3 outline-accent-muted rounded-none md:rounded-md"
                loading="lazy"
            />
        </main>
    );
}
