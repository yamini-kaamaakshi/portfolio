import { ClerkProvider } from "@clerk/nextjs";
import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata = {
    title: "portfolio",
    description: "A simple portfolio application built with Next.js 15",
};

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <ClerkProvider
            publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
        >
            <html lang="en">
            <body className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1 container mx-auto p-4">{children}</main>
            <Footer />
            </body>
            </html>
        </ClerkProvider>
    );
};

export default Layout;
