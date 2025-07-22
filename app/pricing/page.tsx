"use client";

import posthog from "posthog-js";

import { cn } from "@/lib/utils";
import { Button } from "@/ui/button";
import { Card } from "@/ui/card";
import { Tag } from "@/ui/tag";
import { useState } from "react";
import {
    Table,
    TableHeader,
    TableBody,
    TableHead,
    TableRow,
    TableCell,
    TableCaption,
} from "@/ui/table";

export default function PricingPage() {
    const [yearly, setYearly] = useState(true);
    const monthlyPrice = 199;
    const yearlyDiscount = 0.505;
    const yearlyPricePerMonth = Math.round(monthlyPrice * (1 - yearlyDiscount)); // ₹99

    return (
        <div className="text-text-primary py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
            <div className="text-center mb-12">
                <h1 className="mx-auto justify-center gap-x-2 text-center md:gap-x-3.5 gap-y-1 md:gap-y-2 text-3xl sm:text-5xl md:text-7xl font-medium lg:font-semibold leading-tight">
                    Two plans,{" "}
                    <span className="inline! text-accent">one purpose</span>
                </h1>

                <div className="mt-6 inline-flex items-center bg-muted rounded-md p-1 relative justify-center w-fit mx-auto">
                    <button
                        onClick={() => setYearly(true)}
                        className={cn(
                            "px-4 py-1 rounded-md text-sm font-medium transition",
                            yearly
                                ? "bg-primary text-primary-foreground"
                                : "text-muted-foreground"
                        )}
                    >
                        Yearly
                    </button>
                    <button
                        onClick={() => setYearly(false)}
                        className={cn(
                            "px-4 py-1 rounded-md text-sm font-medium transition",
                            !yearly
                                ? "bg-primary text-primary-foreground"
                                : "text-muted-foreground"
                        )}
                    >
                        Monthly
                    </button>
                </div>

                <div className="flex-center gap-x-1 mt-2">
                    <Tag variant="success" size="small">
                        50% off
                    </Tag>
                    <span className="text-xs text-muted-foreground">
                        on yearly billing
                    </span>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10 ">
                <Card className="text-center flex flex-col justify-between relative h-60 ">
                    <div>
                        <h3 className="heading mb-1">Free</h3>
                        <p className="text-sm text-muted-foreground mb-2">
                            Ideal for hobbyists, beginners & curious minds
                        </p>
                        <p className="text-4xl font-bold text-text-primary absolute-center">
                            ₹0
                            <span className="text-base font-medium text-muted-foreground">
                                /month
                            </span>
                        </p>
                    </div>
                    <a
                        href="https://web.arthveda.app"
                        onClick={() =>
                            posthog.capture("free_plan_clicked_on_pricing_page")
                        }
                        className="unstyled-link hover:-translate-y-0.5 transition-transform"
                    >
                        <Button
                            className="mt-4 px-4 py-2 w-full"
                            variant="secondary"
                        >
                            Free forever
                        </Button>
                    </a>
                </Card>

                <Card className="text-center flex flex-col justify-between h-60 relative">
                    <div>
                        <h3 className="heading mb-1">Pro</h3>
                        <p className="text-sm text-muted-foreground mx-auto">
                            Ideal for active traders who are performance-driven
                        </p>
                        <p className="text-4xl font-bold text-text-primary absolute-center">
                            ₹{yearly ? yearlyPricePerMonth : monthlyPrice}
                            <span className="text-base font-medium text-muted-foreground">
                                /month
                            </span>
                        </p>
                    </div>

                    <div className="unstyled-link hover:-translate-y-0.5 transition-transform">
                        <p className="text-xs text-muted-foreground">
                            {yearly
                                ? `Billed yearly as ₹${
                                      yearlyPricePerMonth * 12
                                  }`
                                : "Billed monthly"}
                        </p>
                        <a
                            href="https://web.arthveda.app"
                            onClick={() =>
                                posthog.capture(
                                    "pro_plan_clicked_on_pricing_page"
                                )
                            }
                            className="unstyled-link"
                        >
                            <Button
                                className="mt-4 px-4 py-2 w-full"
                                variant="primary"
                            >
                                Get started
                            </Button>
                        </a>
                    </div>
                </Card>
            </div>

            <p className="text-sm text-muted-foreground mb-6 font-medium italic text-pretty!">
                💡{" "}
                <span className="text-foreground font-semibold">
                    Subscribe yearly
                </span>{" "}
                and lock in this price for 12 months. As Arthveda grows, prices
                may increase, but yours won’t.
            </p>

            <div className="overflow-x-auto">
                <Table className="min-w-full text-sm border-collapse rounded-md overflow-hidden">
                    <TableCaption>Compare Free and Pro plan</TableCaption>
                    <TableHeader>
                        <TableRow className="bg-muted text-left">
                            <TableHead className="py-4 px-6 font-semibold text-base">
                                Feature
                            </TableHead>
                            <TableHead className="py-4 px-6 font-semibold text-base">
                                Free
                            </TableHead>
                            <TableHead className="py-4 px-6 font-semibold text-base">
                                Pro
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody className="divide-y divide-muted/20">
                        <TableRow>
                            <TableCell className="py-3 px-6">
                                Number of trades
                            </TableCell>
                            <TableCell className="py-3 px-6">
                                Up to 360 in last 12 months
                            </TableCell>
                            <TableCell className="py-3 px-6">
                                Unlimited
                            </TableCell>
                        </TableRow>
                        <TableRow className="bg-muted/5">
                            <TableCell className="py-3 px-6">
                                Analytics
                            </TableCell>
                            <TableCell className="py-3 px-6">
                                Last 12 months positions
                            </TableCell>
                            <TableCell className="py-3 px-6">
                                All positions
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="py-3 px-6">
                                Explore Positions
                            </TableCell>
                            <TableCell className="py-3 px-6">
                                Last 12 months positions
                            </TableCell>
                            <TableCell className="py-3 px-6">
                                All positions
                            </TableCell>
                        </TableRow>
                        <TableRow className="bg-muted/5">
                            <TableCell className="py-3 px-6">
                                Import from broker
                            </TableCell>
                            <TableCell className="py-3 px-6">
                                File import
                            </TableCell>
                            <TableCell className="py-3 px-6">
                                Sync + file import
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="py-3 px-6">
                                Broker Accounts
                            </TableCell>
                            <TableCell className="py-3 px-6">
                                1 account
                            </TableCell>
                            <TableCell className="py-3 px-6">
                                5 accounts
                            </TableCell>
                        </TableRow>
                        <TableRow className="bg-muted/5">
                            <TableCell className="py-3 px-6">Support</TableCell>
                            <TableCell className="py-3 px-6">
                                Normal support
                            </TableCell>
                            <TableCell className="py-3 px-6">
                                Priority support
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="py-3 px-6">
                                Access to future features
                            </TableCell>
                            <TableCell className="py-3 px-6">
                                Limited access
                            </TableCell>
                            <TableCell className="py-3 px-6">
                                Full access to everything
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                <p className="text-xs italic text-muted-foreground mt-4">
                    Unlimited = subject to fair usage. Abusive usage or bot
                    imports may be throttled.
                </p>
            </div>
        </div>
    );
}
