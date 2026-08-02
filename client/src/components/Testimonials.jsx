import React from 'react';
import { TESTIMONIALS, FAQS } from '../data/products';
import { Star, Instagram } from 'lucide-react';

export default function Testimonials() {
  const galleryPhotos = [
    'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=400&q=80',
  ];

  return (
    <section id="testimonios" className="py-24 relative bg-[#F9F7F4] border-t border-stone-200">
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
                  <img
                    src={test.avatar}
                    alt={test.name}
                    className="w-10 h-10 rounded-full object-cover border border-stone-300"
                  />
                  <div>
                    <h4 className="font-display font-bold text-sm text-charcoal-950">
                      {test.name}
                    </h4>
                    <span className="text-xs text-stone-500 font-medium">
                      {test.role}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-display font-bold text-xl text-charcoal-950">
                Galería de Instalaciones
              </h3>
              <p className="text-xs text-stone-500">
                Fotografías de eventos recientes en Ciudad de México.
              </p>
            </div>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full bg-white border border-stone-300 hover:bg-stone-50 text-xs font-semibold text-charcoal-950 flex items-center gap-2 transition"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>@chilpayate_balloons</span>
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {galleryPhotos.map((photo, i) => (
              <div
                key={i}
                className="aspect-square rounded-xl overflow-hidden bg-stone-200 border border-stone-200"
              >
                <img
                  src={photo}
                  alt={`Instalación de globos ${i + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
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
              Detalles sobre tiempos de entrega, duración del helio y personalización.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {FAQS.map((faq, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white border border-stone-200 space-y-2"
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
