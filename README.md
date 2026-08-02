# 🎈 Chilpayate Balloons - Plataforma Web de Alta Decoración y Estilismo de Globos

Una experiencia web moderna, minimalista y de alto impacto visual desarrollada con **React**, **Tailwind CSS**, un motor de **física de globos con efectos de scroll a 60 FPS**, carrusel interactivo de productos, simulador de paletas en 3D en tiempo real y backend en **Node.js / Express**.

---

## ✨ Características Principales

1. **Hero con Animación de Globos Ultrarrealista**:
   - Globos renderizados en tiempo real sobre Canvas 2D con física de helio y oscilación armónica de viento.
   - Sombreado 3D multicapa (brillo especular softbox, sombras de volumen esférico y translucidez perlada).
   - Cuerdas y lazos de satín con física oscilatoria y curvas Bézier suaves.
   - **Efecto Scroll**: Al desplazarse hacia abajo, los globos aceleran suavemente hacia el cielo y se dispersan por la atmósfera de manera 100% fluida.
   - Brisa interactiva al mover el puntero del mouse.

2. **Carrusel de Productos Moderno**:
   - Navegación táctil y por flechas con scroll snap suave.
   - Filtros por categoría (*Bouquets de Helio*, *Arcos & Guirnaldas*, *Cajas Sorpresa*, *Números 3D*).
   - Tarjetas con etiquetas de tendencia, calificaciones, precios con descuento y badges de durabilidad.
   - Modal de vista rápida y cotización directa por WhatsApp.

3. **Simulador de Paletas de Globos 3D**:
   - Permite previsualizar en vivo combinaciones de colores (*Champagne & Oro Rosa*, *Eucalipto & Arena*, *Midnight Gold*, etc.).
   - Personalizador de texto caligráfico en vinil sobre el globo jumbo.
   - Efecto de lluvia de confeti interactivo.
   - Generación automática del enlace de WhatsApp con el arreglo preconfigurado.

4. **Secciones Complementarias de Alta Gama**:
   - Grid de servicios y tipos de eventos.
   - Proceso de trabajo en 3 sencillos pasos con garantía de calidad.
   - Testimonios con calificaciones de 5 estrellas, galería de Instagram y acordeón de Preguntas Frecuentes.
   - Formulario de cotización con cálculo de presupuesto y botón de WhatsApp directo.
   - Pie de página oscuro minimalista con tips de cuidado del globo.

5. **Backend en Node.js + Express**:
   - Endpoints para catálogo de productos (`GET /api/products`), detalles (`GET /api/products/:id`) y recepción de cotizaciones (`POST /api/quotes`).

---

## 🚀 Cómo Iniciar el Proyecto

### 1. Requisitos Previos
- Node.js (versión 18 o superior recomendada)
- npm

### 2. Instalación de Dependencias

```bash
# Instalar dependencias del cliente React
cd client
npm install

# Instalar dependencias del servidor Node.js
cd ../server
npm install
```

### 3. Ejecución en Modo Desarrollo

```bash
# En una terminal para el Frontend (React + Vite)
cd client
npm run dev

# En otra terminal para el Backend (Node.js API)
cd server
npm run dev
```

La aplicación estará disponible en `http://localhost:5173` y la API en `http://localhost:5000`.

---

## 🎨 Paleta de Colores & Diseño

- **Fondo Principal**: Crema suave cálido `#FAF8F5`
- **Acentos Metálicos**: Champagne Gold `#DFB77D` / `#CFA058`
- **Acentos Románticos**: Blush Pink `#F9D5D7` / `#E68A91`
- **Acentos Botánicos**: Eucalipto Sage `#84AC91`
- **Tipografía**:
  - Títulos: *Outfit*
  - Textos & UI: *Plus Jakarta Sans*
