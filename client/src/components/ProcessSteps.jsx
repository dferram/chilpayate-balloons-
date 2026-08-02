import React from 'react';
import { MessageSquare, Wand2, Truck } from 'lucide-react';

export default function ProcessSteps() {
  const steps = [
    {
      number: '01',
      title: 'Definición de Concepto',
      description: 'Elige un arreglo del catálogo o compártenos tu referencia visual, colores y dimensiones deseadas.',
      icon: MessageSquare,
    },
    {
      number: '02',
      title: 'Elaboración Artesanal',
      description: 'Seleccionamos látex de alta calidad, realizamos el calibrado a medida y aplicamos sellador Hi-Float para extender la flotación.',
      icon: Wand2,
    },
    {
      number: '03',
      title: 'Entrega o Instalación',
      description: 'Trasladamos tu pedido en transporte climatizado o realizamos el montaje en el lugar acordado de manera puntual.',
      icon: Truck,
    },
  ];

  return (
    <section id="proceso" className="py-24 relative bg-white border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16 space-y-2">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500 font-sans block">
            Metodología
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-charcoal-950 tracking-tight">
            Proceso de Trabajo
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            Tres pasos claros para coordinar tu pedido y entrega con total tranquilidad.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="p-8 rounded-2xl bg-[#F9F7F4] border border-stone-200 flex flex-col justify-between space-y-6"
              >
                <div className="flex items-center justify-between">
                  <span className="font-display font-bold text-3xl text-stone-400">
                    {step.number}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-white border border-stone-200 text-stone-800 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-display font-bold text-lg text-charcoal-950">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
