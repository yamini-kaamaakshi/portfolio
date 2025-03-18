import Link from "next/link";
import { projects } from "@/lib/projects";

export default function Home() {
    return (
        <main className="mt-10 flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-1000 px-6 py-12">

            {/* Hero Section */}
            <section className="flex flex-col md:flex-row items-center justify-center w-full max-w-5xl mb-24 text-center md:text-left">
                <div className="md:ml-10 mt-12 md:mt-0">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white">
                        Hi, I'm <span className="text-blue-500 dark:text-yellow-400">Yamini</span>
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mt-4">
                        A passionate developer dedicated to building high-quality applications.
                    </p>
                </div>
            </section>

            {/* Skills Section */}
            <section className="w-full max-w-4xl text-center mb-24">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Skills & Expertise</h2>
                <div className="flex flex-wrap justify-center gap-3">
                    {["Core Java", "Spring Boot", "HTML 5", "CSS", "JavaScript", "React.js", "Next.js", "MongoDB"].map((skill) => (
                        <span key={skill} className="px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded-lg text-sm sm:text-base">
                            {skill}
                        </span>
                    ))}
                </div>
            </section>

            {/* Featured Projects */}
            <section className="w-full max-w-4xl mb-24">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">Featured Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project) => (
                        <div key={project.id} className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{project.title}</h3>
                            <p className="text-gray-600 dark:text-gray-300 mt-3 leading-relaxed">
                                {project.description.length > 80
                                    ? project.description.slice(0, 80) + "..."
                                    : project.description}
                            </p>
                            <Link href={`/projects/${project.id}`} className="text-blue-500 dark:text-yellow-400 mt-3 inline-block">
                                View More
                            </Link>
                        </div>
                    ))}
                </div>
            </section>

            {/* Contact Section */}
            <section className="text-center mb-24">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Get in Touch</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                    Interested in working together? Let's connect!
                </p>
                <Link href="/contact" className="mt-6 inline-block px-6 py-3 text-lg font-medium text-white bg-green-500 rounded-lg shadow-md hover:bg-green-600 transition-all dark:bg-yellow-400 dark:hover:bg-yellow-500">
                    Contact Me
                </Link>
            </section>
        </main>
    );
}
