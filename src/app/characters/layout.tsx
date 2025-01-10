import type { Metadata } from "next";
import "../globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
    title: "Dragon Radar",
    description: "Search all of the Dragon Ball characters and more!",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" data-lt-installed="true">
            <body>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
