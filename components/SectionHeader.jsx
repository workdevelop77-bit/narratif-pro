export default function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      {eyebrow && <p className="mb-4 text-xs font-black uppercase tracking-[0.38em] text-[#d9ad63]">{eyebrow}</p>}
      <h2 className="text-4xl font-black tracking-[-0.05em] text-white md:text-7xl">{title}</h2>
      {subtitle && <p className="mt-5 text-base leading-8 text-white/55 md:text-lg">{subtitle}</p>}
    </div>
  );
}
