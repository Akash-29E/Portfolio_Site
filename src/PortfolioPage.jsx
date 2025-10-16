import './PortfolioPage.css';

export default function PortfolioPage() {
    const projects = [
        { id: 1, title: 'Project One', img: 'https://via.placeholder.com/600?text=Project+1' },
        { id: 2, title: 'Project Two', img: 'https://via.placeholder.com/600?text=Project+2' },
        { id: 3, title: 'Project Three', img: 'https://via.placeholder.com/600?text=Project+3' },
    ];

    return (
        <main
            className="main-content"
            style={{ paddingLeft: '1.5rem', paddingTop: '1.5rem' }} /* added top and left space */
        >
            <header style={{ width: '100%', marginBottom: '1.5rem' }}>
                <h1 style={{ margin: 0 }}>Portfolio</h1>
            </header>

            <div
                className="portfolio-grid"
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '1.5rem', /* increased gap between items */
                    width: '100%',
                }}
            >
                {projects.map((p) => (
                    <div key={p.id} className="portfolio-item" style={{ textAlign: 'center' }}>
                        <img
                            src={p.img}
                            alt={p.title}
                            style={{
                                width: '80%', /* reduced image size by 20% */
                                aspectRatio: '1 / 1',
                                objectFit: 'cover',
                                borderRadius: '8px',
                                display: 'block',
                                margin: '0 auto', /* center the smaller image */
                            }}
                        />
                        <h3 style={{ marginTop: '0.5rem', marginBottom: 0 }}>{p.title}</h3>
                        <p style={{ marginTop: '0.25rem', color: 'var(--color-text)' }}>
                            A short description explaining this image / project.
                        </p>
                    </div>
                ))}
            </div>
        </main>
    );
}