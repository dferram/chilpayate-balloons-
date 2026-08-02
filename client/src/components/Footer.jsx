import React from 'react';
import { Sparkles, Heart, Instagram, MessageCircle, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-charcoal-950 text-white pt-20 pb-12 border-t border-charcoal-800 relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-champagne-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-champagne-400 to-blush-300 flex items-center justify-center">
                <div className="w-4 h-5 bg-white/90 rounded-full balloon-3d relative"></div>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-2xl tracking-tight text-white leading-none">
                  Chilpayate
                </span>
                <span className="text-[9px] tracking-[0.25em] uppercase font-semibold text-champagne-400 font-sans">
                  Balloons & Styling
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-neutral-400 max-w-sm leading-relaxed">
              Alta decoración y estilismo con globos de lujo para bodas, celebraciones y momentos inolvidables. Diseños contemporáneos que transforman tus espacios.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-charcoal-900 border border-charcoal-800 hover:border-champagne-400 text-champagne-300 flex items-center justify-center transition hover:scale-105"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/5215555555555"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-charcoal-900 border border-charcoal-800 hover:border-champagne-400 text-emerald-400 flex items-center justify-center transition hover:scale-105"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-champagne-300">
              Colección
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li><a href="#catalogo" className="hover:text-white transition">Bouquets de Helio</a></li>
              <li><a href="#catalogo" className="hover:text-white transition">Arcos Orgánicos</a></li>
              <li><a href="#catalogo" className="hover:text-white transition">Cajas Sorpresa Velvet</a></li>
              <li><a href="#catalogo" className="hover:text-white transition">Números & Letras Jumbo</a></li>
              <li><a href="#catalogo" className="hover:text-white transition">Revelación de Género</a></li>
            </ul>
          </div>

          {/* Navigation */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-champagne-300">
              Explorar
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li><a href="#personalizador" className="hover:text-white transition">Simulador de Paletas</a></li>
              <li><a href="#servicios" className="hover:text-white transition">Servicios y Montajes</a></li>
              <li><a href="#proceso" className="hover:text-white transition">Proceso de Trabajo</a></li>
              <li><a href="#testimonios" className="hover:text-white transition">Opiniones de Clientes</a></li>
              <li><a href="#cotizar" className="hover:text-white transition">Solicitar Cotización</a></li>
            </ul>
          </div>

          {/* Balloon Care Tips */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-champagne-300">
              Cuidado del Globo
            </h4>
            <ul className="space-y-1.5 text-xs text-neutral-400">
              <li>✨ Mantener en interior climatizado</li>
              <li>☀️ Evitar sol directo o fuentes de calor</li>
              <li>🌬️ Proteger de corrientes de aire frío</li>
              <li>🎈 Todos nuestros globos son 100% látex biodegradable</li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-charcoal-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <p>© {new Date().getFullYear()} Chilpayate Balloons. Todos los derechos reservados.</p>
          <div className="flex items-center gap-1 text-xs">
            <span>Hecho con</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>para momentos inolvidables.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
