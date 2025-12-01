import { Clock, Calendar, Users, Zap, CheckCircle2, AlertCircle } from "lucide-react"

export function ProjectTimeline() {
  const phases = [
    {
      phase: "Phase 1: Foundation",
      duration: "4 weeks",
      startWeek: 1,
      endWeek: 4,
      color: "bg-blue-500",
      tasks: [
        { name: "Directus Setup & Configuration", days: 3 },
        { name: "Database Schema Implementation", days: 5 },
        { name: "Roles & Permissions Setup", days: 4 },
        { name: "Next.js Project Setup", days: 2 },
        { name: "Authentication System", days: 5 },
        { name: "Base UI Components", days: 5 },
      ],
    },
    {
      phase: "Phase 2: Core Marketplace",
      duration: "6 weeks",
      startWeek: 5,
      endWeek: 10,
      color: "bg-emerald-500",
      tasks: [
        { name: "Product Listing & Detail Pages", days: 8 },
        { name: "Category & Brand Navigation", days: 5 },
        { name: "Search & Filtering", days: 6 },
        { name: "User Dashboard", days: 5 },
        { name: "Product Management (CRUD)", days: 7 },
        { name: "Image/Video Upload System", days: 4 },
      ],
    },
    {
      phase: "Phase 3: Transactions",
      duration: "5 weeks",
      startWeek: 11,
      endWeek: 15,
      color: "bg-violet-500",
      tasks: [
        { name: "Offer System (Purchase/Rent/Swap)", days: 8 },
        { name: "Order Management", days: 6 },
        { name: "Rental System & Calendar", days: 6 },
        { name: "Swap Transaction Flow", days: 5 },
        { name: "Payment Integration", days: 5 },
      ],
    },
    {
      phase: "Phase 4: Communication",
      duration: "3 weeks",
      startWeek: 16,
      endWeek: 18,
      color: "bg-amber-500",
      tasks: [
        { name: "Messaging System", days: 6 },
        { name: "Notification System", days: 4 },
        { name: "Email Templates", days: 3 },
        { name: "Push Notifications", days: 3 },
      ],
    },
    {
      phase: "Phase 5: Business Features",
      duration: "4 weeks",
      startWeek: 19,
      endWeek: 22,
      color: "bg-rose-500",
      tasks: [
        { name: "Business Profile Management", days: 4 },
        { name: "Store Management", days: 6 },
        { name: "Analytics Dashboard", days: 5 },
        { name: "Promotions System", days: 4 },
        { name: "Brand Representative Portal", days: 4 },
      ],
    },
    {
      phase: "Phase 6: Admin & Polish",
      duration: "4 weeks",
      startWeek: 23,
      endWeek: 26,
      color: "bg-slate-500",
      tasks: [
        { name: "Admin Dashboard", days: 5 },
        { name: "Moderation Tools", days: 5 },
        { name: "Reports & Disputes", days: 4 },
        { name: "SEO Optimization", days: 3 },
        { name: "Performance Optimization", days: 4 },
        { name: "Testing & Bug Fixes", days: 7 },
      ],
    },
  ]

  const summary = {
    totalWeeks: 26,
    totalMonths: 6.5,
    backendWeeks: 8,
    frontendWeeks: 18,
    teamSize: {
      backend: 2,
      frontend: 3,
      design: 1,
      qa: 1,
    },
  }

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm print:break-before-page print:border-0 print:p-0 print:shadow-none">
      <h2 className="flex items-center gap-2 text-xl font-bold text-slate-900">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-100 text-sm font-bold text-amber-600">
          7
        </span>
        Project Timeline & Estimation
      </h2>

      {/* Summary Cards */}
      <div className="mt-6 grid gap-4 md:grid-cols-4">
        <div className="rounded-xl border-2 border-emerald-200 bg-emerald-50 p-5">
          <Calendar className="h-8 w-8 text-emerald-600" />
          <p className="mt-3 text-2xl font-bold text-emerald-700">{summary.totalWeeks} Weeks</p>
          <p className="text-sm text-emerald-600">{summary.totalMonths} Months Total</p>
        </div>
        <div className="rounded-xl border border-slate-200 p-5">
          <Clock className="h-8 w-8 text-blue-600" />
          <p className="mt-3 text-2xl font-bold text-slate-900">{summary.backendWeeks} Weeks</p>
          <p className="text-sm text-slate-500">Backend Development</p>
        </div>
        <div className="rounded-xl border border-slate-200 p-5">
          <Zap className="h-8 w-8 text-violet-600" />
          <p className="mt-3 text-2xl font-bold text-slate-900">{summary.frontendWeeks} Weeks</p>
          <p className="text-sm text-slate-500">Frontend Development</p>
        </div>
        <div className="rounded-xl border border-slate-200 p-5">
          <Users className="h-8 w-8 text-amber-600" />
          <p className="mt-3 text-2xl font-bold text-slate-900">7 People</p>
          <p className="text-sm text-slate-500">Recommended Team</p>
        </div>
      </div>

      {/* Team Breakdown */}
      <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
        <h3 className="font-semibold text-slate-900">Recommended Team Composition</h3>
        <div className="mt-3 flex flex-wrap gap-3">
          <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
            2x Backend Developers
          </span>
          <span className="rounded-full bg-violet-100 px-3 py-1 text-sm font-medium text-violet-700">
            3x Frontend Developers
          </span>
          <span className="rounded-full bg-pink-100 px-3 py-1 text-sm font-medium text-pink-700">
            1x UI/UX Designer
          </span>
          <span className="rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-700">1x QA Engineer</span>
        </div>
      </div>

      {/* Gantt-style Timeline */}
      <div className="mt-8">
        <h3 className="font-semibold text-slate-900">Development Phases</h3>
        <div className="mt-4 space-y-3">
          {phases.map((phase) => (
            <div key={phase.phase} className="rounded-xl border border-slate-200 p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`h-3 w-3 rounded-full ${phase.color}`} />
                  <span className="font-medium text-slate-900">{phase.phase}</span>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <span className="text-slate-500">
                    Weeks {phase.startWeek}-{phase.endWeek}
                  </span>
                  <span className="rounded-full bg-slate-100 px-2 py-0.5 font-medium text-slate-700">
                    {phase.duration}
                  </span>
                </div>
              </div>
              {/* Progress Bar */}
              <div className="mt-3 h-2 w-full rounded-full bg-slate-100">
                <div
                  className={`h-2 rounded-full ${phase.color}`}
                  style={{
                    width: `${((phase.endWeek - phase.startWeek + 1) / 26) * 100}%`,
                    marginLeft: `${((phase.startWeek - 1) / 26) * 100}%`,
                  }}
                />
              </div>
              {/* Tasks */}
              <div className="mt-3 flex flex-wrap gap-2">
                {phase.tasks.map((task) => (
                  <span key={task.name} className="rounded bg-slate-100 px-2 py-1 text-xs text-slate-600">
                    {task.name} <span className="font-medium">({task.days}d)</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Milestones */}
      <div className="mt-8 rounded-xl border border-slate-200 bg-gradient-to-r from-slate-50 to-white p-6">
        <h3 className="font-semibold text-slate-900">Key Milestones</h3>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {[
            { week: 4, label: "MVP Backend Ready", icon: CheckCircle2, color: "text-blue-600" },
            { week: 10, label: "Core Marketplace Live", icon: CheckCircle2, color: "text-emerald-600" },
            { week: 15, label: "Full Transaction System", icon: CheckCircle2, color: "text-violet-600" },
            { week: 18, label: "Communication Features", icon: CheckCircle2, color: "text-amber-600" },
            { week: 22, label: "Business Portal Complete", icon: CheckCircle2, color: "text-rose-600" },
            { week: 26, label: "Production Launch", icon: AlertCircle, color: "text-emerald-600" },
          ].map((milestone) => (
            <div
              key={milestone.label}
              className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-3"
            >
              <milestone.icon className={`h-5 w-5 ${milestone.color}`} />
              <div>
                <p className="text-xs text-slate-500">Week {milestone.week}</p>
                <p className="font-medium text-slate-900">{milestone.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
