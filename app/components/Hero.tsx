'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { Zap, ArrowRight, Shield, Cpu, Heart, Flag, Volume2, VolumeX } from 'react-feather';

const typingTexts = [
    'Human-Centric',
    'Privacy-First',
    'India-Made',
    'Ethical AI'
];

export default function Hero() {
    const [displayText, setDisplayText] = useState('');
    const [textIndex, setTextIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [soundEnabled, setSoundEnabled] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const isInitialized = useRef(false);

    // Initialize audio once
    useEffect(() => {
        if (typeof window !== 'undefined' && !isInitialized.current) {
            audioRef.current = new Audio('/keystroke.mp3');
            audioRef.current.volume = 0.3;
            isInitialized.current = true;
        }
    }, []);

    const playKeystroke = useCallback(() => {
        if (soundEnabled && audioRef.current) {
            // Clone audio for overlapping sounds
            const sound = audioRef.current.cloneNode() as HTMLAudioElement;
            sound.volume = 0.3;
            sound.play().catch(() => { });
        }
    }, [soundEnabled]);

    useEffect(() => {
        const currentText = typingTexts[textIndex];

        let timeout: NodeJS.Timeout;

        if (!isDeleting) {
            // Typing
            if (charIndex < currentText.length) {
                timeout = setTimeout(() => {
                    setDisplayText(currentText.slice(0, charIndex + 1));
                    setCharIndex(prev => prev + 1);
                    playKeystroke();
                }, 150); // Slower typing for sound sync
            } else {
                // Finished typing, wait before deleting
                timeout = setTimeout(() => {
                    setIsDeleting(true);
                }, 2000);
            }
        } else {
            // Deleting
            if (charIndex > 0) {
                timeout = setTimeout(() => {
                    setDisplayText(currentText.slice(0, charIndex - 1));
                    setCharIndex(prev => prev - 1);
                }, 60); // Deletion speed
            } else {
                // Finished deleting, move to next word
                timeout = setTimeout(() => {
                    setIsDeleting(false);
                    setTextIndex((prev) => (prev + 1) % typingTexts.length);
                }, 300);
            }
        }

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, textIndex, playKeystroke]);

    return (
        <section className="hero" id="home">
            <div className="rangoli-pattern"></div>
            <div className="hero-container">
                <div className="hero-badges animate-fade-up">
                    <div className="hero-badge">
                        <Zap size={16} />
                        <span>Privacy-First AI Solutions</span>
                    </div>
                    <div className="hero-badge india-badge">
                        <Flag size={16} />
                        <span>Proudly Made in India 🇮🇳</span>
                    </div>
                </div>

                <h1 className="hero-title animate-fade-up">
                    <span className="typing-text gradient-text">{displayText}</span>
                    <span className="typing-cursor">|</span>
                    <br />
                    <span>AI Solutions</span>
                </h1>

                <button
                    className="sound-toggle"
                    onClick={() => setSoundEnabled(!soundEnabled)}
                    aria-label={soundEnabled ? 'Mute typing sound' : 'Enable typing sound'}
                >
                    {soundEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
                    <span>{soundEnabled ? 'Sound On' : 'Sound Off'}</span>
                </button>

                <p className="hero-subtitle animate-fade-up">
                    Human-centric AI solutions crafted with care in India. User-oriented design meets
                    enterprise-grade privacy. No complexity, just results.
                </p>

                <div className="hero-cta animate-fade-up">
                    <Link href="/products" className="btn btn-primary">
                        <span>Explore Solutions</span>
                        <ArrowRight size={18} />
                    </Link>
                    <Link href="/about" className="btn btn-secondary">
                        <span>Our Story</span>
                    </Link>
                </div>

                <div className="hero-stats animate-fade-up">
                    <div className="stat-item">
                        <span className="stat-number">99.9%</span>
                        <span className="stat-label">Uptime</span>
                    </div>
                    <div className="stat-divider"></div>
                    {/* <div className="stat-item">
                        <span className="stat-number">50K+</span>
                        <span className="stat-label">Users</span>
                    </div> */}
                    <div className="stat-divider"></div>
                    <div className="stat-item">
                        <span className="stat-number">Zero</span>
                        <span className="stat-label">Data Sold</span>
                    </div>
                </div>
            </div>

            <div className="hero-visual-left">
                <div className="floating-card card-left-1 animate-float">
                    <Zap size={20} />
                    <span>Real-Time</span>
                </div>
                <div className="floating-card card-left-2 animate-float-delayed">
                    <Flag size={20} />
                    <span>Atmanirbhar</span>
                </div>
                <div className="floating-card card-left-3 animate-float">
                    <Shield size={20} />
                    <span>Secure</span>
                </div>
            </div>

            <div className="hero-visual">
                <div className="floating-card card-1 animate-float">
                    <Shield size={20} />
                    <span>Encrypted</span>
                </div>
                <div className="floating-card card-2 animate-float-delayed">
                    <Cpu size={20} />
                    <span>On-Device AI</span>
                </div>
                <div className="floating-card card-3 animate-float">
                    <Heart size={20} />
                    <span>Human-Centric</span>
                </div>
            </div>
        </section>
    );
}
