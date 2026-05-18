import Link from "next/link";
import {
  KNOWS_ABOUT,
  PERSON_ID,
  PROFILE_LINKS,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_UPDATED_AT,
  SITE_URL,
  SOCIALS,
  WEBSITE_ID,
} from "@/lib/site";

function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-zinc-500 hover:text-white transition-colors duration-200 border-b border-transparent hover:border-white"
    >
      {children}
    </a>
  );
}

export const dynamic = "force-static";

const BELIEFS = [
  {
    title: "Build for creative leverage",
    bullets: [
      "The best tools make ambitious work feel possible.",
      "AI should expand human taste, not flatten it.",
    ],
  },
  {
    title: "Own the ambiguity",
    bullets: [
      "I like work where nobody has the full map yet.",
      "Find the signal. Make the call.",
    ],
  },
  {
    title: "Keep loops tight",
    bullets: [
      "Engineers should talk to users, not just read tickets.",
      "A small real signal beats a polished assumption.",
    ],
  },
  {
    title: "Hire for slope",
    bullets: [
      "Learning speed, ownership, and taste over pedigree.",
      "Low ego when wrong. Hold the line when right.",
    ],
  },
  {
    title: "Stay personally weird",
    bullets: [
      <>
        <ExternalLink href="https://soundcloud.com/sanjuruk">Songs</ExternalLink>, basketball, subway{" "}
        <ExternalLink href="https://stonybrook.digication.com/brandon_loo/Through_the_Eyes_of_a_Subway_Musican">
          busking
        </ExternalLink>, moving countries: the non-work parts shape the work.
      </>,
    ],
  },
];

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": PERSON_ID,
        name: SITE_NAME,
        url: SITE_URL,
        description: SITE_DESCRIPTION,
        jobTitle: "Cofounder & CTO",
        worksFor: { "@type": "Organization", name: "Mythril", url: "https://mythril.io" },
        sameAs: PROFILE_LINKS,
        knowsAbout: KNOWS_ABOUT,
        knowsLanguage: ["English", "Sinhala", "Korean"],
      },
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: SITE_URL,
        name: SITE_NAME,
        description: SITE_DESCRIPTION,
        inLanguage: "en",
        publisher: { "@id": PERSON_ID },
      },
      {
        "@type": "ProfilePage",
        "@id": `${SITE_URL}/#profile`,
        url: SITE_URL,
        name: SITE_NAME,
        description: SITE_TAGLINE,
        dateModified: SITE_UPDATED_AT,
        isPartOf: { "@id": WEBSITE_ID },
        mainEntity: { "@id": PERSON_ID },
      },
    ],
  };

  return (
    <main className="animate-[fadeIn_0.8s_ease-out_forwards] w-full max-w-[700px] flex flex-col gap-12 mt-20 mb-20 mx-auto px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <header>
        <h1 className="text-3xl font-semibold tracking-tight mb-2">Sanju Lokuhitige</h1>
        <h2 className="text-lg font-normal text-zinc-500">
          I help creatives turn stories into franchises. Cofounder & CTO at{" "}
          <ExternalLink href="https://mythril.io">Mythril.io</ExternalLink>
        </h2>
      </header>

      <section className="flex flex-col gap-8">
        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-medium text-zinc-300">About me</h3>
          <ul className="flex flex-col gap-2 list-disc list-inside text-zinc-400 text-sm marker:text-zinc-600">
            <li>Roots in Sri Lanka. Educated in KR & US (CS, IoT, AI, Technology & Society).</li>
            <li>Engineering background in embedded systems, AI & SaaS startups in Seoul & SF.</li>
            <li>
              Scaled technical solutions & FDE teams at{" "}
              <ExternalLink href="https://protopie.io">ProtoPie</ExternalLink> &{" "}
              <ExternalLink href="https://arena.im">Arena</ExternalLink>.
            </li>
            <li>
              Currently lead AI strategy & engineering at{" "}
              <ExternalLink href="https://mythril.io">Mythril</ExternalLink>. Building the future of creative publishing.
            </li>
            <li>
              I speak <span className="font-medium">English</span>, <span className="font-medium">Sinhala</span> &{" "}
              <span className="font-medium">Korean</span>. I play basketball,{" "}
              <ExternalLink href="https://hevy.com/user/sanjuruk">gym x3/week</ExternalLink>, write songs occasionally.
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-zinc-400 text-sm">
            I write about building products, startup life, and what I learn along the way.{" "}
            <Link
              href="/blog"
              className="text-zinc-500 hover:text-white transition-colors duration-200 border-b border-transparent hover:border-white"
            >
              Read the blog
            </Link>
            .
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-medium text-zinc-300">What I Believe</h3>
          <ul className="flex flex-col gap-3 text-zinc-400 text-sm">
            {BELIEFS.map((belief) => (
              <li key={belief.title} className="flex flex-col gap-1">
                <span className="text-zinc-300 font-medium">{belief.title}</span>
                <ul className="flex flex-col gap-1 pl-4 list-disc list-inside marker:text-zinc-600">
                  {belief.bullets.map((bullet, index) => (
                    <li key={index}>{bullet}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="flex gap-6 mt-4 text-sm">
        <Link
          href="/blog"
          className="text-zinc-500 hover:text-white transition-colors duration-200 border-b border-transparent hover:border-white"
        >
          Blog
        </Link>
        {SOCIALS.map((link) => (
          <ExternalLink key={link.name} href={link.href}>
            {link.name}
          </ExternalLink>
        ))}
        <a
          href="mailto:hey@sanjuruk.com"
          className="text-zinc-500 hover:text-white transition-colors duration-200 border-b border-transparent hover:border-white"
        >
          Email
        </a>
      </section>
    </main>
  );
}
