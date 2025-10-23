import './ResumePage.css';
import Accordion from './components/Accordion';
import { useState } from 'react';

export default function ResumePage() {
    const [allExpanded, setAllExpanded] = useState(true);

    const handleExpandAll = () => {
        setAllExpanded(!allExpanded);
        // Trigger custom event to communicate with accordions
        window.dispatchEvent(new CustomEvent('toggleAllAccordions', { 
            detail: { expand: !allExpanded } 
        }));
    };

    return (
        <main className="main-content">
            <div className="page-header">
                <h1 className="page-title">Resume📜</h1>
                <h3 className="expand-toggle" onClick={handleExpandAll}>
                    {allExpanded ? 'Shrink all' : 'Expand all'}
                </h3>
            </div>
            
            <section className="cv-section">
                <div className="section-header">
                    <h1>Experience</h1>
                    
                </div>
                <Accordion title="Web Developer" years="(2024 - Present)" subtitle={'Freelancer'}>
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
                <Accordion title="Quality Assurance Analyst" years="(2021 - 2024)" subtitle={'Broadridge Financial Solutions, Toronto'}>
                    <ul>
                        <li>Conducted performance testing and defect analysis for financial applications, ensuring stable and scalable systems.</li>
                        <li>Collaborated with developers to resolve bugs and enhance system reliability, supporting banking clients with
                            high-quality solutions.</li>
                        <li>Utilized SQL for data fixes and validation, contributing to robust back-end systems.</li>
                    </ul>
                </Accordion>
                <Accordion title="Software Quality Assurance Analyst" years="(2018 - 2019)" subtitle={'Lodestone Software Services (Tech Mahindra), Ahmedabad'}>
                    <ul>
                        <li>Led a team of 5 QA professionals, creating test plans and executing manual and automated tests with Selenium to
                            ensure application stability.</li>
                        <li>Reduced defect leakage by 35% and automated 50% of repetitive test cases, improving efficiency and system quality.</li>
                        <li>Collaborated across teams in agile and traditional environments to deliver scalable, high-quality applications.</li>
                    </ul>
                </Accordion>
                <h1>Education</h1>
                <Accordion title="Enterprise Content Management (Post Degree Credential)" years="(2019 – 2021)" subtitle={'Conestoga College, Kitchener, ON'}>
                    <ul>
                        <li>GPA: <b>3.8</b> (Distinction)</li>
                        <li>Graduated with Honors</li>
                        <li>Relevant coursework:</li>
                        <ul>
                            <li>Cloud Migration</li>
                            <li>SharePoint Administration</li>
                            <li>Business Analysis</li>
                            <li>Database Administration (SQL)</li>
                        </ul>
                    </ul>
                </Accordion>
                <Accordion title="Computer Science & Engineering (Bachelor's Degree)" years="(2012 - 2017)" subtitle={'Gujarat Technological University, India'}>
                    <ul>
                        <li>GPA: <b>3.0</b></li>
                        <li>Relevant coursework:</li>
                        <ul>
                            <li>Java</li>
                            <li>Machine Learning</li>
                            <li>SQL</li>
                            <li>C++</li>
                            <li>PHP</li>
                        </ul>
                    </ul>
                </Accordion>
                <h1>Certifications</h1>
                <Accordion title="The Web Developer Bootcamp 2025" years="September 2025" subtitle={'Udemy'}>
                    
                        <a href="https://www.udemy.com/certificate/UC-002a37d3-5d28-449d-b23f-63afb0b5556d/">Certificate</a>
                    <img src="./WebDevUdemy_QR.png" alt="Web Dev Bootcamp Certificate QR Code Image" />
                </Accordion>
                <Accordion title="Selenium Python - Step by Step for Beginners with Framework" years="Mar 2021" subtitle={'Udemy'}>
                        <a href="https://www.udemy.com/certificate/UC-120cc502-c868-4ecd-8c05-953b417dfae5/">Certificate</a>
                    <img src="./SeleniupPythonUdemy_QR.png" alt="Selenium Python Certificate QR Code Image" />
                </Accordion>
                <h1>Skills</h1>
                <ul className="cv-skills-list">
                    <li>React</li>
                    <li>JavaScript</li>
                    <li>CSS</li>
                    <li>HTML</li>
                    <li>Vite</li>
                    <li>Bootstrap</li>
                    <li>MongoDB</li>
                    <li>Express.js</li>
                    <li>Python</li>
                    <li>Selenium</li>
                    <li>MySQL</li>
                    <li>MaterialUI</li>
                </ul>
            </section>
        </main>
    );
}