"use client";

import { ArrowRight as IconRight } from "lucide-react";
import posthog from "posthog-js";

import { Button } from "@/ui/button";

export default function OpenDemo() {
    return (
        <div className="flex-center">
            <a
                href="https://demo.arthveda.app/"
                onClick={() => posthog.capture("Clicked Open Demo")}
            >
                <Button className="demo-button">
                    Open Demo
                    <IconRight className="arrow-icon" size={18} />
                </Button>
            </a>
        </div>
    );
}
