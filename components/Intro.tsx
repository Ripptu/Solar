import React from 'react';
import { Reveal } from './ui/Reveal';
import { Zap, ShieldCheck, Clock } from 'lucide-react';

const Intro: React.FC = () => {
  return (
    <section id="vorteile" className="py-24 md:py-32 px-6 max-w-[1600px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 text-center md:text-left">
        
        {/* USP 1 */}
        <div className="flex flex-col items-center md:items-start p-6 rounded-2xl hover:bg-slate-50 transition-colors duration-500">
           <Reveal>
             <div className="w-12 h-12 bg-sky-100 text-sky-700 rounded-full flex items-center justify-center mb-6">
                <Clock size={24} />
             </div>
             <h3 className="text-xl font-serif italic font-bold mb-4">Sofort Verfügbar</h3>
             <p className="text-neutral-600 font-light leading-relaxed">
               Keine monatelangen Wartezeiten. Unsere Hardware liegt direkt in Weiden auf Lager. Wir starten, wenn Sie bereit sind.
             </p>
           </Reveal>
        </div>

        {/* USP 2 */}
        <div className="flex flex-col items-center md:items-start p-6 rounded-2xl hover:bg-slate-50 transition-colors duration-500">
           <Reveal delay={0.4}>
             <div className="w-12 h-12 bg-amber-100 text-amber-700 rounded-full flex items-center justify-center mb-6">
                <ShieldCheck size={24} />
             </div>
             <h3 className="text-xl font-serif italic font-bold mb-4">Premium Qualität</h3>
             <p className="text-neutral-600 font-light leading-relaxed">
               Wir verbauen ausschließlich PV-Module und Wechselrichter namhafter Hersteller für maximale Effizienz und Langlebigkeit.
             </p>
           </Reveal>
        </div>

        {/* USP 3 */}
        <div className="flex flex-col items-center md:items-start p-6 rounded-2xl hover:bg-slate-50 transition-colors duration-500">
           <Reveal delay={0.6}>
             <div className="w-12 h-12 bg-slate-100 text-slate-700 rounded-full flex items-center justify-center mb-6">
                <Zap size={24} />
             </div>
             <h3 className="text-xl font-serif italic font-bold mb-4">24h Reaktionszeit</h3>
             <p className="text-neutral-600 font-light leading-relaxed">
               Schnelligkeit ist unser Versprechen. Sie erhalten Beratungstermine und Kostenvoranschläge innerhalb eines Werktages.
             </p>
           </Reveal>
        </div>

      </div>
    </section>
  );
};

export default Intro;