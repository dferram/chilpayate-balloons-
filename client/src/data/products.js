export const CATEGORIES = [
  { id: 'all', label: 'Todos los Trabajos', count: 6 },
  { id: 'arcos', label: 'Arcos y Guirnaldas', count: 3 },
  { id: 'backdrops', label: 'Backdrops y Muros', count: 1 },
  { id: 'bouquets', label: 'Bouquets y Burbujas', count: 1 },
  { id: 'gigantes', label: 'Números Monumentales', count: 1 },
];

export const ARCH_STYLES = [
  {
    id: 'arco-asimetrico',
    name: 'Arco Orgánico Asimétrico',
    subtitle: 'Para entradas, escaleras o marcos de puertas',
    scale: '3.5 a 4.5 metros',
    idealFor: 'Entradas principales, inauguraciones y fondos principales'
  },
  {
    id: 'backdrop-circular',
    name: 'Backdrop Circular Photowall',
    subtitle: 'Estructura de aro con media luna volumétrica',
    scale: '2.0 metros de diámetro',
    idealFor: 'Área de fotografías, mesas de pastel y bodas'
  },
  {
    id: 'guirnalda-mural',
    name: 'Guirnalda Mural Flotante',
    subtitle: 'Instalación continua sobre pared o barandal',
    scale: '2.5 a 3.0 metros',
    idealFor: 'Mesas de honor, mamparas y terrazas'
  },
  {
    id: 'bouquet-burbuja',
    name: 'Bouquet con Globo Burbuja',
    subtitle: 'Composición flotante con helio para regalo o mesa',
    scale: '1.90 metros de altura',
    idealFor: 'Centros de mesa, esquinas de salón y regalos personalizados'
  }
];

export const COLOR_PALETTES = [
  {
    id: 'champagne-luxury',
    name: 'Champagne, Arena y Blanco',
    colors: ['#EDE6D6', '#DFD3C2', '#FFFFFF', '#CBB897'],
    description: 'Elegancia sobria y neutra para bodas y aniversarios.'
  },
  {
    id: 'eucalyptus-sage',
    name: 'Eucalipto, Olivo y Nude',
    colors: ['#84AC91', '#62836E', '#EAE1D2', '#FFFFFF'],
    description: 'Tonos botánicos orgánicos para jardines y baby showers.'
  },
  {
    id: 'patrio-mexico',
    name: 'Tricolor Patrio (Verde, Blanco, Carmín)',
    colors: ['#0B4F26', '#FAF7F0', '#A31D24', '#D4AF37'],
    description: 'Gama mexicana contemporánea para el 15 de Septiembre.'
  },
  {
    id: 'terracotta-sunset',
    name: 'Terracota, Barro y Crema',
    colors: ['#BD5741', '#E5A99B', '#F5EFE6', '#7A3828'],
    description: 'Estética cálida y artesanal para interiores contemporáneos.'
  },
  {
    id: 'midnight-gold',
    name: 'Negro Mate, Blanco y Cromo',
    colors: ['#1A191C', '#FFFFFF', '#DECDB8', '#9B8E7B'],
    description: 'Contraste arquitectónico para galas y marcas.'
  }
];

