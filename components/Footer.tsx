'use client';

import { GraduationCap, Facebook, Instagram, Twitter } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { t, language } = useLanguage();

  const quickLinks = language === 'es'
    ? ['Inicio', 'Nosotros', 'Programas', 'Testimonios', 'Galería', 'Eventos', 'Contacto']
    : ['Home', 'About Us', 'Programs', 'Testimonials', 'Gallery', 'Events', 'Contact'];

  const linkHrefs = ['#home', '#about', '#programs', '#testimonials', '#gallery', '#events', '#contact'];

  const programLinks = language === 'es'
    ? ['Inglés Intensivo', 'Ciencias y Tecnología', 'Arte y Cultura', 'Tecnología Educativa', 'Deportes', 'Liderazgo y Valores']
    : ['Intensive English', 'Science & Technology', 'Arts & Culture', 'Educational Technology', 'Sports', 'Leadership & Values'];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-dark pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="w-8 h-8 text-accent" />
              <span className="text-xl font-bold text-white">EduBilingüe</span>
            </div>
            <p className="text-white/60 leading-relaxed text-sm">
              {t('footer.description')}
            </p>
            {/* Social Media */}
            <div className="flex gap-3 mt-6">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors"
                  aria-label="Social media"
                >
                  <Icon className="w-5 h-5 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={linkHrefs[i]}
                    onClick={(e) => handleClick(e, linkHrefs[i])}
                    className="text-white/60 hover:text-accent transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-white font-bold mb-4">{t('footer.ourPrograms')}</h3>
            <ul className="space-y-2">
              {programLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href="#programs"
                    onClick={(e) => handleClick(e, '#programs')}
                    className="text-white/60 hover:text-accent transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-4">{t('footer.contactInfo')}</h3>
            <ul className="space-y-3 text-sm text-white/60">
              <li>{t('contact.info.address')}</li>
              <li>{t('contact.info.phone')}</li>
              <li>{t('contact.info.email')}</li>
              <li>{t('contact.info.hours')}</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <p className="text-center text-white/40 text-sm">
            {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
}
