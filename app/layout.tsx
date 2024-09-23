import type { Metadata } from "next";
import "./globals.css";
import QueryProvider from "./queryProvider";

export const metadata: Metadata = {
  title: {
    default: "Dragon Radar",
    template: "%s - Dragon Radar",
  },
  description: "A web application that uses the Dragon Ball API to display information about characters, sagas, and transformations from the Dragon Ball universe.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <QueryProvider>
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}
