'use client';

import { Languages, Cpu, HeartHandshake, UsersRound } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useScrollReveal } from '@/lib/useScrollReveal';

const featureIcons = [Languages, Cpu, HeartHandshake, UsersRound];

export default function WhyChooseUs() {
  const { t, language } = useLanguage();
  const { ref, visibleItems } = useScrollReveal(8);

  const stats = language === 'es'
    ? [
        { number: '500+', label: 'Estudiantes' },
        { number: '50+', label: 'Docentes' },
        { number: '15', label: 'Años de Experiencia' },
        { number: '98%', label: 'Satisfacción' },
      ]
    : [
        { number: '500+', label: 'Students' },
        { number: '50+', label: 'Teachers' },
        { number: '15', label: 'Years of Experience' },
        { number: '98%', label: 'Satisfaction Rate' },
      ];

  const features = language === 'es'
    ? [
        { title: 'Bilingüismo Real', description: 'Inmersión completa en español e inglés desde el primer día.' },
        { title: 'Tecnología de Punta', description: 'Aulas inteligentes y recursos digitales de última generación.' },
        { title: 'Formación en Valores', description: 'Educación integral que desarrolla ciudadanos responsables.' },
        { title: 'Comunidad Activa', description: 'Padres, estudiantes y docentes trabajando juntos por la excelencia.' },
      ]
    : [
        { title: 'True Bilingualism', description: 'Complete immersion in Spanish and English from day one.' },
        { title: 'Cutting-Edge Technology', description: 'Smart classrooms and state-of-the-art digital resources.' },
        { title: 'Values-Based Education', description: 'Comprehensive education that develops responsible citizens.' },
        { title: 'Active Community', description: 'Parents, students, and teachers working together for excellence.' },
      ];

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-navy relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            {t('whyUs.sectionTitle')}
          </h2>
          <p className="text-lg text-white/70 leading-relaxed">
            {t('whyUs.sectionSubtitle')}
          </p>
        </div>

        {/* Stats */}
        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center ${
                visibleItems[index] ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl sm:text-5xl font-bold text-accent mb-2">
                {stat.number}
              </div>
              <div className="text-white/70 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = featureIcons[index];
            return (
              <div
                key={index}
                className={`p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-accent/30 transition-all duration-300 ${
                  visibleItems[index + 4] ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${(index + 4) * 0.1}s` }}
              >
                <Icon className="w-8 h-8 text-accent mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
