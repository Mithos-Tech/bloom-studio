import { ReactNode } from 'react';

interface Props {
  tick: string;          // e.g. "// 00.04°"
  badge?: string;        // optional legacy prop, no longer rendered
  eyebrow?: string;      // small label
  title: ReactNode;      // headline
  description?: ReactNode;
}

const SectionHeader = ({ tick, eyebrow, title, description }: Props) => (
  <div className="section-header animate-slide-up">
    <div className="space-y-4 max-w-3xl">
      <div className="flex items-center gap-4">
        <span className="section-tick">{tick}</span>
        {eyebrow && <span className="text-mono-meta">· {eyebrow}</span>}
      </div>
      <h2 className="section-title">{title}</h2>
      {description && (
        <p className="text-paragraph text-foreground/70 max-w-xl">
          {description}
        </p>
      )}
    </div>
  </div>
);

export default SectionHeader;
