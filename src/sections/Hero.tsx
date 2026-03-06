import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const scrollToContact = () => {
    const element = document.querySelector('#contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={containerRef} className="relative h-[120vh] lg:h-[150vh] flex flex-col justify-center lg:justify-end overflow-hidden pb-12 md:pb-32 lg:pb-40">
      {/* Cinematic Background Layer */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 z-0"
      >
        <img
          src="/hero-new.png"
          alt="Modern Architecture"
          className="w-full h-full object-cover object-[center_80%] grayscale brightness-[0.4] lg:brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black" />
      </motion.div>

      {/* Kinetic Typography Layer */}
      <motion.div
        style={{ opacity, y: contentY }}
        className="relative z-10 section-padding w-full pt-20 lg:pt-0"
      >
        <div className="flex flex-col gap-4 mb-10 md:mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-3 md:gap-4"
          >
            <span className="h-[1px] w-8 md:w-12 bg-white/60" />
            <span className="font-heading text-[9px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.5em] text-white/70">
              Exactus Auditores Independentes
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="font-heading text-[14vw] sm:text-[12vw] lg:text-[10vw] font-black leading-[0.8] uppercase tracking-tighter"
          >
            Segurança <br />
            <span className="text-white/10 outline-text inline-block mt-2">Absoluta</span>
          </motion.h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 md:gap-12 items-end">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-base md:text-xl text-white/50 leading-relaxed max-w-xl font-light text-balance"
          >
            Auditoria especializada para Entidades Confessionais e Terceiro Setor.
            Transformamos transparência em valor estratégico para sua instituição.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex justify-start lg:justify-end"
          >
            <button
              onClick={scrollToContact}
              className="btn-primary w-full sm:w-auto text-center"
            >
              Iniciar Auditoria
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* Decorative vertical lines */}
      <div className="absolute inset-0 vertical-lines opacity-10 pointer-events-none" />

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[1px] h-12 bg-gradient-to-b from-white to-transparent"
      />
    </section>
  );
}
