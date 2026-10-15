import { Link, useParams, Navigate } from 'react-router-dom';
import SEO from '@/components/SEO';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

type Doc = { title: string; eyebrow: string; description: string; sections: { h: string; p: string[] }[] };

const UPDATED = '6 de octubre de 2026';

const DOCS: Record<string, Doc> = {
  privacidad: {
    eyebrow: 'Legal · 01',
    title: 'Política de privacidad',
    description: 'Cómo Bloom (sitio demo de Inspyrio) trata —y no trata— los datos personales.',
    sections: [
      { h: 'Naturaleza del sitio', p: ['Este sitio es una demostración (demo) de portafolio creada por Inspyrio. Toda la información de contacto mostrada (por ejemplo hola@bloom.com y (051) 987-6543) es ficticia.'] },
      { h: 'Datos que recopilamos', p: ['Ninguno. Los formularios de contacto y newsletter son únicamente visuales: no envían, transmiten ni almacenan información en ningún servidor o base de datos.', 'No usamos cuentas de usuario, pagos ni perfiles.'] },
      { h: 'Servicios de terceros', p: ['Para mostrar el sitio se cargan tipografías desde Google Fonts e imágenes desde Cloudinary. Estos proveedores pueden registrar datos técnicos mínimos (como tu dirección IP) según sus propias políticas.'] },
      { h: 'Marco normativo', p: ['Este aviso se redacta tomando como referencia la Ley N.º 29733 de Protección de Datos Personales del Perú y el Reglamento General de Protección de Datos (RGPD) de la Unión Europea.'] },
      { h: 'Tus derechos', p: ['Como no almacenamos datos personales, no existe información sobre ti que acceder, rectificar o eliminar. Ante cualquier duda puedes escribir a Inspyrio.'] },
    ],
  },
  terminos: {
    eyebrow: 'Legal · 02',
    title: 'Términos de servicio',
    description: 'Condiciones de uso del sitio demo Bloom by Inspyrio.',
    sections: [
      { h: 'Objeto', p: ['Bloom es una marca ficticia y este sitio tiene fines exclusivamente demostrativos. No se ofrecen ni contratan servicios reales a través de él.'] },
      { h: 'Propiedad intelectual', p: ['El diseño, código y contenidos son propiedad de Inspyrio. Queda prohibida su reproducción o uso comercial sin autorización escrita.'] },
      { h: 'Contenido ilustrativo', p: ['Proyectos, cifras, testimonios y datos de contacto son ilustrativos y no representan clientes ni resultados reales.'] },
      { h: 'Enlaces externos', p: ['El sitio puede enlazar a servicios de terceros (por ejemplo Cal.com o WhatsApp). Inspyrio no se responsabiliza de su contenido ni de sus políticas.'] },
      { h: 'Responsabilidad', p: ['El sitio se ofrece "tal cual", sin garantías de disponibilidad. Inspyrio puede modificar estos términos en cualquier momento.'] },
    ],
  },
  cookies: {
    eyebrow: 'Legal · 03',
    title: 'Política de cookies',
    description: 'Este sitio demo no utiliza cookies de seguimiento ni publicidad.',
    sections: [
      { h: 'Cookies propias', p: ['Bloom no instala cookies propias de análisis, publicidad ni perfilado. Por eso no se muestra un banner de consentimiento.'] },
      { h: 'Terceros', p: ['Los proveedores de tipografías (Google Fonts) e imágenes (Cloudinary) pueden emplear mecanismos técnicos necesarios para servir sus recursos.'] },
      { h: 'Cambios', p: ['Si en el futuro se añade analítica u otras herramientas, esta política se actualizará y se solicitará tu consentimiento cuando la ley lo exija.'] },
    ],
  },
  ia: {
    eyebrow: 'Legal · 04',
    title: 'Transparencia sobre el uso de IA',
    description: 'Cómo se ha utilizado la inteligencia artificial en la creación de este sitio.',
    sections: [
      { h: 'Aviso de transparencia', p: ['Este sitio fue diseñado y desarrollado por Inspyrio con asistencia de herramientas de inteligencia artificial generativa para código, textos y apoyo visual, bajo supervisión y revisión humana.'] },
      { h: 'Alcance', p: ['La IA se usó como herramienta de producción. El sitio no incorpora sistemas de IA que interactúen contigo, tomen decisiones automatizadas sobre personas ni procesen tus datos.'] },
      { h: 'Contenido sintético', p: ['Algunas imágenes, textos y datos de ejemplo pueden ser generados o asistidos por IA y tienen carácter ilustrativo. No representan personas, clientes ni hechos reales.'] },
      { h: 'Marco de referencia', p: ['Este aviso sigue los principios de transparencia del Reglamento de IA de la Unión Europea (AI Act, art. 50), la Ley N.º 31814 del Perú que promueve el uso de la IA, y las recomendaciones éticas de la UNESCO y la OCDE.'] },
      { h: 'Responsabilidad humana', p: ['Inspyrio revisa y es responsable del resultado final publicado.'] },
    ],
  },
};

const Legal = () => {
  const { slug = '' } = useParams();
  const doc = DOCS[slug];
  if (!doc) return <Navigate to="/404" replace />;

  return (
    <div className="min-h-screen">
      <SEO title={`${doc.title} — Bloom by Inspyrio`} description={doc.description} path={`/legal/${slug}`} />
      <Navigation />
      <main className="section-container pt-36 md:pt-44 pb-24">
        <div className="max-w-3xl mx-auto">
          <p className="text-mono-meta mb-6">{doc.eyebrow}</p>
          <h1 className="text-display leading-[1.1] mb-6">
            {doc.title.split(' ').slice(0, -1).join(' ')}{' '}
            <span className="text-coral">{doc.title.split(' ').slice(-1)}</span>
          </h1>
          <p className="text-foreground/60 text-paragraph mb-4">{doc.description}</p>
          <p className="text-mono-meta mb-14">Última actualización · {UPDATED}</p>

          <div className="space-y-10">
            {doc.sections.map((s, i) => (
              <section key={s.h} className="pt-8 border-t border-white/[0.08]">
                <h2 className="text-item-title text-foreground mb-3">
                  <span className="text-mono-meta mr-3">0{i + 1}</span>
                  {s.h}
                </h2>
                {s.p.map((t) => (
                  <p key={t} className="text-foreground/70 text-body-compact mb-3">{t}</p>
                ))}
              </section>
            ))}
          </div>

          <nav className="mt-16 pt-8 border-t border-white/[0.08] flex flex-wrap gap-2">
            {Object.entries(DOCS).map(([k, d]) => (
              <Link
                key={k}
                to={`/legal/${k}`}
                className={`rounded-full border px-4 py-2 text-xs normal-case tracking-normal transition-colors ${k === slug ? 'border-primary/50 bg-primary/[0.1] text-primary' : 'border-white/15 text-foreground/70 hover:border-primary/40 hover:text-primary'}`}
              >
                {d.title}
              </Link>
            ))}
          </nav>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Legal;
