"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { socialMediaLinks } from "@/lib/socialMediaLinks";

export default function Footer() {
    return (
        <footer className="w-full bg-black dark:bg-black backdrop-blur-md shadow-md border-t border-gray-700 text-center py-12 px-6">
            <nav className="flex justify-center space-x-8">
                <NavLink href="/" label="Home" />
                <NavLink href="/about" label="About" />
                <NavLink href="/projects" label="Projects" />
                <NavLink href="/contact" label="Contact" />
            </nav>

            <div className="mt-6 text-white text-xl font-semibold">
                <p className="mt-2">Connect with me on:</p>
                <div className="flex justify-center space-x-8 mt-3">
                    {Object.entries(socialMediaLinks).map(([platform, { url, icon }]) => (
                        <Link key={platform} href={url} target="_blank">
                            <Image
                                width={70}
                                height={70}
                                src={icon}
                                alt={platform}
                                className="w-6 h-6 transition-transform duration-300 hover:scale-110"
                            />
                        </Link>
                    ))}
                </div>
            </div>

            <p className="mt-6 text-lg text-gray-400">
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
            className={`text-lg font-medium transition-colors duration-300 relative ${
                isActive
                    ? "text-yellow-400 font-bold"
                    : "text-white hover:text-yellow-400"
            }`}
        >
            {label}
        </Link>
    );
}
