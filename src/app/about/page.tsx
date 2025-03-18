"use client"

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
                    I am a passionate <span className="font-semibold text-blue-500 dark:text-yellow-400">Web Developer </span>
                    specializing in <span className="font-semibold text-blue-500 dark:text-yellow-400">React.js</span>.
                    With a keen eye for design and performance, I build sleek and scalable applications.
                </p>

                {/* Professional Background */}
                <motion.div
                    className="mt-8 text-left"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Professional Background</h2>
                    <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                        I am an intern specializing in React.js technology, focusing on frontend
                        development using Next.js, React, and Tailwind CSS. I have a strong foundation
                        in backend technologies and have worked on multiple web projects to create modern,
                        user-friendly, and scalable solutions.
                    </p>
                </motion.div>

                {/* Education & Certifications */}
                <motion.div
                    className="mt-8 text-left"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Education & Certifications</h2>
                    <ul className="list-disc list-inside mt-2 text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                        <li>Master of Computer Application</li>
                        <li>Bachelor’s Degree in Computer Science</li>
                        <li>Java Full-Stack</li>
                    </ul>
                </motion.div>

                {/* Personal Interests */}
                <motion.div
                    className="mt-8 text-left"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Personal Interests</h2>
                    <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                        Outside of coding, I enjoy traveling.
                        I'm also an avid reader, always looking to learn something new.
                    </p>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    className="mt-8 flex flex-col sm:flex-row gap-4 w-full justify-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <a
                        href="/projects"
                        className="w-full sm:w-auto px-6 py-3 text-base sm:text-lg font-medium text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 transition-all dark:bg-yellow-400 dark:hover:bg-yellow-500 text-center"
                    >
                        View My Projects
                    </a>

                    <a
                        href="/resume.pdf"
                        download
                        className="w-full sm:w-auto px-6 py-3 text-base sm:text-lg font-medium text-gray-900 bg-white border border-gray-300 rounded-lg shadow-md hover:bg-gray-100 transition-all dark:text-white dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 text-center"
                    >
                        Download Resume
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
}
