'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Linkedin } from 'react-feather';

export default function Founder() {
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
        <section className="founder-section minimal" ref={sectionRef}>
            <div className="section-container">
                <div className="founder-card animate-on-scroll">
                    <div className="founder-header">
                        <div className="founder-avatar">
                            <Image
                                src="/founder.jpg"
                                alt="Harsh Rana"
                                width={80}
                                height={80}
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className="founder-info">
                            <h3>Harsh Rana</h3>
                            <span className="founder-role">Founder & CEO</span>
                        </div>
                    </div>

                    <div className="founder-body">
                        <p>
                            Harsh founded Morale with a simple belief: technology should empower, not exploit.
                            Leading from Raipur, he is building India's answer to ethical, privacy-first AI.
                        </p>

                        <a
                            href="https://www.linkedin.com/in/harsh-rana-588472211/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="founder-social-link"
                        >
                            <Linkedin size={16} />
                            <span>Connect</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
