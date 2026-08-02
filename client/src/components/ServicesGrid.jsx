import React from 'react';
import { Sparkles, Crown, Gift, Building2, PartyPopper, HeartHandshake } from 'lucide-react';

export default function ServicesGrid({ onOpenQuote }) {
  const services = [
    {
      icon: Crown,
      title: 'Arcos Orgánicos & Guirnaldas',
      description: 'Estructuras asimétricas con globos de múltiples dimensiones, follaje preservado y combinaciones de texturas mate y cromo para entradas y backdrops.',
      tag: 'Más Popular',
    },
    {
      icon: Gift,
      title: 'Bouquets Flotantes & Helio',
      description: 'Arreglos con helio puro y tratamiento Ultra Hi-Float que garantiza días de flotación perfecta. Con globos burbuja personalizados y viniles caligráficos.',
      tag: 'Entrega Express',
    },
    {
      icon: PartyPopper,
      title: 'Cajas Sorpresa & Revelaciones',
      description: 'Experiencias de regalo interactivas: cajas con globos voladores al destapar, globos gigantes de revelación con polvos holi y confeti temático.',
      tag: 'Especial Momentos',
    },
    {
      icon: Building2,
      title: 'Eventos Corporativos & Marcas',
      description: 'Activaciones de marca, aniversarios de empresa, inauguraciones y ambientación de stands con globos biodegradables en los tonos exactos de tu identidad visual.',
      tag: 'B2B & Empresas',
    },
  ];

  return (
    <section id="servicios" className="py-24 relative bg-cream-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-champagne-300 text-champagne-800 text-xs font-bold uppercase tracking-wider font-display shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-champagne-600" />
            Nuestros Servicios
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-charcoal-950 tracking-tight">
            Experiencias visuales para <span className="gold-gradient-text">cualquier ocasión</span>.
          </h2>
          <p className="text-charcoal-800/80 text-base sm:text-lg">
            Desde detalles íntimos de aniversario hasta montajes a gran escala para bodas y eventos de gala.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="p-8 rounded-3xl bg-white border border-champagne-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6 group hover:-translate-y-1.5"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-champagne-100/80 text-champagne-600 flex items-center justify-center group-hover:scale-110 group-hover:bg-champagne-200 transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-cream-100 text-charcoal-800 border border-champagne-200/60">
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-xl text-charcoal-950">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-charcoal-800/70 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <button
                  onClick={onOpenQuote}
                  className="w-full py-2.5 rounded-xl border border-champagne-200 hover:border-champagne-400 hover:bg-champagne-50 text-charcoal-900 text-xs font-bold transition flex items-center justify-center gap-1.5"
                >
                  <span>Cotizar Servicio</span>
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
