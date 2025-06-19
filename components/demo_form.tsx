"use client";

import { useState } from "react";

import { Button } from "@/ui/button";
import { Input } from "@/ui/input";

export default function DemoForm() {
    const [email, setEmail] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // TODO: Validate email, save to database and then redirect to demo page
        window.open("https://demo.arthveda.ceoshikhar.com", "_blank");
    };

    return (
        <form className="flex justify-center gap-x-2" onSubmit={handleSubmit}>
            <Input
                type="email"
                required
                placeholder="example@arthveda.io"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <Button>Open Demo</Button>
        </form>
    );
}
