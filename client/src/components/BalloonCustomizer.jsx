import React, { useState } from 'react';
import { ARCH_STYLES, COLOR_PALETTES } from '../data/products';
import { MessageCircle, Check, Layers, Palette, Sparkles, Type, Calendar, Sliders } from 'lucide-react';

export default function BalloonCustomizer() {
  const [selectedStyle, setSelectedStyle] = useState(ARCH_STYLES[0]);
  const [selectedPalette, setSelectedPalette] = useState(COLOR_PALETTES[0]);
  const [selectedSize, setSelectedSize] = useState('standard');
  const [bubbleText, setBubbleText] = useState('Sofía & Alejandro');
  const [eventDate, setEventDate] = useState('');
  const [addFoliage, setAddFoliage] = useState(true);
  const [addNeon, setAddNeon] = useState(false);
  const [addChrome, setAddChrome] = useState(true);

  const isBubbleBouquet = selectedStyle.id === 'bouquet-burbuja';

  // Base price calculation
  const getCalculatedPrice = () => {
    let base = 3400;
    if (selectedStyle.id === 'techo-flotante') base = 6800;
    if (selectedStyle.id === 'backdrop-circular') base = 5200;
    if (selectedStyle.id === 'muro-completo') base = 7900;
    if (selectedStyle.id === 'columnas-duo') base = 3200;
    if (selectedStyle.id === 'guirnalda-mural') base = 2800;
    if (selectedStyle.id === 'bouquet-burbuja') base = 1350;

    if (selectedSize === 'large') base += 800;
    if (selectedSize === 'mega') base += 1600;

    if (addFoliage && !isBubbleBouquet) base += 450;
    if (addNeon && !isBubbleBouquet) base += 850;
    if (addChrome && !isBubbleBouquet) base += 350;

    return base;
  };

  const generateWhatsAppLink = () => {
    const text = encodeURIComponent(
      `Hola Chilpayate Balloons Querétaro,\n\n` +
      `Me gustaría cotizar este montaje personalizado para mi evento en Querétaro:\n` +
      `• Estructura: ${selectedStyle.name} (${selectedStyle.scale})\n` +
      `• Paleta de Color: ${selectedPalette.name}\n` +
      `• Tamaño: ${selectedSize === 'large' ? 'Grande' : selectedSize === 'mega' ? 'Monumental' : 'Estándar'}\n` +
      `• Follaje natural: ${addFoliage ? 'Sí' : 'No'}\n` +
      `• Letrero neón: ${addNeon ? 'Sí' : 'No'}\n` +
      `• Acentos en cromo: ${addChrome ? 'Sí' : 'No'}\n` +
      (isBubbleBouquet ? `• Texto en globo burbuja: "${bubbleText}"\n` : '') +
      `• Fecha del evento: ${eventDate || 'Por definir'}\n` +
      `• Estimado calculado: $${getCalculatedPrice().toLocaleString('es-MX')}\n\n` +
      `¿Tienen disponibilidad de agenda en mi zona de Querétaro? Gracias.`
    );
    return `https://wa.me/5215555555555?text=${text}`;
  };

  const c1 = selectedPalette.colors[0] || '#EDE6D6';
  const c2 = selectedPalette.colors[1] || '#DFD3C2';
  const c3 = selectedPalette.colors[2] || '#FFFFFF';
  const c4 = selectedPalette.colors[3] || '#CBB897';

  return (
    <section id="personalizador" className="pt-32 pb-24 relative bg-white border-t border-stone-200 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-stone-500 font-sans">
              Estudio Interactivo Querétaro
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-stone-100 text-stone-700">
              Simulador en Tiempo Real
            </span>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-5xl text-charcoal-950 tracking-tight">
            Configurador de Arcos y Montajes
          </h2>

          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Personaliza el tipo de montaje, dimensiones, gama de color y complementos para tu evento en Querétaro.
          </p>
        </div>

        {/* Customizer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left: Dynamic High-Precision SVG Balloon Cluster Engine */}
          <div className="lg:col-span-6 lg:sticky lg:top-28">
            <div className="relative w-full aspect-square rounded-3xl bg-[#F9F7F4] border border-stone-200 p-6 sm:p-8 flex flex-col justify-between overflow-hidden shadow-xs">
              
              {/* Header Info Bar */}
              <div className="flex items-center justify-between z-20">
                <span className="text-[11px] font-bold text-stone-500 uppercase tracking-wider">
                  Visualización del Montaje
                </span>
                <span className="text-xs font-bold text-charcoal-950 px-3 py-1 rounded-full bg-white border border-stone-300 shadow-2xs">
                  {selectedStyle.name}
                </span>
              </div>

              {/* Dynamic SVG Balloon Rendering Canvas with bounce-in pop animation */}
              <div
                key={`${selectedStyle.id}-${selectedPalette.id}`}
                className="relative w-full h-80 flex items-center justify-center my-auto z-10 select-none animate-balloon-pop"
              >
                
                <svg viewBox="0 0 400 360" className="w-full h-full max-h-80 drop-shadow-md">
                  <defs>
                    <radialGradient id="dynC1" cx="35%" cy="35%" r="65%">
                      <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.6" />
                      <stop offset="40%" stopColor={c1} />
                      <stop offset="100%" stopColor={c1} style={{ filter: 'brightness(0.7)' }} />
                    </radialGradient>

                    <radialGradient id="dynC2" cx="35%" cy="35%" r="65%">
                      <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.6" />
                      <stop offset="40%" stopColor={c2} />
                      <stop offset="100%" stopColor={c2} style={{ filter: 'brightness(0.7)' }} />
                    </radialGradient>

                    <radialGradient id="dynC3" cx="35%" cy="35%" r="65%">
                      <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.6" />
                      <stop offset="40%" stopColor={c3} />
                      <stop offset="100%" stopColor={c3} style={{ filter: 'brightness(0.7)' }} />
                    </radialGradient>

                    <radialGradient id="dynC4" cx="35%" cy="35%" r="65%">
                      <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.6" />
                      <stop offset="40%" stopColor={c4} />
                      <stop offset="100%" stopColor={c4} style={{ filter: 'brightness(0.7)' }} />
                    </radialGradient>
                  </defs>

                  {/* 1. ASYMMETRIC ORGANIC ARCH */}
                  {selectedStyle.id === 'arco-asimetrico' && (
                    <g>
                      <rect x="90" y="80" width="220" height="260" fill="none" stroke="#DCD6CC" strokeWidth="2" strokeDasharray="4 4" rx="8" />
                      <line x1="80" y1="340" x2="320" y2="340" stroke="#C4BCAE" strokeWidth="2" />

                      <circle cx="95" cy="315" r="28" fill="url(#dynC1)" />
                      <circle cx="80" cy="275" r="32" fill="url(#dynC2)" />
                      <circle cx="110" cy="265" r="24" fill="url(#dynC3)" />
                      <circle cx="85" cy="225" r="36" fill="url(#dynC4)" />
                      <circle cx="115" cy="210" r="20" fill="url(#dynC1)" />
                      <circle cx="90" cy="170" r="34" fill="url(#dynC2)" />
                      <circle cx="118" cy="155" r="22" fill="url(#dynC3)" />

                      <circle cx="105" cy="120" r="36" fill="url(#dynC1)" />
                      <circle cx="135" cy="95" r="32" fill="url(#dynC4)" />
                      <circle cx="170" cy="78" r="38" fill="url(#dynC2)" />
                      <circle cx="210" cy="72" r="34" fill="url(#dynC1)" />
                      <circle cx="250" cy="80" r="36" fill="url(#dynC3)" />
                      <circle cx="285" cy="100" r="30" fill="url(#dynC4)" />
                      <circle cx="305" cy="135" r="34" fill="url(#dynC2)" />
                      <circle cx="310" cy="180" r="28" fill="url(#dynC1)" />

                      <circle cx="132" cy="140" r="12" fill="url(#dynC4)" />
                      <circle cx="190" cy="98" r="14" fill="url(#dynC3)" />
                      <circle cx="230" cy="102" r="13" fill="url(#dynC2)" />
                      <circle cx="270" cy="115" r="15" fill="url(#dynC1)" />
                      <circle cx="295" cy="160" r="12" fill="url(#dynC3)" />

                      {addFoliage && (
                        <g stroke="#648A71" strokeWidth="2" fill="none">
                          <path d="M75 220 Q 55 210 50 195" />
                          <circle cx="50" cy="195" r="4" fill="#648A71" />
                          <path d="M160 65 Q 165 45 175 40" />
                          <circle cx="175" cy="40" r="4" fill="#648A71" />
                          <path d="M295 85 Q 315 75 325 65" />
                          <circle cx="325" cy="65" r="4" fill="#648A71" />
                        </g>
                      )}
                    </g>
                  )}

                  {/* 2. SUSPENDED CEILING / LLUVIA FLOTANTE */}
                  {selectedStyle.id === 'techo-flotante' && (
                    <g>
                      <line x1="40" y1="60" x2="360" y2="60" stroke="#B59E83" strokeWidth="2" />
                      <text x="200" y="48" textAnchor="middle" fill="#786F66" fontSize="10" fontWeight="bold">PLAFÓN / VIGAS DEL TECHO</text>
                      
                      {/* Suspended Organic Cloud of multi-sized balloons */}
                      <circle cx="70" cy="95" r="26" fill="url(#dynC1)" />
                      <circle cx="110" cy="85" r="34" fill="url(#dynC2)" />
                      <circle cx="150" cy="100" r="38" fill="url(#dynC3)" />
                      <circle cx="195" cy="80" r="42" fill="url(#dynC4)" />
                      <circle cx="245" cy="95" r="36" fill="url(#dynC1)" />
                      <circle cx="290" cy="85" r="32" fill="url(#dynC2)" />
                      <circle cx="330" cy="100" r="28" fill="url(#dynC3)" />

                      {/* Second layer dropping down */}
                      <circle cx="95" cy="135" r="32" fill="url(#dynC4)" />
                      <circle cx="140" cy="145" r="36" fill="url(#dynC1)" />
                      <circle cx="185" cy="130" r="40" fill="url(#dynC2)" />
                      <circle cx="230" cy="140" r="34" fill="url(#dynC3)" />
                      <circle cx="275" cy="130" r="30" fill="url(#dynC4)" />
                      <circle cx="315" cy="140" r="24" fill="url(#dynC1)" />

                      {/* Dangling drop accents */}
                      <circle cx="160" cy="190" r="22" fill="url(#dynC2)" />
                      <circle cx="210" cy="195" r="26" fill="url(#dynC1)" />
                      <circle cx="260" cy="180" r="20" fill="url(#dynC3)" />
                    </g>
                  )}

                  {/* 3. CIRCULAR PHOTOWALL BACKDROP */}
                  {selectedStyle.id === 'backdrop-circular' && (
                    <g>
                      <circle cx="200" cy="170" r="120" fill="none" stroke="#DFB77D" strokeWidth="4" />
                      <line x1="150" y1="280" x2="150" y2="330" stroke="#B59E83" strokeWidth="3" />
                      <line x1="250" y1="280" x2="250" y2="330" stroke="#B59E83" strokeWidth="3" />

                      <circle cx="105" cy="225" r="36" fill="url(#dynC1)" />
                      <circle cx="90" cy="175" r="40" fill="url(#dynC2)" />
                      <circle cx="105" cy="125" r="34" fill="url(#dynC3)" />
                      <circle cx="135" cy="85" r="38" fill="url(#dynC4)" />
                      <circle cx="180" cy="60" r="36" fill="url(#dynC1)" />
                      <circle cx="230" cy="65" r="32" fill="url(#dynC2)" />
                      <circle cx="275" cy="85" r="28" fill="url(#dynC3)" />

                      <circle cx="120" cy="160" r="14" fill="url(#dynC4)" />
                      <circle cx="140" cy="120" r="15" fill="url(#dynC1)" />
                      <circle cx="165" cy="90" r="13" fill="url(#dynC2)" />

                      <rect x="155" y="160" width="120" height="38" rx="8" fill="#1A191D" stroke="#DFB77D" strokeWidth="1.5" />
                      <text x="215" y="184" textAnchor="middle" fill="#FAF8F5" fontSize="12" fontWeight="bold" fontFamily="sans-serif">
                        {addNeon ? 'Letrero Neón' : 'Photocall'}
                      </text>
                    </g>
                  )}

                  {/* 4. FULL BALLOON WALL */}
                  {selectedStyle.id === 'muro-completo' && (
                    <g>
                      <rect x="50" y="70" width="300" height="240" fill="#EAE5DC" rx="6" stroke="#C4BCAE" strokeWidth="1.5" />
                      
                      {/* Grid of high density interlaced organic balloons */}
                      {[...Array(5)].map((_, row) =>
                        [...Array(6)].map((_, col) => {
                          const cx = 80 + col * 48 + (row % 2 === 0 ? 0 : 12);
                          const cy = 95 + row * 45;
                          const r = 24 + ((col + row) % 3) * 3;
                          const fillId = (col + row) % 4 === 0 ? 'url(#dynC1)' : (col + row) % 4 === 1 ? 'url(#dynC2)' : (col + row) % 4 === 2 ? 'url(#dynC3)' : 'url(#dynC4)';
                          return <circle key={`${row}-${col}`} cx={cx} cy={cy} r={r} fill={fillId} />;
                        })
                      )}
                    </g>
                  )}

                  {/* 5. DUO ORGANIC COLUMNS */}
                  {selectedStyle.id === 'columnas-duo' && (
                    <g>
                      {/* Left Column */}
                      <rect x="80" y="325" width="60" height="10" rx="3" fill="#1A191D" />
                      <circle cx="110" cy="305" r="26" fill="url(#dynC1)" />
                      <circle cx="110" cy="265" r="28" fill="url(#dynC2)" />
                      <circle cx="110" cy="225" r="26" fill="url(#dynC3)" />
                      <circle cx="110" cy="185" r="28" fill="url(#dynC4)" />
                      <circle cx="110" cy="145" r="26" fill="url(#dynC1)" />
                      <circle cx="110" cy="105" r="32" fill="url(#dynC2)" />

                      {/* Right Column */}
                      <rect x="260" y="325" width="60" height="10" rx="3" fill="#1A191D" />
                      <circle cx="290" cy="305" r="26" fill="url(#dynC3)" />
                      <circle cx="290" cy="265" r="28" fill="url(#dynC4)" />
                      <circle cx="290" cy="225" r="26" fill="url(#dynC1)" />
                      <circle cx="290" cy="185" r="28" fill="url(#dynC2)" />
                      <circle cx="290" cy="145" r="26" fill="url(#dynC3)" />
                      <circle cx="290" cy="105" r="32" fill="url(#dynC4)" />
                    </g>
                  )}

                  {/* 6. WALL GUIRNALDA */}
                  {selectedStyle.id === 'guirnalda-mural' && (
                    <g>
                      <line x1="40" y1="180" x2="360" y2="180" stroke="#DCD6CC" strokeWidth="2" strokeDasharray="4 4" />
                      
                      <circle cx="70" cy="160" r="26" fill="url(#dynC1)" />
                      <circle cx="110" cy="150" r="38" fill="url(#dynC2)" />
                      <circle cx="155" cy="165" r="36" fill="url(#dynC3)" />
                      <circle cx="195" cy="145" r="42" fill="url(#dynC4)" />
                      <circle cx="245" cy="160" r="38" fill="url(#dynC1)" />
                      <circle cx="290" cy="148" r="34" fill="url(#dynC2)" />
                      <circle cx="330" cy="165" r="26" fill="url(#dynC3)" />

                      <circle cx="135" cy="175" r="15" fill="url(#dynC4)" />
                      <circle cx="175" cy="135" r="14" fill="url(#dynC1)" />
                      <circle cx="220" cy="170" r="16" fill="url(#dynC2)" />
                      <circle cx="268" cy="135" r="14" fill="url(#dynC3)" />
                    </g>
                  )}

                  {/* 7. BUBBLE BOUQUET */}
                  {selectedStyle.id === 'bouquet-burbuja' && (
                    <g>
                      <path d="M200 155 Q 195 240 200 315" stroke="#B59E83" strokeWidth="1.5" fill="none" />
                      <rect x="185" y="315" width="30" height="15" rx="3" fill="#DFD3C2" stroke="#B59E83" />

                      <circle cx="175" cy="185" r="26" fill="url(#dynC2)" />
                      <circle cx="225" cy="185" r="26" fill="url(#dynC4)" />
                      <circle cx="200" cy="205" r="24" fill="url(#dynC3)" />
                      <circle cx="180" cy="225" r="22" fill="url(#dynC1)" />
                      <circle cx="220" cy="225" r="22" fill="url(#dynC2)" />

                      <circle cx="200" cy="95" r="60" fill="#FAF8F5" fillOpacity="0.88" stroke="#FFFFFF" strokeWidth="3" />
                      <ellipse cx="175" cy="70" rx="14" ry="22" fill="#FFFFFF" fillOpacity="0.65" transform="rotate(-30 175 70)" />
                      
                      <text x="200" y="98" textAnchor="middle" fill="#1A191D" fontSize="13" fontWeight="bold" fontFamily="sans-serif">
                        {bubbleText || 'Dedicatoria'}
                      </text>
                      <text x="200" y="115" textAnchor="middle" fill="#786F66" fontSize="9" fontWeight="medium" fontFamily="sans-serif">
                        Querétaro
                      </text>
                    </g>
                  )}
                </svg>

              </div>

              {/* Bottom Summary Pill */}
              <div className="pt-4 border-t border-stone-200 flex items-center justify-between text-xs text-stone-600 z-20">
                <span className="font-medium">
                  {selectedStyle.idealFor}
                </span>
                <div className="flex items-center gap-1.5">
                  {selectedPalette.colors.map((c, i) => (
                    <span
                      key={i}
                      className="w-3.5 h-3.5 rounded-full border border-stone-300 shadow-2xs"
                      style={{ backgroundColor: c }}
                    />
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Right: Rich Interactive Configuration Controls */}
          <div className="lg:col-span-6 space-y-8">
            
            {/* 1. Structural Format Selection */}
            <div className="space-y-3">
              <label className="text-xs uppercase font-bold tracking-wider text-stone-800 flex items-center gap-2">
                <Layers className="w-4 h-4 text-stone-800" />
                <span>1. Tipo de Montaje o Estructura</span>
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {ARCH_STYLES.map((style) => {
                  const isSelected = selectedStyle.id === style.id;
                  return (
                    <button
                      key={style.id}
                      onClick={() => setSelectedStyle(style)}
                      className={`p-3.5 rounded-xl border text-left transition flex flex-col justify-between gap-1.5 ${
                        isSelected
                          ? 'bg-stone-50 border-charcoal-950 ring-2 ring-charcoal-950 shadow-xs'
                          : 'bg-white border-stone-300 hover:bg-stone-50'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-xs text-charcoal-950">
                          {style.name}
                        </span>
                        {isSelected && <Check className="w-4 h-4 text-charcoal-950" />}
                      </div>
                      <p className="text-[11px] text-stone-500">
                        {style.subtitle}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Dimensions / Size Selector */}
            {!isBubbleBouquet && (
              <div className="space-y-3">
                <label className="text-xs uppercase font-bold tracking-wider text-stone-800 flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-stone-800" />
                  <span>2. Dimensiones de la Estructura</span>
                </label>

                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => setSelectedSize('standard')}
                    className={`py-3 px-2 rounded-xl border text-center transition ${
                      selectedSize === 'standard'
                        ? 'bg-charcoal-950 text-white border-charcoal-950 font-bold'
                        : 'bg-white text-stone-700 border-stone-300 hover:bg-stone-50'
                    }`}
                  >
                    <span className="text-xs block">Estándar</span>
                    <span className="text-[10px] opacity-75">3.5 metros</span>
                  </button>

                  <button
                    onClick={() => setSelectedSize('large')}
                    className={`py-3 px-2 rounded-xl border text-center transition ${
                      selectedSize === 'large'
                        ? 'bg-charcoal-950 text-white border-charcoal-950 font-bold'
                        : 'bg-white text-stone-700 border-stone-300 hover:bg-stone-50'
                    }`}
                  >
                    <span className="text-xs block">Grande</span>
                    <span className="text-[10px] opacity-75">4.5 metros</span>
                  </button>

                  <button
                    onClick={() => setSelectedSize('mega')}
                    className={`py-3 px-2 rounded-xl border text-center transition ${
                      selectedSize === 'mega'
                        ? 'bg-charcoal-950 text-white border-charcoal-950 font-bold'
                        : 'bg-white text-stone-700 border-stone-300 hover:bg-stone-50'
                    }`}
                  >
                    <span className="text-xs block">Monumental</span>
                    <span className="text-[10px] opacity-75">6.0 metros</span>
                  </button>
                </div>
              </div>
            )}

            {/* 3. Color Palette Selection */}
            <div className="space-y-3">
              <label className="text-xs uppercase font-bold tracking-wider text-stone-800 flex items-center gap-2">
                <Palette className="w-4 h-4 text-stone-800" />
                <span>3. Paleta Cromática para los Globos</span>
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {COLOR_PALETTES.map((pal) => {
                  const isSelected = selectedPalette.id === pal.id;
                  return (
                    <button
                      key={pal.id}
                      onClick={() => setSelectedPalette(pal)}
                      className={`p-3.5 rounded-xl border text-left transition flex flex-col justify-between gap-2.5 ${
                        isSelected
                          ? 'bg-stone-50 border-charcoal-950 ring-2 ring-charcoal-950 shadow-xs'
                          : 'bg-white border-stone-300 hover:bg-stone-50'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-xs text-charcoal-950">
                          {pal.name}
                        </span>
                        {isSelected && <Check className="w-3.5 h-3.5 text-charcoal-950" />}
                      </div>

                      <div className="flex items-center gap-1.5">
                        {pal.colors.map((color, i) => (
                          <div
                            key={i}
                            className="w-4 h-4 rounded-full border border-stone-300 shadow-2xs"
                            style={{ backgroundColor: color }}
                          />
                        ))}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 4. Accessories or Bubble Text */}
            {isBubbleBouquet ? (
              <div className="space-y-2">
                <label className="text-xs uppercase font-bold tracking-wider text-stone-800 flex items-center gap-2">
                  <Type className="w-4 h-4 text-stone-800" />
                  <span>4. Caligrafía en Vinil sobre Globo Burbuja</span>
                </label>
                <input
                  type="text"
                  maxLength={40}
                  value={bubbleText}
                  onChange={(e) => setBubbleText(e.target.value)}
                  placeholder="Escribe el nombre o mensaje personalizado"
                  className="w-full px-4 py-3 rounded-xl bg-white border border-stone-300 focus:border-charcoal-950 text-charcoal-950 text-sm outline-none transition"
                />
              </div>
            ) : (
              <div className="space-y-2">
                <label className="text-xs uppercase font-bold tracking-wider text-stone-800 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-stone-800" />
                  <span>4. Complementos y Acabados</span>
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <button
                    onClick={() => setAddFoliage(!addFoliage)}
                    className={`p-3 rounded-xl border text-xs font-semibold text-left transition flex items-center justify-between ${
                      addFoliage ? 'bg-stone-50 border-charcoal-950 ring-1 ring-charcoal-950' : 'bg-white border-stone-300'
                    }`}
                  >
                    <span>Follaje Eucalipto</span>
                    {addFoliage && <Check className="w-3.5 h-3.5 text-charcoal-950" />}
                  </button>

                  <button
                    onClick={() => setAddChrome(!addChrome)}
                    className={`p-3 rounded-xl border text-xs font-semibold text-left transition flex items-center justify-between ${
                      addChrome ? 'bg-stone-50 border-charcoal-950 ring-1 ring-charcoal-950' : 'bg-white border-stone-300'
                    }`}
                  >
                    <span>Esferas Cromo Oro</span>
                    {addChrome && <Check className="w-3.5 h-3.5 text-charcoal-950" />}
                  </button>

                  <button
                    onClick={() => setAddNeon(!addNeon)}
                    className={`p-3 rounded-xl border text-xs font-semibold text-left transition flex items-center justify-between ${
                      addNeon ? 'bg-stone-50 border-charcoal-950 ring-1 ring-charcoal-950' : 'bg-white border-stone-300'
                    }`}
                  >
                    <span>Letrero Neón</span>
                    {addNeon && <Check className="w-3.5 h-3.5 text-charcoal-950" />}
                  </button>
                </div>
              </div>
            )}

            {/* 5. Event Date */}
            <div className="space-y-2">
              <label className="text-xs uppercase font-bold tracking-wider text-stone-800 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-stone-800" />
                <span>5. Fecha del Evento en Querétaro</span>
              </label>
              <input
                type="date"
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white border border-stone-300 focus:border-charcoal-950 text-charcoal-950 text-sm outline-none transition"
              />
            </div>

            {/* Price & Instant WhatsApp Quote */}
            <div className="p-6 rounded-2xl bg-[#F9F7F4] border border-stone-300 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-stone-500 block">
                  Presupuesto Estimado
                </span>
                <span className="font-display font-bold text-3xl text-charcoal-950">
                  ${getCalculatedPrice().toLocaleString('es-MX')}
                </span>
                <span className="text-[11px] text-stone-500 block">
                  Incluye calibración y montaje en Querétaro
                </span>
              </div>

              <a
                href={generateWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-charcoal-950 hover:bg-stone-800 transition flex items-center justify-center gap-2 shadow-md whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Cotizar para Querétaro</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
