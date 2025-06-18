"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { Button } from "@/ui/button";

// Add custom animation styles
const slideInStyles = `
@keyframes slideInFromBottom {
  0% {
    opacity: 0;
    transform: translateY(60px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-slide-in-bottom {
  animation: slideInFromBottom 0.8s cubic-bezier(0.4,0,0.2,1) forwards;
}
`;

export default function Hero() {
    const [showImage, setShowImage] = useState(false);

    useEffect(() => {
        setShowImage(true);
    }, []);

    return (
        <main>
            <h1 className="text-[28px] text-center md:text-5xl lg:text-7xl font-medium lg:font-semibold">
                Turn every trade{" "}
                <span className="text-primary">into insight</span>
            </h1>

            <div className="md:h-4" />

            <p className="text-center text-sm md:text-base lg:text-xl text-foreground-muted">
                Arthveda lets you import trades, unlock analytics, and explore
                positions — open source and free!
            </p>

            <div className="h-8" />

            <div className="[&_button]:w-full [&_button]:sm:w-fit flex justify-center gap-x-2">
                <a
                    href="https://github.com/MudgalLabs/arthveda"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Button variant="secondary">
                        Star us on Github
                        <Image
                            src="/svgs/github.svg"
                            alt="GitHub logo"
                            width={24}
                            height={24}
                            className="inline-block ml-1"
                        />
                    </Button>
                </a>

                <Button>Open Demo</Button>
            </div>

            <div className="h-16" />

            {/* Inject animation styles */}
            <style>{slideInStyles}</style>
            <a
                href="/images/dashboard.png"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image
                    src="/images/dashboard.png"
                    alt="Arthveda Dashboard"
                    width={1200}
                    height={800}
                    className={`w-full h-auto outline-1 md:outline-2 hover:outline-accent outline-accent-muted rounded-none md:rounded-md transition-all duration-300 ease-in-out
                        ${showImage ? "animate-slide-in-bottom" : "opacity-0"}
                    `}
                    loading="lazy"
                />
            </a>
        </main>
    );
}
