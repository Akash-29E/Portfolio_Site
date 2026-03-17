import './HomePage.css';

const skills = [
    'React', 'JavaScript', 'HTML', 'CSS', 'Vite',
    'Node.js', 'Express.js', 'MongoDB', 'RESTful APIs',
    'Bootstrap', 'Material UI', 'Python', 'Selenium', 'MySQL',
];

const pillars = [
    {
        icon: '🖥️',
        title: 'Front-End',
        points: ['React & component-driven UI', 'Responsive CSS & animations', 'Material UI & Bootstrap', 'Vite build tooling'],
    },
    {
        icon: '⚙️',
        title: 'Back-End',
        points: ['Node.js & Express.js APIs', 'MongoDB & Mongoose', 'Authentication & middleware', 'RESTful routing & AXIOS'],
    },
    {
        icon: '🔍',
        title: 'QA & Testing',
        points: ['Selenium test automation', 'Performance & regression testing', 'Defect analysis & SQL validation', 'Agile & cross-team collaboration'],
    },
];

export default function HomePage() {
    return (
        <main className="home-main-content">
            <div className="home-hero">
                <p className="home-greeting">Hi, I&apos;m</p>
                <h1 className="home-name">Akash Parmar</h1>
                <p className="home-title">Web Developer &amp; QA Engineer</p>
                <p className="home-tagline">
                    Building clean, fast, and user-focused web experiences —
                    with a QA mindset baked in from day one.
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