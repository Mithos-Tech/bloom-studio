import { ReactNode, useEffect, useRef, useState } from 'react';

interface Props {
  children: ReactNode;
  delay?: number;
  className?: string;
  /** translate distance in px */
  y?: number;
}

/**
 * Sofisticated scroll-triggered reveal. Sections slide up from below
 * with a smooth eased transition. Respects prefers-reduced-motion.
 */
const ScrollReveal = ({ children, delay = 0, className = '', y = 120 }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0, rootMargin: '0px 0px -15% 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        transform: visible ? 'translate3d(0,0,0)' : `translate3d(0,${y}px,0)`,
        opacity: visible ? 1 : 0,
        transition: `transform 1.1s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, opacity 0.9s ease-out ${delay}ms`,
        willChange: 'transform, opacity',
      }}
      className={className}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
