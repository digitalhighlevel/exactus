import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const stats = [
  { value: '20k+', label: 'Entidades Auditadas' },
  { value: '4.9/5', label: 'Nível de Confiança' },
  { value: '10+', label: 'Anos de Mercado' },
  { value: 'CRC-SP', label: 'Registro Ativo' },
];

export default function Expertise() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={containerRef} id="expertise" className="relative py-32 md:py-48 bg-black overflow-hidden">
      <div className="relative z-10 section-padding">
        {/* Section Header */}
        <div className="grid lg:grid-cols-2 gap-20 mb-32 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-white/30" />
              <span className="font-heading text-[10px] uppercase tracking-[0.4em] text-white/50">Nossa Expertise</span>
            </div>
            <h2 className="font-heading text-4xl md:text-6xl font-black uppercase leading-[0.9] tracking-tighter">
              A Excelência Técnica <br />
              <span className="text-white/20">Encontra o Propósito</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            <p className="text-lg text-white/40 leading-relaxed font-light">
              Nascemos para atender a complexidade do Terceiro Setor e Entidades Confessionais.
              Nossa abordagem une rigor analítico com a sensibilidade necessária para
              instituições movidas por missões sociais.
            </p>
            <div className="flex gap-12">
              <div className="flex flex-col gap-1">
                <span className="text-white font-bold text-2xl tracking-tighter uppercase">CRC-SP</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/30">002500/04</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-white font-bold text-2xl tracking-tighter uppercase">ISO 9001</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/30">Qualidade</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats and Abstract Visual */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 grid grid-cols-2 gap-2 lg:gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-[#050505] border border-white/5 p-8 lg:p-12 flex flex-col justify-between aspect-square group"
              >
                <span className="text-4xl md:text-6xl font-black tracking-tighter text-white group-hover:text-white/80 transition-colors">
                  {stat.value}
                </span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-bold group-hover:text-white/50 transition-colors">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>

          <div className="lg:col-span-5 relative aspect-[4/5] overflow-hidden">
            <motion.div style={{ y: imageY }} className="absolute inset-x-0 -top-20 -bottom-20">
              <img
                src="/abstract-1.png"
                alt="Abstract transparency"
                className="w-full h-full object-cover grayscale opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
            </motion.div>

            <div className="absolute inset-0 flex items-center justify-center p-12">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="backdrop-blur-md bg-white/5 border border-white/10 p-12 w-full"
              >
                <span className="block font-heading text-[10px] uppercase tracking-[0.5em] text-white/50 mb-4 text-center">Referência</span>
                <p className="text-lg text-white font-light text-center italic">
                  "A transparência não é apenas um relatório, é a base da confiança que sustenta a fé no amanhã."
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white opacity-[0.02] rounded-full blur-[150px] pointer-events-none -translate-y-1/2 translate-x-1/2" />
    </section>
  );
}
