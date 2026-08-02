import React from 'react';
import { MessageSquare, Wand2, Truck, Sparkles, CheckCircle2 } from 'lucide-react';

export default function ProcessSteps() {
  const steps = [
    {
      number: '01',
      title: 'Elige o Diseña tu Arreglo',
      description: 'Selecciona de nuestro catálogo o comparte tu idea y paleta de colores preferida con nuestros estilistas.',
      icon: MessageSquare,
    },
    {
      number: '02',
      title: 'Creación & Calibración Premium',
      description: 'Armamos tu arreglo con globos 100% biodegradables Qualatex/Sempertex, helio certificado y tratamiento Hi-Float.',
      icon: Wand2,
    },
    {
      number: '03',
      title: 'Entrega o Montaje Puntual',
      description: 'Llevamos tu pedido en transporte climatizado o realizamos el montaje completo en el lugar de tu evento.',
      icon: Truck,
    },
  ];

  return (
    <section id="proceso" className="py-24 relative bg-cream-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-champagne-100 border border-champagne-300 text-champagne-800 text-xs font-bold uppercase tracking-wider font-display">
            <Sparkles className="w-3.5 h-3.5 text-champagne-600" />
            ¿Cómo Trabajamos?
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-charcoal-950 tracking-tight">
            Una experiencia sin complicaciones, <span className="gold-gradient-text">de inicio a fin</span>.
          </h2>
          <p className="text-charcoal-800/80 text-base sm:text-lg">
            Nos encargamos de cada detalle para que tú solo disfrutes de celebrar.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {/* Subtle connecting line for desktop */}
          <div className="hidden md:block absolute top-1/2 left-1/6 right-1/6 h-[2px] bg-gradient-to-r from-champagne-200 via-champagne-400 to-champagne-200 -translate-y-12 -z-0"></div>

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative z-10 p-8 rounded-3xl bg-white border border-champagne-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center space-y-4 group"
              >
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-champagne-400 to-champagne-200 text-charcoal-950 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-charcoal-900" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-charcoal-900 text-white text-xs font-extrabold font-display flex items-center justify-center border-2 border-white shadow">
                    {step.number}
                  </span>
                </div>

                <h3 className="font-display font-bold text-xl text-charcoal-950 pt-2">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-charcoal-800/70 leading-relaxed">
                  {step.description}
                </p>

                <div className="pt-2 flex items-center gap-1.5 text-xs font-semibold text-emerald-600">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Garantía de Satisfacción</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
