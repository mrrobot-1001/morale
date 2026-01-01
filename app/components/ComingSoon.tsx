'use client';

import { useEffect, useRef, useState } from 'react';
import { Zap, Loader } from 'react-feather';

export default function ComingSoon() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [dots, setDots] = useState('');

    // Animated dots for loading effect
    useEffect(() => {
        const interval = setInterval(() => {
            setDots(prev => prev.length >= 3 ? '' : prev + '.');
        }, 500);
        return () => clearInterval(interval);
    }, []);

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

    return (
        <section className="coming-soon-section" id="products" ref={sectionRef}>
            <div className="section-container">
                <div className="coming-soon-content animate-on-scroll">
                    {/* Main Card */}
                    <div className="coming-soon-card">
                        {/* Spinning Loader */}
                        <div className="coming-soon-loader">
                            <div className="loader-ring"></div>
                            <div className="loader-ring"></div>
                            <div className="loader-ring"></div>
                            <div className="loader-icon">
                                <Loader size={32} />
                            </div>
                        </div>

                        {/* Text Content */}
                        <div className="coming-soon-text">
                            <span className="coming-soon-badge">
                                <Zap size={14} />
                                Building Something Amazing
                            </span>
                            <h2 className="coming-soon-title">
                                Coming Soon<span className="animated-dots">{dots}</span>
                            </h2>
                            <p className="coming-soon-subtitle">
                                Our team is brewing up something extraordinary. Privacy-first AI products
                                that will revolutionize how you work and play.
                            </p>
                        </div>

                        {/* Progress Bar */}
                        <div className="coming-soon-progress">
                            <div className="progress-label">
                                <span>Development Progress</span>
                                <span className="progress-percentage">78%</span>
                            </div>
                            <div className="progress-track">
                                <div className="progress-fill"></div>
                                <div className="progress-glow"></div>
                            </div>
                        </div>

                        {/* Feature Pills */}
                        <div className="coming-soon-features">
                            <div className="feature-pill">
                                <span className="pill-dot"></span>
                                Privacy-First
                            </div>
                            <div className="feature-pill">
                                <span className="pill-dot"></span>
                                Made in India
                            </div>
                            <div className="feature-pill">
                                <span className="pill-dot"></span>
                                AI-Powered
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
