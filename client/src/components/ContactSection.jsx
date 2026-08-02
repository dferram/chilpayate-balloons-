import React, { useState } from 'react';
import { Sparkles, MessageCircle, Send, MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventType: 'Cumpleaños',
    date: '',
    location: '',
    budget: 'Medio ($1,500 - $3,500)',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `¡Hola Chilpayate Balloons! 🎈\n\n` +
      `Me gustaría solicitar una cotización con los siguientes datos:\n` +
      `👤 *Nombre:* ${formData.name}\n` +
      `📱 *Teléfono:* ${formData.phone}\n` +
      `🎉 *Tipo de Evento:* ${formData.eventType}\n` +
      `📅 *Fecha:* ${formData.date || 'Por confirmar'}\n` +
      `📍 *Ubicación:* ${formData.location || 'CDMX / Área Metropolitana'}\n` +
      `💰 *Presupuesto estimado:* ${formData.budget}\n` +
      `📝 *Detalles adicionales:* ${formData.notes || 'Ninguno'}`
    );

    // Call API (or fallback to WhatsApp directly)
    try {
      fetch('/api/quotes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      }).catch(() => {});
    } catch (err) {}

    window.open(`https://wa.me/5215555555555?text=${text}`, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="cotizar" className="py-24 relative bg-mesh-radial">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-champagne-300 text-champagne-800 text-xs font-bold uppercase tracking-wider font-display shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-champagne-600" />
                Cotización Personalizada
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-charcoal-950 tracking-tight leading-tight">
                Hagamos realidad el evento de tus <span className="gold-gradient-text">sueños</span>.
              </h2>
              <p className="text-charcoal-800/80 text-base sm:text-lg">
                Cuéntanos sobre tu celebración y prepararemos una propuesta visual a la medida con renders y cotización detallada en menos de 2 horas.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/80 border border-champagne-200/80 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-champagne-100 flex items-center justify-center text-champagne-700">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-charcoal-800/60 block font-medium">WhatsApp & Teléfono</span>
                  <span className="font-bold text-sm text-charcoal-900">+52 (55) 5555-5555</span>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/80 border border-champagne-200/80 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-champagne-100 flex items-center justify-center text-champagne-700">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-charcoal-800/60 block font-medium">Zona de Cobertura</span>
                  <span className="font-bold text-sm text-charcoal-900">CDMX, Estado de México y alrededores</span>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/80 border border-champagne-200/80 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-champagne-100 flex items-center justify-center text-champagne-700">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-charcoal-800/60 block font-medium">Horario de Atención</span>
                  <span className="font-bold text-sm text-charcoal-900">Lunes a Domingo: 8:00 AM - 9:00 PM</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-champagne-200/90 shadow-2xl relative">
              
              <h3 className="font-display font-bold text-2xl text-charcoal-950 mb-6">
                Completa los datos de tu evento
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-charcoal-900 block mb-1.5">
                      Tu Nombre Completo *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Ej. Carolina Herrera"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-champagne-200 focus:outline-none focus:border-champagne-500 focus:ring-1 focus:ring-champagne-500 text-xs sm:text-sm text-charcoal-900"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-charcoal-900 block mb-1.5">
                      Teléfono / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="Ej. 55 1234 5678"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-champagne-200 focus:outline-none focus:border-champagne-500 focus:ring-1 focus:ring-champagne-500 text-xs sm:text-sm text-charcoal-900"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-charcoal-900 block mb-1.5">
                      Tipo de Celebración
                    </label>
                    <select
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-champagne-200 focus:outline-none focus:border-champagne-500 focus:ring-1 focus:ring-champagne-500 text-xs sm:text-sm text-charcoal-900 bg-white"
                    >
                      <option value="Cumpleaños">Cumpleaños</option>
                      <option value="Boda">Boda</option>
                      <option value="Baby Shower / Gender Reveal">Baby Shower / Revelación</option>
                      <option value="Aniversario">Aniversario</option>
                      <option value="Graduación">Graduación</option>
                      <option value="Evento Corporativo">Evento Corporativo / B2B</option>
                      <option value="Otro">Otro Motivo</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-charcoal-900 block mb-1.5">
                      Fecha del Evento
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-champagne-200 focus:outline-none focus:border-champagne-500 focus:ring-1 focus:ring-champagne-500 text-xs sm:text-sm text-charcoal-900"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-charcoal-900 block mb-1.5">
                      Zona o Colonia de Entrega
                    </label>
                    <input
                      type="text"
                      name="location"
                      placeholder="Ej. Polanco, Roma Norte, Naucalpan"
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-champagne-200 focus:outline-none focus:border-champagne-500 focus:ring-1 focus:ring-champagne-500 text-xs sm:text-sm text-charcoal-900"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-charcoal-900 block mb-1.5">
                      Presupuesto Aproximado
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-champagne-200 focus:outline-none focus:border-champagne-500 focus:ring-1 focus:ring-champagne-500 text-xs sm:text-sm text-charcoal-900 bg-white"
                    >
                      <option value="Básico ($800 - $1,500)">Bouquet / Básico ($800 - $1,500)</option>
                      <option value="Medio ($1,500 - $3,500)">Medio / Arco Pequeño ($1,500 - $3,500)</option>
                      <option value="Premium ($3,500 - $7,000)">Premium / Arco Completo ($3,500 - $7,000)</option>
                      <option value="Gala / VIP (+$7,000)">Gala / Escenografía VIP (+$7,000)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-charcoal-900 block mb-1.5">
                    Ideas, Colores o Detalles Especiales
                  </label>
                  <textarea
                    rows={3}
                    name="notes"
                    placeholder="Cuéntanos colores de tu evento, temática o cualquier detalle especial..."
                    value={formData.notes}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-champagne-200 focus:outline-none focus:border-champagne-500 focus:ring-1 focus:ring-champagne-500 text-xs sm:text-sm text-charcoal-900 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-2xl font-bold text-sm text-white bg-charcoal-900 hover:bg-charcoal-950 shadow-xl shadow-charcoal-900/15 flex items-center justify-center gap-2.5 transition active:scale-98"
                >
                  <MessageCircle className="w-5 h-5 text-emerald-400" />
                  <span>Enviar y Recibir Cotización en WhatsApp</span>
                </button>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
