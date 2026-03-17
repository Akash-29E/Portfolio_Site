import './ProjectsPage.css';

const projects = [
    {
        name: 'Maptor',
        url: 'https://maptor.ca/',
        preview: '/https___maptor.jpg',
        tagline: 'Plan your route, your way.',
        techStack: 'React, JavaScript, Google Maps Integration',
        description:
            'Maptor lets you build a multi-stop route, automatically optimizes the stop order for the shortest path, and opens it instantly in Google Maps - no account needed.',
    },
    {
        name: 'Splitstar',
        url: 'https://www.splitstar.app/',
        preview: '/https___www.splitstar.jpg',
        tagline: 'Split expenses with Splitstar',
        techStack: 'React, JavaScript, Expense Tracking Workflows',
        description:
            'The easiest way to split bills, track expenses, and settle up with friends, family, and colleagues. No more awkward money conversations.',
    },
];

export default function ProjectsPage() {
    return (
        <main className="projects-main-content">
            <header className="projects-header">
                <h1>Projects</h1>
                <p>Featured apps I have built and launched.</p>
            </header>

            <section className="projects-grid" aria-label="Project list">
                {projects.map((project) => (
                    <article key={project.name} className="project-card">
                        <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-preview-link"
                            aria-label={`Open ${project.name}`}
                        >
                            <img
                                src={project.preview}
                                alt={`${project.name} preview`}
                                className="project-preview"
                                loading="lazy"
                            />
                        </a>
                        <div className="project-card-header">
                            <h2>{project.name}</h2>
                        </div>
                        <p className="project-tagline">{project.tagline}</p>
                        <p className="project-stack">
                            <strong>Tech stack:</strong> {project.techStack}
                        </p>
                        <p>{project.description}</p>
                        <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link"
                        >
                            Visit website
                        </a>
                    </article>
                ))}
            </section>
        </main>
    );
}
