'use client';

import Link from 'next/link';
import { ArrowRight, Mail } from 'react-feather';

export default function CTA() {
    return (
        <section className="cta-section">
            <div className="section-container">
                <div className="cta-card">
                    <div className="cta-content">
                        <h2>Ready to Experience Human-Centric AI?</h2>
                        <p>
                            Join thousands of users who&apos;ve made the switch to privacy-first AI.
                            No credit card required.
                        </p>
                        <div className="cta-buttons">
                            <Link href="/products" className="btn btn-primary">
                                <span>Get Started Free</span>
                                <ArrowRight size={18} />
                            </Link>
                            <Link href="/contact" className="btn btn-secondary">
                                <Mail size={18} />
                                <span>Talk to Us</span>
                            </Link>
                        </div>
                    </div>
                    <div className="cta-badge">
                        🇮🇳 Made in India
                    </div>
                </div>
            </div>
        </section>
    );
}
