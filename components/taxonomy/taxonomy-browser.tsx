import { useEffect, useMemo, useState } from "react"
import {
  sections,
  foundationalPapers,
  sourceLabels,
  laneColors,
  flattenLibrary,
  type LibraryRow,
} from "@/lib/taxonomy-data"
import { Badge } from "./badge"
import { SectionCard } from "./section-card"
import { PaperCard } from "./paper-card"

export function TaxonomyBrowser() {
  const [activeSection, setActiveSection] = useState("concept")
  const [query, setQuery] = useState("")
  const [stanceFilter, setStanceFilter] = useState("All")
  const [statusFilter, setStatusFilter] = useState("All")
  const [sourceFilter, setSourceFilter] = useState("All")
  const [selectedPaper, setSelectedPaper] = useState<LibraryRow | null>(null)

  const allPapers = useMemo(() => flattenLibrary(), [])
  useEffect(() => {
    function syncSectionFromHash() {
      const match = window.location.hash.match(/^#section-(.+)$/)
      const sectionId = match?.[1]
      if (!sectionId || !sections.some((section) => section.id === sectionId)) {
        return
      }

      setActiveSection(sectionId)
      setSelectedPaper(null)
      window.setTimeout(() => {
        document.getElementById("taxonomy")?.scrollIntoView({ behavior: "smooth", block: "start" })
      }, 0)
    }

    syncSectionFromHash()
    window.addEventListener("hashchange", syncSectionFromHash)
    return () => window.removeEventListener("hashchange", syncSectionFromHash)
  }, [])

  const filteredPapers = useMemo(() => {
    const q = query.trim().toLowerCase()
    return allPapers.filter((paper) => {
      const matchesQuery =
        !q ||
        [paper.title, paper.authors, paper.venue, paper.threadTitle, paper.threadClaim, paper.sectionLabel, paper.laneLabel]
          .filter(Boolean)
          .some((field) => String(field).toLowerCase().includes(q))
      const matchesStance = stanceFilter === "All" || paper.stance === stanceFilter
      const matchesStatus = statusFilter === "All" || (paper.status || "verified") === statusFilter
      const matchesSource = sourceFilter === "All" || sourceLabels[paper.source] === sourceFilter
      return matchesQuery && matchesStance && matchesStatus && matchesSource
    })
  }, [allPapers, query, stanceFilter, statusFilter, sourceFilter])

  const visibleSection = sections.find((section) => section.id === activeSection) || sections[0]
  const visiblePapers = filteredPapers.filter((paper) => paper.sectionId === activeSection)

  const activeThreads = visibleSection.lanes.flatMap((lane) =>
    lane.threads.map((thread) => ({
      ...thread,
      laneLabel: lane.label,
      laneId: lane.id,
      sectionId: visibleSection.id,
      supportCount: thread.supports.length,
      contestCount: thread.contests.length,
    })),
  )

  const selected = selectedPaper || visiblePapers[0] || filteredPapers[0] || allPapers[0]
  const selectedSection = sections.find((section) => section.id === selected?.sectionId)
  const selectedLane = selectedSection?.lanes.find((lane) => lane.id === selected?.laneId)
  const selectedThread = selectedLane?.threads.find((thread) => thread.id === selected?.threadId)

  const sectionCounts = Object.fromEntries(
    sections.map((section) => [section.id, allPapers.filter((paper) => paper.sectionId === section.id).length]),
  )

  return (
    <div className="overflow-hidden rounded-lg border border-slate-200 bg-white">
      <div className="grid grid-cols-1 gap-0 lg:grid-cols-[290px_minmax(0,1fr)_360px]">
        <aside className="border-b border-slate-200 p-5 lg:border-b-0 lg:border-r">
          <div className="mb-5">
            <div className="text-xs uppercase tracking-[0.28em] text-slate-500">Literature axes</div>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Select one of the four axes of the debate to browse its threads, supporting work, and contesting work.
            </p>
          </div>

          <div className="space-y-3">
            {sections.map((section) => (
              <SectionCard
                key={section.id}
                section={section}
                active={activeSection === section.id}
                onClick={(id) => {
                  setActiveSection(id)
                  setSelectedPaper(null)
                  window.history.replaceState(null, "", `#section-${id}`)
                }}
                count={sectionCounts[section.id]}
              />
            ))}
          </div>

          <div className="mt-5 rounded-md border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-600">
            <p className="mt-2">
              Search by paper title, author, venue, thread, or claim. Filter by stance, verification state, or source
              type.
            </p>
          </div>
        </aside>

        <main className="p-5 lg:p-6">
          <div className="flex flex-col gap-4 border-b border-slate-200 pb-5">
            <div className="flex flex-col gap-3 xl:flex-row xl:items-end xl:justify-between">
              <div>
                <div className="text-xs uppercase tracking-[0.28em] text-slate-500">Selected section</div>
                <h2 className="mt-1 text-3xl font-semibold tracking-tight text-slate-950">
                  {visibleSection.label} <span className="text-slate-400">—</span> {visibleSection.subtitle}
                </h2>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">{visibleSection.description}</p>
              </div>

              
            </div>

            <div className="grid gap-3 xl:grid-cols-[1.2fr_repeat(3,minmax(0,1fr))]">
              <label className="flex items-center gap-3 rounded-md border border-slate-200 bg-slate-50 px-4 py-3">
                <span className="text-sm text-slate-500">Search</span>
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Title, author, venue, thread, claim..."
                  className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
                />
              </label>

              <select
                value={stanceFilter}
                onChange={(e) => setStanceFilter(e.target.value)}
                aria-label="Filter by stance"
                className="rounded-md border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none"
              >
                <option>All</option>
                <option>Support</option>
                <option>Contest</option>
                <option>Reference</option>
              </select>

              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                aria-label="Filter by verification status"
                className="rounded-md border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none"
              >
                <option>All</option>
                <option>verified</option>
                <option>pending</option>
              </select>

              <select
                value={sourceFilter}
                onChange={(e) => setSourceFilter(e.target.value)}
                aria-label="Filter by source type"
                className="rounded-md border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none"
              >
                <option>All</option>
                <option>Journal</option>
                <option>Conference</option>
                <option>Preprint</option>
                <option>Book</option>
                <option>Report</option>
              </select>
            </div>
          </div>

          <div className="mt-5 grid gap-4 xl:grid-cols-2">
            {activeThreads.map((thread) => (
              <article key={thread.id} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <Badge tone={laneColors[thread.laneId] || "slate"}>{thread.laneLabel}</Badge>
                    <h3 className="mt-3 text-xl font-semibold tracking-tight text-slate-950">{thread.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{thread.claim}</p>
                  </div>
                  <div className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-600">
                    <div className="uppercase tracking-[0.2em] text-slate-400">Papers</div>
                    <div className="mt-1 font-semibold text-slate-900">{thread.supportCount + thread.contestCount}</div>
                  </div>
                </div>

                <div className="mt-5 grid gap-4 lg:grid-cols-2">
                  <div>
                    <div className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700">
                      Supports
                    </div>
                    <div className="space-y-2">
                      {thread.supports.map((paper) => {
                        const row: LibraryRow = {
                          ...paper,
                          sectionId: visibleSection.id,
                          sectionLabel: visibleSection.label,
                          laneId: thread.laneId,
                          laneLabel: thread.laneLabel,
                          threadId: thread.id,
                          threadTitle: thread.title,
                          threadClaim: thread.claim,
                          stance: "Support",
                        }
                        return (
                          <PaperCard
                            key={paper.title}
                            paper={row}
                            selected={selected?.title === paper.title}
                            onClick={() => setSelectedPaper(row)}
                          />
                        )
                      })}
                    </div>
                  </div>

                  <div>
                    <div className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-rose-700">Contests</div>
                    <div className="space-y-2">
                      {thread.contests.map((paper) => {
                        const row: LibraryRow = {
                          ...paper,
                          sectionId: visibleSection.id,
                          sectionLabel: visibleSection.label,
                          laneId: thread.laneId,
                          laneLabel: thread.laneLabel,
                          threadId: thread.id,
                          threadTitle: thread.title,
                          threadClaim: thread.claim,
                          stance: "Contest",
                        }
                        return (
                          <PaperCard
                            key={paper.title}
                            paper={row}
                            selected={selected?.title === paper.title}
                            onClick={() => setSelectedPaper(row)}
                          />
                        )
                      })}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-6 rounded-lg border border-slate-200 bg-slate-50 p-5">
            <div className="flex items-center justify-between gap-3">
              <div>
                <div className="text-xs uppercase tracking-[0.24em] text-slate-500">Foundations</div>
                <h3 className="mt-1 text-lg font-semibold text-slate-950">Definitional source layer</h3>
              </div>
              <Badge tone="slate">{foundationalPapers.length} references</Badge>
            </div>
            <div className="mt-4 grid gap-2 md:grid-cols-2 xl:grid-cols-3">
              {foundationalPapers.map((paper) => (
                <div key={paper.title} className="rounded-md border border-slate-200 bg-white p-4">
                  <div className="text-sm font-semibold leading-5 text-slate-900">{paper.title}</div>
                  <div className="mt-1 text-xs text-slate-500">
                    {paper.authors} · {paper.year} · {paper.venue}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>

        <aside className="border-t border-slate-200 p-5 lg:border-t-0 lg:border-l">
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-5">
            <div className="text-xs uppercase tracking-[0.24em] text-slate-500">Selected paper</div>
            <h3 className="mt-2 text-xl font-semibold tracking-tight text-slate-950">{selected?.title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              {selected?.note || "Select a paper card to inspect citation metadata and source context."}
            </p>

            <div className="mt-4 space-y-3 text-sm">
              <div className="rounded-md border border-slate-200 bg-white p-4">
                <div className="text-xs uppercase tracking-[0.2em] text-slate-400">Citation</div>
                <div className="mt-1 font-medium text-slate-900">
                  {selected?.authors} ({selected?.year})
                </div>
                <div className="mt-1 text-slate-600">{selected?.venue}</div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-md border border-slate-200 bg-white p-4">
                  <div className="text-xs uppercase tracking-[0.2em] text-slate-400">Section</div>
                  <div className="mt-1 font-medium text-slate-900">{selectedSection?.label}</div>
                </div>
                <div className="rounded-md border border-slate-200 bg-white p-4">
                  <div className="text-xs uppercase tracking-[0.2em] text-slate-400">Lane</div>
                  <div className="mt-1 font-medium text-slate-900">{selectedLane?.label}</div>
                </div>
                <div className="rounded-md border border-slate-200 bg-white p-4">
                  <div className="text-xs uppercase tracking-[0.2em] text-slate-400">Stance</div>
                  <div className="mt-1 font-medium text-slate-900">{selected?.stance}</div>
                </div>
                <div className="rounded-md border border-slate-200 bg-white p-4">
                  <div className="text-xs uppercase tracking-[0.2em] text-slate-400">Source</div>
                  <div className="mt-1 font-medium text-slate-900">
                    {sourceLabels[selected?.source] || selected?.source}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 rounded-lg border border-slate-200 bg-white p-5">
            <div className="text-xs uppercase tracking-[0.24em] text-slate-500">Current thread</div>
            <h4 className="mt-1 text-lg font-semibold text-slate-950">{selectedThread?.title}</h4>
            <p className="mt-2 text-sm leading-6 text-slate-600">{selectedThread?.claim}</p>
            <div className="mt-4 space-y-2 text-sm text-slate-700">
              <div>
                <span className="font-semibold text-slate-900">Supports:</span> {selectedThread?.supports.length || 0}
              </div>
              <div>
                <span className="font-semibold text-slate-900">Contests:</span> {selectedThread?.contests.length || 0}
              </div>
            </div>
          </div>

          <div className="mt-5 rounded-lg border border-slate-200 bg-white p-5">
            <div className="text-xs uppercase tracking-[0.24em] text-slate-500">Taxonomy map</div>
            <div className="mt-3 space-y-3 text-sm">
              {sections.map((section) => (
                <div key={section.id} className="rounded-md border border-slate-200 p-3">
                  <div className="flex items-center justify-between gap-3">
                    <div className="font-semibold text-slate-900">{section.label}</div>
                    <Badge tone={section.accent}>
                      {allPapers.filter((p) => p.sectionId === section.id).length}
                    </Badge>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {section.lanes.map((lane) => (
                      <Badge key={lane.id} tone={laneColors[lane.id] || "slate"}>
                        {lane.label}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}




