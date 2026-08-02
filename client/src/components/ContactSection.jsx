import React, { useState } from 'react';
import { Phone, MapPin, Clock, MessageCircle } from 'lucide-react';

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hola Chilpayate Balloons,\n\n` +
      `Me gustaría solicitar una cotización para un evento:\n` +
      `• Nombre: ${formData.name}\n` +
      `• Teléfono: ${formData.phone}\n` +
      `• Tipo de Evento: ${formData.eventType}\n` +
      `• Fecha: ${formData.date || 'Por confirmar'}\n` +
      `• Ubicación: ${formData.location || 'CDMX'}\n` +
      `• Rango de Presupuesto: ${formData.budget}\n` +
      `• Detalles: ${formData.notes || 'Ninguno adicional'}\n\n` +
      `Quedo atento a su respuesta.`
    );

    try {
      fetch('/api/quotes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      }).catch(() => {});
    } catch (err) {}

    window.open(`https://wa.me/5215555555555?text=${text}`, '_blank');
  };

  return (
    <section id="cotizar" className="py-24 relative bg-white border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500 font-sans block">
                Contacto Directo
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-5xl text-charcoal-950 tracking-tight">
                Cotiza tu Evento
              </h2>
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                Cuéntanos sobre tu celebración y prepararemos una propuesta personalizada y presupuesto detallado.
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-stone-200">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-[#F9F7F4] border border-stone-200">
                <Phone className="w-4 h-4 text-stone-700" />
                <div>
                  <span className="text-[11px] text-stone-500 block">WhatsApp y Atención</span>
                  <span className="font-semibold text-xs text-charcoal-950">+52 (55) 5555-5555</span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-xl bg-[#F9F7F4] border border-stone-200">
                <MapPin className="w-4 h-4 text-stone-700" />
                <div>
                  <span className="text-[11px] text-stone-500 block">Cobertura de Entrega</span>
                  <span className="font-semibold text-xs text-charcoal-950">Ciudad de México y Área Metropolitana</span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-xl bg-[#F9F7F4] border border-stone-200">
                <Clock className="w-4 h-4 text-stone-700" />
                <div>
                  <span className="text-[11px] text-stone-500 block">Horario</span>
                  <span className="font-semibold text-xs text-charcoal-950">Lunes a Domingo: 8:00 a 20:00 hrs</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-[#F9F7F4] border border-stone-200">
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-stone-700 block mb-1.5">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Tu nombre"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-stone-300 bg-white text-xs sm:text-sm text-charcoal-950 focus:outline-none focus:border-charcoal-950"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-stone-700 block mb-1.5">
                      Teléfono / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="10 dígitos"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-stone-300 bg-white text-xs sm:text-sm text-charcoal-950 focus:outline-none focus:border-charcoal-950"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-stone-700 block mb-1.5">
                      Tipo de Evento
                    </label>
                    <select
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-stone-300 bg-white text-xs sm:text-sm text-charcoal-950 focus:outline-none focus:border-charcoal-950"
                    >
                      <option value="Cumpleaños">Cumpleaños</option>
                      <option value="Boda">Boda</option>
                      <option value="Baby Shower / Revelación">Baby Shower / Revelación</option>
                      <option value="Aniversario">Aniversario</option>
                      <option value="Graduación">Graduación</option>
                      <option value="Corporativo">Evento Corporativo</option>
                      <option value="Otro">Otro</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-stone-700 block mb-1.5">
                      Fecha del Evento
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-stone-300 bg-white text-xs sm:text-sm text-charcoal-950 focus:outline-none focus:border-charcoal-950"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-stone-700 block mb-1.5">
                      Zona o Colonia
                    </label>
                    <input
                      type="text"
                      name="location"
                      placeholder="Ej. Polanco, Roma, Naucalpan"
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-stone-300 bg-white text-xs sm:text-sm text-charcoal-950 focus:outline-none focus:border-charcoal-950"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-stone-700 block mb-1.5">
                      Rango de Presupuesto
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-stone-300 bg-white text-xs sm:text-sm text-charcoal-950 focus:outline-none focus:border-charcoal-950"
                    >
                      <option value="Básico ($800 - $1,500)">Bouquet individual ($800 - $1,500)</option>
                      <option value="Medio ($1,500 - $3,500)">Composición media ($1,500 - $3,500)</option>
                      <option value="Completo ($3,500 - $7,000)">Arco orgánico ($3,500 - $7,000)</option>
                      <option value="Escenografía (+$7,000)">Escenografía completa (+$7,000)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-stone-700 block mb-1.5">
                    Detalles o Notas
                  </label>
                  <textarea
                    rows={3}
                    name="notes"
                    placeholder="Colores, temática o requerimientos de instalación..."
                    value={formData.notes}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 bg-white text-xs sm:text-sm text-charcoal-950 focus:outline-none focus:border-charcoal-950 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl font-semibold text-xs uppercase tracking-wider text-white bg-charcoal-950 hover:bg-stone-800 transition flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Enviar Cotización por WhatsApp</span>
                </button>

              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
