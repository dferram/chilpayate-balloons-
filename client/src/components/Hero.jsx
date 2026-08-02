import React from 'react';
import HeroBalloonCanvas from './HeroBalloonCanvas';
import { ArrowRight, ArrowDown } from 'lucide-react';

export default function Hero({ onOpenQuote }) {
  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 overflow-hidden bg-[#F9F7F4]">
      
      {/* 3D Realistic Balloon Physics Animation */}
      <HeroBalloonCanvas />

      {/* Hero Core Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto z-20">
        
        {/* Top Minimalist Tag */}
        <div className="flex items-center justify-between border-b border-stone-300/70 pb-4 mb-8 sm:mb-12">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-stone-600 font-sans">
            Estudio de Arte en Globos
          </span>
          <span className="text-xs font-medium text-stone-500 font-sans hidden sm:inline-block">
            Ciudad de México y Área Metropolitana
          </span>
        </div>

        {/* Massive Editorial Headline: CHILPAYATE */}
        <div className="space-y-6 sm:space-y-8 select-none">
          <div className="relative">
            <h1 className="hero-title-giant text-charcoal-950 font-display tracking-tighter">
              CHILPAYATE
            </h1>
            <p className="text-sm sm:text-base md:text-lg font-medium tracking-[0.3em] uppercase text-stone-500 font-sans mt-2">
              Balloons & Event Styling
            </p>
          </div>

          {/* Editorial Description & Action Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4 items-end">
            <div className="lg:col-span-7">
              <p className="text-lg sm:text-2xl text-stone-800 font-normal leading-relaxed max-w-2xl">
                Creamos instalaciones orgánicas, bouquets personalizados y montajes de gran formato diseñados a mano para cada celebración.
              </p>
            </div>

            <div className="lg:col-span-5 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <a
                href="#catalogo"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-sm font-semibold text-white bg-charcoal-950 hover:bg-stone-800 active:scale-98 transition-all"
              >
                <span>Ver Catálogo</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenQuote}
                className="inline-flex items-center justify-center px-8 py-4 rounded-full text-sm font-semibold text-charcoal-950 bg-white hover:bg-stone-100 border border-stone-300 active:scale-98 transition-all"
              >
                <span>Cotizar Evento</span>
              </button>
            </div>
          </div>
        </div>

        {/* Minimal Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 sm:pt-16 mt-8 sm:mt-12 border-t border-stone-300/70">
          <div>
            <div className="font-display font-bold text-2xl sm:text-3xl text-charcoal-950">
              1,200+
            </div>
            <div className="text-xs text-stone-600 font-medium mt-0.5">
              Eventos decorados
            </div>
          </div>

          <div>
            <div className="font-display font-bold text-2xl sm:text-3xl text-charcoal-950">
              100%
            </div>
            <div className="text-xs text-stone-600 font-medium mt-0.5">
              Látex biodegradable
            </div>
          </div>

          <div>
            <div className="font-display font-bold text-2xl sm:text-3xl text-charcoal-950">
              5 a 7 días
            </div>
            <div className="text-xs text-stone-600 font-medium mt-0.5">
              Flotación con Hi-Float
            </div>
          </div>

          <div>
            <div className="font-display font-bold text-2xl sm:text-3xl text-charcoal-950">
              4.9 / 5
            </div>
            <div className="text-xs text-stone-600 font-medium mt-0.5">
              Calificación de clientes
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Scroll Reminder */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between text-xs text-stone-500 pt-6">
        <span className="tracking-wider uppercase font-medium text-[11px]">
          Desplaza hacia abajo para elevar los globos
        </span>
        <div className="flex items-center gap-1">
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </div>
      </div>

    </section>
  );
}
