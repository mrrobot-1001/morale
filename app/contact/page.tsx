import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export const metadata = {
    title: 'Contact | Morale - Get in Touch',
    description: 'Contact Morale - India\'s homegrown AI company. Visit us in Raipur or reach out online.',
};

export default function ContactPage() {
    return (
        <main>
            <Navbar />
            <div className="page-hero">
                <div className="rangoli-pattern"></div>
                <div className="page-hero-content">
                    <span className="page-badge">Get in Touch</span>
                    <h1>Let&apos;s <span className="gradient-text">Connect</span></h1>
                    <p>Have questions? Want to partner? We&apos;d love to hear from you.</p>
                </div>
            </div>
            <Contact />
            <Footer />
        </main>
    );
}
