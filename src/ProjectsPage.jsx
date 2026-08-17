import './ProjectsPage.css';

const projects = [
    {
        name: 'Splitstar',
        url: 'https://www.splitstar.app/',
        preview: '/https___www.splitstar.jpg',
        tagline: 'Expense splitting made simple',
        techStack: 'React, JavaScript, UX validation, workflow testing',
        description:
            'A user-facing app focused on simplifying shared expenses. My work emphasized validation of key user journeys, usability checks, and release confidence to ensure the experience remained smooth and dependable for end users.',
        qaFocus:
            'Quality focus: edge-case validation, flow testing, UI consistency checks, and user-impact review across core financial interactions.',
    },
];

export default function ProjectsPage() {
    return (
        <main className="projects-main-content">
            <header className="projects-header">
                <h1>Project Highlights</h1>
                <p>Quality-focused product work that combines development, validation, and user experience thinking.</p>
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
                        <p>
                            <strong>QA lens:</strong> {project.qaFocus}
                        </p>
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
