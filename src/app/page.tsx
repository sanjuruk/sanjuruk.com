export const dynamic = "force-static";

const BELIEFS = [
  {
    title: "Software should feel magical.",
    points: [
      ["Great design is subtraction:", "remove steps until only intent remains."],
      ["Complexity doesn't disappear. It moves;", "I'd rather carry it than make users carry it (Tesler's Law)."],
      ["The best interface is less interface:", "anticipate what people want before they ask."],
    ],
  },
  {
    title: "Speed is a feature.",
    points: [
      ["Velocity compounds:", "shorter loops beat smarter plans (OODA loop mindset)."],
      ["Most decisions are reversible \"two-way doors,\"", "so I bias toward action and iterate."],
      ["Shipping often can improve stability.", "Elite teams balance speed and reliability with DORA metrics."],
    ],
  },
  {
    title: "Amplify, don't replace.",
    points: [
      ["I want AI to scale judgment and output,", "not erase the human."],
      ["Symbiosis over substitution:", "humans set direction, machines handle the grind."],
      ["The human stays the architect;", "AI is leverage, not leadership."],
    ],
  },
  {
    title: "Code is a liability.",
    points: [
      ["Every line of code is a long-term maintenance bill,", "not an asset."],
      ["My favorite feature is the one I didn't have to build", "(\"best code is no code\" in practice)."],
      ["Deleting code is progress.", "Sometimes the most productive day is \"-2000 lines.\""],
    ],
  },
];

const SOCIALS = [
  { name: "X", href: "https://x.com/sanjuruk" },
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
          <p className="text-zinc-400 text-sm">
            I am starting to share my thoughts in blog format. You can check them out{" "}
            <a
              href="/blog"
              className="text-zinc-500 hover:text-white transition-colors duration-200 border-b border-transparent hover:border-white"
            >
              here
            </a>
            .
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-medium text-zinc-300">What I Believe</h3>
          <ul className="flex flex-col gap-4 text-zinc-400 text-sm">
            {BELIEFS.map((belief, index) => (
              <li key={index} className="flex flex-col gap-1">
                <span className="text-zinc-300 font-medium">{belief.title}</span>
                <ul className="flex flex-col gap-1 pl-4 list-disc list-inside marker:text-zinc-600">
                  {belief.points.map((point, i) => (
                    <li key={i}>
                      <span className="text-zinc-300">{point[0]}</span> {point[1]}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="flex gap-6 mt-4 text-sm">
        <a
          href="/blog"
          className="text-zinc-500 hover:text-white transition-colors duration-200 border-b border-transparent hover:border-white"
        >
          Blog
        </a>
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
