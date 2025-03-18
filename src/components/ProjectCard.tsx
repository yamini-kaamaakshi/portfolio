export default function ProjectCard({ project }: { project: any }) {
    return (
        <div className="border p-4 rounded-lg">
            <h2 className="text-xl font-bold">{project.title}</h2>
            <p className="text-gray-600">{project.description}</p>
            <p className="text-sm mt-2">Tech: {project.technologies.join(", ")}</p>
        </div>
    );
}
