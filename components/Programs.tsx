'use client';

import { Languages, FlaskConical, Palette, Monitor, Trophy, Users } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useScrollReveal } from '@/lib/useScrollReveal';

const programIcons = [Languages, FlaskConical, Palette, Monitor, Trophy, Users];

export default function Programs() {
  const { t, language } = useLanguage();
  const { ref, visibleItems } = useScrollReveal(6);

  const items = language === 'es'
    ? [
        { title: 'Inglés Intensivo', description: 'Programa de inmersión en inglés con profesores nativos certificados y metodologías comunicativas.' },
        { title: 'Ciencias y Tecnología', description: 'Laboratorios equipados y proyectos STEM que fomentan el pensamiento científico y la innovación.' },
        { title: 'Arte y Cultura', description: 'Expresión artística a través de música, teatro, danza y artes visuales en ambos idiomas.' },
        { title: 'Tecnología Educativa', description: 'Integración de herramientas digitales y programación desde los primeros años de formación.' },
        { title: 'Deportes', description: 'Programa deportivo integral que promueve el trabajo en equipo, la disciplina y la vida saludable.' },
        { title: 'Liderazgo y Valores', description: 'Formación en habilidades blandas, liderazgo estudiantil y servicio comunitario.' },
      ]
    : [
        { title: 'Intensive English', description: 'English immersion program with certified native teachers and communicative methodologies.' },
        { title: 'Science & Technology', description: 'Equipped laboratories and STEM projects that foster scientific thinking and innovation.' },
        { title: 'Arts & Culture', description: 'Artistic expression through music, theater, dance, and visual arts in both languages.' },
        { title: 'Educational Technology', description: 'Integration of digital tools and programming from the earliest years of education.' },
        { title: 'Sports', description: 'Comprehensive sports program promoting teamwork, discipline, and healthy living.' },
        { title: 'Leadership & Values', description: 'Training in soft skills, student leadership, and community service.' },
      ];

  return (
    <section id="programs" className="py-20 lg:py-28 bg-neutral">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-6">
            {t('programs.sectionTitle')}
          </h2>
          <p className="text-lg text-text-muted leading-relaxed">
            {t('programs.sectionSubtitle')}
          </p>
        </div>

        {/* Programs Grid */}
        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => {
            const Icon = programIcons[index];
            return (
              <div
                key={index}
                className={`group p-8 bg-white rounded-2xl border border-gray-100 hover:shadow-xl hover:border-accent/30 transition-all duration-300 hover:-translate-y-1 ${
                  visibleItems[index] ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 bg-navy/5 rounded-xl flex items-center justify-center mb-5 group-hover:bg-accent/10 transition-colors">
                  <Icon className="w-7 h-7 text-navy group-hover:text-accent transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-navy mb-3">{item.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
