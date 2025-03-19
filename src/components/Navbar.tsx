"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import {
    SignInButton,
    SignOutButton,
    SignUpButton,
    SignedIn,
    SignedOut,
} from "@clerk/nextjs";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md border-b border-gray-200 dark:border-gray-700 z-50">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                {/* Logo / Title */}
                <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white tracking-wide">
                    My Portfolio
                </h1>

                {/* Mobile Menu Button */}
                <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Navigation Links */}
                <div
                    className={`absolute md:static top-16 left-0 w-full md:w-auto bg-white dark:bg-gray-900 md:bg-transparent p-6 md:p-0 transition-all duration-300 ${
                        menuOpen
                            ? "flex flex-col items-center space-y-4"
                            : "hidden md:flex md:items-center md:space-x-6"
                    }`}
                >
                    <NavLink href="/" label="Home" setMenuOpen={setMenuOpen} />

                    <SignedOut>
                        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
                            <SignInButton>
                                <button className="px-4 py-2 border border-neutral-300 dark:border-neutral-600 dark:text-neutral-200 dark:hover:bg-neutral-700">
                                    Sign In
                                </button>
                            </SignInButton>
                            <SignUpButton>
                                <button className="px-4 py-2 border border-neutral-300 dark:border-neutral-600 dark:text-neutral-200 dark:hover:bg-neutral-700">
                                    Sign Up
                                </button>
                            </SignUpButton>
                        </div>
                    </SignedOut>

                    <SignedIn>
                        <NavLink href="/about" label="About" setMenuOpen={setMenuOpen} />
                        <NavLink href="/projects" label="Projects" setMenuOpen={setMenuOpen} />
                        <NavLink href="/contact" label="Contact" setMenuOpen={setMenuOpen} />
                        <SignOutButton />
                    </SignedIn>
                </div>
            </div>
        </nav>
    );
}

function NavLink({
                     href,
                     label,
                     setMenuOpen,
                 }: {
    href: string;
    label: string;
    setMenuOpen: (open: boolean) => void;
}) {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link
            href={href}
            onClick={() => setMenuOpen(false)} // Close menu when clicking a link
            className={`block md:inline-block text-lg font-medium transition-colors duration-300 py-2 md:py-0 ${
                isActive
                    ? "text-blue-600 dark:text-yellow-400 font-bold"
                    : "text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-yellow-400"
            }`}
        >
            {label}
        </Link>
    );
}
