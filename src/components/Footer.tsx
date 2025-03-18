"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
    return (
        <footer className="w-full bg-black dark:bg-black backdrop-blur-md shadow-md border-t border-gray-700 text-center p-4">
            <nav className="flex justify-center space-x-6">
                <NavLink href="/" label="Home" />
                <NavLink href="/about" label="About" />
                <NavLink href="/projects" label="Projects" />
                <NavLink href="/contact" label="Contact" />
            </nav>
            <p className="mt-2 text-sm text-white">
                © {new Date().getFullYear()} My Portfolio. All Rights Reserved.
            </p>
        </footer>
    );
}

/* Reusable NavLink Component */
function NavLink({ href, label }: { href: string; label: string }) {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link
            href={href}
            className={`text-sm font-medium transition-colors duration-300 relative ${
                isActive
                    ? "text-yellow-400 font-bold"
                    : "text-white hover:text-yellow-400"
            }`}
        >
            {label}
        </Link>
    );
}
