import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ReactNode } from "react";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
export const metadata = {
    title: "portfolio",
    description: "A simple portfolio application built with Next.js 15",
};
const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <ClerkProvider>
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