export const PRODUCTS = [
  {
    id: 'arco-organico-botanico',
    name: 'Arco Orgánico Botánico Asimétrico',
    category: 'arcos',
    tag: 'Arco de Gran Formato',
    price: 3400,
    originalPrice: 3800,
    rating: 5.0,
    reviewsCount: 36,
    badgeColor: 'bg-stone-100 text-stone-800 border-stone-300',
    description: 'Estructura asimétrica orgánica con globos látex de múltiples calibres (5", 11", 18" y 24") en acabado mate con follaje de eucalipto preservado.',
    accentColor: '#84AC91',
    dimensions: 'Longitud: 3.5 metros adaptables',
    durability: 'Duración de 2 a 3 semanas en interior',
    includes: [
      'Estructura y fijación autoportante sin perforaciones',
      'Más de 140 globos biodegradables de látex calibrado',
      'Ramas de eucalipto natural preservado',
      'Instalación profesional completa en tu locación'
    ],
    occasions: ['Boda', 'Baby Shower', 'Bautizo', 'Inauguración']
  },
  {
    id: 'backdrop-gala-sequin',
    name: 'Backdrop Circular Photowall',
    category: 'backdrops',
    tag: 'Estructura Completa',
    price: 5200,
    originalPrice: 5900,
    rating: 5.0,
    reviewsCount: 19,
    badgeColor: 'bg-stone-100 text-stone-800 border-stone-300',
    description: 'Aro dorado monumental de 2 metros con media luna volumétrica de globos orgánicos, letrero neón personalizado y acentos florales.',
    accentColor: '#DF7861',
    dimensions: 'Diámetro: 2.00m x Altura total: 2.20m',
    durability: 'Montaje para el día del evento',
    includes: [
      'Estructura de aro dorado en renta',
      'Guirnalda orgánica de 3.2 metros de desarrollo',
      'Letrero neón a elección (Better Together / Happy Birthday)',
      'Transporte, montaje y desmontaje incluidos'
    ],
    occasions: ['Bodas', 'Graduaciones', 'XV Años', 'Galas']
  },
  {
    id: 'guirnalda-organica-mural',
    name: 'Guirnalda Orgánica Mural',
    category: 'arcos',
    tag: 'Montaje en Muro',
    price: 2800,
    originalPrice: 3100,
    rating: 4.95,
    reviewsCount: 28,
    badgeColor: 'bg-stone-100 text-stone-800 border-stone-300',
    description: 'Instalación continua diseñada para fijarse sobre muros, mamparas o detrás de la mesa principal en paleta cromática personalizada.',
    accentColor: '#DFB77D',
    dimensions: 'Longitud: 3.0 metros',
    durability: 'Duración de 2 a 3 semanas',
    includes: [
      'Montaje con fijaciones invisibles que cuidan las paredes',
      'Globos mate y satinados en 4 calibres',
      'Detalles de follaje botánico opcional',
      'Instalación por estilistas de globos'
    ],
    occasions: ['Cumpleaños', 'Bautizo', 'Baby Shower']
  },
  {
    id: 'bouquet-aurora-gold',
    name: 'Bouquet con Globo Burbuja Personalizado',
    category: 'bouquets',
    tag: 'Detalle con Helio',
    price: 1350,
    originalPrice: 1550,
    rating: 4.9,
    reviewsCount: 48,
    badgeColor: 'bg-stone-100 text-stone-800 border-stone-300',
    description: 'Globo burbuja transparente de 24 pulgadas personalizado con caligrafía artesanal y racimo de 8 globos látex con helio Hi-Float.',
    accentColor: '#DFB77D',
    dimensions: 'Alto: 1.90m x Ancho: 85cm',
    durability: 'Helio con tratamiento Hi-Float (4 a 7 días)',
    includes: [
      'Globo burbuja de 24" con caligrafía en vinil',
      '8 globos látex coordinados con helio puro',
      'Base con peso forrado en lino',
      'Cinta de tela y tarjeta'
    ],
    occasions: ['Cumpleaños', 'Aniversario', 'Agradecimiento']
  },
  {
    id: 'jumbo-numero-3d',
    name: 'Números Gigantes sobre Base Orgánica',
    category: 'gigantes',
    tag: 'Montaje 3D',
    price: 1850,
    originalPrice: 2100,
    rating: 4.88,
    reviewsCount: 29,
    badgeColor: 'bg-stone-100 text-stone-800 border-stone-300',
    description: 'Dos números gigantes foil de 102cm montados sobre base orgánica multicapa con minimotivos y acabado mate.',
    accentColor: '#B08038',
    dimensions: 'Alto: 1.60m x Ancho: 1.20m',
    durability: '10 a 15 días en interior',
    includes: [
      '2 Números gigantes de 40 pulgadas',
      'Base orgánica de látex calibrado',
      'Detalles botánicos y mini esferas',
      'Tarjeta personalizada'
    ],
    occasions: ['Cumpleaños', 'Aniversarios']
  },
  {
    id: 'arco-patrio-monumental-cat',
    name: 'Arco Monumental 15 de Septiembre',
    category: 'arcos',
    tag: 'Edición Fiestas Patrias',
    price: 4200,
    originalPrice: 4600,
    rating: 5.0,
    reviewsCount: 15,
    badgeColor: 'bg-stone-100 text-stone-800 border-stone-300',
    description: 'Arco orgánico asimétrico de 4.5 metros en paleta tricolor mate contemporánea para noche mexicana y recepciones.',
    accentColor: '#0B4F26',
    dimensions: 'Longitud: 4.5 metros',
    durability: 'Instalación para eventos patrios',
    includes: [
      'Estructura de soporte seguro',
      'Composición tricolor con acentos dorados',
      'Montaje en locación en CDMX y Edomex',
      'Retiro opcional'
    ],
    occasions: ['15 de Septiembre', 'Noche Mexicana', 'Corporativo Patrio']
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Valeria Mendiola',
    role: 'Cumpleaños 30',
    comment: 'Contratamos el arco orgánico para la entrada y un bouquet de burbuja para la mesa principal. El montaje fue puntualísimo y la armonía de colores fue impecable.',
    rating: 5,
    event: 'Arco Orgánico Asimétrico'
  },
  {
    id: 2,
    name: 'Rodrigo y Sofía',
    role: 'Boda en Jardín',
    comment: 'El arco botánico con eucalipto natural fue el fondo perfecto para la ceremonia. La calidad del látex mate se vio increíble en las fotos sin reflejos molestos.',
    rating: 5,
    event: 'Arco Orgánico Botánico'
  },
  {
    id: 3,
    name: 'Mariana Casas',
    role: 'Evento Corporativo 15 Sep',
    comment: 'Cotizamos el montaje patrio para la cena de la empresa. La atención por WhatsApp fue muy profesional y el resultado superó las expectativas del equipo.',
    rating: 5,
    event: 'Arco Monumental Tricolor'
  }
];

export const FAQS = [
  {
    question: '¿Con cuánto tiempo de anticipación se agendan los arcos y montajes?',
    answer: 'Para arcos orgánicos, backdrops y montajes de gran formato recomendamos agendar con 1 a 2 semanas de anticipación para asegurar disponibilidad de fecha y paleta. Para bouquets con burbuja aceptamos pedidos con 24 a 48 horas.'
  },
  {
    question: '¿Cómo se fijan los arcos sin dañar las paredes?',
    answer: 'Utilizamos estructuras metálicas autoportantes con contrapeso o fijaciones especiales desmontables y seguras que no perforan ni maltratan acabados arquitectónicos.'
  },
  {
    question: '¿Cuánto tiempo duran los arcos orgánicos con aire?',
    answer: 'Nuestros arcos orgánicos se calibran con aire filtrado y látex de alta densidad, manteniendo su volumen y color mate impecables de 2 a 3 semanas en interiores climatizados.'
  },
  {
    question: '¿El servicio incluye transporte, instalación y desmontaje?',
    answer: 'Sí. Nuestro equipo de estilistas traslada todos los materiales e infla/instala en el lugar de tu evento en Ciudad de México y Área Metropolitana.'
  }
];
