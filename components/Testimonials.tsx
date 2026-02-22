'use client';

import { Quote } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useScrollReveal } from '@/lib/useScrollReveal';

const avatarGradients = [
  'from-accent to-accent-dark',
  'from-navy to-navy-light',
  'from-accent-light to-accent',
];

export default function Testimonials() {
  const { t, language } = useLanguage();
  const { ref, visibleItems } = useScrollReveal(3);

  const items = language === 'es'
    ? [
        { text: 'La fundación ha transformado la educación de mis hijos. El nivel de inglés que han alcanzado es impresionante y los valores que les inculcan son excepcionales.', name: 'María García', role: 'Madre de Familia' },
        { text: 'Como ex alumno, puedo decir que la formación bilingüe me abrió puertas en mi carrera profesional. Estoy agradecido por cada enseñanza recibida.', name: 'Carlos Rodríguez', role: 'Ex Alumno' },
        { text: 'El ambiente escolar es cálido y profesional. Los docentes se preocupan genuinamente por el desarrollo integral de cada estudiante.', name: 'Ana Martínez', role: 'Madre de Familia' },
      ]
    : [
        { text: "The foundation has transformed my children's education. The level of English they have achieved is impressive and the values instilled are exceptional.", name: 'María García', role: 'Parent' },
        { text: 'As an alumni, I can say that bilingual education opened doors in my professional career. I am grateful for every lesson received.', name: 'Carlos Rodríguez', role: 'Alumni' },
        { text: 'The school environment is warm and professional. Teachers genuinely care about the comprehensive development of each student.', name: 'Ana Martínez', role: 'Parent' },
      ];

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-6">
            {t('testimonials.sectionTitle')}
          </h2>
          <p className="text-lg text-text-muted leading-relaxed">
            {t('testimonials.sectionSubtitle')}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div ref={ref} className="grid md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl bg-neutral border-l-4 border-accent hover:shadow-xl transition-all duration-300 ${
                visibleItems[index] ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <Quote className="w-10 h-10 text-accent/20 mb-4" />
              <p className="text-text-dark leading-relaxed mb-6 italic">
                &ldquo;{item.text}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${avatarGradients[index]} flex items-center justify-center text-white font-bold text-lg`}>
                  {item.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-navy">{item.name}</div>
                  <div className="text-sm text-text-muted">{item.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
