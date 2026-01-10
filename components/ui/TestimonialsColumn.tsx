import React from "react";
import { motion } from "framer-motion";

export interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
}

interface TestimonialsColumnProps {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}

export const TestimonialsColumn = (props: TestimonialsColumnProps) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[...new Array(2)].map((_, index) => (
          <React.Fragment key={index}>
            {props.testimonials.map(({ text, image, name, role }, i) => (
              <div className="p-8 rounded-3xl border border-slate-800 bg-slate-900/50 shadow-lg shadow-black/20 max-w-xs w-full backdrop-blur-sm" key={i}>
                <div className="text-slate-300 font-light leading-relaxed text-sm">"{text}"</div>
                <div className="flex items-center gap-3 mt-6">
                  <img
                    width={40}
                    height={40}
                    src={image}
                    alt={name}
                    className="h-10 w-10 rounded-full object-cover ring-2 ring-slate-800"
                    loading="lazy"
                  />
                  <div className="flex flex-col">
                    <div className="font-serif font-bold text-white tracking-tight leading-5">{name}</div>
                    <div className="leading-5 text-xs text-brand-orange font-medium uppercase tracking-wider mt-0.5">{role}</div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};