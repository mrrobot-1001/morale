import Image from 'next/image';
import Link from 'next/link';
import { Heart } from 'react-feather';

export default function Footer() {
    return (
        <footer className="footer footer-compact">
            <div className="footer-container">
                <div className="footer-main">
                    <div className="footer-brand">
                        <div className="footer-logo-wrapper">
                            <Image
                                src="/orale-high-resolution-logo-transparent.png"
                                alt="Morale"
                                width={100}
                                height={32}
                                className="footer-logo-img"
                            />
                        </div>
                        <p>Human-centric AI solutions from India.</p>
                    </div>

                    <div className="footer-links">
                        <div className="footer-column">
                            <h4>Products</h4>
                            <Link href="/products#cognition">Cognition</Link>
                        </div>
                        <div className="footer-column">
                            <h4>Company</h4>
                            <Link href="/about">About Us</Link>
                            <Link href="/blog">Blog</Link>
                            <Link href="/contact">Contact</Link>
                        </div>
                        <div className="footer-column">
                            <h4>Support</h4>
                            <a href="mailto:moraleindia@zohomail.in">moraleindia@zohomail.in</a>
                            <Link href="/contact">Help Center</Link>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2024 Morale. Made with <Heart size={12} /> in India 🇮🇳</p>
                </div>
            </div>
        </footer>
    );
}
