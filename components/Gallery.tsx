'use client';

import { useLanguage } from '@/context/LanguageContext';
import { useScrollReveal } from '@/lib/useScrollReveal';

const galleryGradients = [
  'from-navy/80 to-navy-light/80',
  'from-accent/70 to-accent-dark/70',
  'from-navy-light/70 to-accent/60',
  'from-accent-dark/70 to-navy/70',
  'from-navy/70 to-accent-light/60',
  'from-accent-light/70 to-navy-light/70',
];

const gallerySizes = [
  'sm:col-span-2 sm:row-span-2',
  '',
  '',
  '',
  'sm:col-span-2',
  '',
];

export default function Gallery() {
  const { t, language } = useLanguage();
  const { ref, visibleItems } = useScrollReveal(6);

  const items = language === 'es'
    ? ['Actividades en el Aula', 'Laboratorio de Ciencias', 'Festival Cultural', 'Deportes y Recreación', 'Graduación', 'Trabajo en Equipo']
    : ['Classroom Activities', 'Science Lab', 'Cultural Festival', 'Sports & Recreation', 'Graduation', 'Teamwork'];

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-6">
            {t('gallery.sectionTitle')}
          </h2>
          <p className="text-lg text-text-muted leading-relaxed">
            {t('gallery.sectionSubtitle')}
          </p>
        </div>

        {/* Gallery Grid */}
        <div ref={ref} className="grid sm:grid-cols-3 gap-4">
          {items.map((item, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl ${gallerySizes[index]} ${
                index === 0 ? 'min-h-[300px]' : 'min-h-[200px]'
              } ${visibleItems[index] ? 'animate-scale-in' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${galleryGradients[index]}`} />

              {/* Decorative pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 left-4 w-20 h-20 border-2 border-white rounded-full" />
                <div className="absolute bottom-4 right-4 w-16 h-16 border-2 border-white rounded-lg rotate-45" />
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-semibold text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {item}
                </span>
              </div>

              {/* Always visible label on mobile */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent sm:hidden">
                <span className="text-white font-medium text-sm">{item}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
