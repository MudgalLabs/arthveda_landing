"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import { Button } from "@/ui/button";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="relative">
            <ul className="w-full flex justify-between items-center pb-2">
                {/* Branding */}
                <div>
                    <li className="w-fit">
                        <Link href="/">
                            <Image
                                src="/branding.svg"
                                alt="Picture of the author"
                                width={156}
                                height={0}
                                className="h-auto"
                            />
                        </Link>
                    </li>
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex flex-x gap-x-8 items-center">
                    <li>
                        <Link href="#why">Why</Link>
                    </li>
                    <li>
                        <Link href="#features">Features</Link>
                    </li>
                    <li>
                        <Link href="#supported-brokers">Supported Brokers</Link>
                    </li>
                </div>

                <div className="hidden md:inline-block">
                    <li>
                        <Button>{`Get started - it's free!`}</Button>
                    </li>
                </div>

                <div className="md:hidden flex items-center ml-auto">
                    <Button
                        variant="outline"
                        aria-label="Open menu"
                        onClick={() => setMenuOpen((v) => !v)}
                        className="size-9"
                    >
                        {menuOpen ? <X size={20} /> : <Menu size={20} />}
                    </Button>
                </div>
            </ul>

            {/* Mobile Dropdown */}
            <div
                className={`md:hidden absolute top-full left-0 w-full bg-surface-bg border border-surface-border shadow-lg z-50 transition-all duration-300 ease-out rounded-md will-change-transform ${
                    menuOpen
                        ? "opacity-100 pointer-events-auto translate-y-0 scale-100"
                        : "opacity-0 pointer-events-none -translate-y-2 scale-[0.98]"
                }`}
            >
                <ul className="flex flex-col gap-y-2 px-6 py-4">
                    <li>
                        <Link href="#why" onClick={() => setMenuOpen(false)}>
                            Why
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
                        <Link
                            href="#supported-brokers"
                            onClick={() => setMenuOpen(false)}
                        >
                            Supported Brokers
                        </Link>
                    </li>
                    <li>
                        <Button
                            className="w-full mt-4"
                            onClick={() => setMenuOpen(false)}
                        >
                            {`Get started - it's free!`}
                        </Button>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
