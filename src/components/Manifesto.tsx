const WORDS = ['escuchamos', 'imaginamos', 'creamos', 'cosas hermosas'];

const Row = ({ reverse = false }: { reverse?: boolean }) => (
  <div
    className="flex whitespace-nowrap will-change-transform"
    style={{
      animation: `${reverse ? 'marqueeReverse' : 'marquee'} 38s linear infinite`,
    }}
  >
    {[...Array(4)].map((_, dup) => (
      <div key={dup} className="flex items-center shrink-0">
        {WORDS.map((w, i) => (
          <span key={`${dup}-${i}`} className="flex items-center shrink-0">
            <span
              className={`text-display leading-[1] px-8 transition-transform duration-500 ${
                i % 2 === 1
                  ? 'font-serif-display text-coral'
                  : 'text-foreground'
              }`}
            >
              {w}
            </span>
            <span
              className="mx-6 inline-block w-3 h-3 rounded-full bg-primary/80 shrink-0"
              aria-hidden
            />
          </span>
        ))}
      </div>
    ))}
  </div>
);

const Manifesto = () => {
  return (
    <section
      aria-labelledby="manifesto-title"
      className="relative overflow-hidden py-24 md:py-32 border-y border-white/[0.06] bg-background"
    >
      <h2 id="manifesto-title" className="sr-only">
        Manifiesto Bloom
      </h2>

      {/* Glow editorial */}
      <div
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{ background: 'var(--gradient-glow)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 mb-12 flex items-end justify-between gap-6">
        <p className="section-tick">// 00.05°</p>
        <p className="text-mono-meta text-right max-w-xs">
          Manifiesto · cómo trabajamos<br />en Bloom
        </p>
      </div>

      <div className="relative z-10">
        <Row />
      </div>
    </section>
  );
};

export default Manifesto;
