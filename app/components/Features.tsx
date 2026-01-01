'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { Zap, Shield, Users, Globe, ArrowRight, CheckCircle } from 'react-feather';

const features = [
    {
        icon: Shield,
        title: 'Privacy First',
        description: 'Your data never leaves your device. Zero cloud storage, zero compromises.',
    },
    {
        icon: Zap,
        title: 'Lightning Fast',
        description: 'On-device AI processing means instant results without network latency.',
    },
    {
        icon: Users,
        title: 'Human-Centric',
        description: 'Designed for real people, not algorithms. Intuitive and accessible.',
    },
    {
        icon: Globe,
        title: 'Made in India',
        description: 'Proudly built in Raipur, serving users across the globe.',
    },
];

const highlights = [
    'No data collection or tracking',
    'Works offline',
    'Enterprise-grade encryption',
    'Open and transparent pricing',
    'Dedicated support team',
    'Regular updates and improvements',
];

export default function Features() {
    const sectionRef = useRef<HTMLDivElement>(null);

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
        <section className="features" id="features" ref={sectionRef}>
            <div className="section-container">
                <div className="section-header animate-on-scroll">
                    <span className="section-tag">
                        <Zap size={16} />
                        Why Morale
                    </span>
                    <h2 className="section-title">Built Different, Built Better</h2>
                    <p className="section-subtitle">
                        We don&apos;t just build AI—we build AI that respects you.
                    </p>
                </div>

                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div
                            key={feature.title}
                            className="feature-card animate-on-scroll"
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <div className="feature-icon">
                                <feature.icon size={28} />
                            </div>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>

                <div className="features-highlights animate-on-scroll">
                    <div className="highlights-content">
                        <h3>Everything you need, nothing you don&apos;t</h3>
                        <div className="highlights-list">
                            {highlights.map((item) => (
                                <div key={item} className="highlight-item">
                                    <CheckCircle size={18} />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                        <Link href="/products" className="btn btn-primary">
                            <span>Explore Our Products</span>
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
