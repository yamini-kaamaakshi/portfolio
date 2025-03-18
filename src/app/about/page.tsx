export default function About() {
    return (
        <section className="pt-24 flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 px-4 sm:px-8 md:px-12 lg:px-16 py-12">
            <div className="max-w-3xl w-full text-center">
                {/* Heading */}
                <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">
                    About Me
                </h1>

                {/* Subtitle */}
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    I am a passionate <span className="font-semibold text-blue-500 dark:text-yellow-400">Web Developer</span>
                    specializing in <span className="font-semibold text-blue-500 dark:text-yellow-400">Next.js</span>.
                    With a keen eye for design and performance, I build sleek and scalable applications.
                </p>

                {/* Professional Background */}
                <div className="mt-8 text-left">
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Professional Background</h2>
                    <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                        Over the years, I have worked on multiple web projects, helping businesses create modern,
                        user-friendly, and scalable solutions. I specialize in frontend development using Next.js,
                        React, and Tailwind CSS, with a strong foundation in backend technologies.
                    </p>
                </div>

                {/* Education & Certifications */}
                <div className="mt-8 text-left">
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Education & Certifications</h2>
                    <ul className="list-disc list-inside mt-2 text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                        <li>Master of Computer Application</li>
                        <li>Bachelor’s Degree in Computer Science</li>
                        <li>Java Full-Stack</li>
                    </ul>
                </div>

                {/* Personal Interests */}
                <div className="mt-8 text-left">
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Personal Interests</h2>
                    <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                        Outside of coding, I enjoy traveling.
                        I'm also an avid reader, always looking to learn something new.
                    </p>
                </div>

                {/* CTA Buttons */}
                <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full justify-center">
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
                </div>
            </div>
        </section>
    );
}
