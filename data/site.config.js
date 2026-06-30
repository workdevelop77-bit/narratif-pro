export const siteConfig = {
  seo: {
    title: "Narratif Pro — par Paul Le Monteur",
    description: "Portfolio spécialisé dans les vidéos narratives, documentaires et storytelling."
  },

  brand: {
    logoText: "NARRATIF PRO",
    subLogoText: "par Paul Le Monteur",
    logoImage: "/images/paul-logo.png",
    realPhoto: "/images/paul-real-setup.png"
  },

  links: {
    calendly: "https://calendly.com/work_develop77/30min",
    email: "work_develop77@yahoo.com",
    mainPortfolio: "https://portfolio-five-alpha-x4xw011ff6.vercel.app"
  },

  nav: [
    { label: "Travaux", href: "#work" },
    { label: "Offres", href: "#offers" },
    { label: "FAQ", href: "#faq" }
  ],

  hero: {
    eyebrow: "STORYTELLING • DOCUMENTAIRE • VIDÉO NARRATIVE",
    titleLine1: "Une bonne vidéo informe.",
    titleLine2: "Une grande vidéo raconte une histoire.",
    subtitle: "Narratif Pro transforme tes sujets culturels, d’actualité ou business en vidéos pensées pour capter l’attention et garder le spectateur jusqu’à la fin.",
    primaryCta: "Réserver un appel",
    secondaryCta: "Voir les travaux"
  },

  beforeAfter: [
    {
      title: "Sujet politique",
      category: "Vidéo narrative",
      videoUrl: "/videos/sujet-politique.mp4",
      type: "mp4",
      description: "Un sujet politique transformé en narration claire, rythmée et plus facile à suivre."
    },
    {
      title: "Sujet d’actualité",
      category: "Vidéo narrative",
      videoUrl: "/videos/sujet-actualite.mp4",
      type: "mp4",
      description: "Un sujet d’actualité monté pour capter vite, maintenir la tension et guider le spectateur."
    }
  ],

  mechanisms: [
    "Construire une tension",
    "Clarifier un sujet complexe",
    "Créer une accroche forte",
    "Donner du rythme à l’information",
    "Transformer un fait en histoire",
    "Garder le spectateur jusqu’à la fin"
  ],

  trustedBy: [
    { name: "Shortmotion", role: "Agence / short form", avatar: "/images/shortmotion.png" },
    { name: "Souli", role: "Créateur de contenu poker", avatar: "/images/souli.jpg" },
    { name: "Capsme", role: "Marque e-commerce", avatar: "/images/capsme.png" },
    { name: "COMM & PROD", role: "Agence media buying", avatar: "/images/comm-prod.webp" },
    { name: "Mickaël WU", role: "Créateur de contenu", avatar: "/images/mickael-wu.jpg" },
    { name: "Peut-être toi ?", role: "Un projet narratif à construire ?", avatar: "/images/unknown.jpg" }
  ],

  offers: {
    unique: {
      title: "Vidéo narrative unique",
      description: "Pour transformer un sujet précis en vidéo captivante, qu’il s’agisse d’un format court ou d’un format long.",
      bullets: ["Format court", "Format long", "Budget adapté à la demande"],
      detailsButton: "Plus de détails",
      options: [
        {
          name: "Format court",
          description: "Un sujet raconté rapidement, avec une structure claire, un rythme fort et une accroche pensée pour retenir.",
          bullets: ["Short narratif", "Clipping storytelling", "Hook renforcé", "Budget adapté"]
        },
        {
          name: "Format long",
          description: "Une vidéo plus complète, pensée comme une histoire : contexte, tension, progression, conclusion.",
          bullets: ["Mini-documentaire", "Vidéo YouTube", "Storytelling business", "Budget adapté"]
        }
      ]
    },
    collaboration: {
      title: "Collaboration narrative",
      description: "Pour les créateurs ou marques qui veulent produire plusieurs vidéos avec un style narratif cohérent sur la durée.",
      bullets: ["Série de vidéos", "Compréhension de ton univers", "Suivi créatif", "Direction narrative", "Budget adapté au volume"],
      cta: "Parler d’une collaboration"
    }
  },

  faq: [
    {
      question: "Quels sujets peuvent être traités ?",
      answer: "Business, artistes, jeux vidéo, actualité, marketing, culture, entreprises ou scandales : l’objectif est de transformer le sujet en histoire claire et captivante."
    },
    {
      question: "Tu fais seulement le montage ou aussi la narration ?",
      answer: "Le cœur du travail reste le montage, mais l’approche est narrative : rythme, structure, habillage, tension et clarté du message."
    },
    {
      question: "Est-ce adapté aux vidéos longues ?",
      answer: "Oui. Le format narratif fonctionne particulièrement bien sur les vidéos longues, mais peut aussi être décliné en formats courts."
    },
    {
      question: "Comment réserver un appel ?",
      answer: "Clique simplement sur un bouton de réservation. Tu seras redirigé vers Calendly."
    }
  ]
};
