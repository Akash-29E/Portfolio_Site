import './ContactPage.css';
import Accordion from './components/Accordion';
import { useState } from 'react';

export default function ContactPage() {
    const [copied, setCopied] = useState(false);
    const email = 'mail@akashparmar.me';

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(email);
            setCopied(true);
            setTimeout(() => setCopied(false), 1800);
        } catch (err) {
            console.error('Failed to copy email: ', err);
        }
    };

    return (
        <main className="main-content">
            <div className="contact-flex">
                <h1>Contact 📧</h1>
                <p className="contact-email-line">
                    {email}
                    <button
                        onClick={handleCopy}
                        aria-label="Copy email"
                        title={copied ? 'Copied' : 'Copy email'}
                        className="copy-button"
                    >
                        <img
                            src={'./copyIcon.svg'}
                            alt="copy"
                            width="18"
                            height="18"
                            className="copy-icon"
                        />
                    </button>
                    <span className='copy-status'>
                        {copied ? 'COPIED' : 'COPY'}
                    </span>
                </p>
            </div>
        </main>
    );
}