import React from 'react';
import { motion } from 'framer-motion';
import { TestimonialsColumn, Testimonial } from './ui/TestimonialsColumn';
import { Star } from 'lucide-react';

const testimonials: Testimonial[] = [
  {
    text: "Endlich ein Handwerker, der hält was er verspricht. Die Anlage war in 2 Tagen auf dem Dach. Super Beratung von Herrn Cihan.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=150&h=150",
    name: "Markus Weber",
    role: "Hausbesitzer, Weiden",
  },
  {
    text: "Habe mir ein Balkonkraftwerk abgeholt. Wurde alles genau erklärt, Aufbau war kinderleicht. Produziert seit Tag 1 Strom!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fit=crop&w=150&h=150",
    name: "Sabine K.",
    role: "Mieterin, Amberg",
  },
  {
    text: "Top Preis-Leistung beim Speicher-Nachrüsten. Die Jungs haben sehr sauber gearbeitet und alles ordentlich hinterlassen.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&w=150&h=150",
    name: "Andreas Hofer",
    role: "Schwandorf",
  },
  {
    text: "Die 30kWp Anlage auf unserer Halle läuft perfekt. Von der Planung bis zur Anmeldung hat alles reibungslos funktioniert.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fit=crop&w=150&h=150",
    name: "Thomas Müller",
    role: "Gewerbe, Neustadt",
  },
  {
    text: "Super Beratung, sehr geduldig bei all meinen Fragen zur Förderung. Man merkt die Erfahrung.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?fit=crop&w=150&h=150",
    name: "Julia Schneider",
    role: "Einfamilienhaus, Weiden",
  },
  {
    text: "Schnelle Reaktion auf WhatsApp, Angebot kam am selben Tag. Die Montage erfolgte zwei Wochen später. Top!",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?fit=crop&w=150&h=150",
    name: "Michael Bauer",
    role: "Vohenstrauß",
  },
  {
    text: "Regionale Nähe war mir wichtig. AB-Energies hat nicht enttäuscht. Persönlicher Ansprechpartner vor Ort.",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fit=crop&w=150&h=150",
    name: "Peter Klein",
    role: "Weiden i.d.Opf.",
  },
  {
    text: "Das Balkonkraftwerk produziert fleißig. Klare Empfehlung für jeden, der Stromkosten sparen will.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?fit=crop&w=150&h=150",
    name: "Sarah Lang",
    role: "Tirschenreuth",
  },
  {
    text: "Sehr professionelle Abwicklung. Die Komponenten sind hochwertig und die App zur Überwachung funktioniert super.",
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?fit=crop&w=150&h=150",
    name: "Christian Wolf",
    role: "Grafenwöhr",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const Testimonials = () => {
  return (
    <section className="bg-slate-50 py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-sky-100/50 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="container px-6 max-w-[1600px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[640px] mx-auto text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <div className="border border-brand-dark/10 bg-white py-1.5 px-5 rounded-full text-sm font-medium uppercase tracking-wider text-brand-dark/70 shadow-sm">
              Kundenstimmen
            </div>
          </div>

          <div className="flex gap-1 mb-6 text-yellow-400">
             <Star fill="currentColor" size={20} />
             <Star fill="currentColor" size={20} />
             <Star fill="currentColor" size={20} />
             <Star fill="currentColor" size={20} />
             <Star fill="currentColor" size={20} />
          </div>

          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-brand-dark mb-6">
            Was Kunden über uns sagen
          </h2>
          <p className="text-slate-500 text-lg font-light leading-relaxed">
            Ehrliche Meinungen aus der Region. Wir sind stolz auf das Vertrauen unserer Kunden aus Weiden und der Oberpfalz.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] max-h-[700px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={45} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={55} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={48} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;