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
                <h1>Contact</h1>
                <p style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', margin: 0 }}>
                    {email}
                    <button
                        onClick={handleCopy}
                        aria-label="Copy email"
                        title={copied ? 'Copied' : 'Copy email'}
                        style={{
                            background: 'transparent',
                            border: 'none',
                            padding: 0,
                            marginLeft: '0.25rem',
                            cursor: 'pointer',
                            display: 'inline-flex',
                            alignItems: 'center',
                        }}
                    >
                        {/* use SVG from public folder */}
                        <img
                            src={'./copyIcon.svg'}
                            alt="copy"
                            width="18"
                            height="18"
                            style={{ display: 'block' }}
                        />
                    </button>
                    <span style={{ color: 'green', fontSize: '0.9rem', marginLeft: '0.25rem' }}>
                        {copied ? 'Copied' : '<- Copy'}
                    </span>
                </p>
            </div>
        </main>
    );
}