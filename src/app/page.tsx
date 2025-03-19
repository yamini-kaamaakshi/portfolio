"use client";

import Link from "next/link";
import { projects } from "@/lib/projects";
import Image from "next/image";
import { motion } from "framer-motion";
import { data } from "@/lib/home";
// Animation Variants
const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
    hidden: { opacity: 1 },
    visible: { transition: { staggerChildren: 0.2 } }
};

export default function Home() {
    return (
        <motion.main
            initial="hidden"
            animate="visible"
            className="mt-10 flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 px-6 py-12"
        >

            {/* Hero Section */}
            <motion.section
                variants={fadeInUp}
                className="flex flex-col sm:flex-col md:flex-row items-center justify-center w-full max-w-5xl mb-24 text-center md:text-left"
            >
                {/* Profile Picture */}
                {/* Profile Picture */}
                <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full overflow-hidden shadow-lg mb-4 md:mb-0 md:mr-6 lg:mr-8">
                    <Image
                        src="/images/profile.webp"
                        alt="Profile Picture"
                        width={160}
                        height={160}
                        className="object-cover w-full h-full"
                    />
                </div>


                {/* Name & Introduction */}
                <div>
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white">
                        Hi, I&apos;m <span className="text-blue-500 dark:text-yellow-400">{data.name}</span>
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mt-4">
                        {data.description}
                    </p>
                </div>
            </motion.section>

            {/* Skills Section */}
            <motion.section
                variants={fadeInUp}
                className="w-full max-w-4xl text-center mb-24"
            >
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Skills & Expertise</h2>
                <motion.div
                    variants={staggerContainer}
                    className="flex flex-wrap justify-center gap-3"
                    initial="hidden"
                    animate="visible"
                >
                    {data.skills.map((skill) => (
                        <motion.span
                            key={skill}
                            variants={fadeInUp}
                            className="px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded-lg text-sm sm:text-base"
                        >
                            {skill}
                        </motion.span>
                    ))}
                </motion.div>
            </motion.section>

            {/* Featured Projects */}
            <motion.section
                variants={fadeInUp}
                className="w-full max-w-4xl mb-24"
            >
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">Featured Projects</h2>
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            variants={fadeInUp}
                            className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
                        >
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{project.title}</h3>
                            <p className="text-gray-600 dark:text-gray-300 mt-3 leading-relaxed">
                                {project.description.length > 80
                                    ? project.description.slice(0, 80) + "..."
                                    : project.description}
                            </p>
                            <Link href={`/projects/${project.id}`}
                                  className="text-blue-500 dark:text-yellow-400 mt-3 inline-block relative after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-blue-500 after:left-0 after:bottom-0 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 dark:after:bg-yellow-400">
                                View More →
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.section>

            {/* Contact Section */}
            <motion.section
                variants={fadeInUp}
                className="text-center mb-24"
            >
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Get in Touch</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                    Interested in working together? Let&apos;s connect!
                </p>
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <Link href="/contact" className="mt-6 inline-block px-6 py-3 text-lg font-medium text-white bg-green-500 rounded-lg shadow-md hover:bg-green-600 transition-all dark:bg-yellow-400 dark:hover:bg-yellow-500">
                        Contact Me
                    </Link>
                </motion.div>
            </motion.section>

        </motion.main>
    );
}
