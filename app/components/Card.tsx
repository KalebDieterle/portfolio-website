interface Card {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  ctaText?: string;
  ctaHref?: string;
}

const Card = ({ title, subtitle, children, ctaText, ctaHref }: Card) => (
  <div
    className="rounded-xl border border-cyan-500/15 bg-slate-900/60 shadow-lg shadow-cyan-500/10 p-5 hover:-translate-y-1 
  hover:border-cyan-400/30 transition duration-200"
  >
    <div className="mb-3">
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      {subtitle && <p className="text-sm text-gray-400">{subtitle}</p>}
    </div>
    <div className="text-gray-200 text-sm leading-relaxed space-y-2">
      {children}
    </div>
    {ctaText && ctaHref && (
      <a
        href={ctaHref}
        className="mt-4 inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200 text-sm font-medium"
      >
        {ctaText} →
      </a>
    )}
  </div>
);

export default Card;
