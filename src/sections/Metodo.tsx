import { motion } from 'framer-motion';

const pillars = [
  {
    number: '01',
    title: 'Custo-Benefício',
    description:
      'Atender as expectativas financeiras da sua entidade é nossa prioridade. Desenvolvemos soluções de auditoria que maximizam o valor entregue, otimizando recursos sem comprometer a qualidade e rigor técnico necessários.',
  },
  {
    number: '02',
    title: 'Uniformidade',
    description:
      'Execução consistente e padronizada em todos os processos. Nossa metodologia garante que cada auditoria siga os mesmos padrões de excelência, independentemente do porte ou complexidade da entidade atendida.',
  },
  {
    number: '03',
    title: 'Comunicação Clara',
    description:
      'Você entende exatamente o que está acontecendo em cada etapa. ElimINAMOS o jargão técnico excessivo, apresentando findings e recomendações de forma acessível, para que a gestão possa tomar decisões informadas.',
  },
  {
    number: '04',
    title: 'Agilidade',
    description:
      'Redução do tempo de auditoria sem sacrificar qualidade. Nossos processos otimizados e uso estratégico de tecnologia permitem entregar resultados mais rapidamente, minimizando a interrupção das operações da sua entidade.',
  },
];

export default function Metodo() {
  return (
    <section id="metodo" className="relative py-24 md:py-32 bg-exactus-dark">
      {/* Subtle noise overlay */}
      <div className="absolute inset-0 noise-overlay pointer-events-none" />

      <div className="relative z-10 section-padding">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-[1px] bg-exactus-white" />
            <span className="font-heading text-xs uppercase tracking-[0.2em] text-exactus-body">
              Nossa Metodologia
            </span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-exactus-white max-w-2xl">
            O Método Exactus
          </h2>
        </motion.div>

        {/* Pillars List */}
        <div className="space-y-0">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{
                paddingLeft: typeof window !== 'undefined' && window.innerWidth < 768 ? 24 : 48,
                paddingRight: typeof window !== 'undefined' && window.innerWidth < 768 ? 24 : 48
              }}
              className="group border-t border-white/10 py-12 md:py-16 px-4 md:px-8 hover:bg-white/[0.04] transition-all duration-500 cursor-pointer relative"
            >
              <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
                {/* Large Number */}
                <div className="md:col-span-2">
                  <motion.span
                    variants={{
                      hover: { scale: 1.05, opacity: 0.3 }
                    }}
                    transition={{ duration: 0.5 }}
                    className="block font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-white/5 group-hover:text-white/20 transition-all duration-500"
                  >
                    {pillar.number}
                  </motion.span>
                </div>

                {/* Title */}
                <div className="md:col-span-3 flex items-center gap-4">
                  <h3 className="font-heading text-xl md:text-2xl font-semibold text-exactus-white group-hover:text-white transition-colors duration-300">
                    {pillar.title}
                  </h3>
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    className="w-2 h-2 rounded-full bg-white"
                  />
                </div>

                {/* Description */}
                <div className="md:col-span-7">
                  <p className="text-exactus-body leading-relaxed group-hover:text-white/90 transition-colors duration-500 max-w-2xl font-light">
                    {pillar.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Bottom Border */}
          <div className="border-t border-white/10" />
        </div>
      </div>
    </section>
  );
}
