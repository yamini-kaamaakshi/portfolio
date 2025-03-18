import { projects } from "@/lib/projects";
import { notFound } from "next/navigation";
import Link from "next/link";

export default function ProjectDetail({ params }: { params: { id: string } }) {
    const project = projects.find((p) => p.id === params.id);

    if (!project) {
        return notFound(); // Ensures Next.js correctly handles missing pages
    }

    return (
        <div className="container mx-auto pt-24 p-8 max-w-4xl">
            {/* Project Title */}
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white text-center mb-6">
                {project.title}
            </h1>

            {/* Project Description */}
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                {project.description}
            </p>

            {/* Project Details Card */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
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
                        <span
                            key={index}
                            className="px-4 py-2 text-sm font-semibold bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-full"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Project Image */}
                {project.image && (
                    <div className="flex justify-center mt-6">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full max-w-2xl rounded-lg shadow-lg object-cover h-auto"
                        />
                    </div>
                )}
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-between items-center mt-8 gap-4">
                {/* GitHub Button */}
                <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-gray-800 text-white font-medium rounded-lg shadow-md hover:bg-gray-900 transition-all w-full sm:w-auto text-center"
                >
                    GitHub Repo →
                </a>

                {/* Back to Projects */}
                <Link
                    href="/projects"
                    className="text-lg text-blue-600 dark:text-blue-400 hover:underline"
                >
                    ← Back to Projects
                </Link>
            </div>
        </div>
    );
}
