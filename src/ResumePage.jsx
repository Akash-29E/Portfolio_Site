import './ResumePage.css';
import Accordion from './components/Accordion';

export default function ResumePage() {
    return (
        <main className="main-content">
            <section className="cv-section">
                <h1>Experience</h1>
                <Accordion title="Web Developer" years="(2024 — Present)" subtitle={'Freelancer'}>
                    <ul>
                        <li>Developed and deployed responsive web applications using React, Node.js, Express.js, and MongoDB, focusing on
                            clean design and thoughtful UX for scalable, user-focused platforms.</li>
                        <li>Built and integrated RESTful APIs to support AI-driven interfaces, enhancing user decision-making with disciplined
                            workflows.</li>
                        <li>Designed and deployed a mock e-commerce platform and portfolio site on Heroku and Netlify, optimizing UI
                            responsiveness with Bootstrap, custom CSS, and modern JavaScript (ES6+).</li>
                        <li>
                            Applied performance optimization techniques and asynchronous programming to improve application speed and
                            scalability.
                        </li>
                        <li>
                            Explored AI/ML concepts to embed intelligent features into user flows, aligning with behavioral finance principles.
                        </li>
                    </ul>
                </Accordion>
                <Accordion title="Quality Assurance Analyst" years="(2021 — 2024)" subtitle={'Broadridge Financial Solutions, Toronto'}>
                    <ul>
                        <li>Conducted performance testing and defect analysis for financial applications, ensuring stable and scalable systems.</li>
                        <li>Collaborated with developers to resolve bugs and enhance system reliability, supporting banking clients with
                            high-quality solutions.</li>
                        <li>Utilized SQL for data fixes and validation, contributing to robust back-end systems.</li>
                    </ul>
                </Accordion>
                <Accordion title="Software Quality Assurance Analyst" years="(2018 — 2019)" subtitle={'Lodestone Software Services (Tech Mahindra), Ahmedabad'}>
                    <ul>
                        <li>Led a team of 5 QA professionals, creating test plans and executing manual and automated tests with Selenium to
                            ensure application stability.</li>
                        <li>Reduced defect leakage by 35% and automated 50% of repetitive test cases, improving efficiency and system quality.</li>
                        <li>Collaborated across teams in agile and traditional environments to deliver scalable, high-quality applications.</li>
                    </ul>
                </Accordion>
            </section>
            <section className="cv-section">
                <h1>Education</h1>
                <Accordion title="Graduate Certificate in Enterprise Content Management (2019–2021)">
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