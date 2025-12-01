import { CheckCircle2, Target, Zap, Shield } from "lucide-react"

export function ExecutiveSummary() {
  const highlights = [
    {
      icon: Target,
      title: "Multi-Transaction Marketplace",
      description:
        "Supports sales, rentals, and swaps with comprehensive offer negotiation and order management workflows.",
    },
    {
      icon: Zap,
      title: "Scalable Architecture",
      description:
        "Modular design with 34 collections across 9 functional modules, enabling independent scaling and maintenance.",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description:
        "7-tier role-based access control with granular field-level permissions and comprehensive audit trails.",
    },
  ]

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm print:break-before-avoid print:border-0 print:p-0 print:shadow-none">
      <h2 className="flex items-center gap-2 text-xl font-bold text-slate-900">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100 text-sm font-bold text-emerald-600">
          1
        </span>
        Executive Summary
      </h2>

      <div className="mt-6 rounded-xl bg-slate-50 p-6 print:bg-slate-100/50">
        <p className="text-base leading-relaxed text-slate-700">
          The <strong>Swibba Marketplace</strong> database schema is a comprehensive, production-ready architecture
          designed to power a multi-modal commerce platform. It enables users to
          <strong> buy, sell, rent, and swap</strong> products through both individual accounts and business
          storefronts. The schema is built on <strong>Directus CMS</strong>, extending its core user system with 33
          custom collections to deliver a complete marketplace solution.
        </p>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {highlights.map((item) => (
          <div
            key={item.title}
            className="rounded-xl border border-slate-100 bg-slate-50/50 p-5 print:border-slate-200"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100">
              <item.icon className="h-5 w-5 text-emerald-600" />
            </div>
            <h3 className="mt-4 font-semibold text-slate-900">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h3 className="font-semibold text-slate-900">Key Capabilities</h3>
        <ul className="mt-4 grid gap-3 md:grid-cols-2">
          {[
            "Individual and business seller accounts with verification",
            "Multi-store management for business users",
            "Hierarchical product categories with dynamic attributes",
            "Brand and model management with official representatives",
            "Flexible pricing for sales, hourly/daily/weekly rentals",
            "Swap transactions with multi-item support and cash differences",
            "Real-time messaging and offer negotiation",
            "Comprehensive review system for products, users, and stores",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
              <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-500" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
