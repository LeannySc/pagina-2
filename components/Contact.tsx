'use client';

import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useScrollReveal } from '@/lib/useScrollReveal';

export default function Contact() {
  const { t } = useLanguage();
  const { ref, visibleItems } = useScrollReveal(2);

  const contactInfo = [
    { icon: MapPin, value: t('contact.info.address') },
    { icon: Phone, value: t('contact.info.phone') },
    { icon: Mail, value: t('contact.info.email') },
    { icon: Clock, value: t('contact.info.hours') },
  ];

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-6">
            {t('contact.sectionTitle')}
          </h2>
          <p className="text-lg text-text-muted leading-relaxed">
            {t('contact.sectionSubtitle')}
          </p>
        </div>

        <div
          ref={ref}
          className="grid lg:grid-cols-2 gap-12"
        >
          {/* Contact Form */}
          <div
            className={`${visibleItems[0] ? 'animate-fade-in-up' : 'opacity-0'}`}
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-navy mb-2">
                  {t('contact.form.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all bg-neutral"
                  placeholder={t('contact.form.name')}
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-navy mb-2">
                    {t('contact.form.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all bg-neutral"
                    placeholder={t('contact.form.email')}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-navy mb-2">
                    {t('contact.form.phone')}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all bg-neutral"
                    placeholder={t('contact.form.phone')}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-navy mb-2">
                  {t('contact.form.message')}
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all bg-neutral resize-none"
                  placeholder={t('contact.form.message')}
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-4 bg-accent hover:bg-accent-dark text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-accent/30 hover:-translate-y-0.5"
              >
                {t('contact.form.send')}
              </button>
            </form>
          </div>

          {/* Contact Info + Map Placeholder */}
          <div
            className={`${visibleItems[1] ? 'animate-fade-in-up' : 'opacity-0'}`}
            style={{ animationDelay: '0.2s' }}
          >
            {/* Contact Info Cards */}
            <div className="space-y-4 mb-8">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-xl hover:bg-neutral transition-colors">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <div className="pt-2">
                      <p className="text-text-dark font-medium">{info.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Map Placeholder */}
            <div className="rounded-2xl overflow-hidden h-64 bg-gradient-to-br from-navy/10 to-accent/10 flex items-center justify-center border border-gray-100">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-navy/30 mx-auto mb-3" />
                <p className="text-text-muted text-sm font-medium">
                  {t('contact.info.address')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
