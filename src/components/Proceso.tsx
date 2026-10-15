import { BarChart3, Palette, Code, Rocket } from 'lucide-react';
import SectionHeader from './SectionHeader';

const Proceso = () => {
  const pasos = [
    { id: 1, numero: '01', titulo: 'Estrategia', descripcion: 'Análisis profundo del negocio, audiencia y roadmap claro.', icono: BarChart3, etiquetas: ['Análisis', 'Roadmap', 'SEO'] },
    { id: 2, numero: '02', titulo: 'Diseño UI/UX', descripcion: 'Wireframes, prototipos y sistema visual coherente.', icono: Palette, etiquetas: ['Wireframes', 'Prototipos', 'Figma'] },
    { id: 3, numero: '03', titulo: 'Desarrollo', descripcion: 'Codificación limpia, performante y probada en distintos contextos.', icono: Code, etiquetas: ['Frontend', 'Backend', 'Testing'] },
    { id: 4, numero: '04', titulo: 'Lanzamiento', descripcion: 'Despliegue, métricas y soporte continuo post-entrega.', icono: Rocket, etiquetas: ['Deploy', 'Soporte', 'Dominio'] },
  ];

  return (
    <section id="proceso" className="section-container scroll-mt-20">
      <SectionHeader
        tick="// 00.06°"
        eyebrow="Proceso"
        title={
          <>
            De la idea al <span className="font-serif-display text-coral">lanzamiento</span>.
          </>
        }
        description="Cuatro fases concretas. Sin sorpresas, sin fricción."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.08] border border-white/[0.08] rounded-2xl overflow-hidden">
        {pasos.map((paso, index) => {
          const Icon = paso.icono;
          return (
            <div
              key={paso.id}
              className="bg-background p-8 group hover:bg-white/[0.02] transition-colors animate-slide-up [container-type:inline-size] [container-name:typography-card]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-8">
                <span className="section-badge !text-3xl">{paso.numero}</span>
                <Icon className="w-5 h-5 text-foreground/60 group-hover:text-primary transition-colors" />
              </div>
              <h3 className="text-item-title mb-2">{paso.titulo}</h3>
              <p className="text-foreground/60 text-body-compact mb-6">{paso.descripcion}</p>
              <div className="flex flex-wrap gap-1.5">
                {paso.etiquetas.map((e) => (
                  <span key={e} className="tag-pill text-[0.65rem] px-2.5 py-0.5">
                    {e}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Proceso;
