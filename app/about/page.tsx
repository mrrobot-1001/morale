import Navbar from '../components/Navbar';
import About from '../components/About';
import Footer from '../components/Footer';

export const metadata = {
    title: 'About Us | Morale - India\'s Homegrown AI',
    description: 'Learn about Morale\'s mission to build privacy-first AI in India. Born in Raipur, built for the world.',
};

export default function AboutPage() {
    return (
        <main>
            <Navbar />
            <div className="page-hero about-hero">
                <div className="rangoli-pattern"></div>
                <div className="page-hero-content">
                    <span className="page-badge india-badge">🇮🇳 Made in India</span>
                    <h1>Our <span className="gradient-text">Story</span></h1>
                    <p>Born in Raipur, built for the world. Building AI that truly respects humanity.</p>
                </div>
            </div>
            <About />
            <Footer />
        </main>
    );
}
