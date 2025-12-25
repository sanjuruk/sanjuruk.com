
const BELIEFS = [
  {
    title: "Software should feel magical.",
    points: [
      <>
        <span className="text-zinc-300">Great design is subtraction:</span> remove steps until only intent remains.
      </>,
      <>
        <span className="text-zinc-300">Complexity doesn’t disappear. It moves;</span> I’d rather carry it than make users carry it (Tesler’s Law).
      </>,
      <>
        <span className="text-zinc-300">The best interface is less interface:</span> anticipate what people want before they ask.
      </>,
    ],
  },
  {
    title: "Speed is a feature.",
    points: [
      <>
        <span className="text-zinc-300">Velocity compounds:</span> shorter loops beat smarter plans (OODA loop mindset).
      </>,
      <>
        <span className="text-zinc-300">Most decisions are reversible “two-way doors,”</span> so I bias toward action and iterate.
      </>,
      <>
        <span className="text-zinc-300">Shipping often can improve stability.</span> Elite teams balance speed and reliability with DORA metrics.
      </>,
    ],
  },
  {
    title: "Amplify, don’t replace.",
    points: [
      <>
        <span className="text-zinc-300">I want AI to scale judgment and output,</span> not erase the human.
      </>,
      <>
        <span className="text-zinc-300">Symbiosis over substitution:</span> humans set direction, machines handle the grind.
      </>,
      <>
        <span className="text-zinc-300">The human stays the architect;</span> AI is leverage, not leadership.
      </>,
    ],
  },
  {
    title: "Code is a liability.",
    points: [
      <>
        <span className="text-zinc-300">Every line of code is a long-term maintenance bill,</span> not an asset.
      </>,
      <>
        <span className="text-zinc-300">My favorite feature is the one I didn’t have to build</span> (“best code is no code” in practice).
      </>,
      <>
        <span className="text-zinc-300">Deleting code is progress.</span> Sometimes the most productive day is “-2000 lines.”
      </>,
    ],
  },
];

const SOCIALS = [
  { name: "X / Twitter", href: "http://x.com/sanjuruk" },
  { name: "Github", href: "https://github.com/sanjuruk" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/sanjuruk/" },
];

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

export default function Home() {
  return (
    <main className="animate-[fadeIn_0.8s_ease-out_forwards] w-full max-w-[700px] flex flex-col gap-12 mt-20 mb-20 mx-auto px-8">
      <header>
        <h1 className="text-3xl font-semibold tracking-tight mb-2">Sanju Lokuhitige</h1>
        <h2 className="text-lg font-normal text-zinc-500">
          I build (products, experiences & businesses). Cofounder & CTO at{" "}
          <ExternalLink href="https://mythril.io">Mythril.io</ExternalLink>
        </h2>
      </header>

      <section className="flex flex-col gap-8">
        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-medium text-zinc-300">About me</h3>
          <ul className="flex flex-col gap-2 list-disc list-inside text-zinc-400 text-sm marker:text-zinc-600">
            <li>Roots in Sri Lanka. Educated in KR & US (CS, IoT, AI, Technology & Society).</li>
            <li>Engineering background in embedded systems, AI & SaaS startups in Seoul & SF.</li>
            <li>Scaled technical solutions & FDE teams at <ExternalLink href="https://protopie.io">ProtoPie</ExternalLink> & <ExternalLink href="https://arena.im">Arena</ExternalLink>.</li>
            <li>
              Currently lead AI strategy & engineering at{" "}
              <ExternalLink href="https://mythril.io">Mythril</ExternalLink>. Building the future of creative publishing.
            </li>
            <li>
              I speak <span className="font-medium">English</span>, <span className="font-medium">Sinhala</span> &{" "}
              <span className="font-medium">Korean</span>. I play basketball, gym x3/week, write songs occasionally.
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-medium text-zinc-300">What I Believe</h3>
          <ul className="flex flex-col gap-4 text-zinc-400 text-sm">
            {BELIEFS.map((belief, index) => (
              <li key={index} className="flex flex-col gap-1">
                <span className="text-zinc-300 font-medium">{belief.title}</span>
                <ul className="flex flex-col gap-1 pl-4 list-disc list-inside marker:text-zinc-600">
                  {belief.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="flex gap-6 mt-4 text-sm">
        {SOCIALS.map((link) => (
          <ExternalLink key={link.name} href={link.href}>
            {link.name}
          </ExternalLink>
        ))}
        <div className="text-zinc-500 border-b border-transparent">
          Email: hey@sanjuruk.com
        </div>
      </section>
    </main>
  );
}
