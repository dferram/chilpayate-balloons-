import React from 'react';
import { Instagram, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#141316] text-white pt-20 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white text-charcoal-950 flex items-center justify-center font-display font-bold text-xs">
                CP
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl tracking-tight text-white leading-none">
                  CHILPAYATE
                </span>
                <span className="text-[9px] tracking-[0.2em] uppercase font-medium text-stone-400 font-sans">
                  Balloon Styling Studio • Querétaro
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-stone-400 max-w-sm leading-relaxed">
              Diseño, elaboración y montaje de arcos orgánicos, techos suspendidos y escenografías de globos para bodas en haciendas, celebraciones privadas y eventos en Querétaro.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-stone-900 border border-stone-800 hover:border-stone-500 text-stone-300 flex items-center justify-center transition"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/5215555555555"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-stone-900 border border-stone-800 hover:border-stone-500 text-stone-300 flex items-center justify-center transition"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-stone-300">
              Colección
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li><a href="#catalogo" className="hover:text-white transition">Arcos Orgánicos Asimétricos</a></li>
              <li><a href="#catalogo" className="hover:text-white transition">Techos y Lluvias Suspendidas</a></li>
              <li><a href="#catalogo" className="hover:text-white transition">Muros Monumentales (Walls)</a></li>
              <li><a href="#catalogo" className="hover:text-white transition">Backdrops Circulares con Neón</a></li>
              <li><a href="#temporada" className="hover:text-white transition">Edición 15 de Septiembre</a></li>
            </ul>
          </div>

          {/* Navigation */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-stone-300">
              Navegación
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li><a href="#personalizador" className="hover:text-white transition">Configurador de Arcos</a></li>
              <li><a href="#servicios" className="hover:text-white transition">Servicios e Instalación</a></li>
              <li><a href="#proceso" className="hover:text-white transition">Metodología</a></li>
              <li><a href="#testimonios" className="hover:text-white transition">Opiniones de Clientes</a></li>
              <li><a href="#cotizar" className="hover:text-white transition">Contacto y Cotización</a></li>
            </ul>
          </div>

          {/* Balloon Care */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-stone-300">
              Recomendaciones
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>Mantener en espacios con temperatura templada.</li>
              <li>Evitar la exposición directa a luz solar continua.</li>
              <li>Fijaciones sin perforar cantera ni muros.</li>
              <li>Material 100% látex natural biodegradable.</li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>© {new Date().getFullYear()} Chilpayate Balloons. Todos los derechos reservados.</p>
          <p>Santiago de Querétaro, Qro. • Juriquilla • El Campanario • Zibatá</p>
        </div>

      </div>
    </footer>
  );
}
