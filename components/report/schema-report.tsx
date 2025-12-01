"use client"

import { useState } from "react"
import { ReportHeader } from "./report-header"
import { ExecutiveSummary } from "./executive-summary"
import { ArchitectureOverview } from "./architecture-overview"
import { ModuleBreakdown } from "./module-breakdown"
import { RolesOverview } from "./roles-overview"
import { TechnicalSpecs } from "./technical-specs"
import { FrontendStructure } from "./frontend-structure"
import { ProjectTimeline } from "./project-timeline"
import { TaskBreakdown } from "./task-breakdown"
import { ReportFooter } from "./report-footer"
import { Printer, ArrowLeft } from "lucide-react"
import Link from "next/link"

export function SchemaReport() {
  const [isPrintMode, setIsPrintMode] = useState(false)

  const handlePrint = () => {
    setIsPrintMode(true)
    setTimeout(() => {
      window.print()
      setIsPrintMode(false)
    }, 100)
  }

  return (
    <div className={`min-h-screen ${isPrintMode ? "bg-white" : "bg-slate-50"}`}>
      {/* Navigation Bar - Hidden in print */}
      <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur print:hidden">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Schema Viewer
          </Link>
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-emerald-700"
          >
            <Printer className="h-4 w-4" />
            Print / Export PDF
          </button>
        </div>
      </nav>

      {/* Report Content */}
      <main className="mx-auto max-w-5xl px-6 py-12 print:px-0 print:py-0">
        <article className="space-y-12 print:space-y-8">
          <ReportHeader />
          <ExecutiveSummary />
          <ArchitectureOverview />
          <ModuleBreakdown />
          <RolesOverview />
          <TechnicalSpecs />
          <FrontendStructure />
          <ProjectTimeline />
          <TaskBreakdown />
          <ReportFooter />
        </article>
      </main>
    </div>
  )
}
