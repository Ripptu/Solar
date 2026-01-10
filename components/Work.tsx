import React from 'react';
import { Project } from '../types';
import { motion, AnimatePresence } from 'framer-motion';
import { Reveal } from './ui/Reveal';
import { Check, MessageCircle, Info, ChevronDown, ChevronUp, Package } from 'lucide-react';

const products: Project[] = [
  // 1. Einzelkomponenten
  {
    id: 1,
    title: "Canadian Solar CS6R - 435W",
    description: "BlackFrame Modul für höchste Ästhetik. Perfekt für Neubau und Nachrüstung.",
    badge: "Sofort Verfügbar",
    image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=1600&auto=format&fit=crop",
    specs: ["1722 x 1134 x 30 mm", "Gewicht: 21,3 kg", "BlackFrame Optik"],
  },
  {
    id: 2,
    title: "PV Montageset (Senkrecht)",
    description: "Universelles Montagesystem für sichersten Halt auf allen gängigen Schrägdächern.",
    badge: "Lagerware",
    image: "https://images.unsplash.com/photo-1596489394980-870ba934149c?q=80&w=1600&auto=format&fit=crop",
    specs: ["Für bis zu 4 Module", "Schwarz oder Silber", "Einfache Montage"],
  },
  
  // 2. Balkonkraftwerke
  {
    id: 3,
    title: "Balkonkraftwerk 800W Set",
    description: "Der Klassiker. Plug & Play Komplettset mit hochwertigem Mikrowechselrichter.",
    badge: "Bestseller",
    image: "https://higgsfield.ai/_next/image?url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_2zg6kRsQgLvpBAc5mmGVtMaqZi0%2F9698d5ef-fb0d-479c-84f1-35d8f8a351d9.png&w=1080&q=75",
    specs: ["2x 440W BlackFrame", "Hoymiles Mikrowechselrichter", "Inkl. Schuko-Kabel"],
  },
  {
    id: 4,
    title: "Anker 2,7KW Solix Set",
    description: "Maximale Balkon-Power. Hochleistungs-Set inklusive modernem Batteriespeicher.",
    badge: "Premium Set",
    image: "https://plus.unsplash.com/premium_photo-1679917152960-b9e64d2b2876?q=80&w=1600&auto=format&fit=crop",
    specs: ["Bis 1820Wp Modulleistung", "Inkl. Solarspeicher", "Smarte App-Steuerung"],
  },

  // 3. Speicher
  {
    id: 5,
    title: "Growatt NOAH 2000 Speicher",
    description: "Robuster Speicher speziell für Balkonkraftwerke. Wasserdicht und extrem langlebig.",
    badge: "IP66 Schutzklasse",
    image: "https://higgsfield.ai/_next/image?url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_2zg6kRsQgLvpBAc5mmGVtMaqZi0%2F7eba7b31-7ea4-40c7-9404-e87b0e6d4e69.png&w=1080&q=75",
    specs: ["Bis 8kWh erweiterbar", "IP66 Wetterfest", "Betrieb bis -20°C"],
  },
  {
    id: 6,
    title: "Ecoflow Stream Pro Speicher",
    description: "Die flexible Speicherlösung, kompatibel mit fast allen Mikrowechselrichtern am Markt.",
    badge: "Hohe Kompatibilität",
    image: "https://higgsfield.ai/_next/image?url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_2zg6kRsQgLvpBAc5mmGVtMaqZi0%2F7621378f-3807-4d80-bd26-3a4937f450a8.png&w=1080&q=75",
    specs: ["1,9kWh - 11,5kWh", "2300W AC Ausgang", "Smart Home Ready"],
  },

  // 4. Großanlagen
  {
    id: 7,
    title: "5KW PV-Komplettanlage",
    description: "Das Rundum-Sorglos-Paket für Eigenheime. Inklusive Speicher und Montagesystem.",
    badge: "Großanlagen-Paket",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1600&auto=format&fit=crop",
    specs: ["12x JA Solar 440W", "Speicher (BYD/Sungrow)", "Inkl. Montagesystem"],
  },
];

