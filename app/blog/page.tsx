import Navbar from '../components/Navbar';
import Blog from '../components/Blog';
import Footer from '../components/Footer';

export const metadata = {
    title: 'Blog | Morale - AI Insights from India',
    description: 'Thoughts on AI ethics, privacy technology, and building products people love. Insights from India\'s homegrown AI company.',
};

export default function BlogPage() {
    return (
        <main>
            <Navbar />
            <div className="page-hero">
                <div className="rangoli-pattern"></div>
                <div className="page-hero-content">
                    <span className="page-badge">Insights</span>
                    <h1>From Our <span className="gradient-text">Blog</span></h1>
                    <p>Thoughts on AI ethics, privacy technology, and building products people actually love.</p>
                </div>
            </div>
            <Blog />
            <Footer />
        </main>
    );
}
