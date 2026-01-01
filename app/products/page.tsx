import Navbar from '../components/Navbar';
import ProductLaunch from '../components/ProductLaunch';
import Footer from '../components/Footer';

export const metadata = {
    title: 'Products | Morale - Cognition AI Note-Taking',
    description: 'Discover Cognition - our privacy-first, AI-powered note-taking app. 100% offline, local AI integration with Ollama. Made in India.',
};

export default function ProductsPage() {
    return (
        <main>
            <Navbar />
            <div className="page-hero">
                <div className="rangoli-pattern"></div>
                <div className="page-hero-content">
                    <span className="page-badge">Our Products</span>
                    <h1>Meet <span className="gradient-text">Cognition</span></h1>
                    <p>Our first product is here! Privacy-first AI tools that genuinely transform your workflow.</p>
                </div>
            </div>
            <ProductLaunch />
            <Footer />
        </main>
    );
}
