import Image from "next/image";

import DemoForm from "@/components/demo_form";

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
    return (
        <main className="mt-12 md:mt-24">
            <h1 className="w-[80%] flex flex-wrap mx-auto justify-center gap-x-2 md:gap-x-3.5 gap-y-1 md:gap-y-2 text-3xl sm:text-5xl md:text-7xl font-medium lg:font-semibold">
                Turn every trade{" "}
                <span className="inline-block text-primary">into insight</span>
            </h1>

            <div className="h-6" />

            <p className="text-center text-sm sm:text-base md:text-xl text-foreground-muted">
                Seamless integrations. Powerful analytics.{" "}
                <br className="block sm:hidden" /> Built exclusively for Indian
                traders.
            </p>

            <div className="h-8" />

            <DemoForm />

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
                    className={`hidden md:block w-full md:w-[85%] mx-auto h-auto outline-1 md:outline-2 hover:outline-accent outline-accent-muted rounded-none md:rounded-md transition-all duration-300 ease-in-out animate-slide-in-bottom`}
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
                    className={`md:hidden w-fullmx-auto h-auto outline-1 md:outline-2 hover:outline-accent outline-accent-muted rounded-sm transition-all duration-300 ease-in-out animate-slide-in-bottom`}
                    loading="lazy"
                />
            </a>
        </main>
    );
}
