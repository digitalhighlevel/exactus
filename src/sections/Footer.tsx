import { motion } from 'framer-motion';
import { ArrowRight, Mail, Phone, MapPin, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  const scrollToContact = () => {
    const element = document.querySelector('#contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contato" className="relative bg-exactus-black overflow-hidden">
      {/* CTA Section */}
      <section className="relative py-24 md:py-32 border-b border-white/10">
        {/* Large Watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <span className="font-heading text-[20vw] font-bold text-white/[0.02] whitespace-nowrap select-none">
            EXACTUS
          </span>
        </div>

        <div className="relative z-10 section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-exactus-white" />
              <span className="font-heading text-xs uppercase tracking-[0.2em] text-exactus-body">
                Próximo Passo
              </span>
              <div className="w-12 h-[1px] bg-exactus-white" />
            </div>

            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-exactus-white mb-8 leading-tight">
              Prepare sua entidade para o próximo nível de transparência
            </h2>

            <p className="text-exactus-body text-lg mb-12 max-w-xl mx-auto">
              Entre em contato hoje mesmo e descubra como nossa auditoria
              especializada pode fortalecer a credibilidade da sua instituição.
            </p>

            <motion.button
              onClick={scrollToContact}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group btn-primary inline-flex items-center gap-4"
            >
              <span>Solicitar Orçamento de Auditoria</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer Info */}
      <section className="relative py-16 md:py-20">
        <div className="relative z-10 section-padding">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2"
            >
              <div className="flex items-center mb-6">
                <img
                  src="/assets/logo-exactus.svg"
                  alt="Exactus Logo"
                  className="h-12 w-auto brightness-0 invert"
                />
              </div>
              <p className="text-exactus-body leading-relaxed max-w-md mb-6">
                Auditoria independente especializada para entidades confessionais
                e organizações do terceiro setor. Transparência, segurança e
                conformidade regulatória.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="#"
                  className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-white/40 hover:bg-white/5 transition-all duration-300"
                >
                  <Linkedin className="w-4 h-4 text-exactus-white" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-white/40 hover:bg-white/5 transition-all duration-300"
                >
                  <Instagram className="w-4 h-4 text-exactus-white" />
                </a>
              </div>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4 className="font-heading text-sm uppercase tracking-[0.15em] text-exactus-white mb-6">
                Contato
              </h4>
              <div className="space-y-4">
                <a
                  href="mailto:contato@exactus.audit"
                  className="flex items-center gap-3 text-exactus-body hover:text-exactus-white transition-colors duration-300"
                >
                  <Mail className="w-4 h-4" />
                  <span>contato@exactus.audit</span>
                </a>
                <a
                  href="tel:+553125653470"
                  className="flex items-center gap-3 text-exactus-body hover:text-exactus-white transition-colors duration-300"
                >
                  <Phone className="w-4 h-4" />
                  <span>+55 (31) 2565-3470</span>
                </a>
                <div className="flex items-start gap-3 text-exactus-body">
                  <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                  <span>
                    Av. dos Andradas, 3323 - Sala 501<br />
                    Santa Tereza - Belo Horizonte - MG
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className="font-heading text-sm uppercase tracking-[0.15em] text-exactus-white mb-6">
                Links
              </h4>
              <div className="space-y-3">
                {[
                  { label: 'Expertise', href: '#expertise' },
                  { label: 'Método', href: '#metodo' },
                  { label: 'Serviços', href: '#servicos' },
                  { label: 'FAQ', href: '#faq' },
                ].map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="block text-exactus-body hover:text-exactus-white transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-16 pt-8 border-t border-white/10"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <p className="text-exactus-muted text-sm">
                © {new Date().getFullYear()} Exactus Auditoria. Todos os direitos reservados.
              </p>
              <p className="text-exactus-muted text-sm">
                CRC-MG
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </footer>
  );
}
