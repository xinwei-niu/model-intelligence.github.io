type Tone = "blue" | "purple" | "teal" | "green" | "orange" | "gray" | "pink" | "amber"

type Thinker = {
  name: string
  idea: string
}

type Lane = {
  label: string
  tone: Tone
  thinkers: Thinker[]
}

type Axis = {
  id: string
  numeral: string
  title: string
  subtitle: string
  lanes: Lane[]
}

const toneClasses: Record<Tone, { lane: string; chip: string; rail: string; dot: string }> = {
  blue: {
    lane: "border-blue-300 bg-blue-50 text-blue-900",
    chip: "border-blue-200 bg-blue-50/80",
    rail: "border-blue-300",
    dot: "bg-blue-500",
  },
  purple: {
    lane: "border-purple-300 bg-purple-50 text-purple-900",
    chip: "border-purple-200 bg-purple-50/80",
    rail: "border-purple-300",
    dot: "bg-purple-500",
  },
  teal: {
    lane: "border-teal-300 bg-teal-50 text-teal-900",
    chip: "border-teal-200 bg-teal-50/80",
    rail: "border-teal-300",
    dot: "bg-teal-500",
  },
  green: {
    lane: "border-emerald-300 bg-emerald-50 text-emerald-900",
    chip: "border-emerald-200 bg-emerald-50/80",
    rail: "border-emerald-300",
    dot: "bg-emerald-500",
  },
  orange: {
    lane: "border-orange-300 bg-orange-50 text-orange-900",
    chip: "border-orange-200 bg-orange-50/80",
    rail: "border-orange-300",
    dot: "bg-orange-500",
  },
  gray: {
    lane: "border-slate-300 bg-slate-100 text-slate-900",
    chip: "border-slate-200 bg-slate-50",
    rail: "border-slate-300",
    dot: "bg-slate-500",
  },
  pink: {
    lane: "border-pink-300 bg-pink-50 text-pink-900",
    chip: "border-pink-200 bg-pink-50/80",
    rail: "border-pink-300",
    dot: "bg-pink-500",
  },
  amber: {
    lane: "border-amber-300 bg-amber-50 text-amber-900",
    chip: "border-amber-200 bg-amber-50/80",
    rail: "border-amber-300",
    dot: "bg-amber-500",
  },
}

const axes: Axis[] = [
  {
    id: "concept",
    numeral: "I",
    title: "Concept",
    subtitle: "what intelligence is",
    lanes: [
      { label: "Behavioural", tone: "blue", thinkers: [{ name: "Dennett", idea: "intentional stance" }] },
      { label: "Psychometric", tone: "purple", thinkers: [{ name: "Gardner", idea: "plural abilities" }] },
      {
        label: "Predictive",
        tone: "teal",
        thinkers: [
          { name: "Andy Clark", idea: "predictive; embodied" },
          { name: "Friston", idea: "free energy" },
        ],
      },
      { label: "Compositional", tone: "green", thinkers: [{ name: "Hofstadter", idea: "analogy as core" }] },
      {
        label: "Symbolic",
        tone: "orange",
        thinkers: [
          { name: "Fodor", idea: "language of thought" },
          { name: "Chomsky", idea: "innate faculty" },
          { name: "Newell & Simon", idea: "PSSH" },
        ],
      },
    ],
  },
  {
    id: "possibility",
    numeral: "II",
    title: "Possibility",
    subtitle: "can a machine have it",
    lanes: [
      {
        label: "Anti-comp.",
        tone: "gray",
        thinkers: [
          { name: "Searle", idea: "Chinese Room" },
          { name: "Dreyfus", idea: "embodied coping" },
        ],
      },
    ],
  },
  {
    id: "criterion",
    numeral: "III",
    title: "Criterion",
    subtitle: "how to measure it",
    lanes: [
      {
        label: "Behavioural",
        tone: "blue",
        thinkers: [
          { name: "Turing", idea: "imitation game" },
          { name: "Hernandez-Orallo", idea: "formal measurement" },
          { name: "Chollet", idea: "skill efficiency; ARC" },
        ],
      },
    ],
  },
  {
    id: "implementation",
    numeral: "IV",
    title: "Implementation",
    subtitle: "how it is built",
    lanes: [
      {
        label: "Optimization",
        tone: "pink",
        thinkers: [
          { name: "Legg & Hutter", idea: "universal Υ" },
          { name: "Russell & Norvig", idea: "rational agency" },
          { name: "Schmidhuber", idea: "compression" },
          { name: "Yi Ma", idea: "rate reduction" },
          { name: "Silver & Sutton", idea: "reward; RL agents" },
        ],
      },
      {
        label: "Causal",
        tone: "amber",
        thinkers: [
          { name: "Pearl", idea: "do-calculus; SCM" },
          { name: "Scholkopf & Bengio", idea: "causal representation" },
        ],
      },
      {
        label: "Predictive",
        tone: "teal",
        thinkers: [
          { name: "Hawkins", idea: "cortical prediction" },
          { name: "LeCun", idea: "world-model; JEPA" },
        ],
      },
      { label: "Compositional", tone: "green", thinkers: [{ name: "Lake", idea: "compositional; BPL" }] },
      { label: "Symbolic", tone: "orange", thinkers: [{ name: "Marcus", idea: "neuro-symbolic" }] },
      { label: "Anti-comp.", tone: "gray", thinkers: [{ name: "Brooks", idea: "situated robotics" }] },
    ],
  },
]

