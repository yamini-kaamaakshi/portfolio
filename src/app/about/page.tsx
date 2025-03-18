"use client";
import { aboutData } from "@/lib/about";
import { motion } from "framer-motion";

export default function About() {
    return (
        <section className="pt-24 flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 px-4 sm:px-8 md:px-12 lg:px-16 py-12">
            <motion.div
                className="max-w-3xl w-full text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                {/* Heading */}
                <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">
                   About Me
                </h1>

                {/* Subtitle */}
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    {aboutData.description}
                </p>

                {/* Professional Background */}
                <motion.div
                    className="mt-8 text-left"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                        {aboutData.professionalBackground.title}
                    </h2>
                    <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                        {aboutData.professionalBackground.content}
                    </p>
                </motion.div>

                {/* Education & Certifications */}
                <motion.div
                    className="mt-8 text-left"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                        {aboutData.education.title}
                    </h2>
                    <ul className="list-disc list-inside mt-2 text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                        {aboutData.education.list.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </motion.div>

                {/* Personal Interests */}
                <motion.div
                    className="mt-8 text-left"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                        {aboutData.personalInterests.title}
                    </h2>
                    <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                        {aboutData.personalInterests.content}
                    </p>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    className="mt-8 flex flex-col sm:flex-row gap-4 w-full justify-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    {aboutData.cta.map((cta, index) => (
                        <a
                            key={index}
                            href={cta.href}
                            download={cta.download || undefined}
                            className={`w-full sm:w-auto px-6 py-3 text-base sm:text-lg font-medium text-black ${cta.style} rounded-lg shadow-md hover:${cta.hoverStyle} transition-all text-center`}
                        >
                            {cta.text}
                        </a>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
}
