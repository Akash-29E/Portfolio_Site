import './ContactPage.css';
import Accordion from './components/Accordion';

export default function ContactPage() {
    return (
        <main className="main-content">
            <div className="aboutme-flex">
                <div className="aboutme-left">
                    <section className='description'>
                        <h1>About Me</h1>
                        <p>
                            I am a passionate frontend developer with experience in building responsive and user-friendly web applications.
                        </p>
                    </section>
                </div>
                <div className="aboutme-right">
                    <div className="info-item"><strong>Age:</strong> 28</div>
                    <div className="info-item"><strong>City:</strong> New York</div>
                    <div className="info-item"><strong>Mail:</strong> me@example.com</div>
                    <div className="info-item"><strong>Phone:</strong> +1 234 567 8901</div>
                </div>
            </div>
        </main>
    );
}