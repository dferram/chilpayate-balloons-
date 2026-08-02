import React, { useState } from 'react';
import { ARCH_STYLES, COLOR_PALETTES } from '../data/products';
import { MessageCircle, Check, Sparkles, Layers, Palette, Type, Calendar } from 'lucide-react';

export default function BalloonCustomizer() {
  const [selectedStyle, setSelectedStyle] = useState(ARCH_STYLES[0]);
  const [selectedPalette, setSelectedPalette] = useState(COLOR_PALETTES[0]);
  const [bubbleText, setBubbleText] = useState('Sofía & Alejandro');
  const [eventDate, setEventDate] = useState('');
  const [addFoliage, setAddFoliage] = useState(true);

  const isBubbleBouquet = selectedStyle.id === 'bouquet-burbuja';

  const generateWhatsAppLink = () => {
    const text = encodeURIComponent(
      `Hola Chilpayate Balloons,\n\n` +
      `Me gustaría cotizar un montaje con esta configuración:\n` +
      `• Estructura / Tipo: ${selectedStyle.name} (${selectedStyle.scale})\n` +
      `• Paleta de Colores: ${selectedPalette.name}\n` +
      `• Follaje natural: ${addFoliage ? 'Sí incluir' : 'Solo globos'}\n` +
      (isBubbleBouquet ? `• Texto en globo burbuja: "${bubbleText}"\n` : '') +
      `• Fecha del evento: ${eventDate || 'Por definir'}\n\n` +
      `¿Podrían compartirme el presupuesto y disponibilidad? Gracias.`
    );
    return `https://wa.me/5215555555555?text=${text}`;
  };

  return (
    <section id="personalizador" className="py-24 relative bg-white border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16 space-y-2">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500 font-sans block">
            Simulador de Montajes
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-charcoal-950 tracking-tight">
            Configurador de Arcos y Arreglos
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            Elige el formato de estructura, paleta de colores y detalles para visualizar la composición ideal para tu espacio.
          </p>
        </div>

        {/* Customizer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left: Dynamic Live Structural Preview */}
          <div className="lg:col-span-6 sticky top-28">
            <div className="relative w-full aspect-square rounded-3xl bg-[#F9F7F4] border border-stone-200 p-8 flex flex-col justify-between overflow-hidden">
              
              {/* Header Info */}
              <div className="flex items-center justify-between z-20">
                <span className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider">
                  Visualizador de Estructura
                </span>
                <span className="text-xs font-semibold text-charcoal-950 px-3 py-1 rounded-full bg-white border border-stone-200">
                  {selectedStyle.name}
                </span>
              </div>

              {/* Dynamic Schematic Composition Canvas / Vector */}
              <div className="relative w-full h-72 flex items-center justify-center my-auto z-10 select-none">
                
                {/* 1. ASYMMETRIC ORGANIC ARCH SCHEMATIC */}
                {selectedStyle.id === 'arco-asimetrico' && (
                  <div className="relative w-64 h-64 flex items-center justify-center">
                    {/* Organic Clusters forming an asymmetrical arch */}
                    <div
                      className="absolute left-6 top-8 w-20 h-24 rounded-full balloon-3d transition-all duration-500"
                      style={{ backgroundColor: selectedPalette.colors[0] }}
                    />
                    <div
                      className="absolute left-16 top-4 w-28 h-32 rounded-full balloon-3d transition-all duration-500"
                      style={{ backgroundColor: selectedPalette.colors[1] }}
                    />
                    <div
                      className="absolute right-12 top-6 w-24 h-28 rounded-full balloon-3d transition-all duration-500"
                      style={{ backgroundColor: selectedPalette.colors[2] }}
                    />
                    <div
                      className="absolute right-4 top-20 w-32 h-36 rounded-full balloon-3d transition-all duration-500"
                      style={{ backgroundColor: selectedPalette.colors[0] }}
                    />
                    <div
                      className="absolute right-6 bottom-10 w-24 h-28 rounded-full balloon-3d transition-all duration-500"
                      style={{ backgroundColor: selectedPalette.colors[3] || selectedPalette.colors[1] }}
                    />
                    <div
                      className="absolute left-20 top-24 w-16 h-18 rounded-full balloon-3d transition-all duration-500"
                      style={{ backgroundColor: selectedPalette.colors[3] || selectedPalette.colors[0] }}
                    />
                    {/* Mini Accent balloons */}
                    <div className="absolute right-20 top-24 w-10 h-10 rounded-full" style={{ backgroundColor: selectedPalette.colors[1] }}></div>
                    <div className="absolute right-10 top-40 w-12 h-12 rounded-full" style={{ backgroundColor: selectedPalette.colors[2] }}></div>
                    {/* Optional Botanical Accent */}
                    {addFoliage && (
                      <div className="absolute top-12 left-10 text-[10px] text-stone-500 font-medium px-2 py-0.5 rounded bg-white/90 border border-stone-200">
                        Follaje integrado
                      </div>
                    )}
                  </div>
                )}

                {/* 2. CIRCULAR PHOTOWALL BACKDROP */}
                {selectedStyle.id === 'backdrop-circular' && (
                  <div className="relative w-64 h-64 flex items-center justify-center">
                    {/* Metallic Golden Ring */}
                    <div className="absolute w-56 h-56 rounded-full border-4 border-stone-400/80"></div>
                    {/* Crescent balloon clusters */}
                    <div
                      className="absolute left-4 top-4 w-28 h-32 rounded-full balloon-3d transition-all duration-500"
                      style={{ backgroundColor: selectedPalette.colors[0] }}
                    />
                    <div
                      className="absolute left-2 top-24 w-24 h-28 rounded-full balloon-3d transition-all duration-500"
                      style={{ backgroundColor: selectedPalette.colors[1] }}
                    />
                    <div
                      className="absolute left-10 bottom-6 w-32 h-36 rounded-full balloon-3d transition-all duration-500"
                      style={{ backgroundColor: selectedPalette.colors[2] }}
                    />
                    <div
                      className="absolute left-24 bottom-2 w-20 h-22 rounded-full balloon-3d transition-all duration-500"
                      style={{ backgroundColor: selectedPalette.colors[3] || selectedPalette.colors[0] }}
                    />
                    {/* Center Neon Text representation */}
                    <div className="absolute right-8 top-24 px-3 py-1.5 rounded-lg bg-stone-900 text-white text-[11px] font-semibold border border-stone-700">
                      Letrero Neón
                    </div>
                  </div>
                )}

                {/* 3. WALL GUIRNALDA */}
                {selectedStyle.id === 'guirnalda-mural' && (
                  <div className="relative w-64 h-64 flex items-center justify-center">
                    <div
                      className="absolute left-4 top-16 w-24 h-28 rounded-full balloon-3d transition-all duration-500"
                      style={{ backgroundColor: selectedPalette.colors[0] }}
                    />
                    <div
                      className="absolute left-20 top-12 w-32 h-36 rounded-full balloon-3d transition-all duration-500"
                      style={{ backgroundColor: selectedPalette.colors[1] }}
                    />
                    <div
                      className="absolute right-12 top-20 w-28 h-32 rounded-full balloon-3d transition-all duration-500"
                      style={{ backgroundColor: selectedPalette.colors[2] }}
                    />
                    <div
                      className="absolute right-2 top-32 w-22 h-26 rounded-full balloon-3d transition-all duration-500"
                      style={{ backgroundColor: selectedPalette.colors[3] || selectedPalette.colors[0] }}
                    />
                  </div>
                )}

                {/* 4. BUBBLE BOUQUET */}
                {selectedStyle.id === 'bouquet-burbuja' && (
                  <div className="relative w-64 h-64 flex flex-col items-center justify-center">
                    {/* Jumbo Bubble with text */}
                    <div
                      className="relative w-36 h-44 rounded-full balloon-3d flex items-center justify-center p-3 transition-all duration-500 z-10"
                      style={{
                        backgroundColor: selectedPalette.colors[0],
                        boxShadow: 'inset -8px -8px 18px rgba(0,0,0,0.12), inset 8px 8px 18px rgba(255,255,255,0.75), 0 16px 30px rgba(0,0,0,0.08)',
                      }}
                    >
                      <span className="font-display font-bold text-xs text-charcoal-950 text-center leading-tight">
                        {bubbleText || 'Dedicatoria en vinil'}
                      </span>
                    </div>

                    {/* Helium cluster under */}
                    <div className="flex gap-1 -mt-4 z-0">
                      <div className="w-12 h-14 rounded-full balloon-3d" style={{ backgroundColor: selectedPalette.colors[1] }} />
                      <div className="w-12 h-14 rounded-full balloon-3d" style={{ backgroundColor: selectedPalette.colors[2] }} />
                      <div className="w-12 h-14 rounded-full balloon-3d" style={{ backgroundColor: selectedPalette.colors[3] || selectedPalette.colors[0] }} />
                    </div>
                  </div>
                )}

              </div>

              {/* Summary Bottom Info */}
              <div className="pt-4 border-t border-stone-200 flex items-center justify-between text-xs text-stone-600 z-20">
                <span>Escala estimada: {selectedStyle.scale}</span>
                <div className="flex items-center gap-1.5">
                  {selectedPalette.colors.map((c, i) => (
                    <span
                      key={i}
                      className="w-3.5 h-3.5 rounded-full border border-stone-300"
                      style={{ backgroundColor: c }}
                    />
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Right: Interactive Configuration Controls */}
          <div className="lg:col-span-6 space-y-8">
            
            {/* 1. Structural Format Selection */}
            <div className="space-y-3">
              <label className="text-xs uppercase font-bold tracking-wider text-stone-700 flex items-center gap-2">
                <Layers className="w-4 h-4 text-stone-700" />
                <span>1. Formato de Estructura</span>
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {ARCH_STYLES.map((style) => {
                  const isSelected = selectedStyle.id === style.id;
                  return (
                    <button
                      key={style.id}
                      onClick={() => setSelectedStyle(style)}
                      className={`p-4 rounded-xl border text-left transition flex flex-col justify-between gap-2 ${
                        isSelected
                          ? 'bg-stone-50 border-charcoal-950 ring-1 ring-charcoal-950'
                          : 'bg-white border-stone-300 hover:bg-stone-50'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-xs text-charcoal-950">
                          {style.name}
                        </span>
                        {isSelected && <Check className="w-3.5 h-3.5 text-charcoal-950" />}
                      </div>
                      <p className="text-[11px] text-stone-500">
                        {style.subtitle}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Color Palette Selection */}
            <div className="space-y-3">
              <label className="text-xs uppercase font-bold tracking-wider text-stone-700 flex items-center gap-2">
                <Palette className="w-4 h-4 text-stone-700" />
                <span>2. Paleta Cromática para los Globos</span>
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {COLOR_PALETTES.map((pal) => {
                  const isSelected = selectedPalette.id === pal.id;
                  return (
                    <button
                      key={pal.id}
                      onClick={() => setSelectedPalette(pal)}
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

            {/* 3. Conditional: Bubble Vinyl Text or Foliage add-on */}
            {isBubbleBouquet ? (
              <div className="space-y-2">
                <label className="text-xs uppercase font-bold tracking-wider text-stone-700 flex items-center gap-2">
                  <Type className="w-4 h-4 text-stone-700" />
                  <span>3. Texto en Vinil sobre Globo Burbuja</span>
                </label>
                <input
                  type="text"
                  maxLength={45}
                  value={bubbleText}
                  onChange={(e) => setBubbleText(e.target.value)}
                  placeholder="Nombre o mensaje para el arreglo"
                  className="w-full px-4 py-3 rounded-xl bg-white border border-stone-300 focus:border-charcoal-950 text-charcoal-950 text-sm outline-none transition"
                />
              </div>
            ) : (
              <div className="space-y-2">
                <label className="text-xs uppercase font-bold tracking-wider text-stone-700 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-stone-700" />
                  <span>3. Detalles Botánicos</span>
                </label>
                <button
                  onClick={() => setAddFoliage(!addFoliage)}
                  className={`w-full p-3.5 rounded-xl border text-left flex items-center justify-between transition ${
                    addFoliage
                      ? 'bg-stone-50 border-charcoal-950'
                      : 'bg-white border-stone-300'
                  }`}
                >
                  <span className="text-xs font-semibold text-charcoal-950">
                    Integrar follaje de eucalipto natural preservado
                  </span>
                  <div className={`w-5 h-5 rounded border flex items-center justify-center ${addFoliage ? 'bg-charcoal-950 border-charcoal-950 text-white' : 'border-stone-400'}`}>
                    {addFoliage && <Check className="w-3.5 h-3.5" />}
                  </div>
                </button>
              </div>
            )}

            {/* 4. Event Date */}
            <div className="space-y-2">
              <label className="text-xs uppercase font-bold tracking-wider text-stone-700 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-stone-700" />
                <span>4. Fecha del Evento</span>
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
                <span>Cotizar este arreglo o arco por WhatsApp</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
