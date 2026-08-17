import './HomePage.css';

const skills = [
    'Selenium', 'Playwright', 'Cypress', 'JavaScript', 'React',
    'HTML', 'CSS', 'Python', 'Postman', 'SQL', 'Jira', 'Git',
    'Regression Testing', 'API Testing', 'Defect Analysis', 'User Validation',
];

const pillars = [
    {
        icon: '🧪',
        title: 'Quality Engineering',
        points: ['Test strategy & risk-based validation', 'Defect prevention before release', 'Regression and cross-browser QA', 'User-impact driven quality checks'],
    },
    {
        icon: '⚙️',
        title: 'Automation & Validation',
        points: ['Selenium and UI automation', 'API and data validation', 'Repeatable regression coverage', 'Faster, more reliable release confidence'],
    },
    {
        icon: '🔍',
        title: 'Defect Analysis',
        points: ['Root cause investigation', 'SQL-based validation', 'Workflow and edge-case testing', 'Clear reporting for faster fixes'],
    },
    {
        icon: '💡',
        title: 'User-Centred QA',
        points: ['Usability and flow validation', 'Edge case detection early', 'Experience-focused product testing', 'Reliable outcomes for real users'],
    },
];

export default function HomePage() {
    return (
        <main className="home-main-content">
            <div className="home-hero">
                <p className="home-greeting">Hi, I&apos;m</p>
                <h1 className="home-name">Akash Parmar</h1>
                <p className="home-title">QA Engineer | Automation Specialist | Web Developer</p>
                <p className="home-tagline">
                    I design, build, and validate digital experiences with a quality-first mindset —
                    making sure every user flow is reliable, testable, and ready for real-world use.
                </p>
                <div className="home-cta-row">
                    <a className="home-cta-primary" href="./Akash_Parmar_CV.pdf" download>
                        Download CV
                    </a>
                    <a className="home-cta-secondary" href="https://www.linkedin.com/in/parmar-akash/" target="_blank" rel="noopener noreferrer">
                        LinkedIn
                    </a>
                </div>
            </div>

            <div className="home-skills-strip">
                {skills.map((s) => (
                    <span key={s} className="home-skill-badge">{s}</span>
                ))}
            </div>

            <div className="home-pillars">
                {pillars.map((p) => (
                    <article key={p.title} className="home-pillar-card">
                        <span className="home-pillar-icon">{p.icon}</span>
                        <h2>{p.title}</h2>
                        <ul>
                            {p.points.map((pt) => <li key={pt}>{pt}</li>)}
                        </ul>
                    </article>
                ))}
            </div>
        </main>
    );
}