interface WorkProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Work: React.FC<WorkProps> = ({ isOpen, setIsOpen }) => {
  return (
    <section id="produkte" className="py-20 px-6 md:px-12 max-w-[1600px] mx-auto bg-slate-900 rounded-[3rem] my-12 transition-all duration-500 border border-white/5">
      <div className="mb-10 text-center">
         <Reveal>
            <div className="inline-block px-3 py-1 mb-4 rounded-full bg-brand-orange/10 text-brand-orange text-xs font-bold uppercase tracking-wider border border-brand-orange/20">
               Katalog
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">Unser Sortiment</h2>
            <p className="text-slate-400 font-light max-w-xl mx-auto mb-8">
                Hochwertige Komponenten und Komplettsysteme. Lagernd in Weiden i.d.Opf. und bereit für Ihr Projekt.
            </p>
            
            {/* Toggle Button */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`group flex items-center gap-3 px-8 py-4 rounded-full text-lg font-bold transition-all shadow-xl ${
                    isOpen 
                    ? 'bg-slate-800 text-white hover:bg-slate-700' 
                    : 'bg-brand-orange text-white hover:bg-brand-orange-hover shadow-brand-orange/20'
                } mx-auto`}
            >
                {isOpen ? (
                    <>
                        Katalog schließen <ChevronUp size={20} />
                    </>
                ) : (
                    <>
                        <Package size={20} /> Produkte anzeigen <ChevronDown size={20} className="group-hover:translate-y-1 transition-transform" />
                    </>
                )}
            </motion.button>
         </Reveal>
      </div>

      <AnimatePresence>
        {isOpen && (
            <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="overflow-hidden"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8 pb-8 px-4">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                    
                    {/* Custom Card for Custom Request */}
                    <Reveal>
                        <div className="h-full min-h-[500px] bg-gradient-to-br from-brand-orange to-red-600 text-white rounded-3xl p-8 flex flex-col items-center justify-center text-center relative overflow-hidden group border border-white/10">
                            <div className="absolute inset-0 bg-black/10 z-0"></div>
                            <div className="relative z-10 p-4">
                                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                                    <Info size={32} />
                                </div>
                                <h3 className="font-serif text-3xl mb-4">Individuelle Anfrage?</h3>
                                <p className="text-white/80 mb-8 font-light">
                                    Sie benötigen eine spezielle Konfiguration oder größere Mengen? Kontaktieren Sie uns für ein maßgeschneidertes Angebot.
                                </p>
                                <a 
                                    href="https://wa.me/4917661644048"
                                    className="inline-flex items-center gap-2 bg-white text-brand-orange font-bold px-8 py-4 rounded-xl hover:bg-slate-100 transition-colors"
                                >
                                    <MessageCircle size={20} />
                                    Direkt anfragen
                                </a>
                            </div>
                        </div>
                    </Reveal>
                </div>

                <div className="flex justify-center pb-8">
                    <button 
                        onClick={() => setIsOpen(false)}
                        className="text-slate-500 hover:text-white text-sm font-medium uppercase tracking-widest flex items-center gap-2 transition-colors"
                    >
                        Weniger anzeigen <ChevronUp size={16} />
                    </button>
                </div>
            </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const ProductCard: React.FC<{ product: Project }> = ({ product }) => {
  return (
    <Reveal>
      <div className="group flex flex-col h-full bg-slate-950 rounded-3xl overflow-hidden border border-slate-800 shadow-lg shadow-black/50 hover:shadow-2xl hover:border-slate-700 transition-all duration-500">
        
        {/* Image Area */}
        <div className="relative w-full aspect-[4/3] overflow-hidden bg-slate-900">
          <img 
            src={product.image} 
            alt={product.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
            loading="lazy"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-brand-dark/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg border border-white/10">
                {product.badge}
            </span>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-8 flex flex-col flex-grow">
            <h3 className="font-serif text-xl md:text-2xl text-white mb-3 leading-tight">{product.title}</h3>
            <p className="text-sm text-slate-400 font-light leading-relaxed mb-6">
                {product.description}
            </p>

            {/* Specs List */}
            <div className="mt-auto mb-8 space-y-3 bg-slate-900/50 p-4 rounded-2xl border border-slate-800">
                {product.specs.map((spec, i) => (
                    <div key={i} className="flex items-start gap-3 text-xs md:text-sm font-medium text-slate-300">
                        <div className="mt-0.5 w-4 h-4 rounded-full bg-brand-orange/20 text-brand-orange flex items-center justify-center shrink-0">
                            <Check size={10} strokeWidth={3} />
                        </div>
                        {spec}
                    </div>
                ))}
            </div>

            {/* CTA Button */}
            <a 
                href={`https://wa.me/4917661644048?text=Hallo,%20ich%20habe%20eine%20Preisanfrage%20zu:%20${encodeURIComponent(product.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-brand-orange hover:bg-brand-orange-hover text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-md shadow-orange-900/20 group-hover:-translate-y-1 duration-300 border border-brand-orange"
            >
                <MessageCircle size={20} fill="white" className="text-white" />
                Preisanfrage
            </a>
        </div>
      </div>
    </Reveal>
  );
};

export default Work;