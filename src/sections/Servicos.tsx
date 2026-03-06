import { motion } from 'framer-motion';
import { Shield, Search, FileCheck, Scale, Users, ArrowUpRight } from 'lucide-react';

const services = [
  {
    icon: Shield,
    title: 'Auditoria de Demonstrações Contábeis',
    description:
      'Exame independente e objetivo das demonstrações financeiras, emitindo opinião profissional sobre sua conformidade com as normas contábeis aplicáveis e adequada apresentação da posição patrimonial.',
  },
  {
    icon: Search,
    title: 'Avaliação de Controles Internos',
    description:
      'Análise crítica dos processos e procedimentos internos, identificando vulnerabilidades e oportunidades de melhoria para fortalecer a governança e mitigação de riscos.',
  },
  {
    icon: FileCheck,
    title: 'Due Diligence',
    description:
      'Investigação financeira aprofundada para operações de fusão, aquisição ou parceria, fornecendo informações críticas para decisões estratégicas com segurança jurídica.',
  },
  {
    icon: Scale,
    title: 'Compliance Especializado',
    description:
      'Avaliação de conformidade com legislações específicas do terceiro setor, incluindo CEBAS, OSCIP, e regulamentações do Ministério Público e órgãos de controle.',
  },
  {
    icon: Users,
    title: 'Capacitação',
    description:
      'Treinamentos customizados para conselhos, diretorias e equipes administrativas, elevando o nível de compreensão sobre gestão financeira e controles internos.',
  },
];

export default function Servicos() {
  return (
    <section id="servicos" className="relative py-24 md:py-32 bg-exactus-black">
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
              Nossas Soluções
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-exactus-white max-w-xl">
              Serviços Especializados
            </h2>
            <p className="text-exactus-body max-w-md">
              Soluções completas de auditoria e consultoria, desenvolvidas 
              especificamente para as necessidades do terceiro setor.
            </p>
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-exactus-card border border-white/10 p-8 hover:border-white/30 transition-all duration-500"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-12 h-12 border border-white/20 flex items-center justify-center group-hover:border-white/40 group-hover:bg-white/5 transition-all duration-300">
                    <Icon className="w-5 h-5 text-exactus-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-heading text-lg font-semibold text-exactus-white mb-4 group-hover:text-exactus-white transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-exactus-body text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Arrow Link */}
                <div className="flex items-center gap-2 text-exactus-muted group-hover:text-exactus-white transition-colors duration-300">
                  <span className="font-heading text-xs uppercase tracking-wider">
                    Saiba mais
                  </span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
