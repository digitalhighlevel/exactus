import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'Qual o prazo médio para conclusão de uma auditoria?',
    answer:
      'O prazo varia conforme o porte da entidade e a complexidade das operações. Para organizações de pequeno porte, o processo pode levar de 2 a 4 semanas. Entidades de médio e grande porte geralmente requerem de 1 a 3 meses. Durante nossa proposta, apresentamos um cronograma detalhado e realista, considerando as particularidades do seu caso.',
  },
  {
    question: 'A auditoria da Exactus atende aos requisitos do CEBAS?',
    answer:
      'Sim. Nossa metodologia foi desenvolvida especificamente para atender aos requisitos de auditoria exigidos para manutenção e renovação do CEBAS (Certificado de Entidade Beneficente de Assistência Social). O relatório de auditoria emitido pela Exactus contempla todos os elementos necessários para comprovação perante o Ministério da Cidadania e órgãos de controle.',
  },
  {
    question: 'Como é estruturado o investimento nos serviços de auditoria?',
    answer:
      'O valor do investimento é determinado após análise das características da entidade, incluindo volume de transações, complexidade operacional e escopo da auditoria necessária. Trabalhamos com propostas transparentes, sem custos ocultos, e oferecemos condições de pagamento que respeitam o fluxo de caixa das organizações do terceiro setor.',
  },
  {
    question: 'A Exactus atende entidades de qualquer localidade?',
    answer:
      'Atuamos em todo o território nacional. Para entidades fora de Belo Horizonte/MG, utilizamos uma combinação de trabalho remoto e deslocamentos estratégicos da equipe, otimizando custos sem comprometer a qualidade do atendimento. Nossa infraestrutura tecnológica permite colaboração eficiente independentemente da localização geográfica.',
  },
  {
    question: 'Qual a diferença entre auditoria externa e revisão limitada?',
    answer:
      'A auditoria externa (ou auditoria completa) envolve a obtenção de evidências suficientes e apropriadas para expressar uma opinião sobre as demonstrações financeiras como um todo. A revisão limitada, por outro lado, proporciona um nível menor de segurança, baseando-se principalmente em investigações e análises, sem a extensão de testes de auditoria. A escolha depende dos requisitos regulatórios e das necessidades específicas da entidade.',
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="relative py-24 md:py-32 bg-exactus-dark">
      {/* Subtle noise overlay */}
      <div className="absolute inset-0 noise-overlay pointer-events-none" />

      <div className="relative z-10 section-padding">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left Column - Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4"
          >
            <div className="lg:sticky lg:top-32">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-[1px] bg-exactus-white" />
                <span className="font-heading text-xs uppercase tracking-[0.2em] text-exactus-body">
                  Dúvidas Frequentes
                </span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-semibold text-exactus-white mb-6">
                Perguntas e Respostas
              </h2>
              <p className="text-exactus-body leading-relaxed">
                Encontre respostas para as dúvidas mais comuns sobre nossos
                serviços de auditoria e como podemos ajudar sua entidade.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-8"
          >
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-b border-white/10"
                >
                  <AccordionTrigger className="py-6 text-left font-heading text-lg font-semibold text-exactus-white hover:text-exactus-white hover:no-underline transition-colors duration-300">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-exactus-body leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
