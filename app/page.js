"use client";

import { useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import Navbar from "../components/Navbar";
import SectionHeader from "../components/SectionHeader";
import VideoCard from "../components/VideoCard";
import FAQ from "../components/FAQ";
import { siteConfig } from "../data/site.config";

function LogoMarquee({ compact = false }) {
  return (
    <div className={compact ? "" : "border-y border-[#d9ad63]/10 bg-black/20 px-5 py-7"}>
      <div className="mx-auto max-w-6xl">
        <p className="mb-5 text-center text-xs font-black uppercase tracking-[0.32em] text-white/35">
          Ils m’ont déjà fait confiance
        </p>
        <div className="overflow-hidden">
          <div className="flex min-w-max animate-marquee items-center gap-10">
            {[...siteConfig.trustedBy, ...siteConfig.trustedBy].map((client, index) => (
              <div key={`${client.name}-${index}`} className="flex items-center gap-3 opacity-75 grayscale transition hover:opacity-100 hover:grayscale-0">
                <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-white p-1">
                  <img src={client.avatar} alt={client.name} className="h-full w-full rounded-full object-contain" />
                </div>
                <span className="text-sm font-black uppercase tracking-[0.18em] text-white/60">{client.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [showUniqueDetails, setShowUniqueDetails] = useState(false);

  return (
    <main className="min-h-screen overflow-hidden">
      <Navbar />

      <section className="relative flex min-h-[82vh] items-center overflow-hidden px-5 pb-14 pt-28">
        <img
          src={siteConfig.brand.realPhoto}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 h-full w-full object-cover opacity-[0.56] [mask-image:linear-gradient(90deg,black_0%,black_100%)]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,4,3,.82)_0%,rgba(5,4,3,.76)_32%,rgba(5,4,3,.50)_62%,rgba(5,4,3,.34)_100%),linear-gradient(180deg,rgba(5,4,3,.96)_0%,rgba(5,4,3,.48)_48%,#050403_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_40%,rgba(217,173,99,.16),transparent_30%)]" />
        <div className="absolute left-1/2 top-28 h-px w-[80%] max-w-5xl -translate-x-1/2 bg-gradient-to-r from-transparent via-[#d9ad63]/20 to-transparent" />

        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="max-w-3xl rounded-[2rem] bg-black/18 p-4 text-center backdrop-blur-[1px] lg:text-left">
            <p className="mb-5 text-xs font-black uppercase tracking-[0.34em] text-[#d9ad63]">{siteConfig.hero.eyebrow}</p>
            <h1 className="text-4xl font-black tracking-[-0.055em] text-white sm:text-5xl md:text-6xl">
              <span className="block">{siteConfig.hero.titleLine1}</span>
              <span className="block">{siteConfig.hero.titleLine2}</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/68 md:text-xl md:leading-9">{siteConfig.hero.subtitle}</p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <a href={siteConfig.links.calendly} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#d9ad63] px-7 py-4 font-black uppercase tracking-[0.16em] text-[#080603] transition hover:scale-[1.03]">
                {siteConfig.hero.primaryCta} <ArrowRight size={18} />
              </a>
              <a href="#work" className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-7 py-4 font-black uppercase tracking-[0.16em] text-white transition hover:bg-white/10">
                {siteConfig.hero.secondaryCta}
              </a>
            </div>

            <div className="mt-10 max-w-3xl rounded-2xl border border-[#d9ad63]/10 bg-black/20 px-4 py-4 backdrop-blur-sm">
              <LogoMarquee compact />
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="px-5 py-24">
        <SectionHeader eyebrow="Transformation" title="Avant / Après" subtitle="Deux exemples pour montrer comment un sujet devient une vidéo plus claire, plus rythmée et plus narrative." />
        <div className="mx-auto mb-10 max-w-5xl rounded-2xl border border-[#d9ad63]/10 bg-black/20 px-4 py-4 backdrop-blur-sm">
          <LogoMarquee compact />
        </div>
        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
          {siteConfig.beforeAfter.map((video) => <VideoCard key={video.title} video={video} vertical />)}
        </div>
      </section>

      <section className="px-5 py-20">
        <div className="premium-card mx-auto grid max-w-6xl items-center gap-8 rounded-[2rem] p-7 md:grid-cols-[0.9fr_1.1fr]">
          <img src={siteConfig.brand.realPhoto} alt="Paul Le Monteur au travail" className="h-80 w-full rounded-3xl object-cover" />
          <div>
            <p className="text-xs font-black uppercase tracking-[0.35em] text-[#d9ad63]">Derrière Narratif Pro</p>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] md:text-6xl">Un vrai workflow derrière chaque vidéo.</h2>
            <div className="mt-6 space-y-3 text-base leading-8 text-white/60">
              <p>Tu échanges directement avec moi.</p>
              <p>Je travaille le rythme, la narration et la rétention sur chaque projet.</p>
              <p>L’objectif : rendre ton sujet clair, captivant et agréable à suivre jusqu’à la fin.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="offers" className="px-5 py-24">
        <SectionHeader eyebrow="Offres" title="Deux façons de travailler ensemble" subtitle="Un projet unique ou une collaboration plus régulière selon ton besoin." />

        <div className="mx-auto grid max-w-6xl items-stretch gap-8 lg:grid-cols-2">
          <div className="premium-card flex h-full flex-col rounded-[2rem] p-7">
            <h3 className="text-3xl font-black tracking-tight">{siteConfig.offers.unique.title}</h3>
            <p className="mt-4 text-sm leading-7 text-white/55">{siteConfig.offers.unique.description}</p>
            <ul className="mt-7 space-y-3">
              {siteConfig.offers.unique.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3 text-sm text-white/70">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#d9ad63]" />{bullet}
                </li>
              ))}
            </ul>
            <button onClick={() => setShowUniqueDetails(!showUniqueDetails)} className="mt-auto inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-[#d9ad63]/20 bg-[#d9ad63]/10 px-5 py-4 font-bold text-[#e6c27e] transition hover:bg-[#d9ad63] hover:text-[#080603]">
              {siteConfig.offers.unique.detailsButton}
              <ChevronDown className={`transition ${showUniqueDetails ? "rotate-180" : ""}`} size={18} />
            </button>
          </div>

          <div className="premium-card flex h-full flex-col rounded-[2rem] p-7">
            <h3 className="text-3xl font-black tracking-tight">{siteConfig.offers.collaboration.title}</h3>
            <p className="mt-4 text-sm leading-7 text-white/55">{siteConfig.offers.collaboration.description}</p>
            <ul className="mt-7 space-y-3">
              {siteConfig.offers.collaboration.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3 text-sm text-white/70">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#d9ad63]" />{bullet}
                </li>
              ))}
            </ul>
            <a href={siteConfig.links.calendly} target="_blank" rel="noreferrer" className="mt-auto inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#d9ad63] px-5 py-4 font-black text-[#080603] transition hover:scale-[1.02]">
              {siteConfig.offers.collaboration.cta} <ArrowRight size={17} />
            </a>
          </div>
        </div>

        {showUniqueDetails && (
          <div className="mx-auto mt-8 max-w-6xl">
            <div className="mb-5 text-center">
              <p className="text-xs font-black uppercase tracking-[0.32em] text-[#d9ad63]">Choisis le format adapté au projet</p>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {siteConfig.offers.unique.options.map((option) => (
                <div key={option.name} className="premium-card rounded-3xl p-6">
                  <h4 className="text-2xl font-black text-white">{option.name}</h4>
                  <p className="mt-3 text-sm leading-7 text-white/55">{option.description}</p>
                  <ul className="mt-5 space-y-3">
                    {option.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3 text-sm text-white/70">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#d9ad63]" />{bullet}
                      </li>
                    ))}
                  </ul>
                  <a href={siteConfig.links.calendly} target="_blank" rel="noreferrer" className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-[#d9ad63]/20 bg-[#d9ad63]/10 px-5 py-4 font-bold text-[#e6c27e] transition hover:bg-[#d9ad63] hover:text-[#080603]">
                    Discuter du projet <ArrowRight size={17} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      <section className="px-5 py-24">
        <SectionHeader eyebrow="Confiance" title="Ils m’ont fait confiance" />
        <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {siteConfig.trustedBy.map((client) => (
            <div key={client.name} className="premium-card flex items-center gap-4 rounded-3xl p-5">
              <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl bg-white p-1">
                <img src={client.avatar} alt={client.name} className="h-full w-full rounded-xl object-contain" />
              </div>
              <div><h3 className="font-black">{client.name}</h3><p className="text-sm text-white/50">{client.role}</p></div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-24">
        <SectionHeader eyebrow="Méthode narrative" title="Ce qui rend une vidéo impossible à quitter" subtitle="Que le sujet parle d’actualité, de culture, de business ou de jeux vidéo, le vrai levier reste le même : une narration claire, tendue et rythmée." />
        <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {siteConfig.mechanisms.map((item) => (
            <div key={item} className="premium-card rounded-3xl p-6">
              <p className="text-lg font-black text-white">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-20">
        <div className="premium-card mx-auto grid max-w-6xl items-center gap-8 rounded-[2rem] p-7 md:grid-cols-[0.85fr_1.15fr]">
          <img src={siteConfig.brand.realPhoto} alt="Paul Le Monteur" className="h-72 w-full rounded-3xl object-cover" />
          <div>
            <p className="text-xs font-black uppercase tracking-[0.35em] text-[#d9ad63]">Un même monteur, deux spécialités</p>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] md:text-6xl">Besoin d’un montage plus classique ?</h2>
            <p className="mt-5 text-base leading-8 text-white/60">Pour du short form, UGC, clipping ou montage plus généraliste, tu peux aussi consulter mon portfolio principal.</p>
            <a href={siteConfig.links.mainPortfolio} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center justify-center gap-2 rounded-2xl border border-[#d9ad63]/20 bg-[#d9ad63]/10 px-5 py-4 font-bold text-[#e6c27e] transition hover:bg-[#d9ad63] hover:text-[#080603]">
              Voir mon portfolio général <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>

      <section id="faq" className="px-5 py-24"><SectionHeader eyebrow="FAQ" title="Questions fréquentes" /><FAQ /></section>

      <section className="px-5 py-28 text-center">
        <p className="text-xs font-black uppercase tracking-[0.38em] text-[#d9ad63]">Prochaine histoire</p>
        <h2 className="mx-auto mt-5 max-w-5xl text-5xl font-black tracking-[-0.06em] md:text-8xl">Un sujet fort mérite une vraie narration.</h2>
        <a href={siteConfig.links.calendly} target="_blank" rel="noreferrer" className="mt-10 inline-flex items-center justify-center gap-2 rounded-2xl bg-[#d9ad63] px-8 py-4 font-black uppercase tracking-[0.18em] text-[#080603] transition hover:scale-[1.03]">Réserver un appel <ArrowRight size={18} /></a>
      </section>

      <footer className="border-t border-[#d9ad63]/10 px-5 py-8">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 text-sm text-white/40 md:flex-row">
          <p>© 2026 — Narratif Pro, par Paul Le Monteur</p>
          <p>Mentions légales</p>
          <a href={`mailto:${siteConfig.links.email}`}>{siteConfig.links.email}</a>
        </div>
      </footer>
    </main>
  );
}
