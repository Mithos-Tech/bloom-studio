import { cloudinarySrcSet } from '@/lib/cloudinary';
import SectionHeader from './SectionHeader';

const IMG = {
  design: 'https://res.cloudinary.com/dk1tkgjpj/image/upload/v1779483721/design_iz5gl3.svg',
  tecnology: 'https://res.cloudinary.com/dk1tkgjpj/image/upload/v1779484859/tecnology_nu2ngd.svg',
  resultados: 'https://res.cloudinary.com/dk1tkgjpj/image/upload/v1779483721/Resultados_utmuyd.svg',
  details: 'https://res.cloudinary.com/dk1tkgjpj/image/upload/v1779483721/details_cfdfe0.svg',
  enfoque: 'https://res.cloudinary.com/dk1tkgjpj/image/upload/v1779484859/enfoqs_mbgn2l.svg',
  fonds: 'https://res.cloudinary.com/dk1tkgjpj/image/upload/f_auto,q_auto,w_1600,c_limit/v1779485099/fonds_2_byarwh.png',
};

const CardShell = ({
  children,
  className = '',
  accent = false,
}: {
  children: React.ReactNode;
  className?: string;
  accent?: boolean;
}) => (
  <div
    className={`group relative overflow-hidden rounded-3xl border border-white/[0.08] hover:border-primary/40 transition-all duration-500 lift-card ${
      accent
        ? 'bg-gradient-to-br from-primary/[0.18] via-background to-background'
        : 'bg-white/[0.02]'
    } ${className}`}
  >
    {accent && (
      <div
        className="absolute inset-0 pointer-events-none opacity-70"
        style={{ background: 'var(--gradient-glow)' }}
      />
    )}
    {children}
  </div>
);

const Heading = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="relative p-7 md:p-8 pb-0 [container-type:inline-size] [container-name:typography-card]">
    {title && (
      <h3 className="text-item-title mb-2.5">
        {title}
      </h3>
    )}
    <div className="text-body-compact text-foreground/65 max-w-[34ch]">
      {children}
    </div>
  </div>
);

