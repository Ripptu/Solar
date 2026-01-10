import React, { useState } from 'react';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Work from './components/Work';
import Expertise from './components/Expertise';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import WhatsAppBtn from './components/WhatsAppBtn';
import ContactModal from './components/ContactModal';

function App() {
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleOpenCatalog = () => {
    setIsCatalogOpen(true);
  };

  const handleOpenContact = () => {
    setIsContactModalOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-brand-dark selection:bg-brand-orange selection:text-white">
      <Hero 
        onOpenCatalog={handleOpenCatalog} 
        onOpenContact={handleOpenContact}
      />
      <Intro />
      <Expertise />
      <Work 
        isOpen={isCatalogOpen} 
        setIsOpen={setIsCatalogOpen} 
      />
      <Testimonials />
      <Footer />
      <WhatsAppBtn />
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </div>
  );
}

export default App;