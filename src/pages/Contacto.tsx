import { cloudinarySrcSet } from '@/lib/cloudinary';
import { ArrowUpRight, Mail, Phone, MessageCircle } from 'lucide-react';
import SEO from '@/components/SEO';
import Navigation from '@/components/Navigation';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';

import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactoPage = () => {

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Contacto · Bloom — Conversemos sobre tu proyecto"
        description="Escríbenos a Bloom para iniciar tu próximo proyecto digital. Estrategia, diseño y desarrollo a medida. Respondemos en menos de 24 horas."
        path="/contacto"
      />
      <Navigation />

      <main className="pt-0 lg:pt-32">
        {/* Split editorial: imagen / formulario */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:min-h-[80vh]">
          {/* Imagen — extendida al borde superior en responsive (order-1), a la izquierda en desktop (lg:order-1) */}
          <div className="relative order-1 lg:order-1 min-h-[460px] sm:min-h-[520px] lg:min-h-full overflow-hidden border-b lg:border-y border-white/[0.06]">
            <img
              src="https://res.cloudinary.com/dk1tkgjpj/image/upload/f_auto,q_auto,w_1600,c_limit/v1779236124/hero_bloom_nezf8s.webp"
              srcSet={cloudinarySrcSet('https://res.cloudinary.com/dk1tkgjpj/image/upload/f_auto,q_auto,w_1600,c_limit/v1779236124/hero_bloom_nezf8s.webp', [480, 768, 1200, 1600])}
              sizes="(min-width: 1024px) 50vw, 100vw"
              decoding="async"
              alt="Bloom · contacto"
              className="absolute inset-0 w-full h-full object-cover object-top"
              loading="lazy"
            />
            {/* Difuminado superior sutil para resaltar el header flotante en móvil */}
            <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-background/80 via-background/25 to-transparent pointer-events-none" />
            {/* Difuminado inferior para continuidad con la siguiente sección */}
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-b from-transparent to-background pointer-events-none" />

            <div className="relative z-10 h-full flex flex-col justify-between p-8 pt-28 sm:pt-32 lg:p-12">
              <span className="section-tick">// 00.01°</span>

              <div>
                <h2 className="text-subtitle leading-[1.1] max-w-md">
                  <span className="text-foreground">¿Pensando en tu </span>
                  <span className="font-serif-display text-coral">próximo</span>
                  <span className="text-foreground"> movimiento?</span>
                </h2>
                <p className="text-body-compact text-foreground/70 mt-6 max-w-sm">
                  Conversemos sobre cómo Bloom puede llevar tu marca al siguiente nivel.
                </p>
              </div>
            </div>
          </div>

          {/* Formulario — abajo en responsive (order-2), a la derecha en desktop (lg:order-2) */}
          <div className="relative order-2 lg:order-2 px-6 md:px-12 lg:px-16 py-12 sm:py-16 lg:py-24 flex flex-col">
            <span className="section-tick mb-8">// 00.02°</span>

            <h1 className="text-display leading-[1.1] mb-6">
              <span className="text-foreground">Hablemos</span>
              <span className="text-coral">!</span>
            </h1>
            <p className="text-foreground/70 text-paragraph max-w-md mb-12">
              Nos encantaría escucharte a ti y a tu equipo. Cuéntanos brevemente tu proyecto.
            </p>

            <form className="space-y-8 max-w-xl" onSubmit={(e) => e.preventDefault()}>
              <div className="border-b border-white/15 focus-within:border-primary transition-colors">
                <Input placeholder="Tu nombre" className="bg-transparent border-0 px-0 h-12 text-base focus-visible:ring-0" />
              </div>
              <div className="border-b border-white/15 focus-within:border-primary transition-colors">
                <Input placeholder="Empresa" className="bg-transparent border-0 px-0 h-12 text-base focus-visible:ring-0" />
              </div>
              <div className="border-b border-white/15 focus-within:border-primary transition-colors">
                <Input type="email" placeholder="Email" className="bg-transparent border-0 px-0 h-12 text-base focus-visible:ring-0" />
              </div>
              <div className="border-b border-white/15 focus-within:border-primary transition-colors">
                <Textarea placeholder="Tu mensaje" rows={4} className="bg-transparent border-0 px-0 text-base focus-visible:ring-0 resize-none" />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-6 pt-4">
                <button type="submit" className="btn-pill normal-case text-sm tracking-normal">
                  Enviar
                  <ArrowUpRight />
                </button>
                <p className="text-mono-meta">
                  Al enviar aceptas nuestros{' '}
                  <a href="/legal/terminos" className="text-coral hover:underline">Términos &amp; Servicio.</a>
                </p>
              </div>
            </form>

            {/* Canales rápidos */}
            <div className="mt-16 pt-10 border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-xl">
              <a href="mailto:hola@bloom.com" className="group">
                <Mail className="w-4 h-4 text-primary mb-2" />
                <p className="text-mono-meta">Email</p>
                <p className="text-sm text-foreground/80 group-hover:text-primary transition-colors break-all">
                  hola@bloom.com
                </p>
              </a>
              <a href="tel:+51987654321" className="group">
                <Phone className="w-4 h-4 text-primary mb-2" />
                <p className="text-mono-meta">Tel</p>
                <p className="text-sm text-foreground/80 group-hover:text-primary transition-colors">(051) 987-6543</p>
              </a>
              <a href="https://wa.me/51987654321" className="group">
                <MessageCircle className="w-4 h-4 text-primary mb-2" />
                <p className="text-mono-meta">WhatsApp</p>
                <p className="text-sm text-foreground/80 group-hover:text-primary transition-colors">(051) 987-6543</p>
              </a>
            </div>
          </div>
        </section>

        <ScrollReveal><CTA /></ScrollReveal>
      </main>

      <Footer />
    </div>
  );
};

export default ContactoPage;