const PorQue = () => {
  return (
    <section id="por-que" className="section-container section-glow scroll-mt-20">
      <SectionHeader
        tick="// 00.07°"
        eyebrow="¿Por qué nosotros?"
        title={
          <>
            La diferencia que <span className="font-serif-display text-coral">necesitas</span>.
          </>
        }
      />

      {/* Bento grid — 1 col mobile, 2 col tablet, 3 col desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {/* 01 — Escuchamos. Imaginamos. Creamos. */}
        <CardShell className="lg:row-span-1 min-h-[420px] flex flex-col">
          <Heading title="">
            <span className="block text-foreground text-item-title leading-[1.15] mb-1">Escuchamos.</span>
            <span className="block text-foreground text-item-title leading-[1.15] mb-1">Imaginamos.</span>
            <span className="block text-coral font-serif-display text-item-title leading-[1.15]">Creamos.</span>
          </Heading>
          <div className="relative flex-1 flex items-center justify-center px-6 pb-6">
            <img loading="lazy" decoding="async" src={IMG.design} alt="" className="max-w-full max-h-[200px] object-contain transition-transform duration-700 group-hover:scale-[1.04]" />
          </div>
          <div className="px-7 pb-7 text-center">
            <p className="text-body-compact">
              <span className="text-coral">Ideas</span>
              <span className="text-foreground/70"> que nacen contigo</span>
            </p>
          </div>
        </CardShell>

        {/* 02 — Tecnología Moderna (accent) */}
        <CardShell accent className="min-h-[420px] flex flex-col">
          <Heading title="Tecnología Moderna">
            <span className="text-coral">Stack</span> actualizado para sitios rápidos, seguros y escalables.
          </Heading>
          <div className="relative flex-1 grid grid-cols-[1fr_auto] items-center gap-4 px-7 pb-7">
            <img loading="lazy" decoding="async" src={IMG.tecnology} alt="" className="w-full max-h-[200px] object-contain transition-transform duration-700 group-hover:scale-[1.04]" />
            <ul className="space-y-3 text-sm md:text-[0.95rem] pr-1">
              {['Rendimiento', 'Seguridad', 'Escalabilidad'].map((t) => (
                <li key={t} className="flex items-center gap-2.5">
                  <span className="w-4 h-4 rounded-[4px] border border-primary/70 bg-primary/15 flex items-center justify-center text-primary text-[10px]">✓</span>
                  <span className="text-foreground/85">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </CardShell>

        {/* 03 — Resultados Medibles */}
        <CardShell className="min-h-[420px] flex flex-col">
          <Heading title="Resultados Medibles">
            No solo impresionar: generar resultados <span className="text-coral">reales</span>.
          </Heading>
          <div className="relative flex-1 flex flex-col justify-center gap-3 px-7 pb-7">
            {[
              { v: '12+', label: 'IMPACTO', w: 'w-[18%]' },
              { v: '62%', label: 'CONVERSIÓN', w: 'w-[42%]' },
              { v: '48%', label: 'ENGAGEMENT', w: 'w-[34%]' },
              { v: '90%', label: 'PERFORMANCE', w: 'w-[58%]' },
            ].map((b) => (
              <div key={b.label} className="flex items-stretch rounded-full overflow-hidden border border-white/10 bg-white/[0.03] text-[0.7rem] tracking-[0.15em]">
                <div className={`${b.w} bg-primary text-primary-foreground font-semibold flex items-center justify-center py-1.5`}>
                  {b.v}
                </div>
                <div className="flex-1 flex items-center justify-center text-foreground/75 px-2">
                  {b.label}
                </div>
              </div>
            ))}
          </div>
        </CardShell>

        {/* 04 — Detalle Artesanal */}
        <CardShell className="min-h-[420px] flex flex-col">
          <Heading title="Detalle Artesanal">
            <span className="text-coral">Micro-interacciones</span>, motion y tipografía afinados al milímetro.
          </Heading>
          <div className="relative flex-1 flex items-center justify-center px-6 pb-6">
            <img loading="lazy" decoding="async" src={IMG.details} alt="" className="max-w-full max-h-[220px] object-contain transition-transform duration-700 group-hover:scale-[1.05] group-hover:rotate-3" />
          </div>
        </CardShell>

        {/* 05 — Imagen central destacada (sin card, ocupa el espacio) */}
        <div className="relative min-h-[420px] md:col-span-2 lg:col-span-1 flex items-center justify-center group">
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'var(--gradient-glow)' }} />
          <img
            src={IMG.fonds}
            loading="lazy"
            decoding="async"
            srcSet={cloudinarySrcSet(IMG.fonds, [480, 768, 1200])}
            sizes="(min-width: 1024px) 400px, (min-width: 768px) 80vw, 100vw"
            alt="Bloom — visión"
            className="relative z-10 max-w-full max-h-[420px] w-auto h-auto object-contain transition-transform duration-slow ease-out group-hover:scale-[1.05]"
          />
          <div className="absolute top-5 left-5 flex items-center gap-2 z-20">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-mono-meta text-foreground/90">// visión bloom</span>
          </div>
        </div>

        {/* 06 — Enfoque Personal */}
        <CardShell className="min-h-[420px] flex flex-col">
          <Heading title="Enfoque Personal">
            Atención <span className="text-coral">dedicada</span> en cada etapa. Sin intermediarios.
          </Heading>
          <div className="relative flex-1 flex items-center justify-center px-6">
            <img loading="lazy" decoding="async" src={IMG.enfoque} alt="" className="max-w-full max-h-[180px] object-contain transition-transform duration-700 group-hover:scale-[1.05]" />
          </div>
          <div className="px-6 pb-6 flex flex-wrap items-center justify-center gap-1.5">
            {['Estrategia', 'Diseño', 'Desarrollo', 'Lanzamiento'].map((s, i, arr) => (
              <div key={s} className="flex items-center gap-1.5">
                <span className="tag-pill text-[0.65rem] px-2.5 py-1">
                  {s}
                </span>
                {i < arr.length - 1 && <span className="text-primary/60 text-xs">›</span>}
              </div>
            ))}
          </div>
        </CardShell>
      </div>
    </section>
  );
};

export default PorQue;
