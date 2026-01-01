'use client';

import { useEffect, useRef } from 'react';
import { Heart, Lock, Smile, Code, MapPin } from 'react-feather';
import Founder from './Founder';

const values = [
    {
        icon: Lock,
        title: 'Privacy by Design',
        description: 'Built from the ground up with data protection as a core principle.',
    },
    {
        icon: Smile,
        title: 'User-First',
        description: 'Every feature exists because it makes your life genuinely easier.',
    },
    {
        icon: Code,
        title: 'Transparent',
        description: 'We show our work. Auditable code. Clear policies. No surprises.',
    },
];

export default function About() {
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
        <section className="about-minimal" id="about" ref={sectionRef}>
            <div className="section-container">
                <div className="about-manifesto animate-on-scroll">
                    <span className="section-tag centered">
                        <Heart size={16} />
                        Our Mission
                    </span>
                    <h2 className="manifesto-title">Technology Should Serve You, Not Surveil You</h2>
                    <p className="manifesto-text">
                        We started Morale with a radical belief: AI can be powerful <em>and</em> private.
                        Every algorithm we write, every model we train, every product we ship is designed
                        with one principle — your data is yours. Period.
                    </p>
                    <p className="manifesto-text">
                        Our team of engineers, designers, and privacy advocates builds AI solutions that
                        work on your terms. No hidden trackers. No data harvesting. No compromises.
                    </p>

                    <div className="india-origin-badge centered animate-on-scroll">
                        <MapPin size={20} />
                        <div>
                            <strong>Born in Raipur 🇮🇳</strong>
                            <span>Proudly building India&apos;s homegrown AI</span>
                        </div>
                    </div>
                </div>

                <div className="roadmap-container animate-on-scroll">
                    <div className="roadmap-line"></div>
                    {values.map((value, index) => (
                        <div key={value.title} className={`roadmap-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                            <div className="roadmap-marker"></div>
                            <div className="roadmap-content">
                                <div className="roadmap-icon">
                                    <value.icon size={24} />
                                </div>
                                <h3>{value.title}</h3>
                                <p>{value.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <Founder />
            </div>
        </section>
    );
}
