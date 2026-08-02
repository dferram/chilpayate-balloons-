import React, { useState } from 'react';
import { SEASONAL_PATRIO } from '../data/products';
import { MessageCircle, Check, ArrowRight, ShieldCheck } from 'lucide-react';

export default function SeasonalShowcase({ onQuickQuote }) {
  const [activeTab, setActiveTab] = useState(0);
  const activeDesign = SEASONAL_PATRIO.designs[activeTab];

  const handleBookSeasonal = (design) => {
    const text = encodeURIComponent(
      `Hola Chilpayate Balloons,\n\n` +
      `Me interesa apartar el diseño patrio del 15 de Septiembre:\n` +
      `• Diseño: ${design.title} ($${design.price.toLocaleString('es-MX')})\n` +
      `• Tipo: ${design.type} (${design.dimensions})\n\n` +
      `¿Tienen disponibilidad de horario para montaje en mi locación?`
    );
    window.open(`https://wa.me/5215555555555?text=${text}`, '_blank');
  };

  return (
    <section id="temporada" className="py-24 relative bg-[#141316] text-white overflow-hidden">
      
      {/* Subtle architectural ambient background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-[#1C5435]/15 blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#9E2432]/15 blur-3xl pointer-events-none translate-x-1/2 translate-y-1/2"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-stone-800 pb-8">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-stone-400 font-sans">
                {SEASONAL_PATRIO.seasonName}
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-stone-800 text-stone-300 border border-stone-700">
                15 de Septiembre
              </span>
            </div>

            <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight">
              Colección Noche Mexicana
            </h2>

            <p className="text-stone-400 text-sm sm:text-base leading-relaxed">
              {SEASONAL_PATRIO.description}
            </p>
          </div>

          {/* Availability Alert */}
          <div className="p-4 rounded-xl bg-stone-900 border border-stone-800 text-xs text-stone-300 flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-stone-400 flex-shrink-0" />
            <div>
              <span className="font-semibold text-white block">Montajes Limitados</span>
              <span className="text-[11px] text-stone-400">Cupo para 14, 15 y 16 de Septiembre</span>
            </div>
          </div>
        </div>

        {/* Interactive Design Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {SEASONAL_PATRIO.designs.map((design, index) => {
            const isSelected = activeTab === index;
            return (
              <button
                key={design.id}
                onClick={() => setActiveTab(index)}
                className={`p-5 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between gap-4 ${
                  isSelected
                    ? 'bg-stone-900 border-white ring-1 ring-white/50 shadow-lg'
                    : 'bg-stone-950/60 border-stone-800 hover:bg-stone-900 hover:border-stone-700 text-stone-400'
                }`}
              >
                <div className="space-y-1">
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-stone-400">
                    {design.type}
                  </span>
                  <h3 className="font-display font-bold text-base text-white">
                    {design.title}
                  </h3>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-stone-800/80 w-full text-xs">
                  <span className="font-semibold text-white">
                    ${design.price.toLocaleString('es-MX')}
                  </span>
                  <span className="text-stone-400 text-[11px]">
                    {design.dimensions}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Design Featured Showcase Panel */}
        <div className="rounded-3xl bg-stone-900/90 border border-stone-800 p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Image & Tricolor Badge */}
          <div className="lg:col-span-6 relative rounded-2xl overflow-hidden aspect-[4/3] bg-stone-950 border border-stone-800 group">
            <img
              src={activeDesign.image}
              alt={activeDesign.title}
              className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700"
            />
            
            {/* Minimalist Tricolor Band */}
            <div className="absolute top-4 left-4 flex items-center gap-1.5 p-1.5 rounded-lg bg-black/80 backdrop-blur-xs border border-stone-700">
              <span className="w-3 h-3 rounded-full bg-[#1C5435]" title="Verde Bandera"></span>
              <span className="w-3 h-3 rounded-full bg-[#F5F5F0]" title="Blanco Nácar"></span>
              <span className="w-3 h-3 rounded-full bg-[#9E2432]" title="Rojo Carmín"></span>
              <span className="text-[10px] font-semibold text-stone-300 ml-1.5 pr-1">Tricolor Mate</span>
            </div>

            <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-black/85 backdrop-blur-xs border border-stone-800 flex items-center justify-between text-xs">
              <span className="text-stone-300 font-medium">{activeDesign.tag}</span>
              <span className="text-stone-400">{activeDesign.dimensions}</span>
            </div>
          </div>

          {/* Details and Ordering */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-wider font-semibold text-stone-400">
                {activeDesign.type}
              </span>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
                {activeDesign.title}
              </h3>
              <p className="text-sm text-stone-300 leading-relaxed">
                {activeDesign.description}
              </p>
            </div>

            {/* Inclusions List */}
            <div className="space-y-2.5 pt-4 border-t border-stone-800">
              <span className="text-xs font-semibold uppercase tracking-wider text-stone-400 block">
                Especificaciones del Montaje
              </span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-300">
                {activeDesign.includes.map((inc, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-stone-400 flex-shrink-0 mt-0.5" />
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Price and CTA */}
            <div className="pt-6 border-t border-stone-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <div>
                <span className="text-[10px] uppercase font-semibold text-stone-400 block">
                  Costo de Instalación
                </span>
                <span className="font-display font-bold text-3xl text-white">
                  ${activeDesign.price.toLocaleString('es-MX')}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => handleBookSeasonal(activeDesign)}
                  className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-xs uppercase tracking-wider text-black bg-white hover:bg-stone-200 transition flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-black" />
                  <span>Apartar Fecha por WhatsApp</span>
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
