'use client';

import { useEffect, useRef } from 'react';
import { BookOpen, Cpu, Zap, Database, Calendar, Clock } from 'react-feather';

const posts = [
    {
        icon: Cpu,
        category: 'AI Research',
        title: 'SEAL: The Self-Learning LLM Revolution',
        excerpt: 'Explore how Self-Evolving Autonomous Learning models are changing the game by continuously improving without human intervention.',
        date: 'Jan 1, 2025',
        readTime: '7 min read',
        variant: 'default',
    },
    {
        icon: Zap,
        category: 'Machine Learning',
        title: 'Neuroevolution: When AI Evolves Itself',
        excerpt: 'How evolutionary algorithms are being used to automatically design neural network architectures that outperform hand-crafted models.',
        date: 'Dec 28, 2024',
        readTime: '9 min read',
        variant: 'accent',
    },
    {
        icon: Database,
        category: 'AI Systems',
        title: 'RAG: Supercharging LLMs with Real Data',
        excerpt: 'Retrieval-Augmented Generation combines the power of LLMs with external knowledge bases for more accurate, up-to-date responses.',
        date: 'Dec 20, 2024',
        readTime: '6 min read',
        variant: 'dark',
    },
];


export default function Blog() {
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
        <section className="blog" id="blog" ref={sectionRef}>
            <div className="section-container">
                <div className="section-header animate-on-scroll">
                    <span className="section-tag">
                        <BookOpen size={16} />
                        Insights
                    </span>
                    <h2 className="section-title">From Our Blog</h2>
                    <p className="section-subtitle">
                        Thoughts on AI ethics, privacy technology, and building products people actually love.
                    </p>
                </div>

                <div className="blog-grid">
                    {posts.map((post, index) => (
                        <article
                            key={post.title}
                            className="blog-card animate-on-scroll"
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <div className="blog-image">
                                <div className={`blog-placeholder ${post.variant}`}>
                                    <post.icon size={48} />
                                </div>
                            </div>
                            <div className="blog-content">
                                <span className="blog-category">{post.category}</span>
                                <h3>{post.title}</h3>
                                <p>{post.excerpt}</p>
                                <div className="blog-meta">
                                    <span>
                                        <Calendar size={14} />
                                        {post.date}
                                    </span>
                                    <span>
                                        <Clock size={14} />
                                        {post.readTime}
                                    </span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
