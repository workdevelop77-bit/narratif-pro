import { siteConfig } from "../data/site.config";

export default function Navbar() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-[#d9ad63]/10 bg-[#050403]/75 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
        <a href="#" className="flex items-center gap-3 text-white">
          <img src={siteConfig.brand.realPhoto || siteConfig.brand.logoImage} alt="Logo" className="h-9 w-9 rounded-full object-cover object-[38%_58%]" />
          <span className="leading-none">
            <span className="block text-sm font-black uppercase tracking-[0.22em]">{siteConfig.brand.logoText}</span>
            <span className="mt-1 block text-[10px] font-bold uppercase tracking-[0.28em] text-white/40">{siteConfig.brand.subLogoText}</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 text-xs font-bold uppercase tracking-[0.25em] text-white/45 md:flex">
          {siteConfig.nav.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-white">{item.label}</a>
          ))}
        </nav>

        <a
          href={siteConfig.links.calendly}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-[#d9ad63]/35 bg-[#d9ad63]/10 px-5 py-2.5 text-xs font-black uppercase tracking-[0.18em] text-[#e6c27e] transition hover:bg-[#d9ad63] hover:text-[#080603]"
        >
          Contact
        </a>
      </div>
    </header>
  );
}