function sectionHref(axisId: string) {
  return `#section-${axisId}`
}

function AxisCard({ axis }: { axis: Axis }) {
  return (
    <a
      href={sectionHref(axis.id)}
      className="group flex min-h-[92px] flex-col justify-center rounded-lg border border-slate-300 bg-white px-4 py-3 text-center shadow-sm transition hover:-translate-y-0.5 hover:border-slate-500 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
      aria-label={`Jump to ${axis.title}`}
    >
      <div className="text-lg font-extrabold tracking-tight text-slate-950">
        <span className="mr-2 font-serif">{axis.numeral}</span>
        {axis.title}
      </div>
      <div className="mt-1 text-xs font-semibold italic text-slate-600">{axis.subtitle}</div>
    </a>
  )
}

function LaneBlock({ lane, axisId }: { lane: Lane; axisId: string }) {
  const tone = toneClasses[lane.tone]
  return (
    <div className={`relative grid gap-3 border-l-2 pl-5 ${tone.rail} md:grid-cols-[160px_minmax(0,1fr)] md:items-start`}>
      <span className={`absolute -left-[5px] top-4 h-2.5 w-2.5 rounded-full ${tone.dot}`} aria-hidden />
      <a
        href={sectionHref(axisId)}
        className={`inline-flex min-h-10 items-center justify-center rounded-md border px-3 py-2 text-sm font-bold shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 ${tone.lane}`}
      >
        {lane.label}
      </a>
      <div className="grid gap-2 sm:grid-cols-2 xl:grid-cols-3">
        {lane.thinkers.map((thinker) => (
          <a
            key={`${lane.label}-${thinker.name}`}
            href={sectionHref(axisId)}
            className={`min-h-[54px] rounded-md border px-3 py-2 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 ${tone.chip}`}
          >
            <div className="text-sm font-extrabold leading-4 text-slate-950">{thinker.name}</div>
            <div className="mt-1 text-xs italic leading-4 text-slate-600">{thinker.idea}</div>
          </a>
        ))}
      </div>
    </div>
  )
}

export function TaxonomyMap() {
  return (
    <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-200 bg-white px-5 py-4 sm:px-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="text-xs uppercase tracking-[0.28em] text-slate-500">Taxonomy map</div>
            <h2 className="mt-1 text-2xl font-semibold tracking-tight text-slate-950">Definitions &amp; Measures of Model Intelligence</h2>
          </div>
          <div className="text-xs uppercase tracking-[0.2em] text-slate-400">Click a node to navigate to the specified section</div>
        </div>
      </div>

      <div className="bg-[#f8f7f3] px-4 py-5 sm:px-6">
        <div className="grid gap-5 lg:grid-cols-[220px_minmax(0,1fr)]">
          <a
            href="#taxonomy"
            className="flex min-h-32 items-center justify-center rounded-lg bg-slate-950 px-5 py-4 text-center text-base font-extrabold leading-6 text-white shadow-md transition hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 lg:sticky lg:top-4 lg:self-start"
          >
            Definitions<br />&amp; Measures<br />of Model<br />Intelligence
          </a>

          <div className="space-y-5">
            {axes.map((axis) => (
              <section key={axis.id} className="rounded-lg border border-slate-200 bg-white/90 p-4 shadow-sm">
                <div className="grid gap-4 lg:grid-cols-[210px_minmax(0,1fr)] lg:items-start">
                  <AxisCard axis={axis} />
                  <div className="space-y-4">
                    {axis.lanes.map((lane) => (
                      <LaneBlock key={`${axis.id}-${lane.label}`} lane={lane} axisId={axis.id} />
                    ))}
                  </div>
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
