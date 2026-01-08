import React, { useState } from 'react';
import { Reveal } from './ui/Reveal';
import { ArrowUpRight, Instagram, Facebook, Mail } from 'lucide-react';
import LegalModal from './LegalModal';

const Footer: React.FC = () => {
  const [activeLegal, setActiveLegal] = useState<'impressum' | 'agb' | 'datenschutz' | null>(null);

  const legalContent = {
    impressum: (
      <>
        <h3 className="font-bold text-brand-dark text-lg">Angaben gemäß § 5 TMG</h3>
        <p>AB-Energies<br />Inhaber: Ozan Cihan<br />(Adresse bitte einfügen)<br />92637 Weiden in der Oberpfalz</p>
        
        <h3 className="font-bold text-brand-dark text-lg mt-4">Kontakt</h3>
        <p>Telefon: +49 176 616 440 48<br />E-Mail: kontakt@ab-energies.de</p>
        
        <h3 className="font-bold text-brand-dark text-lg mt-4">Umsatzsteuer-ID</h3>
        <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />(Bitte Steuernummer einfügen)</p>
        
        <h3 className="font-bold text-brand-dark text-lg mt-4">Redaktionell verantwortlich</h3>
        <p>Ozan Cihan<br />92637 Weiden</p>
        
        <h3 className="font-bold text-brand-dark text-lg mt-4">EU-Streitschlichtung</h3>
        <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr/.<br />Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
      </>
    ),
    agb: (
      <>
        <h3 className="font-bold text-brand-dark text-lg">1. Geltungsbereich</h3>
        <p>Für alle Lieferungen von AB-Energies an Verbraucher (§ 13 BGB) gelten diese Allgemeinen Geschäftsbedingungen (AGB).</p>
        
        <h3 className="font-bold text-brand-dark text-lg mt-4">2. Vertragspartner</h3>
        <p>Der Kaufvertrag kommt zustande mit AB-Energies, Inh. Ozan Cihan, 92637 Weiden.</p>
        
        <h3 className="font-bold text-brand-dark text-lg mt-4">3. Angebot und Vertragsschluss</h3>
        <p>Die Darstellung der Produkte im Online-Shop stellt kein rechtlich bindendes Angebot, sondern einen unverbindlichen Online-Katalog dar. Durch Anklicken des Bestellbuttons geben Sie eine verbindliche Bestellung der im Warenkorb enthaltenen Waren ab.</p>
        
        <h3 className="font-bold text-brand-dark text-lg mt-4">4. Eigentumsvorbehalt</h3>
        <p>Die Ware bleibt bis zur vollständigen Bezahlung unser Eigentum.</p>
        
        <h3 className="font-bold text-brand-dark text-lg mt-4">5. Transportschäden</h3>
        <p>Werden Waren mit offensichtlichen Transportschäden angeliefert, so reklamieren Sie solche Fehler bitte möglichst sofort beim Zusteller und nehmen Sie bitte unverzüglich Kontakt zu uns auf.</p>
      </>
    ),
    datenschutz: (
      <>
        <h3 className="font-bold text-brand-dark text-lg">1. Datenschutz auf einen Blick</h3>
        <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.</p>
        
        <h3 className="font-bold text-brand-dark text-lg mt-4">2. Erfassung von Daten</h3>
        <p>Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben oder per WhatsApp senden.</p>
        <p>Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).</p>
        
        <h3 className="font-bold text-brand-dark text-lg mt-4">3. Hosting</h3>
        <p>Wir hosten die Inhalte unserer Website bei einem externen Anbieter. Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert.</p>
      </>
    )
  };

  return (
    <>
      <footer id="kontakt" className="px-4 pb-4 md:px-6 md:pb-6 pt-12">
        <div className="bg-slate-950 rounded-3xl md:rounded-[3rem] px-6 py-16 md:px-20 md:py-24 text-white relative overflow-hidden flex flex-col justify-between min-h-[80vh]">
          
          {/* Subtle Grid Pattern Background */}
          <div className="absolute inset-0 opacity-[0.03]" 
               style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
          </div>

          {/* Top Content */}
          <div className="relative z-10">
              <Reveal>
                <div className="flex items-center gap-3 mb-12 opacity-60">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-xs font-bold tracking-[0.2em] uppercase">Status: Verfügbar für neue Projekte</span>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <h2 className="font-serif text-5xl md:text-8xl lg:text-9xl tracking-tight leading-[0.9] mb-12">
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-slate-500">Energie,</span>
                  <span className="block italic opacity-90">die bleibt.</span>
                </h2>
              </Reveal>
              
              <Reveal delay={0.4}>
                 <a 
                   href="https://wa.me/4917661644048"
                   className="group inline-flex items-center gap-4 text-2xl md:text-4xl font-light hover:text-yellow-400 transition-colors border-b border-white/20 pb-2 hover:border-yellow-400"
                 >
                   <span>Starten Sie Ihr Projekt</span>
                   <ArrowUpRight className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300" size={32} />
                 </a>
              </Reveal>
          </div>

          {/* Bottom Content */}
          <div className="relative z-10 mt-24 md:mt-0 pt-12 border-t border-white/10">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
                  
                  {/* Brand */}
                  <div className="md:col-span-4">
                      <h3 className="font-serif italic text-2xl mb-4">AB-Energies.</h3>
                      <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                          Ihr Partner für Photovoltaik in Weiden & der Oberpfalz. 
                          Qualität, die sich rechnet. Service, der begeistert.
                      </p>
                  </div>

                  {/* Kontakt */}
                  <div className="md:col-span-3">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-6">Kontakt</h4>
                      <div className="flex flex-col gap-3 text-sm font-medium">
                          <a href="tel:+4917661644048" className="hover:text-yellow-400 transition-colors">+49 176 616 440 48</a>
                          <a href="mailto:kontakt@ab-energies.de" className="hover:text-yellow-400 transition-colors">kontakt@ab-energies.de</a>
                          <p className="text-slate-400">92637 Weiden in der Oberpfalz</p>
                      </div>
                  </div>

                  {/* Links */}
                  <div className="md:col-span-3">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-6">Rechtliches</h4>
                      <div className="flex flex-col gap-3 text-sm font-medium text-slate-300">
                          <button onClick={() => setActiveLegal('impressum')} className="text-left hover:text-white transition-colors">Impressum</button>
                          <button onClick={() => setActiveLegal('datenschutz')} className="text-left hover:text-white transition-colors">Datenschutz</button>
                          <button onClick={() => setActiveLegal('agb')} className="text-left hover:text-white transition-colors">AGB</button>
                      </div>
                  </div>

                   {/* Socials */}
                   <div className="md:col-span-2 flex flex-col justify-between">
                      <div className="flex gap-4">
                          <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white hover:text-black transition-all">
                              <Instagram size={18} />
                          </a>
                          <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white hover:text-black transition-all">
                              <Facebook size={18} />
                          </a>
                           <a href="mailto:kontakt@ab-energies.de" className="p-2 bg-white/5 rounded-full hover:bg-white hover:text-black transition-all">
                              <Mail size={18} />
                          </a>
                      </div>
                      <div className="text-[10px] text-slate-600 uppercase tracking-widest mt-8 md:mt-0 text-right md:text-left">
                          © 2024
                      </div>
                  </div>
              </div>
          </div>

          {/* Background Gradient Spot */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-900/20 blur-[150px] rounded-full pointer-events-none mix-blend-screen"></div>
          <div className="absolute bottom-0 left-0 w-[800px] h-[400px] bg-orange-900/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen"></div>
        </div>
      </footer>

      {/* Legal Modals */}
      <LegalModal 
        isOpen={activeLegal === 'impressum'} 
        onClose={() => setActiveLegal(null)} 
        title="Impressum"
        content={legalContent.impressum}
      />
      <LegalModal 
        isOpen={activeLegal === 'agb'} 
        onClose={() => setActiveLegal(null)} 
        title="Allgemeine Geschäftsbedingungen"
        content={legalContent.agb}
      />
      <LegalModal 
        isOpen={activeLegal === 'datenschutz'} 
        onClose={() => setActiveLegal(null)} 
        title="Datenschutzerklärung"
        content={legalContent.datenschutz}
      />
    </>
  );
};

export default Footer;