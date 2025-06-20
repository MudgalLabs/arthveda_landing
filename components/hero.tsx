import Image from "next/image";
import { ArrowRight as IconRight } from "lucide-react";

import { Button } from "@/ui/button";

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

@keyframes slideOutRight {
  0% {
    opacity: 1;
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    transform: translateX(8px);
  }
}

@keyframes slideInLeft {
  0% {
    opacity: 0;
    transform: translateX(-8px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideOutLeft {
  0% {
    opacity: 1;
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    transform: translateX(-8px);
  }
}

@keyframes slideInRight {
  0% {
    opacity: 0;
    transform: translateX(8px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.arrow-icon {
  transition: all 0.2s ease-in-out;
}

.demo-button:hover .arrow-icon {
  animation: slideOutRight 0.15s ease-in-out forwards, slideInLeft 0.15s ease-in-out 0.15s forwards;
}

.demo-button:not(:hover) .arrow-icon {
  animation: slideOutLeft 0.15s ease-in-out forwards, slideInRight 0.15s ease-in-out 0.15s forwards;
}
`;

export default function Hero() {
    return (
        <main className="mt-12 md:mt-24">
            <h1 className="w-[80%] flex flex-wrap mx-auto justify-center gap-x-2 md:gap-x-3.5 gap-y-1 md:gap-y-2 text-3xl sm:text-5xl md:text-7xl font-medium lg:font-semibold">
                Turn every trade{" "}
                <span className="inline-block text-primary">into insight</span>
            </h1>

            <div className="h-6" />

            <p className="text-center text-sm sm:text-base md:text-xl text-foreground">
                Seamless integrations. Powerful analytics.{" "}
                <br className="block sm:hidden" />{" "}
                <span className="font-medium">
                    Built exclusively for Indian traders.
                </span>
            </p>
            <div className="h-8" />

            {/* <DemoForm /> */}
            <div className="flex-center">
                <a
                    href="https://demo.arthveda.ceoshikhar.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Button className="demo-button">
                        Open Demo
                        <IconRight className="arrow-icon" size={18} />
                    </Button>
                </a>
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
                    width={1900}
                    height={900}
                    className={`hidden md:block w-full md:w-[85%] mx-auto h-auto outline-offset-1 outline-1 md:outline-2 hover:outline-accent outline-accent-muted rounded-none md:rounded-md transition-all duration-300 ease-in-out animate-slide-in-bottom`}
                    loading="lazy"
                />
            </a>
            <a
                href="/images/dashboard.png"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image
                    src="/images/dashboard_zoomed.png"
                    alt="Arthveda Dashboard"
                    width={1900}
                    height={900}
                    className={`md:hidden w-fullmx-auto h-auto outline-1 outline-offset-1 md:outline-2 hover:outline-accent outline-accent-muted rounded-sm transition-all duration-300 ease-in-out animate-slide-in-bottom`}
                    loading="lazy"
                />
            </a>
        </main>
    );
}
