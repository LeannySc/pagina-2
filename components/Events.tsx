'use client';

import { MapPin, Calendar } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useScrollReveal } from '@/lib/useScrollReveal';

export default function Events() {
  const { t, language } = useLanguage();
  const { ref, visibleItems } = useScrollReveal(3);

  const items = language === 'es'
    ? [
        { date: '15 Mar', title: 'Día de Puertas Abiertas', description: 'Ven a conocer nuestras instalaciones y programa educativo. Actividades para toda la familia.', location: 'Campus Principal' },
        { date: '22 Abr', title: 'Festival de Ciencias', description: 'Exhibición de proyectos científicos realizados por nuestros estudiantes en ambos idiomas.', location: 'Auditorio Central' },
        { date: '10 May', title: 'Semana Cultural Bilingüe', description: 'Celebración de la diversidad cultural con presentaciones artísticas y gastronómicas.', location: 'Todo el Campus' },
      ]
    : [
        { date: 'Mar 15', title: 'Open House Day', description: 'Come visit our facilities and learn about our educational program. Activities for the whole family.', location: 'Main Campus' },
        { date: 'Apr 22', title: 'Science Fair', description: 'Exhibition of scientific projects created by our students in both languages.', location: 'Central Auditorium' },
        { date: 'May 10', title: 'Bilingual Cultural Week', description: 'Celebration of cultural diversity with artistic and gastronomic presentations.', location: 'Entire Campus' },
      ];

  return (
    <section id="events" className="py-20 lg:py-28 bg-neutral">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-6">
            {t('events.sectionTitle')}
          </h2>
          <p className="text-lg text-text-muted leading-relaxed">
            {t('events.sectionSubtitle')}
          </p>
        </div>

        {/* Events List */}
        <div ref={ref} className="space-y-6 max-w-4xl mx-auto">
          {items.map((item, index) => (
            <div
              key={index}
              className={`group flex flex-col sm:flex-row gap-6 p-6 bg-white rounded-2xl border border-gray-100 hover:shadow-xl hover:border-accent/30 transition-all duration-300 ${
                visibleItems[index] ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Date Badge */}
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-accent rounded-2xl flex flex-col items-center justify-center text-white">
                  <Calendar className="w-4 h-4 mb-1" />
                  <span className="text-sm font-bold leading-tight text-center">{item.date}</span>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-xl font-bold text-navy mb-2 group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className="text-text-muted mb-3 leading-relaxed">{item.description}</p>
                <div className="flex items-center gap-2 text-sm text-text-muted">
                  <MapPin className="w-4 h-4 text-accent" />
                  {item.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
