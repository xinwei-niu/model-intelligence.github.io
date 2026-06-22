import { sections, axisStats, laneColors } from "@/lib/taxonomy-data"
import { Badge } from "./badge"

const accentBar: Record<string, string> = {
  indigo: "bg-indigo-500",
  rose: "bg-rose-500",
  emerald: "bg-emerald-500",
  amber: "bg-amber-500",
}

const accentRail: Record<string, string> = {
  indigo: "border-indigo-200",
  rose: "border-rose-200",
  emerald: "border-emerald-200",
  amber: "border-amber-200",
}

export function TaxonomyTree() {
  const stats = axisStats()
  const maxTotal = Math.max(...stats.map((s) => s.supports + s.contests), 1)

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
      {/* Hierarchy diagram */}
      <div className="overflow-hidden rounded-lg border border-slate-200 bg-white">
        <div className="flex items-center justify-between gap-3 border-b border-slate-200 bg-slate-50 px-5 py-4">
          <div>
            <div className="text-xs uppercase tracking-[0.28em] text-slate-500">Figure 1</div>
            <h3 className="mt-1 text-lg font-semibold tracking-tight text-slate-950">
              Definitions &amp; Measures of Model Intelligence
            </h3>
          </div>
          <Badge tone="slate">4 axes</Badge>
        </div>

        <div className="space-y-5 p-5">
          {sections.map((section) => (
            <section key={section.id} className="rounded-md border border-slate-200">
              <header className="flex items-center gap-3 border-b border-slate-200 px-4 py-3">
                <span className={`h-8 w-1.5 rounded-full ${accentBar[section.accent] || "bg-slate-400"}`} aria-hidden />
                <div>
                  <div className="text-sm font-semibold tracking-tight text-slate-950">{section.label}</div>
                  <div className="text-xs italic text-slate-500">{section.subtitle}</div>
                </div>
              </header>

              <div className="divide-y divide-slate-100">
                {section.lanes.map((lane) => (
                  <div key={lane.id} className="flex flex-col gap-3 px-4 py-3 sm:flex-row sm:items-start">
                    <div className="sm:w-32 sm:shrink-0">
                      <Badge tone={laneColors[lane.id] || "slate"}>{lane.label}</Badge>
                    </div>
                    <ul className={`flex flex-1 flex-col gap-2 border-l-2 pl-4 ${accentRail[section.accent] || "border-slate-200"}`}>
                      {lane.thinkers.map((thinker) => (
                        <li key={thinker.name} className="flex flex-wrap items-baseline gap-x-2">
                          <span className="text-sm font-medium text-slate-900">{thinker.name}</span>
                          <span className="text-xs italic text-slate-500">{thinker.idea}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>

      {/* Evidence balance */}
      <div className="rounded-lg border border-slate-200 bg-white">
        <div className="border-b border-slate-200 bg-slate-50 px-5 py-4">
          <div className="text-xs uppercase tracking-[0.28em] text-slate-500">Figure 2</div>
          <h3 className="mt-1 text-lg font-semibold tracking-tight text-slate-950">Evidence balance by axis</h3>
          <p className="mt-1 text-xs leading-5 text-slate-500">
            Supporting vs. contesting works catalogued under each axis.
          </p>
        </div>

        <div className="space-y-5 p-5">
          {stats.map((stat) => {
            const total = stat.supports + stat.contests
            const width = (total / maxTotal) * 100
            const supportPct = total ? (stat.supports / total) * 100 : 0
            return (
              <div key={stat.id}>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium text-slate-900">{stat.label}</span>
                  <span className="text-xs text-slate-500">{total} works</span>
                </div>
                <div className="mt-2 h-3 w-full overflow-hidden rounded-full bg-slate-100">
                  <div className="flex h-full" style={{ width: `${width}%` }}>
                    <div className="h-full bg-emerald-500" style={{ width: `${supportPct}%` }} aria-hidden />
                    <div className="h-full bg-rose-500" style={{ width: `${100 - supportPct}%` }} aria-hidden />
                  </div>
                </div>
                <div className="mt-1 flex gap-4 text-xs text-slate-500">
                  <span>{stat.supports} support</span>
                  <span>{stat.contests} contest</span>
                </div>
              </div>
            )
          })}

          <div className="flex items-center gap-4 border-t border-slate-200 pt-4 text-xs text-slate-500">
            <span className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" aria-hidden /> Supports
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-500" aria-hidden /> Contests
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
