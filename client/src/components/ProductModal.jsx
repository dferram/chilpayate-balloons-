import React, { useState } from 'react';
import { X, Star, Check, Sparkles, MessageCircle, ShieldCheck, Heart } from 'lucide-react';

export default function ProductModal({ product, onClose }) {
  if (!product) return null;

  const [customText, setCustomText] = useState('');
  const [selectedOccasion, setSelectedOccasion] = useState(product.occasions[0] || 'Cumpleaños');

  const handleOrderWhatsApp = () => {
    const message = encodeURIComponent(
      `¡Hola Chilpayate Balloons! 🎈\n\n` +
      `Me interesa ordenar el siguiente arreglo:\n` +
      `📌 *Producto:* ${product.name} ($${product.price.toLocaleString('es-MX')})\n` +
      `🎉 *Ocasión:* ${selectedOccasion}\n` +
      `✍️ *Texto personalizado:* "${customText || 'Sin texto específico'}"\n\n` +
      `¿Tienen disponibilidad para entrega en mi fecha?`
    );
    window.open(`https://wa.me/5215555555555?text=${message}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-charcoal-950/60 backdrop-blur-sm animate-in fade-in duration-300">
      
      {/* Modal Card */}
      <div className="relative w-full max-w-3xl rounded-3xl bg-white shadow-2xl border border-champagne-200 overflow-hidden flex flex-col md:flex-row my-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/80 hover:bg-white text-charcoal-800 shadow-md transition"
          aria-label="Cerrar ventana"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Side: Product Image */}
        <div className="md:w-1/2 relative bg-cream-100 min-h-[280px] md:min-h-full">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4">
            <span className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border shadow-sm ${product.badgeColor}`}>
              {product.tag}
            </span>
          </div>

          <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-charcoal-950/80 backdrop-blur-md text-white text-xs space-y-1">
            <div className="flex items-center gap-1.5 font-semibold text-champagne-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>{product.durability}</span>
            </div>
            <p className="text-[11px] text-white/80">{product.dimensions}</p>
          </div>
        </div>

        {/* Right Side: Product Details and Customization Form */}
        <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between space-y-6 max-h-[85vh] overflow-y-auto">
          
          <div className="space-y-4">
            
            {/* Title & Rating */}
            <div>
              <div className="flex items-center gap-1.5 text-xs text-amber-500 font-bold mb-1">
                <Star className="w-4 h-4 fill-amber-400" />
                <span>{product.rating}</span>
                <span className="text-charcoal-800/50">({product.reviewsCount} opiniones)</span>
              </div>
              
              <h3 className="font-display font-extrabold text-2xl text-charcoal-950">
                {product.name}
              </h3>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-2">
              <span className="font-display font-extrabold text-3xl text-charcoal-950">
                ${product.price.toLocaleString('es-MX')}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-charcoal-800/50 line-through">
                  ${product.originalPrice.toLocaleString('es-MX')}
                </span>
              )}
              <span className="text-xs text-emerald-600 font-bold ml-2">IVA Incluido</span>
            </div>

            <p className="text-xs sm:text-sm text-charcoal-800/80 leading-relaxed">
              {product.description}
            </p>

            {/* What's included */}
            <div className="space-y-2 pt-2 border-t border-champagne-100">
              <span className="text-xs font-bold uppercase tracking-wider text-charcoal-900 block">
                ¿Qué incluye este arreglo?
              </span>
              <ul className="space-y-1.5">
                {product.includes.map((item, i) => (
                  <li key={i} className="text-xs text-charcoal-800/80 flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-champagne-600 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Customization Options */}
            <div className="space-y-3 pt-2 border-t border-champagne-100">
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-charcoal-900 block mb-1.5">
                  Texto o Nombre en Vinil (Opcional)
                </label>
                <input
                  type="text"
                  placeholder="Ej. Feliz Cumpleaños Mi Amor"
                  value={customText}
                  onChange={(e) => setCustomText(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-champagne-200 text-xs text-charcoal-900 focus:outline-none focus:border-champagne-500 focus:ring-1 focus:ring-champagne-500"
                />
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-charcoal-900 block mb-1.5">
                  Ocasión
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {product.occasions.map((occ) => (
                    <button
                      key={occ}
                      onClick={() => setSelectedOccasion(occ)}
                      className={`text-xs px-3 py-1.5 rounded-xl font-medium transition ${
                        selectedOccasion === occ
                          ? 'bg-charcoal-900 text-white'
                          : 'bg-cream-100 text-charcoal-800 hover:bg-champagne-100'
                      }`}
                    >
                      {occ}
                    </button>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Action CTA */}
          <div className="pt-4">
            <button
              onClick={handleOrderWhatsApp}
              className="w-full py-3.5 rounded-2xl font-bold text-sm text-white bg-charcoal-900 hover:bg-charcoal-950 shadow-lg shadow-charcoal-900/15 flex items-center justify-center gap-2 transition active:scale-98"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Pedir por WhatsApp Directo</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
