"use client";

import posthog from "posthog-js";
import { ArrowRight as IconRight } from "lucide-react";

import { Button } from "@/ui/button";

export const GetStarted = () => {
    return (
        <div className="flex-center flex-col">
            <a
                href="https://web.arthveda.app"
                onClick={() => posthog.capture("Clicked Get Started")}
                className="unstyled-link hover:-translate-y-0.5 transition-transform"
            >
                <Button className="arrow-button" size="large">
                    {`Get started. It's FREE!`}
                    <IconRight className="arrow-icon" size={18} />
                </Button>
            </a>
            <p className="text-xs text-foreground-muted mt-2">
                Free Forever. No Credit Card.
            </p>
        </div>
    );
};
