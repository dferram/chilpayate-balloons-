import React, { useState } from 'react';
import { COLOR_PALETTES } from '../data/products';
import { MessageCircle, Check, Palette, Type, Calendar } from 'lucide-react';

export default function BalloonCustomizer() {
  const [selectedPalette, setSelectedPalette] = useState(COLOR_PALETTES[0]);
  const [customText, setCustomText] = useState('Sofía & Alejandro');
  const [eventDate, setEventDate] = useState('');

  const handlePaletteSelect = (palette) => {
    setSelectedPalette(palette);
  };

  const generateWhatsAppLink = () => {
    const text = encodeURIComponent(
      `Hola Chilpayate Balloons,\n\n` +
      `Me gustaría cotizar un arreglo personalizado con estos detalles:\n` +
      `• Paleta de colores: ${selectedPalette.name}\n` +
      `• Texto en vinil: "${customText}"\n` +
      `• Fecha estimada: ${eventDate || 'Por definir'}\n\n` +
      `¿Podrían indicarme disponibilidad y costo? Gracias.`
    );
    return `https://wa.me/5215555555555?text=${text}`;
  };

  return (
    <section id="personalizador" className="py-24 relative bg-white border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16 space-y-2">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500 font-sans block">
            Personalizador
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-charcoal-950 tracking-tight">
            Configuración de Paleta
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            Elige los tonos y visualiza la dedicatoria para tu composición de globos.
          </p>
        </div>

        {/* Customizer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left: 3D Balloon Preview */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center">
            
            <div className="relative w-full max-w-md aspect-square rounded-2xl bg-[#F9F7F4] border border-stone-200 p-8 flex flex-col items-center justify-between">
              
              <div className="w-full flex items-center justify-between">
                <span className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider">
                  Vista Previa
                </span>
                <span className="text-xs font-medium text-stone-700">
                  {selectedPalette.name}
                </span>
              </div>

              {/* 3D Balloon Cluster Composition */}
              <div className="relative w-full h-64 flex items-center justify-center my-auto">
                
                {/* Background Balloon 1 */}
                <div
                  className="absolute w-28 h-36 rounded-full balloon-3d -translate-x-10 -translate-y-6"
                  style={{
                    backgroundColor: selectedPalette.colors[1] || '#E8A8A8',
                    boxShadow: 'inset -6px -6px 14px rgba(0,0,0,0.14), inset 6px 6px 14px rgba(255,255,255,0.65), 0 14px 24px rgba(0,0,0,0.08)',
                  }}
                >
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-2 rounded-b" style={{ backgroundColor: selectedPalette.colors[1] }}></div>
                </div>

                {/* Background Balloon 2 */}
                <div
                  className="absolute w-28 h-36 rounded-full balloon-3d translate-x-10 -translate-y-4"
                  style={{
                    backgroundColor: selectedPalette.colors[2] || '#DFB77D',
                    boxShadow: 'inset -6px -6px 14px rgba(0,0,0,0.14), inset 6px 6px 14px rgba(255,255,255,0.65), 0 14px 24px rgba(0,0,0,0.08)',
                  }}
                >
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-2 rounded-b" style={{ backgroundColor: selectedPalette.colors[2] }}></div>
                </div>

                {/* Main Foreground Jumbo Balloon */}
                <div
                  className="absolute w-44 h-52 rounded-full balloon-3d z-10 flex items-center justify-center p-4 transition-all duration-500"
                  style={{
                    backgroundColor: selectedPalette.colors[0] || '#F5E3C7',
                    boxShadow: 'inset -10px -10px 20px rgba(0,0,0,0.12), inset 10px 10px 20px rgba(255,255,255,0.8), 0 20px 35px rgba(0,0,0,0.09)',
                  }}
                >
                  <div
                    className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-4 h-3 rounded-b"
                    style={{ backgroundColor: selectedPalette.colors[0] }}
                  ></div>

                  {/* Text on balloon */}
                  <div className="text-center z-20 pointer-events-none select-none px-3">
                    <p className="font-display font-bold text-sm sm:text-base text-charcoal-950 tracking-tight">
                      {customText || 'Texto personalizado'}
                    </p>
                  </div>

                  {/* Ribbon */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-[1.5px] h-16 bg-stone-400"></div>
                </div>

              </div>

              {/* Palette Info Footer */}
              <div className="w-full pt-4 border-t border-stone-200 flex items-center justify-between text-xs text-stone-600">
                <span>{selectedPalette.description}</span>
                <div className="flex items-center gap-1.5">
                  {selectedPalette.colors.map((c, i) => (
                    <span
                      key={i}
                      className="w-3.5 h-3.5 rounded-full border border-stone-300"
                      style={{ backgroundColor: c }}
                    ></span>
                  ))}
                </div>
              </div>

            </div>

          </div>

          {/* Right: Controls */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* 1. Palette Selector */}
            <div className="space-y-3">
              <label className="text-xs uppercase font-bold tracking-wider text-stone-700 flex items-center gap-2">
                <Palette className="w-4 h-4 text-stone-700" />
                <span>1. Paleta de Color</span>
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {COLOR_PALETTES.map((pal) => {
                  const isSelected = selectedPalette.id === pal.id;
                  return (
                    <button
                      key={pal.id}
                      onClick={() => handlePaletteSelect(pal)}
                      className={`p-3 rounded-xl border text-left transition flex flex-col justify-between gap-2 ${
                        isSelected
                          ? 'bg-stone-50 border-charcoal-950 ring-1 ring-charcoal-950'
                          : 'bg-white border-stone-300 hover:bg-stone-50'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-xs text-charcoal-950">
                          {pal.name}
                        </span>
                        {isSelected && <Check className="w-3.5 h-3.5 text-charcoal-950" />}
                      </div>

                      <div className="flex items-center gap-1">
                        {pal.colors.map((color, i) => (
                          <div
                            key={i}
                            className="w-4 h-4 rounded-full border border-stone-200"
                            style={{ backgroundColor: color }}
                          />
                        ))}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Custom Text */}
            <div className="space-y-2">
              <label className="text-xs uppercase font-bold tracking-wider text-stone-700 flex items-center gap-2">
                <Type className="w-4 h-4 text-stone-700" />
                <span>2. Texto Personalizado en el Globo</span>
              </label>

              <input
                type="text"
                maxLength={40}
                value={customText}
                onChange={(e) => setCustomText(e.target.value)}
                placeholder="Nombre o mensaje para el arreglo"
                className="w-full px-4 py-3 rounded-xl bg-white border border-stone-300 focus:border-charcoal-950 text-charcoal-950 text-sm outline-none transition"
              />
            </div>

            {/* 3. Event Date */}
            <div className="space-y-2">
              <label className="text-xs uppercase font-bold tracking-wider text-stone-700 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-stone-700" />
                <span>3. Fecha Estimada del Evento</span>
              </label>

              <input
                type="date"
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white border border-stone-300 focus:border-charcoal-950 text-charcoal-950 text-sm outline-none transition"
              />
            </div>

            {/* Action CTA */}
            <div className="pt-2">
              <a
                href={generateWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 rounded-xl font-semibold text-xs uppercase tracking-wider text-white bg-charcoal-950 hover:bg-stone-800 transition flex items-center justify-center gap-2.5"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Solicitar esta combinación por WhatsApp</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
