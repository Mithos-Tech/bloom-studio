import { Mail, Phone, MessageCircle, Dribbble, Github, ArrowUpRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import SectionHeader from './SectionHeader';

const Contacto = () => {
  return (
    <section id="contacto" className="section-container scroll-mt-20">
      <SectionHeader
        tick="// 00.10°"
        eyebrow="Contacto"
        title={
          <>
            Conversemos sobre tu <span className="font-serif-display text-coral">proyecto</span>.
          </>
        }
      />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 max-w-6xl mx-auto">
        {/* Info */}
        <div className="lg:col-span-2 space-y-10">
          <div className="space-y-6">
            <p className="text-mono-meta">Canales</p>

            <a href="mailto:hola@bloom.com" className="flex items-start gap-4 group">
              <Mail className="w-5 h-5 text-primary mt-1 shrink-0" />
              <div>
                <p className="text-xs text-foreground/50 mb-1">Email</p>
                <p className="text-foreground group-hover:text-primary transition-colors break-all">
                  hola@bloom.com
                </p>
              </div>
            </a>

            <a href="tel:+51987654321" className="flex items-start gap-4 group">
              <Phone className="w-5 h-5 text-primary mt-1 shrink-0" />
              <div>
                <p className="text-xs text-foreground/50 mb-1">Teléfono</p>
                <p className="text-foreground group-hover:text-primary transition-colors">(051) 987-6543</p>
              </div>
            </a>

            <a href="https://wa.me/51987654321" className="flex items-start gap-4 group">
              <MessageCircle className="w-5 h-5 text-primary mt-1 shrink-0" />
              <div>
                <p className="text-xs text-foreground/50 mb-1">WhatsApp</p>
                <p className="text-foreground group-hover:text-primary transition-colors">(051) 987-6543</p>
              </div>
            </a>

          </div>

          <div className="pt-8 border-t border-white/[0.08]">
            <p className="text-mono-meta mb-4">Redes</p>
            <div className="flex gap-2">
              {[Dribbble, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="lg:col-span-3 space-y-6">
          <p className="text-mono-meta">// Envíanos un mensaje</p>

          <div className="space-y-5">
            <div>
              <Label htmlFor="name" className="text-mono-meta">Nombre *</Label>
              <Input id="name" placeholder="Tu nombre completo" className="mt-2 bg-transparent border-white/15 focus-visible:border-primary focus-visible:ring-0 h-12" />
            </div>
            <div>
              <Label htmlFor="email" className="text-mono-meta">Email *</Label>
              <Input id="email" type="email" placeholder="tu@email.com" className="mt-2 bg-transparent border-white/15 focus-visible:border-primary focus-visible:ring-0 h-12" />
            </div>
            <div>
              <Label htmlFor="phone" className="text-mono-meta">Teléfono</Label>
              <Input id="phone" type="tel" placeholder="Tu número" className="mt-2 bg-transparent border-white/15 focus-visible:border-primary focus-visible:ring-0 h-12" />
            </div>
            <div>
              <Label htmlFor="message" className="text-mono-meta">Mensaje *</Label>
              <Textarea id="message" placeholder="Cuéntanos sobre tu proyecto..." className="mt-2 bg-transparent border-white/15 focus-visible:border-primary focus-visible:ring-0 min-h-[140px]" />
            </div>

            <button className="btn-pill w-full sm:w-auto normal-case text-sm tracking-normal">
              Enviar mensaje
              <ArrowUpRight />
            </button>

            <p className="text-xs text-foreground/50 leading-relaxed pt-4 border-t border-white/[0.08]">
              Sitio demo: este formulario no envía ni almacena datos. Ver <a href="/legal/privacidad" className="text-coral hover:underline">Política de Privacidad</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
