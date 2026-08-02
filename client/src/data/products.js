export const CATEGORIES = [
  { id: 'all', label: 'Todos', count: 12 },
  { id: 'bouquets', label: 'Bouquets de Helio', count: 4 },
  { id: 'arcos', label: 'Arcos y Guirnaldas', count: 3 },
  { id: 'cajas', label: 'Cajas de Regalo', count: 3 },
  { id: 'gigantes', label: 'Números y Letras', count: 2 },
];

export const COLOR_PALETTES = [
  {
    id: 'champagne-luxury',
    name: 'Champagne y Oro Rosa',
    colors: ['#F5E3C7', '#E8A8A8', '#DFB77D', '#FAF6EE'],
    description: 'Tonos cálidos y románticos para bodas y aniversarios.'
  },
  {
    id: 'eucalyptus-sage',
    name: 'Eucalipto y Arena Mate',
    colors: ['#84AC91', '#E4DAC2', '#FFFFFF', '#CFA058'],
    description: 'Gama orgánica contemporánea para eventos estilo natural.'
  },
  {
    id: 'midnight-gold',
    name: 'Negro Mate y Cromo',
    colors: ['#1A191D', '#DFB77D', '#EFE7D2', '#B08038'],
    description: 'Contraste sobrio para graduaciones y eventos corporativos.'
  },
  {
    id: 'cotton-candy',
    name: 'Pastel y Lila',
    colors: ['#F9D5D7', '#D5E1DF', '#E8DFF5', '#FDFBF7'],
    description: 'Colores suaves para bautizos y cumpleaños infantiles.'
  },
  {
    id: 'terracotta-sunset',
    name: 'Terracota y Nude',
    colors: ['#DF7861', '#F5E3C7', '#D3C4AF', '#FAF0E2'],
    description: 'Tonos tierra cálidos con acabado mate.'
  }
];

