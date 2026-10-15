import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [hoverIdx, setHoverIdx] = useState<number | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { name: 'Inicio', path: '/', type: 'route' },
    { name: 'Servicios', path: 'servicios', type: 'scroll' },
    { name: 'Portafolio', path: '/portafolio', type: 'route' },
    { name: 'Contacto', path: '/contacto', type: 'route' },
  ] as const;


  // Hash scroll handling
  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash) {
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, [location]);

  // Se desvanece suavemente al hacer scroll y solo reaparece al volver al hero
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const isAtHero = y < 90;
      setVisible(isAtHero || isOpen);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [isOpen]);

  const handleScrollTo = (elementId: string) => {
    setIsOpen(false);
    if (location.pathname !== '/') {
      navigate('/#' + elementId);
      return;
    }
    document.getElementById(elementId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const shellState = visible || isOpen
    ? 'opacity-100 translate-y-0 pointer-events-auto'
    : '-translate-y-5 opacity-0 pointer-events-none';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-framer ${shellState}`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-4 md:pt-6">
        {/* Desktop — floating, no horizontal bar */}
        <div className="hidden lg:flex items-center justify-between gap-4">
          {/* Logo floating pill */}
          <Link
            to="/"
            onClick={() => {
              if (location.pathname === '/') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className="group flex items-center gap-2.5 py-2 transition-opacity duration-500"
          >
            <span className="relative flex items-center justify-center w-9 h-9">
              <img
                src="/bloom-link-orange.svg"
                alt="Bloom"
                className="h-7 w-auto transition-transform duration-700 group-hover:rotate-[180deg]"
              />
            </span>
            <span className="text-2xl font-bold tracking-normal text-primary">Bloom</span>
          </Link>

          {/* Nav floating pill */}
          <nav
            className="relative flex items-center gap-1 px-2.5 py-2 rounded-full bg-background/70 backdrop-blur-xl border border-white/[0.08] shadow-[0_8px_30px_-12px_rgba(0,0,0,0.6)]"
            onMouseLeave={() => setHoverIdx(null)}
          >
            {navItems.map((item, idx) => {
              const isActive = item.type === 'route' && location.pathname === item.path;
              const isHover = hoverIdx === idx;
              const base =
                'relative flex items-center gap-1.5 px-5 py-2.5 rounded-full text-[0.9375rem] normal-case tracking-normal font-medium transition-colors duration-300';
              const stateCls = isActive ? 'text-foreground' : 'text-foreground/55 hover:text-foreground';
              const content = (
                <>
                  {/* hover blob */}
                  {isHover && (
                    <span className="absolute inset-0 rounded-full bg-white/[0.06] animate-fade-in" />
                  )}
                  {/* active underline dot */}
                  {isActive && (
                    <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_10px_hsl(var(--primary))]" />
                  )}
                  <span className="relative z-10">{item.name}</span>

                </>
              );
              const handlers = {
                onMouseEnter: () => setHoverIdx(idx),
              };
              return item.type === 'route' ? (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => {
                    if (item.path === '/' && location.pathname === '/') {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                  className={`${base} ${stateCls}`}
                  {...handlers}
                >
                  {content}
                </Link>
              ) : (
                <Button variant="unstyled" size="content"
                  key={item.path}
                  onClick={() => handleScrollTo(item.path)}
                  className={`${base} ${stateCls}`}
                  {...handlers}
                >
                  {content}
                </Button>
              );
            })}
          </nav>

          {/* CTA floating */}
          <a
            href="https://cal.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill rounded-full text-[0.9375rem] normal-case tracking-normal px-6 py-2.5 shadow-[0_8px_30px_-12px_hsl(var(--primary)/0.6)]"
          >
            Agendar
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile — floating logo + toggle (hidden when menu open) */}
        {!isOpen && (
          <div className="lg:hidden flex items-center justify-between">
            <Link
              to="/"
              onClick={() => {
                if (location.pathname === '/') {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              className="flex items-center gap-2 py-1.5"
            >
              <span className="flex items-center justify-center w-7 h-7">
                <img src="/bloom-link-orange.svg" alt="Bloom" className="h-5 w-auto" />
              </span>
              <span className="text-lg font-bold text-primary">Bloom</span>
            </Link>
            <Button variant="unstyled" size="content"
              className="p-3 rounded-full bg-background/70 backdrop-blur-xl border border-white/[0.08] hover:border-primary/60 transition-colors"
              onClick={() => setIsOpen(true)}
              aria-label="Abrir menú"
            >
              <Menu size={18} />
            </Button>
          </div>
        )}
      </div>

      {/* Mobile menu — refined floating card (Framer style) */}
      {isOpen && (
        <>
          <Button variant="unstyled" size="content"
            aria-label="Cerrar menú"
            onClick={() => setIsOpen(false)}
            className="lg:hidden fixed inset-0 z-40 bg-background/60 backdrop-blur-md animate-fade-in"
          />
          <div className="lg:hidden fixed z-50 top-4 left-4 right-4 mx-auto max-w-sm rounded-3xl border border-white/[0.08] bg-background/90 backdrop-blur-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)] animate-fade-in overflow-hidden">
            <div className="flex items-center justify-between px-4 pt-3 pb-3 border-b border-white/[0.06]">
              <Link
                to="/"
                onClick={() => {
                  setIsOpen(false);
                  if (location.pathname === '/') {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
                className="flex items-center gap-2"
              >
                <span className="flex items-center justify-center w-7 h-7">
                  <img src="/bloom-link-orange.svg" alt="Bloom" className="h-5 w-auto" />
                </span>
                <span className="text-lg font-bold text-primary">Bloom</span>
              </Link>
              <Button variant="unstyled" size="content"
                onClick={() => setIsOpen(false)}
                aria-label="Cerrar"
                className="flex items-center justify-center w-8 h-8 rounded-full bg-white/[0.04] hover:bg-white/[0.1] border border-white/[0.06] hover:border-primary/40 transition-all"
              >
                <X size={14} />
              </Button>
            </div>

            <nav className="flex flex-col items-center px-3 py-3 gap-1">
              {navItems.map((item, idx) => {
                const isActive = item.type === 'route' && location.pathname === item.path;
                const cls = `group relative flex items-center justify-center gap-2.5 px-6 py-2.5 rounded-2xl text-lg font-display tracking-normal transition-all duration-300 w-full text-center ${
                  isActive
                    ? 'text-primary bg-primary/[0.08]'
                    : 'text-foreground/75 hover:text-foreground hover:bg-white/[0.05]'
                }`;
                const content = (
                  <>
                    <span className="font-medium">{item.name}</span>
                    <ArrowUpRight
                      size={15}
                      className={`transition-all duration-300 ${
                        isActive
                          ? 'opacity-100 text-primary translate-x-0'
                          : 'opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 text-primary'
                      }`}
                    />
                  </>
                );
                const style = { animationDelay: `${idx * 50}ms` } as React.CSSProperties;
                return item.type === 'route' ? (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`${cls} animate-fade-in`}
                    style={style}
                    onClick={() => {
                      setIsOpen(false);
                      if (item.path === '/' && location.pathname === '/') {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }
                    }}
                  >
                    {content}
                  </Link>
                ) : (
                  <Button variant="unstyled" size="content"
                    key={item.path}
                    onClick={() => handleScrollTo(item.path)}
                    className={`${cls} animate-fade-in`}
                    style={style}
                  >
                    {content}
                  </Button>
                );
              })}
            </nav>

            <div className="px-4 pb-4 pt-1 border-t border-white/[0.06]">
              <a
                href="https://cal.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="btn-pill rounded-full w-full justify-center normal-case tracking-normal text-sm px-5 py-2.5"
              >
                Agendar reunión
                <ArrowUpRight />
              </a>
              <p className="text-mono-meta normal-case text-[0.55rem] text-foreground/40 text-center mt-3">
                Bloom · {new Date().getFullYear()}
              </p>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Navigation;
