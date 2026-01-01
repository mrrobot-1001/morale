'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Box, Edit3, Users, Mail, Menu, X } from 'react-feather';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  const isActive = (path: string) => pathname === path;

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-left">
          <Link href="/products" className={`nav-link ${isActive('/products') ? 'active' : ''}`}>
            <Box />
            <span>Products</span>
          </Link>
          <Link href="/blog" className={`nav-link ${isActive('/blog') ? 'active' : ''}`}>
            <Edit3 />
            <span>Blog</span>
          </Link>
        </div>

        <Link href="/" className="nav-logo">
          <Image
            src="/orale-high-resolution-logo-transparent.png"
            alt="Morale Logo"
            width={120}
            height={40}
            priority
          />
        </Link>

        <div className="nav-right">
          <Link href="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`}>
            <Users />
            <span>About</span>
          </Link>
          <Link href="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`}>
            <Mail />
            <span>Contact</span>
          </Link>
        </div>

        <button
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <Link href="/products" className={`mobile-nav-link ${isActive('/products') ? 'active' : ''}`} onClick={handleLinkClick}>
          <Box />
          <span>Products</span>
        </Link>
        <Link href="/blog" className={`mobile-nav-link ${isActive('/blog') ? 'active' : ''}`} onClick={handleLinkClick}>
          <Edit3 />
          <span>Blog</span>
        </Link>
        <Link href="/about" className={`mobile-nav-link ${isActive('/about') ? 'active' : ''}`} onClick={handleLinkClick}>
          <Users />
          <span>About</span>
        </Link>
        <Link href="/contact" className={`mobile-nav-link ${isActive('/contact') ? 'active' : ''}`} onClick={handleLinkClick}>
          <Mail />
          <span>Contact</span>
        </Link>
      </div>
    </nav>
  );
}
