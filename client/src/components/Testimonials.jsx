import React from 'react';
import { TESTIMONIALS, FAQS } from '../data/products';
import { Star, Sparkles, Quote, HelpCircle, Instagram } from 'lucide-react';

export default function Testimonials() {
  const instagramPhotos = [
    'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=400&q=80',
  ];

  return (
    <section id="testimonios" className="py-24 relative bg-cream-100/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Testimonials Section */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-champagne-300 text-champagne-800 text-xs font-bold uppercase tracking-wider font-display shadow-sm">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
              Opiniones Reales
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-charcoal-950 tracking-tight">
              Lo que dicen quienes ya han <span className="gold-gradient-text">celebrado con nosotros</span>.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((test) => (
              <div
                key={test.id}
                className="p-8 rounded-3xl bg-white border border-champagne-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6 relative group"
              >
                <Quote className="w-8 h-8 text-champagne-300/80 absolute top-6 right-6" />

                <div className="space-y-4">
                  <div className="flex items-center gap-1">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <p className="text-sm text-charcoal-800/80 leading-relaxed italic">
                    "{test.comment}"
                  </p>
                </div>

                <div className="pt-4 border-t border-champagne-100 flex items-center gap-3.5">
                  <img
                    src={test.avatar}
                    alt={test.name}
                    className="w-11 h-11 rounded-full object-cover border-2 border-champagne-300"
                  />
                  <div>
                    <h4 className="font-display font-bold text-sm text-charcoal-950">
                      {test.name}
                    </h4>
                    <span className="text-xs text-champagne-700 font-medium">
                      {test.role}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Instagram Visual Gallery */}
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-display font-bold text-2xl text-charcoal-950">
                Inspírate en nuestro Instagram
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-800/70">
                Síguenos en @chilpayate_balloons para ver montajes diarios en vivo.
              </p>
            </div>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full bg-white border border-champagne-300 hover:border-champagne-500 text-xs font-bold text-charcoal-900 shadow-sm flex items-center gap-2 transition"
            >
              <Instagram className="w-4 h-4 text-rose-500" />
              <span>@chilpayate_balloons</span>
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {instagramPhotos.map((photo, i) => (
              <a
                key={i}
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="aspect-square rounded-2xl overflow-hidden group relative shadow-sm block bg-cream-200"
              >
                <img
                  src={photo}
                  alt={`Decoración con globos ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-charcoal-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Instagram className="w-6 h-6 text-white" />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div className="pt-8 border-t border-champagne-200/60 max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-charcoal-950 flex items-center justify-center gap-2">
              <HelpCircle className="w-6 h-6 text-champagne-600" />
              <span>Preguntas Frecuentes</span>
            </h3>
            <p className="text-xs sm:text-sm text-charcoal-800/70">
              Todo lo que necesitas saber antes de tu evento.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {FAQS.map((faq, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white border border-champagne-200/80 shadow-sm space-y-2"
              >
                <h4 className="font-display font-bold text-sm text-charcoal-950">
                  {faq.question}
                </h4>
                <p className="text-xs text-charcoal-800/70 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
