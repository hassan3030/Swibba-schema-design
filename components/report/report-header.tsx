import { Database } from "lucide-react"

export function ReportHeader() {
  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <header className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm print:border-0 print:p-0 print:shadow-none">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-100 print:bg-emerald-50">
            <Database className="h-7 w-7 text-emerald-600" />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">Swibba Database Schema</h1>
            <p className="mt-1 text-lg text-slate-500">Technical Architecture Documentation</p>
          </div>
        </div>
        <div className="text-right print:text-sm">
          <p className="text-sm font-medium text-slate-900">Document Version</p>
          <p className="text-2xl font-bold text-emerald-600">1.0</p>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-6 border-t border-slate-100 pt-6 text-sm md:grid-cols-4">
        <div>
          <p className="font-medium text-slate-500">Prepared For</p>
          <p className="mt-1 font-semibold text-slate-900">Management Review</p>
        </div>
        <div>
          <p className="font-medium text-slate-500">Date</p>
          <p className="mt-1 font-semibold text-slate-900">{currentDate}</p>
        </div>
        <div>
          <p className="font-medium text-slate-500">Platform</p>
          <p className="mt-1 font-semibold text-slate-900">Directus CMS</p>
        </div>
        <div>
          <p className="font-medium text-slate-500">Status</p>
          <span className="mt-1 inline-flex items-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-semibold text-emerald-700">
            Ready for Implementation
          </span>
        </div>
      </div>
    </header>
  )
}
