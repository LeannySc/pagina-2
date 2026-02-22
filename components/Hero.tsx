'use client';

import { ChevronDown } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy" />

      {/* Decorative shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full opacity-10 blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full opacity-5 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full" />

      {/* Decorative dots pattern */}
      <div className="absolute top-32 right-20 grid grid-cols-3 gap-3 opacity-20">
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className="w-2 h-2 bg-accent rounded-full" />
        ))}
      </div>
      <div className="absolute bottom-32 left-20 grid grid-cols-3 gap-3 opacity-20">
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className="w-2 h-2 bg-white rounded-full" />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="inline-block px-4 py-2 bg-accent/20 rounded-full mb-6 animate-fade-in">
          <span className="text-accent text-sm font-semibold tracking-wide uppercase">
            Fundación EduBilingüe
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 animate-fade-in-up">
          {t('hero.title')}
        </h1>

        <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 animate-fade-in-up stagger-2">
          {t('hero.subtitle')}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up stagger-3">
          <button
            onClick={scrollToAbout}
            className="px-8 py-4 bg-accent hover:bg-accent-dark text-white font-semibold rounded-full transition-all hover:shadow-lg hover:shadow-accent/30 hover:-translate-y-0.5"
          >
            {t('hero.cta')}
          </button>
          <button
            onClick={scrollToContact}
            className="px-8 py-4 border-2 border-white/30 hover:border-white text-white font-semibold rounded-full transition-all hover:bg-white/10"
          >
            {t('hero.ctaSecondary')}
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white/50" />
      </div>
    </section>
  );
}
