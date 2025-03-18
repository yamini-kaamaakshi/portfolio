"use client";
import Link from "next/link";
import { useState } from "react";
import { projects } from "@/lib/projects";

export default function ProjectsPage() {
    const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

    // Extract unique technologies
    const allTechnologies = [...new Set(projects.flatMap((p) => p.technologies))];

    // Toggle selection in sidebar
    const toggleFilter = (tech: string) => {
        setSelectedFilters((prev) =>
            prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech]
        );
    };

    // Filter projects (show all if none selected, otherwise match at least one technology)
    const filteredProjects =
        selectedFilters.length === 0
            ? projects
            : projects.filter((project) =>
                project.technologies.some((tech) => selectedFilters.includes(tech))
            );

    return (
        <div className="container mx-auto px-4 sm:px-6 py-12 pt-24 flex flex-col lg:flex-row gap-6">
            {/* Sidebar */}
            <aside className="w-full lg:w-1/4 bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md h-fit hidden lg:block">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Filter by Technology
                </h2>
                <ul className="space-y-3">
                    {allTechnologies.map((tech) => (
                        <li key={tech}>
                            <button
                                onClick={() => toggleFilter(tech)}
                                className={`block w-full text-left px-4 py-2 rounded-md transition-all ${
                                    selectedFilters.includes(tech)
                                        ? "bg-blue-600 text-white"
                                        : "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600"
                                }`}
                            >
                                {tech}
                            </button>
                        </li>
                    ))}
                </ul>
            </aside>

            {/* Main Content */}
            <div className="w-full lg:w-3/4">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-6 text-gray-900 dark:text-white">
                    ✨ My Projects ✨
                </h1>

                {/* Project Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {filteredProjects.map((project) => (
                        <div
                            key={project.id}
                            className="relative bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-lg transition-transform duration-300 hover:scale-105 flex flex-col justify-between min-h-[350px] border border-gray-200 dark:border-gray-700"
                        >
                            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                                {project.title}
                            </h2>

                            {project.image && (
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-48 object-cover rounded-lg mt-4"
                                />
                            )}

                            <p className="text-gray-600 dark:text-gray-300 mt-3 leading-relaxed">
                                {project.description.length > 100
                                    ? project.description.slice(0, 100) + "..."
                                    : project.description}
                            </p>

                            <div className="flex flex-wrap mt-4">
                                {project.technologies.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="mr-2 mb-2 px-3 py-1 text-xs font-semibold bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-full"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-6 text-center">
                                <Link href={`/projects/${project.id}`}>
                                    <button className="w-full sm:w-auto py-2 px-5 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all">
                                        View More →
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
