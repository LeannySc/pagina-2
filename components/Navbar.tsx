'use client';

import { useState, useEffect } from 'react';
import { Menu, X, GraduationCap, Globe } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const navLinks = [
  { key: 'home', href: '#home' },
  { key: 'about', href: '#about' },
  { key: 'programs', href: '#programs' },
  { key: 'whyUs', href: '#why-us' },
  { key: 'testimonials', href: '#testimonials' },
  { key: 'gallery', href: '#gallery' },
  { key: 'events', href: '#events' },
  { key: 'contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2 group"
          >
            <GraduationCap
              className={`w-8 h-8 transition-colors ${
                isScrolled ? 'text-navy' : 'text-white'
              } group-hover:text-accent`}
            />
            <span
              className={`text-xl font-bold transition-colors ${
                isScrolled ? 'text-navy' : 'text-white'
              }`}
            >
              EduBilingüe
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all hover:bg-accent/10 hover:text-accent ${
                  isScrolled ? 'text-navy' : 'text-white/90 hover:text-white'
                }`}
              >
                {t(`nav.${link.key}`)}
              </a>
            ))}
          </div>

          {/* Language Toggle + Mobile Menu Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleLanguage}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-semibold transition-all border ${
                isScrolled
                  ? 'border-navy/20 text-navy hover:bg-navy hover:text-white'
                  : 'border-white/30 text-white hover:bg-white hover:text-navy'
              }`}
              aria-label="Toggle language"
            >
              <Globe className="w-4 h-4" />
              {language === 'es' ? 'EN' : 'ES'}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                isScrolled ? 'text-navy hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white shadow-xl border-t px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="block px-4 py-3 rounded-lg text-navy font-medium hover:bg-accent/10 hover:text-accent transition-colors"
            >
              {t(`nav.${link.key}`)}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
