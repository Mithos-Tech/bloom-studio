import { Code, Palette, Settings, Plus, Minus } from 'lucide-react';
import { useState } from 'react';
import SectionHeader from './SectionHeader';

const Services = () => {
  const [openCard, setOpenCard] = useState<number | null>(0);

  const services = [
    {
      icon: <Code className="w-5 h-5" />,
      title: 'Desarrollo Web Completo',
      description:
        'Sitios web responsivos y optimizados. Landing pages y aplicaciones web funcionales.',
      tags: ['React', 'HTML5', 'CSS3', 'JavaScript'],
    },
    {
      icon: <Palette className="w-5 h-5" />,
      title: 'Diseño UI/UX',
      description:
        'Interfaces intuitivas y atractivas. Experiencias de usuario optimizadas para conversión.',
      tags: ['Figma', 'Wireframing', 'Prototyping', 'Design Systems'],
    },
    {
      icon: <Settings className="w-5 h-5" />,
      title: 'Mantenimiento y Soporte',
      description:
        'Actualizaciones, optimizaciones y soporte técnico continuo para tu sitio web.',
      tags: ['Updates', 'Performance', 'SEO', 'Technical Support'],
    },
  ];

  return (
    <section id="servicios" className="section-container section-glow scroll-mt-20">
      <SectionHeader
        tick="// 00.04°"
        eyebrow="Servicios"
        title={
          <>
            Lo que <span className="font-serif-display text-coral">hacemos</span>
            <br />
            con precisión.
          </>
        }
        description="Tres disciplinas complementarias para llevar tu producto digital de la idea a la realidad."
      />

      <div className="max-w-5xl mx-auto divide-y divide-white/[0.08] border-y border-white/[0.08]">
        {services.map((service, index) => {
          const open = openCard === index;
          return (
            <div key={index} className="group transition-colors">
              <button
                onClick={() => setOpenCard(open ? null : index)}
                className="w-full flex items-center justify-between py-8 text-left transition-colors hover:text-primary"
              >
                <div className="flex items-center gap-6">
                  <span className="text-mono-meta text-primary">0{index + 1}</span>
                  <span className="text-item-title group-hover:text-primary transition-colors">
                    {service.title}
                  </span>
                </div>
                <span className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center shrink-0 group-hover:border-primary transition-colors">
                  {open ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </span>
              </button>

              {open && (
                <div className="pb-10 pl-0 md:pl-16 animate-fade-in">
                  <p className="text-body-compact text-foreground/70 max-w-2xl mb-5">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="tag-pill"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
