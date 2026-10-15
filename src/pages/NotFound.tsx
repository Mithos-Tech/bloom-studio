import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import SEO from "@/components/SEO";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
      <SEO
        title="404 · Página no encontrada | Bloom"
        description="La página que buscas no existe o ha sido movida."
        path={location.pathname}
        noindex
      />
      <div className="text-center space-y-6 px-6">
        <p className="text-mono-meta text-primary">// 404</p>
        <h1 className="font-display text-5xl md:text-6xl font-bold tracking-tight">
          Página no encontrada
        </h1>
        <p className="text-foreground/60 max-w-md mx-auto">
          La ruta <span className="text-primary">{location.pathname}</span> no existe en este universo.
        </p>
        <a
          href="/"
          className="btn-pill inline-flex normal-case text-sm tracking-normal mt-4"
        >
          Volver al inicio
        </a>
      </div>
    </div>
  );
};

export default NotFound;
