'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Download, Check, Cpu, Shield, Folder, Search, FileText, MessageSquare, Star, ExternalLink } from 'react-feather';

const features = [
    { icon: <Cpu size={18} />, text: 'Local AI Integration (Ollama)' },
    { icon: <Shield size={18} />, text: '100% Privacy - All Data Stays Local' },
    { icon: <Folder size={18} />, text: 'Smart Organization & Folders' },
    { icon: <Search size={18} />, text: 'Full-Text Search' },
    { icon: <FileText size={18} />, text: 'Rich Text Editor' },
    { icon: <MessageSquare size={18} />, text: 'AI Chat About Your Notes' },
];

const aiFeatures = [
    'Summarize Notes',
    'Organize Content',
    'Generate Mind Maps',
    'AI-Powered Chat'
];

const platforms = [
    { name: 'macOS (Apple Silicon)', file: 'Cognition_0.1.0_aarch64.dmg' },
    { name: 'macOS (Intel)', file: 'Cognition_0.1.0_x64.dmg' },
    { name: 'Windows', file: 'Cognition_0.1.0_x64-setup.exe' },
    { name: 'Linux (DEB)', file: 'Cognition_0.1.0_amd64.deb' },
    { name: 'Linux (AppImage)', file: 'Cognition_0.1.0_amd64.AppImage' },
];

export default function ProductLaunch() {
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
        <section className="product-launch-section" id="cognition" ref={sectionRef}>
            <div className="section-container">
                {/* Launch Banner */}
                <div className="launch-banner animate-on-scroll">
                    <div className="launch-badge">
                        <Star size={16} />
                        <span>NEW LAUNCH</span>
                    </div>
                    <h2 className="launch-title">Introducing <span className="gradient-text">Cognition</span></h2>
                    <p className="launch-subtitle">Our first product is here! A privacy-first, AI-powered note-taking app that keeps your data 100% local.</p>
                </div>

                {/* Product Card */}
                <div className="product-launch-card animate-on-scroll">
                    <div className="product-launch-header">
                        <div className="product-logo-wrapper">
                            <Image
                                src="/cognitionlogo.png"
                                alt="Cognition Logo"
                                width={80}
                                height={80}
                                className="product-logo"
                            />
                        </div>
                        <div className="product-info">
                            <span className="version-badge">v0.1.0</span>
                            <h3>Cognition</h3>
                            <p>🧠 Privacy-First AI-Powered Note-Taking</p>
                        </div>
                    </div>

                    <div className="product-launch-content">
                        {/* Features Grid */}
                        <div className="features-section">
                            <h4>Features</h4>
                            <div className="features-grid">
                                {features.map((feature, index) => (
                                    <div key={index} className="feature-item">
                                        <span className="feature-icon">{feature.icon}</span>
                                        <span>{feature.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* AI Features */}
                        <div className="ai-features-section">
                            <h4>AI Capabilities</h4>
                            <div className="ai-features-list">
                                {aiFeatures.map((feature, index) => (
                                    <div key={index} className="ai-feature-pill">
                                        <Check size={14} />
                                        <span>{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Download Section */}
                        <div className="download-section">
                            <h4>Download for Your Platform</h4>
                            <div className="platforms-grid">
                                {platforms.map((platform, index) => (
                                    <Link
                                        key={index}
                                        href={`https://github.com/mrrobot-1001/cognition/releases/download/v0.1.0/${platform.file}`}
                                        className="platform-btn"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Download size={16} />
                                        <span>{platform.name}</span>
                                    </Link>
                                ))}
                            </div>
                            <Link
                                href="https://github.com/mrrobot-1001/cognition/releases/tag/v0.1.0"
                                className="btn btn-primary download-main-btn"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span>View All Downloads</span>
                                <ExternalLink size={18} />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Tech Stack */}
                <div className="tech-stack animate-on-scroll">
                    <span className="tech-label">Built with</span>
                    <div className="tech-pills">
                        <span className="tech-pill">Tauri</span>
                        <span className="tech-pill">React</span>
                        <span className="tech-pill">Rust</span>
                        <span className="tech-pill">Ollama</span>
                        <span className="tech-pill">TipTap</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
