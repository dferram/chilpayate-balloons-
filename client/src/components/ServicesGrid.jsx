import React from 'react';
import { Crown, Gift, Building2, Sparkles } from 'lucide-react';

export default function ServicesGrid({ onOpenQuote }) {
  const services = [
    {
      icon: Crown,
      title: 'Arcos Orgánicos y Guirnaldas',
      description: 'Estructuras asimétricas con globos de múltiples dimensiones, follaje preservado y acabados mate para entradas, muros y backdrops.',
      tag: 'Diseño a Medida',
    },
    {
      icon: Gift,
      title: 'Bouquets de Helio y Burbuja',
      description: 'Arreglos con helio de alta pureza y tratamiento Hi-Float para una flotación prolongada, con caligrafía personalizada.',
      tag: 'Entrega en CDMX',
    },
    {
      icon: Sparkles,
      title: 'Cajas de Regalo y Revelaciones',
      description: 'Cajas cilíndricas forradas en terciopelo y globos gigantes opacos de revelación de género con polvos holi y confeti.',
      tag: 'Detalles',
    },
    {
      icon: Building2,
      title: 'Eventos Corporativos y Marcas',
      description: 'Montajes para lanzamientos de producto, inauguraciones y ambientación en los tonos precisos de tu marca.',
      tag: 'Corporativo',
    },
  ];

  return (
    <section id="servicios" className="py-24 relative bg-[#F9F7F4] border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16 space-y-2">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500 font-sans block">
            Servicios
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-charcoal-950 tracking-tight">
            Montajes e Instalaciones
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            Diseñamos desde entregas individuales hasta escenografías completas para celebraciones privadas y comerciales.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="p-7 rounded-2xl bg-white border border-stone-200 shadow-xs hover:border-stone-400 transition-all flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-stone-100 text-stone-800 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-stone-100 text-stone-600">
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg text-charcoal-950">
                    {service.title}
                  </h3>

                  <p className="text-xs text-stone-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <button
                  onClick={onOpenQuote}
                  className="w-full py-2.5 rounded-xl border border-stone-300 hover:bg-stone-50 text-charcoal-950 text-xs font-semibold transition"
                >
                  Cotizar servicio
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
