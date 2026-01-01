'use client';

import { useEffect, useRef } from 'react';
import { Star, MessageCircle } from 'react-feather';

const testimonials = [
    {
        quote: "Morale's privacy-first approach is exactly what our healthcare startup needed. Finally, AI we can trust.",
        author: "Priya Sharma",
        role: "CTO, MedSecure",
        rating: 5,
    },
    {
        quote: "The on-device processing is incredibly fast. Our team productivity increased by 40% after switching.",
        author: "Rahul Mehta",
        role: "Product Lead, TechFlow",
        rating: 5,
    },
    {
        quote: "Being made in India, Morale understands our local context better than any foreign AI tool.",
        author: "Ananya Patel",
        role: "Founder, LocalFirst",
        rating: 5,
    },
];

export default function Testimonials() {
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
        <section className="testimonials" id="testimonials" ref={sectionRef}>
            <div className="section-container">
                <div className="section-header animate-on-scroll">
                    <span className="section-tag">
                        <Star size={16} />
                        Testimonials
                    </span>
                    <h2 className="section-title">Loved by Teams Across India</h2>
                    <p className="section-subtitle">
                        See what our customers have to say about their experience with Morale.
                    </p>
                </div>

                <div className="testimonials-grid">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={testimonial.author}
                            className="testimonial-card animate-on-scroll"
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <div className="testimonial-quote">
                                <MessageCircle size={24} />
                            </div>
                            <p className="testimonial-text">{testimonial.quote}</p>
                            <div className="testimonial-rating">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} size={16} fill="currentColor" />
                                ))}
                            </div>
                            <div className="testimonial-author">
                                <div className="author-avatar">
                                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                                </div>
                                <div className="author-info">
                                    <strong>{testimonial.author}</strong>
                                    <span>{testimonial.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
