"use client";

import { use } from "react";
import { projects } from "@/lib/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params); // ✅ Unwrap the params properly

    const project = projects.find((p) => p.id === id);

    if (!project) {
        return notFound(); // Ensures Next.js correctly handles missing pages
    }

    return (
        <motion.div
            className="container mx-auto pt-24 p-8 max-w-4xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            {/* Project Title */}
            <motion.h1
                className="text-4xl font-bold text-gray-900 dark:text-white text-center mb-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                {project.title}
            </motion.h1>

            {/* Project Description */}
            <motion.p
                className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                {project.description}
            </motion.p>

            {/* Project Details Card */}
            <motion.div
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
            >
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                    Problem Statement
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {project.problemStatement}
                </p>

                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                    Solution Approach
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {project.solutionApproach}
                </p>

                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                    Technologies Used
                </h2>
                <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                        <motion.span
                            key={index}
                            className="px-4 py-2 text-sm font-semibold bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-full"
                            whileHover={{ scale: 1.1 }}
                        >
                            {tech}
                        </motion.span>
                    ))}
                </div>

                {/* Project Image */}
                {project.images && project.images.length > 0 && project.images.map((image, index) => (
                    <motion.div
                        key={index} // Key should be placed here
                        className="flex justify-center mt-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <img src={image} alt={`Project image ${index + 1}`} />
                    </motion.div>
                ))}


            </motion.div>

            {/* Buttons */}
            <motion.div
                className="flex flex-col sm:flex-row justify-between items-center mt-8 gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
            >
                {/* GitHub Button */}
                <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-gray-800 text-white font-medium rounded-lg shadow-md hover:bg-gray-900 transition-all w-full sm:w-auto text-center"
                    whileHover={{ scale: 1.05 }}
                >
                    GitHub Repo →
                </motion.a>

                {/* Back to Projects */}
                <Link
                    href="/projects"
                    className="text-lg text-blue-600 dark:text-blue-400 hover:underline"
                >
                    ← Back to Projects
                </Link>
            </motion.div>
        </motion.div>
    );
}
