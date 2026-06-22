import type { Section } from "@/lib/taxonomy-data"
import { Badge } from "./badge"

export function SectionCard({
  section,
  active,
  onClick,
  count,
}: {
  section: Section
  active: boolean
  onClick: (id: string) => void
  count: number
}) {
  return (
    <button
      onClick={() => onClick(section.id)}
      aria-pressed={active}
      className={`w-full rounded-md border p-4 text-left transition hover:border-slate-400 ${
        active ? "border-slate-900 bg-slate-50" : "border-slate-200 bg-white"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-sm font-semibold tracking-wide text-slate-900">{section.label}</div>
          <div className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-500">{section.subtitle}</div>
        </div>
        <Badge tone={section.accent}>{count}</Badge>
      </div>
      <p className="mt-3 text-sm leading-6 text-slate-600">{section.description}</p>
    </button>
  )
}
