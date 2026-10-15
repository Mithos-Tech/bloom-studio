import { ArrowUpRight, ArrowUp } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Footer = () => {
  const year = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [time, setTime] = useState('--:--');

  useEffect(() => {
    const update = () =>
      setTime(
        new Date().toLocaleTimeString('es-PE', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        })
      );
    update();
    const id = setInterval(update, 30000);
    return () => clearInterval(id);
  }, []);

  const go = (id: string) => {
    if (id === 'inicio') {
      if (location.pathname !== '/') navigate('/');
      else window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (location.pathname !== '/') {
      navigate('/#' + id);
    } else {
      document
        .getElementById(id)
        ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollTop = () =>
    window.scrollTo({ top: 0, behavior: 'smooth' });

  const navigateLinks: { label: string; id?: string; to?: string }[] = [
    { label: 'Inicio', id: 'inicio' },
    { label: 'Servicios', id: 'servicios' },
    { label: 'Proyectos', id: 'proyectos' },
    { label: 'Proceso', id: 'proceso' },
    { label: 'Por qué nosotros', id: 'por-que' },
    { label: 'FAQs', id: 'faqs' },
    { label: 'Contacto', id: 'contacto' },
  ];

  const legalLinks = [
    { label: 'Términos de servicio', href: '/legal/terminos' },
    { label: 'Política de privacidad', href: '/legal/privacidad' },
    { label: 'Cookies', href: '/legal/cookies' },
    { label: 'Uso de IA', href: '/legal/ia' },
    { label: '404', href: '/404' },
    { label: 'Portafolio', href: '/portafolio' },
  ];

  const socials = [
    { label: 'IG', href: '#' },
    { label: 'Li', href: '#' },
    { label: 'Dr', href: '#' },
    { label: 'Gh', href: '#' },
    { label: 'WA', href: 'https://wa.me/51987654321' },
  ];

  return (
    <footer className="relative border-t border-white/[0.08] bg-background overflow-hidden">
      {/* ───────────── Upper block: newsletter + navigate + links ───────────── */}
      <div className="section-container pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Newsletter */}
          <div className="lg:col-span-6">
            <div className="flex items-start gap-6 mb-4">
              <h2 className="text-subtitle leading-[1.1] max-w-md">
                <span className="text-foreground">Mantente en</span>
                <br />
                <span className="font-serif-display text-coral">contacto</span>
                <span className="text-foreground">.</span>
              </h2>
              <div className="hidden md:block mt-2">
                {/* Decorative dot cluster */}
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                  {Array.from({ length: 60 }).map((_, i) => {
                    const a = (i / 60) * Math.PI * 2;
                    const r = 16 + (i % 5) * 5;
                    const x = 40 + Math.cos(a) * r;
                    const y = 40 + Math.sin(a) * r;
                    return (
                      <circle
                        key={i}
                        cx={x}
                        cy={y}
                        r="1.4"
                        fill="hsl(var(--primary))"
                        opacity={0.4 + ((i * 13) % 60) / 100}
                      />
                    );
                  })}
                </svg>
              </div>
            </div>
            <p className="text-foreground/65 text-paragraph max-w-sm mb-8">
              Recibe ideas, casos y novedades de Bloom directo a tu inbox.{' '}
              <span className="text-coral">*</span>
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="max-w-md space-y-5"
            >
              <div className="border-b border-white/15 focus-within:border-primary transition-colors py-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Tu correo electrónico"
                  className="w-full bg-transparent outline-none text-foreground placeholder:text-foreground/40 text-sm py-2"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-primary/25 hover:bg-primary/40 text-foreground border border-primary/40 px-6 py-4 flex items-center justify-center gap-3 normal-case tracking-normal text-sm font-medium transition-all"
              >
                Únete al newsletter
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <p className="text-xs text-foreground/50 normal-case tracking-normal">
                Al suscribirte aceptas nuestros{' '}
                <a href="/legal/terminos" className="text-coral hover:underline">
                  Términos & Servicio.
                </a>
              </p>
              <p className="text-xs text-foreground/40 normal-case tracking-normal">
                <span className="text-coral">*</span> Sin spam, solo lo bueno.
              </p>
            </form>
          </div>

          {/* Navigate */}
          <div className="lg:col-span-3">
            <p className="text-mono-meta mb-5 pb-3 border-b border-white/[0.08]">
              Navega
            </p>
            <ul className="space-y-3">
              {navigateLinks.map((l) => (
                <li key={l.label}>
                  <button
                    onClick={() => l.id && go(l.id)}
                    className="text-foreground/85 hover:text-primary transition-colors text-sm normal-case tracking-normal"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div className="lg:col-span-3">
            <p className="text-mono-meta mb-5 pb-3 border-b border-white/[0.08]">
              Enlaces
            </p>
            <ul className="space-y-3">
              {legalLinks.map((l) => (
                <li key={l.label}>
                  {l.href.startsWith('/') ? (
                    <Link
                      to={l.href}
                      className="text-foreground/85 hover:text-primary transition-colors text-sm normal-case tracking-normal"
                    >
                      {l.label}
                    </Link>
                  ) : (
                    <a
                      href={l.href}
                      className="text-foreground/85 hover:text-primary transition-colors text-sm normal-case tracking-normal"
                    >
                      {l.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <p className="text-mono-meta mb-4">Síguenos</p>
              <div className="flex flex-wrap gap-4">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    className="text-coral hover:text-foreground transition-colors text-sm normal-case tracking-normal"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ───────────── Divider ticks ───────────── */}
      <div
        className="h-3 border-y border-white/[0.06]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(90deg, hsl(var(--foreground) / 0.18) 0 1px, transparent 1px 8px)',
        }}
      />

      {/* ───────────── Lower block: brand + addresses ───────────── */}
      <div className="section-container pt-16 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Brand */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-4">
              <h3 className="text-display leading-none whitespace-nowrap">
                <span className="text-coral">Bloom</span>
                <span className="text-foreground/40">\</span>
                <span className="text-foreground/70">Studio</span>
              </h3>
            </div>

            <div className="flex items-start gap-4 max-w-md">
              <img
                src="/bloom-link-orange.svg"
                alt="Bloom"
                className="h-10 w-10 rounded-full bg-primary/15 p-2 shrink-0 mt-0.5"
              />
              <p className="text-foreground/65 text-body-compact">
                Estudio creativo para diseño, estrategia y experiencias digitales premium a escala.
              </p>
            </div>
          </div>

          {/* Offline */}
          <div className="lg:col-span-3">
            <p className="text-mono-meta mb-5 pb-3 border-b border-white/[0.08]">
              Offline
            </p>
            <p className="text-foreground/90 text-sm leading-relaxed">
              Bloom Studio S.A.C.
              <br />
              Av. Larco 345, Of. 5<br />
              Miraflores, Lima 15074
            </p>

            <p className="text-mono-meta mt-10 mb-3">Hora local</p>
            <p className="text-foreground/85 text-sm tabular-nums">
              {time} · UTC-5
            </p>
          </div>

          {/* Online + phone */}
          <div className="lg:col-span-3">
            <p className="text-mono-meta mb-5 pb-3 border-b border-white/[0.08]">
              Online
            </p>
            <a
              href="mailto:hola@bloom.com"
              className="text-coral hover:underline text-sm break-all"
            >
              hola@bloom.com
            </a>

            <p className="text-mono-meta mt-10 mb-3">Teléfono</p>
            <a
              href="tel:+51987654321"
              className="text-display text-3xl md:text-4xl text-foreground/85 hover:text-primary transition-colors block leading-none"
            >
              (051) 987-6543
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-6 border-t border-white/[0.08] flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-1">
            <p className="text-xs text-foreground/60 normal-case tracking-normal">
              © {year} Bloom by <span className="text-coral">Inspyrio Studio</span>. Todos los derechos reservados.
            </p>
            <p className="text-xs text-foreground/60 normal-case tracking-normal flex items-center gap-3">
              <span className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                </span>
                Disponible para nuevos proyectos
              </span>
            </p>
          </div>

          <button
            onClick={scrollTop}
            aria-label="Volver arriba"
            className="w-10 h-10 rounded-full border border-primary/40 bg-primary/[0.08] flex items-center justify-center text-primary hover:text-primary-foreground hover:bg-primary transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_hsl(var(--primary)/0.4)]"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
