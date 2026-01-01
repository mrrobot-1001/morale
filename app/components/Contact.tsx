'use client';

import { useEffect, useRef, useState } from 'react';
import { Send, Mail, MapPin, Twitter, User, Tag, MessageSquare } from 'react-feather';

export default function Contact() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
        elements?.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setFormData({ name: '', email: '', subject: '', message: '' });
            alert('Thank you for your message! We\'ll get back to you soon.');
        }, 1000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section className="contact" id="contact" ref={sectionRef}>
            <div className="section-container">
                <div className="contact-grid">
                    <div className="contact-info animate-on-scroll">
                        <span className="section-tag">
                            <Send size={16} />
                            Get in Touch
                        </span>
                        <h2 className="section-title">Let&apos;s Build Something Human Together</h2>
                        <p>
                            Whether you&apos;re curious about our products, interested in partnerships,
                            or just want to chat about ethical AI — we&apos;d love to hear from you.
                        </p>

                        <div className="contact-methods">
                            <div className="contact-method">
                                <div className="method-icon">
                                    <Mail size={22} />
                                </div>
                                <div>
                                    <h4>Email Us</h4>
                                    <a href="mailto:moraleindia@zohomail.in">moraleindia@zohomail.in</a>
                                </div>
                            </div>
                            <div className="contact-method">
                                <div className="method-icon india-accent">
                                    <MapPin size={22} />
                                </div>
                                <div>
                                    <h4>Visit Us</h4>
                                    <span>Raipur, India 🇮🇳</span>
                                </div>
                            </div>
                            <div className="contact-method">
                                <div className="method-icon">
                                    <Twitter size={22} />
                                </div>
                                <div>
                                    <h4>Follow Us</h4>
                                    <a href="#">@morale_ai</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-wrapper animate-on-scroll">
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">
                                    <User size={16} />
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="John Doe"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">
                                    <Mail size={16} />
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="john@example.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="subject">
                                    <Tag size={16} />
                                    Subject
                                </label>
                                <select
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Select a topic</option>
                                    <option value="products">Product Inquiry</option>
                                    <option value="partnership">Partnership</option>
                                    <option value="support">Support</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">
                                    <MessageSquare size={16} />
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    placeholder="Tell us what's on your mind..."
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <button type="submit" className="btn btn-primary btn-full" disabled={isSubmitting}>
                                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                                <Send size={18} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
