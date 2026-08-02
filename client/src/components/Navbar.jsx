import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';

export default function Navbar({ onOpenQuote }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Colección', href: '#catalogo' },
    { label: 'Temporada 15 Sep', href: '#temporada' },
    { label: 'Simulador de Arcos', href: '#personalizador' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Proceso', href: '#proceso' },
    { label: 'Opiniones', href: '#testimonios' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-4 glass-nav shadow-xs'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-full bg-charcoal-950 flex items-center justify-center text-white">
            <span className="font-display font-bold text-xs tracking-tighter">CP</span>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-lg tracking-tight text-charcoal-950 leading-none">
              CHILPAYATE
            </span>
            <span className="text-[9px] tracking-[0.2em] uppercase font-medium text-stone-500 font-sans">
              Balloon Styling
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-xs uppercase tracking-wider font-semibold transition-colors py-1 ${
                link.label === 'Temporada 15 Sep'
                  ? 'text-stone-950 font-bold border-b border-stone-800'
                  : 'text-stone-700 hover:text-charcoal-950'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="https://wa.me/5215555555555?text=Hola,%20me%20gustar%C3%ADa%20cotizar%20un%20arreglo%20de%20globos."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold text-charcoal-900 bg-white hover:bg-stone-100 border border-stone-300 transition"
          >
            <MessageCircle className="w-3.5 h-3.5 text-stone-700" />
            <span>WhatsApp</span>
          </a>

          <button
            onClick={onOpenQuote}
            className="px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-charcoal-950 hover:bg-stone-800 transition"
          >
            <span>Cotizar</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 rounded-xl bg-white border border-stone-300 text-charcoal-900 md:hidden"
          aria-label="Menú"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-stone-200 px-6 py-6 space-y-4 shadow-lg">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-charcoal-900 py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-4 border-t border-stone-200 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full py-3 rounded-full text-xs font-semibold text-white bg-charcoal-950"
            >
              Cotizar Arreglo
            </button>
            <a
              href="https://wa.me/5215555555555"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-full text-xs font-semibold text-charcoal-900 bg-white border border-stone-300 flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-stone-700" />
              <span>Contactar por WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
