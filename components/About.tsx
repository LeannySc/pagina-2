'use client';

import { Target, Eye, Heart } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useScrollReveal } from '@/lib/useScrollReveal';

const cards = [
  { icon: Target, key: 'mission' },
  { icon: Eye, key: 'vision' },
  { icon: Heart, key: 'values' },
];

export default function About() {
  const { t } = useLanguage();
  const { ref, visibleItems } = useScrollReveal(3);

  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-6">
            {t('about.sectionTitle')}
          </h2>
          <p className="text-lg text-text-muted leading-relaxed">
            {t('about.sectionSubtitle')}
          </p>
        </div>

        {/* Cards */}
        <div ref={ref} className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={card.key}
                className={`group p-8 rounded-2xl bg-neutral border border-gray-100 hover:shadow-xl hover:border-accent/30 transition-all duration-300 hover:-translate-y-1 ${
                  visibleItems[index] ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <Icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">
                  {t(`about.${card.key}.title`)}
                </h3>
                <p className="text-text-muted leading-relaxed">
                  {t(`about.${card.key}.description`)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
