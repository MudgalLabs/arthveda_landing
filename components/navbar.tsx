"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import { Button } from "@/ui/button";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="sticky top-2 z-50  border-1 rounded-md md:rounded-2xl border-surface-border p-3 backdrop-blur-md backdrop-saturate-150 bg-surface-bg/80 ">
            <div className="relative">
                <ul className="w-full flex justify-between items-center">
                    {/* Branding */}
                    <div>
                        <li className="w-fit">
                            <Link href="/">
                                <Image
                                    src="/svgs/branding.svg"
                                    alt="Arthveda Logo Branding"
                                    width={156}
                                    height={40}
                                    className="h-auto hidden sm:inline-block"
                                />

                                <Image
                                    src="/svgs/logo.svg"
                                    alt="Arthveda Logo Branding"
                                    width={32}
                                    height={32}
                                    className="h-auto inline-block md:hidden"
                                />
                            </Link>
                        </li>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex flex-x md:gap-x-4 lg:gap-x-8 items-center px-2">
                        <li>
                            <Link href="#brokers">Brokers</Link>
                        </li>
                        <li>
                            <Link href="#motivation">Motivation</Link>
                        </li>
                        <li>
                            <Link href="#features">Features</Link>
                        </li>
                        <li>
                            <a
                                href="https://discord.com/invite/QtFxX6g3Ev"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Discord
                            </a>
                        </li>

                        <li>
                            <a
                                href="https://github.com/MudgalLabs/arthveda"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                GitHub
                            </a>
                        </li>
                    </div>

                    <div className="hidden md:inline-block">
                        <a
                            href="https://arthveda.ceoshikhar.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <li>
                                <Button>{`Get started - it's free!`}</Button>
                            </li>
                        </a>
                    </div>

                    <div className="md:hidden flex items-center gap-4">
                        <a
                            href="https://arthveda.ceoshikhar.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button
                                className="w-full"
                                onClick={() => setMenuOpen(false)}
                            >
                                {`Get started - it's free!`}
                            </Button>
                        </a>

                        <button
                            aria-label="Open menu"
                            onClick={() => setMenuOpen((v) => !v)}
                            className="size-9 text-foreground-muted"
                        >
                            {menuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </ul>

                {/* Mobile Dropdown */}
                <div
                    className={`md:hidden absolute top-14 left-0 w-full bg-surface-bg border border-surface-border shadow-lg z-50 transition-all duration-300 ease-out rounded-md will-change-transform ${
                        menuOpen
                            ? "opacity-100 pointer-events-auto translate-y-0 scale-100"
                            : "opacity-0 pointer-events-none -translate-y-2 scale-[0.98]"
                    }`}
                >
                    <ul className="flex flex-col gap-y-2 px-4 py-4">
                        <li>
                            <Link
                                href="#brokers"
                                onClick={() => setMenuOpen(false)}
                            >
                                Brokers
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#motivation"
                                onClick={() => setMenuOpen(false)}
                            >
                                Motivation
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#features"
                                onClick={() => setMenuOpen(false)}
                            >
                                Features
                            </Link>
                        </li>
                        <li>
                            <a
                                href="https://discord.com/invite/QtFxX6g3Ev"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Discord
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://github.com/MudgalLabs/arthveda"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                GitHub
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://arthveda.ceoshikhar.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button
                                    className="w-full mt-4"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {`Get started - it's free!`}
                                </Button>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
