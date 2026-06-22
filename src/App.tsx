import { TaxonomyMap } from "@/components/taxonomy/taxonomy-map"
import { SiteFooter } from "@/components/site-footer"
import { TaxonomyBrowser } from "@/components/taxonomy/taxonomy-browser"

export default function App() {
  return (
    <div className="min-h-screen bg-[#f7f5f1] text-slate-900">
      <section className="mx-auto max-w-[1600px] border-b border-slate-200 px-4 pt-12 pb-8 lg:px-8">
        <div className="text-xs uppercase tracking-[0.28em] text-slate-500">Academic portal</div>
        <h1 className="mt-3 max-w-4xl text-pretty text-4xl font-semibold tracking-tight text-slate-950 lg:text-5xl">
          Definitions &amp; Measures of Model Intelligence
        </h1>
        <p className="mt-4 max-w-3xl text-pretty text-base leading-7 text-slate-600">
          A scholarly map of how the research community defines, contests, and measures intelligence in machine
          learning systems. Browse the literature organized along four axes - concept, possibility, criterion, and
          implementation - with supporting and contesting evidence laid out side by side.
        </p>
      </section>

      <section id="map" className="mx-auto max-w-[1600px] px-4 py-8 lg:px-8">
        <TaxonomyMap />
      </section>

      <section id="taxonomy" className="mx-auto max-w-[1600px] px-4 py-6 lg:px-8">
        <TaxonomyBrowser />
      </section>

      <section id="about" className="mx-auto max-w-[1600px] px-4 py-10 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          <div>
            <div className="text-xs uppercase tracking-[0.28em] text-slate-500">About</div>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">A debate, not a verdict</h2>
          </div>
          <p className="text-sm leading-7 text-slate-600 lg:col-span-2">
            The question of whether machine learning systems are "intelligent" rarely turns on a single study. It
            depends on what intelligence is taken to be, whether a given kind of system could have it in principle, how
            one would measure it, and how it is actually implemented. This portal organizes the literature so that
            competing claims sit next to the work that contests them, making the structure of the disagreement visible
            rather than hidden behind any one result.
          </p>
        </div>
      </section>

      <section id="methodology" className="mx-auto max-w-[1600px] px-4 pb-12 lg:px-8">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            {
              id: "concept",
              n: "I",
              t: "Concept",
              d: "What intelligence is taken to be - behavioural, psychometric, predictive, compositional, or symbolic.",
            },
            {
              id: "possibility",
              n: "II",
              t: "Possibility",
              d: "Whether disembodied or form-trained systems can possess the candidate capacity at all.",
            },
            {
              id: "criterion",
              n: "III",
              t: "Criterion",
              d: "How intelligence is measured: benchmarks, emergence, and construct validity.",
            },
            {
              id: "implementation",
              n: "IV",
              t: "Implementation",
              d: "How it is built: causal, predictive, compositional, symbolic, and anti-computationalist families.",
            },
          ].map((item) => (
            <div id={`axis-${item.id}`} key={item.n} className="scroll-mt-8 rounded-lg border border-slate-200 bg-white p-5">
              <div className="text-xs uppercase tracking-[0.28em] text-slate-400">Axis {item.n}</div>
              <div className="mt-2 text-lg font-semibold tracking-tight text-slate-950">{item.t}</div>
              <p className="mt-2 text-sm leading-6 text-slate-600">{item.d}</p>
            </div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}

