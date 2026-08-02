import React, { useState } from 'react';
import { MessageCircle, Check, MapPin, Flame } from 'lucide-react';

export default function SeasonalShowcase() {
  const [activeTab, setActiveTab] = useState(0);

  const mexicanDesigns = [
    {
      id: 'arco-monumental-patrio',
      title: 'Arco Monumental Tricolor para Portón y Fachada',
      category: 'Arco Orgánico de Entrada',
      dimensions: '4.5 metros de desarrollo',
      price: 4200,
      description: 'Gran instalación orgánica diseñada para portones, entradas de residencias y haciendas queretanas. Combinación de más de 180 globos calibrados en verde bandera mate, blanco nácar artesanal y rojo carmín granada, complementada con listones de satín patrio y follaje.',
      accentColors: ['#0B4F26', '#FAF7F0', '#A31D24', '#D4AF37'],
      svgType: 'arch',
      tag: 'El Favorito para Noche Mexicana',
      includes: [
        'Estructura de montaje autoportante de 4.5m',
        'Globos látex biodegradables en 4 calibres (5", 11", 18" y 24")',
        'Listones colgantes tricolores de satín fino',
        'Follaje verde preservado integrado',
        'Instalación puntual el 14 o 15 de Septiembre en Querétaro y Juriquilla'
      ]
    },
    {
      id: 'backdrop-grito-mexico',
      title: 'Photocall "Viva México" para Terraza y Fiestas',
      category: 'Backdrop Circular con Aro',
      dimensions: '2.2m diámetro x 2.4m alto',
      price: 5800,
      description: 'Estructura circular de aro dorado con media luna de globos orgánicos tricolores de alta densidad, letrero luminoso y espacio para sombrero de charro y fotos del Grito.',
      accentColors: ['#0B4F26', '#FAF7F0', '#A31D24', '#C8216A'],
      svgType: 'circle',
      tag: 'Ideal para Fotos y Banquete',
      includes: [
        'Aro dorado monumental de 2.2 metros en renta',
        'Guirnalda orgánica tricolor con más de 130 globos',
        'Letrero neón cálido "Viva México" o "Felicidades"',
        'Montaje por la mañana y desmontaje al día siguiente'
      ]
    },
    {
      id: 'guirnalda-cantina-patria',
      title: 'Guirnalda de Cantina para Mesa de Pozole y Tequila',
      category: 'Guirnalda Mural / Mesa Principal',
      dimensions: '3.0 metros lineales',
      price: 2950,
      description: 'Composición orgánica continua para ambientar la pared de la mesa de honor, barra de cócteles o mesa de antojitos mexicanos, con detalles de esferas doradas y verde agave.',
      accentColors: ['#0B4F26', '#FAF7F0', '#A31D24', '#D4AF37'],
      svgType: 'garland',
      tag: 'Para Mesas y Barras',
      includes: [
        'Guirnalda orgánica de 3 metros sobre barra o muro',
        'Fijaciones seguras sin perforar cantera ni dañar pintura',
        'Acentos tricolores mate y dorados metalizados',
        'Montaje incluido en tu domicilio en Querétaro'
      ]
    },
    {
      id: 'bouquet-burbuja-mariachi',
      title: 'Bouquet Patrio Gala con Globo Burbuja Personalizado',
      category: 'Bouquet de Helio Flotante',
      dimensions: '1.90m de altura',
      price: 1490,
      description: 'Globo burbuja cristalino de 24 pulgadas con dedicatoria en caligrafía dorada "Viva México" o el nombre de tu familia, acompañado de un racimo de 8 globos de helio con tratamiento Hi-Float.',
      accentColors: ['#0B4F26', '#FAF7F0', '#A31D24', '#FAF7F0'],
      svgType: 'bouquet',
      tag: 'Entrega en tu Puerta',
      includes: [
        'Globo burbuja de 24" con caligrafía patrio-dorada',
        '8 globos de látex tricolor con helio Hi-Float (flotación de 5+ días)',
        'Contrapeso artesanal forrado en lino',
        'Entrega a domicilio en Querétaro'
      ]
    }
  ];

  const activeDesign = mexicanDesigns[activeTab];

  const handleBookWhatsApp = (design) => {
    const text = encodeURIComponent(
      `¡Hola Chilpayate Balloons Querétaro!\n\n` +
      `Me interesa apartar este montaje para la Noche Mexicana del 15 de Septiembre:\n` +
      `• Montaje: ${design.title}\n` +
      `• Formato: ${design.category} (${design.dimensions})\n` +
      `• Precio: $${design.price.toLocaleString('es-MX')}\n\n` +
      `¿Tienen horario disponible para entrega/instalación en mi zona de Querétaro? ¡Gracias!`
    );
    window.open(`https://wa.me/5215555555555?text=${text}`, '_blank');
  };

  return (
    <section id="temporada" className="py-28 relative bg-[#0F0E11] text-white overflow-hidden scroll-mt-20">
      
      {/* Subtle Papel Picado Geometric Trim at Top */}
      <div className="absolute top-0 left-0 right-0 h-4 flex items-center justify-between opacity-30 select-none overflow-hidden">
        {[...Array(24)].map((_, i) => (
          <div key={i} className="flex items-center gap-1.5 flex-shrink-0">
            <div className={`w-6 h-3 rounded-b-md ${i % 3 === 0 ? 'bg-[#0B4F26]' : i % 3 === 1 ? 'bg-[#FAF7F0]' : 'bg-[#A31D24]'}`}></div>
          </div>
        ))}
      </div>

      {/* Atmospheric Mexican Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-[#0B4F26]/20 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 -right-20 w-96 h-96 rounded-full bg-[#A31D24]/20 blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Title with Mexican Cultural Heritage */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-stone-800 pb-10">
          
          <div className="space-y-3 max-w-2xl">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#0B4F26] bg-[#0B4F26]/20 px-3 py-1 rounded-full border border-[#0B4F26]/40 font-sans">
                Edición Fiestas Patrias
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-stone-400">
                15 de Septiembre • Querétaro
              </span>
            </div>

            <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-none">
              Noche Mexicana con Arte en Globos
            </h2>

            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              Celebra el Grito de Independencia con montajes tricolores de alta estética para residencias, terrazas, haciendas y restaurantes en Querétaro y Juriquilla.
            </p>
          </div>

          {/* Booking Notice Card */}
          <div className="p-5 rounded-2xl bg-stone-900/90 border border-stone-700/80 text-xs text-stone-300 space-y-2 max-w-sm flex-shrink-0">
            <div className="flex items-center gap-2 text-white font-bold text-sm">
              <Flame className="w-4 h-4 text-amber-500" />
              <span>Agenda Abierta Querétaro</span>
            </div>
            <p className="text-stone-400 text-[11px] leading-relaxed">
              Las fechas del 14, 15 y 16 de Septiembre tienen cupo limitado de montaje por zona.
            </p>
            <div className="flex items-center gap-2 text-[10px] text-stone-400 pt-1 font-medium">
              <MapPin className="w-3.5 h-3.5 text-stone-400" />
              <span>Juriquilla, El Campanario, Zibatá, Corregidora, Centro Histórico</span>
            </div>
          </div>

        </div>

        {/* 4 Interactive Design Selector Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {mexicanDesigns.map((design, index) => {
            const isSelected = activeTab === index;
            return (
              <button
                key={design.id}
                onClick={() => setActiveTab(index)}
                className={`p-5 rounded-2xl border text-left transition-all duration-300 ease-out flex flex-col justify-between gap-5 relative overflow-hidden ${
                  isSelected
                    ? 'bg-stone-900 border-stone-200 ring-2 ring-white/30 shadow-2xl scale-[1.02]'
                    : 'bg-stone-950/70 border-stone-800/80 hover:bg-stone-900 hover:border-stone-700 text-stone-400'
                }`}
              >
                {/* Top Tricolor indicator bar for selected */}
                {isSelected && (
                  <div className="absolute top-0 left-0 right-0 h-1 flex">
                    <div className="w-1/3 bg-[#0B4F26]"></div>
                    <div className="w-1/3 bg-[#FAF7F0]"></div>
                    <div className="w-1/3 bg-[#A31D24]"></div>
                  </div>
                )}

                <div className="space-y-1.5">
                  <span className="text-[10px] uppercase tracking-wider font-bold text-stone-400">
                    {design.category}
                  </span>
                  <h3 className="font-display font-bold text-base text-white leading-snug">
                    {design.title}
                  </h3>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-stone-800/90 w-full text-xs">
                  <div>
                    <span className="font-bold text-white text-sm block">
                      ${design.price.toLocaleString('es-MX')}
                    </span>
                    <span className="text-[10px] text-stone-400">Montaje en Querétaro</span>
                  </div>

                  <div className="flex items-center -space-x-1">
                    {design.accentColors.map((color, i) => (
                      <span
                        key={i}
                        className="w-3.5 h-3.5 rounded-full border border-stone-900"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Big Spotlight Display with smooth fluid enter */}
        <div
          key={activeDesign.id}
          className="rounded-3xl bg-stone-900 border border-stone-800 p-6 sm:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center smooth-fade-enter"
        >
          
          {/* Left: Rich Realistic Organic Balloon Arch Illustration / Render Canvas */}
          <div className="lg:col-span-6 relative rounded-2xl bg-[#161519] border border-stone-800 aspect-[4/3] flex items-center justify-center p-6 overflow-hidden">
            
            {/* Background Texture Frame */}
            <div className="absolute inset-4 rounded-xl border border-stone-800/80 pointer-events-none flex flex-col justify-between p-3">
              <div className="flex justify-between text-[9px] uppercase tracking-widest text-stone-400 font-mono">
                <span>ESTUDIO QUERÉTARO</span>
                <span>EDICIÓN 15 SEP</span>
              </div>
              <div className="text-center text-[10px] tracking-widest text-stone-400 uppercase font-sans">
                {activeDesign.dimensions}
              </div>
            </div>

            {/* Realistic Structural SVG Representation */}
            <svg viewBox="0 0 400 300" className="w-full h-full max-h-72 drop-shadow-2xl z-10">
              <defs>
                <radialGradient id="greenBalloon" cx="35%" cy="35%" r="65%">
                  <stop offset="0%" stopColor="#2E8050" />
                  <stop offset="45%" stopColor="#0B4F26" />
                  <stop offset="90%" stopColor="#052B14" />
                </radialGradient>
                <radialGradient id="whiteBalloon" cx="35%" cy="35%" r="65%">
                  <stop offset="0%" stopColor="#FFFFFF" />
                  <stop offset="50%" stopColor="#FAF7F0" />
                  <stop offset="90%" stopColor="#D9D4C7" />
                </radialGradient>
                <radialGradient id="redBalloon" cx="35%" cy="35%" r="65%">
                  <stop offset="0%" stopColor="#D93842" />
                  <stop offset="45%" stopColor="#A31D24" />
                  <stop offset="90%" stopColor="#5E0B10" />
                </radialGradient>
                <radialGradient id="goldBalloon" cx="35%" cy="35%" r="65%">
                  <stop offset="0%" stopColor="#FFF1B8" />
                  <stop offset="40%" stopColor="#D4AF37" />
                  <stop offset="85%" stopColor="#8A6D19" />
                </radialGradient>
              </defs>

              {/* ARCH SHAPE */}
              {activeDesign.svgType === 'arch' && (
                <g className="transition-all duration-500 ease-out">
                  <rect x="110" y="80" width="180" height="210" fill="none" stroke="#2D2B33" strokeWidth="2" strokeDasharray="4 4" rx="6" />
                  
                  {/* Dense organic tricolor balloon clusters */}
                  <circle cx="95" cy="270" r="26" fill="url(#greenBalloon)" />
                  <circle cx="80" cy="235" r="30" fill="url(#whiteBalloon)" />
                  <circle cx="105" cy="225" r="22" fill="url(#redBalloon)" />
                  <circle cx="85" cy="190" r="34" fill="url(#greenBalloon)" />
                  <circle cx="112" cy="175" r="18" fill="url(#goldBalloon)" />
                  
                  <circle cx="95" cy="140" r="32" fill="url(#whiteBalloon)" />
                  <circle cx="120" cy="115" r="28" fill="url(#redBalloon)" />
                  <circle cx="150" cy="95" r="35" fill="url(#greenBalloon)" />
                  <circle cx="185" cy="85" r="30" fill="url(#whiteBalloon)" />
                  <circle cx="220" cy="90" r="34" fill="url(#redBalloon)" />
                  <circle cx="255" cy="105" r="28" fill="url(#goldBalloon)" />
                  <circle cx="280" cy="130" r="36" fill="url(#greenBalloon)" />
                  <circle cx="295" cy="175" r="32" fill="url(#whiteBalloon)" />
                  <circle cx="305" cy="220" r="28" fill="url(#redBalloon)" />
                  
                  {/* Mini filler balloons */}
                  <circle cx="138" cy="130" r="12" fill="url(#goldBalloon)" />
                  <circle cx="170" cy="112" r="11" fill="url(#redBalloon)" />
                  <circle cx="202" cy="108" r="13" fill="url(#greenBalloon)" />
                  <circle cx="240" cy="118" r="14" fill="url(#whiteBalloon)" />
                  <circle cx="270" cy="155" r="13" fill="url(#redBalloon)" />
                  <circle cx="282" cy="200" r="11" fill="url(#goldBalloon)" />

                  <path d="M90 270 Q 95 285 92 300" stroke="#0B4F26" strokeWidth="2" fill="none" />
                  <path d="M105 270 Q 100 285 106 300" stroke="#FAF7F0" strokeWidth="2" fill="none" />
                  <path d="M120 270 Q 125 285 120 300" stroke="#A31D24" strokeWidth="2" fill="none" />
                </g>
              )}

              {/* CIRCLE BACKDROP SHAPE */}
              {activeDesign.svgType === 'circle' && (
                <g className="transition-all duration-500 ease-out">
                  <circle cx="200" cy="150" r="105" fill="none" stroke="#D4AF37" strokeWidth="4" />
                  <line x1="160" y1="255" x2="160" y2="290" stroke="#8A6D19" strokeWidth="3" />
                  <line x1="240" y1="255" x2="240" y2="290" stroke="#8A6D19" strokeWidth="3" />

                  <circle cx="120" cy="190" r="32" fill="url(#greenBalloon)" />
                  <circle cx="105" cy="150" r="36" fill="url(#whiteBalloon)" />
                  <circle cx="115" cy="110" r="30" fill="url(#redBalloon)" />
                  <circle cx="140" cy="80" r="34" fill="url(#greenBalloon)" />
                  <circle cx="180" cy="60" r="32" fill="url(#goldBalloon)" />
                  <circle cx="225" cy="65" r="28" fill="url(#whiteBalloon)" />
                  
                  <circle cx="135" cy="140" r="14" fill="url(#goldBalloon)" />
                  <circle cx="145" cy="105" r="12" fill="url(#redBalloon)" />
                  <circle cx="165" cy="85" r="13" fill="url(#greenBalloon)" />

                  <rect x="165" y="135" width="110" height="34" rx="8" fill="#0A090D" stroke="#D4AF37" strokeWidth="1.5" />
                  <text x="220" y="157" textAnchor="middle" fill="#FAF7F0" fontSize="13" fontWeight="bold" fontFamily="sans-serif">
                    ¡VIVA MÉXICO!
                  </text>
                </g>
              )}

              {/* GARLAND SHAPE */}
              {activeDesign.svgType === 'garland' && (
                <g className="transition-all duration-500 ease-out">
                  <line x1="50" y1="160" x2="350" y2="160" stroke="#2D2B33" strokeWidth="2" strokeDasharray="3 3" />
                  
                  <circle cx="70" cy="140" r="24" fill="url(#greenBalloon)" />
                  <circle cx="105" cy="130" r="34" fill="url(#whiteBalloon)" />
                  <circle cx="145" cy="145" r="32" fill="url(#redBalloon)" />
                  <circle cx="180" cy="125" r="38" fill="url(#goldBalloon)" />
                  <circle cx="225" cy="140" r="35" fill="url(#greenBalloon)" />
                  <circle cx="265" cy="128" r="32" fill="url(#whiteBalloon)" />
                  <circle cx="305" cy="145" r="34" fill="url(#redBalloon)" />
                  <circle cx="335" cy="160" r="22" fill="url(#goldBalloon)" />

                  <circle cx="125" cy="155" r="14" fill="url(#goldBalloon)" />
                  <circle cx="205" cy="150" r="13" fill="url(#redBalloon)" />
                  <circle cx="245" cy="115" r="14" fill="url(#greenBalloon)" />
                </g>
              )}

              {/* BOUQUET SHAPE */}
              {activeDesign.svgType === 'bouquet' && (
                <g className="transition-all duration-500 ease-out">
                  <path d="M200 135 Q 195 210 200 270" stroke="#D4AF37" strokeWidth="1.5" fill="none" />
                  <rect x="185" y="270" width="30" height="15" rx="3" fill="#D4AF37" />

                  <circle cx="175" cy="165" r="24" fill="url(#greenBalloon)" />
                  <circle cx="225" cy="165" r="24" fill="url(#redBalloon)" />
                  <circle cx="200" cy="180" r="22" fill="url(#goldBalloon)" />
                  <circle cx="180" cy="195" r="20" fill="url(#whiteBalloon)" />
                  <circle cx="220" cy="195" r="20" fill="url(#greenBalloon)" />

                  <circle cx="200" cy="85" r="50" fill="#FAF7F0" fillOpacity="0.85" stroke="#FFFFFF" strokeWidth="2" />
                  <ellipse cx="180" cy="65" rx="12" ry="18" fill="#FFFFFF" fillOpacity="0.6" transform="rotate(-30 180 65)" />
                  <text x="200" y="90" textAnchor="middle" fill="#0B4F26" fontSize="12" fontWeight="bold" fontFamily="sans-serif">
                    ¡Viva México!
                  </text>
                  <text x="200" y="104" textAnchor="middle" fill="#A31D24" fontSize="9" fontWeight="bold" fontFamily="sans-serif">
                    Familia González
                  </text>
                </g>
              )}
            </svg>

            {/* Tricolor Tag Overlay */}
            <div className="absolute top-4 left-4 flex items-center gap-2 p-2 rounded-xl bg-black/80 backdrop-blur-xs border border-stone-700 text-xs">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0B4F26]"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#FAF7F0]"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#A31D24]"></span>
              <span className="font-semibold text-stone-200 text-[11px] ml-1">Látex Tricolor Mate</span>
            </div>

          </div>

          {/* Right: Detailed Inclusions & Ordering */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-stone-400 text-xs font-semibold uppercase tracking-wider">
                <span>{activeDesign.category}</span>
                <span>•</span>
                <span>{activeDesign.dimensions}</span>
              </div>

              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
                {activeDesign.title}
              </h3>

              <p className="text-sm text-stone-300 leading-relaxed">
                {activeDesign.description}
              </p>
            </div>

            {/* Inclusions */}
            <div className="space-y-3 pt-4 border-t border-stone-800">
              <span className="text-xs font-semibold uppercase tracking-wider text-stone-400 block">
                Lo que incluye este montaje en Querétaro:
              </span>
              <ul className="space-y-2 text-xs text-stone-300">
                {activeDesign.includes.map((inc, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#2E8050] flex-shrink-0 mt-0.5" />
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pricing and Action Button */}
            <div className="pt-6 border-t border-stone-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <div>
                <span className="text-[10px] uppercase font-semibold text-stone-400 block">
                  Precio con Montaje en Querétaro
                </span>
                <span className="font-display font-bold text-3xl text-white">
                  ${activeDesign.price.toLocaleString('es-MX')}
                </span>
              </div>

              <button
                onClick={() => handleBookWhatsApp(activeDesign)}
                className="px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-wider text-black bg-white hover:bg-stone-200 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg active:scale-98"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Apartar en Querétaro</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
