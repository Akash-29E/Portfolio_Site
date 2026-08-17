import './ResumePage.css';
import Accordion from './components/Accordion';
import { useState, useEffect } from 'react';

export default function ResumePage() {
    const [allExpanded, setAllExpanded] = useState(true);
    const [accordionStates, setAccordionStates] = useState({});

    useEffect(() => {
        const states = Object.values(accordionStates);
        if (states.length > 0) {
            const allOpen = states.every(state => state === true);
            const allClosed = states.every(state => state === false);

            if (allOpen) {
                setAllExpanded(true);
            } else if (allClosed) {
                setAllExpanded(false);
            }
        }
    }, [accordionStates]);

    const handleExpandAll = () => {
        const newState = !allExpanded;
        setAllExpanded(newState);
        window.dispatchEvent(new CustomEvent('toggleAllAccordions', {
            detail: { expand: newState }
        }));
    };

    const handleAccordionChange = (id, isOpen) => {
        setAccordionStates(prev => ({
            ...prev,
            [id]: isOpen
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
                    <h1>Professional Summary</h1>
                </div>
                <p>
                    Quality Assurance Engineer with hands-on experience in web application testing, regression validation, defect analysis, and Selenium-based automation. Skilled in validating user journeys, API functionality, and data integrity while collaborating with development teams to improve product quality and release confidence.
                </p>

                <div className="section-header">
                    <h1>Experience</h1>
                </div>
                <Accordion
                    id="exp-2"
                    title="Quality Assurance Analyst"
                    years="(2021 - 2026)"
                    subtitle={'Broadridge Financial Solutions, Toronto'}
                    onStateChange={handleAccordionChange}
                >
                    <ul>
                        <li>Conducted functional, regression, and performance testing for financial applications, ensuring stable and scalable user-facing systems.</li>
                        <li>Analyzed defects and collaborated with developers to resolve issues, improve software reliability, and support banking clients with high-quality product releases.</li>
                        <li>Used SQL for data validation, issue investigation, and back-end verification to ensure accurate and consistent application behavior.</li>
                    </ul>
                </Accordion>
                <Accordion
                    id="exp-3"
                    title="Software Quality Assurance Analyst"
                    years="(2018 - 2019)"
                    subtitle={'Lodestone Software Services (Tech Mahindra), Ahmedabad'}
                    onStateChange={handleAccordionChange}
                >
                    <ul>
                        <li>Led a team of 5 QA professionals to design test plans and execute manual and automated testing with Selenium.</li>
                        <li>Reduced defect leakage by 35% and automated 50% of repetitive test cases, improving efficiency and product quality.</li>
                        <li>Worked in Agile and traditional environments to validate software quality across the development lifecycle.</li>
                    </ul>
                </Accordion>

                <h1>Education</h1>
                <Accordion
                    id="edu-1"
                    title="Enterprise Content Management (Post Degree Credential)"
                    years="(2019 – 2021)"
                    subtitle={'Conestoga College, Kitchener, ON'}
                    onStateChange={handleAccordionChange}
                >
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
                <Accordion
                    id="edu-2"
                    title="Computer Science & Engineering (Bachelor's Degree)"
                    years="(2012 - 2017)"
                    subtitle={'Gujarat Technological University, India'}
                    onStateChange={handleAccordionChange}
                >
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
                <Accordion
                    id="cert-1"
                    title="The Web Developer Bootcamp 2025"
                    years="September 2025"
                    subtitle={'Udemy'}
                    onStateChange={handleAccordionChange}
                >
                    <a href="https://www.udemy.com/certificate/UC-002a37d3-5d28-449d-b23f-63afb0b5556d/" target="_blank" rel="noopener noreferrer"><img src="./WebDev_Certi.jpg" alt="Web Dev Bootcamp Certificate QR Code Image" /></a>
                </Accordion>
                <Accordion
                    id="cert-2"
                    title="Selenium Python - Step by Step for Beginners with Framework"
                    years="Mar 2021"
                    subtitle={'Udemy'}
                    onStateChange={handleAccordionChange}
                >
                    <a href="https://www.udemy.com/certificate/UC-120cc502-c868-4ecd-8c05-953b417dfae5/" target="_blank" rel="noopener noreferrer"><img src="./Selenium_Certi.jpg" alt="Selenium Python Certificate QR Code Image" /></a>
                </Accordion>

                <h1>Skills</h1>
                <ul className="cv-skills-list">
                    <li>QA Strategy</li>
                    <li>Regression Testing</li>
                    <li>Automation Testing</li>
                    <li>Selenium</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Python</li>
                    <li>Postman</li>
                    <li>SQL</li>
                    <li>Jira</li>
                    <li>Git</li>
                    <li>Defect Analysis</li>
                </ul>
            </section>
        </main>
    );
}