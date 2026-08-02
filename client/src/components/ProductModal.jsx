import React, { useState } from 'react';
import { X, Star, Check, MessageCircle, ImageOff } from 'lucide-react';

export default function ProductModal({ product, onClose }) {
  if (!product) return null;

  const [customText, setCustomText] = useState('');
  const [selectedOccasion, setSelectedOccasion] = useState(product.occasions[0] || 'Cumpleaños');

  const handleOrderWhatsApp = () => {
    const message = encodeURIComponent(
      `Hola Chilpayate Balloons,\n\n` +
      `Me interesa cotizar el siguiente montaje:\n` +
      `• Diseño: ${product.name} ($${product.price.toLocaleString('es-MX')})\n` +
      `• Ocasión: ${selectedOccasion}\n` +
      `• Dimensiones: ${product.dimensions}\n` +
      `• Texto personalizado: "${customText || 'Sin texto específico'}"\n\n` +
      `¿Podrían confirmarme disponibilidad y tiempos de montaje?`
    );
    window.open(`https://wa.me/5215555555555?text=${message}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-charcoal-950/60 backdrop-blur-xs">
      
      <div className="relative w-full max-w-3xl rounded-2xl bg-white border border-stone-300 shadow-2xl overflow-hidden flex flex-col md:flex-row my-auto">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/90 hover:bg-white text-stone-800 border border-stone-200 transition shadow-2xs"
          aria-label="Cerrar"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Left: Clean Studio Image Placeholder */}
        <div className="md:w-1/2 relative bg-stone-100 min-h-[260px] md:min-h-full border-b md:border-b-0 md:border-r border-stone-200 flex flex-col items-center justify-center p-8 text-center select-none">
          <div className="w-16 h-16 rounded-2xl bg-stone-200/90 border border-stone-300 flex items-center justify-center text-stone-500 mb-3">
            <ImageOff className="w-8 h-8 text-stone-400" />
          </div>
          <span className="text-xs font-bold text-stone-600 uppercase tracking-wider block">
            Espacio para Fotografía
          </span>
          <span className="text-[11px] text-stone-400 mt-1">
            {product.name}
          </span>

          <div className="absolute top-4 left-4">
            <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded bg-white/95 text-stone-800 border border-stone-200 shadow-2xs">
              {product.tag}
            </span>
          </div>

          <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-charcoal-950/90 text-white text-xs space-y-0.5">
            <div className="font-semibold text-stone-200">
              {product.durability}
            </div>
            <p className="text-[11px] text-stone-300">{product.dimensions}</p>
          </div>
        </div>

        {/* Right: Details */}
        <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between space-y-6 max-h-[85vh] overflow-y-auto">
          
          <div className="space-y-4">
            <div>
              <div className="flex items-center gap-1 text-xs text-stone-700 font-medium mb-1">
                <Star className="w-3.5 h-3.5 fill-stone-800 text-stone-800" />
                <span>{product.rating}</span>
                <span className="text-stone-400">({product.reviewsCount} montajes realizados)</span>
              </div>
              
              <h3 className="font-display font-bold text-2xl text-charcoal-950 leading-tight">
                {product.name}
              </h3>
            </div>

            <div className="flex items-baseline gap-2">
              <span className="font-display font-bold text-3xl text-charcoal-950">
                ${product.price.toLocaleString('es-MX')}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-stone-400 line-through">
                  ${product.originalPrice.toLocaleString('es-MX')}
                </span>
              )}
            </div>

            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              {product.description}
            </p>

            <div className="space-y-2 pt-2 border-t border-stone-100">
              <span className="text-xs font-semibold uppercase tracking-wider text-stone-700 block">
                Lo que incluye este montaje:
              </span>
              <ul className="space-y-1.5">
                {product.includes.map((item, i) => (
                  <li key={i} className="text-xs text-stone-600 flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-stone-800 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3 pt-2 border-t border-stone-100">
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-stone-700 block mb-1">
                  Texto o Dedicatoria (opcional)
                </label>
                <input
                  type="text"
                  placeholder="Nombre o mensaje para el montaje"
                  value={customText}
                  onChange={(e) => setCustomText(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-stone-300 text-xs text-charcoal-950 focus:outline-none focus:border-charcoal-950"
                />
              </div>

              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-stone-700 block mb-1">
                  Ocasión
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {product.occasions.map((occ) => (
                    <button
                      key={occ}
                      onClick={() => setSelectedOccasion(occ)}
                      className={`text-xs px-3 py-1 rounded-lg font-medium transition ${
                        selectedOccasion === occ
                          ? 'bg-charcoal-950 text-white'
                          : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                      }`}
                    >
                      {occ}
                    </button>
                  ))}
                </div>
              </div>
            </div>

          </div>

          <div className="pt-2">
            <button
              onClick={handleOrderWhatsApp}
              className="w-full py-3.5 rounded-xl font-semibold text-xs uppercase tracking-wider text-white bg-charcoal-950 hover:bg-stone-800 flex items-center justify-center gap-2 transition shadow-xs"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Cotizar Montaje por WhatsApp</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
