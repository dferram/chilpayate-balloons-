import React, { useState, useRef } from 'react';
import { PRODUCTS, CATEGORIES } from '../data/products';
import { ChevronLeft, ChevronRight, Star, Eye, MessageCircle, ImageOff } from 'lucide-react';

export default function ProductCarousel({ onSelectProduct, onQuickQuote }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const scrollContainerRef = useRef(null);

  const filteredProducts = activeCategory === 'all'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === activeCategory);

  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollContainerRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="catalogo" className="py-24 relative bg-[#F9F7F4] border-t border-stone-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500 font-sans block">
              Catálogo de Diseños
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-charcoal-950 tracking-tight">
              Arreglos y Montajes
            </h2>
            <p className="text-stone-600 text-sm sm:text-base">
              Selección de nuestros diseños y estructuras orgánicas. Todos adaptables en paleta cromática y escala.
            </p>
          </div>

          {/* Carousel Arrows */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={() => handleScroll('left')}
              className="p-3 rounded-full bg-white border border-stone-300 hover:bg-stone-100 text-charcoal-900 transition shadow-2xs"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleScroll('right')}
              className="p-3 rounded-full bg-white border border-stone-300 hover:bg-stone-100 text-charcoal-900 transition shadow-2xs"
              aria-label="Siguiente"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Categories Navigation Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition flex items-center gap-2 ${
                  isActive
                    ? 'bg-charcoal-950 text-white shadow-xs'
                    : 'bg-white text-stone-700 hover:text-charcoal-950 hover:bg-stone-100 border border-stone-300'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-medium ${
                    isActive ? 'bg-stone-800 text-stone-300' : 'bg-stone-100 text-stone-600'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Products Horizontal Carousel */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-8 pt-2 snap-x snap-mandatory no-scrollbar"
        >
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="w-[290px] sm:w-[330px] md:w-[350px] flex-shrink-0 snap-start rounded-2xl bg-white border border-stone-200/90 shadow-xs hover:border-stone-400 transition-all flex flex-col group overflow-hidden"
            >
              {/* Card Image Placeholder (Clean Studio Placeholder Box) */}
              <div
                onClick={() => onSelectProduct(product)}
                className="relative aspect-[4/3] bg-stone-100 border-b border-stone-200 flex flex-col items-center justify-center p-6 text-center cursor-pointer group-hover:bg-stone-150 transition-colors select-none"
              >
                {/* Visual placeholder wireframe / icon */}
                <div className="w-14 h-14 rounded-2xl bg-stone-200/80 border border-stone-300/80 flex items-center justify-center text-stone-500 mb-2 group-hover:scale-105 transition-transform">
                  <ImageOff className="w-6 h-6 text-stone-400" />
                </div>
                <span className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider block">
                  Foto de Referencia
                </span>
                <span className="text-[10px] text-stone-400 mt-0.5">
                  {product.dimensions}
                </span>

                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-white/95 text-stone-800 border border-stone-200 shadow-2xs">
                    {product.tag}
                  </span>
                </div>

                <div className="absolute top-3 right-3 px-2 py-0.5 rounded-md bg-white/95 border border-stone-200 flex items-center gap-1 text-xs font-medium text-stone-800 shadow-2xs">
                  <Star className="w-3 h-3 fill-stone-800 text-stone-800" />
                  <span>{product.rating}</span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-1.5">
                  <span className="text-[11px] font-medium text-stone-500 block">
                    {product.durability}
                  </span>
                  
                  <h3
                    onClick={() => onSelectProduct(product)}
                    className="font-display font-bold text-lg text-charcoal-950 hover:text-stone-600 transition cursor-pointer leading-snug"
                  >
                    {product.name}
                  </h3>

                  <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Occasion Tags */}
                <div className="flex flex-wrap gap-1">
                  {product.occasions.slice(0, 3).map((occ) => (
                    <span
                      key={occ}
                      className="text-[10px] font-medium px-2 py-0.5 rounded bg-stone-100 text-stone-700"
                    >
                      {occ}
                    </span>
                  ))}
                </div>

                {/* Price and CTA */}
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-semibold text-stone-500 block">
                      Precio Estimado
                    </span>
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-display font-bold text-xl text-charcoal-950">
                        ${product.price.toLocaleString('es-MX')}
                      </span>
                      {product.originalPrice && (
                        <span className="text-xs text-stone-400 line-through">
                          ${product.originalPrice.toLocaleString('es-MX')}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onSelectProduct(product)}
                      className="p-2 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-800 transition"
                      title="Ver detalle"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    
                    <button
                      onClick={() => onQuickQuote(product)}
                      className="px-3.5 py-2 rounded-lg bg-charcoal-950 hover:bg-stone-800 text-white text-xs font-semibold flex items-center gap-1.5 transition"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Pedir</span>
                    </button>
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Custom Order Banner */}
        <div className="mt-12 rounded-2xl bg-white border border-stone-300 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="font-display font-bold text-xl text-charcoal-950">
              ¿Tienes una imagen o referencia de Pinterest o Instagram?
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 max-w-xl">
              Envíanos tu foto de referencia por WhatsApp y te cotizamos el montaje a la medida exacta de tu espacio.
            </p>
          </div>

          <a
            href="https://wa.me/5215555555555?text=Hola,%20tengo%20una%20foto%20de%20referencia%20y%20me%20gustar%C3%ADa%20cotizarla%20para%20un%20montaje."
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-full font-semibold text-xs text-white bg-charcoal-950 hover:bg-stone-800 transition whitespace-nowrap shadow-xs"
          >
            Enviar foto por WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}
