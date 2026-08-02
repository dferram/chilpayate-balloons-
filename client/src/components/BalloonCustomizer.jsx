import React, { useState } from 'react';
import { COLOR_PALETTES } from '../data/products';
import { Sparkles, MessageCircle, RefreshCw, Check, Palette, Type, Calendar } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function BalloonCustomizer() {
  const [selectedPalette, setSelectedPalette] = useState(COLOR_PALETTES[0]);
  const [customText, setCustomText] = useState('Happy 30th Sofia ✨');
  const [fontStyle, setFontStyle] = useState('font-display');
  const [eventDate, setEventDate] = useState('');
  const [activeBalloonColor, setActiveBalloonColor] = useState(COLOR_PALETTES[0].colors[0]);

  const handleTriggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: selectedPalette.colors,
    });
  };

  const handlePaletteSelect = (palette) => {
    setSelectedPalette(palette);
    setActiveBalloonColor(palette.colors[0]);
  };

  const generateWhatsAppLink = () => {
    const text = encodeURIComponent(
      `¡Hola Chilpayate Balloons! 🎈\n\n` +
      `Me encantó el personalizador en vivo y me gustaría cotizar mi arreglo:\n` +
      `🎨 *Paleta elegida:* ${selectedPalette.name}\n` +
      `✍️ *Texto personalizado:* "${customText}"\n` +
      `📅 *Fecha estimada:* ${eventDate || 'Por definir'}\n\n` +
      `¿Podrían confirmarme disponibilidad y precio? ¡Gracias!`
    );
    return `https://wa.me/5215555555555?text=${text}`;
  };

  return (
    <section id="personalizador" className="py-24 relative bg-gradient-to-b from-cream-50 via-champagne-50/50 to-cream-50 overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-10 left-1/3 w-80 h-80 bg-champagne-300/25 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-champagne-300 text-champagne-800 text-xs font-bold uppercase tracking-wider font-display shadow-sm">
            <Palette className="w-3.5 h-3.5 text-champagne-600" />
            Simulador en Tiempo Real
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-charcoal-950 tracking-tight">
            Diseña tu paleta <span className="gold-gradient-text">a medida</span>.
          </h2>
          <p className="text-charcoal-800/80 text-base sm:text-lg">
            Experimenta con combinaciones de colores, caligrafía y dedicatorias antes de realizar tu pedido.
          </p>
        </div>

        {/* Customizer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Interactive 3D Visualizer */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center">
            
            {/* Visualizer Frame */}
            <div className="relative w-full max-w-md aspect-square rounded-3xl bg-gradient-to-b from-white/90 to-cream-100/90 border border-white p-8 shadow-2xl backdrop-blur-xl flex flex-col items-center justify-between overflow-hidden">
              
              {/* Top ambient pill */}
              <div className="w-full flex items-center justify-between z-20">
                <span className="text-[11px] font-bold text-charcoal-800/60 uppercase tracking-widest">
                  Previsualización 3D
                </span>
                <button
                  onClick={handleTriggerConfetti}
                  className="px-3 py-1 rounded-full text-xs font-semibold bg-white/90 hover:bg-white text-champagne-700 border border-champagne-200 shadow-sm flex items-center gap-1.5 transition"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  <span>Probar Confeti</span>
                </button>
              </div>

              {/* 3D Balloon Cluster Composition */}
              <div className="relative w-full h-64 flex items-center justify-center my-auto">
                
                {/* Background Balloon 1 */}
                <div
                  className="absolute w-28 h-36 rounded-full balloon-3d shadow-xl animate-float-slow -translate-x-12 -translate-y-8"
                  style={{
                    backgroundColor: selectedPalette.colors[1] || '#E8A8A8',
                    boxShadow: `inset -8px -8px 16px rgba(0,0,0,0.18), inset 8px 8px 16px rgba(255,255,255,0.7), 0 20px 30px rgba(0,0,0,0.1)`,
                    filter: 'brightness(0.96)',
                  }}
                >
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-2 rounded-b" style={{ backgroundColor: selectedPalette.colors[1] }}></div>
                </div>

                {/* Background Balloon 2 */}
                <div
                  className="absolute w-28 h-36 rounded-full balloon-3d shadow-xl animate-float-medium translate-x-12 -translate-y-6"
                  style={{
                    backgroundColor: selectedPalette.colors[2] || '#DFB77D',
                    boxShadow: `inset -8px -8px 16px rgba(0,0,0,0.18), inset 8px 8px 16px rgba(255,255,255,0.7), 0 20px 30px rgba(0,0,0,0.1)`,
                    filter: 'brightness(0.92)',
                  }}
                >
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-2 rounded-b" style={{ backgroundColor: selectedPalette.colors[2] }}></div>
                </div>

                {/* Main Foreground Jumbo Balloon with custom message */}
                <div
                  className="absolute w-44 h-52 rounded-full balloon-3d shadow-2xl animate-float-fast z-10 flex items-center justify-center p-4 transition-all duration-700"
                  style={{
                    backgroundColor: selectedPalette.colors[0] || '#F5E3C7',
                    boxShadow: `inset -12px -12px 24px rgba(0,0,0,0.16), inset 12px 12px 24px rgba(255,255,255,0.85), 0 25px 45px rgba(0,0,0,0.12)`,
                  }}
                >
                  {/* Knot */}
                  <div
                    className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-4 h-3 rounded-b"
                    style={{ backgroundColor: selectedPalette.colors[0] }}
                  ></div>

                  {/* Custom Dedication Vinyl */}
                  <div className="text-center z-20 pointer-events-none select-none px-3">
                    <p
                      className={`${fontStyle} font-bold text-sm sm:text-base text-charcoal-900 drop-shadow-sm tracking-tight transition-all`}
                    >
                      {customText || 'Tu Mensaje Aquí'}
                    </p>
                  </div>

                  {/* Dangling satin ribbons */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-[2px] h-20 bg-champagne-400/70"></div>
                </div>

              </div>

              {/* Palette Info Footer */}
              <div className="w-full pt-4 border-t border-champagne-200/50 flex items-center justify-between text-xs text-charcoal-800">
                <span className="font-semibold">{selectedPalette.name}</span>
                <div className="flex items-center gap-1.5">
                  {selectedPalette.colors.map((c, i) => (
                    <span
                      key={i}
                      className="w-3.5 h-3.5 rounded-full border border-white shadow-xs"
                      style={{ backgroundColor: c }}
                    ></span>
                  ))}
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Customization Controls */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* 1. Palette Selector */}
            <div className="space-y-3">
              <label className="text-xs uppercase font-extrabold tracking-wider text-charcoal-900 flex items-center gap-2">
                <Palette className="w-4 h-4 text-champagne-600" />
                <span>1. Selecciona una Paleta Cromática</span>
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {COLOR_PALETTES.map((pal) => {
                  const isSelected = selectedPalette.id === pal.id;
                  return (
                    <button
                      key={pal.id}
                      onClick={() => handlePaletteSelect(pal)}
                      className={`p-3.5 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between gap-2.5 ${
                        isSelected
                          ? 'bg-white border-champagne-500 shadow-md ring-2 ring-champagne-400/40'
                          : 'bg-white/70 border-champagne-200/80 hover:bg-white hover:border-champagne-300'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-xs text-charcoal-900">
                          {pal.name}
                        </span>
                        {isSelected && <Check className="w-4 h-4 text-champagne-600" />}
                      </div>

                      {/* Color circles */}
                      <div className="flex items-center gap-1.5">
                        {pal.colors.map((color, i) => (
                          <div
                            key={i}
                            className="w-5 h-5 rounded-full border border-white/80 shadow-xs"
                            style={{ backgroundColor: color }}
                          />
                        ))}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Custom Dedication Text */}
            <div className="space-y-3">
              <label className="text-xs uppercase font-extrabold tracking-wider text-charcoal-900 flex items-center gap-2">
                <Type className="w-4 h-4 text-champagne-600" />
                <span>2. Texto en Vinil Personalizado</span>
              </label>

              <input
                type="text"
                maxLength={45}
                value={customText}
                onChange={(e) => setCustomText(e.target.value)}
                placeholder="Ej. Feliz Cumpleaños Sofía / Te Amo"
                className="w-full px-4 py-3.5 rounded-2xl bg-white border border-champagne-200 focus:border-champagne-500 focus:ring-2 focus:ring-champagne-400/30 text-charcoal-900 text-sm font-medium outline-none shadow-sm transition"
              />
            </div>

            {/* 3. Event Date */}
            <div className="space-y-3">
              <label className="text-xs uppercase font-extrabold tracking-wider text-charcoal-900 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-champagne-600" />
                <span>3. Fecha Estimada del Evento</span>
              </label>

              <input
                type="date"
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
                className="w-full px-4 py-3.5 rounded-2xl bg-white border border-champagne-200 focus:border-champagne-500 focus:ring-2 focus:ring-champagne-400/30 text-charcoal-900 text-sm font-medium outline-none shadow-sm transition"
              />
            </div>

            {/* Action CTA with instant WhatsApp Generation */}
            <div className="pt-4">
              <a
                href={generateWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 rounded-2xl font-bold text-sm text-white bg-charcoal-900 hover:bg-charcoal-950 shadow-xl shadow-charcoal-900/15 active:scale-98 transition-all flex items-center justify-center gap-3 group"
              >
                <MessageCircle className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" />
                <span>Solicitar esta combinación por WhatsApp</span>
              </a>
              <p className="text-[11px] text-charcoal-800/60 text-center mt-2.5">
                Te enviaremos foto muestra y cotización final de inmediato sin compromiso.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
