import { schemaData } from "@/lib/schema-data"

export function ArchitectureOverview() {
  const stats = {
    totalCollections: 34,
    totalFields: schemaData.modules.reduce(
      (acc, mod) => acc + mod.collections.reduce((a, c) => a + c.fields.length, 0),
      0,
    ),
    totalRelationships: schemaData.modules.reduce(
      (acc, mod) => acc + mod.collections.reduce((a, c) => a + c.fields.filter((f) => f.relationship).length, 0),
      0,
    ),
    modules: schemaData.modules.length,
  }

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm print:break-before-page print:border-0 print:p-0 print:shadow-none">
      <h2 className="flex items-center gap-2 text-xl font-bold text-slate-900">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100 text-sm font-bold text-emerald-600">
          2
        </span>
        Architecture Overview
      </h2>

      {/* Stats Grid */}
      <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
        {[
          { label: "Total Collections", value: stats.totalCollections, color: "emerald" },
          { label: "Total Fields", value: stats.totalFields, color: "blue" },
          { label: "Relationships", value: stats.totalRelationships, color: "violet" },
          { label: "Modules", value: stats.modules, color: "amber" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl border border-slate-100 bg-gradient-to-br from-slate-50 to-white p-5 text-center"
          >
            <p className={`text-3xl font-bold text-${stat.color}-600`}>{stat.value}</p>
            <p className="mt-1 text-sm font-medium text-slate-500">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Module Distribution */}
      <div className="mt-8">
        <h3 className="font-semibold text-slate-900">Module Distribution</h3>
        <div className="mt-4 space-y-3">
          {schemaData.modules.map((module) => {
            const fieldCount = module.collections.reduce((a, c) => a + c.fields.length, 0)
            const percentage = Math.round((module.collections.length / stats.totalCollections) * 100)

            return (
              <div key={module.id} className="flex items-center gap-4">
                <div className="w-32 text-sm font-medium text-slate-700">{module.name}</div>
                <div className="flex-1">
                  <div className="h-6 overflow-hidden rounded-full bg-slate-100">
                    <div
                      className="h-full rounded-full transition-all"
                      style={{
                        width: `${percentage}%`,
                        backgroundColor: module.color,
                        minWidth: "2rem",
                      }}
                    />
                  </div>
                </div>
                <div className="w-24 text-right text-sm text-slate-600">{module.collections.length} collections</div>
                <div className="w-20 text-right text-sm text-slate-500">{fieldCount} fields</div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Architecture Diagram Description */}
      <div className="mt-8 rounded-xl bg-slate-50 p-6 print:bg-slate-100/50">
        <h3 className="font-semibold text-slate-900">System Architecture</h3>
        <div className="mt-4 font-mono text-xs leading-relaxed text-slate-600">
          <pre className="whitespace-pre-wrap">
            {`┌─────────────────────────────────────────────────────────────────────┐
│                         DIRECTUS CORE                                │
│   directus_users (extended) ◄── directus_roles ── directus_files    │
└─────────────────────────────────┬───────────────────────────────────┘
                                  │
     ┌────────────────────────────┼────────────────────────────┐
     ▼                            ▼                            ▼
┌─────────────┐           ┌─────────────┐            ┌─────────────┐
│   USERS     │           │   CATALOG   │            │  PRODUCTS   │
│  profiles   │           │ categories  │            │   images    │
│  addresses  │           │   brands    │            │   videos    │
│   stores    │           │   models    │            │  favorites  │
└─────────────┘           └─────────────┘            └─────────────┘
     │                            │                            │
     └────────────────────────────┼────────────────────────────┘
                                  ▼
     ┌────────────────────────────┴────────────────────────────┐
     ▼                            ▼                            ▼
┌─────────────┐           ┌─────────────┐            ┌─────────────┐
│   OFFERS    │──────────►│   ORDERS    │            │   SWAPS     │
│  messages   │           │   items     │            │   items     │
│ swap_items  │           │  payments   │            │  payments   │
└─────────────┘           └─────────────┘            └─────────────┘
                                  │
                                  ▼
                          ┌─────────────┐
                          │   REVIEWS   │
                          │   votes     │
                          └─────────────┘`}
          </pre>
        </div>
      </div>
    </section>
  )
}
