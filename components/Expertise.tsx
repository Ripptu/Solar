import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, ArrowRight } from 'lucide-react';
import { Reveal } from './ui/Reveal';

const services = [
  { 
      id: 1, 
      title: 'Express-Beratung (24h)', 
      description: "Zeit ist Geld. Wir garantieren eine fachliche Rückmeldung und Erstberatung innerhalb von 24 Stunden nach Ihrer Kontaktaufnahme. Ideal für eilige Projekte." 
  },
  { 
      id: 2, 
      title: 'Individuelle Kostenvoranschläge', 
      description: "Keine Pauschalpreise, die am Ende nicht halten. Wir erstellen verlässliche, auf Ihr Projekt zugeschnittene Angebote mit transparenten Kosten für Hardware und Montage." 
  },
  { 
      id: 3, 
      title: 'Regionale Logistik & Abholung', 
      description: "Unser Standort in 92637 Weiden ist Ihr Vorteil. Flexible Abholzeiten für Balkonkraftwerke und Module oder schnelle Lieferung in der Oberpfalz direkt ab Lager." 
  },
  { 
      id: 4, 
      title: 'Wartung & Nachrüstung', 
      description: "Auch nach dem Kauf sind wir für Sie da. Wir unterstützen bei der Erweiterung bestehender Anlagen, Speicher-Nachrüstungen und technischen Checks." 
  },
];

const Expertise: React.FC = () => {
  const [activeId, setActiveId] = useState<number | null>(1);

  const toggle = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section id="leistungen" className="py-24 md:py-32 px-6 md:px-12 max-w-[1600px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        
        {/* Left Side */}
        <div className="md:col-span-4 flex flex-col justify-between h-full">
          <Reveal>
            <div>
              <div className="inline-block px-3 py-1 mb-4 rounded-full bg-amber-100 text-amber-700 text-xs font-bold uppercase tracking-wider">
                  Service & Beratung
              </div>
              <h2 className="font-serif text-5xl italic text-brand-dark mb-8">Mehr als nur Hardware.</h2>
              <p className="text-neutral-500 mb-8 leading-relaxed">
                  AB-Energies steht für Geschwindigkeit und Handschlagqualität. Wir begleiten Sie von der ersten Idee bis zur fertigen Anlage – und darüber hinaus.
              </p>
            </div>
            <a href="#kontakt" className="hidden md:flex items-center gap-2 bg-brand-dark text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-slate-800 transition-colors w-fit shadow-lg shadow-slate-200">
              Beratung vereinbaren <ArrowRight size={16} />
            </a>
          </Reveal>
        </div>

        {/* Right Side - Accordion */}
        <div className="md:col-span-8">
          <div className="flex flex-col">
            {services.map((service) => (
              <div key={service.id} className="border-t border-neutral-200">
                <button 
                  onClick={() => toggle(service.id)}
                  className="w-full py-8 flex justify-between items-center text-left hover:opacity-70 transition-opacity"
                >
                  <span className={`text-xl md:text-2xl font-light transition-colors ${activeId === service.id ? 'text-brand-dark font-medium' : 'text-neutral-400'}`}>
                      {service.title}
                  </span>
                  <motion.div 
                    animate={{ rotate: activeId === service.id ? 45 : 0 }}
                    className={`p-2 border rounded-full transition-colors ${activeId === service.id ? 'border-brand-dark text-brand-dark bg-slate-50' : 'border-neutral-200 text-neutral-400'}`}
                  >
                    <Plus size={20} />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {activeId === service.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-8 text-neutral-600 font-light max-w-2xl text-lg pl-2 leading-relaxed">
                        {service.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
            <div className="border-t border-neutral-200"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;