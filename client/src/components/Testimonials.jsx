import React from 'react';
import { TESTIMONIALS, FAQS } from '../data/products';
import { Star, Instagram, ImageOff } from 'lucide-react';

export default function Testimonials() {
  return (
    <section id="testimonios" className="py-24 relative bg-[#F9F7F4] border-t border-stone-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Testimonials */}
        <div>
          <div className="max-w-2xl mb-16 space-y-2">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500 font-sans block">
              Opiniones
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-charcoal-950 tracking-tight">
              Experiencias de Clientes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((test) => (
              <div
                key={test.id}
                className="p-7 rounded-2xl bg-white border border-stone-200 shadow-xs flex flex-col justify-between space-y-6"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-1">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-stone-800 text-stone-800" />
                    ))}
                  </div>

                  <p className="text-sm text-stone-700 leading-relaxed">
                    "{test.comment}"
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-100 flex items-center gap-3">
                  {/* Clean Initials Avatar Circle */}
                  <div className="w-10 h-10 rounded-full bg-stone-900 text-white font-display font-bold text-xs flex items-center justify-center flex-shrink-0">
                    {test.name.split(' ').map((n) => n[0]).join('').slice(0, 2)}
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-charcoal-950">
                      {test.name}
                    </h4>
                    <span className="text-xs text-stone-500 font-medium">
                      {test.role} • {test.event}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery Placeholder Grid */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-display font-bold text-xl text-charcoal-950">
                Galería de Montajes
              </h3>
              <p className="text-xs text-stone-500">
                Espacio listo para las fotografías de tus proyectos en Ciudad de México.
              </p>
            </div>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full bg-white border border-stone-300 hover:bg-stone-50 text-xs font-semibold text-charcoal-950 flex items-center gap-2 transition shadow-2xs"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>@chilpayate_balloons</span>
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="aspect-square rounded-2xl bg-stone-100 border border-stone-200 flex flex-col items-center justify-center p-3 text-center select-none hover:bg-stone-150 transition-colors"
              >
                <div className="w-9 h-9 rounded-xl bg-stone-200 border border-stone-300 flex items-center justify-center text-stone-400 mb-1.5">
                  <ImageOff className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-semibold text-stone-500 uppercase tracking-wider">
                  Foto {i + 1}
                </span>
                <span className="text-[9px] text-stone-400">
                  Montaje Real
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div className="pt-8 border-t border-stone-200 max-w-4xl mx-auto space-y-8">
          <div className="space-y-1 text-center">
            <h3 className="font-display font-bold text-2xl text-charcoal-950">
              Preguntas Frecuentes
            </h3>
            <p className="text-xs text-stone-500">
              Detalles sobre tiempos de anticipación, fijaciones seguras y duración del helio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {FAQS.map((faq, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white border border-stone-200 space-y-2 shadow-2xs"
              >
                <h4 className="font-display font-bold text-sm text-charcoal-950">
                  {faq.question}
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed">
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
