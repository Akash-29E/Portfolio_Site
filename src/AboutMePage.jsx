import './AboutMePage.css';
import Accordion from './components/Accordion';

export default function AboutMePage() {
    return (
        <main className="main-content">
            <div className="aboutme-flex">
                <div className="aboutme-left">
                    <section className='description'>
                        <h1>About Me 🌟</h1>
                        <p>Hi, I’m Akash — a Quality Assurance Engineer turned Web Developer who loves transforming ideas into clean, responsive, and meaningful digital experiences. My journey started with breaking things to make them better — and now I build them better from the start.
                        </p>
                        <p>
                            With a sharp eye for detail shaped by years in QA, I approach development with both precision and curiosity. Whether it’s designing intuitive front-end interfaces or crafting efficient back-end logic, I enjoy solving complex problems through simple, elegant code.
                        </p>
                        <p>
                            I’m passionate about creating web experiences that feel good — fast, accessible, and thoughtfully designed. I thrive in learning new technologies, collaborating with creative minds, and pushing every project a bit further than expected.
                        </p>
                        <p>
                            When I’m not coding, I’m usually exploring design trends, refining personal projects, or chasing that perfect balance between logic and creativity — the art of building something that just works beautifully.
                        </p>
                    </section>
                </div>
                <div className="aboutme-right">
                    <div className="info-item"><strong>Age:</strong> 30</div>
                    <div className="info-item"><strong>City:</strong> Kitchener, ON</div>
                    <div className="info-item"><strong>Mail:</strong> mail@akashparmar.me</div>
                    <div className="info-item"><strong>Phone:</strong> +1 437 987 2080</div>
                </div>
            </div>
        </main>
    );
}