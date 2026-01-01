'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Download, ArrowRight } from 'react-feather';

export default function FeaturedProductBanner() {
    return (
        <section className="featured-product-banner">
            <div className="section-container">
                <div className="featured-product-content">
                    <div className="featured-product-info">
                        <div className="featured-product-logo">
                            <Image
                                src="/cognitionlogo.png"
                                alt="Cognition Logo"
                                width={60}
                                height={60}
                            />
                        </div>
                        <div className="featured-product-text">
                            <span className="new-badge">🚀 Just Launched</span>
                            <h3>Cognition - AI-Powered Note-Taking</h3>
                            <p>Your private, local AI companion. 100% offline, 100% yours.</p>
                        </div>
                    </div>
                    <div className="featured-product-cta">
                        <Link
                            href="https://github.com/mrrobot-1001/cognition/releases/tag/v0.1.0"
                            className="btn btn-primary"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Download size={18} />
                            <span>Download Now</span>
                        </Link>
                        <Link href="/products" className="btn btn-secondary">
                            <span>Learn More</span>
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
