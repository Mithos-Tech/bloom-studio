import { cloudinarySrcSet } from '@/lib/cloudinary';
import { ArrowUpRight } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import SectionHeader from './SectionHeader';

const Projects = () => {
  const navigate = useNavigate();
  const projects = [
    {
      id: 1,
      title: 'E-commerce Premium',
      category: 'Comercio · 2024',
      client: 'Cliente confidencial',
      description:
        'Plataforma de comercio electrónico con diseño editorial y un sistema de checkout simplificado que elevó la conversión un 38%.',
      tags: ['Shopify', 'Diseño UI', 'Motion'],
      image: 'https://res.cloudinary.com/dk1tkgjpj/image/upload/f_auto,q_auto,w_1600,c_limit/v1779394768/E-commerce_Premium_behk9l.webp',
    },
    {
      id: 2,
      title: 'SaaS Dashboard',
      category: 'Producto · 2024',
      client: 'Startup B2B',
      description:
        'Dashboard analítico con visualizaciones de datos avanzadas, métricas en tiempo real y un sistema de componentes propio.',
      tags: ['React', 'Design System', 'Data Viz'],
      image: 'https://res.cloudinary.com/dk1tkgjpj/image/upload/f_auto,q_auto,w_1600,c_limit/v1779394767/SaaS_Dashboard_q5uugk.webp',
    },
    {
      id: 3,
      title: 'Portfolio Creativo',
      category: 'Branding · 2024',
      client: 'Artista digital',
      description:
        'Sitio portfolio inmersivo con narrativa scroll-driven, animaciones WebGL y una identidad visual construida desde cero.',
      tags: ['Framer', 'WebGL', 'Identidad'],
      image: 'https://res.cloudinary.com/dk1tkgjpj/image/upload/f_auto,q_auto,w_1600,c_limit/v1779394768/Portfolio_Creativo_b3eubs.webp',
    },
  ];

  return (
    <section id="proyectos" className="section-container section-glow scroll-mt-20">
      <SectionHeader
        tick="// 00.05°"
        eyebrow="Trabajo seleccionado"
        title={
          <>
            Proyectos <span className="font-serif-display text-coral">destacados</span>.
          </>
        }
        description="Una muestra del trabajo reciente. Cada proyecto cuenta una historia."
      />

      <div className="flex flex-col divide-y divide-white/[0.06] border-y border-white/[0.06]">
        {projects.map((p, index) => (
          <Link
            key={p.id}
            to="/portafolio"
            className="group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 py-14 lg:py-20 animate-slide-up items-center"
            style={{ animationDelay: `${index * 0.08}s` }}
          >
            {/* Left — jerarquía editorial */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-4">
                <span className="text-mono-meta text-primary">// 0{index + 1}</span>
                <span className="text-mono-meta">{p.category}</span>
              </div>

              <h3 className="text-item-title leading-[1.2] group-hover:text-primary transition-colors duration-500">
                {p.title}
              </h3>

              <p className="text-foreground/65 text-body-compact max-w-md">
                {p.description}
              </p>

              <div className="pt-4 flex items-center gap-3 text-sm normal-case font-medium tracking-normal text-foreground/80 group-hover:text-primary transition-colors">
                Ver caso de estudio
                <span className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-all">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
            </div>

            {/* Right — card imagen */}
            <div className="lg:col-span-7">
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
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-16 flex justify-center">
        <button
          onClick={() => navigate('/portafolio')}
          className="btn-pill-ghost normal-case text-sm tracking-normal"
        >
          Ver portafolio completo
          <ArrowUpRight />
        </button>
      </div>
    </section>
  );
};

export default Projects;
