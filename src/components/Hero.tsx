import { ArrowRight, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { cloudinarySrcSet } from '@/lib/cloudinary';

const Hero = () => {
  const [time, setTime] = useState('--:--');

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('es-PE', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        })
      );
    };
    update();
    const id = setInterval(update, 30000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden bg-background pt-24">
      {/* Imagen de fondo editorial — sin opacidad, con zoom de entrada */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <picture>
          <source
            media="(max-width: 768px)"
            srcSet={cloudinarySrcSet('https://res.cloudinary.com/dk1tkgjpj/image/upload/f_auto,q_auto,w_900,c_limit/v1779237070/responsive_cycsiu.webp', [480, 640, 900])}
            sizes="100vw"
          />
          <img
            src="https://res.cloudinary.com/dk1tkgjpj/image/upload/f_auto,q_auto,w_1920,c_limit/v1780331434/hero_02_ystidq.webp"
            alt=""
            srcSet={cloudinarySrcSet('https://res.cloudinary.com/dk1tkgjpj/image/upload/f_auto,q_auto,w_1920,c_limit/v1780331434/hero_02_ystidq.webp', [960, 1440, 1920])}
            sizes="100vw"
            aria-hidden="true"
            loading="eager"
            {...{ fetchpriority: 'high' }}
            decoding="async"
            width="1920"
            height="1080"
            className="w-full h-full object-cover hero-zoom-in"
          />
        </picture>
        {/* Difuminado solo en la parte inferior — la imagen se ve nítida y se funde hacia la siguiente sección */}
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-b from-transparent via-background/60 to-background" />
        {/* Grano sutil */}
        <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'radial-gradient(hsl(0 0% 100%) 1px, transparent 1px)', backgroundSize: '3px 3px' }} />
      </div>

      {/* Ticks laterales */}
      <div className="hidden 2xl:flex absolute left-6 top-1/2 -translate-y-1/2 flex-col gap-16 z-10">
        <span className="section-tick">// 00.01°</span>
        <span className="section-tick">// 00.02°</span>
        <span className="section-tick">// 00.03°</span>
      </div>

      {/* Badge superior derecho — visible y adaptado a responsive, tablet y desktop */}
      <div className="absolute top-20 right-4 sm:right-6 md:top-32 md:right-8 lg:right-16 z-10 text-right animate-fade-in">
        <div className="font-mono text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-primary font-normal leading-none">
          10+
        </div>
        <p className="text-[0.62rem] sm:text-xs md:text-xs lg:text-[0.8125rem] text-mono-meta mt-1 sm:mt-2 max-w-[110px] sm:max-w-[140px] md:max-w-[200px] lg:max-w-[230px] ml-auto leading-tight">
          Proyectos creados<br />para marcas con visión
        </p>
      </div>

      <div className="section-container relative z-20 w-full pt-32 sm:pt-36 md:pt-14 lg:pt-20 pb-16 md:pb-24">
        <div className="max-w-6xl mx-auto md:mx-0 translate-y-8 sm:translate-y-10 md:translate-y-4 lg:translate-y-6">
          {/* Headline editorial — en negrita (bold 700), más amplio y dominante en tablet/desktop */}
          <h1 className="text-[2.75rem] sm:text-6xl md:text-[4.85rem] lg:text-[6.25rem] xl:text-[7.25rem] font-semibold md:font-bold mb-8 md:mb-7 lg:mb-8 animate-slide-up leading-[0.98] tracking-[-0.03em] max-w-6xl whitespace-nowrap text-center md:text-left">
            <span className="text-coral">Bloom</span><span className="text-foreground/40">\</span><span className="text-foreground">Studio</span>
          </h1>

          {/* Subtítulo simplificado a 3 líneas — jerarquizado a la altura ideal */}
          <div className="text-left max-w-xs md:max-w-md lg:max-w-lg">
            <p className="text-body-compact md:text-lg lg:text-xl text-foreground/80 leading-relaxed animate-fade-in">
              Estudio de diseño
              <br />
              para marcas con visión.
              <br />
              Historias que escalan.
            </p>
          </div>

          {/* Metadata + CTAs — espaciado compacto para que no se vayan muy abajo */}
          <div className="mt-10 md:mt-12 lg:mt-14 space-y-5 md:space-y-6 animate-fade-in">
            <div className="space-y-1 text-left">
              <p className="text-mono-meta md:text-[0.78rem] lg:text-[0.84rem] tracking-wider">Nuestra hora · {time}</p>
              <p className="text-mono-meta md:text-[0.78rem] lg:text-[0.84rem] tracking-wider">UTC-5 · Lima, Perú</p>
            </div>

            <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4 md:pt-1">
              <Button variant="unstyled" size="content"
                onClick={() =>
                  document
                    .getElementById('proyectos')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
                className="btn-pill rounded-full normal-case tracking-normal md:text-[0.9375rem] lg:text-base md:px-7 md:py-3.5"
              >
                Ver proyectos
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </Button>
              <Button variant="unstyled" size="content"
                onClick={() =>
                  document
                    .getElementById('contacto')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
                className="btn-pill-ghost rounded-full normal-case tracking-normal md:text-[0.9375rem] lg:text-base md:px-7 md:py-3.5"
              >
                <Mail className="w-4 h-4 md:w-5 md:h-5" />
                Contactar
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
