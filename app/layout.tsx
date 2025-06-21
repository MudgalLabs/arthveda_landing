import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { PostHogProvider } from "./providers";

const ibmPlexSans = IBM_Plex_Sans({
    variable: "--font-content",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
    title: "Arthveda",
    description:
        "Trading analytics platform with seamless broker integrations built exclusively for Indian traders.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${ibmPlexSans.variable}  antialiased w-full flex justify-center px-4`}
            >
                <PostHogProvider>
                    <div className="w-full max-w-[1200px]">{children}</div>
                </PostHogProvider>
            </body>
        </html>
    );
}
