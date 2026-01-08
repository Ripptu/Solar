import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Truck, ShieldCheck, ThumbsUp } from 'lucide-react';

interface HeroProps {
  onOpenCatalog: () => void;
  onOpenContact: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenCatalog, onOpenContact }) => {
  return (
    <section className="relative pt-8 md:pt-12 pb-12 px-4 md:px-6 max-w-[1600px] mx-auto">
      
      {/* Main Hero Card */}
      <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden min-h-[75vh] md:min-h-[85vh] flex items-center shadow-2xl shadow-slate-200">
        
        {/* Background Container (Static, no parallax) */}
        <div className="absolute inset-0 z-0 w-full h-full">
          <img 
            src="https://img.aachener-zeitung.de/public/leben/geld-recht/53qyw2-balkonsolaranlage/alternates/SIXTEEN_NINE_1920/Balkonsolaranlage" 
            alt="Modernes Haus mit Photovoltaik" 
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay Gradient for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-20 w-full px-6 md:px-16 pt-10 md:pt-0">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            {/* Badge / Tagline */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-bold tracking-wide uppercase mb-8">
              <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></span>
              Verfügbar in Weiden & Umgebung
            </div>

            {/* Headline matching the style */}
            <h1 className="font-sans font-extrabold text-5xl md:text-7xl lg:text-8xl text-white leading-[1.1] mb-8 tracking-tight">
              Unabhängigkeit, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
                die sich auszahlt.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-slate-200 font-medium leading-relaxed max-w-xl mb-10">
              Ihr Photovoltaik-Komplettsystem inkl. Montage und Anmeldung. 
              Starten Sie jetzt in eine grüne Zukunft und sparen Sie bis zu <span className="text-white font-bold underline decoration-[#25D366] underline-offset-4">2.400€ pro Jahr</span>.
            </p>

            {/* Green CTA Button (21energy style) */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={onOpenContact}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto bg-[#00D06C] hover:bg-[#00b35c] text-slate-900 text-lg font-bold py-4 px-8 rounded-full flex items-center justify-center gap-3 transition-colors shadow-[0_0_30px_rgba(0,208,108,0.4)] cursor-pointer"
                >
                  Jetzt Angebot anfordern <ArrowRight size={22} />
                </motion.div>
              </button>
              
              <a 
                href="#produkte" 
                onClick={(e) => {
                  // Ensure catalog is open before navigation
                  onOpenCatalog();
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.15)" }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto bg-white/10 backdrop-blur-sm text-white text-lg font-bold py-4 px-8 rounded-full flex items-center justify-center gap-3 transition-all border border-white/20 h-full cursor-pointer"
                >
                  Produkte ansehen
                </motion.div>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Floating Seal Badge (Right Bottom) */}
        <div className="absolute bottom-8 right-8 hidden lg:block animate-[spin_20s_linear_infinite]">
            <div className="relative w-32 h-32 md:w-40 md:h-40">
                <svg viewBox="0 0 100 100" width="100%" height="100%">
                  <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                  <text fontSize="11.5" fontWeight="bold" fill="white" letterSpacing="2">
                    <textPath xlinkHref="#circlePath">
                      ★ REGIONALER MEISTERBETRIEB ★ SEIT 2024
                    </textPath>
                  </text>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-3xl font-bold text-[#00D06C]">AB</span>
                </div>
            </div>
        </div>
      </div>

      {/* Bottom USP Bar (Grey Bar) */}
      <div className="mt-4 bg-slate-100 rounded-[2rem] py-6 px-4 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 items-center justify-items-center md:justify-items-start text-center md:text-left">
            
            {/* Trust Item 1 */}
            <div className="flex flex-col md:flex-row items-center gap-3">
                <div className="flex gap-0.5 text-[#00b67a]">
                    <Star size={20} fill="currentColor" />
                    <Star size={20} fill="currentColor" />
                    <Star size={20} fill="currentColor" />
                    <Star size={20} fill="currentColor" />
                    <Star size={20} fill="currentColor" />
                </div>
                <div className="text-sm">
                    <span className="font-bold text-slate-900 block">Hervorragend</span>
                    <span className="text-slate-500">4.9 von 5 auf Google</span>
                </div>
            </div>

            {/* Trust Item 2 */}
            <div className="flex flex-col md:flex-row items-center gap-3">
                <ThumbsUp size={24} className="text-slate-900" strokeWidth={1.5} />
                <div className="text-sm">
                    <span className="font-bold text-slate-900 block">100+ Projekte</span>
                    <span className="text-slate-500">Zufriedene Kunden</span>
                </div>
            </div>

            {/* Trust Item 3 */}
            <div className="flex flex-col md:flex-row items-center gap-3">
                <Truck size={24} className="text-slate-900" strokeWidth={1.5} />
                <div className="text-sm">
                    <span className="font-bold text-slate-900 block">Kostenlose Lieferung</span>
                    <span className="text-slate-500">In Weiden & Umgebung</span>
                </div>
            </div>

            {/* Trust Item 4 */}
            <div className="flex flex-col md:flex-row items-center gap-3">
                <ShieldCheck size={24} className="text-slate-900" strokeWidth={1.5} />
                <div className="text-sm">
                    <span className="font-bold text-slate-900 block">30 Jahre Garantie</span>
                    <span className="text-slate-500">Auf PV-Module</span>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;