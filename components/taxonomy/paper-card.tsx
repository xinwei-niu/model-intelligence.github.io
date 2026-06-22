import { sourceLabels, type LibraryRow } from "@/lib/taxonomy-data"
import { Badge } from "./badge"

export function PaperCard({
  paper,
  selected,
  onClick,
}: {
  paper: LibraryRow
  selected: boolean
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      aria-pressed={selected}
      className={`w-full rounded-xl border p-3 text-left transition hover:border-slate-400 hover:bg-slate-50 ${
        selected ? "border-slate-900 bg-slate-50" : "border-slate-200 bg-white"
      }`}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <div className="text-sm font-semibold leading-5 text-slate-900">{paper.title}</div>
          <div className="mt-1 text-xs text-slate-500">
            {paper.authors} · {paper.year} · {paper.venue}
          </div>
        </div>

      </div>
      <div className="mt-2 flex items-center gap-2 text-xs text-slate-500">
        <span>{sourceLabels[paper.source] || paper.source}</span>
        <span>•</span>
        <span>{paper.stance}</span>
      </div>
    </button>
  )
}

