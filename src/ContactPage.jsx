import './ContactPage.css';
import { useState } from 'react';

const WEB3FORMS_KEY = '4ae35642-8266-4ed3-98de-0d3272bbb3c4';

const EMPTY_FORM = { name: '', email: '', message: '' };

function validate({ name, email, message }) {
    const errors = {};
    if (!name.trim()) errors.name = 'Name is required.';
    if (!email.trim()) {
        errors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errors.email = 'Enter a valid email address.';
    }
    if (!message.trim()) errors.message = 'Message is required.';
    else if (message.trim().length < 10) errors.message = 'Message must be at least 10 characters.';
    return errors;
}

export default function ContactPage() {
    const [copied, setCopied] = useState(false);
    const email = 'mail@akashparmar.me';
    const linkedin = 'https://www.linkedin.com/in/parmar-akash/';
    const github = 'https://github.com/Akash-29E/';

    const [form, setForm] = useState(EMPTY_FORM);
    const [errors, setErrors] = useState({});
    const [submitState, setSubmitState] = useState('idle');

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(email);
            setCopied(true);
            setTimeout(() => setCopied(false), 1800);
        } catch (err) {
            console.error('Failed to copy email: ', err);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
        if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate(form);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        setSubmitState('sending');
        try {
            const res = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                body: JSON.stringify({
                    access_key: WEB3FORMS_KEY,
                    name: form.name,
                    email: form.email,
                    message: form.message,
                }),
            });
            const data = await res.json();
            if (data.success) {
                setSubmitState('success');
                setForm(EMPTY_FORM);
                setErrors({});
            } else {
                setSubmitState('error');
            }
        } catch {
            setSubmitState('error');
        }
    };

    return (
        <main className="main-content">
            <div className="contact-flex">
                <header className="contact-header">
                    <h1>Let&apos;s build quality into every release</h1>
                    <p>
                        I&apos;m available for QA Engineer, Automation Engineer, Quality Analyst, and QA-focused development opportunities.
                    </p>
                </header>

                <section className="contact-primary-actions" aria-label="Primary contact links">
                    <a className="contact-action-btn" href={`mailto:${email}`}>
                        Email me
                    </a>
                    <a className="contact-action-btn" href={linkedin} target="_blank" rel="noopener noreferrer">
                        LinkedIn
                    </a>
                    <a className="contact-action-btn" href={github} target="_blank" rel="noopener noreferrer">
                        GitHub
                    </a>
                </section>

                <section className="contact-grid" aria-label="Contact details and preferences">
                    <article className="contact-card">
                        <h2>Direct Contact</h2>
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
                            <span className="copy-status">
                                {copied ? 'COPIED' : 'COPY'}
                            </span>
                        </p>
                        <p className="contact-meta">Location: Kitchener, ON (open to remote and hybrid roles)</p>
                        <p className="contact-meta">Typical response time: within 24 hours</p>
                    </article>

                    <article className="contact-card">
                        <h2>What I Can Help With</h2>
                        <ul className="contact-list">
                            <li>QA strategy and test planning</li>
                            <li>UI and regression automation</li>
                            <li>API validation and data checks</li>
                            <li>Defect analysis and release readiness review</li>
                            <li>Quality-focused web application improvements</li>
                        </ul>
                    </article>
                </section>

                <section className="contact-card contact-form-card" aria-label="Send a message">
                    <h2>Send a message</h2>

                    {submitState === 'success' ? (
                        <div className="form-success">
                            <span className="form-success-icon">✓</span>
                            <p>Thanks! Your message has been sent. I&apos;ll get back to you soon.</p>
                            <button
                                className="form-reset-btn"
                                onClick={() => setSubmitState('idle')}
                            >
                                Send another
                            </button>
                        </div>
                    ) : (
                        <form className="contact-form" onSubmit={handleSubmit} noValidate>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="cf-name">Name</label>
                                    <input
                                        id="cf-name"
                                        type="text"
                                        name="name"
                                        placeholder="Your name"
                                        value={form.name}
                                        onChange={handleChange}
                                        className={errors.name ? 'input-error' : ''}
                                        autoComplete="name"
                                    />
                                    {errors.name && <span className="field-error">{errors.name}</span>}
                                </div>

                                <div className="form-group">
                                    <label htmlFor="cf-email">Email</label>
                                    <input
                                        id="cf-email"
                                        type="email"
                                        name="email"
                                        placeholder="your@email.com"
                                        value={form.email}
                                        onChange={handleChange}
                                        className={errors.email ? 'input-error' : ''}
                                        autoComplete="email"
                                    />
                                    {errors.email && <span className="field-error">{errors.email}</span>}
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="cf-message">Message</label>
                                <textarea
                                    id="cf-message"
                                    name="message"
                                    rows={5}
                                    placeholder="Tell me about your project, release needs, or QA opportunities..."
                                    value={form.message}
                                    onChange={handleChange}
                                    className={errors.message ? 'input-error' : ''}
                                />
                                {errors.message && <span className="field-error">{errors.message}</span>}
                            </div>

                            {submitState === 'error' && (
                                <p className="form-submit-error">
                                    Something went wrong. Please try again or email me directly.
                                </p>
                            )}

                            <button
                                type="submit"
                                className="form-submit-btn"
                                disabled={submitState === 'sending'}
                            >
                                {submitState === 'sending' ? 'Sending…' : 'Send message'}
                            </button>
                        </form>
                    )}
                </section>
            </div>
        </main>
    );
}