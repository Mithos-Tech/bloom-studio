import SEO from '@/components/SEO';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Manifesto from '@/components/Manifesto';
import Proceso from '@/components/Proceso';
import PorQue from '@/components/PorQue';
import FAQs from '@/components/FAQs';
import CTA from '@/components/CTA';
import Contacto from '@/components/Contacto';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Bloom — Estudio digital de diseño y desarrollo | by Inspyrio"
        description="Bloom es un estudio digital de Inspyrio que diseña marcas, productos y experiencias web que escalan y rinden. Estrategia, diseño y desarrollo a medida."
        path="/"
      />
      <Navigation />
      <Hero />
      <div className="hairline" />
      <ScrollReveal><Services /></ScrollReveal>
      <div className="hairline" />
      <ScrollReveal><Projects /></ScrollReveal>
      <ScrollReveal><Manifesto /></ScrollReveal>
      <ScrollReveal><Proceso /></ScrollReveal>
      <div className="hairline" />
      <ScrollReveal><PorQue /></ScrollReveal>
      <ScrollReveal><FAQs /></ScrollReveal>
      <ScrollReveal><CTA /></ScrollReveal>
      <ScrollReveal><Contacto /></ScrollReveal>
      <Footer />
    </div>
  );
};

export default Index;
