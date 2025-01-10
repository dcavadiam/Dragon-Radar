import type { Metadata } from "next";
import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}
