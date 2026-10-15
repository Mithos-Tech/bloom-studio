import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ArrowUpRight } from 'lucide-react';

const FAQs = () => {
  const faqs = [
    { question: '¿Cuánto tiempo toma desarrollar un sitio web?', answer: 'Depende del tipo de proyecto: una landing page en Framer puede tomar de 1 a 2 semanas, mientras que un sitio en WordPress puede requerir de 3 a 5 semanas.' },
    { question: '¿Incluyes hosting y dominio?', answer: 'No los incluyo directamente, pero asesoro en la elección del dominio y hosting más adecuados para cada proyecto.' },
    { question: '¿Ofreces mantenimiento después de la entrega?', answer: 'Sí, puedo ofrecer soporte técnico y actualizaciones, especialmente en proyectos con WordPress.' },
    { question: '¿Trabajas con clientes de otros países?', answer: 'Sí, todos los procesos (prototipo, diseño, desarrollo y entrega) se realizan de forma remota, sin importar la ubicación del cliente.' },
    { question: '¿Qué tecnologías utilizas?', answer: 'Figma para prototipos, Framer para landing pages rápidas y modernas, y WordPress.org para sitios web de producción.' },
    { question: '¿Cómo es el proceso de pago?', answer: 'Se divide en dos fases: un adelanto inicial para iniciar el proyecto y el saldo final al momento de la entrega.' },
    { question: '¿Qué tipo de proyectos realizas?', answer: 'Landing pages, portafolios, blogs y sitios corporativos básicos, todos con diseño moderno y adaptable.' },
  ];

  return (
    <section id="faqs" className="section-container scroll-mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        {/* Left column — title + PM bio */}
        <div className="lg:col-span-5 lg:sticky lg:top-28 self-start space-y-8">
          <div className="flex items-center gap-4">
            <span className="section-tick">// 00.08°</span>
            <span className="text-mono-meta">· FAQs</span>
          </div>

          <h2 className="text-subtitle leading-[1.1]">
            <span className="text-foreground">Preguntas </span>
            <span className="font-serif-display text-coral">frecuentes</span>
            <span className="text-foreground">.</span>
          </h2>

          <p className="text-paragraph text-foreground/65 max-w-md">
            Si no encuentras la respuesta que buscas, escríbenos. Cada proyecto
            es único y nos gusta conversar antes de presupuestar.
          </p>

          {/* PM card */}
          <div className="mt-10 p-6 rounded-3xl border border-white/[0.08] bg-white/[0.02] flex items-center gap-5">
            <div className="w-14 h-14 rounded-full border border-primary/40 bg-primary/10 flex items-center justify-center font-sans text-2xl text-coral shrink-0">
              V
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-mono-meta mb-1">Project Manager</p>
              <p className="text-paragraph">Valentina Ríos</p>
              <p className="text-foreground/60 text-sm">
                Responde en menos de 24h · UTC-5
              </p>
            </div>
          </div>

          <a
            href="#contacto"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            className="inline-flex items-center gap-3 text-sm normal-case font-medium tracking-normal text-foreground/80 hover:text-primary transition-colors cursor-pointer"
          >
            ¿Otra duda? Escríbenos
            <span className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center group-hover:border-primary transition-all">
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </a>
        </div>

        {/* Right column — accordion */}
        <div className="lg:col-span-7">
          <Accordion
            type="single"
            collapsible
            className="divide-y divide-white/[0.08] border-y border-white/[0.08]"
          >
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-none">
                <AccordionTrigger className="text-left text-lg md:text-xl font-medium leading-snug py-6 hover:no-underline hover:text-primary transition-colors [&[data-state=open]]:text-primary">
                  <span className="flex items-center gap-4">
                    <span className="text-mono-meta text-primary/80">0{index + 1}</span>
                    <span>{faq.question}</span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 pl-12 text-foreground/70 text-body-compact">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
