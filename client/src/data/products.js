export const CATEGORIES = [
  { id: 'all', label: 'Todos los Trabajos', count: 10 },
  { id: 'arcos', label: 'Arcos y Guirnaldas', count: 3 },
  { id: 'techos', label: 'Techos y Lluvias Flotantes', count: 2 },
  { id: 'muros', label: 'Muros y Backdrops', count: 2 },
  { id: 'columnas', label: 'Columnas e Inauguraciones', count: 2 },
  { id: 'bouquets', label: 'Bouquets con Helio', count: 1 },
];

export const ARCH_STYLES = [
  {
    id: 'arco-asimetrico',
    name: 'Arco Orgánico Asimétrico',
    subtitle: 'Para entradas residenciales, marcos de puertas y haciendas',
    scale: '3.5 a 4.5 metros',
    idealFor: 'Entradas principales, escaleras en casas y haciendas'
  },
  {
    id: 'techo-flotante',
    name: 'Techo Orgánico Suspendido',
    subtitle: 'Lluvia de globos flotantes sobre pista de baile o comedor',
    scale: '4.0m x 3.0m de superficie',
    idealFor: 'Pistas de baile, terrazas y salones con plafón'
  },
  {
    id: 'backdrop-circular',
    name: 'Backdrop Circular Photowall',
    subtitle: 'Estructura de aro con media luna volumétrica y neón',
    scale: '2.2 metros de diámetro',
    idealFor: 'Área de fotografías, mesas de pastel y bodas en jardín'
  },
  {
    id: 'muro-completo',
    name: 'Muro Monumental de Globos (Wall)',
    subtitle: 'Pared continua de alta densidad con más de 300 globos',
    scale: '3.0m ancho x 2.4m alto',
    idealFor: 'Fondo de escenario, photocall de gala y marcas'
  },
  {
    id: 'columnas-duo',
    name: 'Dúo de Columnas Orgánicas',
    subtitle: 'Pilares gemelos autoportantes para inauguración o escenario',
    scale: '2.20 metros de altura c/u',
    idealFor: 'Inauguraciones comerciales, corte de listón y templos'
  },
  {
    id: 'guirnalda-mural',
    name: 'Guirnalda Mural Flotante',
    subtitle: 'Instalación continua sobre pared, mampara o barandal',
    scale: '2.5 a 3.0 metros',
    idealFor: 'Mesas de honor, mamparas de bienvenida y terrazas'
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
    description: 'Tonos botánicos orgánicos para jardines en Juriquilla y haciendas.'
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
    description: 'Estética cálida y artesanal inspirada en Querétaro colonial.'
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
      'Estructura autoportante y fijación segura sin perforar',
      'Más de 140 globos biodegradables de látex calibrado',
      'Ramas de eucalipto natural preservado',
      'Instalación profesional en Querétaro y Juriquilla'
    ],
    occasions: ['Boda en Hacienda', 'Baby Shower', 'Bautizo', 'Inauguración']
  },
  {
    id: 'techo-organico-flotante',
    name: 'Techo Orgánico y Lluvia de Globos Suspendida',
    category: 'techos',
    tag: 'Instalación Monumental',
    price: 6800,
    originalPrice: 7500,
    rating: 5.0,
    reviewsCount: 14,
    badgeColor: 'bg-stone-100 text-stone-800 border-stone-300',
    description: 'Nube volumétrica suspendida de techo con globos látex de 5 calibres que crea un cielo inmersivo sobre mesas de banquete o pista.',
    accentColor: '#DFD3C2',
    dimensions: 'Superficie de 4.0m x 3.0m',
    durability: 'Instalación de alto impacto para eventos',
    includes: [
      'Anclajes profesionales para plafón o vigas de hacienda',
      'Más de 280 globos látex con textura mate',
      'Cintas de suspensión transparentes de alta resistencia',
      'Montaje matutino y retiro post-evento en Querétaro'
    ],
    occasions: ['Bodas', 'Graduaciones', 'Cenas de Gala', 'XV Años']
  },
  {
    id: 'muro-monumental-wall',
    name: 'Muro Monumental de Globos (Balloon Wall 3D)',
    category: 'muros',
    tag: 'Fondo de Gran Escala',
    price: 7900,
    originalPrice: 8800,
    rating: 5.0,
    reviewsCount: 18,
    badgeColor: 'bg-stone-100 text-stone-800 border-stone-300',
    description: 'Pared continua de 3x2.4 metros con más de 350 globos entrelazados en relieve volumétrico para sesiones fotográficas y alfombra roja.',
    accentColor: '#1A191C',
    dimensions: '3.00m Ancho x 2.40m Alto',
    durability: 'Estructura rígida autoportante',
    includes: [
      'Renta de mampara autoportante reforzada',
      'Composición de máxima densidad sin huecos',
      'Acentos de esferas cromadas o botánicas',
      'Flete y montaje en todo Querétaro'
    ],
    occasions: ['Photocall de Marca', 'XV Años', 'Pasarelas', 'Galas']
  },
  {
    id: 'columnas-organicas-par',
    name: 'Dúo de Columnas Orgánicas Esculturales',
    category: 'columnas',
    tag: 'Inauguraciones y Entradas',
    price: 3200,
    originalPrice: 3600,
    rating: 4.95,
    reviewsCount: 22,
    badgeColor: 'bg-stone-100 text-stone-800 border-stone-300',
    description: 'Par de tótems orgánicos autoportantes con base de contrapeso sólido para delimitar accesos de tiendas o escenarios en Querétaro.',
    accentColor: '#B08038',
    dimensions: '2 Columnas de 2.20m de altura c/u',
    durability: 'Aptas para interior y exteriores techados',
    includes: [
      '2 Bases metálicas con contrapeso de seguridad',
      'Globos calibrados con técnica espiral orgánica',
      'Detalles de logotipo o follaje opcional',
      'Montaje express en plazas comerciales'
    ],
    occasions: ['Corte de Listón', 'Inauguraciones', 'Corporativos', 'Templos']
  },
  {
    id: 'backdrop-gala-sequin',
    name: 'Backdrop Circular Photowall con Aro',
    category: 'muros',
    tag: 'Estructura con Neón',
    price: 5200,
    originalPrice: 5900,
    rating: 5.0,
    reviewsCount: 19,
    badgeColor: 'bg-stone-100 text-stone-800 border-stone-300',
    description: 'Aro dorado monumental de 2.2 metros con media luna volumétrica de globos orgánicos, letrero neón cálido y acentos florales.',
    accentColor: '#DF7861',
    dimensions: 'Diámetro: 2.20m x Altura total: 2.30m',
    durability: 'Montaje para el día del evento',
    includes: [
      'Estructura de aro dorado en renta',
      'Guirnalda orgánica de 3.2 metros de desarrollo',
      'Letrero neón a elección (Better Together / Happy Birthday / Mis XV)',
      'Transporte, montaje y desmontaje incluidos'
    ],
    occasions: ['Bodas', 'Graduaciones', 'XV Años', 'Baby Shower']
  },
  {
    id: 'guirnalda-organica-mural',
    name: 'Guirnalda Orgánica Mural Continua',
    category: 'arcos',
    tag: 'Montaje en Pared',
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
      'Instalación por estilistas en Querétaro'
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
      'Entrega a domicilio en Querétaro'
    ],
    occasions: ['Cumpleaños', 'Aniversario', 'Agradecimiento']
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
    description: 'Arco orgánico asimétrico de 4.5 metros en paleta tricolor mate contemporánea para noche mexicana y recepciones en Querétaro.',
    accentColor: '#0B4F26',
    dimensions: 'Longitud: 4.5 metros',
    durability: 'Instalación para eventos patrios',
    includes: [
      'Estructura de soporte seguro autoportante',
      'Composición tricolor con acentos dorados',
      'Montaje en Querétaro, Juriquilla y El Campanario',
      'Retiro opcional'
    ],
    occasions: ['15 de Septiembre', 'Noche Mexicana', 'Haciendas QRO']
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Valeria Mendiola',
    role: 'Cumpleaños en Juriquilla',
    comment: 'Contratamos el arco orgánico para la entrada de la casa en Juriquilla y un bouquet de burbuja para la mesa principal. El montaje fue puntualísimo y la armonía de colores impecable.',
    rating: 5,
    event: 'Arco Orgánico Asimétrico'
  },
  {
    id: 2,
    name: 'Rodrigo y Sofía',
    role: 'Boda en Hacienda El Salitre',
    comment: 'El techo flotante y el arco botánico con eucalipto natural fueron el fondo perfecto para la ceremonia. La calidad del látex mate se vio increíble en las fotos sin reflejos molestos.',
    rating: 5,
    event: 'Techo Orgánico Suspendido'
  },
  {
    id: 3,
    name: 'Mariana Casas',
    role: 'Evento Corporativo en Centro Sur',
    comment: 'Cotizamos el montaje patrio para la cena de la empresa en Querétaro. La atención por WhatsApp fue muy profesional y el resultado superó las expectativas del equipo directivo.',
    rating: 5,
    event: 'Arco Monumental Tricolor'
  }
];

export const FAQS = [
  {
    question: '¿Qué zonas de Querétaro cubren para instalación?',
    answer: 'Cubrimos todo Santiago de Querétaro, Juriquilla, El Campanario, Zibatá, Corregidora, Centro Sur, Balvanera, Jurica, Huertas la Joya y San Juan del Río.'
  },
  {
    question: '¿Con cuánto tiempo de anticipación se agendan los montajes?',
    answer: 'Para arcos orgánicos, techos y muros de gran formato recomendamos agendar con 1 a 2 semanas de anticipación para asegurar disponibilidad de fecha y paleta. Para bouquets con burbuja aceptamos pedidos con 24 a 48 horas.'
  },
  {
    question: '¿Cómo se fijan los arcos sin dañar las paredes o acabados de cantera?',
    answer: 'Utilizamos estructuras metálicas autoportantes con contrapeso o fijaciones especiales desmontables y seguras que no perforan ni maltratan la cantera, muros o pintura.'
  },
  {
    question: '¿Cuánto tiempo duran los arcos orgánicos con aire?',
    answer: 'Nuestros arcos orgánicos se calibran con aire filtrado y látex de alta densidad, manteniendo su volumen y color mate impecables de 2 a 3 semanas en interiores climatizados.'
  }
];
