'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { Package, MessageCircle, Eye, FileText, Check, ArrowRight } from 'react-feather';

const products = [
    {
        icon: MessageCircle,
        name: 'Morale Assist',
        description: 'Conversational AI that actually listens. Context-aware responses without the creepy data collection.',
        features: ['On-device processing', 'Zero cloud storage', 'Natural conversations'],
        featured: false,
    },
    {
        icon: Eye,
        name: 'Morale Vision',
        description: 'Image understanding that respects boundaries. Powerful recognition with privacy at its core.',
        features: ['Edge computing', 'Real-time analysis', 'No image storage'],
        featured: true,
    },
    {
        icon: FileText,
        name: 'Morale Docs',
        description: 'Document intelligence that keeps your secrets. Smart extraction without the data export.',
        features: ['Local processing', 'End-to-end encryption', 'Multi-format support'],
        featured: false,
    },
];

export default function Products() {
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
        <section className="products" id="products" ref={sectionRef}>
            <div className="section-container">
                <div className="section-header animate-on-scroll">
                    <span className="section-tag">
                        <Package size={16} />
                        Solutions
                    </span>
                    <h2 className="section-title">Products Built for People</h2>
                    <p className="section-subtitle">
                        Every tool we build starts with a simple question: How can we make this genuinely helpful?
                    </p>
                </div>

                <div className="products-grid">
                    {products.map((product, index) => (
                        <div
                            key={product.name}
                            className={`product-card ${product.featured ? 'featured' : ''} animate-on-scroll`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            {product.featured && <div className="featured-badge">Most Popular</div>}
                            <div className="product-icon">
                                <product.icon size={28} />
                            </div>
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                            <ul className="product-features">
                                {product.features.map((feature) => (
                                    <li key={feature}>
                                        <Check size={16} />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <Link href="/contact" className="product-link">
                                <span>Learn More</span>
                                <ArrowRight size={18} />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
