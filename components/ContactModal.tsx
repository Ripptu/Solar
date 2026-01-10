import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle, Mail, Phone, ArrowRight } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        damping: 25, 
        stiffness: 300 
      }
    },
    exit: { opacity: 0, scale: 0.9, y: 20 }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1 }
    })
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          {/* Backdrop */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal */}
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative w-full max-w-lg bg-slate-900 border border-slate-800 rounded-[2.5rem] overflow-hidden shadow-2xl p-8 md:p-10"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 p-2 bg-slate-800 rounded-full text-slate-400 hover:bg-slate-700 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>

            <div className="text-center mb-8">
              <div className="inline-block px-4 py-1.5 rounded-full bg-brand-orange/10 text-brand-orange text-xs font-bold uppercase tracking-wider mb-4 border border-brand-orange/20">
                Schnelle Antwort garantiert
              </div>
              <h2 className="font-serif text-3xl md:text-4xl text-white mb-3">Kontakt aufnehmen</h2>
              <p className="text-slate-400 font-light">
                Wie möchten Sie uns am liebsten erreichen? <br/>Wir melden uns innerhalb von 24h.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {/* WhatsApp Option */}
              <motion.a
                custom={1}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                href="https://wa.me/4917661644048"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-5 rounded-2xl bg-[#25D366]/10 hover:bg-[#25D366] border border-[#25D366]/20 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#25D366]/10 group-hover:bg-white flex items-center justify-center text-[#25D366] shadow-sm transition-colors">
                    <MessageCircle size={24} fill="currentColor" className="text-[#25D366]" />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-white transition-colors">WhatsApp</div>
                    <div className="text-xs text-slate-400 group-hover:text-white/80 transition-colors">Direkter Chat (Empfohlen)</div>
                  </div>
                </div>
                <ArrowRight className="text-[#25D366] group-hover:text-white transition-colors transform group-hover:translate-x-1" />
              </motion.a>

              {/* Phone Option */}
              <motion.a
                custom={2}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                href="tel:+4917661644048"
                className="group flex items-center justify-between p-5 rounded-2xl bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-700 group-hover:bg-white flex items-center justify-center text-white group-hover:text-slate-900 shadow-sm transition-colors">
                    <Phone size={24} />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-white transition-colors">Anrufen</div>
                    <div className="text-xs text-slate-400 group-hover:text-slate-300 transition-colors">+49 176 616 440 48</div>
                  </div>
                </div>
                <ArrowRight className="text-slate-500 group-hover:text-white transition-colors transform group-hover:translate-x-1" />
              </motion.a>

              {/* Mail Option */}
              <motion.a
                custom={3}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                href="mailto:kontakt@ab-energies.de"
                className="group flex items-center justify-between p-5 rounded-2xl bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-700 group-hover:bg-white flex items-center justify-center text-white group-hover:text-slate-900 shadow-sm transition-colors">
                    <Mail size={24} />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-white transition-colors">E-Mail</div>
                    <div className="text-xs text-slate-400 group-hover:text-slate-300 transition-colors">kontakt@ab-energies.de</div>
                  </div>
                </div>
                <ArrowRight className="text-slate-500 group-hover:text-white transition-colors transform group-hover:translate-x-1" />
              </motion.a>
            </div>

            <motion.div 
              custom={4}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              className="mt-8 text-center text-xs text-slate-500"
            >
              Indem Sie Kontakt aufnehmen, stimmen Sie unseren Datenschutzbestimmungen zu.
            </motion.div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;