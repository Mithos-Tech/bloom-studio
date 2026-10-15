import { cloudinarySrcSet } from '@/lib/cloudinary';
import { ArrowUpRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const CTA = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setOpen(true);
        });
      },
      { threshold: 0.25 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative w-full overflow-hidden">
      <div className="relative w-full min-h-[88vh] md:min-h-[92vh] flex items-center">
        {/* Background image — center-out reveal */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{
            clipPath: open
              ? 'inset(0% 0% 0% 0%)'
              : 'inset(50% 50% 50% 50%)',
            transition:
              'clip-path 1600ms cubic-bezier(0.76, 0, 0.24, 1)',
            willChange: 'clip-path',
          }}
        >
          <img
            src="https://res.cloudinary.com/dk1tkgjpj/image/upload/f_auto,q_auto,w_1600,c_limit/v1779394801/cta_mgvdur.webp"
              srcSet={cloudinarySrcSet('https://res.cloudinary.com/dk1tkgjpj/image/upload/f_auto,q_auto,w_1600,c_limit/v1779394801/cta_mgvdur.webp', [480, 768, 1200, 1600])}
              sizes="100vw"
              decoding="async"
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-cinematic ease-out"
            style={{ transform: open ? 'scale(1.04)' : 'scale(1.25)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background/75 via-background/40 to-background/80" />
          <div
            className="absolute inset-0 opacity-[0.05] mix-blend-overlay"
            style={{
              backgroundImage:
                'radial-gradient(hsl(0 0% 100%) 1px, transparent 1px)',
              backgroundSize: '3px 3px',
            }}
          />
        </div>

        {/* Content — fades in after image opens */}
        <div
          className="relative z-10 w-full px-6 md:px-12 lg:px-20 py-20 md:py-28"
          style={{
            opacity: open ? 1 : 0,
            transform: open ? 'translateY(0)' : 'translateY(28px)',
            transition:
              'opacity 900ms ease-out 900ms, transform 1100ms cubic-bezier(0.22,1,0.36,1) 900ms',
          }}
        >
          <div className="max-w-7xl mx-auto">
            {/* meta row */}
            <div className="flex items-center justify-between mb-10">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="text-mono-meta">// 00.09° · ¿Listo?</span>
              </div>
              <span className="text-mono-meta hidden md:inline">
                Disponibilidad limitada · 2026
              </span>
            </div>

            <h2 className="text-subtitle leading-[1.1] max-w-3xl">
              <span className="text-foreground">¿Tienes una </span>
              <span className="font-serif-display text-coral">visión</span>
              <br />
              <span className="text-foreground">que merece </span>
              <span className="font-serif-display text-coral">construirse</span>
              <span className="text-foreground">?</span>
            </h2>

            <p className="text-paragraph text-foreground/80 max-w-xl mt-8">
              Agenda una llamada gratuita de 30 minutos. Sin compromiso. Te
              contamos cómo Bloom puede elevar tu producto al siguiente nivel.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="https://cal.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill normal-case text-sm tracking-normal"
              >
                Agendar llamada
                <ArrowUpRight />
              </a>
              <a
                href="mailto:hola@bloom.com"
                className="btn-pill-ghost normal-case text-sm tracking-normal"
              >
                Escríbenos
              </a>
            </div>

            {/* footer meta */}
            <div className="mt-16 pt-8 border-t border-white/[0.12] grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl">
              <div>
                <p className="text-mono-meta mb-1">Respuesta</p>
                <p className="text-foreground/90 text-sm">&lt; 24 horas</p>
              </div>
              <div>
                <p className="text-mono-meta mb-1">Modalidad</p>
                <p className="text-foreground/90 text-sm">100% remoto</p>
              </div>
              <div>
                <p className="text-mono-meta mb-1">Idiomas</p>
                <p className="text-foreground/90 text-sm">ES · EN</p>
              </div>
              <div>
                <p className="text-mono-meta mb-1">Basados en</p>
                <p className="text-foreground/90 text-sm">Lima, Perú</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