export const PRODUCTS = [
  {
    id: 'bouquet-aurora-gold',
    name: 'Bouquet Aurora Gold',
    category: 'bouquets',
    tag: 'Destacado',
    price: 1350,
    originalPrice: 1550,
    rating: 4.9,
    reviewsCount: 48,
    badgeColor: 'bg-stone-100 text-stone-800 border-stone-300',
    description: 'Bouquet flotante con globo burbuja cristalino de 24 pulgadas personalizado con caligrafía artesanal y racimo de 8 globos látex en tonos champagne, blush y arena.',
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=900&q=80',
    accentColor: '#DFB77D',
    dimensions: 'Alto: 1.90m x Ancho: 85cm',
    durability: 'Helio con tratamiento Hi-Float (4 a 7 días)',
    includes: [
      'Globo burbuja de 24" con caligrafía personalizada a mano',
      '8 globos látex en tonos coordinados con helio puro',
      'Base con contrapeso forrada en lino',
      'Cinta de seda y tarjeta para dedicatoria'
    ],
    occasions: ['Cumpleaños', 'Aniversario', 'Graduación']
  },
  {
    id: 'arco-organico-botanico',
    name: 'Arco Orgánico Botánico',
    category: 'arcos',
    tag: 'Exclusivo',
    price: 3400,
    originalPrice: 3800,
    rating: 5.0,
    reviewsCount: 36,
    badgeColor: 'bg-stone-100 text-stone-800 border-stone-300',
    description: 'Composición asimétrica con globos de distintos calibres en acabado mate aterciopelado, complementada con follaje de eucalipto natural preservado.',
    image: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=900&q=80',
    accentColor: '#84AC91',
    dimensions: 'Largo: 3.5 metros (adaptable al espacio)',
    durability: 'Duración de 2 a 3 semanas en interior',
    includes: [
      'Estructura autoportante segura para interiores y exteriores',
      'Más de 140 globos biodegradables de látex natural',
      'Follaje de eucalipto natural integrado',
      'Instalación completa en el lugar del evento'
    ],
    occasions: ['Boda', 'Baby Shower', 'Bautizo', 'Apertura']
  },
  {
    id: 'caja-luxury-noir',
    name: 'Caja Cilíndrica Velvet y Bubble',
    category: 'cajas',
    tag: 'Regalo',
    price: 1190,
    originalPrice: null,
    rating: 4.95,
    reviewsCount: 62,
    badgeColor: 'bg-stone-100 text-stone-800 border-stone-300',
    description: 'Caja cilíndrica forrada en terciopelo artesanal con mini rosas preservadas y globo esfera transparente con helio y mensaje en vinil mate.',
    image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=900&q=80',
    accentColor: '#E68A91',
    dimensions: 'Alto: 1.10m total (Caja 22cm x 20cm)',
    durability: 'Globo con helio (5 a 8 días)',
    includes: [
      'Caja rígida forrada en velvet',
      'Globo esfera transparente con dedicatoria',
      'Rosas preservadas o chocolates finos a elección',
      'Moño de satín a juego'
    ],
    occasions: ['Cumpleaños', 'Aniversario', 'Agradecimiento']
  },
  {
    id: 'jumbo-numero-3d',
    name: 'Números Gigantes sobre Base Orgánica',
    category: 'gigantes',
    tag: 'Personalizado',
    price: 1850,
    originalPrice: 2100,
    rating: 4.88,
    reviewsCount: 29,
    badgeColor: 'bg-stone-100 text-stone-800 border-stone-300',
    description: 'Dos números gigantes de 102cm en tono cromo montados sobre una base orgánica de globos mate con detalles botánicos.',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=900&q=80',
    accentColor: '#B08038',
    dimensions: 'Alto: 1.60m x Ancho: 1.20m',
    durability: 'Duración de 10 a 15 días en interior',
    includes: [
      '2 Números gigantes de 40 pulgadas',
      'Base orgánica multicapa de látex calibrado',
      'Detalles botánicos y mini esferas decorativas',
      'Tarjeta personalizada'
    ],
    occasions: ['Cumpleaños', 'Aniversario de Empresa']
  },
  {
    id: 'backdrop-gala-sequin',
    name: 'Backdrop Circular con Guirnalda',
    category: 'arcos',
    tag: 'Eventos',
    price: 5200,
    originalPrice: 5900,
    rating: 5.0,
    reviewsCount: 19,
    badgeColor: 'bg-stone-100 text-stone-800 border-stone-300',
    description: 'Estructura circular de 2 metros de diámetro con media luna de globos orgánicos en gama cálida, letrero neón y flores de acento.',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=900&q=80',
    accentColor: '#DF7861',
    dimensions: 'Diámetro: 2.00m x Altura: 2.20m',
    durability: 'Montaje para el día del evento',
    includes: [
      'Estructura de aro en renta',
      'Guirnalda orgánica de 3.2 metros',
      'Letrero neón a elección',
      'Montaje y desmontaje incluidos'
    ],
    occasions: ['Bodas', 'Graduaciones', 'XV Años']
  },
  {
    id: 'bouquet-gender-reveal',
    name: 'Globo Jumbo de Revelación',
    category: 'bouquets',
    tag: 'Especial',
    price: 1650,
    originalPrice: null,
    rating: 4.97,
    reviewsCount: 41,
    badgeColor: 'bg-stone-100 text-stone-800 border-stone-300',
    description: 'Globo negro opaco de 36 pulgadas con helio, relleno de polvos holi y confeti especial, acompañado de racimos laterales.',
    image: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=900&q=80',
    accentColor: '#AECBB7',
    dimensions: 'Alto: 2.20m x Ancho: 1.00m',
    durability: 'Preparado para el momento de la revelación',
    includes: [
      'Globo jumbo 36" opaco con confeti y polvo revelador',
      'Herramienta decorada para el pop',
      '6 globos de helio complementarios',
      'Guirnalda de borlas de tela'
    ],
    occasions: ['Revelación de Género', 'Baby Shower']
  },
  {
    id: 'caja-sorpresa-vuelo',
    name: 'Caja con Globos Flotantes',
    category: 'cajas',
    tag: 'Sorpresa',
    price: 1450,
    originalPrice: 1650,
    rating: 4.92,
    reviewsCount: 33,
    badgeColor: 'bg-stone-100 text-stone-800 border-stone-300',
    description: 'Al abrir la tapa de la caja rígida, 4 globos de helio con fotos impresas y dedicatorias se elevan suavemente.',
    image: 'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=900&q=80',
    accentColor: '#E68A91',
    dimensions: 'Caja: 60x60x60 cm',
    durability: 'Elevación inmediata al destapar',
    includes: [
      'Caja rígida con listón de satín',
      '4 globos de helio en tonos suaves',
      '6 fotografías impresas sujetas a las cintas',
      'Dedicatoria personalizada'
    ],
    occasions: ['Cumpleaños', 'Aniversario', 'Día de las Madres']
  },
  {
    id: 'bouquet-minimal-pearl',
    name: 'Bouquet Minimalista Perla',
    category: 'bouquets',
    tag: 'Clásico',
    price: 1100,
    originalPrice: null,
    rating: 4.85,
    reviewsCount: 22,
    badgeColor: 'bg-stone-100 text-stone-800 border-stone-300',
    description: 'Composición sobria de globos perlados translúcidos con toques satinados y cinta de organza.',
    image: 'https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?auto=format&fit=crop&w=900&q=80',
    accentColor: '#D3C4AF',
    dimensions: 'Alto: 1.80m',
    durability: '5 a 7 días de flotación garantizada',
    includes: [
      '7 globos látex perlados con helio',
      '2 globos orbe esféricos',
      'Base con peso forrado y cinta de tela'
    ],
    occasions: ['Bautizo', 'Primera Comunión', 'Cena']
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Valeria Mendiola',
    role: 'Cumpleaños',
    comment: 'El arreglo Aurora Gold llegó puntual y duró impecable más de una semana. La caligrafía en el globo le dio un toque muy personal y elegante.',
    rating: 5,
    event: 'Bouquet Aurora Gold',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 2,
    name: 'Rodrigo y Sofía',
    role: 'Boda',
    comment: 'Montaron el arco orgánico en la terraza de nuestro evento. El balance de colores con el eucalipto natural fue exactamente lo que habíamos pedido.',
    rating: 5,
    event: 'Arco Orgánico Botánico',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 3,
    name: 'Mariana Casas',
    role: 'Baby Shower',
    comment: 'La atención por WhatsApp para afinar los tonos fue muy clara y humana. El globo de revelación funcionó perfecto para el momento de las fotos.',
    rating: 5,
    event: 'Globo de Revelación',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80'
  }
];

export const FAQS = [
  {
    question: '¿Con cuánto tiempo de anticipación se realiza el pedido?',
    answer: 'Para bouquets y cajas recomendamos de 24 a 48 horas de anticipación. Para montajes de arcos orgánicos y eventos completos sugerimos agendar con 1 o 2 semanas de anticipación.'
  },
  {
    question: '¿Cuánto tiempo flotan los globos con helio?',
    answer: 'Nuestros bouquets de látex utilizan tratamiento Ultra Hi-Float que prolonga la flotación de 4 a 7 días en interiores. Los globos burbuja cristalinos se mantienen de 10 a 20 días.'
  },
  {
    question: '¿Hacen entregas a domicilio y montaje en el lugar?',
    answer: 'Sí, entregamos en vehículos acondicionados para proteger los globos de la temperatura y el sol, y nuestro equipo realiza la instalación en la locación del evento.'
  },
  {
    question: '¿Se pueden personalizar los colores y el texto?',
    answer: 'Todos los arreglos se pueden ajustar en colores, tipografía, dedicatorias y dimensiones según el estilo de tu celebración.'
  }
];
