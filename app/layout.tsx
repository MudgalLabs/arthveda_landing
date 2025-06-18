import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
    variable: "--font-content",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
    title: "Arthveda",
    description: "Open Source Trading Analytics Platform",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${ibmPlexSans.variable}  antialiased w-full h-dvh flex justify-center p-4`}
            >
                <div className="w-full max-w-[1200px]">{children}</div>
            </body>
        </html>
    );
}
