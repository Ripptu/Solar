import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    // Fix: Navbar nicht ausblenden, wenn das mobile Menü offen ist, sonst verschwindet der Schließen-Button
    if (latest > previous && latest > 150 && !mobileMenuOpen) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setScrolled(latest > 50);
  });

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  
  // Close menu when clicking a link
  const handleLinkClick = () => setMobileMenuOpen(false);

  return (
    <>
      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-12 py-4 md:py-6 transition-colors duration-500 ${scrolled || mobileMenuOpen ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}
      >
        <a href="#" className="flex items-center z-50" onClick={() => setMobileMenuOpen(false)}>
          <img 
            src="https://le-cdn.website-editor.net/2b6cc073cedf41d2812526c083b58a01/dms3rep/multi/opt/Original+auf+Transparenz-1920w.png" 
            alt="AB-Energies Logo" 
            className={`h-10 md:h-14 w-auto object-contain transition-all ${(!scrolled && !mobileMenuOpen) ? 'brightness-0 invert' : ''}`}
          />
        </a>
        
        {/* Desktop Menu */}
        <div className={`hidden md:flex gap-8 text-sm font-medium tracking-tight ${scrolled ? 'text-brand-dark' : 'text-white'}`}>
          <a href="#produkte" className="hover:opacity-60 transition-opacity">Produkte</a>
          <a href="#leistungen" className="hover:opacity-60 transition-opacity">Service</a>
          <a href="#vorteile" className="hover:opacity-60 transition-opacity">Vorteile</a>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <button 
            onClick={onOpenContact}
            className={`inline-block border px-5 py-2 rounded-full text-xs uppercase tracking-wider font-medium transition-colors duration-300 ${scrolled ? 'border-brand-dark/30 text-brand-dark hover:bg-brand-dark hover:text-white' : 'border-white/50 text-white hover:bg-white hover:text-brand-dark'}`}
          >
            Angebot anfordern
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden z-50">
          <button 
            onClick={toggleMenu} 
            className={`p-2 transition-colors ${scrolled || mobileMenuOpen ? 'text-brand-dark' : 'text-white'}`}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 pb-6 flex flex-col h-screen md:hidden"
          >
             <div className="flex flex-col gap-6 mt-8">
                <a 
                  href="#produkte" 
                  onClick={handleLinkClick}
                  className="text-3xl font-serif font-medium text-brand-dark border-b border-gray-100 pb-4 flex justify-between items-center"
                >
                  Produkte <ArrowRight size={20} className="text-gray-300" />
                </a>
                <a 
                  href="#leistungen" 
                  onClick={handleLinkClick}
                  className="text-3xl font-serif font-medium text-brand-dark border-b border-gray-100 pb-4 flex justify-between items-center"
                >
                  Service <ArrowRight size={20} className="text-gray-300" />
                </a>
                <a 
                  href="#vorteile" 
                  onClick={handleLinkClick}
                  className="text-3xl font-serif font-medium text-brand-dark border-b border-gray-100 pb-4 flex justify-between items-center"
                >
                  Vorteile <ArrowRight size={20} className="text-gray-300" />
                </a>
                <a 
                  href="#kontakt" 
                  onClick={handleLinkClick}
                  className="text-3xl font-serif font-medium text-brand-dark border-b border-gray-100 pb-4 flex justify-between items-center"
                >
                  Kontakt <ArrowRight size={20} className="text-gray-300" />
                </a>
             </div>

             <div className="mt-auto mb-8">
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">Ihr Partner in Weiden</p>
                <button 
                  onClick={() => {
                    handleLinkClick();
                    onOpenContact();
                  }}
                  className="w-full bg-brand-dark text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center"
                >
                  Kostenloses Angebot
                </button>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;