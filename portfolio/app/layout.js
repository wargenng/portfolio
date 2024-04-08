import { Inter as FontSans } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils";
import NavBar from "./components/navbar";

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
});

export const metadata = {
    title: "woregin",
    description: "Wargen Guittap's Portfolio",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={cn(
                    "min-h-screen bg-background font-sans antialiased flex justify-center items-center",
                    fontSans.variable
                )}
            >
                <div className="flex flex-col justify-center items-center w-full lg:w-8/12">
                    <NavBar />
                    {children}
                </div>
            </body>
        </html>
    );
}
