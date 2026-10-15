import { cloudinarySrcSet } from '@/lib/cloudinary';
import SEO from '@/components/SEO';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import { ArrowUpRight, ArrowDown } from 'lucide-react';

const Portafolio = () => {

  const scrollToGallery = () => {
    document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
  };

  const proyectos = [
    {
      id: 1,
      index: '01',
      title: 'E-commerce Premium',
      client: 'Atelier Norte',
      category: 'Comercio',
      year: '2024',
      services: ['Estrategia', 'Diseño UI', 'Shopify'],
      description:
        'Plataforma de comercio editorial con checkout simplificado. +38% en conversión y un tiempo de carga reducido al mínimo.',
      image:
        'https://res.cloudinary.com/dk1tkgjpj/image/upload/f_auto,q_auto,w_1600,c_limit/v1779394768/E-commerce_Premium_behk9l.webp',
    },
    {
      id: 2,
      index: '02',
      title: 'SaaS Dashboard',
      client: 'Northwind Labs',
      category: 'Producto',
      year: '2024',
      services: ['Design System', 'React', 'Data Viz'],
      description:
        'Dashboard analítico con visualizaciones avanzadas, métricas en tiempo real y un sistema de componentes propio.',
      image:
        'https://res.cloudinary.com/dk1tkgjpj/image/upload/f_auto,q_auto,w_1600,c_limit/v1779394767/SaaS_Dashboard_q5uugk.webp',
    },
    {
      id: 3,
      index: '03',
      title: 'Portfolio Creativo',
      client: 'Mila Reyes',
      category: 'Branding',
      year: '2024',
      services: ['Identidad', 'WebGL', 'Framer'],
      description:
        'Sitio portfolio inmersivo con narrativa scroll-driven, animaciones WebGL y una identidad construida desde cero.',
      image:
        'https://res.cloudinary.com/dk1tkgjpj/image/upload/f_auto,q_auto,w_1600,c_limit/v1779394768/Portfolio_Creativo_b3eubs.webp',
    },
    {
      id: 4,
      index: '04',
      title: 'Marketplace Digital',
      client: 'Casa Mercado',
      category: 'Marketplace',
      year: '2024',
      services: ['Next.js', 'Stripe', 'UX'],
      description:
        'Marketplace para productos digitales con pagos integrados, sistema de reseñas y comisiones automatizadas.',
      image:
        'https://res.cloudinary.com/dk1tkgjpj/image/upload/f_auto,q_auto,w_1600,c_limit/v1779394768/E-commerce_Premium_behk9l.webp',
    },
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Portafolio · Bloom — Proyectos seleccionados"
        description="Selección de proyectos de Bloom: e-commerce, plataformas SaaS, branding y experiencias digitales con foco en performance y conversión."
        path="/portafolio"
      />
      <Navigation />

      {/* Hero editorial */}
      <section className="relative min-h-[80vh] flex items-end overflow-hidden pt-32 pb-20">
        <div
          className="absolute inset-0 pointer-events-none opacity-60"
          style={{ background: 'var(--gradient-glow)' }}
        />
        <div className="section-container relative z-10 w-full">
          <div className="flex items-center gap-4 mb-8 animate-fade-in">
            <span className="section-tick">// 00.00°</span>
            <span className="text-mono-meta">· Trabajo seleccionado</span>
          </div>
          <h1 className="text-display mb-8 leading-[1.1] animate-slide-up">
            <span className="text-foreground">Nuestro</span>{' '}
            <span className="text-coral">portafolio</span>
            <span className="text-foreground">.</span>
          </h1>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <p className="text-paragraph text-foreground/65 max-w-xl">
              Una selección curada de proyectos donde la estrategia, el diseño y
              la ingeniería se encuentran para crear experiencias memorables.
            </p>
            <button
              onClick={scrollToGallery}
              className="btn-pill normal-case text-sm tracking-normal self-start md:self-auto"
            >
              Explorar
              <ArrowDown className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Gallery — Framer createstudio /work inspired */}
      <section id="gallery" className="section-container section-glow py-20 md:py-28">
        <div className="flex items-end justify-between mb-14 md:mb-20">
          <div className="flex items-center gap-4">
            <span className="section-tick">// 00.01°</span>
            <span className="text-mono-meta">· {proyectos.length} proyectos</span>
          </div>
          <span className="text-mono-meta hidden md:inline">2024 — Presente</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-10 gap-y-20 md:gap-y-28">
          {proyectos.map((p, i) => (
            <div
              key={p.id}
              className={`group block animate-slide-up cursor-pointer ${
                i % 2 === 1 ? 'md:mt-24' : ''
              }`}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              {/* Image card */}
              <div
                className="relative overflow-hidden rounded-3xl border border-white/[0.08] group-hover:border-primary/40 transition-all duration-700 aspect-[4/3] lift-card"
                style={{
                  background:
                    'linear-gradient(135deg, hsl(220 7% 12%), hsl(220 7% 8%))',
                }}
              >
                <img
                  src={p.image}
                  srcSet={cloudinarySrcSet(p.image, [480, 768, 1200, 1600])}
                  sizes="(min-width: 1280px) 640px, (min-width: 768px) 50vw, 100vw"
                  width="800"
                  height="600"
                  loading="lazy"
                  decoding="async"
                  alt={p.title}
                  className="w-full h-full object-cover transition-all duration-slow ease-out group-hover:scale-[1.06]"
                />
              </div>

              {/* Meta */}
              <div className="mt-6 space-y-2.5">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-item-title leading-[1.2] group-hover:text-primary transition-colors duration-500">
                    {p.title}
                  </h3>
                  <span className="w-10 h-10 rounded-full border border-white/15 group-hover:border-primary group-hover:bg-primary/10 flex items-center justify-center shrink-0 transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4 text-foreground/60 group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                  </span>
                </div>
                <p className="text-foreground/65 text-body-compact max-w-md">
                  {p.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  );
};

export default Portafolio;
