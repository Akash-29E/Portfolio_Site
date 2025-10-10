import './ResumePage.css';
import Accordion from './components/Accordion';

export default function ResumePage() {
    return (
        <main className="main-content">
                <section className="cv-section">
                    <h1>Experience</h1>
                    <Accordion title="Senior Frontend Developer at TechCorp (2022–Present)">
                        <ul>
                            <li>Lead UI/UX for enterprise dashboard</li>
                            <li>Mentored 5 junior developers</li>
                            <li>React, Redux, Vite, CSS-in-JS</li>
                        </ul>
                    </Accordion>
                    <Accordion title="Frontend Developer at Webify (2020–2022)">
                        <ul>
                            <li>Built marketing sites and landing pages</li>
                            <li>Worked with designers to implement pixel-perfect layouts</li>
                            <li>React, SASS, Webpack</li>
                        </ul>
                    </Accordion>
                </section>
                <section className="cv-section">
                    <h1>Education</h1>
                    <Accordion title="B.Sc. in Computer Science, State University (2016–2020)">
                        <ul>
                            <li>Graduated with Honors</li>
                            <li>Relevant coursework: Algorithms, Web Development, Databases</li>
                        </ul>
                    </Accordion>
                </section>
                <section className="cv-section">
                    <h1>Skills</h1>
                    <ul className="cv-skills-list">
                        <li>React</li>
                        <li>JavaScript</li>
                        <li>CSS</li>
                        <li>HTML</li>
                        <li>Vite</li>
                    </ul>
                </section>
            </main>
    );
}